// İki dilli (EN/TR) içerik sözlüğü.
// PDF'teki orijinal İngilizce metinlere sadık kalındı; Türkçe çeviriler eklendi.

export const personal = {
  name: 'Ülkü Defne Akın',
  shortName: 'Defne Akın',
  email: 'defneakn@yahoo.com',
  phone: '+90 530 655 52 16',
  location: 'İzmir, Türkiye',
  social: {
    linkedin: '#',
    behance: '#',
    instagram: '#',
  },
};

export const ui = {
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact', menu: 'Menu', close: 'Close menu' },
    common: {
      viewProject: 'View Project', backToProjects: 'Back to Projects',
      nextProject: 'Next Project', previousProject: 'Previous Project',
      downloadCV: 'Download Portfolio', getInTouch: 'Get in Touch',
      scrollDown: 'Scroll down', learnMore: 'Learn more',
      languageLabel: 'Language', themeLabel: 'Theme', switchTo: 'Switch to',
    },
    home: {
      eyebrow: 'Industrial Design Portfolio',
      titleA: 'Portfolio', titleB: 'Industrial Design',
      tagline: 'Designing sustainable, human-centered products that bridge form, function and feeling.',
      ctaPrimary: 'Explore Projects', ctaSecondary: 'About Me',
      featuredEyebrow: 'Selected Work', featuredTitle: 'Content of products',
      aboutPreviewEyebrow: 'About', aboutPreviewCta: 'Read more',
    },
    about: {
      eyebrow: 'About Me', title: 'Ülkü Defne Akın',
      bio: 'I am an industrial design student at Izmir University of Economics. I have a patient and disciplined approach to long-term projects. I work well with group projects and possess leadership qualities. I can approach subjects with different perspectives. I am enthusiastic and eager to learn, therefore I can be a good intern.',
      educationTitle: 'Education', experienceTitle: 'Experience',
      digitalSkillsTitle: 'Digital Skills', analogueSkillsTitle: 'Analogue Skills',
    },
    projects: {
      eyebrow: 'Selected Work', title: 'Projects',
      filterAll: 'All', filterIndividual: 'Individual', filterGroup: 'Group',
      typeIndividual: 'Individual Project',
      typeGroup2: '2-person group project', typeGroup7: '7-person group project',
    },
    contact: {
      eyebrow: 'Get in Touch', title: "Let's create something together",
      subtitle: 'Open to internships, collaborations and conversations about design.',
      nameLabel: 'Your name', emailLabel: 'Your email', messageLabel: 'Your message',
      submit: 'Send message', sent: 'Message sent - thank you.',
      directContact: 'Or reach me directly',
    },
    footer: {
      tagline: 'Industrial Designer · İzmir',
      copyright: '© 2026 Ülkü Defne Akın. All rights reserved.',
      backToTop: 'Back to top',
    },
    notFound: { title: '404', message: 'This page seems to have wandered off.', back: 'Back home' },
  },
  tr: {
    nav: { home: 'Anasayfa', about: 'Hakkımda', projects: 'Projeler', contact: 'İletişim', menu: 'Menü', close: 'Menüyü kapat' },
    common: {
      viewProject: 'Projeyi Gör', backToProjects: 'Projelere Dön',
      nextProject: 'Sonraki Proje', previousProject: 'Önceki Proje',
      downloadCV: 'Portfolyoyu İndir', getInTouch: 'İletişime Geç',
      scrollDown: 'Aşağı kaydır', learnMore: 'Daha fazla',
      languageLabel: 'Dil', themeLabel: 'Tema', switchTo: 'Şuna geç:',
    },
    home: {
      eyebrow: 'Endüstriyel Tasarım Portfolyosu',
      titleA: 'Portfolyo', titleB: 'Endüstriyel Tasarım',
      tagline: 'Form, işlev ve duygu arasında köprü kuran, sürdürülebilir ve insan odaklı ürünler tasarlıyorum.',
      ctaPrimary: 'Projeleri Keşfet', ctaSecondary: 'Hakkımda',
      featuredEyebrow: 'Seçili Çalışmalar', featuredTitle: 'Ürün içeriği',
      aboutPreviewEyebrow: 'Hakkımda', aboutPreviewCta: 'Devamını oku',
    },
    about: {
      eyebrow: 'Hakkımda', title: 'Ülkü Defne Akın',
      bio: "İzmir Ekonomi Üniversitesi'nde endüstriyel tasarım öğrencisiyim. Uzun vadeli projelere sabırlı ve disiplinli bir yaklaşımım var. Grup projelerinde iyi çalışırım ve liderlik özelliklerine sahibim. Konulara farklı perspektiflerden yaklaşabilirim. Hevesli ve öğrenmeye açığım, dolayısıyla iyi bir stajyer olabilirim.",
      educationTitle: 'Eğitim', experienceTitle: 'Deneyim',
      digitalSkillsTitle: 'Dijital Yetenekler', analogueSkillsTitle: 'Analog Yetenekler',
    },
    projects: {
      eyebrow: 'Seçili Çalışmalar', title: 'Projeler',
      filterAll: 'Tümü', filterIndividual: 'Bireysel', filterGroup: 'Grup',
      typeIndividual: 'Bireysel Proje',
      typeGroup2: '2 kişilik grup projesi', typeGroup7: '7 kişilik grup projesi',
    },
    contact: {
      eyebrow: 'İletişime Geç', title: 'Birlikte bir şey yaratalım',
      subtitle: 'Staj, iş birliği ve tasarım üzerine sohbet için açığım.',
      nameLabel: 'Adınız', emailLabel: 'E-posta adresiniz', messageLabel: 'Mesajınız',
      submit: 'Mesajı gönder', sent: 'Mesaj gönderildi - teşekkürler.',
      directContact: 'Veya doğrudan ulaşın',
    },
    footer: {
      tagline: 'Endüstriyel Tasarımcı · İzmir',
      copyright: '© 2026 Ülkü Defne Akın. Tüm hakları saklıdır.',
      backToTop: 'Yukarı çık',
    },
    notFound: { title: '404', message: 'Bu sayfa kaybolmuş gibi görünüyor.', back: 'Anasayfaya dön' },
  },
};

