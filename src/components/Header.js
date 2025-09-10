'use client';

import { useState } from 'react';
import Image from 'next/image';
// import logo from "@/src/assets/logo.png";
import logo from "@/public/assets/logo.png";
import SunButton from './SunButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Navigation Bar */}
      <nav className="container-2xl mx-auto px-[55px] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" />
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-6">
          {/* Sign In Button */}
          <SunButton>SIGN IN</SunButton>

          {/* Hamburger Menu Button - Glass UI */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group relative p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white focus:outline-none transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:scale-110 hover:shadow-xl hover:shadow-white/10"
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          </button>
        </div>
      </nav>

      {/* Glass Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Glass Sidebar */}
          <div className="absolute top-0 right-0 h-full w-80 bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-2xl">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center">
                <Image src={logo} alt="Logo" className="h-8" />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="group p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-2">
              <button className="group w-full text-left px-4 py-3 text-white font-medium text-sm tracking-wider uppercase rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-yellow-300 hover:translate-x-2">
                <span className="relative z-10">SOLUTIONS</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group w-full text-left px-4 py-3 text-white font-medium text-sm tracking-wider uppercase rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-yellow-300 hover:translate-x-2">
                <span className="relative z-10">DEALERS</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group w-full text-left px-4 py-3 text-white font-medium text-sm tracking-wider uppercase rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-yellow-300 hover:translate-x-2">
                <span className="relative z-10">INVESTORS</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group w-full text-left px-4 py-3 text-white font-medium text-sm tracking-wider uppercase rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-yellow-300 hover:translate-x-2">
                <span className="relative z-10">COMPANY</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Sidebar Footer CTA */}
            <div className="absolute bottom-6 left-6 right-6">
              <SunButton className="w-full">SIGN IN</SunButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
