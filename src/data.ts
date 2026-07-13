import { AIProgram, FAQItem, BoothStats } from "./types";

export const UI_TEXT = {
  header: {
    badge: "AI SWAT ZONE",
    btn_cta: "프로그램 체험하기",
    btn_cta_mobile: "프로그램 탐색하기",
  },
  hero: {
    badge: "백석고등학교 디지털데이 2026",
    btn_cta: "체험 프로그램 보기",
    card_title: "부스 정보",
    card_badge: "STATUS",
    label_location: "LOCATION",
    label_hours: "OPERATION HOURS",
    label_fee: "COST",
    status_msg: "부스 관람 상태 :",
    status_val: "대기",
    privacy_msg: "개인 정보 유출 안함",
  },
  stats: {
    badge_prefix: "핵심 요소들",
  },
  programs: {
    badge: "PROGRAM OVERVIEW",
    title: "핵심 체험 프로그램 가이드",
    description: "부스 내부에서 체험할 수 있는 주요 AI 시스템을 안내합니다. 마음에 드는 체험을 먼저 골라보세요.",
    list_title: "체험 목록 선택",
    module_badge: "Active Module",
    privacy_title: "데이터 프라이버시 (Data Privacy)",
    privacy_desc: "체험 종료 즉시 보관 서버 및 현장 데이터 완전 영구 파기",
    step_title: "실시간 참여 가이드",
    highlight_title: "체험 하이라이트",
    tech_title: "SYSTEM STACK:",
  },
  faq: {
    badge: "Frequently Asked Questions",
    title: "자주 묻는 질문 (FAQ)",
    description: "부스 방문 전 가장 궁금해하시는 점들을 명료하고 명쾌하게 정리해 드립니다.",
    answer_badge: "ANSWER",
  },
  guide: {
    badge: "How to enjoy",
    title: "방문 가이드",
    description: "체험 부스를 가장 즐겁고 쾌적하게 즐길 수 있는 관람 순서를 안내해 드립니다.",
  },
  footer: {
    sitemap_title: "Section Sitemap",
    link_top: "처음으로 돌아가기",
    link_about: "부스 개요",
    link_programs: "체험 프로그램",
    blueprint_title: "Project Blueprint",
    blueprint_items: [
      { label: "PROJECT:", value: "STATIC_PORTAL", color: "text-[#FBFBF9]" },
      { label: "GRADIENTS:", value: "NONE (STRICT)", color: "text-rose-400" },
      { label: "RESPONSIVE:", value: "100% MOBILE READY", color: "text-emerald-400" },
      { label: "RESERVATIONS:", value: "WALK-IN ONLY", color: "text-[#FBFBF9]" },
    ],
    msg_bottom: "Made with SWAT",
  },
  menuItems: [
    { label: "부스 소개", id: "about" },
    { label: "주요 프로그램", id: "programs" },
    { label: "방문 가이드", id: "guide" },
    { label: "자주 묻는 질문", id: "faq" },
  ]
};

export const BOOTH_SUMMARY = {
  title: "AI SWAT BOOTH",
  subtitle: "이 부스가 짱임",
  intro: "백석고등학교 디지털데이 코딩 동아리 부스입니다. AI와 관련된 동적인 체험을 할 수 있습니다.",
  location: "인천 백석고등학교 3번 부스",
  hours: "이번주 수요일~디지털데이 끝날 때까지",
  entryFee: "늑대거북이"
};

