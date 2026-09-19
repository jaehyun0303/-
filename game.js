// ---------------------------------------------
// 게임 엔진: 대화 진행, 선택지, 호감도, 세이브
// ---------------------------------------------

const SAVE_KEY = "dating_game_20days_save_v2";

const BRIDGE_LINES = [
  { speaker: "narration", text: "그렇게 몇 마디를 주고받다가, 그녀가 문득 말을 이었다." },
  { speaker: "narration", text: "잠시 침묵이 흐르다가, 그녀가 다시 입을 열었다." },
  { speaker: "narration", text: "대화가 잠깐 끊긴 사이, 그녀의 표정이 살짝 바뀌었다." },
];

let state = { dayIndex: 0, affection: START_AFFECTION, weather: "clear", location: "classroom", history: [] };
let currentDay = null;
let currentWeather = "clear";
let currentBg = "classroom";
let currentChoices = [];
let queue = [];
let queuePos = 0;
let mode = "intro"; // 'intro' | 'response' | 'outro'
let touchedParts = new Set();
let patCount = 0;
let toastTimer = null;

function getAffectionTier(score) {
  if (score < 40) return "cold";
  if (score >= 70) return "warm";
  return "neutral";
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function rollWeather() {
  return pick(WEATHERS);
}

function rollLocation() {
  return pick(ALL_SCENES);
}

const el = {
  dayLabel: document.getElementById("day-label"),
  sceneLabel: document.getElementById("scene-label"),
  affectionFill: document.getElementById("affection-bar-fill"),
  affectionValue: document.getElementById("affection-value"),
  stage: document.getElementById("stage"),
  sprite: document.getElementById("char-sprite"),
  dialogueBox: document.getElementById("dialogue-box"),
  speakerName: document.getElementById("speaker-name"),
  dialogueText: document.getElementById("dialogue-text"),
  nextIndicator: document.getElementById("next-indicator"),
  choicesBox: document.getElementById("choices-box"),
  continueBtn: document.getElementById("continue-btn"),
  recapGrid: document.getElementById("recap-grid"),
  touchScene: document.getElementById("touch-scene"),
  touchSprite: document.getElementById("touch-sprite"),
  touchToast: document.getElementById("touch-toast"),
  touchContinueBtn: document.getElementById("touch-continue-btn"),
  cheekOverlay: document.getElementById("cheek-pull-overlay"),
};

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function saveState() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (e) {
    /* localStorage unavailable — ignore */
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function clearState() {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch (e) {
    /* ignore */
  }
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function updateAffectionUI() {
  el.affectionFill.style.width = state.affection + "%";
  el.affectionValue.textContent = state.affection;
}

function startNewGame() {
  state = {
    dayIndex: 0,
    affection: START_AFFECTION,
    weather: rollWeather(),
    location: rollLocation(),
    history: [],
  };
  saveState();
  el.sprite.src = "assets/expressions/neutral.png";
  showScreen("game-screen");
  loadDay(state.dayIndex);
}

function continueGame() {
  const saved = loadState();
  if (saved) state = saved;
  if (!state.weather) state.weather = rollWeather();
  if (!state.location) state.location = rollLocation();
  if (!state.history) state.history = [];
  el.sprite.src = "assets/expressions/neutral.png";
  showScreen("game-screen");
  loadDay(state.dayIndex);
}

function loadDay(idx) {
  if (idx >= STORY.length) {
    finishGame();
    return;
  }
  currentDay = STORY[idx];
  const weather = currentDay.forceWeather || state.weather || "clear";
  const bg = currentDay.forceBg || state.location || currentDay.bg || "classroom";
  currentWeather = weather;
  currentBg = bg;

  el.stage.className = "stage bg-" + bg;
  el.stage.style.backgroundImage =
    'url("assets/backgrounds/' + bg + "_" + weather + '.png")';
  el.dayLabel.textContent = "Day " + currentDay.id;
  el.sceneLabel.textContent = currentDay.title;
  el.choicesBox.hidden = true;
  updateAffectionUI();

  queue = currentDay.intro.slice();

  const extras = [];
  if (weather !== "clear" && currentDay.weatherLine && currentDay.weatherLine[weather]) {
    extras.push(pick(currentDay.weatherLine[weather]));
  }
  if (currentDay.moodLine) {
    extras.push(pick(currentDay.moodLine[getAffectionTier(state.affection)]));
  }
  if (extras.length) {
    queue.push(pick(BRIDGE_LINES));
    extras.forEach((line) => queue.push(line));
  }

  queuePos = 0;
  mode = "intro";
  el.dialogueBox.hidden = false;
  el.nextIndicator.classList.remove("hidden");
  showNextLine();
}

function renderLine(line) {
  if (line.speaker === "narration") {
    el.speakerName.style.display = "none";
    el.dialogueText.textContent = line.text;
  } else {
    el.speakerName.style.display = "inline-block";
    el.speakerName.textContent = line.speaker;
    el.dialogueText.textContent = line.text;
  }
  if (line.expr) {
    el.sprite.src = "assets/expressions/" + line.expr + ".png";
    el.sprite.style.animation = "none";
    void el.sprite.offsetWidth;
    el.sprite.style.animation = "";
  }
}

function showNextLine() {
  if (queuePos >= queue.length) {
    onQueueFinished();
    return;
  }
  const line = queue[queuePos];
  queuePos++;
  renderLine(line);
}

function onQueueFinished() {
  if (mode === "intro") {
    showTouchScene();
  } else if (mode === "response") {
    if (currentDay.outroVariants && currentDay.outroVariants.length) {
      queue = pick(currentDay.outroVariants).slice();
      queuePos = 0;
      mode = "outro";
      showNextLine();
    } else {
      advanceDay();
    }
  } else if (mode === "outro") {
    advanceDay();
  }
}

function showTouchScene() {
  touchedParts = new Set();
  patCount = 0;
  el.dialogueBox.hidden = true;
  el.choicesBox.hidden = true;
  el.touchToast.hidden = true;
  el.cheekOverlay.hidden = true;
  el.sprite.style.visibility = "hidden";
  el.touchSprite.src = "assets/poses/" + (currentDay.entrancePose || "idle") + "_front.png";
  el.touchScene.hidden = false;
}

function showToast(text) {
  el.touchToast.textContent = text;
  el.touchToast.hidden = false;
  el.touchToast.style.animation = "none";
  void el.touchToast.offsetWidth;
  el.touchToast.style.animation = "";
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.touchToast.hidden = true;
  }, 1800);
}

function handleTouch(part) {
  const tier = getAffectionTier(state.affection);
  if (part === "head") {
    patCount++;
    const pool = PAT_REACTIONS[tier];
    const reaction = pool[Math.min(patCount, pool.length) - 1];
    showToast(reaction.text);
    if (patCount <= 4) {
      state.affection = clamp(state.affection + 1, 0, 100);
      saveState();
      updateAffectionUI();
    }
    return;
  }
  const pool = TOUCH_REACTIONS[part] && TOUCH_REACTIONS[part][tier];
  if (!pool) return;
  const reaction = pick(pool);
  showToast(reaction.text);
  if (!touchedParts.has(part)) {
    touchedParts.add(part);
    state.affection = clamp(state.affection + 1, 0, 100);
    saveState();
    updateAffectionUI();
  }
}

function startCheekPull() {
  const tier = getAffectionTier(state.affection);
  const reaction = pick(CHEEK_PULL_REACTIONS[tier]);
  el.cheekOverlay.src = "assets/cheekpull/cheekpull_" + reaction.expr + ".png";
  el.cheekOverlay.hidden = false;
  showToast(reaction.text);
  if (!touchedParts.has("cheek")) {
    touchedParts.add("cheek");
    state.affection = clamp(state.affection + 1, 0, 100);
    saveState();
    updateAffectionUI();
  }
}

function endCheekPull() {
  el.cheekOverlay.hidden = true;
}

function showChoices() {
  el.dialogueBox.hidden = true;
  el.choicesBox.hidden = false;
  el.choicesBox.innerHTML = "";

  currentChoices = currentDay.choices.slice();
  const bonus = currentDay.bonusChoice;
  if (bonus && state.affection >= bonus.minAffection) {
    currentChoices.push(bonus);
  }

  currentChoices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn" + (choice === bonus ? " bonus" : "");
    btn.textContent = choice.text;
    btn.addEventListener("click", () => pickChoice(i));
    el.choicesBox.appendChild(btn);
  });
}

