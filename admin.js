/**
 * Sayfa içerik tanımları — admin panelinde düzenlenebilir tüm metin anahtarları.
 * Anahtarlar data-i18n ile HTML'deki alanlarla eşleşir.
 */
const PAGE_DEFINITIONS = {
  index: {
    label: 'Ana Sayfa',
    texts: [
      { key: 'homeEyebrow', label: 'Üst başlık (eyebrow)' },
      { key: 'homeLead', label: 'Ana açıklama metni' },
      { key: 'homeCta', label: 'Birincil buton metni' },
      { key: 'homeSecondary', label: 'İkincil buton metni' },
      { key: 'metric1', label: 'Metrik 1 açıklaması' },
      { key: 'metric2', label: 'Metrik 2 açıklaması' },
      { key: 'metric3', label: 'Metrik 3 açıklaması' },
      { key: 'homeApproachEyebrow', label: 'Yaklaşım — eyebrow' },
      { key: 'homeApproachTitle', label: 'Yaklaşım — başlık' },
      { key: 'homeApproachText', label: 'Yaklaşım — metin' },
      { key: 'feature1Title', label: 'Özellik 1 — başlık' },
      { key: 'feature1Text', label: 'Özellik 1 — metin' },
      { key: 'feature2Title', label: 'Özellik 2 — başlık' },
      { key: 'feature2Text', label: 'Özellik 2 — metin' },
      { key: 'feature3Title', label: 'Özellik 3 — başlık' },
      { key: 'feature3Text', label: 'Özellik 3 — metin' },
      { key: 'bandEyebrow', label: 'Premium bant — eyebrow' },
      { key: 'bandTitle', label: 'Premium bant — başlık' },
      { key: 'bandText', label: 'Premium bant — metin' },
      { key: 'bandCta', label: 'Premium bant — buton' },
      { key: 'experienceEyebrow', label: 'Studio OS — eyebrow' },
      { key: 'experienceTitle', label: 'Studio OS — başlık' },
      { key: 'experienceText', label: 'Studio OS — metin' },
      { key: 'experience1Title', label: 'Studio kart 1 — başlık' },
      { key: 'experience1Text', label: 'Studio kart 1 — metin' },
      { key: 'experience2Title', label: 'Studio kart 2 — başlık' },
      { key: 'experience2Text', label: 'Studio kart 2 — metin' },
      { key: 'experience3Title', label: 'Studio kart 3 — başlık' },
      { key: 'experience3Text', label: 'Studio kart 3 — metin' },
      { key: 'timelineEyebrow', label: 'Süreç — eyebrow' },
      { key: 'timeline1Title', label: 'Adım 1 — başlık' },
      { key: 'timeline1Text', label: 'Adım 1 — metin' },
      { key: 'timeline2Title', label: 'Adım 2 — başlık' },
      { key: 'timeline2Text', label: 'Adım 2 — metin' },
      { key: 'timeline3Title', label: 'Adım 3 — başlık' },
      { key: 'timeline3Text', label: 'Adım 3 — metin' },
      { key: 'timeline4Title', label: 'Adım 4 — başlık' },
      { key: 'timeline4Text', label: 'Adım 4 — metin' }
    ],
    images: [
      { key: 'heroBackground', label: 'Ana hero arka plan görseli' },
      { key: 'experienceBackground', label: 'Studio OS bölüm arka planı' }
    ]
  },
  services: {
    label: 'Hizmetler',
    texts: [
      { key: 'servicesEyebrow', label: 'Eyebrow' },
      { key: 'servicesTitle', label: 'Sayfa başlığı' },
      { key: 'servicesLead', label: 'Giriş metni' },
      { key: 'service1Title', label: 'Hizmet 1 — başlık' },
      { key: 'service1Text', label: 'Hizmet 1 — metin' },
      { key: 'service2Title', label: 'Hizmet 2 — başlık' },
      { key: 'service2Text', label: 'Hizmet 2 — metin' },
      { key: 'service3Title', label: 'Hizmet 3 — başlık' },
      { key: 'service3Text', label: 'Hizmet 3 — metin' },
      { key: 'service4Title', label: 'Hizmet 4 — başlık' },
      { key: 'service4Text', label: 'Hizmet 4 — metin' },
      { key: 'package1Title', label: 'Paket 1 — başlık' },
      { key: 'package1Text', label: 'Paket 1 — metin' },
      { key: 'package2Title', label: 'Paket 2 — başlık' },
      { key: 'package2Text', label: 'Paket 2 — metin' },
      { key: 'package3Title', label: 'Paket 3 — başlık' },
      { key: 'package3Text', label: 'Paket 3 — metin' }
    ],
    images: [
      { key: 'heroBackground', label: 'Hero arka plan görseli' }
    ]
  },
  portfolio: {
    label: 'Projeler',
    texts: [
      { key: 'portfolioEyebrow', label: 'Eyebrow' },
      { key: 'portfolioTitle', label: 'Sayfa başlığı' },
      { key: 'portfolioLead', label: 'Giriş metni' },
      { key: 'compareEyebrow', label: 'Önce/Sonra — eyebrow' },
      { key: 'compareTitle', label: 'Önce/Sonra — başlık' },
      { key: 'compareLead', label: 'Önce/Sonra — metin' },
      { key: 'compareBefore', label: 'Önce etiketi' },
      { key: 'compareAfter', label: 'Sonra etiketi' },
      { key: 'portfolioStats1', label: 'İstatistik 1' },
      { key: 'portfolioStats2', label: 'İstatistik 2' },
      { key: 'portfolioStats3', label: 'İstatistik 3' }
    ],
    images: [
      { key: 'heroBackground', label: 'Hero arka plan görseli' },
      { key: 'compareBefore', label: 'Karşılaştırma — önce görseli' },
      { key: 'compareAfter', label: 'Karşılaştırma — sonra görseli' }
    ]
  },
  contact: {
    label: 'İletişim',
    texts: [
      { key: 'contactEyebrow', label: 'Eyebrow' },
      { key: 'contactTitle', label: 'Sayfa başlığı' },
      { key: 'contactLead', label: 'Giriş metni' },
      { key: 'contactInfoTitle', label: 'Studio bilgileri başlığı' },
      { key: 'contactEmail', label: 'E-posta adresi' },
      { key: 'contactPhone', label: 'Telefon / WhatsApp' },
      { key: 'contactAddress', label: 'Adres' },
      { key: 'contactAddressLabel', label: 'Adres etiketi' },
      { key: 'tagPermit', label: 'Etiket — Ruhsat' },
      { key: 'tagDesign', label: 'Etiket — Tasarım' },
      { key: 'tagBuild', label: 'Etiket — Uygulama' },
      { key: 'fieldName', label: 'Form — Ad Soyad' },
      { key: 'fieldEmail', label: 'Form — E-posta' },
      { key: 'contactSubject', label: 'Form — Konu' },
      { key: 'contactMessage', label: 'Form — Mesaj' },
      { key: 'contactSend', label: 'Form — Gönder butonu' }
    ],
    images: [
      { key: 'heroBackground', label: 'Hero arka plan görseli' }
    ]
  },
  'ai-brief': {
    label: 'AI Brief',
    texts: [
      { key: 'aiEyebrow', label: 'Eyebrow' },
      { key: 'aiTitle', label: 'Sayfa başlığı' },
      { key: 'aiLead', label: 'Giriş metni' },
      { key: 'stepIdea', label: 'Adım 1 — Fikir' },
      { key: 'stepRefine', label: 'Adım 2 — Geliştir' },
      { key: 'stepContact', label: 'Adım 3 — İletişim' },
      { key: 'stepSend', label: 'Adım 4 — Gönder' },
      { key: 'chatStatus', label: 'Chat durum metni' },
      { key: 'chatWelcome', label: 'Chat karşılama mesajı' },
      { key: 'ideaLabel', label: 'Fikir alanı etiketi' },
      { key: 'ideaPlaceholder', label: 'Fikir alanı placeholder', type: 'placeholder' },
      { key: 'ideaButton', label: 'Fikir gönder butonu' },
      { key: 'resultEyebrow', label: 'Pasaport — eyebrow' },
      { key: 'resultTitle', label: 'Pasaport — başlık' },
      { key: 'resultEmpty', label: 'Pasaport — boş durum metni' },
      { key: 'contactGateText', label: 'İletişim kapısı metni' },
      { key: 'contactGateButton', label: 'İletişim kaydet butonu' },
      { key: 'fieldPhone', label: 'Form — Telefon' },
      { key: 'sendNote', label: 'Gönderim notu' },
      { key: 'resultEmail', label: 'Özet gönder butonu' },
      { key: 'sendSuccess', label: 'Gönderim başarı mesajı' }
    ],
    images: [
      { key: 'heroBackground', label: 'Hero arka plan görseli' }
    ]
  },
  sigorta: {
    label: 'Sigorta',
    texts: [
      { key: 'insuranceEyebrow', label: 'Eyebrow' },
      { key: 'insuranceTitle', label: 'Sayfa başlığı' },
      { key: 'insuranceLead', label: 'Giriş metni' },
      { key: 'insurance1Title', label: 'Özellik 1 — başlık' },
      { key: 'insurance1Text', label: 'Özellik 1 — metin' },
      { key: 'insurance2Title', label: 'Özellik 2 — başlık' },
      { key: 'insurance2Text', label: 'Özellik 2 — metin' },
      { key: 'insurance3Title', label: 'Özellik 3 — başlık' },
      { key: 'insurance3Text', label: 'Özellik 3 — metin' },
      { key: 'insuranceCta', label: 'CTA buton metni' },
      { key: 'insuranceMatrixEyebrow', label: 'Kapsam haritası — eyebrow' },
      { key: 'insuranceMatrixTitle', label: 'Kapsam haritası — başlık' },
      { key: 'insuranceMatrixText', label: 'Kapsam haritası — metin' },
      { key: 'insuranceMatrix1Title', label: 'Kapsam 1 — başlık' },
      { key: 'insuranceMatrix1Text', label: 'Kapsam 1 — metin' },
      { key: 'insuranceMatrix2Title', label: 'Kapsam 2 — başlık' },
      { key: 'insuranceMatrix2Text', label: 'Kapsam 2 — metin' },
      { key: 'insuranceMatrix3Title', label: 'Kapsam 3 — başlık' },
      { key: 'insuranceMatrix3Text', label: 'Kapsam 3 — metin' },
      { key: 'insuranceMatrix4Title', label: 'Kapsam 4 — başlık' },
      { key: 'insuranceMatrix4Text', label: 'Kapsam 4 — metin' }
    ],
    images: [
      { key: 'heroBackground', label: 'Hero arka plan görseli' }
    ]
  }
};

