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
      { speaker: "narration", text: "창가로 비치는 햇살 아래, 그 아이는 조심스럽게 가방을 내려놓았다." },
      { speaker: HEROINE_NAME, expr: "neutral", text: "어... 안녕. 네가 이번에 전학 온 애구나?" },
      { speaker: HEROINE_NAME, expr: "worried", text: "나는 유나야. 잘 부탁해... 이렇게 먼저 말 걸어도 괜찮은 거지?" },
    ],
    choices: [
      {
        text: "반갑게 웃으며 인사한다",
        delta: 5,
        response: [
          { speaker: HEROINE_NAME, expr: "happy", text: "응! 나도 반가워. 잘 부탁해!" },
          { speaker: HEROINE_NAME, expr: "big_smile", text: "왠지 너랑은 잘 지낼 수 있을 것 같아." },
        ],
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
    outro: [
      { speaker: "narration", text: "짧은 인사였지만, 어쩐지 하루 종일 그 목소리가 귓가에 맴돌았다." },
    ],
  },
  {
    id: 2,
    title: "방과 후 대화",
    bg: "hallway",
    intro: [
      { speaker: "narration", text: "수업이 끝나고 복도에서 유나와 마주쳤다." },
      { speaker: HEROINE_NAME, expr: "playful", text: "어? 마침 잘 만났다. 나 지금 매점 가려던 참인데." },
      { speaker: HEROINE_NAME, expr: "neutral", text: "저기, 시간 있으면 같이 갈래?" },
    ],
    moodLine: {
      cold: { speaker: HEROINE_NAME, expr: "worried", text: "...혹시 나랑 있는 거 불편해? 표정이 좀 그래서." },
      neutral: { speaker: HEROINE_NAME, expr: "neutral", text: "오늘따라 기분이 괜찮아 보이네, 너." },
      warm: { speaker: HEROINE_NAME, expr: "happy", text: "요즘 너랑 있으면 시간이 왜 이렇게 빨리 가는지 모르겠어." },
    },
    choices: [
      {
        text: "좋다고 흔쾌히 따라간다",
        delta: 5,
        response: [
          { speaker: HEROINE_NAME, expr: "happy", text: "잘됐다! 가자, 빵 새로 나온 거 있대." },
          { speaker: HEROINE_NAME, expr: "big_smile", text: "역시 이럴 땐 손발이 척척 맞는다니까." },
        ],
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
    outro: [
      { speaker: "narration", text: "별거 아닌 하굣길이었는데, 괜히 발걸음이 가벼워졌다." },
    ],
  },
  {
    id: 3,
    title: "주말 공원",
    bg: "park",
    intro: [
      { speaker: "narration", text: "주말, 공원 산책로에서 우연히 유나를 만났다." },
      { speaker: "narration", text: "이어폰을 낀 채 혼자 걷고 있던 그녀가 먼저 손을 흔들었다." },
      { speaker: HEROINE_NAME, expr: "surprised", text: "어? 여기서 다 만나네. 혼자 산책 나온 거야?" },
      { speaker: HEROINE_NAME, expr: "playful", text: "이것도 인연인데, 그냥 갈 순 없지 않아?" },
    ],
    moodLine: {
      cold: { speaker: HEROINE_NAME, expr: "worried", text: "저번에 좀 서먹했잖아... 오늘은 괜찮은 거지?" },
      neutral: { speaker: HEROINE_NAME, expr: "surprised", text: "진짜 우연이다. 근데 은근 반갑네." },
      warm: { speaker: HEROINE_NAME, expr: "ecstatic", text: "사실 너 만나려나 하고 좀 기대하면서 나왔어. 비밀이야." },
    },
    choices: [
      {
        text: "같이 걷자고 제안한다",
        delta: 6,
        response: [
          { speaker: HEROINE_NAME, expr: "happy", text: "좋아! 나도 마침 심심했었어." },
          { speaker: HEROINE_NAME, expr: "playful", text: "대신 걷는 속도는 내가 정한다, 알았지?" },
        ],
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
    bonusChoice: {
      minAffection: 60,
      text: "💗 슬쩍 손을 잡는다",
      delta: 8,
      response: [{ speaker: HEROINE_NAME, expr: "shy", text: "어... 손, 잡았네. ...싫진 않아." }],
    },
    outro: [
      { speaker: "narration", text: "노을이 지기 시작할 때까지, 두 사람은 공원을 몇 바퀴나 돌았다." },
    ],
  },
  {
    id: 4,
    title: "카페 데이트",
    bg: "cafe",
    intro: [
      { speaker: "narration", text: "유나가 새로 생긴 카페에 같이 가보자고 먼저 연락해왔다." },
      { speaker: "narration", text: "약속 시간보다 일찍 도착한 그녀는 창가 자리에 앉아 손을 흔들었다." },
      { speaker: HEROINE_NAME, expr: "big_smile", text: "여기 디저트가 유명하대! 같이 먹어보자." },
      { speaker: HEROINE_NAME, expr: "playful", text: "내가 미리 자리 맡아놨어. 좋은 자리지?" },
    ],
    moodLine: {
      cold: { speaker: HEROINE_NAME, expr: "expressionless", text: "...와줘서 다행이다. 안 올까 봐 조금 걱정했어." },
      neutral: { speaker: HEROINE_NAME, expr: "playful", text: "오늘 메뉴 내가 다 골랐어. 기대해도 좋아." },
      warm: { speaker: HEROINE_NAME, expr: "shy", text: "둘이 오는 거, 사실 좀 설렜어. 티 안 났으면 좋겠는데." },
    },
    choices: [
      {
        text: "네가 좋아할 만한 걸 골라준다",
        delta: 6,
        response: [
          { speaker: HEROINE_NAME, expr: "love", text: "정말? ...고마워, 너 은근 다정하다." },
          { speaker: HEROINE_NAME, expr: "shy", text: "그, 그런 눈으로 보지 마. 부끄럽잖아." },
        ],
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
    bonusChoice: {
      minAffection: 65,
      text: "💗 다음에 또 단둘이 오자고 약속한다",
      delta: 7,
      response: [{ speaker: HEROINE_NAME, expr: "love", text: "...좋아. 약속이야, 꼭이다." }],
    },
    outro: [
      { speaker: "narration", text: "달콤한 케이크만큼이나, 오늘 하루도 달았다." },
    ],
  },
  {
    id: 5,
    title: "오해",
    bg: "sunset",
    intro: [
      { speaker: "narration", text: "며칠째 연락이 뜸했던 유나가 오늘따라 차가운 표정이다." },
      { speaker: "narration", text: "교실 문 앞에서 기다리고 있던 그녀의 표정이 심상치 않다." },
      { speaker: HEROINE_NAME, expr: "mad", text: "너 요즘 다른 애랑 자주 다니던데. 나한테 할 말 없어?" },
      { speaker: HEROINE_NAME, expr: "sad", text: "...아니다, 그냥 물어본 거야. 신경 쓰지 마." },
    ],
    moodLine: {
      cold: { speaker: HEROINE_NAME, expr: "despair", text: "요즘 우리... 뭔가 어긋난 것 같아서 계속 신경 쓰였어." },
      neutral: { speaker: HEROINE_NAME, expr: "mad", text: "별거 아닐 수도 있는데, 그냥 한 번은 물어보고 싶었어." },
      warm: { speaker: HEROINE_NAME, expr: "worried", text: "이런 거 물어보는 내가 좀 유치하다고 생각할까 봐 걱정했어." },
    },
    choices: [
      {
        text: "오해라고 진심으로 설명한다",
        delta: 4,
        response: [
          { speaker: HEROINE_NAME, expr: "sad", text: "...그랬구나. 미안해, 괜히 의심해서." },
          { speaker: HEROINE_NAME, expr: "worried", text: "다음부턴 그냥 나한테 먼저 물어봐줘." },
        ],
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
    outro: [
      { speaker: "narration", text: "짧은 대화였지만, 마음 한구석이 계속 무거웠다." },
    ],
  },
  {
    id: 6,
    title: "화해",
    bg: "rooftop",
    intro: [
      { speaker: "narration", text: "옥상에서 유나와 둘이 마주 앉았다. 노을이 예쁘게 지고 있다." },
      { speaker: "narration", text: "그녀는 한참을 망설이다가 조심스레 입을 열었다." },
      { speaker: HEROINE_NAME, expr: "worried", text: "저번 일... 아직도 마음에 걸려서. 우리 괜찮은 거지?" },
      { speaker: HEROINE_NAME, expr: "worried", text: "솔직히 말해줘. 나 요즘 좀 불안했어." },
    ],
    moodLine: {
      cold: { speaker: HEROINE_NAME, expr: "sad", text: "솔직히... 요즘 좀 자신 없었어, 우리 사이." },
      neutral: { speaker: HEROINE_NAME, expr: "worried", text: "그냥 확인하고 싶었어. 우리 여전히 괜찮은지." },
      warm: { speaker: HEROINE_NAME, expr: "love", text: "이상하게 너랑 있으면 이런 고민도 별거 아닌 것처럼 느껴져." },
    },
    choices: [
      {
        text: "손을 잡아주며 괜찮다고 말한다",
        delta: 8,
        response: [
          { speaker: HEROINE_NAME, expr: "love", text: "...응. 나도, 좋아해 너." },
          { speaker: HEROINE_NAME, expr: "shy", text: "이 말 하는 데 진짜 오래 걸렸다, 나." },
        ],
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
    bonusChoice: {
      minAffection: 70,
      text: "💗 아무 말 없이 조용히 안아준다",
      delta: 8,
      response: [{ speaker: HEROINE_NAME, expr: "love", text: "...따뜻하다. 조금만 더 이렇게 있자." }],
    },
    outro: [
      { speaker: "narration", text: "노을이 완전히 저물 때까지, 둘은 그 자리에 오래 머물렀다." },
    ],
  },
  {
    id: 7,
    title: "축제, 그리고 고백",
    bg: "festival",
    intro: [
      { speaker: "narration", text: "축제 날 밤, 불꽃놀이가 시작되기 직전이다." },
      { speaker: "narration", text: "사람들의 웅성거림 속에서도, 유나의 목소리만은 또렷하게 들렸다." },
      { speaker: HEROINE_NAME, expr: "shy", text: "저기... 나 사실 너한테 하고 싶은 말이 있었어." },
      { speaker: HEROINE_NAME, expr: "shy", text: "오늘이 아니면 왠지 말 못 할 것 같아서." },
    ],
    moodLine: {
      cold: { speaker: HEROINE_NAME, expr: "worried", text: "사실 오늘 말 못 하고 그냥 넘어갈까도 생각했어." },
      neutral: { speaker: HEROINE_NAME, expr: "shy", text: "이 말 하려고 며칠 동안 연습했다니까, 나." },
      warm: { speaker: HEROINE_NAME, expr: "love", text: "너랑 있으면 이상하게 용기가 나. 그래서 오늘은 꼭 말하려고." },
    },
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
    outro: [
      { speaker: "narration", text: "불꽃이 밤하늘을 수놓는 동안, 두 사람의 이야기는 새로운 페이지로 넘어가고 있었다." },
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