function pickChoice(i) {
  const choice = currentChoices[i];
  state.affection = clamp(state.affection + choice.delta, 0, 100);
  state.history.push({
    day: currentDay.id,
    title: currentDay.title,
    bg: currentBg,
    weather: currentWeather,
    choiceText: choice.text,
    delta: choice.delta,
  });
  saveState();
  updateAffectionUI();

  el.choicesBox.hidden = true;
  el.dialogueBox.hidden = false;
  queue = choice.response.slice();
  queuePos = 0;
  mode = "response";
  showNextLine();
}

function advanceDay() {
  state.dayIndex++;
  state.weather = rollWeather();
  state.location = rollLocation();
  saveState();
  loadDay(state.dayIndex);
}

function buildRecap() {
  el.recapGrid.innerHTML = "";
  state.history.forEach((h) => {
    const card = document.createElement("div");
    card.className = "recap-card";
    card.style.backgroundImage =
      'url("assets/backgrounds/' + h.bg + "_" + h.weather + '.png")';

    const content = document.createElement("div");
    content.className = "recap-card-content";

    const dayEl = document.createElement("div");
    dayEl.className = "recap-day";
    dayEl.textContent = "Day " + h.day + " · " + h.title;

    const choiceEl = document.createElement("div");
    choiceEl.className = "recap-choice";
    choiceEl.textContent = h.choiceText;

    const deltaEl = document.createElement("div");
    deltaEl.className = "recap-delta " + (h.delta >= 0 ? "pos" : "neg");
    deltaEl.textContent = (h.delta >= 0 ? "+" : "") + h.delta + " 호감도";

    content.appendChild(dayEl);
    content.appendChild(choiceEl);
    content.appendChild(deltaEl);
    card.appendChild(content);
    el.recapGrid.appendChild(card);
  });
}