/** Varsayılan Türkçe metinler (app.js translations.tr ile senkron) */
const DEFAULT_TR_TEXTS = {
  homeEyebrow: "Türkiye'de akıllı proje geliştirme",
  homeLead: 'Arsa, villa, ticari alan ve tadilat fikirlerini net plana, bütçeye ve uygulanabilir şantiyeye dönüştürüyoruz.',
  homeCta: 'Fikrimi netleştir',
  homeSecondary: 'Projeleri incele',
  metric1: 'İlk kapsam özeti',
  metric2: 'Konsept ve malzeme dili',
  metric3: 'Ruhsat, maliyet ve saha takibi',
  homeApproachEyebrow: 'Yaklaşım',
  homeApproachTitle: 'Belirsiz fikri ölçülebilir inşaat kararlarına çeviriyoruz.',
  homeApproachText: 'Her proje için ihtiyaç analizi, konsept rota, metraj, tedarik stratejisi ve haftalık ilerleme şeffaflığı sunulur. Müşteri, mimar ve mühendis aynı bilgi üzerinden ilerler.',
  feature1Title: 'AI destekli brief',
  feature1Text: 'Müşteri ne istediğinden emin değilse, akıllı sorularla hedef, stil, alan, bütçe ve zaman planını toplar.',
  feature2Title: 'Canlı maliyet haritası',
  feature2Text: 'Tasarım kararlarının maliyet ve süre etkisini paketler halinde görünür hale getirir.',
  feature3Title: 'Şantiye panosu',
  feature3Text: 'Haftalık fotoğraf, karar listesi, teslim tarihleri ve onay bekleyen kalemler tek merkezde tutulur.',
  bandEyebrow: 'Premium fikir',
  bandTitle: 'Müşteriye proje pasaportu verin.',
  bandText: 'AI Brief tamamlandığında otomatik olarak proje pasaportu oluşur: istekler, riskler, öncelikler, tahmini kapsam ve mühendise gidecek teknik notlar.',
  bandCta: 'Pasaport oluştur',
  experienceEyebrow: 'Studio OS',
  experienceTitle: 'Tek ekranda fikir, maliyet, sigorta ve saha ritmi.',
  experienceText: 'Her proje bir karar merkeziyle ilerler: müşteri ne istediğini görür, mühendis hangi riskleri çözmesi gerektiğini bilir, saha ekibi de sıradaki teslimi kaçırmaz.',
  experience1Title: 'Brief intelligence',
  experience1Text: 'Fikirleri net kapsam ve teknik sorulara çevirir.',
  experience2Title: 'Risk lens',
  experience2Text: 'Ruhsat, zemin, sigorta ve uygulama risklerini görünür kılar.',
  experience3Title: 'Decision log',
  experience3Text: 'Onayları, değişiklikleri ve maliyet etkisini takip eder.',
  timelineEyebrow: 'Nasıl ilerler',
  timeline1Title: 'Keşif',
  timeline1Text: 'AI Brief ve ilk görüşmeyle ihtiyaçlar, beklentiler ve belirsizlikler çıkarılır.',
  timeline2Title: 'Konsept',
  timeline2Text: 'Stil yönü, fonksiyon programı, ön maliyet ve risk notları hazırlanır.',
  timeline3Title: 'Uygulama',
  timeline3Text: 'Çizim, teklif, sigorta ve saha programı aynı akışta yönetilir.',
  timeline4Title: 'Teslim',
  timeline4Text: 'Kontrol listesi, fotoğraf raporu ve bakım önerileriyle proje kapatılır.',
  servicesEyebrow: 'Hizmetler',
  servicesTitle: 'Fikirden teslimata kadar kontrollü süreç.',
  servicesLead: 'Konut, villa, klinik, mağaza ve ofis projeleri için tasarım, ruhsat, uygulama ve denetim hizmetleri.',
  service1Title: 'Konsept ve fizibilite',
  service1Text: 'Arsa potansiyeli, ihtiyaç programı, referans stil, ön maliyet ve ilk zaman çizelgesi hazırlanır.',
  service2Title: 'Mimari ve mühendislik koordinasyonu',
  service2Text: 'Mimari, statik, mekanik, elektrik ve ruhsat dosyaları tek teslimat planında birleştirilir.',
  service3Title: 'Uygulama ve tadilat',
  service3Text: 'Saha ekibi, malzeme seçimi, kalite kontrol ve haftalık raporlamayla iş programı yönetilir.',
  service4Title: 'Yatırımcı paketi',
  service4Text: 'Kira potansiyeli, hedef kullanıcı, marka dili ve satışa uygun görsel dosya hazırlanır.',
  package1Title: 'Start',
  package1Text: 'Hızlı brief, konsept yönü ve ilk maliyet aralığı.',
  package2Title: 'Build',
  package2Text: 'Tasarım, proje koordinasyonu, teklif dosyası ve uygulama planı.',
  package3Title: 'Investor',
  package3Text: 'Gelir modeli, premium sunum, marka ve satış odaklı proje stratejisi.',
  portfolioEyebrow: 'Projeler',
  portfolioTitle: 'Net kapsam, güçlü malzeme ve temiz teslim.',
  portfolioLead: 'Seçili konseptler; villa, butik ticari alan ve yenileme projeleri için uygulanabilir bir kalite standardı gösterir.',
  compareEyebrow: 'Önce / Sonra',
  compareTitle: 'Tadilat kararını müşteriye hissettirin.',
  compareLead: 'Sürgüyü hareket ettirerek eski mekan ile önerilen yeni atmosfer arasındaki farkı görün.',
  compareBefore: 'Önce',
  compareAfter: 'Sonra',
  portfolioStats1: 'Konsept kararları',
  portfolioStats2: 'Malzeme senaryosu',
  portfolioStats3: 'Saha etkisi',
  contactEyebrow: 'İletişim',
  contactTitle: 'Bir sonraki kararı birlikte netleştirelim.',
  contactLead: 'Yeni proje, tadilat, yatırım analizi veya teknik kontrol için ekibimize ulaşın.',
  contactInfoTitle: 'Studio bilgileri',
  contactEmail: 'engineer@ankabuild.studio',
  contactPhone: '+90 555 111 22 33',
  contactAddress: 'İstanbul, Türkiye',
  contactAddressLabel: 'Adres',
  tagPermit: 'Ruhsat',
  tagDesign: 'Tasarım',
  tagBuild: 'Uygulama',
  fieldName: 'Ad Soyad',
  fieldEmail: 'E-posta',
  contactSubject: 'Konu',
  contactMessage: 'Mesaj',
  contactSend: 'E-posta hazırla',
  aiEyebrow: 'AI Brief',
  aiTitle: 'Fikriniz net değilse, buradan başlayın.',
  aiLead: 'Fikrinizi yazın. AI öneriler, eklemeler ve kritik sorular üretir; fikir olgunlaşınca iletişim bilgilerinizi alıp mühendise gönderilecek özeti hazırlar.',
  stepIdea: 'Fikir',
  stepRefine: 'Geliştir',
  stepContact: 'İletişim',
  stepSend: 'Gönder',
  chatStatus: 'AI fikir asistanı hazır',
  chatWelcome: 'Fikrinizi serbestçe yazın. Eksik olan yerleri yakalayıp size daha güçlü, uygulanabilir bir proje fikri önereceğim.',
  ideaLabel: 'İlk fikriniz',
  ideaPlaceholder: "Örn: İstanbul'da modern ama sıcak bir villa istiyorum, bahçesi olsun, bütçeyi çok aşmak istemiyorum.",
  ideaButton: 'AI önerilerini al',
  resultEyebrow: 'Mühendis notu',
  resultTitle: 'Proje pasaportu',
  resultEmpty: 'AI önerilerinden sonra burada gönderime hazır teknik özet oluşacak.',
  contactGateText: 'Mühendis ekibimizin size dönebilmesi için iletişim bilgilerinizi paylaşın.',
  contactGateButton: 'İletişimi kaydet',
  fieldPhone: 'Telefon',
  sendNote: 'Özet hazır. Aşağıdaki butona basarak mühendise gönderebilirsiniz.',
  resultEmail: 'Özeti gönder',
  sendSuccess: 'Özet alındı. Mühendis ekibine iletmek için hazırlandı.',
  insuranceEyebrow: 'Sigorta',
  insuranceTitle: 'Projenizi sadece inşa etmeyin, güvence altına alın.',
  insuranceLead: 'Şantiye, tadilat, villa ve ticari projeler için riskleri erken görür, doğru sigorta kapsamını mühendislik süreciyle birlikte planlarız.',
  insurance1Title: 'Şantiye risk analizi',
  insurance1Text: 'Yangın, su baskını, hırsızlık, üçüncü şahıs hasarı ve ekipman riskleri proje başlamadan sınıflandırılır.',
  insurance2Title: 'Kapsam karşılaştırması',
  insurance2Text: 'İşveren, yüklenici ve taşeron sorumlulukları netleştirilir; eksik kalan güvence kalemleri işaretlenir.',
  insurance3Title: 'Hasar dosyası hazırlığı',
  insurance3Text: 'Fotoğraf, rapor, metraj ve teknik açıklamalar düzenli tutulur; gerektiğinde dosya hızlı hazırlanır.',
  insuranceCta: 'Sigorta danışmanlığı iste',
  insuranceMatrixEyebrow: 'Coverage Map',
  insuranceMatrixTitle: 'Riskleri proje başlamadan masaya koyarız.',
  insuranceMatrixText: 'Sigorta sayfası sadece poliçe anlatmaz; yatırımcıya, müteahhide ve mühendise hangi riskin kime ait olduğunu net gösterir.',
  insuranceMatrix1Title: 'CAR / İnşaat All Risk',
  insuranceMatrix1Text: 'Şantiye sürecindeki beklenmeyen hasarlara karşı ana çerçeve.',
  insuranceMatrix2Title: 'Üçüncü Şahıs Sorumluluk',
  insuranceMatrix2Text: 'Komşu, ziyaretçi veya çevre hasarları için sorumluluk takibi.',
  insuranceMatrix3Title: 'Ekipman ve Malzeme',
  insuranceMatrix3Text: 'Sahadaki makine, depolanan ürün ve tedarik riskleri.',
  insuranceMatrix4Title: 'Deprem ve Doğal Afet',
  insuranceMatrix4Text: 'Yapı türü, bölge ve teminat ihtiyacına göre değerlendirme.'
};

