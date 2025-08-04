import Profile from "./components/Profile";
import Section from "./components/Section";
import Item from "./components/Item";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";
// <Item
//     title="InterMinds"
//     subtitle="R&D(산업기능요원), Vision AI Engineer"
//     rightContent={{
//         top: "Sungnam, South Korea",
//         bottom: "2022.05 - 2024.08"
//     }}
//     color="green"
//     imageList={[
//         "/interminds1.png",
//         "/kiosk2.png",
//     ]}
//     techStack={[
//     ]
//     }
// >
export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeToggle />
      <main className="flex flex-col gap-12 max-w-4xl mx-auto">
        <Profile />

        <Section title="Education">
          <Item
            title="Dankook University"
            subtitle="Department of Computer Engineering, GPA: 3.69/4.5"
            rightContent={{
              top: "Yongin, South Korea",
              bottom: "2019 - Present"
            }}
            color="blue"
          />

          <Item
            title="Salesio High School"
            subtitle=""
            rightContent={{
              top: "Gwangju, South Korea",
              bottom: "2016 - 2019"
            }}
            color="blue"
          />
        </Section>
          <Section title="Career">
              <Item
                  title="InterMinds"
                  subtitle="R&D(산업기능요원), Vision AI Engineer"
                  rightContent={{
                      top: "Sungnam, South Korea",
                      bottom: "2022.05 - 2024.08"
                  }}
                  color="green"
                  imageList={[
                      "/interminds1.png",
                      "/kiosk2.png",
                  ]}
                  techStack={[
                  ]
                  }
              >
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
                      딥러닝 기반 무인 매장내 고객 행동 및 동선 분석 - (주)BGF리테일, 한국인터넷진흥원, 한국후지쯔
                  </p>
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
                      비전 AI 무인 매장 키오스크 솔루션 개발
                  </p>
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
                      오리온 BI 프로젝트(제품 점유율 분석) - (주)오리온, 카카오엔터프라이즈
                  </p>
              </Item>
              <Item
                  title="학부연구생, MLPA LAB"
                  subtitle="논문 세미나 및 딥러닝 연구"
                  rightContent={{ top: "Dankook University", bottom: "2021.03 - 2022.01" }}
                  color="green"
                  imageList={[
                      "/mlpa.png",
                      "/mlpa2.webp",
                  ]}
                  techStack={[
                  ]
                  }
              >
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
                      질병 조기 진단을 위한 딥러닝 기반 헬스케어 연구 보조
                  </p>
              </Item>
          </Section>
          <Section title="Certification">
              <Item
                  title="현대오토에버 모빌리티 SW 스쿨 2기(스마트팩토리)"
                  subtitle=""
                  rightContent={{
                      top: "K-Digital Education",
                      bottom: "2025.05 ~"
                  }}
                  color="green"
                  imageList={[
                      "/cps.png",
                      "/phm.png",
                  ]}
                  techStack={[
                  ]
                  }

              >
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
                      CPS Project - S-prodis를 활용한 공정 시뮬레이션 및 UPH 개선

                  </p>
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">

                      PHM Project - 진동 데이터 분석을 통한 베어링 결함 탐지
                  </p>
              </Item>
              <Item
                  title="수도권 ICT 이노베이션 스퀘어, 컴퓨터비전 고급 과정"
                  subtitle=""
                  rightContent={{
                      top: "ICT Innovation Square",
                      bottom: "2025.03 - 2025.05"
                  }}
                  color="green"
                  imageList={[
                      "/innovation1.png",
                      "/innovation2.png",
                  ]}
                  techStack={[
                  ]
                  }

              >
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
                      CNN 부터 ViT까지 컴퓨터비전 심화 이론 학습, Yolo 모델 학습 및 시각화 웹 페이지 개발
                  </p>
              </Item>
              <Item
                  title="네이버 커넥트 재단, AI BASIC boost"
                  subtitle=""
                  rightContent={{
                      top: "Naver Connect Foundation",
                      bottom: "2022.01 - 2022.02"
                  }}
                  color="green"
                  imageList={[
                      "/naver1.png",

                  ]}
                  techStack={[
                  ]
                  }
              >
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
                      딥러닝 기초 이론 교육
                  </p>
              </Item>

          </Section>




        <Section title="Skills">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
                  alt="Next.js"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="JavaScript"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"
                  alt="Vite"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white"
                  alt="Svelte"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="TypeScript"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                  alt="Tailwind CSS"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
                  alt="Flask"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />

                <Image
                  src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white"
                  alt="FastAPI"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
                  alt="Docker"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Deep Learning</h3>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white"
                  alt="OpenCV"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
                  alt="PyTorch"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
                  alt="TensorFlow"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Others</h3>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white"
                  alt="Kafka"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/MQTT-660066?style=for-the-badge&logo=mqtt&logoColor=white"
                  alt="MQTT"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/gRPC-4285F4?style=for-the-badge&logo=grpc&logoColor=white"
                  alt="gRPC"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                  alt="MongoDB"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                  style={{ width: 'auto' }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Projects">

          <Item
              title="UnoffiMap"
              subtitle="지도 기반 SNS 웹앱"
              rightContent={{ top: "Capstone Project", bottom: "2025.03 - 2025.07" }}
              color="blue"
              imageList={[
                "/unoffi1.png",
                "/unoffi2.jpeg",

              ]}
              techStack={[
                  {name: "Spring Boot", badgeSrc: "https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=pytorch&logoColor=white"},
                  {name:"Next" ,badgeSrc: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"},
                {name:"postgresql", badgeSrc:"https://img.shields.io/badge/postgresql-4169E1?style=flat-square&logo=postgresql&logoColor=white"},
                  {name:"docker", badgeSrc:"https://img.shields.io/badge/docker-2496ED?style=flat-square&logo=docker&logoColor=white"},

              ]
              }
          >
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">

            </p>
          </Item>


          <Item
              title="UWB and Pose-Based IoT Control Interface, MALIBU"
              subtitle=""
              rightContent={{ top: "Capstone Project", bottom: "2024.06 - 2024.12" }}
              color="blue"
              imageList={[
                "/malibu.png",
                "/malibu1.jpg",
                "/malibu2.png"
              ]}
              techStack={[
                {name: "pytorch", badgeSrc: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
                },
                {name:"Python" ,badgeSrc: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"},
                {name:"c++", badgeSrc:"https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white"},
                  {name: "mqtt", badgeSrc: "https://img.shields.io/badge/MQTT-660066?style=for-the-badge&logo=mqtt&logoColor=white"}

              ]
              }
          >
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
              UWB based IoT 3D positioning & 3D pose estimation
            </p>
          </Item>

          <Item
              title="QoRder"
              subtitle="QR 기반 테이블 주문 시스템"
              rightContent={{ top: "Capstone Project", bottom: "2024.03 - 2024.06" }}
              color="blue"
              imageList={[
                "/qr2.png",
                "/qr4.png",
                "/qr3.png"
              ]}
              techStack={[
                {name: "svelte", badgeSrc:"https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white"},
                {name:"fastapi" ,badgeSrc: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white"},
                {name:"MongoDB", badgeSrc: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"},
                {name:"Python" ,badgeSrc: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"},
                {name:"Python" ,badgeSrc: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"},

              ]
              }
          >
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
              QR 기반 테이블 주문과 실시간 주문 현황 확인이 가능한 시스템입니다.
            </p>
          </Item>


          {/* <Item
            title="Pose Annotation Viewer, Banana"
            subtitle=""
            rightContent={{
              top: "",
              bottom: "2023.11.26"
            }}
            color="red"
          >
            <p className="md:block hidden text-gray-700 dark:text-gray-300 mt-2">Custom dataset annotation 검수툴</p>

          </Item> */}


        </Section>

        <Section title="Awards">
            <Item
                title="2024 캡스톤 페스티벌, 2024 캡스톤 디자인(종합 설계) 경진대회"
                subtitle="최우수상(단국대학교 SW중심사업단), 동상(단국대학교 공학교육혁신센터)"
                rightContent={{ top: "", bottom: "2024.11.28 - 2024.12.09" }}
                color="yellow"
                imageList={[
                    "/award1.jpeg",
                    "/award2.png",

                ]}
                techStack={[
                    {name: "pytorch", badgeSrc: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
                    },
                    {name:"Python" ,badgeSrc: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"},
                    {name:"c++", badgeSrc:"https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white"},
                    {name: "mqtt", badgeSrc: "https://img.shields.io/badge/MQTT-660066?style=for-the-badge&logo=mqtt&logoColor=white"}

                ]
                }
            >
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-200">
                    MALIBU 프로젝트를 경진대회에 출품하여 포스터와 함께 발표하여 수상했습니다.
                </p>
            </Item>

          <Item
            title="Furiosa AI Hackathon"
            subtitle="우수상, Furiosa AI"
            rightContent={{
              top: "",
              bottom: "2023.11.26"
            }}
            techStack={[
                {name: "Spring Boot", badgeSrc: "https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=pytorch&logoColor=white"},
                {name:"Next" ,badgeSrc: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"},
                {name:"Python" ,badgeSrc: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"},


            ]}
            color="yellow"
            imageList={[

                "/award3.png",
                "/award4.jpg",

            ]}
          >
            <p className="md:block hidden text-gray-700 dark:text-gray-300 mt-2">Eye-Tracking Automated Korean Language Question Program Using Furiosa AI NPU, &ldquo;Eying&rdquo;</p>
          </Item>
            <Item
                title="영화 아이디어 구축 활용 과제 발굴을 위한 아이디어 공모전"
                subtitle="장려상, 한국영상자료원"
                rightContent={{
                    top: "",
                    bottom: "2021.08.31"
                }}
                techStack={[

                ]}
                color="yellow"
                imageList={[

                    "/award5.png",


                ]}
            >
                <p className="md:block hidden text-gray-700 dark:text-gray-300 mt-2"></p>
            </Item>
        </Section>
        <Section title="License & Language">
          <Item
            title="TOEIC Speaking"
            subtitle="ETS"
            rightContent={{
              top: "Score: 160(AL)",
              bottom: "2025.03.09"
            }}
            color="purple"
          >
            <p className="md:hidden block text-gray-700 dark:text-gray-300 ">Score: 160(AL)</p>
          </Item>
          <Item
            title="TOEIC"
            subtitle="ETS"
            rightContent={{
              top: "Score: 875/990",
              bottom: "2025.01.12"
            }}
            color="purple"
          >
            <p className="md:hidden block text-gray-700 dark:text-gray-300">Score: 875/990</p>
          </Item>
          <Item
            title="정보처리기사"
            subtitle="한국산업인력공단"
            rightContent={{
              top: "",
              bottom: "2024.09.10"
            }}
            color="purple"
          />
        </Section>
      </main>

      <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 Mingyun Jeong. All rights reserved.</p>
      </footer>
    </div>
  );
}
