# 🌌 AI PlayGround: Future Booth Showcase

> **상상이 현실로 다가오는 여섯 가지 예술적 인공지능 부스**  
> 인공지능 기술이 차가운 이성을 넘어 감성과 예술을 자극하는 체험 공간, **AI PLAYGROUND**의 공식 쇼케이스 페이지입니다.

본 프로젝트는 딥러닝 기반의 영상 비전, 오디오 시퀀서, 텍스트 추론 모델이 빚어내는 혁신적인 6가지 체험 프로그램을 오프라인에서 직접 경험할 수 있도록 기획된 홍보 및 안내 플랫폼입니다.

---

## ✨ 주요 특징 (Key Features)

- **6대 테마 체험 존**: 생성 예술, 오디오 작곡, 심리 추론, 인터랙티브 모션 센싱, 가상 스타일 피팅 등 복합적인 AI 도메인을 경험할 수 있습니다.
- **실시간 데이터 소장**: 체험 후 이메일을 통한 고해상도 그림, 사운드, 맞춤형 스타일 리포트 등의 실시간 전송 기능을 지원합니다.
- **세련된 UI/UX**: 프리미엄 미학이 가미된 미니멀한 레이아웃과 감각적인 다이내믹 호버, 마이크로 인터랙션을 반영하여 감성적인 전시회 분위기를 자아냅니다.
- **철저한 개인정보 보호**: 체험에 활용된 생체 데이터(사진, 목소리 등)는 AI 변형 렌더링에만 사용된 후 즉시 안전하게 영구 파기됩니다.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Frontend**: React (v19), TypeScript, Vite
- **Styling**: Tailwind CSS
- **Interactions**: Motion (Framer Motion)
- **Icons**: Lucide React
- **API**: Google Gen AI SDK (`@google/genai`)

---

## 🚀 로컬 실행 방법 (How to Run Locally)

### 요구사항 (Prerequisites)
- [Node.js](https://nodejs.org/) (LTS 버전 권장)

### 1. 의존성 패키지 설치
```bash
npm install
```

### 2. 환경 변수 설정
프로젝트 루트 디렉토리에 `.env.local` 파일을 생성하고 아래와 같이 API 키 정보를 추가합니다.
```bash
# .env.local
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
APP_URL="http://localhost:3000"
```

### 3. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000`에 접속하여 세련되게 구현된 쇼케이스 페이지를 확인할 수 있습니다.

---

## 📂 프로젝트 구조 (Folder Structure)

```
.
├── src/
│   ├── components/       # UI 컴포넌트 (Hero, Header, Footer, ProgramShowcase 등)
│   ├── data.ts           # 부스 안내 및 FAQ 등 전역 컨텐츠 데이터
│   ├── types.ts          # TypeScript 공통 인터페이스 타입 정의
│   ├── App.tsx           # 메인 애플리케이션 컴포넌트
│   └── main.tsx          # 애플리케이션 진입점
├── index.html            # 메인 HTML 템플릿
├── vite.config.ts        # Vite 빌드 및 개발 서버 설정
└── package.json          # 프로젝트 종속성 및 스크립트 정의
```