const DEFAULT_IMAGES = {
  index: {
    heroBackground: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=82',
    experienceBackground: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80'
  },
  services: {
    heroBackground: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80'
  },
  portfolio: {
    heroBackground: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=80',
    compareBefore: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1400&q=80',
    compareAfter: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80'
  },
  contact: {
    heroBackground: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80'
  },
  'ai-brief': {
    heroBackground: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=82'
  },
  sigorta: {
    heroBackground: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80'
  }
};

const DEFAULT_PROJECTS = [
  {
    id: 1,
    order: 1,
    type: 'Villa',
    title: 'Ege Light House',
    description: 'Doğal taş, açık mutfak, gölgeli teras ve deniz rüzgarına göre planlanan cephe.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: '',
    afterImage: ''
  },
  {
    id: 2,
    order: 2,
    type: 'Tadilat',
    title: 'Urban Renewal Flat',
    description: 'Kısa süreli uygulama, akustik iyileştirme ve saklı depolama çözümleri.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: '',
    afterImage: ''
  },
  {
    id: 3,
    order: 3,
    type: 'Ticari',
    title: 'North Clinic Studio',
    description: 'Hasta akışı, hijyenik yüzeyler ve premium marka algısı birlikte kurgulandı.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    beforeImage: '',
    afterImage: ''
  }
];