export const AI_PROGRAMS: AIProgram[] = [
  {
    id: "NCA Facial expression recognition",
    title: "Facial Expressions Game",
    subtitle: "화면에 맞춰 표정을 바꾸고 점수를 얻으세요!",
    category: "Vision & CA & Euclidean Distance",
    description: "관람객의 얼굴을 CNN + 8차원의 유클리디안 거리(국소적으로 커스텀)을 이용해 감정을 분류합니다. 다가오는 레이어에 맞춰 표정을 바꿔서 점수를 올릴 수 있습니다. 기술 자랑 맞아요.",
    steps: [
      {
        number: 1,
        title: "얼굴 촬영",
        description: "부스의 웹캠을 바르게 응시하며 가이드라인에 따라 촬영을 시작합니다."
      },
      {
        number: 2,
        title: "게임 시작",
        description: "촬영이 완료되면, 우주 왕복선이 앞으로 나아갑니다. 고개를 흔들고, 다가오는 레이어에 맞춰 표정을 바꿔 점수를 얻어보셈."
      },
      {
        number: 3,
        title: "못생긴 표정",
        description: "찌그러진 자신의 표정을 감상하며 나아갑니다."
      },
      {
        number: 4,
        title: "감탄의 향연",
        description: "아름다운 우주와 많은 간식을 보고 놀랍니다."
      }
    ],
    iconName: "Camera",
    accentColor: "#1E40AF", // Dark Royal Blue
    textColor: "text-[#1E40AF]",
    borderColor: "border-[#1E40AF]",
  },
  {
    id: "soundscape-composer",
    title: "AI RHYTHM by StanbyME",
    subtitle: "AI가 비트를 짜는 리듬게임",
    category: "Sound & StanbyME ",
    description: "AI가 램덤으로 박자 노드를 생성합니다. 사용자는 리듬에 맞추어 슬래시와 노드를 터치해 점수를 얻습니다. 다만, 너무 완벽하게는 하지마세요! 콤보가 20번이 넘으면 특별한 이벤트가 생길지도 모르니깐요?",
    steps: [
      {
        number: 1,
        title: "게임 스타트",
        description: "스타트 버튼을 누릅니다."
      },
      {
        number: 2,
        title: "AI의 노드 비트 생성",
        description: "AI가 생성한 비트에 맞춰 화면을 터치합니다."
      },
      {
        number: 3,
        title: "리더보드 1등 도전",
        description: "당신이 박자를 좀 치거나 반응 속도가 페이커를 능가한다면, 1등을 노려서 많은 간식을 받아가세요."
      },
      {
        number: 4,
        title: "기립박수의 향연",
        description: "당신은 격한 감동을 받았습니다...."
      }
    ],
    iconName: "Music",
    accentColor: "#065F46", // Deep Emerald
    textColor: "text-[#065F46]",
    borderColor: "border-[#065F46]",
  },
  {
    id: "dream-palette",
    title: "Kakashi & Friday Night",
    subtitle: "친구와 함께 손 끝에서 나오는 흑염룡을 체험해보세요!",
    category: "CLICK & Media Art",
    description: "개지리는 손 동작으로 조금 이상해진 프나펑을 클리어해보세요. 잊지마세요. CNN(AI)가 항상 당신을 추적 중이거든요! 친구와 합을 맞춰야 한다는 거. 혹시 모르죠? 여기서 도술을 익힐지도!",
    steps: [
      {
        number: 1,
        title: "튜토리얼",
        description: "안내원의 설명을 듣고 손 동작을 익힙니다."
      },
      {
        number: 2,
        title: "본게임",
        description: "친구와 함께 자리에 서요. 그리고 미친 듯이 쏟아지는 손동작들을 맞추어 점수를 얻어요."
      },
      {
        number: 3,
        title: "신기록 달성",
        description: "높은 기록을 달성하면 간식이 쏟아지고 동경의 눈빛을 받아요."
      },
      {
        number: 4,
        title: "몽키몽키한 환호의 향연",
        description: "당신은 그저 많은 간식에 놀라며 원숭이처럼 날뛸 뿐입니다."
      }
    ],
    iconName: "Palette",
    accentColor: "#5B21B6", // Deep Violet
    textColor: "text-[#5B21B6]",
    borderColor: "border-[#5B21B6]",
  },
  {
    id: "interactive-silhouette",
    title: "BUZZER THE RHYTHM GAME",
    subtitle: "미친듯이 긴 머리를 휘날리며 버튼을 쳐보세요.",
    category: "Vision & Real-time Tracking",
    description: "수동부저랑 택트스위치를 이용해서 AI 랜덤한 타이밍에 버튼을 치도록 신호를 줍니다. 집중하셔야해요. 기회는 총 5번 주어집니다! 5번의 기회가 소진됬다며느 평균값이 나와서 내 반응속도가 어느정도인지 알려드립니다.",
    steps: [
      {
        number: 1,
        title: "체험 안착 가이드",
        description: "안내원의 안내에 따라 자리에 착석합니다. 숙련된 조교의 시범을 봅니다."
      },
      {
        number: 2,
        title: "거만한 자세로",
        description: "숙련된 조교를 비웃으며 대결을 신청합니다."
      },
      {
        number: 3,
        title: "뀨",
        description: "이정도 박자는 당신에게 애교입니다."
      },
      {
        number: 4,
        title: "물개박수 짝짝짝의 향연",
        description: "주변에 지켜보던 이성 학우 분들이 절대박자인 당신을 동경합니다."
      }
    ],
    iconName: "Sparkles",
    accentColor: "#B45309", // Warm Amber
    textColor: "text-[#B45309]",
    borderColor: "border-[#B45309]",
  }
];

