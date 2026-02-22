"use client";

import { useAppContext } from "@/lib/context";

export default function AboutPage() {
  const { t } = useAppContext();

  return (
    <div className="py-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{t.about.title}</h1>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {t.about.text}
        </p>

        <div className="grid sm:grid-cols-2 gap-8 pt-10">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group">
             <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/5 to-mint/5 dark:from-primary/10 dark:to-mint/10 flex items-center justify-center text-primary mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 border border-primary/20 shadow-sm overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <span className="material-symbols-outlined relative z-10 drop-shadow-sm">lightbulb</span>
             </div>
             <h3 className="text-xl font-bold mb-2">{t.about.vision}</h3>
             <p className="text-slate-500 text-sm">{t.about.visionDesc}</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-mint/5 transition-all group">
             <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-mint/5 to-teal-400/5 dark:from-mint/10 dark:to-teal-400/10 flex items-center justify-center text-mint mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 border border-mint/20 shadow-sm overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <span className="material-symbols-outlined relative z-10 drop-shadow-sm">verified</span>
             </div>
             <h3 className="text-xl font-bold mb-2">{t.about.mission}</h3>
             <p className="text-slate-500 text-sm">{t.about.missionDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