function buildDefaultSiteData() {
  const texts = {};
  Object.entries(PAGE_DEFINITIONS).forEach(([pageId, page]) => {
    texts[pageId] = {};
    page.texts.forEach(({ key }) => {
      if (DEFAULT_TR_TEXTS[key]) texts[pageId][key] = DEFAULT_TR_TEXTS[key];
    });
  });

  return {
    texts,
    images: JSON.parse(JSON.stringify(DEFAULT_IMAGES)),
    projects: JSON.parse(JSON.stringify(DEFAULT_PROJECTS))
  };
}

function normalizeProjects(projects) {
  const sorted = [...projects].sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
  sorted.forEach((project, index) => {
    project.order = index + 1;
  });
  return sorted;
}

async function apiFetch(url, options = {}) {
  const response = await fetch(url, {
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error || 'İstek başarısız');
    error.status = response.status;
    throw error;
  }
  return data;
}

let siteData = buildDefaultSiteData();
let selectedProjectIndex = -1;
let useServerApi = false;

async function checkAuth() {
  try {
    await apiFetch('/api/admin/check');
    return true;
  } catch {
    if (sessionStorage.getItem('adminLoggedIn') === 'true') return true;
    window.location.href = 'admin-login.html';
    return false;
  }
}

async function loadSiteData() {
  try {
    const remote = await apiFetch('/api/content');
    siteData = {
      texts: remote.texts || {},
      images: remote.images || {},
      projects: normalizeProjects(remote.projects || DEFAULT_PROJECTS)
    };
    useServerApi = true;
    localStorage.setItem('adminSiteData', JSON.stringify(siteData));
  } catch {
    const saved = localStorage.getItem('adminSiteData');
    siteData = saved ? JSON.parse(saved) : buildDefaultSiteData();
    siteData.projects = normalizeProjects(siteData.projects || DEFAULT_PROJECTS);
    useServerApi = false;
  }
}

