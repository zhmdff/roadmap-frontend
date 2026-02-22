export const specialities = (lang: string) => [
  {
    "I_QRUP_RK": {
      "name": lang === "az" ? "I QRUP" : "Group I",
      "groupIcon": "engineering",
      "altqrup": lang === "az" ? "Riyaziyyat-Kimya (RK)" : "Math-Chemistry (RK)",
      "altIcon": "science",
      "programs": lang === "az" ? [
        "Fizika müəllimliyi", "Riyaziyyat müəllimliyi", "Texnologiya müəllimliyi", "Fizika", "Geologiya", "Mexanika", "Riyaziyyat",
        "Aerokosmik mühəndislik", "Aqromühəndislik", "Aviasiya təhlükəsizliyi mühəndisliyi", "Cihaz mühəndisliyi",
        "Dəniz naviqasiyası mühəndisliyi", "Ekologiya mühəndisliyi", "Elektrik və elektronika mühəndisliyi", "Energetika mühəndisliyi",
        "Gəmi energetik qurğularının istismarı mühəndisliyi", "Gəmiqayırma və gəmi təmiri mühəndisliyi", "Geologiya və geofizika mühəndisliyi",
        "Geomatika və geodeziya mühəndisliyi", "Hava nəqliyyatının hərəkətinin təşkili", "Həyat fəaliyyətinin təhlükəsizliyi mühəndisliyi",
        "İnşaat mühəndisliyi", "Kimya mühəndisliyi", "Kommunikasiya sistemləri mühəndisliyi", "Logistika və nəqliyyat texnologiyaları mühəndisliyi",
        "Maşın mühəndisliyi", "Materiallar mühəndisliyi", "Mədən mühəndisliyi", "Meliorasiya mühəndisliyi", "Memarlıq",
        "Metallurgiya mühəndisliyi", "Mexanika mühəndisliyi", "Mühəndis fizikası", "Neft-qaz mühəndisliyi", "Nəqliyyat mühəndisliyi",
        "Nəqliyyat tikintisi mühəndisliyi", "Qida mühəndisliyi", "Radiotexnika və telekommunikasiya mühəndisliyi", "Şəhərsalma",
        "Sənaye mühəndisliyi", "Uçuş mühəndisliyi", "Yanğın təhlükəsizliyi mühəndisliyi", "Aqronomluq", "Balıqçılıq", "Meşəçilik",
        "Şərabçılıq", "Torpaqşünaslıq və aqrokimya", "Yerquruluşu və daşınmaz əmlakın kadastrı", "Zoomühəndislik",
        "Hərbi kompozisiya materialları mühəndisliyi", "Hərbi rabitə vasitələri mühəndisliyi", "Optotexnika mühəndisliyi",
        "Pirotexniki və partladıcı vasitələr mühəndisliyi", "Sərhəd təhlükəsizliyi və idarəetmə", "Silah və silah sistemləri mühəndisliyi"
      ] : [
        "Physics Teaching", "Math Teaching", "Technology Teaching", "Physics", "Geology", "Mechanics", "Mathematics",
        "Aerospace Engineering", "Agroengineering", "Aviation Security Engineering", "Instrument Engineering",
        "Marine Navigation Engineering", "Ecological Engineering", "Electrical and Electronics Engineering", "Energy Engineering",
        "Marine Power Plant Operation Engineering", "Shipbuilding and Repair Engineering", "Geology and Geophysics Engineering",
        "Geomatics and Geodesy Engineering", "Air Traffic Organization", "Life Safety Engineering", "Civil Engineering",
        "Chemical Engineering", "Communication Systems Engineering", "Logistics and Transport Technologies Engineering",
        "Machine Engineering", "Materials Engineering", "Mining Engineering", "Melioration Engineering", "Architecture",
        "Metallurgical Engineering", "Mechanical Engineering", "Engineering Physics", "Oil and Gas Engineering", "Transport Engineering",
        "Transport Construction Engineering", "Food Engineering", "Radio Engineering and Telecommunication Engineering", "Urban Planning",
        "Industrial Engineering", "Flight Engineering", "Fire Safety Engineering", "Agronomy", "Fisheries", "Forestry",
        "Winemaking", "Soil Science and Agrochemistry", "Land Management and Real Estate Cadastre", "Zooengineering",
        "Military Composite Materials Engineering", "Military Communication Equipment Engineering", "Opto-technics Engineering",
        "Pyrotechnic and Explosive Devices Engineering", "Border Security and Management", "Weapon and Weapon Systems Engineering"
      ]
    },
    "I_QRUP_RI": {
      "name": lang === "az" ? "I QRUP" : "Group I",
      "groupIcon": "engineering",
      "altqrup": lang === "az" ? "Riyaziyyat-İnformatika (Rİ)" : "Math-Informatics (RI)",
      "altIcon": "terminal",
      "programs": lang === "az" ? [
        "İnformatika müəllimliyi", "Riyaziyyat və informatika müəllimliyi", "Kompüter elmləri", "İnformasiya təhlükəsizliyi",
        "İnformasiya texnologiyaları", "Kompüter mühəndisliyi", "Mexatronika və robototexnika mühəndisliyi",
        "Proseslərin avtomatlaşdırılması mühəndisliyi", "Sistemlər mühəndisliyi"
      ] : [
        "Informatics Teaching", "Math and Informatics Teaching", "Computer Science", "Information Security",
        "Information Technologies", "Computer Engineering", "Mechatronics and Robotics Engineering",
        "Process Automation Engineering", "Systems Engineering"
      ]
    },
    "II_QRUP": {
      "name": lang === "az" ? "II QRUP" : "Group II",
      "groupIcon": "trending_up",
      "programs": lang === "az" ? [
        "Coğrafiya müəllimliyi", "Tarix və coğrafiya müəllimliyi", "Sosiologiya", "Beynəlxalq ticarət və logistika",
        "Biznesin idarə edilməsi", "Davamlı inkişafın idarə edilməsi", "Dövlət və bələdiyyə idarəetməsi", "İqtisadiyyat",
        "Maliyyə", "Marketinq", "Menecment", "Mühasibat", "Statistika", "Coğrafiya", "Hidrometeorologiya",
        "İdman menecmenti və kommunikasiya", "Nəqliyyatda servis (nəqliyyat növləri üzrə)", "Turizm bələdçiliyi", "Turizm işinin təşkili"
      ] : [
        "Geography Teaching", "History and Geography Teaching", "Sociology", "International Trade and Logistics",
        "Business Administration", "Sustainable Development Management", "State and Municipal Management", "Economics",
        "Finance", "Marketing", "Management", "Accounting", "Statistics", "Geography", "Hydrometeorology",
        "Sports Management and Communication", "Transport Services", "Tour Guiding", "Tourism Organization"
      ]
    },
    "III_QRUP_DT": {
      "name": lang === "az" ? "III QRUP" : "Group III",
      "groupIcon": "history_edu",
      "altqrup": lang === "az" ? "Dil-Tarix (DT)" : "Language-History (DT)",
      "altIcon": "menu_book",
      "programs": lang === "az" ? [
        "Azərbaycan dili və ədəbiyyatı müəllimliyi", "Dil və ədəbiyyat müəllimliyi (dillər üzrə)", "İbtidai sinif müəllimliyi",
        "Korreksiyaedici təlim", "Məktəbəqədər təhsil", "Tarix müəllimliyi", "Təhsildə sosial-psixoloji xidmət",
        "Xarici dil müəllimliyi (dillər üzrə)", "Dinşünaslıq", "Dövlət və ictimai münasibətlər", "Fəlsəfə",
        "Filologiya (dil və ədəbiyyat göstərilməklə)", "Hüquqşünaslıq", "İslamşünaslıq", "Jurnalistika",
        "Kitabxanaçılıq və informasiya fəaliyyəti", "Politologiya", "Tarix", "Tərcümə (dillər üzrə)",
        "Bədii yaradıcılıq və ekran dramaturgiyası", "Muzey, arxiv işi və abidələrin qorunması", "Sənətşünaslıq (sahələr üzrə)",
        "Sosial iş", "İctimai təhlükəsizlik və idarəetmə"
      ] : [
        "Azerbaijani Language and Literature Teaching", "Language and Literature Teaching", "Primary School Teaching",
        "Correctional Education", "Preschool Education", "History Teaching", "Socio-Psychological Service in Education",
        "Foreign Language Teaching", "Religious Studies", "Public and Social Relations", "Philosophy",
        "Philology", "Jurisprudence", "Islamic Studies", "Journalism", "Library and Information Science", "Political Science",
        "History", "Translation", "Creative Writing and Screen Dramaturgy", "Museum, Archive and Monument Protection",
        "Art History", "Social Work", "Public Security and Management"
      ]
    },
    "III_QRUP_TC": {
      "name": lang === "az" ? "III QRUP" : "Group III",
      "groupIcon": "history_edu",
      "altqrup": lang === "az" ? "Tarix-Coğrafiya (TC)" : "History-Geography (TC)",
      "altIcon": "public",
      "programs": lang === "az" ? [
        "Beynəlxalq münasibətlər", "Regionşünaslıq (regionlar üzrə)"
      ] : [
        "International Relations", "Regional Studies"
      ]
    },
    "IV_QRUP": {
      "name": lang === "az" ? "IV QRUP" : "Group IV",
      "groupIcon": "medical_services",
      "programs": lang === "az" ? [
        "Biologiya müəllimliyi", "Kimya müəllimliyi", "Kimya və biologiya müəllimliyi", "Psixologiya", "Biologiya", "Ekologiya",
        "Kimya", "Bağçılıq və tərəvəzçilik", "Baytarlıq təbabəti", "Bitki mühafizəsi", "Su bioehtiyatları və akvakultura",
        "Bədən tərbiyəsi və idmanda reabilitasiya", "Fizioterapiya və tibbi reabilitasiya", "Əczaçılıq", "Tibb bacısı işi",
        "Hərbi tibb", "İctimai səhiyyə", "Stomatologiya", "Tibb", "Biotexnologiya"
      ] : [
        "Biology Teaching", "Chemistry Teaching", "Chemistry and Biology Teaching", "Psychology", "Biology", "Ecology",
        "Chemistry", "Horticulture and Vegetable Growing", "Veterinary Medicine", "Plant Protection", "Aquatic Bioresources and Aquaculture",
        "Physical Education and Sports Rehabilitation", "Physiotherapy and Medical Rehabilitation", "Pharmacy", "Nursing",
        "Military Medicine", "Public Health", "Dentistry", "Medicine", "Biotechnology"
      ]
    },
    "V_QRUP": {
      "name": lang === "az" ? "V QRUP" : "Group V",
      "groupIcon": "palette",
      "programs": lang === "az" ? [
        "Fiziki tərbiyə və çağırışaqədərki hazırlıq müəllimliyi", "Musiqi müəllimliyi", "Təsviri incəsənət müəllimliyi",
        "Aktyor sənəti", "Bəstəkarlıq", "Dekorativ-tətbiqi sənət (sahələr üzrə)", "Dirijorluq (sahələr üzrə)", "Dizayn (sahələr üzrə)",
        "Heykəltəraşlıq", "İnstrumental ifaçılıq (sahələr üzrə)", "Musiqişünaslıq", "Operator sənəti",
        "Populyar musiqi və caz ifaçılığı (sahələr üzrə)", "Qrafika", "Rejissorluq", "Rəngkarlıq", "Vokal sənəti (sahələr üzrə)",
        "Xoreoqrafiya sənəti (sahələr üzrə)", "Məşqçilik", "Adaptiv bədən tərbiyəsi", "Kütləvi sağlamlaşdırıcı idman", "Ümumi fiziki hazırlıq"
      ] : [
        "Physical Education and Pre-conscription Training Teaching", "Music Teaching", "Fine Arts Teaching",
        "Acting", "Composition", "Decorative and Applied Arts", "Conducting", "Design", "Sculpture",
        "Instrumental Performance", "Musicology", "Cinematography", "Popular Music and Jazz Performance",
        "Graphics", "Directing", "Painting", "Vocal Arts", "Choreography", "Coaching", "Adaptive Physical Education",
        "Mass Health Sports", "General Physical Training"
      ]
    }
  }
];