export const education = [
  { institution: { en: 'Izmir University of Economics', tr: 'İzmir Ekonomi Üniversitesi' },
    degree: { en: 'Bachelor of Fine Arts - Industrial Design', tr: 'Güzel Sanatlar Fakültesi - Endüstriyel Tasarım' },
    years: '2021 – Present', current: true },
  { institution: { en: 'EPFC, Brussels', tr: 'EPFC, Brüksel' },
    degree: { en: 'English Course', tr: 'İngilizce Kursu' }, years: '2020 – 2021' },
  { institution: { en: 'CAD, Brussels', tr: 'CAD, Brüksel' },
    degree: { en: 'French Course', tr: 'Fransızca Kursu' }, years: '2020 – 2021' },
  { institution: { en: 'Tuzkaya High School', tr: 'Tuzkaya Lisesi' },
    degree: { en: 'High School', tr: 'Lise' }, years: '2019 – 2020' },
  { institution: { en: 'Mehmet Zakir Ekni Anatolian High School', tr: 'Mehmet Zakir Ekni Anadolu Lisesi' },
    degree: { en: 'High School', tr: 'Lise' }, years: '2016 – 2019' },
  { institution: { en: 'TED Ankara College', tr: 'TED Ankara Koleji' },
    degree: { en: 'Secondary School', tr: 'Ortaokul' }, years: '2012 – 2016' },
];

export const experience = [
  { company: 'Flatart Agency', role: { en: 'Graphic Design, UI/UX', tr: 'Grafik Tasarım, UI/UX' }, years: '2025 – Present' },
  { company: 'Proted - Prosthetics and Orthotics', role: { en: 'R&D, CAD Modelling', tr: 'Ar-Ge, CAD Modelleme' }, years: '2024 – Present' },
  { company: '312 Design', role: { en: 'Furniture Design', tr: 'Mobilya Tasarımı' }, years: '2024 – Present' },
];

export const skills = {
  digital: ['Fusion 360', 'Rhinoceros 3D', 'Blender', 'SolidWorks', 'Figma', 'Adobe Photoshop', 'Canva'],
  analogue: {
    en: ['Sketching', 'Rendering', 'Prototyping', 'Model Making', 'AI Tools & Visualisation', 'Concept Development', 'Ideation'],
    tr: ['Eskiz', 'Render', 'Prototipleme', 'Maket Yapımı', 'Yapay Zeka & Görselleştirme', 'Konsept Geliştirme', 'Fikir Üretimi'],
  },
};