async function saveSiteData() {
  siteData.projects = normalizeProjects(siteData.projects);
  localStorage.setItem('adminSiteData', JSON.stringify(siteData));

  if (useServerApi) {
    await apiFetch('/api/content', {
      method: 'PUT',
      body: JSON.stringify(siteData)
    });
  }
}

function getPageTextValue(pageId, key) {
  return siteData.texts?.[pageId]?.[key] ?? DEFAULT_TR_TEXTS[key] ?? '';
}

function getPageImageValue(pageId, key) {
  return siteData.images?.[pageId]?.[key] ?? DEFAULT_IMAGES[pageId]?.[key] ?? '';
}

function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
}

function loadPageTexts() {
  const pageId = document.getElementById('pageSelector').value;
  const page = PAGE_DEFINITIONS[pageId];
  const editor = document.getElementById('textEditor');
  editor.innerHTML = '';

  page.texts.forEach(({ key, label, type }) => {
    const value = getPageTextValue(pageId, key);
    const item = document.createElement('div');
    item.className = 'content-item';
    item.innerHTML = `
      <label>${label} <small>(${key})</small></label>
      <textarea data-page="${pageId}" data-key="${key}" data-type="${type || 'text'}">${value}</textarea>
    `;
    editor.appendChild(item);
  });
}

