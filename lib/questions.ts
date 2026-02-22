export const getQuestions = (lang: string) => [
  {
    id: 1,
    text: lang === 'az'
      ? "Vaxtın necə keçdiyini hiss etmədiyin fəaliyyət hansıdır?"
      : "Which activity makes you lose track of time?",
    desc: lang === 'az'
      ? "Axın (flow) vəziyyətinə düşdüyünüz fəaliyyətlər daxili motivasiyanızı göstərir."
      : "Activities that create flow reveal intrinsic motivation.",
    icon: "psychology",
    options: [
      { value: "ANALYTICAL", text: lang === 'az' ? "Çətin məntiq və riyazi problemləri həll etmək" : "Solving complex logical or mathematical problems", desc: lang === 'az' ? "Analitik fokus" : "Analytical focus" },
      { value: "CREATIVE", text: lang === 'az' ? "Vizual və ya estetik layihələr yaratmaq" : "Creating visual or aesthetic projects", desc: lang === 'az' ? "Yaradıcı axın" : "Creative flow" },
      { value: "SOCIAL", text: lang === 'az' ? "İnsanlarla müzakirə və fikir mübadiləsi aparmaq" : "Discussing and exchanging ideas with people", desc: lang === 'az' ? "Sosial enerji" : "Social energy" },
      { value: "TECH", text: lang === 'az' ? "Kod yazmaq və texniki sistemlər qurmaq" : "Writing code or building technical systems", desc: lang === 'az' ? "Texniki düşüncə" : "Technical thinking" },
      { value: "ACTION", text: lang === 'az' ? "Aktiv, hərəkətli və fiziki fəaliyyətlər" : "Dynamic and physically active tasks", desc: lang === 'az' ? "Hərəkət yönümlü" : "Action-oriented" },
    ],
  },
  {
    id: 2,
    text: lang === 'az'
      ? "Yeni mövzu öyrənərkən hansı yanaşmanı seçirsən?"
      : "When learning something new, which approach do you prefer?",
    desc: lang === 'az'
      ? "Öyrənmə üslubu gələcək peşə uyğunluğunu göstərir."
      : "Learning style predicts professional compatibility.",
    icon: "school",
    options: [
      { value: "THEORY", text: lang === 'az' ? "Əvvəl nəzəriyyəni tam başa düşürəm" : "Understand the theory first", desc: lang === 'az' ? "Strukturlaşdırılmış düşüncə" : "Structured thinking" },
      { value: "PRACTICAL", text: lang === 'az' ? "Birbaşa praktikaya keçirəm" : "Jump directly into practice", desc: lang === 'az' ? "Tətbiqi öyrənmə" : "Hands-on learning" },
      { value: "DISCUSSION", text: lang === 'az' ? "Mövzunu başqaları ilə müzakirə edirəm" : "Discuss it with others", desc: lang === 'az' ? "Sosial öyrənmə" : "Collaborative learning" },
      { value: "VISUAL", text: lang === 'az' ? "Video, diaqram və vizual materiallara baxıram" : "Use visual materials and diagrams", desc: lang === 'az' ? "Vizual qavrama" : "Visual processing" },
    ],
  },
  {
    id: 3,
    text: lang === 'az'
      ? "Səni daha çox nə motivasiya edir?"
      : "What motivates you the most?",
    desc: lang === 'az'
      ? "Motivasiya növü uzunmüddətli karyera məmnunluğunu müəyyən edir."
      : "Motivation type determines long-term satisfaction.",
    icon: "trending_up",
    options: [
      { value: "IMPACT", text: lang === 'az' ? "Cəmiyyətə təsir etmək" : "Making impact on society", desc: lang === 'az' ? "Məna yönümlü" : "Purpose-driven" },
      { value: "MONEY", text: lang === 'az' ? "Yüksək gəlir və maliyyə sabitliyi" : "High income and financial stability", desc: lang === 'az' ? "Maddi fokus" : "Financial focus" },
      { value: "STATUS", text: lang === 'az' ? "Nüfuz və status" : "Prestige and status", desc: lang === 'az' ? "Ambisiya" : "Ambition-driven" },
      { value: "CREATION", text: lang === 'az' ? "Yeni məhsul və ideyalar yaratmaq" : "Building new products and ideas", desc: lang === 'az' ? "İnnovasiya" : "Innovation-oriented" },
    ],
  },
  {
    id: 4,
    text: lang === 'az'
      ? "Risk və qeyri-müəyyənlik səni necə təsir edir?"
      : "How do you react to risk and uncertainty?",
    desc: lang === 'az'
      ? "Risk tolerantlığı karyera istiqamətini formalaşdırır."
      : "Risk tolerance shapes career direction.",
    icon: "warning",
    options: [
      { value: "HIGH_RISK", text: lang === 'az' ? "Riskləri sevirəm və təşəbbüs göstərirəm" : "I enjoy risk and take initiative", desc: lang === 'az' ? "Sahibkarlıq meyli" : "Entrepreneurial tendency" },
      { value: "MODERATE", text: lang === 'az' ? "Hesablanmış risklərə açığam" : "Open to calculated risks", desc: lang === 'az' ? "Balanslı" : "Balanced approach" },
      { value: "LOW_RISK", text: lang === 'az' ? "Stabil və təhlükəsiz mühit üstünlükdür" : "Prefer stability and security", desc: lang === 'az' ? "Struktur ehtiyacı" : "Need for structure" },
    ],
  },
  {
    id: 5,
    text: lang === 'az'
      ? "Problemlərlə qarşılaşanda ilk reaksiyan nə olur?"
      : "When facing a problem, what is your first reaction?",
    desc: lang === 'az'
      ? "Problem həll etmə üslubu peşə uyğunluğunu göstərir."
      : "Problem-solving style reveals career alignment.",
    icon: "build",
    options: [
      { value: "ANALYZE", text: lang === 'az' ? "Məlumat toplayıb analiz edirəm" : "Gather data and analyze", desc: lang === 'az' ? "Analitik yanaşma" : "Analytical method" },
      { value: "ASK", text: lang === 'az' ? "Başqalarından məsləhət alıram" : "Consult others", desc: lang === 'az' ? "Komanda yönümlü" : "Team-oriented" },
      { value: "TRY", text: lang === 'az' ? "Sınaq və səhv yolu ilə həll edirəm" : "Trial and error", desc: lang === 'az' ? "Eksperimental" : "Experimental" },
      { value: "PLAN", text: lang === 'az' ? "Strateji plan qururam" : "Create a structured plan", desc: lang === 'az' ? "Strateji düşüncə" : "Strategic mindset" },
    ],
  },
  {
    id: 6,
    text: lang === 'az'
      ? "Gələcək işində hansı nəticə səni qürurlandırar?"
      : "Which outcome in your future career would make you proud?",
    desc: lang === 'az'
      ? "Uğur anlayışı şəxsi dəyərləri göstərir."
      : "Definition of success reflects core values.",
    icon: "emoji_events",
    options: [
      { value: "INNOVATION", text: lang === 'az' ? "Yeni texnologiya və ya məhsul yaratmaq" : "Creating a new technology or product", desc: lang === 'az' ? "Texnoloji yaradıcılıq" : "Technological innovation" },
      { value: "LEADERSHIP", text: lang === 'az' ? "Komandaya rəhbərlik etmək" : "Leading a team", desc: lang === 'az' ? "Liderlik" : "Leadership orientation" },
      { value: "HELPING", text: lang === 'az' ? "İnsanların həyatını yaxşılaşdırmaq" : "Improving people's lives", desc: lang === 'az' ? "Humanitar yönüm" : "Human-centered focus" },
      { value: "EXPERT", text: lang === 'az' ? "Öz sahəmdə ekspert olmaq" : "Becoming an expert in a niche", desc: lang === 'az' ? "Dərin ixtisaslaşma" : "Deep specialization" },
    ],
  },
  {
    id: 7,
    text: lang === 'az'
      ? "İş tempinə münasibətin necədir?"
      : "What work pace suits you best?",
    desc: lang === 'az'
      ? "Enerji ritmi sahə seçiminə təsir edir."
      : "Energy rhythm influences field choice.",
    icon: "speed",
    options: [
      { value: "FAST", text: lang === 'az' ? "Sürətli və dəyişkən mühit" : "Fast-paced and dynamic", desc: lang === 'az' ? "Startap və innovasiya" : "Startup environment" },
      { value: "STABLE", text: lang === 'az' ? "Stabil və planlı mühit" : "Stable and predictable", desc: lang === 'az' ? "Korporativ və dövlət" : "Corporate/government" },
      { value: "FLEXIBLE", text: lang === 'az' ? "Öz tempimdə işləmək" : "Flexible and independent", desc: lang === 'az' ? "Freelance və tədqiqat" : "Independent work" },
    ],
  },
];