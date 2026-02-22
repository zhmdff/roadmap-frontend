"use client";

import Link from "next/link";
import { useAppContext } from "@/lib/context";

export default function FeaturesPage() {
  const { t } = useAppContext();

  const featuresList = [
    {
      title: t.features.aiTest,
      desc: t.features.aiTestDesc,
      icon: "quiz",
      hoverBorder: "hover:border-primary",
      iconBg: "bg-gradient-to-br from-primary/5 to-mint/5 dark:from-primary/10 dark:to-mint/10 border border-primary/20 shadow-inner",
      iconText: "text-primary drop-shadow-sm",
      btnText: t.features.aiTestBtn,
      link: "/speciality_test",
    },
    {
      title: t.features.roadmap,
      desc: t.features.roadmapDesc,
      icon: "map",
      hoverBorder: "hover:border-mint",
      iconBg: "bg-gradient-to-br from-mint/5 to-teal-400/5 dark:from-mint/10 dark:to-teal-400/10 border border-mint/20 shadow-inner",
      iconText: "text-mint drop-shadow-sm",
      btnText: t.features.roadmapBtn,
      link: "/speciality",
    },
    {
      title: t.features.resources,
      desc: t.features.resourcesDesc,
      icon: "library_books",
      hoverBorder: "hover:border-orange-400",
      iconBg: "bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10 border border-orange-500/20 shadow-inner",
      iconText: "text-orange-500 drop-shadow-sm",
      btnText: t.features.comingSoon,
      link: "#",
    },
    {
      title: t.features.teamwork,
      desc: t.features.teamworkDesc,
      icon: "groups",
      hoverBorder: "hover:border-purple-500",
      iconBg: "bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-500/20 shadow-inner",
      iconText: "text-purple-500 drop-shadow-sm",
      btnText: t.features.comingSoon,
      link: "#",
    }
  ];

  return (
    <div className="py-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{t.features.pageTitle} <span className="text-primary italic">{t.features.pageTitleHighlight}</span></h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t.features.pageSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuresList.map((f, i) => (
            <div key={i} className={`p-8 md:p-12 rounded-3xl bg-background-light dark:bg-slate-800 border-2 border-transparent ${f.hoverBorder} transition-all duration-300 group flex flex-col md:flex-row gap-8 items-center md:items-start hover:-translate-y-2`}>
              <div className={`w-24 h-24 shrink-0 rounded-[2rem] ${f.iconBg} flex items-center justify-center ${f.iconText} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <span className="material-symbols-outlined text-[48px]">{f.icon}</span>
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="text-3xl font-bold">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{f.desc}</p>
                <div className="pt-4">
                  <Link href={f.link} className={`inline-flex items-center ${f.iconText} font-bold gap-2 text-lg group/btn`}>
                    {f.btnText} <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