function loadPageImages() {
  const pageId = document.getElementById('imagePageSelector').value;
  const page = PAGE_DEFINITIONS[pageId];
  const editor = document.getElementById('imageEditor');
  editor.innerHTML = '';

  page.images.forEach(({ key, label }) => {
    const value = getPageImageValue(pageId, key);
    const item = document.createElement('div');
    item.className = 'content-item';
    item.innerHTML = `
      <label>${label} <small>(${key})</small></label>
      <input type="url" data-page="${pageId}" data-key="${key}" value="${value}" placeholder="Görsel URL">
      <img src="${value}" class="image-preview" alt="Önizleme">
    `;
    editor.appendChild(item);

    const input = item.querySelector('input');
    const preview = item.querySelector('img');
    input.addEventListener('input', () => {
      preview.src = input.value;
    });
  });
}

function loadProjectsEditor() {
  const editor = document.getElementById('projectsEditor');
  editor.innerHTML = '';
  siteData.projects = normalizeProjects(siteData.projects);

  siteData.projects.forEach((project, index) => {
    const item = document.createElement('div');
    item.className = `project-item${selectedProjectIndex === index ? ' selected' : ''}`;
    item.innerHTML = `
      <div>
        <p class="editor-group-title">Proje bilgileri</p>
        <label>Sıra numarası</label>
        <input type="number" min="1" data-field="order" data-index="${index}" value="${project.order}">
        <label>Proje türü *</label>
        <input type="text" data-field="type" data-index="${index}" value="${project.type}">
        <label>Proje başlığı *</label>
        <input type="text" data-field="title" data-index="${index}" value="${project.title}">
        <label>Açıklama</label>
        <textarea data-field="description" data-index="${index}">${project.description}</textarea>
      </div>
      <div>
        <p class="editor-group-title">Görseller</p>
        <label>Ana görsel * (URL)</label>
        <input type="url" data-field="image" data-index="${index}" value="${project.image}">
        <img src="${project.image}" class="image-preview" alt="Proje görseli" data-preview="image">
        <label>Önce görseli (URL, isteğe bağlı)</label>
        <input type="url" data-field="beforeImage" data-index="${index}" value="${project.beforeImage || ''}">
        <img src="${project.beforeImage || ''}" class="image-preview" alt="Önce görseli" data-preview="beforeImage">
        <label>Sonra görseli (URL, isteğe bağlı)</label>
        <input type="url" data-field="afterImage" data-index="${index}" value="${project.afterImage || ''}">
        <img src="${project.afterImage || ''}" class="image-preview" alt="Sonra görseli" data-preview="afterImage">
        <div class="project-controls">
          <button type="button" class="btn btn-secondary" onclick="selectProject(${index})">Seç</button>
          <button type="button" class="btn btn-danger" onclick="removeProject(${index})">Sil</button>
        </div>
      </div>
    `;
    editor.appendChild(item);

    item.querySelectorAll('input[type="url"]').forEach((input) => {
      input.addEventListener('input', () => {
        const preview = item.querySelector(`img[data-preview="${input.dataset.field}"]`);
        if (preview) preview.src = input.value;
      });
    });
  });
}

