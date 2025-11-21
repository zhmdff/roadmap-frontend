"use client";
import { useState, FormEvent } from "react";
import "../ui/specialityTest.css";

const questions = [
  {
    id: 1,
    text: "Boş vaxtında nə etməyi sevirsən?",
    options: [
      { value: "RK", text: "Riyazi tapmacalar və məntiq oyunları" },
      { value: "RK", text: "Təcrübələr aparmaq, laboratoriyada işləmək" },
      { value: "Dizayn", text: "Rəsm çəkmək, dizayn yaratmaq" },
      { value: "DT", text: "İnsanlarla ünsiyyət və sosial fəaliyyət" },
      { value: "Fiziki", text: "İdman və fiziki fəaliyyət" },
    ],
  },
  {
    id: 2,
    text: "Hansı mövzular sənə maraqlıdır?",
    options: [
      { value: "RK", text: "Riyaziyyat və məntiq" },
      { value: "Rİ", text: "Texnologiya və proqramlaşdırma" },
      { value: "İqtisadiyyat", text: "Biznes və maliyyə" },
      { value: "DT", text: "Hüquq və cəmiyyət" },
      { value: "TC", text: "Tarix və mədəniyyət" },
      { value: "Tibb", text: "Tibb və sağlamlıq" },
    ],
  },
  {
    id: 3,
    text: "İş mühitində nəyə üstünlük verirsən?",
    options: [
      { value: "RK", text: "Analitik problemləri həll etmək" },
      { value: "Dizayn", text: "Yaradıcı və vizual işlər" },
      { value: "DT", text: "İnsanlarla işləmək, sosial dəstək" },
      { value: "RK", text: "Laboratoriya və texniki işlər" },
      { value: "Fiziki", text: "İdman və fiziki fəaliyyətlə məşğul olmaq" },
    ],
  },
  {
    id: 4,
    text: "Hansı bacarıq sənə daha yaxındır?",
    options: [
      { value: "RK", text: "Məntiq və riyaziyyat" },
      { value: "Rİ", text: "Texniki cihazlar və proqram" },
      { value: "Dizayn", text: "Yaradıcı vizual bacarıqlar" },
      { value: "DT", text: "İnsanlarla ünsiyyət" },
      { value: "Tibb", text: "Tibb və sağlamlıq sahəsi" },
    ],
  },
  {
    id: 5,
    text: "Hansı tip layihələrdən zövq alırsan?",
    options: [
      { value: "Rİ", text: "Kod yazmaq, proqramlar hazırlamaq" },
      { value: "RK", text: "Laboratoriya və təcrübələr" },
      { value: "DT", text: "Sosial layihələr, insanlara kömək etmək" },
      { value: "Dizayn", text: "Dizayn və vizual yaradıcılıq" },
      { value: "Fiziki", text: "İdman və sağlamlıqla bağlı layihələr" },
    ],
  },
  {
    id: 6,
    text: "Həftəsonu nə etməyi üstün tutursan?",
    options: [
      { value: "RK", text: "Laboratoriyada eksperimentlər" },
      { value: "Rİ", text: "Kompüterdə proqram yazmaq" },
      { value: "TC", text: "Tarixi kitablar oxumaq" },
      { value: "Dizayn", text: "Yeni dizaynlar yaratmaq" },
      { value: "Fiziki", text: "İdmanla məşğul olmaq" },
    ],
  },
  {
    id: 7,
    text: "Hansı tip fənlərdə yaxşısan?",
    options: [
      { value: "RK", text: "Riyaziyyat, fizika" },
      { value: "Rİ", text: "Proqramlaşdırma, informatika" },
      { value: "DT", text: "Hüquq, sosial elmlər" },
      { value: "TC", text: "Tarix və coğrafiya" },
      { value: "Dizayn", text: "İncəsənət və yaradıcılıq" },
    ],
  },
  {
    id: 8,
    text: "Hansı cür iş sənin üçün maraqlıdır?",
    options: [
      { value: "RK", text: "Tədqiqat və analiz" },
      { value: "Rİ", text: "Kodlaşdırma və texnologiya" },
      { value: "DT", text: "İnsan hüquqları və sosial məsələlər" },
      { value: "Dizayn", text: "Dizayn və vizual layihələr" },
      { value: "Tibb", text: "Sağlamlıq və tibbi sahə" },
    ],
  },
  {
    id: 9,
    text: "Hansı sahədə işləmək istəyirsən?",
    options: [
      { value: "RK", text: "Laboratoriya və texnologiya" },
      { value: "Rİ", text: "Proqramlaşdırma və data analitika" },
      { value: "DT", text: "Hüquq, idarəetmə" },
      { value: "Dizayn", text: "Memarlıq, dizayn" },
      { value: "Tibb", text: "Tibb, psixologiya" },
    ],
  },
  {
    id: 10,
    text: "Hansı problemləri həll etməyi sevirsən?",
    options: [
      { value: "RK", text: "Riyazi və analitik tapmacalar" },
      { value: "Rİ", text: "Texnoloji və proqram təminatı məsələləri" },
      { value: "DT", text: "Sosial və hüquqi məsələlər" },
      { value: "Dizayn", text: "Yaradıcı və vizual problemlər" },
      { value: "Tibb", text: "Tibbi və sağlamlıq problemləri" },
    ],
  },
  {
    id: 11,
    text: "Hansı fəaliyyət sənə xoşdur?",
    options: [
      { value: "RK", text: "Eksperimentlər aparmaq" },
      { value: "Rİ", text: "Kompüter proqramları yaratmaq" },
      { value: "DT", text: "İnsanlarla ünsiyyət və sosial iş" },
      { value: "Dizayn", text: "Rəsm və dizayn layihələri" },
      { value: "Fiziki", text: "İdman və fizioterapiya" },
    ],
  },
  {
    id: 12,
    text: "Hansı mövzu sənin marağındadır?",
    options: [
      { value: "RK", text: "Riyaziyyat və mühəndislik" },
      { value: "Rİ", text: "İnformatika və texnologiya" },
      { value: "DT", text: "Hüquq və siyasət" },
      { value: "TC", text: "Tarix və regionşünaslıq" },
      { value: "Tibb", text: "Sağlamlıq və psixologiya" },
    ],
  },
  {
    id: 13,
    text: "Hansı tip işlər sənin üçün rahatdır?",
    options: [
      { value: "RK", text: "Analitik və laboratoriya işləri" },
      { value: "Rİ", text: "Kod yazmaq və texniki layihələr" },
      { value: "DT", text: "İnsanlarla əlaqəli layihələr" },
      { value: "Dizayn", text: "Yaradıcı vizual layihələr" },
      { value: "Fiziki", text: "İdman və sağlamlıq fəaliyyəti" },
    ],
  },
  {
    id: 14,
    text: "Hansı tip bacarıqların güclüdür?",
    options: [
      { value: "RK", text: "Riyaziyyat və məntiq" },
      { value: "Rİ", text: "Proqramlaşdırma və texnologiya" },
      { value: "DT", text: "Sosial və ünsiyyət bacarıqları" },
      { value: "Dizayn", text: "Yaradıcı və vizual bacarıqlar" },
      { value: "Tibb", text: "Sağlamlıq və tibbi bacarıqlar" },
    ],
  },
  {
    id: 15,
    text: "Boş vaxtında hansı fəaliyyət sənin üçün motivasiyadır?",
    options: [
      { value: "RK", text: "Laboratoriya və tədqiqat" },
      { value: "Rİ", text: "Kompüterdə kod yazmaq" },
      { value: "DT", text: "İnsanlara kömək etmək" },
      { value: "Dizayn", text: "Rəsm və dizayn yaratmaq" },
      { value: "Fiziki", text: "İdman və fizioterapiya" },
    ],
  },
];

export default function SpecialityTest() {
  interface Answer {
    [key: number]: string;
  }

  const [answers, setAnswers] = useState<Answer>({});

  const handleAnswerChange = (questionId: number, text: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: text,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(answers).length !== questions.length) {
      alert("Zəhmət olmasa bütün suallara cavab verin");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/msg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

      const data = await response.json();
      console.log("Test results:", data);
    } catch (error) {
      console.error("Error submitting test:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">İxtisas Seçimi Testi</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">
              {question.id}. {question.text}
            </h3>

            <div className="space-y-2">
              {question.options.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input type="radio" name={`question-${question.id}`} value={option.text} checked={answers[question.id] === option.text} onChange={(e) => handleAnswerChange(question.id, e.target.value)} className="w-4 h-4" />
                  <span>
                    {String.fromCharCode(97 + index)}) {option.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Testi Təqdim Et
        </button>
      </form>
    </div>
  );
}
