export type ItemColor = "blue" | "green" | "yellow" | "purple" | "red";

export interface RightContent {
    top: string;
    bottom: string;
}

export interface ModalContent {
    description?: string;
    features?: string[];
    pptUrl?: string;
    detailedImages?: string[];
}

export type DescriptionVisibility = "all" | "mobile-only" | "desktop-only";

export interface DescriptionLine {
    text: string;
    visibility?: DescriptionVisibility;
}

export interface PortfolioItem {
    title: string;
    subtitle: string;
    rightContent: RightContent;
    color: ItemColor;
    imageList?: string[];
    techStack?: string[];
    description?: (string | DescriptionLine)[];
    modalContent?: ModalContent;
}

export interface SkillGroup {
    category: string;
    skills: string[];
}

export const profile = {
    name: "Mingyun Jeong",
    role: "Computer Vision & Frontend Developer",
    siteUrl: "https://portfolio-mingun0112s-projects.vercel.app/",
    imageSrc: "/profile_image.jpg",
    cvHref: "/sample.pdf",
    githubHref: "https://github.com/mingun0112",
    blogHref: "https://shadowcoding.tistory.com/category",
};

export const education: PortfolioItem[] = [
    {
        title: "Dankook University",
        subtitle: "Department of Computer Engineering, GPA: 3.69/4.5",
        rightContent: { top: "Yongin, South Korea", bottom: "2019.03 - 2025.08" },
        color: "blue",
    },
    {
        title: "Salesio High School",
        subtitle: "",
        rightContent: { top: "Gwangju, South Korea", bottom: "2016 - 2019" },
        color: "blue",
    },
];

export const languages: PortfolioItem[] = [
    {
        title: "TOEIC Speaking",
        subtitle: "ETS",
        rightContent: { top: "Score: 160(AL)", bottom: "2025.03.09" },
        color: "purple",
    },
    {
        title: "TOEIC",
        subtitle: "ETS",
        rightContent: { top: "Score: 875/990", bottom: "2025.01.12" },
        color: "purple",
    },
];

export const licenses: PortfolioItem[] = [
    {
        title: "SQL 개발자(SQLD)",
        subtitle: "한국데이터산업진흥원",
        rightContent: { top: "", bottom: "2025.09.19" },
        color: "purple",
    },
    {
        title: "데이터 분석 준전문가(ADsP)",
        subtitle: "한국데이터산업진흥원",
        rightContent: { top: "", bottom: "2025.09.05" },
        color: "purple",
    },
    {
        title: "정보처리기사",
        subtitle: "한국산업인력공단",
        rightContent: { top: "", bottom: "2024.09.10" },
        color: "purple",
    },
];

export const careers: PortfolioItem[] = [
    {
        title: "Kumho Tire",
        subtitle: "Manager, POP&LTS(Inspection, Repair, Sorting)System Development",
        rightContent: { top: "Goksung, South Korea", bottom: "2026.01 ~ Present" },
        color: "green",
        imageList: [],
        techStack: [],
        description: ["Bead-NGC 신규 설비 도입", "PCR Tire Realtime OCR"],
    },
    {
        title: "InterMinds",
        subtitle: "R&D(산업기능요원), Vision AI Engineer",
        rightContent: { top: "Sungnam, South Korea", bottom: "2022.05 - 2024.08" },
        color: "green",
        imageList: ["/interminds1.png", "/kiosk2.png"],
        techStack: [],
        description: [
            "딥러닝 기반 무인 매장내 고객 행동 및 동선 분석 - (주)BGF리테일, 한국인터넷진흥원, 한국후지쯔",
            "비전 AI 무인 매장 키오스크 솔루션 개발",
            "오리온 BI 프로젝트(제품 점유율 분석) - (주)오리온, 카카오엔터프라이즈",
        ],
    },
    {
        title: "학부연구생, MLPA LAB",
        subtitle: "논문 세미나 및 딥러닝 연구",
        rightContent: { top: "Dankook University", bottom: "2021.03 - 2022.01" },
        color: "green",
        imageList: ["/mlpa.png", "/mlpa2.webp"],
        techStack: [],
        description: ["질병 조기 진단을 위한 딥러닝 기반 헬스케어 연구 보조"],
    },
];

export const certifications: PortfolioItem[] = [
    {
        title: "현대오토에버 모빌리티 SW 스쿨 2기(스마트팩토리)",
        subtitle: "",
        rightContent: { top: "K-Digital Education", bottom: "2025.05 ~" },
        color: "green",
        imageList: ["/cps.png", "/phm.png"],
        techStack: [],
        description: [
            "CPS Project - S-prodis를 활용한 공정 시뮬레이션 및 UPH 개선",
            "PHM Project - 진동 데이터 분석을 통한 베어링 결함 탐지",
        ],
    },
    {
        title: "수도권 ICT 이노베이션 스퀘어, 컴퓨터비전 고급 과정",
        subtitle: "",
        rightContent: { top: "ICT Innovation Square", bottom: "2025.03 - 2025.05" },
        color: "green",
        imageList: ["/innovation1.png", "/innovation2.png"],
        techStack: [],
        description: ["CNN 부터 ViT까지 컴퓨터비전 심화 이론 학습, Yolo 모델 학습 및 시각화 웹 페이지 개발"],
    },
    {
        title: "네이버 커넥트 재단, AI BASIC boost",
        subtitle: "",
        rightContent: { top: "Naver Connect Foundation", bottom: "2022.01 - 2022.02" },
        color: "green",
        imageList: ["/naver1.png"],
        techStack: [],
        description: ["딥러닝 기초 이론 교육"],
    },
];