function finishGame() {
  const ending = getEnding(state.affection);
  const totalDays = STORY.length;
  document.getElementById("ending-title").textContent = ending.title;
  document.getElementById("ending-desc").textContent = ending.desc;
  document.getElementById("ending-score").textContent =
    totalDays + "일간의 여정 · 최종 호감도: " + state.affection + " / 100";
  document.getElementById("ending-sprite").src =
    "assets/expressions/" + ending.expr + ".png";
  buildRecap();
  clearState();
  showScreen("ending-screen");
}

function checkContinueVisibility() {
  const saved = loadState();
  el.continueBtn.hidden = !saved;
}

// ---------------------------------------------
// 이벤트 바인딩
// ---------------------------------------------
el.dialogueBox.addEventListener("click", showNextLine);
document.getElementById("start-btn").addEventListener("click", startNewGame);
document.getElementById("continue-btn").addEventListener("click", continueGame);
document.getElementById("restart-btn").addEventListener("click", () => {
  clearState();
  showScreen("title-screen");
  checkContinueVisibility();
});
document.querySelectorAll(".hotspot").forEach((btn) => {
  if (btn.dataset.part === "cheek") return;
  btn.addEventListener("click", () => handleTouch(btn.dataset.part));
});
const cheekHotspot = document.querySelector(".hotspot-cheek");
cheekHotspot.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  startCheekPull();
});
cheekHotspot.addEventListener("pointerup", endCheekPull);
cheekHotspot.addEventListener("pointerleave", endCheekPull);
cheekHotspot.addEventListener("pointercancel", endCheekPull);
window.addEventListener("pointerup", endCheekPull);
el.touchContinueBtn.addEventListener("click", () => {
  el.touchScene.hidden = true;
  el.sprite.style.visibility = "visible";
  showChoices();
});

checkContinueVisibility();