// Three.js convention: Y = up. STL'ler farklı CAD orientation'unda olabilir.
// modelRotation: [rx, ry, rz] radian - initial mesh rotation.
// initialCamera: [x, y, z] - Canvas camera baslangic konumu.
// Z-up CAD (Fusion, Solidworks varsayilan): X: -Math.PI/2
// Y-up CAD (Blender Y-up): X: 0
// X-up: Z: -Math.PI/2

export const projects = [
  {
    slug: 'aquapaws',
    number: '01',
    title: 'AquaPaws',
    type: 'individual',
    year: '2024',
    cover: 'images/projects/aquapaws/cover.jpg',
    coverPosition: 'bottom',
    model: 'models/aquapaws.stl',
    modelRotation: [-Math.PI / 2, 0, 0],
    initialCamera: [3, 2, 4],
    disableColorPalette: true,
    tagline: {
      en: 'Atmospheric water for animals and people, outdoors.',
      tr: 'Hayvanlar ve insanlar için açık havada atmosferik su.',
    },
    description: {
      en: 'AquaPaws is a sustainable and environmentally friendly water distribution product that works with the Atmospheric Water Generation (AWG) system for animals and people living outdoors. This system produces drinkable water by collecting moisture in the air. When cats and dogs approach, sensors detect them and pour water into the container, while people can fill their bottles and access clean water.',
      tr: 'AquaPaws, dışarıda yaşayan hayvanlar ve insanlar için Atmosferik Su Üretimi (AWG) sistemiyle çalışan, sürdürülebilir ve çevre dostu bir su dağıtım ürünüdür. Sistem havadaki nemi toplayarak içilebilir su üretir. Kedi ve köpekler yaklaştığında sensörler algılar ve hazneye su doldurur; insanlar ise şişelerini doldurabilir ve temiz suya erişebilir.',
    },
    sections: [
      {
        layout: 'diagram',
        title: { en: 'How the AWG System Works', tr: 'AWG Sistemi Nasıl Çalışır?' },
        image: 'images/projects/aquapaws/how-awg-works.png',
        body: {
          en: 'The unit pulls humid air through a 3-layer filter, condenses it into clean drinkable water, then routes it through a sealed water tank to the dispensing points. Six stages: air intake, filtration, condensation, storage, post-filter, drinking water.',
          tr: 'Cihaz nemli havayı 3 katmanlı filtreden çekip yoğunlaştırarak temiz içme suyuna dönüştürür, kapalı su tankı üzerinden dağıtım noktalarına yönlendirir. Altı aşama: hava alma, filtreleme, yoğuşma, depolama, son filtre, içme suyu.',
        },
      },
      {
        layout: 'gallery',
        title: { en: 'Product Views', tr: 'Ürün Görünümleri' },
        slides: [
          {
            image: 'images/projects/aquapaws/q1.png',
            callouts: [
              { x: 48, y: 18, side: 'right', label: { en: 'Drinking water tap', tr: 'İçme suyu musluğu' } },
              { x: 43, y: 89, side: 'right', label: { en: 'Foot pedal', tr: 'Ayak pedalı' } },
            ],
          },
          {
            image: 'images/projects/aquapaws/q2.png',
          },
          {
            image: 'images/projects/aquapaws/q3.png',
            callouts: [
              { x: 45, y: 60, side: 'right', label: { en: 'Sensor that detects animals', tr: 'Hayvanları algılayan sensör' } },
            ],
          },
          {
            image: 'images/projects/aquapaws/q5.png',
            callouts: [
              { x: 82.5, y: 64.5, side: 'left', label: { en: 'Automatic water filling & draining point', tr: 'Otomatik su doldurma ve tahliye noktası' } },
            ],
          },
          {
            image: 'images/projects/aquapaws/q6.png',
            callouts: [
              { x: 50, y: 22, side: 'right', label: { en: 'Air intake & exhaust grilles', tr: 'Hava giriş/çıkış ızgaraları' } },
              { x: 50, y: 75, side: 'right', label: { en: 'Barrier protecting clean water', tr: 'Temiz suyu koruyan bariyer' } },
            ],
          },
        ],
      },
      {
        title: { en: 'Concept Sketches', tr: 'Konsept Çizimleri' },
        image: 'images/projects/aquapaws/drawings.png',
        body: {
          en: 'Early sketches exploring form, ergonomics and the relationship between human use and animal interaction.',
          tr: 'Form, ergonomi ve insan kullanımı ile hayvan etkileşimi arasındaki ilişkiyi araştıran ilk eskizler.',
        },
      },
      {
        layout: 'split-reverse',
        transparent: true,
        title: { en: 'Exploded View', tr: 'Parçalı Görünüm' },
        image: 'images/projects/aquapaws/exploded.png',
        body: {
          en: 'Internal components: sensor module, water tank, AWG condenser, foot pedal mechanism and bottle dispensing outlet.',
          tr: 'İç bileşenler: sensör modülü, su tankı, AWG yoğunlaştırıcı, ayak pedalı mekanizması ve şişe doldurma çıkışı.',
        },
      },
    ],
  },
  {
    slug: 'skyiron',
    number: '02',
    title: 'SkyIron',
    type: 'individual',
    year: '2024',
    cover: 'images/projects/skyiron/cover.jpg',
    descriptionIcon: 'images/projects/skyiron/fixed-iron.png',
    tagline: {
      en: 'A handheld steamer with Yamaha-inspired sharp lines and dynamic form.',
      tr: 'Yamaha esinli keskin çizgiler ve dinamik formuyla el tipi buhar makinesi.',
    },
    description: {
      en: "In this project, I integrated the dynamic form and sharp line discipline embodied in Yamaha's iconic motorcycle designs into a handheld steam iron concept. My aim was to bring movement and a modern aesthetic to a static object - reflecting the elegant design language that symbolizes speed and performance in the motorcycle world.",
      tr: "Bu projede Yamaha'nın ikonik motosiklet tasarımlarındaki dinamik form ve keskin çizgi disiplinini el tipi bir buhar ütüsü konseptine entegre ettim. Amacım statik bir nesneye hareket ve modern bir estetik kazandırarak motosiklet dünyasında hız ve performansı simgeleyen zarif tasarım dilini yansıtmaktı.",
    },
    sections: [
      {
        layout: 'callout',
        title: { en: 'Ergonomic Pistol Grip', tr: 'Ergonomik Pistol Grip' },
        image: 'images/projects/skyiron/grip-detail.png',
        body: {
          en: 'Hand controls within reach: the steam trigger sits where your index finger lands, with the power button and water tank release directly below.',
          tr: 'Tüm kontroller parmak ucunda: buhar tetiği işaret parmağının doğal konumunda, hemen altında güç düğmesi ve su tankı çıkarma klipsi.',
        },
        callouts: [
          { x: 34, y: 32, side: 'right', label: { en: 'Steam button', tr: 'Buhar düğmesi' } },
          { x: 34, y: 47.5, side: 'left', label: { en: 'On/off', tr: 'Açma/kapama' } },
          { x: 34, y: 52.5, side: 'left', label: { en: 'Tank clip', tr: 'Tank klipsi' } },
          { x: 25, y: 70, side: 'left', label: { en: 'Water draw pipe', tr: 'Su çekme borusu' } },
          { x: 27, y: 83, side: 'right', label: { en: 'Water tank', tr: 'Su tankı' } },
        ],
      },
      {
        layout: 'callout',
        reverse: true,
        title: { en: 'Steam-Ready Indicator', tr: 'Buhar Hazır Göstergesi' },
        image: 'images/projects/skyiron/led-indicator.png',
        body: {
          en: 'A subtle red LED on the steam head turns on the moment the unit reaches working temperature - a minimal, single-point feedback that respects the clean silhouette.',
          tr: 'Buhar başlığındaki ince kırmızı LED, ünite çalışma sıcaklığına ulaştığı anda yanar - temiz silueti bozmayan minimal, tek noktalı bir geri bildirim.',
        },
        callouts: [
          { x: 41.5, y: 38.5, side: 'right', label: { en: 'LED indicator', tr: 'LED gösterge' } },
          { x: 80, y: 10, side: 'right', label: { en: 'Steam outlet', tr: 'Buhar çıkışı' } },
        ],
      },
      {
        layout: 'callout',
        title: { en: 'Internal Architecture', tr: 'İç Yapı' },
        image: 'images/projects/skyiron/cutaway-schema.png',
        body: {
          en: 'A cutaway view shows how steam is generated and routed - resistance heater, miniature water pump, steam channel and the chambers that keep them isolated.',
          tr: 'Kesit görünümü, buharın nasıl üretildiğini ve yönlendirildiğini gösterir - direnç ısıtıcı, mini su pompası, buhar kanalı ve bunları izole eden hazneler.',
        },
        callouts: [
          { x: 13, y: 12, side: 'left', label: { en: 'Resistance', tr: 'Direnç' } },
          { x: 76, y: 20, side: 'right', label: { en: 'LED indicator', tr: 'LED gösterge' } },
          { x: 88, y: 26, side: 'right', label: { en: 'Power line', tr: 'Güç hattı' } },
          { x: 55, y: 38, side: 'left', label: { en: 'Steam button', tr: 'Buhar düğmesi' } },
          { x: 60, y: 58, side: 'left', label: { en: 'Water pump', tr: 'Su pompası' } },
          { x: 62, y: 78, side: 'left', label: { en: 'Water tank', tr: 'Su tankı' } },
        ],
      },
      {
        layout: 'in-action',
        title: { en: 'In Action', tr: 'Çalışırken' },
        image: 'images/projects/skyiron/full-render.png',
        body: {
          en: 'Held like a hairdryer - light, quick to point, ready to release a controlled jet of steam.',
          tr: 'Saç kurutma makinesi gibi tutulur - hafif, hızlı yönlendirilebilir, kontrollü buhar jeti vermeye hazır.',
        },
      },
    ],
  },
  {
    slug: 'airstride',
    number: '03',
    title: 'AirStride',
    type: 'group2',
    year: '2024',
    cover: 'images/projects/airstride/cover.jpg',
    model: 'models/airstride.stl',
    modelRotation: [-Math.PI / 2, 0, 0], // Z-up CAD
    initialCamera: [3, 2, 4],
    tagline: {
      en: 'A sculptural air-cleaning system for shared spaces.',
      tr: 'Ortak alanlar için heykelsi bir hava temizleme sistemi.',
    },
    description: {
      en: 'This product cleans dust and particles to increase hygiene and comfort in common areas such as hotel lobbies, offices and plazas. Thanks to its sculptural form, it integrates aesthetically into the space and works without attracting attention. It remains active even when the area is empty, ensuring that the environment is constantly clean.',
      tr: 'Bu ürün otel lobileri, ofisler ve plazalar gibi ortak alanlarda hijyen ve konforu artırmak için toz ve partikülleri temizler. Heykelsi formu sayesinde alana estetik biçimde entegre olur ve dikkat çekmeden çalışır. Alan boş olduğunda bile aktif kalarak ortamın sürekli temiz tutulmasını sağlar.',
    },
    sections: [
      {
        title: { en: 'The Product', tr: 'Ürün' },
        image: 'images/projects/airstride/product.jpg',
        body: {
          en: 'A leaf-inspired sculptural body that combines a vacuuming part and a blowing part - together they create a controlled air current.',
          tr: 'Yaprak esinli heykelsi gövde, emme ve üfleme parçalarını birleştirir - birlikte kontrollü bir hava akımı oluştururlar.',
        },
      },
      {
        title: { en: 'Exploded View', tr: 'Patlamış Görünüm' },
        image: 'images/projects/airstride/exploded.jpg',
      },
      {
        title: { en: 'Concept Scheme', tr: 'Konsept Şeması' },
        image: 'images/projects/airstride/scheme.jpg',
        body: {
          en: 'Full product scheme: working modes, control flow, modules, textures and form references.',
          tr: 'Tam ürün şeması: çalışma modları, kontrol akışı, modüller, dokular ve form referansları.',
        },
      },
      {
        title: { en: 'Companion Dashboard', tr: 'Yardımcı Panel' },
        image: 'images/projects/airstride/dashboard-clean.jpg',
        body: {
          en: 'Real-time monitoring: PM2.5, airflow, humidity, temperature, fan speed, filter status, dustbin level, location and energy use.',
          tr: 'Gerçek zamanlı izleme: PM2.5, hava akışı, nem, sıcaklık, fan hızı, filtre durumu, toz haznesi seviyesi, konum ve enerji kullanımı.',
        },
      },
    ],
  },
  {
    slug: 'zobox',
    number: '04',
    title: 'Zobox',
    type: 'individual',
    year: '2025',
    cover: 'images/projects/zobox/cover.jpg',
    model: 'models/zobox.stl',
    modelRotation: [0, 0, 0], // basket - longest X, gosterim icin dik dursun istersek Z: -Math.PI/2
    initialCamera: [4, 3, 5],
    tagline: {
      en: 'A fully autonomous 4-channel self-checkout and packaging station.',
      tr: 'Tamamen otonom, 4 kanallı self-checkout ve paketleme istasyonu.',
    },
    description: {
      en: 'ZOBOX is a fully autonomous, 4-channel self-checkout and packaging system that operates without human labor. Products are placed on the upper conveyor belt, automatically scanned, and packaged inside the unit. Payment is completed via QR code through the ZEST App, and packaged items are delivered through user-specific outlets. This system eliminates waiting time and enables a fast, fully digital shopping experience for four users simultaneously.',
      tr: 'ZOBOX, insan emeği olmadan çalışan, tamamen otonom 4 kanallı bir self-checkout ve paketleme sistemidir. Ürünler üstteki konveyör banda yerleştirilir, otomatik olarak taranır ve ünite içinde paketlenir. Ödeme ZEST uygulaması üzerinden QR kod ile yapılır; paketlenmiş ürünler kullanıcıya özel çıkışlardan teslim edilir. Bu sistem bekleme süresini ortadan kaldırır ve aynı anda dört kullanıcı için hızlı, tamamen dijital bir alışveriş deneyimi sağlar.',
    },
    sections: [
      {
        title: { en: 'Main Unit', tr: 'Ana Ünite' },
        images: [
          'images/projects/zobox/main-unit-1.jpg',
          'images/projects/zobox/main-unit-2.jpg',
          'images/projects/zobox/main-unit-3.jpg',
        ],
      },
      {
        title: { en: 'Different Angles', tr: 'Farklı Açılar' },
        images: [
          'images/projects/zobox/main-unit-4.jpg',
          'images/projects/zobox/main-unit-5.jpg',
        ],
      },
      {
        title: { en: 'Smart Basket', tr: 'Akıllı Sepet' },
        images: [
          'images/projects/zobox/basket-1.jpg',
          'images/projects/zobox/basket-2.jpg',
          'images/projects/zobox/basket-3.jpg',
        ],
        body: {
          en: 'A companion mobile basket that pairs with the checkout station and travels with the customer.',
          tr: 'Checkout istasyonu ile eşleşen ve müşteriyle birlikte hareket eden taşınabilir bir sepet.',
        },
      },
      {
        title: { en: 'Dashboard', tr: 'Pano' },
        image: 'images/projects/zobox/app-dashboard.jpg',
        body: {
          en: 'Welcome flow, product categorization, detected items list, QR-based scan-to-pay and total.',
          tr: 'Karşılama akışı, ürün kategorizasyonu, algılanan ürün listesi, QR ile öde ve toplam tutar.',
        },
      },
      {
        title: { en: 'Concept Sketches', tr: 'Konsept Eskizleri' },
        image: 'images/projects/zobox/sketches.jpg',
      },
    ],
  },
  {
    slug: 'zest',
    number: '05',
    title: 'Zest',
    type: 'group7',
    year: '2025',
    cover: 'images/projects/zest/cover.jpg',
    model: 'models/zest.stl',
    modelRotation: [0, 0, 0], // Y-up zaten (longest Y)
    initialCamera: [4, 2.5, 5],
    tagline: {
      en: 'A marine delivery ecosystem for coastal areas and yachts.',
      tr: 'Kıyı alanları ve yatlar için bir deniz teslimat ekosistemi.',
    },
    description: {
      en: 'Delivering food, beverages, essential supplies, and restaurant services to marinas, coastal areas, yachts, and onshore pickup points is a time-consuming and logistically challenging process. We aim to design a marine-based delivery experience for people living near the sea or spending time in coastal areas. The system centers around a mobile main station that moves between bays and coastal points, while autonomous and manually operated hybrid marine vehicles transport goods. Using GPS, IoT, and real-time tracking, it forms a smart and connected delivery network that adapts to seasonal demand.',
      tr: 'Marinalara, kıyı alanlarına, yatlara ve kıyıdaki teslim alma noktalarına yiyecek, içecek, temel malzeme ve restoran hizmetleri ulaştırmak zaman alıcı ve lojistik olarak zorlu bir süreçtir. Denize yakın yaşayan veya kıyı alanlarında zaman geçiren insanlar için deniz tabanlı bir teslimat deneyimi tasarlamayı amaçlıyoruz. Sistem koylar ve kıyı noktaları arasında hareket eden mobil bir ana istasyon etrafında yapılandırılır; otonom ve manuel kullanılan hibrit deniz araçları malları taşır. GPS, IoT ve gerçek zamanlı takip kullanılarak mevsimsel talebe uyum sağlayan akıllı ve bağlantılı bir teslimat ağı oluşturur.',
    },
    sections: [
      {
        title: { en: 'In Context', tr: 'Bağlam İçinde' },
        image: 'images/projects/zest/yacht-angle.jpg',
      },
      {
        title: { en: 'Approach', tr: 'Yaklaşım' },
        image: 'images/projects/zest/description.jpg',
      },
      {
        title: { en: 'Front View', tr: 'Önden Görünüm' },
        image: 'images/projects/zest/front.jpg',
      },
      {
        title: { en: 'User Scenario', tr: 'Kullanıcı Senaryosu' },
        image: 'images/projects/zest/scenario.jpg',
      },
      {
        title: { en: 'Companion App', tr: 'Yardımcı Uygulama' },
        image: 'images/projects/zest/app.jpg',
      },
    ],
  },
  {
    slug: 'indep',
    number: '06',
    title: 'Indep',
    type: 'individual',
    year: '2025',
    cover: 'images/projects/indep/cover.jpg',
    model: 'models/indep.stl',
    modelRotation: [0, 0, 0], // Y-up zaten (longest Y)
    initialCamera: [3, 2.5, 4],
    tagline: {
      en: 'An experience-oriented outdoor heating unit.',
      tr: 'Deneyim odaklı, dış mekan ısıtma ünitesi.',
    },
    description: {
      en: 'INDEP is an experience-oriented outdoor heating unit designed to provide thermal comfort in cold weather conditions. By combining real flame, rotating seating modules, integrated lighting, and greenery within a single structure, the project creates a warm and atmospheric social gathering experience for rooftops, hotel terraces, restaurants, and outdoor hospitality spaces.',
      tr: 'INDEP, soğuk hava koşullarında termal konfor sağlamak için tasarlanmış, deneyim odaklı bir dış mekan ısıtma ünitesidir. Gerçek alev, döner oturma modülleri, entegre aydınlatma ve yeşillik tek bir yapıda birleştirilerek çatılar, otel terasları, restoranlar ve açık hava ağırlama alanları için sıcak ve atmosferik bir sosyalleşme deneyimi yaratılır.',
    },
    sections: [
      {
        title: { en: 'Top View', tr: 'Üstten Görünüm' },
        image: 'images/projects/indep/top-view.jpg',
        body: {
          en: '360° rotating mechanism, integrated LED lighting and greenery on the roof structure.',
          tr: '360° döner mekanizma, entegre LED aydınlatma ve çatı yapısında yeşillik.',
        },
      },
      {
        title: { en: 'Side View', tr: 'Yandan Görünüm' },
        image: 'images/projects/indep/side.jpg',
      },
      {
        title: { en: 'Three-Quarter', tr: 'Üç Çeyrek Görünüm' },
        image: 'images/projects/indep/angle.jpg',
      },
      {
        title: { en: 'Flame Detail', tr: 'Alev Detayı' },
        image: 'images/projects/indep/flame-detail.jpg',
      },
    ],
  },
];

export const projectTypes = {
  individual: { en: 'Individual Project', tr: 'Bireysel Proje' },
  group2: { en: '2-person group project', tr: '2 kişilik grup projesi' },
  group7: { en: '7-person group project', tr: '7 kişilik grup projesi' },
};