function validateProjectChanges() {
  for (let i = 0; i < siteData.projects.length; i++) {
    const project = siteData.projects[i];
    const num = i + 1;
    if (!project.type || !project.type.trim()) return `Proje ${num}: tür alanı zorunludur.`;
    if (!project.title || !project.title.trim()) return `Proje ${num}: başlık alanı zorunludur.`;
    if (!project.image || !/^https?:\/\//i.test(project.image.trim())) {
      return `Proje ${num}: ana görsel için geçerli bir http(s) URL girin.`;
    }
  }
  return null;
}

function selectProject(index) {
  selectedProjectIndex = index;
  loadProjectsEditor();
}

function moveProjectUp() {
  if (selectedProjectIndex <= 0) {
    alert('Lütfen önce bir proje seçin veya proje zaten en üstte.');
    return;
  }
  const projects = siteData.projects;
  [projects[selectedProjectIndex - 1], projects[selectedProjectIndex]] =
    [projects[selectedProjectIndex], projects[selectedProjectIndex - 1]];
  siteData.projects = normalizeProjects(projects);
  selectedProjectIndex -= 1;
  loadProjectsEditor();
}

function moveProjectDown() {
  if (selectedProjectIndex === -1 || selectedProjectIndex >= siteData.projects.length - 1) {
    alert('Lütfen önce bir proje seçin veya proje zaten en altta.');
    return;
  }
  const projects = siteData.projects;
  [projects[selectedProjectIndex + 1], projects[selectedProjectIndex]] =
    [projects[selectedProjectIndex], projects[selectedProjectIndex + 1]];
  siteData.projects = normalizeProjects(projects);
  selectedProjectIndex += 1;
  loadProjectsEditor();
}

function applyOrderFromInputs() {
  const orderInputs = document.querySelectorAll('#projectsEditor input[data-field="order"]');
  orderInputs.forEach((input) => {
    const index = Number(input.dataset.index);
    siteData.projects[index].order = Number(input.value) || index + 1;
  });
  siteData.projects = normalizeProjects(siteData.projects);
}

async function saveTextChanges() {
  const pageId = document.getElementById('pageSelector').value;
  if (!siteData.texts[pageId]) siteData.texts[pageId] = {};

  document.querySelectorAll('#textEditor textarea').forEach((textarea) => {
    siteData.texts[textarea.dataset.page][textarea.dataset.key] = textarea.value;
  });

  await saveSiteData();
  showSuccessMessage();
}