export const projects: PortfolioItem[] = [
    {
        title: "IMIS",
        subtitle: "스마트태그, SCADA 연동 스마트팩토리 MES 개발 프로젝트",
        rightContent: { top: "HYUNDAI AUTOEVER SW SCHOOL", bottom: "2025.03 - 2025.07" },
        color: "blue",
        imageList: ["/unoffi1.png", "/unoffi2.jpeg"],
        techStack: ["Spring Boot", "Next.js", "PostgreSQL", "Docker"],
        description: ["SCADA 연동 스마트팩토리 MES 시스템"],
        modalContent: {
            description: `스마트팩토리 환경에서 제조 실행 시스템(MES)을 개발한 프로젝트입니다.
        SCADA 시스템과 연동하여 실시간 생산 데이터를 수집하고 분석합니다.`,
            features: [
                "실시간 생산 모니터링 및 데이터 수집",
                "SCADA 시스템과의 양방향 통신",
                "스마트태그 기반 자재 추적 시스템",
                "생산 계획 및 스케줄링 관리",
                "품질 관리 및 불량 분석",
            ],
            pptUrl: "https://docs.google.com/presentation/d/e/2PACX-1vT-WU52vYLyGQCCpXiWs8tZpwFpYi92N8O9Bk_-iFNDDPKeIul51ufwdcXohLx4rA/pubembed?start=false&loop=false&delayms=3000",
            detailedImages: ["/detail1.png", "/detail2.png", "/detail3.png"],
        },
    },
    {
        title: "UnoffiMap",
        subtitle: "지도 기반 SNS 웹앱",
        rightContent: { top: "Capstone Project", bottom: "2025.03 - 2025.07" },
        color: "blue",
        imageList: ["/unoffi1.png", "/unoffi2.jpeg"],
        techStack: ["Spring Boot", "Next.js", "PostgreSQL", "Docker"],
        modalContent: {
            description: `스마트팩토리 환경에서 제조 실행 시스템(MES)을 개발한 프로젝트입니다.
        SCADA 시스템과 연동하여 실시간 생산 데이터를 수집하고 분석합니다.`,
            features: [
                "실시간 생산 모니터링 및 데이터 수집",
                "SCADA 시스템과의 양방향 통신",
                "스마트태그 기반 자재 추적 시스템",
                "생산 계획 및 스케줄링 관리",
                "품질 관리 및 불량 분석",
            ],
            pptUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQXd42v-Si0LuTR2b6vpwrXe6IlAJkvRiEaBL2yT5skdZiyFOWYsSw3Q4citObPCQ/pubembed?start=false&loop=false&delayms=3000",
            detailedImages: ["/detail1.png", "/detail2.png", "/detail3.png"],
        },
    },
    {
        title: "UWB and Pose-Based IoT Control Interface, MALIBU",
        subtitle: "",
        rightContent: { top: "Capstone Project", bottom: "2024.06 - 2024.12" },
        color: "blue",
        imageList: ["/malibu.png", "/malibu1.jpg", "/malibu2.png"],
        techStack: ["PyTorch", "Python", "C++", "MQTT"],
        description: ["UWB based IoT 3D positioning & 3D pose estimation"],
    },
    {
        title: "QoRder",
        subtitle: "QR 기반 테이블 주문 시스템",
        rightContent: { top: "Capstone Project", bottom: "2024.03 - 2024.06" },
        color: "blue",
        imageList: ["/qr2.png", "/qr4.png", "/qr3.png"],
        techStack: ["Svelte", "FastAPI", "MongoDB", "Python", "JavaScript"],
        description: ["QR 기반 테이블 주문과 실시간 주문 현황 확인이 가능한 시스템입니다."],
    },
];

export const awards: PortfolioItem[] = [
    {
        title: "2024 캡스톤 페스티벌, 2024 캡스톤 디자인(종합 설계) 경진대회",
        subtitle: "최우수상(단국대학교 SW중심사업단), 동상(단국대학교 공학교육혁신센터)",
        rightContent: { top: "", bottom: "2024.11.28 - 2024.12.09" },
        color: "yellow",
        imageList: ["/award1.jpeg", "/award2.png"],
        techStack: ["PyTorch", "Python", "C++", "MQTT"],
        description: ["MALIBU 프로젝트를 경진대회에 출품하여 포스터와 함께 발표하여 수상했습니다."],
    },
    {
        title: "Furiosa AI Hackathon",
        subtitle: "우수상, Furiosa AI",
        rightContent: { top: "", bottom: "2023.11.26" },
        color: "yellow",
        imageList: ["/award3.png", "/award4.jpg"],
        techStack: ["Spring Boot", "Next.js", "Python"],
        description: ['Eye-Tracking Automated Korean Language Question Program Using Furiosa AI NPU, "Eying"'],
    },
    {
        title: "영화 아이디어 구축 활용 과제 발굴을 위한 아이디어 공모전",
        subtitle: "장려상, 한국영상자료원",
        rightContent: { top: "", bottom: "2021.08.31" },
        color: "yellow",
        imageList: ["/award5.png"],
    },
];

export const skillGroups: SkillGroup[] = [
    {
        category: "Frontend",
        skills: ["Next.js", "JavaScript", "TypeScript", "Vite", "Svelte", "Tailwind CSS"],
    },
    {
        category: "Backend",
        skills: ["Flask", "C++", ".NET", "FastAPI", "Docker"],
    },
    {
        category: "Deep Learning",
        skills: ["OpenCV", "PyTorch", "TensorFlow"],
    },
    {
        category: "Others",
        skills: ["Kafka", "MQTT", "gRPC", "MongoDB"],
    },
];
