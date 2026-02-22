"use client";

import React from "react";

interface LoadingProps {
  title: string;
  description: string;
  icon?: string;
}

export default function Loading({ title, description, icon = "route" }: LoadingProps) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-48 h-48 mb-10 flex items-center justify-center">
         <div className="absolute inset-0 border-4 border-slate-200 dark:border-slate-700 rounded-full"></div>
         <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
         <div className="absolute inset-0 border-4 border-mint rounded-full border-b-transparent animate-[spin_2s_linear_infinite] opacity-50"></div>
         <div className="w-24 h-24 bg-gradient-to-tr from-primary to-mint rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)] relative z-10 border border-white/30 backdrop-blur-xl overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:rounded-full">
            <span className="material-symbols-outlined text-[48px] text-white animate-pulse drop-shadow-lg relative z-10">{icon}</span>
         </div>
      </div>
      <h2 className="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-mint">{title}</h2>
      <p className="text-slate-500 max-w-md text-lg leading-relaxed">{description}</p>
    </div>
  );
}
