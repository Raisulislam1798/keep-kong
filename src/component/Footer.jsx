import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#1b3b32] text-white py-12 px-6 flex flex-col justify-between  min-h-[350px]">
            {/* Top/Middle Section: Brand & Bio */}
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">KeenKeeper</h2>
                <p className="text-sm md:text-base text-gray-300 max-w-lg">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Links */}
                <div className="mt-4 flex flex-col items-center gap-2">
                    <span className="text-sm font-medium text-gray-300">Social Links</span>
                    <div className="flex gap-3">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1b3b32] p-2.5 rounded-full hover:bg-gray-200 transition">
                            <FaInstagram size={18} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1b3b32] p-2.5 rounded-full hover:bg-gray-200 transition">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1b3b32] p-2.5 rounded-full hover:bg-gray-200 transition">
                            <FaXTwitter size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright & Policy Links */}
            <div className="max-w-7xl mx-auto w-full pt-8 mt-8 border-t border-[#2c5347] flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 gap-4">
                <p>© 2026 KeenKeeper. All rights reserved.</p>

                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                    <Link href="/terms" className="hover:underline">Terms of Service</Link>
                    <Link href="/cookies" className="hover:underline">Cookies</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;