async function saveImageChanges() {
  const pageId = document.getElementById('imagePageSelector').value;
  if (!siteData.images[pageId]) siteData.images[pageId] = {};

  document.querySelectorAll('#imageEditor input[type="url"]').forEach((input) => {
    siteData.images[input.dataset.page][input.dataset.key] = input.value;
  });

  await saveSiteData();
  showSuccessMessage();
}

async function saveProjectChanges() {
  document.querySelectorAll('#projectsEditor input, #projectsEditor textarea').forEach((input) => {
    const field = input.dataset.field;
    const index = input.dataset.index;
    if (field && index !== undefined) {
      siteData.projects[index][field] = field === 'order' ? Number(input.value) : input.value;
    }
  });

  applyOrderFromInputs();

  const validationError = validateProjectChanges();
  if (validationError) {
    alert(validationError);
    return;
  }

  await saveSiteData();
  loadProjectsEditor();
  showSuccessMessage();
}

async function addNewProject() {
  const maxOrder = siteData.projects.reduce((max, p) => Math.max(max, p.order || 0), 0);
  siteData.projects.push({
    id: Date.now(),
    order: maxOrder + 1,
    type: 'Yeni Proje',
    title: 'Proje Başlığı',
    description: 'Proje açıklaması',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: '',
    afterImage: ''
  });
  siteData.projects = normalizeProjects(siteData.projects);
  await saveSiteData();
  loadProjectsEditor();
}

async function removeProject(index) {
  if (!confirm('Bu projeyi silmek istediğinize emin misiniz?')) return;
  siteData.projects.splice(index, 1);
  siteData.projects = normalizeProjects(siteData.projects);
  selectedProjectIndex = -1;
  await saveSiteData();
  loadProjectsEditor();
}

async function updateCredentials() {
  const currentPassword = document.getElementById('currentPassword').value;
  const newUsername = document.getElementById('newUsername').value.trim();
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!currentPassword || !newUsername || !newPassword) {
    alert('Mevcut şifre, yeni kullanıcı adı ve yeni şifre gereklidir.');
    return;
  }

  if (newPassword !== confirmPassword) {
    alert('Yeni şifreler eşleşmiyor.');
    return;
  }

  try {
    if (useServerApi) {
      const result = await apiFetch('/api/admin/credentials', {
        method: 'PUT',
        body: JSON.stringify({ currentPassword, newUsername, newPassword, confirmPassword })
      });
      document.getElementById('currentUsername').value = result.username;
    } else {
      localStorage.setItem('adminCredentials', JSON.stringify({ username: newUsername, password: newPassword }));
      document.getElementById('currentUsername').value = newUsername;
    }

    document.getElementById('currentPassword').value = '';
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    alert('Giriş bilgileri güncellendi.');
    showSuccessMessage();
  } catch (error) {
    alert(error.message || 'Güncelleme başarısız.');
  }
}

async function logout() {
  try {
    await apiFetch('/api/admin/logout', { method: 'POST' });
  } catch {
    // offline fallback
  }
  sessionStorage.removeItem('adminLoggedIn');
  window.location.href = 'admin-login.html';
}

function showSuccessMessage() {
  const message = document.getElementById('successMessage');
  message.style.display = 'block';
  setTimeout(() => {
    message.style.display = 'none';
  }, 3000);
}

async function initAdminPanel() {
  const authed = await checkAuth();
  if (!authed) return;

  await loadSiteData();

  try {
    const check = await apiFetch('/api/admin/check');
    document.getElementById('currentUsername').value = check.username;
  } catch {
    const creds = JSON.parse(localStorage.getItem('adminCredentials') || '{"username":"admin"}');
    document.getElementById('currentUsername').value = creds.username || 'admin';
  }

  setupTabs();
  loadPageTexts();
  loadPageImages();
  loadProjectsEditor();
}

document.addEventListener('DOMContentLoaded', initAdminPanel);

// Global handlers for inline onclick
window.selectProject = selectProject;
window.moveProjectUp = moveProjectUp;
window.moveProjectDown = moveProjectDown;
window.saveTextChanges = saveTextChanges;
window.saveImageChanges = saveImageChanges;
window.saveProjectChanges = saveProjectChanges;
window.addNewProject = addNewProject;
window.removeProject = removeProject;
window.updateCredentials = updateCredentials;
window.logout = logout;
window.loadPageTexts = loadPageTexts;
window.loadPageImages = loadPageImages;