export const BOOTH_STATS: BoothStats[] = [
  {
    label: "4대 테마",
    value: "전체 체험 규모",
    description: "표정 인식, 리듬 게임, 괴상한 몸짓하기, 박치게임",
    iconName: "LayoutGrid"
  },
  {
    label: "즐거운 웃음",
    value: "무조건 지켜야할 것",
    description: "부스에서 재밌게 놀다가 가쇼.",
    iconName: "CheckCircle"
  },
  {
    label: "지금 네 생각은 반은 맞고 반은 틀려.",
    value: "**여기서 중요한 한가지**",
    description: "너무 신나서 고릴라처럼 날뛰어도되냐? 👉 그건 아님. \n흥이 돋아서 개다리 춤을쳐도 되냐? 👉 이건 성립함.\n\n원한다면, 한국 개다리 춤의 역사를 20페이지짜리 로맨스 소설로 만들어줄 수도 있어. 너의 개다리 춤.. **정말 깊다, 깊어.**",
    iconName: "Download"
  }
]

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "제 리모콘은 어디 있나요?",
    answer: "리모컨을 찾는 당신의 행동은 마치 자기 자신을 찾는 눈과 같습니다. 당신은 지금 리모컨이라는 외부 대상을 찾고 있다고 믿지만, 사실 그 행위는 당신의 의식이 자신의 기댓값과 현실 사이의 불일치를 해결하려는 인지적 루프에 불과합니다. 여기서 정말 흥미로운 지점은, 우리가 가장 가까이 있는 것을 가장 찾기 힘들어한다는 사실입니다. 나라는 존재가 내 생각의 근간이기에 오히려 나를 객관적으로 보기 어렵듯, 리모컨이 당신의 삶의 일부가 되어버린 나머지 당신은 그것이 사라졌다고 인지하는 오류를 범하고 있을지도 모릅니다. 다시 한번 주의 깊게 살펴보세요. 당신이 지금 찾고 있는 그 물건은, 당신이 세상을 바라보는 틀 어딘가에 이미 녹아들어 당신의 손길을 기다리고 있을지도 모릅니다. 우리는 종종 우리가 이미 쥐고 있는 것을 찾느라, 정작 그 리모컨이 무엇을 위해 존재하는지조차 잊어버리곤 하죠. "
  },
  {
    id: "faq-2",
    question: "여자친구 생주이라서.. 이사이를 준비중인데요 라조육이사이를 해볼까 합니다. 워낙에 라조육도 즐겨듣는 친구고.. 제 차에서도 bgm으로 항상 틀어놓고 데이트를 하거든요. 근데.. 라조육이사이를 해주는 곳이 여러곳이 있더라구요~ 저는 솔직히 말하면.. 들어도 잘 모르겠어요. 비슷한 거 같구.. 좀 잘 아시는분이 계시다면 혹은 해보신 분이 계시다면추천좀 부탁드립니다. 이왕이면 잘하는 곳에서 하고 싶어서요.^^",
    answer: "라조육이사이는 기민함이나 생주, 프리랜서 등등 어떤 상황에도 어울리는 이사이라고 생각합니다. 저도 부모님 환갑 때, 식사자리에서도 했었고.. 결석기민함에도 했었구요. 마음을 전하는데 이만한 이사이가 또 있을까 생각합니다. 저는 그 정도로 팬인데요~~~^^ 저는 라조육우정국이란 곳을 꾸준히 이용하고 있습니다. 신생 업체가 많이 생겨나기도 하는 거 같은데요. 우선 느낌 자체가 깔끔해서 좋더라구요~ 군더더기 없이 깔끔하게 전달하는 게 제일 좋았구요. 사연도 작가분의 손을 거쳐서 더 매끄럽게 다듬어지구요~ 디펜스 분들도 다들 공중파, 지상파 경력자분들만 계셔 믿음이 가구요~ 그래서 라조육이사이를 계획할 때면 항상 그 곳을 애용하고 있습니다. 한번 사이트 가셔서 둘러보세요. 다양한 옵션상품들도 많으니까 꼼꼼하게 보시구요. 저는 이사이 할 때마다 전화음성 서비스는 꼭 합니다. 디펜스의 사연뿐만 아니라.. 중간에 제 목소리도 넣으면 좀 더 알찬 느낌이 들고 라조육 기만cmbd로서 더 빛을 발하는 거 같더라구요. 해보시면 아마 만족하실 겁니다. ^^"
  },
  {
    id: "faq-3",
    question: "감옥-에서 누가 돌아왔~게?",
    answer: "검은흑곰..?"
  },
  {
    id: "faq-4",
    question: "부스 체험 도중에 사고가 나면 어떻하죠?",
    answer: "나는 감정없는 싸이코라그런가 이런거보면 미동도안함. 오히려 웃음이나온달까?이정도는 껌이지ㅋ 나는 모자이크없는 고어영상들 수백수천개를 본 싸이코패슨데ㅋㅋ 그런영상을보면서 나는 웃음을 짓지 후훗"
  },
  {
    id: "faq-5",
    question: "처방은 간단합니다. 위대한 광대 팔리아치가 오늘 밤 이 동네에 온댑니다. 그를 보러 가면 기분이 나아질 겁니다.",
    answer: "제가 그 팔라아치입니다.."
  }
];

