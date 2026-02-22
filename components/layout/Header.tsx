"use client";

import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/lib/context";

export default function Header() {
  const { language, setLanguage, theme, toggleTheme, t } = useAppContext();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-bottom border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Roadmap AI" width={36} height={36} className="rounded-xl" />
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Roadmap AI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">{t.nav.home}</Link>
          <Link href="/features" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">{t.nav.features}</Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">{t.nav.about}</Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button 
            onClick={() => setLanguage(language === "az" ? "en" : "az")}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
          >
            {language.toUpperCase()}
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
          </button>

          <Link 
            href="/speciality_test" 
            className="hidden sm:flex h-10 px-6 bg-primary hover:bg-primary-dark text-white rounded-full items-center justify-center text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            {t.nav.test}
          </Link>
        </div>
      </div>
    </header>
  );
}