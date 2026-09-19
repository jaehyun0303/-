// ---------------------------------------------
// 스토리 데이터: 유나와 함께하는 7일간의 이야기
// ---------------------------------------------

const HEROINE_NAME = "유나";
const START_AFFECTION = 30;
const WEATHERS = ["clear", "rain", "snow", "cloudy"];
const ALL_SCENES = ["classroom", "hallway", "park", "cafe", "sunset", "rooftop", "festival"];

// 터치 인터랙션: 부위별 반응 (매일 랜덤으로 하나씩 고른다)
const TOUCH_REACTIONS = {
  head: [
    { expr: "bashful", text: "...뭐 하는 거야, 갑자기." },
    { expr: "flustered_deep", text: "어? 머리는 왜 만져..." },
    { expr: "smile_soft", text: "...싫진 않은데, 부끄럽잖아." },
  ],
  cheek: [
    { expr: "flustered_deep", text: "얼굴 만지지 마, 간지럽단 말이야." },
    { expr: "bashful", text: "...왜 자꾸 볼을 콕콕 찔러." },
    { expr: "pouty", text: "야, 그거 은근 아파." },
  ],
  shoulder: [
    { expr: "startled", text: "어? 놀랐잖아, 갑자기." },
    { expr: "smile_soft", text: "...기대도 돼, 이 정도는." },
    { expr: "giddy", text: "왜 자꾸 툭툭 건드려, 신경 쓰이게." },
  ],
  hand: [
    { expr: "shy", text: "...손, 잡고 싶었어?" },
    { expr: "blissful", text: "따뜻하다, 네 손." },
    { expr: "bashful", text: "...누가 보면 어떡해, 그래도 놓진 마." },
  ],
};

// 쓰담쓰담: 연속으로 머리를 쓰다듬을 때 순서대로 나오는 반응
const PAT_REACTIONS = [
  { expr: "bashful", text: "...갑자기 왜 쓰다듬어." },
  { expr: "blissful", text: "...기분 좋은데, 이거." },
  { expr: "enraptured", text: "...더 해줘도 되는데." },
  { expr: "blissful", text: "나 강아지 아닌데, 자꾸 이러기야." },
  { expr: "playful", text: "이제 그만~ 머리 다 눌린다니까." },
];

