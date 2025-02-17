"use client";

// components/Navbar.tsx
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons

const Footer = () => {
    return (
        <footer className="bg-gray-400  py-6">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="mt-6 flex gap-4 justify-center">
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
                <p className="mt-4 text-center text-sm">
                    &copy; {new Date().getFullYear()} Marcus Tan
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer

