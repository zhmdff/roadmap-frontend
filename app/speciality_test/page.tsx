"use client";
import { useState } from "react";
import { SchemaType } from "@google/generative-ai";
import Link from "next/link";
import { useAppContext } from "@/lib/context";
import Loading from "@/components/ui/Loading";

import { getQuestions } from "@/lib/questions";

export default function SpecialityTest() {
  const { language, t } = useAppContext();
  const questions = getQuestions(language);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextStep = () => {
    if (answers[questions[currentStep].id]) {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsAnalyzing(true);
    try {
      const response = await fetch("/api/speciality-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, lang: language }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (result) {
    return (
      <>
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center py-12 px-4">
        <div className="mx-auto w-full max-w-4xl grid md:grid-cols-3 gap-8">
          {/* Sidebar / Left Col */}
          <div className="md:col-span-1 space-y-6">
            <div className="p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/20 relative overflow-hidden">
               <div className="relative z-10">
                 <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">{t.test.recommended}</span>
                 <h2 className="text-3xl font-bold mb-2">{result.recommendedSpeciality}</h2>
                 <p className="text-blue-100 text-sm opacity-80">{t.test.compatibility}: {Math.round(result.confidenceScore * 100)}%</p>
               </div>
               <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] opacity-10">school</span>
            </div>
          </div>

          {/* Main Content / Roadmap */}
          <div className="md:col-span-2 space-y-8">
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
               <h3 className="text-2xl font-bold mb-8 flex items-center justify-between">
                 <span>{t.test.roadmapTitle}</span>
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{(result.suggestedRoadmap || []).length} {t.test.steps}</span>
               </h3>
               
               <div className="space-y-0">
                  {(result.suggestedRoadmap || []).map((step: any, index: number) => (
                    <div key={index} className="relative flex gap-6 pb-10 last:pb-0 group">
                      {index !== (result.suggestedRoadmap || []).length - 1 && (
                        <div className="absolute left-[23px] top-12 bottom-0 w-[2px] bg-slate-100 dark:bg-slate-700 group-hover:bg-primary/30 transition-colors"></div>
                      )}
                      <div className={`relative z-10 shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                        step.status === 'completed' ? 'bg-mint text-white' : 
                        step.status === 'current' ? 'bg-primary text-white animate-pulse' : 
                        'bg-slate-100 dark:bg-slate-700 text-slate-400'
                      }`}>
                        <span className="material-symbols-outlined">
                          {step.status === 'completed' ? 'check' : step.status === 'current' ? 'bolt' : 'lock'}
                        </span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.step}</h4>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="flex justify-end gap-4">
               <Link href="/" className="px-8 py-3 rounded-full border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                   {t.test.homePage}
                </Link>
                <button onClick={() => window.print()} className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-all">
                   {t.test.savePdf}
                </button>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
               <h3 className="font-bold mb-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">psychology</span> {t.test.analysis}
               </h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed italic">
                 &quot;{result.analysis}&quot;
               </p>
            </div>

            {/* Alternatives */}
            {result.alternatives && result.alternatives.length > 0 && (
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                 <h3 className="font-bold mb-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-mint">explore</span> {t.test.alternatives}
                 </h3>
                 <div className="space-y-4">
                   {result.alternatives.map((alt: any, idx: number) => (
                     <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50">
                       <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-slate-900 dark:text-white text-sm">{alt.speciality}</span>
                         <span className="text-xs font-bold px-2 py-1 bg-mint/10 text-mint rounded-full">{alt.matchPercentage}%</span>
                       </div>
                       <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{alt.reason}</p>
                     </div>
                   ))}
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </>
    );
  }

  if (isAnalyzing) {
    return (
       <Loading 
         title={language === 'az' ? 'Gələcəyiniz hesablanır...' : 'Calculating your future...'} 
         description={language === 'az' ? 'Süni intellekt cavablarınızı analiz edir və sizə ən uyğun roadmap hazırlayır.' : 'AI is analyzing your answers and preparing the most suitable roadmap for you.'} 
         icon="psychology" 
       />
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = Math.round(((currentStep + 1) / questions.length) * 100);

  return (
    <div className="py-12 px-4 flex justify-center items-center min-h-[85vh]">
      <div className="w-full max-w-5xl bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-slate-100 dark:border-slate-700">
        
        {/* Left Side: Progress & Info */}
        <div className="w-full md:w-1/3 bg-slate-50 dark:bg-slate-900/50 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/10 to-mint/10 border border-primary/20 rounded-full text-primary font-bold text-[10px] uppercase tracking-widest mb-8 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 dark:bg-white/5 opacity-50"></div>
                <span className="material-symbols-outlined text-[14px] relative z-10">auto_awesome</span> <span className="relative z-10">{t.test.aiWizard}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.test.quizTitle}</h3>
              <p className="text-slate-400 text-sm mb-12">{t.test.quizSubtitle}</p>
           </div>

           <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{t.test.progress}</span>
                <span className="text-lg font-black text-primary">{progress}%</span>
              </div>
              <div className="h-3 w-full bg-white dark:bg-slate-800 rounded-full overflow-hidden p-1 shadow-inner">
                 <div className="h-full bg-gradient-progress rounded-full transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
              </div>
           </div>
        </div>

        {/* Right Side: Quiz Content */}
        <div className="flex-1 p-10 md:p-16 flex flex-col relative">
          <div className="flex-1">
             <div className="flex items-center gap-4 mb-8">
                   <h1 className="text-2xl font-bold leading-tight">{currentQuestion.text}</h1>
             </div>

             <div className="grid gap-4">
                {currentQuestion.options.map((opt, i) => {
                  const isChecked = answers[currentQuestion.id] === opt.text;
                  return (
                  <label key={i} className="group cursor-pointer">
                    <input 
                      type="radio" 
                      className="sr-only" 
                      name="q"
                      checked={isChecked}
                      onChange={() => handleAnswer(currentQuestion.id, opt.text)}
                    />
                    <div className={`flex items-center p-5 rounded-2xl border-2 transition-all ${isChecked ? "border-primary bg-primary/5" : "border-slate-100 dark:border-slate-800 hover:border-primary/50"}`}>
                       <div className="flex-1">
                          <div className="font-bold text-lg mb-0.5">{i+1}. {opt.text}</div>
                          {/* <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">{opt.desc}</div> */}
                       </div>
                       <div className={`w-6 h-6 flex justify-center items-center rounded-full border-2 transition-all ${isChecked ? "border-primary" : "border-slate-200 dark:border-slate-700"}`}>
                          <div className={`w-3 h-3 rounded-full bg-primary transition-transform duration-200 ${isChecked ? "scale-100" : "scale-0"}`}></div>
                       </div>
                    </div>
                  </label>
                )})}
             </div>
          </div>

          <div className="flex gap-4 pt-10">
             <button 
               onClick={prevStep} 
               disabled={currentStep === 0}
               className="flex-1 h-14 rounded-2xl border-2 border-slate-100 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all disabled:opacity-0"
             >
               {t.test.back}
             </button>
             <button 
               onClick={nextStep}
               disabled={!answers[currentQuestion.id]}
               className="flex-[2] h-14 rounded-2xl bg-primary hover:bg-primary-dark text-white font-bold shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
             >
               {currentStep === questions.length - 1 ? t.test.seeResult : t.test.next}
               <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