const STORY = [
  {
    id: 1,
    title: "첫 만남",
    bg: "classroom",
    entrancePose: "idle",
    intro: [
      { speaker: "narration", text: "새 학기 첫날, 낯선 얼굴이 옆자리에 앉는다." },
      { speaker: "narration", text: "창가로 비치는 햇살 아래, 그 아이는 조심스럽게 가방을 내려놓았다." },
      { speaker: HEROINE_NAME, expr: "neutral", text: "어... 안녕. 네가 이번에 전학 온 애구나?" },
      { speaker: HEROINE_NAME, expr: "worried", text: "나는 유나야. 잘 부탁해... 이렇게 먼저 말 걸어도 괜찮은 거지?" },
    ],
    weatherLine: {
      rain: [{ speaker: "narration", text: "창밖에 빗소리가 잔잔하게 깔렸다." }],
      snow: [{ speaker: "narration", text: "창밖으로 눈이 조용히 흩날리고 있었다." }],
      cloudy: [{ speaker: "narration", text: "흐린 하늘 탓인지 교실 안이 유독 차분했다." }],
    },
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
    outroVariants: [
      [{ speaker: "narration", text: "짧은 인사였지만, 어쩐지 하루 종일 그 목소리가 귓가에 맴돌았다." }],
      [{ speaker: "narration", text: "잠들기 전까지도, 오늘 나눈 짧은 대화가 자꾸 떠올랐다." }],
    ],
  },
  {
    id: 2,
    title: "방과 후 대화",
    bg: "hallway",
    entrancePose: "walk",
    intro: [
      { speaker: "narration", text: "수업이 끝나고 복도에서 유나와 마주쳤다." },
      { speaker: HEROINE_NAME, expr: "playful", text: "어? 마침 잘 만났다. 나 지금 매점 가려던 참인데." },
      { speaker: HEROINE_NAME, expr: "neutral", text: "저기, 시간 있으면 같이 갈래?" },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "worried", text: "...혹시 나랑 있는 거 불편해? 표정이 좀 그래서." },
        { speaker: HEROINE_NAME, expr: "sad", text: "요즘 대화가 좀 뜸한 것 같아서... 내가 뭐 잘못했나 싶고." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "neutral", text: "오늘따라 기분이 괜찮아 보이네, 너." },
        { speaker: HEROINE_NAME, expr: "playful", text: "오늘 컨디션 괜찮아 보이네. 다행이다." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "happy", text: "요즘 너랑 있으면 시간이 왜 이렇게 빨리 가는지 모르겠어." },
        { speaker: HEROINE_NAME, expr: "shy", text: "너랑 얘기하는 시간이 요즘 제일 편해, 솔직히." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "worried", text: "비 와서 그런가, 오늘따라 좀 눅눅한 기분이야." }],
      snow: [{ speaker: HEROINE_NAME, expr: "happy", text: "어? 눈 온다! 나 눈 오는 날 진짜 좋아해." }],
      cloudy: [{ speaker: "narration", text: "흐린 날씨 탓인지 복도가 유난히 조용했다." }],
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
    outroVariants: [
      [{ speaker: "narration", text: "별거 아닌 하굣길이었는데, 괜히 발걸음이 가벼워졌다." }],
      [{ speaker: "narration", text: "집에 가는 내내, 별것 아닌 대화가 계속 맴돌았다." }],
    ],
  },
  {
    id: 3,
    title: "주말 공원",
    bg: "park",
    entrancePose: "wave",
    intro: [
      { speaker: "narration", text: "주말, 공원 산책로에서 우연히 유나를 만났다." },
      { speaker: "narration", text: "이어폰을 낀 채 혼자 걷고 있던 그녀가 먼저 손을 흔들었다." },
      { speaker: HEROINE_NAME, expr: "surprised", text: "어? 여기서 다 만나네. 혼자 산책 나온 거야?" },
      { speaker: HEROINE_NAME, expr: "playful", text: "이것도 인연인데, 그냥 갈 순 없지 않아?" },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "worried", text: "저번에 좀 서먹했잖아... 오늘은 괜찮은 거지?" },
        { speaker: HEROINE_NAME, expr: "sad", text: "요즘 좀 데면데면했잖아. 괜히 신경 쓰였어." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "surprised", text: "진짜 우연이다. 근데 은근 반갑네." },
        { speaker: HEROINE_NAME, expr: "happy", text: "타이밍 좋게 만났네. 왠지 오늘 운이 좋은 걸지도." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "ecstatic", text: "사실 너 만나려나 하고 좀 기대하면서 나왔어. 비밀이야." },
        { speaker: HEROINE_NAME, expr: "love", text: "이상하게 너 있는 데는 다 눈에 잘 띄더라. 신기하지." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "worried", text: "비가 와서 우산 없인 못 걸을 것 같은데... 그래도 괜찮아?" }],
      snow: [{ speaker: HEROINE_NAME, expr: "ecstatic", text: "눈 쌓인 공원 처음 봐! 완전 예쁘다." }],
      cloudy: [{ speaker: HEROINE_NAME, expr: "neutral", text: "날이 좀 흐리긴 한데, 산책하기엔 나쁘지 않네." }],
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
    outroVariants: [
      [{ speaker: "narration", text: "노을이 지기 시작할 때까지, 두 사람은 공원을 몇 바퀴나 돌았다." }],
      [{ speaker: "narration", text: "공원을 나서면서도, 왠지 자꾸 뒤를 돌아보게 됐다." }],
    ],
  },
  {
    id: 4,
    title: "카페 데이트",
    bg: "cafe",
    entrancePose: "wave",
    intro: [
      { speaker: "narration", text: "유나가 새로 생긴 카페에 같이 가보자고 먼저 연락해왔다." },
      { speaker: "narration", text: "약속 시간보다 일찍 도착한 그녀는 창가 자리에 앉아 손을 흔들었다." },
      { speaker: HEROINE_NAME, expr: "big_smile", text: "여기 디저트가 유명하대! 같이 먹어보자." },
      { speaker: HEROINE_NAME, expr: "playful", text: "내가 미리 자리 맡아놨어. 좋은 자리지?" },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "expressionless", text: "...와줘서 다행이다. 안 올까 봐 조금 걱정했어." },
        { speaker: HEROINE_NAME, expr: "worried", text: "혹시 억지로 나온 거 아니지? 그런 거면 말해줘." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "playful", text: "오늘 메뉴 내가 다 골랐어. 기대해도 좋아." },
        { speaker: HEROINE_NAME, expr: "happy", text: "오늘 분위기 괜찮다. 여기 자주 오자." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "shy", text: "둘이 오는 거, 사실 좀 설렜어. 티 안 났으면 좋겠는데." },
        { speaker: HEROINE_NAME, expr: "love", text: "너랑 마주 앉아있으면 이상하게 마음이 편해." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "shy", text: "이렇게 비 오는 날 카페에 있으니까 왠지 아늑하다." }],
      snow: [{ speaker: HEROINE_NAME, expr: "happy", text: "창밖에 눈 오는 거 보면서 마시는 커피, 진짜 낭만적이지 않아?" }],
      cloudy: [{ speaker: "narration", text: "창밖은 흐렸지만, 카페 안은 따뜻한 불빛으로 가득했다." }],
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
    outroVariants: [
      [{ speaker: "narration", text: "달콤한 케이크만큼이나, 오늘 하루도 달았다." }],
      [{ speaker: "narration", text: "카페를 나설 때까지도, 웃음이 가시질 않았다." }],
    ],
  },
  {
    id: 5,
    title: "오해",
    bg: "sunset",
    entrancePose: "idle",
    intro: [
      { speaker: "narration", text: "며칠째 연락이 뜸했던 유나가 오늘따라 차가운 표정이다." },
      { speaker: "narration", text: "교실 문 앞에서 기다리고 있던 그녀의 표정이 심상치 않다." },
      { speaker: HEROINE_NAME, expr: "mad", text: "너 요즘 다른 애랑 자주 다니던데. 나한테 할 말 없어?" },
      { speaker: HEROINE_NAME, expr: "sad", text: "...아니다, 그냥 물어본 거야. 신경 쓰지 마." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "despair", text: "요즘 우리... 뭔가 어긋난 것 같아서 계속 신경 쓰였어." },
        { speaker: HEROINE_NAME, expr: "despair", text: "요 며칠 계속 이런 생각만 했어. 나만 그런가 싶어서." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "mad", text: "별거 아닐 수도 있는데, 그냥 한 번은 물어보고 싶었어." },
        { speaker: HEROINE_NAME, expr: "mad", text: "그냥 넘어갈까 했는데, 역시 말은 해야겠더라." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "worried", text: "이런 거 물어보는 내가 좀 유치하다고 생각할까 봐 걱정했어." },
        { speaker: HEROINE_NAME, expr: "worried", text: "별일 아니라고 생각하면서도 자꾸 마음이 쓰였어." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: "narration", text: "부슬비가 내리는 탓인지, 공기가 유독 무겁게 느껴졌다." }],
      snow: [{ speaker: HEROINE_NAME, expr: "sad", text: "눈이 오는데도... 지금은 하나도 안 예뻐 보이네." }],
      cloudy: [{ speaker: "narration", text: "흐린 하늘이 지금 이 분위기와 꼭 닮아 있었다." }],
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
    outroVariants: [
      [{ speaker: "narration", text: "짧은 대화였지만, 마음 한구석이 계속 무거웠다." }],
      [{ speaker: "narration", text: "집에 돌아가는 길, 오늘 나눈 말들을 몇 번이고 곱씹었다." }],
    ],
  },
  {
    id: 6,
    title: "화해",
    bg: "rooftop",
    entrancePose: "sit",
    intro: [
      { speaker: "narration", text: "옥상에서 유나와 둘이 마주 앉았다. 노을이 예쁘게 지고 있다." },
      { speaker: "narration", text: "그녀는 한참을 망설이다가 조심스레 입을 열었다." },
      { speaker: HEROINE_NAME, expr: "worried", text: "저번 일... 아직도 마음에 걸려서. 우리 괜찮은 거지?" },
      { speaker: HEROINE_NAME, expr: "worried", text: "솔직히 말해줘. 나 요즘 좀 불안했어." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "sad", text: "솔직히... 요즘 좀 자신 없었어, 우리 사이." },
        { speaker: HEROINE_NAME, expr: "sad", text: "요즘 계속 혼자 마음 졸였던 것 같아, 사실은." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "worried", text: "그냥 확인하고 싶었어. 우리 여전히 괜찮은지." },
        { speaker: HEROINE_NAME, expr: "worried", text: "그냥 한 번은 제대로 얘기하고 싶었어, 우리." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "love", text: "이상하게 너랑 있으면 이런 고민도 별거 아닌 것처럼 느껴져." },
        { speaker: HEROINE_NAME, expr: "love", text: "너랑 있으면 별거 아닌 걱정도 다 사라지는 기분이야." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "worried", text: "비가 그쳐서 다행이야. 안 그랬으면 여기 못 왔을 텐데." }],
      snow: [{ speaker: HEROINE_NAME, expr: "love", text: "눈 내리는 옥상이라니, 왠지 오늘 좀 특별하게 느껴진다." }],
      cloudy: [{ speaker: "narration", text: "구름이 낮게 깔린 하늘 아래, 옥상은 유난히 고요했다." }],
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
    outroVariants: [
      [{ speaker: "narration", text: "노을이 완전히 저물 때까지, 둘은 그 자리에 오래 머물렀다." }],
      [{ speaker: "narration", text: "완전히 어두워질 때까지, 둘 다 자리를 뜨지 못했다." }],
    ],
  },
  {
    id: 7,
    title: "축제, 그리고 고백",
    bg: "festival",
    forceBg: "festival",
    entrancePose: "idle",
    intro: [
      { speaker: "narration", text: "축제 날 밤, 불꽃놀이가 시작되기 직전이다." },
      { speaker: "narration", text: "사람들의 웅성거림 속에서도, 유나의 목소리만은 또렷하게 들렸다." },
      { speaker: HEROINE_NAME, expr: "shy", text: "저기... 나 사실 너한테 하고 싶은 말이 있었어." },
      { speaker: HEROINE_NAME, expr: "shy", text: "오늘이 아니면 왠지 말 못 할 것 같아서." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "worried", text: "사실 오늘 말 못 하고 그냥 넘어갈까도 생각했어." },
        { speaker: HEROINE_NAME, expr: "worried", text: "이 말, 몇 번이나 하려다 그만뒀는지 몰라." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "shy", text: "이 말 하려고 며칠 동안 연습했다니까, 나." },
        { speaker: HEROINE_NAME, expr: "shy", text: "심장이 왜 이렇게 뛰는지 모르겠다, 지금." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "love", text: "너랑 있으면 이상하게 용기가 나. 그래서 오늘은 꼭 말하려고." },
        { speaker: HEROINE_NAME, expr: "love", text: "너라서 오늘 이 말을 할 용기가 났어." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "worried", text: "비 오는데 불꽃놀이 볼 수 있을까 걱정했는데, 다행히 그쳤나 봐." }],
      snow: [{ speaker: HEROINE_NAME, expr: "ecstatic", text: "눈 오는 축제라니, 완전 동화 같다!" }],
      cloudy: [{ speaker: "narration", text: "구름 낀 밤하늘이었지만, 축제의 불빛만은 선명하게 빛났다." }],
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
    outroVariants: [
      [
        { speaker: "narration", text: "불꽃이 밤하늘을 수놓는 동안, 두 사람의 이야기는 새로운 페이지로 넘어가고 있었다." },
        { speaker: "narration", text: "그날 이후, 두 사람은 굳이 말하지 않아도 자연스럽게 연인이 되어 있었다." },
      ],
      [
        { speaker: "narration", text: "불꽃놀이의 마지막 빛이 사그라들 때까지, 두 사람은 그 자리에 서 있었다." },
        { speaker: "narration", text: "그날 이후, 두 사람은 굳이 말하지 않아도 자연스럽게 연인이 되어 있었다." },
      ],
    ],
  },
  {
    id: 8,
    title: "연인이 된 첫날",
    bg: "classroom",
    entrancePose: "wave",
    intro: [
      { speaker: "narration", text: "고백을 주고받은 다음 날, 두 사람은 어느새 연인이 되어 있었다." },
      { speaker: "narration", text: "교실 문을 열자마자, 유나가 먼저 손을 흔들며 다가왔다." },
      { speaker: HEROINE_NAME, expr: "giddy", text: "안녕! ...아직도 좀 실감이 안 나. 우리 사귀는 거 맞지?" },
      { speaker: HEROINE_NAME, expr: "bashful", text: "그, 이제 뭐라고 불러야 되는 거야? 아직 이름 부르는 것도 어색한데." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "blank_stare", text: "...어제 일, 그냥 없던 걸로 하고 싶은 건 아니지?" },
        { speaker: HEROINE_NAME, expr: "anxious", text: "혹시 마음 바뀐 거면 지금 말해줘도 돼." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "smile_soft", text: "아직 실감은 안 나지만, 나쁘지 않은 기분이야." },
        { speaker: HEROINE_NAME, expr: "pondering", text: "연인이 되면 뭐가 달라지나... 궁금하긴 하다." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "adoring", text: "눈 뜨자마자 네 생각부터 났어. 원래 이런 거야?" },
        { speaker: HEROINE_NAME, expr: "blissful", text: "오늘따라 모든 게 다 좋아 보여. 너 때문인가." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "afraid", text: "비 오는 날 시작하는 첫날이라니, 조금 청승맞나?" }],
      snow: [{ speaker: HEROINE_NAME, expr: "joyful", text: "눈 오는 날 커플 됐다니, 왠지 계속 기억날 것 같아." }],
      cloudy: [{ speaker: "narration", text: "흐린 하늘이었지만, 교실 안 공기는 유독 따뜻했다." }],
    },
    choices: [
      {
        text: "손을 잡고 교실로 들어간다",
        delta: 5,
        response: [
          { speaker: HEROINE_NAME, expr: "bashful", text: "어... 사람들 보는데." },
          { speaker: HEROINE_NAME, expr: "giddy", text: "...그래도 싫지 않아." },
        ],
      },
      {
        text: "평소처럼 무심하게 대한다",
        delta: -4,
        response: [{ speaker: HEROINE_NAME, expr: "pouty", text: "...사귀기 전이랑 똑같네, 치." }],
      },
      {
        text: "장난스럽게 '자기야'라고 불러본다",
        delta: 6,
        response: [
          { speaker: HEROINE_NAME, expr: "flustered_deep", text: "뭐?! 갑자기 그렇게 부르면 어떡해!" },
          { speaker: HEROINE_NAME, expr: "bashful", text: "...근데 또 나쁘진 않네." },
        ],
      },
    ],
    bonusChoice: {
      minAffection: 72,
      text: "💗 이마에 살짝 입을 맞춘다",
      delta: 9,
      response: [
        { speaker: HEROINE_NAME, expr: "flinch", text: "어...!" },
        { speaker: HEROINE_NAME, expr: "blissful", text: "...기습이네. 그래도, 좋다." },
      ],
    },
    outroVariants: [
      [{ speaker: "narration", text: "사귄다는 것도, 생각보다 별거 아니면서 또 특별했다." }],
      [{ speaker: "narration", text: "평범한 등굣길이 오늘따라 유독 반짝여 보였다." }],
    ],
  },
  {
    id: 9,
    title: "매점 데이트",
    bg: "hallway",
    entrancePose: "walk",
    intro: [
      { speaker: "narration", text: "점심시간, 유나가 먼저 매점에 가자며 팔을 잡아끌었다." },
      { speaker: HEROINE_NAME, expr: "eager", text: "오늘의 메뉴 정했어. 같이 나눠 먹자." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "aloof", text: "...요즘 좀 바빴어? 연락이 뜸해서." },
        { speaker: HEROINE_NAME, expr: "weary", text: "매일 붙어 있던 거 아니었나 싶어서, 요즘은." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "smile_soft", text: "이런 소소한 시간이 은근 제일 좋더라." },
        { speaker: HEROINE_NAME, expr: "giddy", text: "오늘은 뭔가 컨디션이 좋아, 이상하게." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "adoring", text: "이런 시간이 매일 있었으면 좋겠어, 솔직히." },
        { speaker: HEROINE_NAME, expr: "enamored", text: "너랑 있으면 별거 아닌 매점 가는 것도 재밌어." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "bored", text: "비 오는 날은 매점 가기도 귀찮은데, 너랑 가면 또 괜찮네." }],
      snow: [{ speaker: HEROINE_NAME, expr: "joyful", text: "눈 오는 거 보면서 먹는 간식이 제일 맛있어." }],
      cloudy: [{ speaker: "narration", text: "흐린 하늘 아래, 매점 앞은 평소보다 한산했다." }],
    },
    choices: [
      {
        text: "네가 좋아하는 걸로 나눠준다",
        delta: 5,
        response: [{ speaker: HEROINE_NAME, expr: "blissful", text: "오, 내 취향 아네. 점점 마음에 든다." }],
      },
      {
        text: "내 것만 산다",
        delta: -3,
        response: [{ speaker: HEROINE_NAME, expr: "pouty", text: "...치사하게 혼자만 먹기야?" }],
      },
      {
        text: "장난으로 다 먹은 척한다",
        delta: 3,
        response: [
          { speaker: HEROINE_NAME, expr: "gasp", text: "야! 진짜 다 먹은 줄 알았잖아!" },
          { speaker: HEROINE_NAME, expr: "laugh", text: "...장난치는 거 은근 많이 늘었다, 너." },
        ],
      },
    ],
    outroVariants: [
      [{ speaker: "narration", text: "별거 아닌 점심시간이 오늘따라 유독 길게 느껴졌다, 좋은 의미로." }],
      [{ speaker: "narration", text: "매점 봉지 하나에도 웃음이 끊이지 않는 하루였다." }],
    ],
  },
  {
    id: 10,
    title: "첫 다툼",
    bg: "park",
    entrancePose: "idle",
    intro: [
      { speaker: "narration", text: "공원 벤치에서 만나기로 했는데, 유나가 먼저 와서 팔짱을 낀 채 앉아 있었다." },
      { speaker: HEROINE_NAME, expr: "pouty", text: "...늦었네. 오늘따라 왜 이렇게 늦어?" },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "hopeless", text: "요즘 나만 더 좋아하는 것 같아서, 솔직히 좀 지쳐." },
        { speaker: HEROINE_NAME, expr: "sorrow", text: "자꾸 이런 식이면... 나도 지치는 거 알지?" },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "pouty", text: "그냥, 요즘 좀 서운한 게 쌓였나 봐." },
        { speaker: HEROINE_NAME, expr: "anxious", text: "별거 아닌데 괜히 예민해졌나 봐, 나도." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "anxious", text: "이런 걸로 투정 부리는 내가 유치하지... 그래도 서운한 건 서운한 거야." },
        { speaker: HEROINE_NAME, expr: "pouty", text: "좋아하니까 더 서운한 거야, 알지?" },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "sorrow", text: "비까지 오니까 기분이 더 가라앉네." }],
      snow: [{ speaker: HEROINE_NAME, expr: "hopeless", text: "눈이 오는데도 하나도 안 예뻐 보이는 날이 있구나." }],
      cloudy: [{ speaker: "narration", text: "흐린 하늘처럼, 그녀의 표정도 쉽게 개지 않았다." }],
    },
    choices: [
      {
        text: "미안하다고 진심으로 사과한다",
        delta: 6,
        response: [
          { speaker: HEROINE_NAME, expr: "relieved", text: "...알았어. 다음부턴 늦으면 꼭 연락해." },
          { speaker: HEROINE_NAME, expr: "smile_soft", text: "그래도 이렇게 바로 사과하는 거, 마음에 들어." },
        ],
      },
      {
        text: "별거 아닌 걸로 왜 그러냐고 짜증낸다",
        delta: -12,
        response: [{ speaker: HEROINE_NAME, expr: "weeping", text: "...별거 아니라고? 나한텐 별거였는데." }],
      },
      {
        text: "장미꽃 한 송이를 꺼내 보인다",
        delta: 8,
        response: [
          { speaker: HEROINE_NAME, expr: "gasp", text: "어? 이걸 언제 샀대..." },
          { speaker: HEROINE_NAME, expr: "blissful", text: "...치사하게 이런 걸로 풀어지게 만들고." },
        ],
      },
    ],
    outroVariants: [
      [{ speaker: "narration", text: "작은 다툼이었지만, 둘 다 그날 밤 서로를 오래 생각했다." }],
      [{ speaker: "narration", text: "화해까지 시간이 좀 걸렸지만, 그마저도 연애의 일부였다." }],
    ],
  },
  {
    id: 11,
    title: "화해의 카페",
    bg: "cafe",
    entrancePose: "sit",
    intro: [
      { speaker: "narration", text: "다음 날, 유나가 먼저 카페에서 보자고 연락해왔다." },
      { speaker: HEROINE_NAME, expr: "anxious", text: "어제는... 나도 좀 심했나 싶어서." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "sorrow", text: "우리 진짜 괜찮은 거지? 자꾸 확인하고 싶어져." },
        { speaker: HEROINE_NAME, expr: "weary", text: "싸운 다음엔 항상 이렇게 마음이 복잡해." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "smile_soft", text: "그래도 이렇게 다시 마주 앉으니까 마음이 놓인다." },
        { speaker: HEROINE_NAME, expr: "relieved", text: "다행이다, 어색하지 않아서." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "adoring", text: "싸워도 결국 또 이렇게 만나게 되네, 우리." },
        { speaker: HEROINE_NAME, expr: "enamored", text: "화해하고 나니까 오히려 더 가까워진 기분이야." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "relieved", text: "비 오는데 나와줘서 고마워, 사실." }],
      snow: [{ speaker: HEROINE_NAME, expr: "joyful", text: "눈 오는 날 화해라니, 왠지 낭만적이다." }],
      cloudy: [{ speaker: "narration", text: "흐린 하늘 아래서도, 카페 안은 따뜻했다." }],
    },
    choices: [
      {
        text: "손을 잡고 미안하다고 말한다",
        delta: 7,
        response: [{ speaker: HEROINE_NAME, expr: "blissful", text: "...나도 미안해. 우리 앞으로 이런 걸로 싸우지 말자." }],
      },
      {
        text: "아무 일도 없었던 것처럼 넘어간다",
        delta: -2,
        response: [{ speaker: HEROINE_NAME, expr: "pouty", text: "...그렇게 넘어가는 거, 나는 좀 서운한데." }],
      },
      {
        text: "직접 쓴 편지를 건넨다",
        delta: 9,
        response: [
          { speaker: HEROINE_NAME, expr: "gasp", text: "이런 것까지... 진짜 감동이야." },
          { speaker: HEROINE_NAME, expr: "weeping", text: "...나 지금 울 것 같은데, 좋은 쪽으로." },
        ],
      },
    ],
    bonusChoice: {
      minAffection: 68,
      text: "💗 오늘 하루 종일 함께 있자고 제안한다",
      delta: 6,
      response: [{ speaker: HEROINE_NAME, expr: "giddy", text: "진짜? 좋아, 오늘 하루 다 너한테 쓸게." }],
    },
    outroVariants: [
      [{ speaker: "narration", text: "화해의 순간은 언제나 다툼보다 더 오래 마음에 남았다." }],
      [{ speaker: "narration", text: "둘은 그날, 싸우는 법보다 화해하는 법을 하나 더 배웠다." }],
    ],
  },
  {
    id: 12,
    title: "친구들에게 소개",
    bg: "classroom",
    entrancePose: "wave",
    intro: [
      { speaker: "narration", text: "쉬는 시간, 유나의 친구들이 몰려와 짓궂게 놀리기 시작했다." },
      { speaker: HEROINE_NAME, expr: "flustered_deep", text: "얘들아, 그만 좀... 다 보고 있잖아." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "anxious", text: "친구들 앞이라 그런가, 괜히 더 의식하게 되네." },
        { speaker: HEROINE_NAME, expr: "aloof", text: "사람들 있을 땐 너무 티 내지 않았으면 좋겠어, 솔직히." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "bashful", text: "이렇게 다 같이 놀림 받는 것도 은근 재밌긴 하다." },
        { speaker: HEROINE_NAME, expr: "smile_soft", text: "친구들도 우리 잘 어울린다고 하더라." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "giddy", text: "친구들 앞에서도 네 손 잡는 거, 이제 하나도 안 부끄러워." },
        { speaker: HEROINE_NAME, expr: "eager", text: "자랑하고 싶어서 일부러 더 붙어 다니는 거, 티 났어?" },
      ],
    },
    weatherLine: {
      rain: [{ speaker: "narration", text: "창밖 빗소리 사이로, 친구들의 웃음소리가 섞여 들렸다." }],
      snow: [{ speaker: HEROINE_NAME, expr: "joyful", text: "밖에 눈 온다고 친구들이 난리인데, 나가서 놀고 싶다." }],
      cloudy: [{ speaker: "narration", text: "흐린 날씨에도 교실 안은 웃음소리로 가득했다." }],
    },
    choices: [
      {
        text: "친구들 앞에서 당당하게 손을 잡는다",
        delta: 7,
        response: [
          { speaker: HEROINE_NAME, expr: "bashful", text: "...뭐야, 갑자기 용감해졌네." },
          { speaker: HEROINE_NAME, expr: "blissful", text: "근데 싫지 않아, 그런 너." },
        ],
      },
      {
        text: "괜히 눈치 보며 거리를 둔다",
        delta: -5,
        response: [{ speaker: HEROINE_NAME, expr: "sorrow", text: "...나만 좋아하는 것처럼 느껴지게 하지 마." }],
      },
      {
        text: "친구들에게 장난스럽게 맞받아친다",
        delta: 5,
        response: [
          { speaker: HEROINE_NAME, expr: "laugh", text: "야, 너네가 더 유난이야!" },
          { speaker: HEROINE_NAME, expr: "giddy", text: "...근데 좀 웃기긴 했어, 인정." },
        ],
      },
    ],
    outroVariants: [
      [{ speaker: "narration", text: "놀림 반, 축하 반이었지만, 나쁘지 않은 하루였다." }],
      [{ speaker: "narration", text: "친구들 앞에서 인정받은 사이라는 게, 묘하게 든든했다." }],
    ],
  },
  {
    id: 13,
    title: "시험 기간",
    bg: "hallway",
    entrancePose: "sit",
    intro: [
      { speaker: "narration", text: "시험 기간이 다가오자, 복도에서 마주친 유나의 얼굴에 피곤이 가득했다." },
      { speaker: HEROINE_NAME, expr: "fatigued", text: "어제 3시까지 공부하다 잤어... 눈이 안 떠져." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "weary", text: "요즘 공부한다고 너한테 너무 소홀했나 싶어서 미안해." },
        { speaker: HEROINE_NAME, expr: "anxious", text: "성적 떨어지면 어떡하지... 요즘 그 생각뿐이야." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "yawning", text: "그래도 너 보니까 잠이 좀 깨는 것 같기도 하고." },
        { speaker: HEROINE_NAME, expr: "drowsy", text: "공부하다가도 자꾸 딴생각나서 큰일이야." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "adoring", text: "힘든 시기에 네가 있어서 그나마 버틸 만해." },
        { speaker: HEROINE_NAME, expr: "blissful", text: "피곤한데도 너 보면 이상하게 기운이 나." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "weary", text: "비 오는 날 시험공부라니, 더 처지는 기분이야." }],
      snow: [{ speaker: HEROINE_NAME, expr: "pondering", text: "눈 오는 거 보면서 공부하면 집중이 좀 될까 싶었는데, 아니더라." }],
      cloudy: [{ speaker: "narration", text: "흐린 하늘만큼이나, 복도 분위기도 나른했다." }],
    },
    choices: [
      {
        text: "같이 공부하자고 제안한다",
        delta: 6,
        response: [
          { speaker: HEROINE_NAME, expr: "relieved", text: "진짜? 혼자 하는 것보다 훨씬 나을 것 같아." },
          { speaker: HEROINE_NAME, expr: "smile_soft", text: "역시 같이 하니까 덜 힘드네." },
        ],
      },
      {
        text: "시험 끝나고 보자며 거리를 둔다",
        delta: -3,
        response: [{ speaker: HEROINE_NAME, expr: "sorrow", text: "...그래, 바쁘면 어쩔 수 없지 뭐." }],
      },
      {
        text: "에너지 드링크를 몰래 건넨다",
        delta: 5,
        response: [
          { speaker: HEROINE_NAME, expr: "gasp", text: "어? 이런 것도 챙겨줬어?" },
          { speaker: HEROINE_NAME, expr: "giddy", text: "...작은 거 하나에도 감동이다, 요즘." },
        ],
      },
    ],
    outroVariants: [
      [{ speaker: "narration", text: "시험 기간이었지만, 서로를 챙기는 마음만은 흔들리지 않았다." }],
      [{ speaker: "narration", text: "피곤한 하루의 끝에도, 마음 한켠은 따뜻했다." }],
    ],
  },
  {
    id: 14,
    title: "소나기",
    bg: "park",
    forceBg: "park",
    entrancePose: "run",
    forceWeather: "rain",
    intro: [
      { speaker: "narration", text: "공원에서 만난 지 얼마 안 돼서, 갑자기 소나기가 쏟아지기 시작했다." },
      { speaker: "narration", text: "유나가 다급하게 손을 잡아끌며 정자 쪽으로 뛰었다." },
      { speaker: HEROINE_NAME, expr: "gasp", text: "헉, 완전 갑자기 왜 이래! 빨리 뛰어!" },
      { speaker: HEROINE_NAME, expr: "laugh", text: "...근데 이것도 나름 재밌다, 그치?" },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "anxious", text: "이렇게 같이 비 맞아도, 마음은 좀 멀게 느껴질 때가 있어." },
        { speaker: HEROINE_NAME, expr: "weary", text: "별거 아닌 걸로 자꾸 거리감 느끼는 나도 참 그렇지." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "giddy", text: "비 맞으면서 뛰는 것도 오랜만이라 재밌었어." },
        { speaker: HEROINE_NAME, expr: "smile_soft", text: "이런 우연도 나쁘지 않네." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "blissful", text: "너랑 같이라면 비 맞는 것도 낭만이 되는구나." },
        { speaker: HEROINE_NAME, expr: "enamored", text: "흠뻑 젖었는데도 웃음이 나는 거 보면, 진짜 좋아하나 봐." },
      ],
    },
    choices: [
      {
        text: "겉옷을 벗어 씌워준다",
        delta: 7,
        response: [
          { speaker: HEROINE_NAME, expr: "bashful", text: "...따뜻하다. 근데 너는 다 젖었잖아." },
          { speaker: HEROINE_NAME, expr: "adoring", text: "이런 거 은근 감동이란 말이지." },
        ],
      },
      {
        text: "그냥 비 맞으며 웃어넘긴다",
        delta: 3,
        response: [{ speaker: HEROINE_NAME, expr: "laugh", text: "에라 모르겠다, 그냥 같이 맞자!" }],
      },
      {
        text: "우산 파는 곳을 찾아 뛰어간다",
        delta: 5,
        response: [{ speaker: HEROINE_NAME, expr: "relieved", text: "오, 잘 찾았다. 역시 위기 대응 능력 있네." }],
      },
    ],
    outroVariants: [
      [{ speaker: "narration", text: "흠뻑 젖은 채로도, 둘은 한참을 웃었다." }],
      [{ speaker: "narration", text: "예상치 못한 소나기가, 오히려 특별한 하루를 만들어주었다." }],
    ],
  },
  {
    id: 15,
    title: "작은 기념일",
    bg: "cafe",
    entrancePose: "idle",
    intro: [
      { speaker: "narration", text: "사귄 지 어느덧 시간이 꽤 흘렀다. 유나가 오늘은 특별한 날이라며 예쁘게 꾸미고 나왔다." },
      { speaker: HEROINE_NAME, expr: "enraptured", text: "오늘 기억하고 있었어? ...솔직히 반반이었는데, 다행이다." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "anxious", text: "혹시 오늘 까먹은 거 아니었나 싶어서 조마조마했어." },
        { speaker: HEROINE_NAME, expr: "sorrow", text: "기념일 같은 거, 나만 챙기는 건가 싶을 때가 가끔 있어." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "smile_soft", text: "이런 날 하나하나 챙기는 게, 은근 의미 있더라." },
        { speaker: HEROINE_NAME, expr: "giddy", text: "오늘 하루 종일 기분이 들떠 있었어, 사실." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "adoring", text: "너랑 함께한 시간이 벌써 이만큼이라니, 믿기지 않아." },
        { speaker: HEROINE_NAME, expr: "blissful", text: "매일이 기념일 같았으면 좋겠어, 너랑 있으면." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "smile_soft", text: "비 오는 기념일이라니, 이것도 나름 운치 있네." }],
      snow: [{ speaker: HEROINE_NAME, expr: "joyful", text: "눈 오는 기념일이라니, 완전 영화 같다!" }],
      cloudy: [{ speaker: "narration", text: "흐린 하늘이었지만, 두 사람 사이엔 화창한 기운이 감돌았다." }],
    },
    choices: [
      {
        text: "미리 준비한 선물을 건넨다",
        delta: 9,
        response: [
          { speaker: HEROINE_NAME, expr: "gasp", text: "진짜 준비한 거야? 나 완전 감동이야." },
          { speaker: HEROINE_NAME, expr: "weeping", text: "...고마워, 진짜." },
        ],
      },
      {
        text: "특별한 건 없다고 솔직히 말한다",
        delta: -4,
        response: [{ speaker: HEROINE_NAME, expr: "sorrow", text: "...괜찮아, 그럴 수도 있지." }],
      },
      {
        text: "즉석에서 편지를 써서 읽어준다",
        delta: 8,
        response: [{ speaker: HEROINE_NAME, expr: "blissful", text: "이런 걸 즉석에서 썼다고? 못 믿겠어, 근데 좋다." }],
      },
    ],
    bonusChoice: {
      minAffection: 75,
      text: "💗 앞으로도 계속 함께하자고 약속한다",
      delta: 10,
      response: [{ speaker: HEROINE_NAME, expr: "enamored", text: "...응, 나도. 계속 이렇게 있자." }],
    },
    outroVariants: [
      [{ speaker: "narration", text: "특별한 날이라 불렀지만, 사실 함께한 모든 날이 특별했다." }],
      [{ speaker: "narration", text: "작은 기념일 하나가, 두 사람의 마음을 한 뼘 더 가깝게 만들었다." }],
    ],
  },
  {
    id: 16,
    title: "질투",
    bg: "sunset",
    entrancePose: "idle",
    intro: [
      { speaker: "narration", text: "요즘 유나 주변에 낯선 남자애가 자주 보인다는 소문이 들렸다." },
      { speaker: "narration", text: "물어보려던 참에, 유나가 먼저 어색하게 웃으며 다가왔다." },
      { speaker: HEROINE_NAME, expr: "anxious", text: "저기... 혹시 무슨 얘기 들은 거 있어?" },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "hopeless", text: "네가 나 의심하는 것 같아서, 솔직히 좀 속상해." },
        { speaker: HEROINE_NAME, expr: "sorrow", text: "믿어주지 않는 것 같아서 자꾸 눈치 보게 돼." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "anxious", text: "오해 살 만한 상황이었나... 괜히 신경 쓰이네." },
        { speaker: HEROINE_NAME, expr: "pondering", text: "별거 아닌데 자꾸 설명하게 되는 것도 이상하지." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "earnest", text: "오해할 만한 상황이었다면 먼저 말했을 거야, 약속해." },
        { speaker: HEROINE_NAME, expr: "adoring", text: "너 말고 다른 사람한테 눈 돌아갈 일 없어, 진짜로." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: "narration", text: "부슬비가 내리는 탓인지, 분위기가 더 무겁게 가라앉았다." }],
      snow: [{ speaker: HEROINE_NAME, expr: "sorrow", text: "눈이 오는데도, 지금은 하나도 눈에 안 들어오네." }],
      cloudy: [{ speaker: "narration", text: "흐린 하늘 아래, 어색한 침묵이 잠시 흘렀다." }],
    },
    choices: [
      {
        text: "솔직하게 질투났다고 말한다",
        delta: 6,
        response: [
          { speaker: HEROINE_NAME, expr: "giddy", text: "...질투하는 거야? 귀엽네, 그런 모습." },
          { speaker: HEROINE_NAME, expr: "blissful", text: "걱정 마, 너밖에 없어." },
        ],
      },
      {
        text: "아무렇지 않은 척 넘긴다",
        delta: -6,
        response: [{ speaker: HEROINE_NAME, expr: "sorrow", text: "...진짜 신경 안 쓰는 거야? 그것도 좀 서운한데." }],
      },
      {
        text: "직접 그 상황에 대해 차분히 물어본다",
        delta: 7,
        response: [
          { speaker: HEROINE_NAME, expr: "relieved", text: "물어봐줘서 고마워. 그냥 과제 때문에 잠깐 얘기한 거였어." },
          { speaker: HEROINE_NAME, expr: "smile_soft", text: "오해 풀려서 다행이다, 진짜." },
        ],
      },
    ],
    outroVariants: [
      [{ speaker: "narration", text: "작은 오해였지만, 믿음이라는 게 얼마나 중요한지 다시 느꼈다." }],
      [{ speaker: "narration", text: "질투도 결국은, 좋아하는 마음의 다른 얼굴이었다." }],
    ],
  },
  {
    id: 17,
    title: "위기",
    bg: "sunset",
    entrancePose: "idle",
    intro: [
      { speaker: "narration", text: "사소한 오해들이 쌓였던 걸까, 유나가 오늘은 유난히 말이 없었다." },
      { speaker: "narration", text: "한참 침묵하던 그녀가, 어렵게 입을 열었다." },
      { speaker: HEROINE_NAME, expr: "hopeless", text: "우리... 요즘 좀 지친 것 같지 않아? 나만 그런가." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "weeping", text: "솔직히 요즘 자신이 없어져. 우리, 이대로 괜찮은 걸까." },
        { speaker: HEROINE_NAME, expr: "hopeless", text: "마음이 자꾸 식어가는 것 같아서 무서워." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "sorrow", text: "그냥 한 번쯤은 솔직하게 얘기해보고 싶었어." },
        { speaker: HEROINE_NAME, expr: "anxious", text: "이런 얘기 꺼내는 것도 사실 엄청 용기 냈어." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "anxious", text: "이런 순간에도 너를 믿고 싶어서 말 꺼낸 거야." },
        { speaker: HEROINE_NAME, expr: "earnest", text: "불안해도, 그만큼 이 관계가 소중해서 그런 거야." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: "narration", text: "비가 추적추적 내리는 하늘이, 지금 이 순간과 꼭 닮아 있었다." }],
      snow: [{ speaker: HEROINE_NAME, expr: "hopeless", text: "눈이 내리는데도, 마음은 시리기만 하다." }],
      cloudy: [{ speaker: "narration", text: "구름 낀 하늘 아래, 두 사람 사이엔 긴 침묵이 흘렀다." }],
    },
    choices: [
      {
        text: "진심을 다해 마음을 다잡아준다",
        delta: 10,
        response: [
          { speaker: HEROINE_NAME, expr: "weeping", text: "...고마워, 그 말이 듣고 싶었어." },
          { speaker: HEROINE_NAME, expr: "relieved", text: "우리, 다시 한번 잘해보자." },
        ],
      },
      {
        text: "나도 지쳤다며 거리를 둔다",
        delta: -18,
        response: [{ speaker: HEROINE_NAME, expr: "hopeless", text: "...그렇구나. 역시, 나 혼자만의 마음이었나 봐." }],
      },
      {
        text: "함께 시간을 갖고 천천히 풀어가자고 제안한다",
        delta: 5,
        response: [{ speaker: HEROINE_NAME, expr: "anxious", text: "...그래, 조급해하지 말자. 우리." }],
      },
    ],
    outroVariants: [
      [{ speaker: "narration", text: "위기였지만, 그 순간이 오히려 서로의 마음을 확인하는 계기가 되었다." }],
      [{ speaker: "narration", text: "쉽지 않은 대화였지만, 피하지 않았다는 것만으로도 의미가 있었다." }],
    ],
  },
  {
    id: 18,
    title: "진심 어린 화해",
    bg: "rooftop",
    entrancePose: "sit",
    intro: [
      { speaker: "narration", text: "며칠 후, 유나가 옥상에서 보자며 먼저 연락해왔다." },
      { speaker: "narration", text: "노을이 지는 하늘 아래, 그녀는 한참을 고민하다 입을 열었다." },
      { speaker: HEROINE_NAME, expr: "earnest", text: "그때 그 얘기, 다시 하고 싶어서. 이번엔 도망치지 않고." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "sorrow", text: "솔직히 아직도 조금 불안하긴 해. 그래도 얘기하고 싶었어." },
        { speaker: HEROINE_NAME, expr: "weary", text: "이런 대화, 사실 계속 피하고 싶었는데." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "earnest", text: "우리 사이에 대해 진지하게 생각해볼 시간이었어." },
        { speaker: HEROINE_NAME, expr: "resolute", text: "이번엔 제대로 얘기해보고 싶어서." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "adoring", text: "이 고비를 넘기고 나니까, 오히려 더 단단해진 기분이야." },
        { speaker: HEROINE_NAME, expr: "enamored", text: "역시 나는, 너 아니면 안 되겠더라." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "relieved", text: "비가 그쳐서 다행이야. 이 얘기는 맑은 날 하고 싶었거든." }],
      snow: [{ speaker: HEROINE_NAME, expr: "blissful", text: "눈 오는 옥상에서 하는 화해라니, 오래 기억날 것 같아." }],
      cloudy: [{ speaker: "narration", text: "구름이 걷히기 시작한 하늘처럼, 마음도 조금씩 개고 있었다." }],
    },
    choices: [
      {
        text: "그동안 힘들었을 마음을 어루만져준다",
        delta: 9,
        response: [
          { speaker: HEROINE_NAME, expr: "weeping", text: "...고마워. 나 진짜 많이 불안했었거든." },
          { speaker: HEROINE_NAME, expr: "blissful", text: "이제 좀 괜찮아진 것 같아." },
        ],
      },
      {
        text: "그냥 넘어가자며 대화를 피한다",
        delta: -8,
        response: [{ speaker: HEROINE_NAME, expr: "hopeless", text: "...또 이렇게 넘어가는구나, 우리." }],
      },
      {
        text: "앞으로 더 솔직해지자고 약속한다",
        delta: 8,
        response: [{ speaker: HEROINE_NAME, expr: "earnest", text: "...그래, 약속. 이제 숨기지 말자, 서로한테." }],
      },
    ],
    bonusChoice: {
      minAffection: 65,
      text: "💗 앞으로 절대 놓지 않겠다고 말한다",
      delta: 9,
      response: [{ speaker: HEROINE_NAME, expr: "weeping", text: "...그 말, 평생 기억할 것 같아." }],
    },
    outroVariants: [
      [{ speaker: "narration", text: "노을이 완전히 저물 때까지, 둘은 그 자리에서 서로를 꼭 안고 있었다." }],
      [{ speaker: "narration", text: "가장 어두웠던 순간을 지나, 두 사람은 그 어느 때보다 가까워져 있었다." }],
    ],
  },
  {
    id: 19,
    title: "특별한 겨울날",
    bg: "park",
    forceBg: "park",
    entrancePose: "walk",
    forceWeather: "snow",
    intro: [
      { speaker: "narration", text: "며칠 뒤, 눈이 소복이 쌓인 공원에서 두 사람은 오랜만에 여유로운 데이트를 즐겼다." },
      { speaker: HEROINE_NAME, expr: "joyful", text: "눈사람 만들자! 나 진짜 오랜만이야, 이런 거." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "anxious", text: "그날 이후로 괜히 더 네 눈치를 보게 되는 것 같아." },
        { speaker: HEROINE_NAME, expr: "weary", text: "마음 정리하는 데 생각보다 시간이 걸리나 봐." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "giddy", text: "오랜만에 이렇게 편하게 웃는 것 같아, 오늘." },
        { speaker: HEROINE_NAME, expr: "smile_soft", text: "이런 평범한 하루가 사실 제일 소중한 거였어." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "blissful", text: "너랑 있으면 눈 오는 날도 이렇게 따뜻할 수 있구나." },
        { speaker: HEROINE_NAME, expr: "enamored", text: "이 순간이 오래오래 기억날 것 같아." },
      ],
    },
    choices: [
      {
        text: "눈사람을 같이 만든다",
        delta: 6,
        response: [
          { speaker: HEROINE_NAME, expr: "laugh", text: "완전 못생겼는데? ...근데 왠지 정드네." },
          { speaker: HEROINE_NAME, expr: "joyful", text: "우리 눈사람 이름 지어주자!" },
        ],
      },
      {
        text: "춥다며 빨리 들어가자고 한다",
        delta: -3,
        response: [{ speaker: HEROINE_NAME, expr: "pouty", text: "...조금만 더 놀면 안 돼? 칫." }],
      },
      {
        text: "눈싸움을 걸어본다",
        delta: 5,
        response: [
          { speaker: HEROINE_NAME, expr: "gasp", text: "야! 이거 반칙이야!" },
          { speaker: HEROINE_NAME, expr: "laugh", text: "...그래도 오랜만에 이렇게 웃어본다." },
        ],
      },
    ],
    outroVariants: [
      [{ speaker: "narration", text: "눈밭 위에 남은 발자국처럼, 오늘의 웃음도 오래 남을 것 같았다." }],
      [{ speaker: "narration", text: "특별할 것 없던 하루가, 어느새 가장 반짝이는 기억이 되어 있었다." }],
    ],
  },
  {
    id: 20,
    title: "스무 날, 그리고 약속",
    bg: "festival",
    forceBg: "festival",
    entrancePose: "idle",
    intro: [
      { speaker: "narration", text: "함께한 시간을 돌아보게 되는 밤, 유나가 축제에 가자며 먼저 연락해왔다." },
      { speaker: "narration", text: "불빛 아래에서, 유나가 조용히 그의 손을 잡았다." },
      { speaker: HEROINE_NAME, expr: "enraptured", text: "그동안 진짜 많은 일이 있었다, 그치? 좋은 일도, 힘든 일도." },
      { speaker: HEROINE_NAME, expr: "earnest", text: "그래도 지금 이렇게 네 옆에 있는 게... 제일 다행이라고 생각해." },
    ],
    moodLine: {
      cold: [
        { speaker: HEROINE_NAME, expr: "anxious", text: "솔직히 지금도 가끔은 불안할 때가 있어. 그래도 너랑 있고 싶어." },
        { speaker: HEROINE_NAME, expr: "sorrow", text: "우리, 앞으로도 계속 이럴 수 있을까 싶어서." },
      ],
      neutral: [
        { speaker: HEROINE_NAME, expr: "smile_soft", text: "지금까지 온 것만으로도 나는 충분히 만족해." },
        { speaker: HEROINE_NAME, expr: "pondering", text: "우리 관계에 대해 오늘따라 이것저것 생각하게 되네." },
      ],
      warm: [
        { speaker: HEROINE_NAME, expr: "adoring", text: "너랑 함께한 시간, 단 하루도 후회한 적 없어." },
        { speaker: HEROINE_NAME, expr: "enamored", text: "앞으로도 계속, 지금처럼 너랑 있고 싶어." },
      ],
    },
    weatherLine: {
      rain: [{ speaker: HEROINE_NAME, expr: "smile_soft", text: "비가 와도, 오늘만큼은 다 낭만처럼 느껴져." }],
      snow: [{ speaker: HEROINE_NAME, expr: "joyful", text: "눈까지 내려주다니, 오늘 하늘도 우리 편인가 봐." }],
      cloudy: [{ speaker: "narration", text: "구름 낀 밤하늘이었지만, 축제의 불빛만은 유독 선명했다." }],
    },
    choices: [
      {
        text: "앞으로도 계속 함께하자고 진심으로 말한다",
        delta: 12,
        response: [
          { speaker: HEROINE_NAME, expr: "weeping", text: "...응, 나도. 계속 이렇게, 오래오래." },
          { speaker: HEROINE_NAME, expr: "blissful", text: "이 순간 절대 안 잊을 것 같아." },
        ],
      },
      {
        text: "그냥 지금처럼만 지내자고 가볍게 넘긴다",
        delta: -5,
        response: [{ speaker: HEROINE_NAME, expr: "sorrow", text: "...그래, 그것도 나쁘지 않지 뭐." }],
      },
      {
        text: "말 대신 꼭 안아준다",
        delta: 9,
        response: [{ speaker: HEROINE_NAME, expr: "blissful", text: "...말 안 해도 알 것 같아, 이 마음." }],
      },
    ],
    outroVariants: [
      [{ speaker: "narration", text: "불꽃이 밤하늘 가득 터지는 동안, 두 사람은 그렇게 오래도록 서로를 마주 보고 있었다." }],
      [{ speaker: "narration", text: "스무 날의 이야기는 끝이 아니라, 이제 막 시작된 우리의 이야기였다." }],
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
