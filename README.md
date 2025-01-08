# my-next-board

### 1. Project Structure

```angular2html
my-next-board/
├── README.md            # 프로젝트 설명 파일
├── app/                 # Next.js App Router를 사용하는 주요 페이지 및 API 경로
│   ├── api/             # API 엔드포인트 정의
│   │   ├── articles/    # 게시글 관련 API
│   │   ├── auth/        # 인증 관련 API
│   │   ├── dto/         # DTO(데이터 전송 객체) 정의
│   │   └── ...
│   ├── articles/        # 게시글 관련 페이지
│   │   ├── alert/       # 알림 페이지
│   │   ├── lobby/       # 로비 페이지
│   │   ├── mypage/      # 마이페이지
│   │   ├── new/         # 새 게시글 작성 페이지
│   │   └── ...
│   ├── auth/            # 인증 관련 페이지
│   │   ├── login/       # 로그인 페이지
│   │   ├── register/    # 회원가입 페이지
│   │   ├── test/        # 테스트 페이지
│   │   ├── _style.css   # 스타일 파일
│   │   └── ...
│   ├── layout.tsx       # 전역 레이아웃 컴포넌트
│   ├── globals.css      # 전역 스타일 파일
│   └── page.tsx         # 홈 페이지
├── components/          # 재사용 가능한 React 컴포넌트
├── context/             # 전역 상태 관리를 위한 Context 정의
├── hooks/               # 커스텀 훅 정의
├── lib/                 # 공통 라이브러리 (유틸리티 함수 등)
├── middleware/          # 미들웨어 로직
├── prisma/              # Prisma 관련 파일
│   ├── migrations/      # 데이터베이스 마이그레이션 파일
│   └── schema.prisma    # Prisma 스키마 정의
├── public/              # 정적 파일 (이미지, 아이콘 등)
├── services/            # 비즈니스 로직 (API 호출 함수 등)
├── next.config.ts       # Next.js 설정 파일
├── tsconfig.json        # TypeScript 설정 파일
├── tailwind.config.js   # Tailwind CSS 설정 파일
├── tailwind.config.ts   # Tailwind 확장 설정 (필요 시)
├── eslint.config.mjs    # ESLint 설정 파일
├── postcss.config.mjs   # PostCSS 설정 파일
├── package.json         # 프로젝트 메타데이터 및 의존성 정보
├── package-lock.json    # 의존성 잠금 파일
├── pnpm-lock.yaml       # pnpm 잠금 파일
└── node_modules/        # 설치된 Node.js 패키지
```

### 2. Settings

```bash
npx create-next-app@latest my-next-board
pnpm install @prisma/client
pnpm install prisma --save-dev
pnpm install next-auth
pnpm install axios react-query tailwindcss
pnpm install eslint prettier eslint-plugin-react eslint-config-next --save-dev

npx prisma init
npx tailwindcss init
```

### 3. Debugging
- On CLion
1. Edit Configurations
2. Add New Configuration(Nodejs)
3. JavaScript file : node_modules/next/dist/bin/next
4. Application parameters : dev