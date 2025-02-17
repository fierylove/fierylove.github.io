// app/components/Banner.tsx
"use client";

import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="relative h-auto md:h-[40vh] flex items-center">
            <div className="max-w-7xl p-8 flex flex-col md:flex-row items-center">
                {/* Profile Picture Container */}
                <div className="flex-shrink-0 mr-0 md:mr-8">
                    <img
                        src="/images/profile.jpg"
                        alt="Marcus Tan Profile Picture"
                        className="w-36 h-36 rounded-full border-4 border-secondary"
                    />
                </div>
                {/* Content Container */}
                <div className="bg-secondary bg-opacity-70 p-4 rounded mt-4 md:mt-0">
                    <h1 className="text-4xl md:text-5xl mb-2">Marcus Tan</h1>
                    <p className="text-lg">Game Developer, Software Engineer, Problem Solver</p>
                    <div className="mt-6 flex gap-4">
                        <Link href="https://www.linkedin.com/in/marcustan99/" target="_blank">
                            <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800 transition" />
                        </Link>
                        <Link href="https://github.com/fierylove" target="_blank">
                            <FaGithub className="text-3xl text-gray-900 hover:text-gray-700 transition" />
                        </Link>
                        <Link href="mailto:zhihao_tan1999@outlook.com">
                            <FaEnvelope className="text-3xl text-red-500 hover:text-red-700 transition" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
