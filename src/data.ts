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
    privacy_msg: "개인 생체 정보 수집",
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
    step_title: "실시간 참여 가이드 (STEP-BY-STEP)",
    highlight_title: "체험 하이라이트 & 팁",
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
  intro: "국내의 다루는 사람이 적은 뉴럴 셀룰러 오토마타라는 딥러닝 기술을 주력으로 이용한 실험적인 부스입니다. AI를 동적으로 다루고 체험할 수 있습니다. AI 감정 맞추기 게임 등 4개의 전문적인 체험을 해볼 수 있습니다. ",
  location: "인천 백석고등학교 3번 부스",
  hours: "이번주 수요일~디지털데이 끝날 때까지",
  entryFee: "늑대거북이"
};

export const AI_PROGRAMS: AIProgram[] = [
  {
    id: "NCA Facial expression recognition",
    title: "NCA Facial expression recognition",
    subtitle: "인공지능의 시선으로 재탄생하는 나의 감정",
    category: "Vision & NCA",
    description: "관람객의 얼굴 구조와 고유한 감정표현을 인공지능이 인식한 뒤, 고유의 패턴을 생성합니다.",
    steps: [
      {
        number: 1,
        title: "얼굴 촬영",
        description: "부스의 웹캠을 바르게 응시하며 가이드라인에 따라 촬영을 시작합니다."
      },
      {
        number: 2,
        title: "네오픽셀 LED",
        description: "곧이어 긴 Led 네오픽셀에 불이 들어옵니다."
      },
      {
        number: 3,
        title: "감탄의 향연",
        description: "NCA의 내부 구조를 화면으로 확인 후, 개쩌는 기술에 감탄합니다."
      },
      {
        number: 4,
        title: "모바일 고해상도 소장",
        description: "깜짝놀란 표정을 네오픽셀의 색깔 패턴과 함께 사진을 찍어드립니다."
      }
    ],
    iconName: "Camera",
    accentColor: "#1E40AF", // Dark Royal Blue
    textColor: "text-[#1E40AF]",
    borderColor: "border-[#1E40AF]",
  },
  {
    id: "soundscape-composer",
    title: "AI Sound by StanbyME",
    subtitle: "세상에 단 하나뿐인 사운드",
    category: "Sound making & buzzer",
    description: "최애 음악을 입력하면 버저로 내보내",
    steps: [
      {
        number: 1,
        title: "원하는 음악 업로드",
        description: "유튜브에서 원하는 음악을 고릅니다. (노래, asmr, 영화 OST 다가능)"
      },
      {
        number: 2,
        title: "시그니처 FFT 알고리즘",
        description: "FFT 분석을 통해 음악을 버저가 해석하기에 최적의 상태로 내보냅니다."
      },
      {
        number: 3,
        title: "mosi mosi 오디오 조작",
        description: "그렇게 내보낸 데이터를 버저가 해석합니다."
      },
      {
        number: 4,
        title: "오디오 감상 및 소장",
        description: "생성된 완벽한 사운드를 감상하며 사운드 음원 다운로드 링크를 수령합니다."
      }
    ],
    iconName: "Music",
    accentColor: "#065F46", // Deep Emerald
    textColor: "text-[#065F46]",
    borderColor: "border-[#065F46]",
  },
  {
    id: "dream-palette",
    title: "AI Hand SUPER",
    subtitle: "손 끝에서 우아한 아트로",
    category: "CLICK & Media Art",
    description: "당신이 어젯밤 꾸었던 모호한 꿈, 혹은 간직하고픈 가장 소중했던 기억의 스토리를 자유롭게 타이핑해 주세요. 자연어 감성 분석 레이어가 텍스트 속 문맥적 서사를 정밀하게 파싱하여, 추상적인 빛과 오가닉 형태의 거대 미디어 아트를 전시 벽면에 실시간 투사합니다.",
    steps: [
      {
        number: 1,
        title: "그냥 화면 클릭",
        description: "화면에 있는 이미지 아무 곳이나를 클릭합니다."
      },
      {
        number: 2,
        title: "NCA 우려먹기",
        description: "하이 테크놀로지 NCA가 그 이미지를 손상 시키고 복구하는 과정을 반복합니다."
      },
      {
        number: 3,
        title: "사진 찍기",
        description: "당신은 그 패턴에 매우 놀라며 사진을 찍습니다."
      },
      {
        number: 4,
        title: "기립 박수",
        description: "당신은 그저 전율할 뿐입니다."
      }
    ],
    iconName: "Palette",
    accentColor: "#5B21B6", // Deep Violet
    textColor: "text-[#5B21B6]",
    borderColor: "border-[#5B21B6]",
  },
  {
    id: "interactive-silhouette",
    title: "AI BODY MOVE",
    subtitle: "손짓과 몸짓 끝에서 살아 숨 쉬는 인터랙티브한 동작 게임",
    category: "Vision & Real-time Tracking",
    description: "인공지능이 포즈를 분석해서 옆에 버츄얼 졸라맨을 띄웁니다.",
    steps: [
      {
        number: 1,
        title: "체험 안착 가이드 정렬",
        description: "웹캠의 골격 탐지를 기다립니다."
      },
      {
        number: 2,
        title: "실시간 관절 스켈레톤 리깅",
        description: "모니터 상에서 내 관절 부위를 조밀하게 감싼 미세 앵커 핀들이 물리를 동반해 연결되는 반응형 모션을 즐깁니다."
      },
      {
        number: 3,
        title: "내가 바로 버츄얼",
        description: "옆 화면에 졸라맨이된 자신이 서 있습니다."
      },
      {
        number: 4,
        title: "베스트 모션 컷 저장",
        description: "자연과 내 그림자가 완벽히 어우러지는 최고의 찰나를 저희가 포착하여 안전하게 메롱합니다."
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
    description: "표정 인식, 작곡, 괴상한 몸짓하기, 인터랙티브 동작",
    iconName: "LayoutGrid"
  },
  {
    label: "즐거운 웃음",
    value: "그대가 내야할 것",
    description: "제 조수인 데이비드의 안내와 모든 체험, 사진 촬영(무단)이 전부 무료입니다.",
    iconName: "CheckCircle"
  },
  {
    label: "결과물 개인 연락처로 바로 보내드림(번따x)",
    value: "결과물 개인 소장",
    description: "나만의 고품질 사진, 작곡된 미디어 음원, 가장 이상했던 동작 분석 리포트를 메일로 즉시 안전하게 전송 및 소장 가능",
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

