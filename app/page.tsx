import Profile from "./components/Profile";
import Section from "./components/Section";
import Item from "./components/Item";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeToggle />
      <main className="flex flex-col gap-12 max-w-4xl mx-auto">
        <Profile />

        <Section title="Education">
          <Item
            title="Dankook University"
            subtitle="Department of Computer Engineering, GPA: 3.56/4.5"
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
            subtitle="R&D, Vision AI & Frontend"
            rightContent={{
              top: "Sungnam, South Korea",
              bottom: "2022.05 - 2024.08"
            }}
            color="green"
          >
            <ul className="md:block hidden list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>Vision AI-based unmaned store, StorePOP</li>
              <li>Product detection and classification model for Orion, OSAS</li>
              <li>Development of StorePop kiosk</li>
              <li>Dashboard for CU Gwangju Asia Culture Center branch</li>
            </ul>
          </Item>
        </Section>

        <div className="grid grid-cols-3 gap-4">
          <div className="relative aspect-[9/16]">
            <Image
              src="/kiosk1.png"
              alt="StorePOP"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-[9/16]">
            <Image
              src="/kiosk2.png"
              alt="OSAS"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-[9/16]">
            <Image
              src="/kiosk3.png"
              alt="Dashboard"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

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
            title="UWB and Pose-Based IoT Control Interface, MALIBU"
            subtitle="Capstone design"
            rightContent={{
              top: "",
              bottom: "2024.06"
            }}
            color="red"
          >
            <p className="md:block hidden text-gray-700 dark:text-gray-300 mt-2">UWB based IoT 3D positioning & 3D pose estimation</p>
          </Item>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[400px]">
              <Image
                src="/malibu.png"
                alt="malibu report pdf"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative">
                <Image
                  src="/malibu1.jpg"
                  alt="malibu report pdf"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src="/malibu2.png"
                  alt="malibu report pdf"
                  fill
                  className="absolute object-cover rounded-lg -top-32"
                />
              </div>
            </div>
          </div>

          <Item
            title="Responsive Design QR-Based Table Order, QoRder"
            subtitle="Toy project"
            rightContent={{
              top: "",
              bottom: "2023.11"
            }}
            color="red"
          >
            <p className="md:block hidden text-gray-700 dark:text-gray-300 mt-2">QR table ordering system, Qorder</p>
          </Item>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[400px]">
              <Image
                src="/qr2.png"
                alt="QoRder Mobile"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative h-[190px]">
                <Image
                  src="/qr4.png"
                  alt="QoRder Desktop"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="relative h-[190px]">
                <Image
                  src="/qr3.png"
                  alt="QoRder Menu"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
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

          <Item
            title="Deep Learning-Based Healthcare System Technology Research for Early Disease Diagnosis"
            subtitle=""
            rightContent={{
              top: "",
              bottom: "2021.07"
            }}
            color="red"
          >
            <p className="md:block hidden text-gray-700 dark:text-gray-300 mt-2">Deep Learning-Based Hair Detection Research Project for Early Diagnosis of Hair Loss</p>

          </Item>
        </Section>

        <Section title="Awards">
          <Item
            title="2024 Capstone Design (Comprehensive Design) Competition"
            subtitle="Bronze Medal, Director of the Engineering Education Innovation Center at Dankook University"
            rightContent={{
              top: "",
              bottom: "2024.12.09"
            }}
            color="yellow"
          >
            <p className="md:block hidden text-gray-700 dark:text-gray-300 mt-2">UWB, Pose based IoT control interface, &ldquo;MALIBU&rdquo;</p>
          </Item>

          <Item
            title="2024 Capstone Festival"
            subtitle="Grand Prize, Head of the SW-Centered University at Dankook University"
            rightContent={{
              top: "",
              bottom: "2024.11.28"
            }}
            color="yellow"
          >
            <p className="md:block hidden text-gray-700 dark:text-gray-300 mt-2">UWB, Pose based IoT control interface, &ldquo;MALIBU&rdquo;</p>
          </Item>
          <Item
            title="Furiosa AI Hackathon"
            subtitle="Excellence Award, Furiosa AI"
            rightContent={{
              top: "",
              bottom: "2023.11.26"
            }}
            color="yellow"
          >
            <p className="md:block hidden text-gray-700 dark:text-gray-300 mt-2">Eye-Tracking Automated Korean Language Question Program Using Furiosa AI NPU, &ldquo;Eying&rdquo;</p>
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
