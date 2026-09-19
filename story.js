// ---------------------------------------------
// 스토리 데이터: 유나와 함께하는 7일간의 이야기
// ---------------------------------------------

const HEROINE_NAME = "유나";
const START_AFFECTION = 30;

const STORY = [
  {
    id: 1,
    title: "첫 만남",
    bg: "classroom",
    intro: [
      { speaker: "narration", text: "새 학기 첫날, 낯선 얼굴이 옆자리에 앉는다." },
      { speaker: HEROINE_NAME, expr: "neutral", text: "어... 안녕. 네가 이번에 전학 온 애구나?" },
    ],
    choices: [
      {
        text: "반갑게 웃으며 인사한다",
        delta: 5,
        response: [{ speaker: HEROINE_NAME, expr: "happy", text: "응! 나도 반가워. 잘 부탁해!" }],
      },
      {
        text: "무뚝뚝하게 고개만 끄덕인다",
        delta: -3,
        response: [{ speaker: HEROINE_NAME, expr: "worried", text: "아... 그, 그래... 낯을 좀 가리나 보네." }],
      },
      {
        text: "장난스럽게 인사한다",
        delta: 3,
        response: [{ speaker: HEROINE_NAME, expr: "playful", text: "풋, 특이한 애네. 마음에 들어." }],
      },
    ],
  },
  {
    id: 2,
    title: "방과 후 대화",
    bg: "hallway",
    intro: [
      { speaker: "narration", text: "수업이 끝나고 복도에서 유나와 마주쳤다." },
      { speaker: HEROINE_NAME, expr: "neutral", text: "저기, 시간 있으면 같이 매점 갈래?" },
    ],
    choices: [
      {
        text: "좋다고 흔쾌히 따라간다",
        delta: 5,
        response: [{ speaker: HEROINE_NAME, expr: "happy", text: "잘됐다! 가자, 빵 새로 나온 거 있대." }],
      },
      {
        text: "숙제가 있다고 거절한다",
        delta: -4,
        response: [{ speaker: HEROINE_NAME, expr: "sad", text: "아... 그렇구나. 그럼 다음에 하자." }],
      },
      {
        text: "네가 사는 거면 간다고 놀린다",
        delta: 4,
        response: [{ speaker: HEROINE_NAME, expr: "flustered", text: "뭐?! 아, 알았어, 내가 살게!" }],
      },
    ],
  },
  {
    id: 3,
    title: "주말 공원",
    bg: "park",
    intro: [
      { speaker: "narration", text: "주말, 공원 산책로에서 우연히 유나를 만났다." },
      { speaker: HEROINE_NAME, expr: "surprised", text: "어? 여기서 다 만나네. 혼자 산책 나온 거야?" },
    ],
    choices: [
      {
        text: "같이 걷자고 제안한다",
        delta: 6,
        response: [{ speaker: HEROINE_NAME, expr: "happy", text: "좋아! 나도 마침 심심했었어." }],
      },
      {
        text: "바쁘다며 지나친다",
        delta: -5,
        response: [{ speaker: HEROINE_NAME, expr: "depressed", text: "...그래, 바쁘면 어쩔 수 없지." }],
      },
      {
        text: "사진을 찍어주겠다고 한다",
        delta: 5,
        response: [{ speaker: HEROINE_NAME, expr: "ecstatic", text: "정말? 나 사진 잘 못 나오는데... 그래도 좋아!" }],
      },
    ],
  },
  {
    id: 4,
    title: "카페 데이트",
    bg: "cafe",
    intro: [
      { speaker: "narration", text: "유나가 새로 생긴 카페에 같이 가보자고 먼저 연락해왔다." },
      { speaker: HEROINE_NAME, expr: "big_smile", text: "여기 디저트가 유명하대! 같이 먹어보자." },
    ],
    choices: [
      {
        text: "네가 좋아할 만한 걸 골라준다",
        delta: 6,
        response: [{ speaker: HEROINE_NAME, expr: "love", text: "정말? ...고마워, 너 은근 다정하다." }],
      },
      {
        text: "다이어트 중이라 안 먹는다고 한다",
        delta: -3,
        response: [{ speaker: HEROINE_NAME, expr: "worried", text: "어... 그럼 나 혼자 먹기 좀 민망한데." }],
      },
      {
        text: "장난으로 케이크를 몰래 뺏어 먹는다",
        delta: 2,
        response: [
          { speaker: HEROINE_NAME, expr: "angry", text: "야! 내 케이크 왜 먹어!" },
          { speaker: HEROINE_NAME, expr: "flustered_shy", text: "...치, 그럼 한 입만 봐준다." },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "오해",
    bg: "sunset",
    intro: [
      { speaker: "narration", text: "며칠째 연락이 뜸했던 유나가 오늘따라 차가운 표정이다." },
      { speaker: HEROINE_NAME, expr: "mad", text: "너 요즘 다른 애랑 자주 다니던데. 나한테 할 말 없어?" },
    ],
    choices: [
      {
        text: "오해라고 진심으로 설명한다",
        delta: 4,
        response: [{ speaker: HEROINE_NAME, expr: "sad", text: "...그랬구나. 미안해, 괜히 의심해서." }],
      },
      {
        text: "그게 무슨 상관이냐고 짜증낸다",
        delta: -10,
        response: [{ speaker: HEROINE_NAME, expr: "despair", text: "...알았어. 이제 신경 안 쓸게." }],
      },
      {
        text: "미안하다며 작은 선물을 건넨다",
        delta: 7,
        response: [
          { speaker: HEROINE_NAME, expr: "surprised", text: "어... 이게 뭐야, 갑자기." },
          { speaker: HEROINE_NAME, expr: "shy", text: "...이런 거 안 사와도 되는데. 바보." },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "화해",
    bg: "rooftop",
    intro: [
      { speaker: "narration", text: "옥상에서 유나와 둘이 마주 앉았다. 노을이 예쁘게 지고 있다." },
      { speaker: HEROINE_NAME, expr: "worried", text: "저번 일... 아직도 마음에 걸려서. 우리 괜찮은 거지?" },
    ],
    choices: [
      {
        text: "손을 잡아주며 괜찮다고 말한다",
        delta: 8,
        response: [{ speaker: HEROINE_NAME, expr: "love", text: "...응. 나도, 좋아해 너." }],
      },
      {
        text: "괜찮다고 무심하게 대답한다",
        delta: -2,
        response: [{ speaker: HEROINE_NAME, expr: "expressionless", text: "...그래." }],
      },
      {
        text: "함께 축제에 가자고 제안한다",
        delta: 6,
        response: [{ speaker: HEROINE_NAME, expr: "ecstatic", text: "정말?! 좋아, 꼭 가자!" }],
      },
    ],
  },
  {
    id: 7,
    title: "축제, 그리고 고백",
    bg: "festival",
    intro: [
      { speaker: "narration", text: "축제 날 밤, 불꽃놀이가 시작되기 직전 유나가 먼저 입을 열었다." },
      { speaker: HEROINE_NAME, expr: "shy", text: "저기... 나 사실 너한테 하고 싶은 말이 있었어." },
    ],
    choices: [
      {
        text: "내가 먼저 고백한다",
        delta: 10,
        response: [{ speaker: HEROINE_NAME, expr: "love", text: "...나도야. 진짜 좋아해, 너." }],
      },
      {
        text: "그냥 친구로 남자고 돌려 말한다",
        delta: -15,
        response: [{ speaker: HEROINE_NAME, expr: "crying", text: "...그렇구나. 알겠어." }],
      },
      {
        text: "장난스럽게 얼버무린다",
        delta: -6,
        response: [{ speaker: HEROINE_NAME, expr: "sad", text: "...역시, 농담이었구나." }],
      },
    ],
  },
];

// 최종 호감도에 따른 엔딩 (min 값이 큰 순서로 검사)
const ENDINGS = [
  {
    min: 85,
    title: "완벽한 연인 엔딩",
    expr: "love",
    desc: "불꽃놀이가 터지는 밤, 두 사람은 서로의 손을 꼭 잡았다. 앞으로도 계속, 함께.",
  },
  {
    min: 65,
    title: "좋은 인연 엔딩",
    expr: "happy",
    desc: "완벽하진 않았지만, 두 사람 사이엔 따뜻한 마음이 남았다. 좋은 시작이다.",
  },
  {
    min: 40,
    title: "애매한 사이 엔딩",
    expr: "worried",
    desc: "가까워진 듯 멀어진 듯, 두 사람의 관계는 아직 정의되지 않았다.",
  },
  {
    min: 0,
    title: "이별 엔딩",
    expr: "crying",
    desc: "유나는 조용히 돌아섰다. 어쩌면 처음부터 마음이 부족했는지도 모른다.",
  },
];

function getEnding(score) {
  for (const e of ENDINGS) {
    if (score >= e.min) return e;
  }
  return ENDINGS[ENDINGS.length - 1];
}
