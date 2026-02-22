"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useAppContext } from "@/lib/context";
import { specialities } from "@/lib/groups";
import Loading from "@/components/ui/Loading";

export default function SpecialitySelection() {
  const { language, t } = useAppContext();
  const specsData = useMemo(() => specialities(language)[0], [language]);

  // Group by distinct names
  const allGroups = useMemo(() => {
    const map = new Map();
    for (const [key, value] of Object.entries(specsData)) {
      if (!map.has(value.name)) {
        map.set(value.name, []);
      }
      map.get(value.name).push({ id: key, ...value });
    }
    return Array.from(map.entries()).map(([name, variants]) => ({ name, variants }));
  }, [specsData]);

  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedAltGroup, setSelectedAltGroup] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const [roadmap, setRoadmap] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentGroupVars = useMemo(() => allGroups.find(g => g.name === selectedGroup)?.variants || [], [selectedGroup, allGroups]);
  const hasAltGroups = currentGroupVars.length > 1;

  const currentPrograms = useMemo(() => {
    if (!selectedGroup) return [];
    if (hasAltGroups) {
      if (!selectedAltGroup) return [];
      return currentGroupVars.find((v: any) => v.altqrup === selectedAltGroup)?.programs || [];
    }
    return currentGroupVars[0].programs || [];
  }, [selectedGroup, selectedAltGroup, currentGroupVars, hasAltGroups]);

  const handleGenerateRoadmap = async () => {
    if (!selectedProgram) return;
    setIsGenerating(true);
    setRoadmap(null);
    try {
      const response = await fetch("/api/roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ speciality: selectedProgram, lang: language }),
      });
      const data = await response.json();
      setRoadmap(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleBack = () => {
    if (selectedProgram) {
      setSelectedProgram(null);
      setRoadmap(null);
    } else if (hasAltGroups && selectedAltGroup) {
      setSelectedAltGroup(null);
    } else if (selectedGroup) {
      setSelectedGroup(null);
      setSelectedAltGroup(null);
    }
  };

  if (isGenerating) {
    return (
       <Loading 
         title={language === 'az' ? 'Yol Xəritəsi Hazırlanır...' : 'Generating Roadmap...'} 
         description={language === 'az' ? 'Süni intellekt bu ixtisas üçün ən ideal öyrənmə mərhələlərini hesablayır. Zəhmət olmasa gözləyin.' : 'AI is preparing the most ideal learning path for this speciality. Please wait.'} 
         icon="route" 
       />
    );
  }

  if (roadmap) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex py-12 px-4 justify-center">
        <div className="w-full max-w-5xl bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl p-8 md:p-12 border border-slate-100 dark:border-slate-700">
           <button onClick={() => setRoadmap(null)} className="mb-6 p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full transition-all inline-flex items-center">
             <span className="material-symbols-outlined text-sm">arrow_back</span>
           </button>
           
           <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{roadmap.title}</h2>
           <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">{roadmap.description}</p>
           
           <div className="flex gap-4 items-center mb-10 pb-6 border-b border-slate-100 dark:border-slate-700">
              <span className="px-4 py-2 bg-mint/10 text-mint font-bold rounded-full text-sm">
                ~ {roadmap.estimatedMonths} {language === "az" ? "Ay" : "Months"}
              </span>
           </div>

           <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[23px] before:w-[2px] before:bg-slate-100 dark:before:bg-slate-700">
             {roadmap.milestones?.map((sc: any, idx: number) => (
                <div key={idx} className="relative flex gap-6 pb-12 last:pb-0 group">
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center font-bold text-primary group-hover:border-primary transition-colors">
                    {sc.month}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-3">{sc.task}</h3>
                    {sc.details && (
                      <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-4">
                        {sc.details}
                      </p>
                    )}
                    {sc.keyConcepts && sc.keyConcepts.length > 0 && (
                      <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">{language === "az" ? "Əsas Anlayışlar" : "Key Concepts"}</span>
                        <div className="flex flex-wrap gap-2">
                          {sc.keyConcepts.map((c: string, cIdx: number) => (
                             <span key={cIdx} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold">{c}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {sc.practicalProject && (
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-md mt-2">
                        <div className="flex items-center gap-2 mb-2 text-primary font-bold text-sm">
                          <span className="material-symbols-outlined text-[18px]">build</span>
                          {language === "az" ? "Praktik Tapşırıq" : "Practical Project"}
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{sc.practicalProject}</p>
                      </div>
                    )}
                  </div>
                </div>
             ))}
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center py-12 px-4 text-center">
      <div className="w-full max-w-5xl bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl overflow-hidden p-8 md:p-12 flex flex-col min-h-[80vh] border border-slate-100 dark:border-slate-700">
        <div className="self-start">
          <Link href="/" className={`${selectedGroup ? 'hidden' : 'inline-flex'} p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors mb-6`}>
            <span className="material-symbols-outlined">home</span>
          </Link>
          {selectedGroup && (
            <button onClick={handleBack} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors mb-6 inline-flex">
               <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}
        </div>
        
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            {!selectedGroup ? (language === "az" ? "Qrup Seçimi" : "Group Selection") :
             hasAltGroups && !selectedAltGroup ? (language === "az" ? "Alt Qrup Seçimi" : "Sub-group Selection") :
             (language === "az" ? "İxtisas Seçimi" : "Program Selection")}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
             {!selectedGroup ? (language === "az" ? "Hədəf qrupunuzu seçin." : "Select your target group.") :
              hasAltGroups && !selectedAltGroup ? (language === "az" ? "Zəhmət olmasa alt qrupu təyin edin." : "Please define your sub-group.") :
              (language === "az" ? "Sizə uyğun olan ixtisası seçin." : "Select the field that suits you.")}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
          {/* Group Level */}
          {!selectedGroup && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {allGroups.map((g: any, i: number) => (
                <div onClick={() => setSelectedGroup(g.name)} key={i} className="p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-700 hover:border-primary cursor-pointer group flex flex-col items-center justify-center gap-4 transition-all hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-primary/5 to-mint/5 dark:from-primary/10 dark:to-mint/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)] border border-primary/20 group-hover:border-primary/40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-[32px] text-primary relative z-10 drop-shadow-sm">{g.variants[0]?.groupIcon || "folder_open"}</span>
                  </div>
                  <span className="font-bold text-lg text-slate-800 dark:text-white">{g.name}</span>
                </div>
              ))}
            </div>
          )}

          {/* Alt Group Level */}
          {selectedGroup && hasAltGroups && !selectedAltGroup && !selectedProgram && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentGroupVars.map((v: any, i: number) => (
                <div onClick={() => setSelectedAltGroup(v.altqrup)} key={i} className="p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-700 hover:border-mint cursor-pointer group flex flex-col items-center justify-center gap-4 transition-all hover:shadow-xl hover:shadow-mint/10">
                  <div className="relative w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-mint/5 to-teal-400/5 dark:from-mint/10 dark:to-teal-400/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(45,212,191,0.2)] border border-mint/20 group-hover:border-mint/40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-[32px] text-mint relative z-10 drop-shadow-sm">{v.altIcon || "account_tree"}</span>
                  </div>
                  <span className="font-bold text-lg text-slate-800 dark:text-white">{v.altqrup}</span>
                </div>
              ))}
            </div>
          )}

          {/* Programs Level */}
          {selectedGroup && (!hasAltGroups || selectedAltGroup) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPrograms.length > 0 ? currentPrograms.map((prog: string, i: number) => (
                <div onClick={() => setSelectedProgram(prog)} key={i} className={`p-4 rounded-xl border transition-all hover:translate-x-1 cursor-pointer flex items-center gap-3 ${prog === selectedProgram ? 'bg-primary/10 border-primary text-primary shadow-md ring-2 ring-primary/20' : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary text-slate-700 dark:text-slate-300'}`}>
                   <span className="material-symbols-outlined text-[20px]">{prog === selectedProgram ? "check_circle" : "school"}</span>
                   <span className="font-semibold text-sm">{prog}</span>
                </div>
              )) : (
                 <p className="col-span-full">{t.speciality.noPrograms}</p>
              )}
            </div>
          )}

          {/* Final Generate Action */}
          {selectedProgram && (
            <div className="flex flex-col items-center justify-center mt-12 space-y-4 animate-[fadeInTop_0.5s_ease-out]">
               <button onClick={handleGenerateRoadmap} className="h-16 px-10 rounded-[2rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xl shadow-2xl transition-all flex items-center gap-3 active:scale-95 hover:scale-105 group">
                  {language === "az" ? "Yol Xəritəsini Yarat" : "Generate Roadmap"}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}