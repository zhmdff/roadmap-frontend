"use client";

import Image from "next/image";
import { useAppContext } from "@/lib/context";

export default function Footer() {
  const { t } = useAppContext();
  
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Roadmap AI" width={28} height={28} className="rounded-lg" />
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Roadmap AI</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
          </div>

          <p className="text-sm text-slate-400 dark:text-slate-500">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
