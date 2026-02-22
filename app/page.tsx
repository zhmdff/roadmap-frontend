"use client";

import Link from "next/link";
import { useAppContext } from "@/lib/context";

export default function Home() {
  const { t } = useAppContext();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mint/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                <span className="material-symbols-outlined text-primary text-[20px]">auto_awesome</span>
                <span className="text-sm font-bold text-primary uppercase tracking-widest leading-none">{t.hero.badge}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                {t.hero.title.split(" ").slice(0, -1).join(" ")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-mint">
                  {t.hero.title.split(" ").slice(-1)}
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/speciality_test" className="h-14 px-10 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl shadow-primary/25 transition-all active:scale-95 group">
                  {t.hero.startBtn}
                  <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
                <Link href="/features" className="h-14 px-10 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white rounded-full flex items-center justify-center font-bold text-lg hover:border-primary transition-all active:scale-95">
                  {t.hero.learnMore}
                </Link>
              </div>
            </div>

            {/* Premium Visual Element */}
            <div className="relative group hidden md:block w-full max-w-[500px] mx-auto xl:mx-0">
               {/* Background Glows */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-mint/30 rounded-full blur-3xl group-hover:blur-[120px] transition-all duration-700 opacity-60"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl rounded-full"></div>

               {/* Main Center Card */}
               <div className="relative z-10 w-full aspect-[4/3] rounded-[2.5rem] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white dark:border-slate-800 shadow-2xl p-6 flex flex-col justify-between overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Inner subtle glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-mint/20 blur-3xl rounded-full"></div>
                  
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-white text-[24px]">psychology</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{t.hero.aiEngine}</h4>
                        <div className="flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                          </span>
                          <span className="text-xs font-semibold text-mint">{t.hero.online}</span>
                        </div>
                      </div>
                    </div>
                    {/* decorative menu dots */}
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                  </div>

                  {/* Body of main card */}
                  <div className="space-y-4">
                    <div className="h-2 w-1/3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                    
                    {/* Scanning animation bar */}
                    <div className="relative w-full h-1 mt-6 bg-slate-100 dark:bg-slate-800 overflow-hidden rounded-full">
                       <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent shimmer-wrapper"></div>
                    </div>
                  </div>
               </div>

               {/* Floating Card - Top Right */}
               <div className="absolute -top-6 -right-12 z-20 w-48 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/50 dark:border-slate-700 shadow-xl p-4 transform translate-y-4 group-hover:-translate-y-1 transition-transform duration-700 delay-100 animate-float">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-mint/10 flex items-center justify-center text-mint">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.hero.compatibility}</div>
                      <div className="text-lg font-black text-slate-900 dark:text-white">98%</div>
                    </div>
                 </div>
               </div>

               {/* Floating Card - Bottom Left */}
               <div className="absolute -bottom-8 -left-8 z-30 w-56 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/50 dark:border-slate-700 shadow-xl p-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                 <div className="text-xs font-bold text-slate-400 mb-3">{t.hero.recommendedPath}</div>
                 <div className="space-y-2">
                   <div className="flex items-center gap-2">
                     <div className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-mint flex items-center justify-center text-white shadow-[0_0_10px_rgba(99,102,241,0.5)] text-[12px] font-bold">1</div>
                     <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-slate-500 text-[12px] font-bold">2</div>
                     <div className="h-2 w-16 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - The "Apps" section */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">{t.features.title}</h2>
               <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                {t.features.subtitle}
              </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-background-light dark:bg-slate-800 border-2 border-transparent hover:border-primary transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/5 to-mint/5 dark:from-primary/10 dark:to-mint/10 flex items-center justify-center text-primary mb-6 transition-transform duration-500 group-hover:scale-110 border border-primary/20 shadow-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="material-symbols-outlined text-[32px] drop-shadow-sm relative z-10">quiz</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.features.aiTest}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">{t.features.aiTestDesc}</p>
              <Link href="/speciality_test" className="inline-flex items-center text-primary font-bold gap-2">
                {t.features.aiTestBtn} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-background-light dark:bg-slate-800 border-2 border-transparent hover:border-mint transition-all duration-300 group hover:shadow-2xl hover:shadow-mint/10">
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-mint/5 to-teal-400/5 dark:from-mint/10 dark:to-teal-400/10 flex items-center justify-center text-mint mb-6 transition-transform duration-500 group-hover:scale-110 border border-mint/20 shadow-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="material-symbols-outlined text-[32px] drop-shadow-sm relative z-10">map</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.features.roadmap}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">{t.features.roadmapDesc}</p>
              <Link href="/speciality" className="inline-flex items-center text-mint font-bold gap-2">
                {t.features.roadmapBtn} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-background-light dark:bg-slate-800 border-2 border-transparent hover:border-orange-400 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-6 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[32px]">library_books</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.features.resources}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">{t.features.resourcesDesc}</p>
              <button className="inline-flex items-center text-orange-500 font-bold gap-2">
                {t.features.comingSoon} <span className="material-symbols-outlined text-[18px]">lock</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-100 dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 max-w-2xl text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8">{t.about.title}</h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed opacity-80 mb-10">
                  {t.about.text}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-300 dark:border-white/10">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">10k+</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">{t.stats.users}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">50+</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">{t.stats.specialities}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">98%</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">{t.stats.satisfaction}</div>
                  </div>
                </div>
              </div>

              {/* Decorative Image/Graphic for About */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2 hidden lg:block w-72 h-72">
                 <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping-slow"></div>
                    <div className="relative bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/20 p-8 rounded-[2rem] w-full h-full flex flex-col justify-center items-center text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined text-[80px]">groups</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
