import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return (
        <div className="flex items-center flex-col gap-5 md:flex-row md:gap-16">
            <div className="flex-shrink-0">
                <div className="rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48 relative">
                    <Image
                        className="absolute -top-5 object-cover"
                        src="/suit.jpeg"
                        alt="profile image"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col gap-2">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">Mingyun Jeong</div>
                    <div className="text-lg text-gray-600 dark:text-gray-300">Computer Vision & Frontend Developer</div>
                    <div className="flex gap-4">
                        <Link href="/sample.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">
                            CV
                        </Link>
                        <Link href="https://github.com/mingun0112" className="text-blue-600 dark:text-blue-400 hover:underline">
                            Github
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 