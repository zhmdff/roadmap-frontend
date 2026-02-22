export const getQuestions = (lang: string) => [
 {
    id: 1,
    text: lang === 'az' ? "Vaxtın necə keçdiyini hiss etmədiyin fəaliyyət hansıdır?" : "Which activity makes you lose track of time?",
    desc: lang === 'az' ? "Axın (flow) vəziyyətinə düşdüyünüz fəaliyyətlər daxili motivasiyanızı göstərir." : "Activities that create flow reveal intrinsic motivation.",
    icon: "psychology",
    options: [
      { value: "ANALYTICAL", text: lang === 'az' ? "Çətin məntiq və riyazi problemləri həll etmək" : "Solving complex logical or mathematical problems", weights: { I_QRUP_RK: 3, I_QRUP_RI: 2 } },
      { value: "CREATIVE", text: lang === 'az' ? "Vizual və ya estetik layihələr yaratmaq" : "Creating visual or aesthetic projects", weights: { V_QRUP: 3, III_QRUP_DT: 1 } },
      { value: "SOCIAL", text: lang === 'az' ? "İnsanlarla müzakirə və fikir mübadiləsi aparmaq" : "Discussing and exchanging ideas with people", weights: { II_QRUP: 2, III_QRUP_DT: 2 } },
      { value: "TECH", text: lang === 'az' ? "Kod yazmaq və texniki sistemlər qurmaq" : "Writing code or building technical systems", weights: { I_QRUP_RI: 3, I_QRUP_RK: 1 } },
      { value: "ACTION", text: lang === 'az' ? "Aktiv, hərəkətli və fiziki fəaliyyətlər" : "Dynamic and physically active tasks", weights: { V_QRUP: 2, IV_QRUP: 1 } }
    ]
  },
  {
    id: 2,
    text: lang === 'az' ? "Yeni mövzu öyrənərkən hansı yanaşmanı seçirsən?" : "When learning something new, which approach do you prefer?",
    desc: lang === 'az' ? "Öyrənmə üslubu gələcək peşə uyğunluğunu göstərir." : "Learning style predicts professional compatibility.",
    icon: "school",
    options: [
      { value: "THEORY", text: lang === 'az' ? "Əvvəl nəzəriyyəni tam başa düşürəm" : "Understand the theory first", weights: { I_QRUP_RK: 2, I_QRUP_RI: 2, IV_QRUP: 2 } },
      { value: "PRACTICAL", text: lang === 'az' ? "Birbaşa praktikaya keçirəm" : "Jump directly into practice", weights: { I_QRUP_RI: 2, V_QRUP: 2, IV_QRUP: 1 } },
      { value: "DISCUSSION", text: lang === 'az' ? "Mövzunu başqaları ilə müzakirə edirəm" : "Discuss it with others", weights: { II_QRUP: 2, III_QRUP_DT: 2 } },
      { value: "VISUAL", text: lang === 'az' ? "Video, diaqram və vizual materiallara baxıram" : "Use visual materials and diagrams", weights: { V_QRUP: 2, I_QRUP_RK: 1 } }
    ]
  },
  {
    id: 3,
    text: lang === 'az' ? "Səni daha çox nə motivasiya edir?" : "What motivates you the most?",
    desc: lang === 'az' ? "Motivasiya növü uzunmüddətli karyera məmnunluğunu müəyyən edir." : "Motivation type determines long-term satisfaction.",
    icon: "trending_up",
    options: [
      { value: "IMPACT", text: lang === 'az' ? "Cəmiyyətə təsir etmək" : "Making impact on society", weights: { II_QRUP: 2, IV_QRUP: 2, III_QRUP_DT: 1 } },
      { value: "MONEY", text: lang === 'az' ? "Yüksək gəlir və maliyyə sabitliyi" : "High income and financial stability", weights: { I_QRUP_RK: 2, I_QRUP_RI: 2 } },
      { value: "STATUS", text: lang === 'az' ? "Nüfuz və status" : "Prestige and status", weights: { II_QRUP: 2, III_QRUP_DT: 1 } },
      { value: "CREATION", text: lang === 'az' ? "Yeni məhsul və ideyalar yaratmaq" : "Building new products and ideas", weights: { I_QRUP_RI: 2, V_QRUP: 1 } }
    ]
  },
  {
    id: 4,
    text: lang === 'az' ? "Risk və qeyri-müəyyənlik səni necə təsir edir?" : "How do you react to risk and uncertainty?",
    desc: lang === 'az' ? "Risk tolerantlığı karyera istiqamətini formalaşdırır." : "Risk tolerance shapes career direction.",
    icon: "warning",
    options: [
      { value: "HIGH_RISK", text: lang === 'az' ? "Riskləri sevirəm və təşəbbüs göstərirəm" : "I enjoy risk and take initiative", weights: { I_QRUP_RI: 2, II_QRUP: 2 } },
      { value: "MODERATE", text: lang === 'az' ? "Hesablanmış risklərə açığam" : "Open to calculated risks", weights: { I_QRUP_RK: 1, II_QRUP: 1, IV_QRUP: 1 } },
      { value: "LOW_RISK", text: lang === 'az' ? "Stabil və təhlükəsiz mühit üstünlükdür" : "Prefer stability and security", weights: { III_QRUP_DT: 2, IV_QRUP: 2 } }
    ]
  },
  {
    id: 5,
    text: lang === 'az' ? "Problemlərlə qarşılaşanda ilk reaksiyanın nə olur?" : "When facing a problem, what is your first reaction?",
    desc: lang === 'az' ? "Problem həll etmə üslubu peşə uyğunluğunu göstərir." : "Problem-solving style reveals career alignment.",
    icon: "build",
    options: [
      { value: "ANALYZE", text: lang === 'az' ? "Məlumat toplayıb analiz edirəm" : "Gather data and analyze", weights: { I_QRUP_RK: 2, I_QRUP_RI: 1 } },
      { value: "ASK", text: lang === 'az' ? "Başqalarından məsləhət alıram" : "Consult others", weights: { II_QRUP: 2, III_QRUP_DT: 1 } },
      { value: "TRY", text: lang === 'az' ? "Sınaq və səhv yolu ilə həll edirəm" : "Trial and error", weights: { I_QRUP_RI: 2, V_QRUP: 1 } },
      { value: "PLAN", text: lang === 'az' ? "Strateji plan qururam" : "Create a structured plan", weights: { I_QRUP_RK: 1, II_QRUP: 1 } }
    ]
  }
];