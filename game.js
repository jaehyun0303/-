// ---------------------------------------------
// 게임 엔진: 대화 진행, 선택지, 호감도, 세이브
// ---------------------------------------------

const SAVE_KEY = "dating_game_7days_save_v1";

let state = { dayIndex: 0, affection: START_AFFECTION };
let currentDay = null;
let currentChoices = [];
let queue = [];
let queuePos = 0;
let mode = "intro"; // 'intro' | 'response' | 'outro'

function getAffectionTier(score) {
  if (score < 40) return "cold";
  if (score >= 70) return "warm";
  return "neutral";
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
  state = { dayIndex: 0, affection: START_AFFECTION };
  saveState();
  el.sprite.src = "assets/expressions/neutral.png";
  showScreen("game-screen");
  loadDay(state.dayIndex);
}

function continueGame() {
  const saved = loadState();
  if (saved) state = saved;
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
  queue = currentDay.intro.slice();
  if (currentDay.moodLine) {
    queue.push(currentDay.moodLine[getAffectionTier(state.affection)]);
  }
  queuePos = 0;
  mode = "intro";

  el.stage.className = "stage bg-" + currentDay.bg;
  el.dayLabel.textContent = "Day " + currentDay.id;
  el.sceneLabel.textContent = currentDay.title;
  el.choicesBox.hidden = true;
  el.dialogueBox.hidden = false;
  el.nextIndicator.classList.remove("hidden");
  updateAffectionUI();
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
    showChoices();
  } else if (mode === "response") {
    if (currentDay.outro && currentDay.outro.length) {
      queue = currentDay.outro.slice();
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
  saveState();
  loadDay(state.dayIndex);
}

function finishGame() {
  const ending = getEnding(state.affection);
  clearState();
  document.getElementById("ending-title").textContent = ending.title;
  document.getElementById("ending-desc").textContent = ending.desc;
  document.getElementById("ending-score").textContent =
    "최종 호감도: " + state.affection + " / 100";
  document.getElementById("ending-sprite").src =
    "assets/expressions/" + ending.expr + ".png";
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

checkContinueVisibility();
