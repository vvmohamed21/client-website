const engineerEmail = "engineer@ankabuild.studio";
const briefApiEndpoint = window.ANKA_BRIEF_ENDPOINT || "";
const contactApiEndpoint = window.ANKA_CONTACT_ENDPOINT || "";

const translations = {
  tr: {
    brandLine: "Mimarlık ve inşaat danışmanlığı",
    navHome: "Ana sayfa",
    navServices: "Hizmetler",
    navPortfolio: "Projeler",
    navInsurance: "Sigorta",
    navAi: "AI Brief",
    navContact: "İletişim",
    footerContact: "Teklif iste",
    footerAi: "AI Brief başlat",
    homeEyebrow: "Türkiye'de akıllı proje geliştirme",
    homeLead: "Arsa, villa, ticari alan ve tadilat fikirlerini net plana, bütçeye ve uygulanabilir şantiyeye dönüştürüyoruz.",
    homeCta: "Fikrimi netleştir",
    homeSecondary: "Projeleri incele",
    metric1: "İlk kapsam özeti",
    metric2: "Konsept ve malzeme dili",
    metric3: "Ruhsat, maliyet ve saha takibi",
    homeApproachEyebrow: "Yaklaşım",
    homeApproachTitle: "Belirsiz fikri ölçülebilir inşaat kararlarına çeviriyoruz.",
    homeApproachText: "Her proje için ihtiyaç analizi, konsept rota, metraj, tedarik stratejisi ve haftalık ilerleme şeffaflığı sunulur. Müşteri, mimar ve mühendis aynı bilgi üzerinden ilerler.",
    feature1Title: "AI destekli brief",
    feature1Text: "Müşteri ne istediğinden emin değilse, akıllı sorularla hedef, stil, alan, bütçe ve zaman planını toplar.",
    feature2Title: "Canlı maliyet haritası",
    feature2Text: "Tasarım kararlarının maliyet ve süre etkisini paketler halinde görünür hale getirir.",
    feature3Title: "Şantiye panosu",
    feature3Text: "Haftalık fotoğraf, karar listesi, teslim tarihleri ve onay bekleyen kalemler tek merkezde tutulur.",
    bandEyebrow: "Premium fikir",
    bandTitle: "Müşteriye proje pasaportu verin.",
    bandText: "AI Brief tamamlandığında otomatik olarak proje pasaportu oluşur: istekler, riskler, öncelikler, tahmini kapsam ve mühendise gidecek teknik notlar.",
    bandCta: "Pasaport oluştur",
    servicesEyebrow: "Hizmetler",
    servicesTitle: "Fikirden teslimata kadar kontrollü süreç.",
    servicesLead: "Konut, villa, klinik, mağaza ve ofis projeleri için tasarım, ruhsat, uygulama ve denetim hizmetleri.",
    service1Title: "Konsept ve fizibilite",
    service1Text: "Arsa potansiyeli, ihtiyaç programı, referans stil, ön maliyet ve ilk zaman çizelgesi hazırlanır.",
    service2Title: "Mimari ve mühendislik koordinasyonu",
    service2Text: "Mimari, statik, mekanik, elektrik ve ruhsat dosyaları tek teslimat planında birleştirilir.",
    service3Title: "Uygulama ve tadilat",
    service3Text: "Saha ekibi, malzeme seçimi, kalite kontrol ve haftalık raporlamayla iş programı yönetilir.",
    service4Title: "Yatırımcı paketi",
    service4Text: "Kira potansiyeli, hedef kullanıcı, marka dili ve satışa uygun görsel dosya hazırlanır.",
    package1Title: "Start",
    package1Text: "Hızlı brief, konsept yönü ve ilk maliyet aralığı.",
    package2Title: "Build",
    package2Text: "Tasarım, proje koordinasyonu, teklif dosyası ve uygulama planı.",
    package3Title: "Investor",
    package3Text: "Gelir modeli, premium sunum, marka ve satış odaklı proje stratejisi.",
    portfolioEyebrow: "Projeler",
    portfolioTitle: "Net kapsam, güçlü malzeme ve temiz teslim.",
    portfolioLead: "Seçili konseptler; villa, butik ticari alan ve yenileme projeleri için uygulanabilir bir kalite standardı gösterir.",
    aiEyebrow: "AI Brief",
    aiTitle: "Fikriniz net değilse, buradan başlayın.",
    aiLead: "Fikrinizi yazın. AI öneriler, eklemeler ve kritik sorular üretir; fikir olgunlaşınca iletişim bilgilerinizi alıp mühendise gönderilecek özeti hazırlar.",
    fieldName: "Ad Soyad",
    fieldEmail: "E-posta",
    fieldPhone: "Telefon",
    fieldLocation: "Şehir / ilçe",
    fieldType: "Proje türü",
    typeVilla: "Villa",
    typeRenovation: "Daire tadilatı",
    typeCommercial: "Ticari alan",
    typeLand: "Arsa geliştirme",
    fieldBudget: "Bütçe aralığı",
    budgetExploratory: "Henüz net değil",
    fieldTimeline: "Başlama hedefi",
    timeNow: "Hemen",
    timeSoon: "1-3 ay",
    timeLater: "3-6 ay",
    timeResearch: "Araştırma aşaması",
    fieldStyle: "Stil",
    styleWarm: "Sıcak modern",
    styleMinimal: "Minimal lüks",
    styleMediterranean: "Doğal Akdeniz",
    styleUnsure: "Emin değilim",
    fieldDream: "Aklınızdaki fikri anlatın",
    fieldPriorities: "En önemli öncelikler",
    priorityPlaceholder: "Bütçe, hız, lüks malzeme, kira getirisi...",
    resultEyebrow: "Mühendis notu",
    resultTitle: "Proje pasaportu",
    resultEmpty: "AI önerilerinden sonra burada gönderime hazır teknik özet oluşacak.",
    resultEmail: "Özeti gönder",
    contactEyebrow: "İletişim",
    contactTitle: "Bir sonraki kararı birlikte netleştirelim.",
    contactLead: "Yeni proje, tadilat, yatırım analizi veya teknik kontrol için ekibimize ulaşın.",
    contactInfoTitle: "Studio bilgileri",
    contactAddressLabel: "Adres",
    tagPermit: "Ruhsat",
    tagDesign: "Tasarım",
    tagBuild: "Uygulama",
    contactSubject: "Konu",
    contactMessage: "Mesaj",
    contactSend: "E-posta hazırla",
    contactSuccess: "Mesajınız alındı. Ekibimiz sizinle iletişime geçecek.",
    contactError: "Mesaj şu an gönderilemedi. Lütfen tekrar deneyin.",
    briefIntro: "AI Brief tarafından hazırlanan proje pasaportu",
    briefClient: "Müşteri",
    briefProject: "Proje türü",
    briefLocation: "Konum",
    briefBudget: "Bütçe",
    briefTimeline: "Zaman",
    briefStyle: "Stil",
    briefPriorities: "Öncelikler",
    briefIdea: "Fikir",
    briefRecommendation: "Önerilen rota",
    briefRecommendationText: "Müşteriyle 30 dakikalık keşif görüşmesi, ardından konsept moodboard, metraj varsayımları ve risk listesi hazırlanmalı.",
    chatStatus: "AI fikir asistanı hazır",
    chatWelcome: "Fikrinizi serbestçe yazın. Eksik olan yerleri yakalayıp size daha güçlü, uygulanabilir bir proje fikri önereceğim.",
    ideaLabel: "İlk fikriniz",
    ideaPlaceholder: "Örn: İstanbul'da modern ama sıcak bir villa istiyorum, bahçesi olsun, bütçeyi çok aşmak istemiyorum.",
    ideaButton: "AI önerilerini al",
    refineEyebrow: "AI soruları",
    refineTitle: "Fikri tamamlamak için kısa cevaplar",
    refineButton: "Fikri geliştir",
    contactGateText: "Mühendis ekibimizin size dönebilmesi için iletişim bilgilerinizi paylaşın.",
    contactGateButton: "İletişimi kaydet",
    aiUserIdea: "Müşteri fikri",
    aiSuggestions: "AI önerileri",
    aiQuestions: "Tamamlanması gereken sorular",
    aiRefinedIdea: "Geliştirilmiş proje fikri",
    aiNextStep: "Sonraki adım",
    aiAdditions: "Fikrinizi tamamlayacak eklemeler",
    aiNeedContact: "Harika! Fikriniz olgunlaştı. Şimdi mühendis ekibimizin size ulaşabilmesi için iletişim bilgilerinizi ekleyelim.",
    aiAnalyzing: "Fikrinizi analiz ediyorum...",
    aiAfterSuggestions: "Bu önerileri dikkate alarak aşağıdaki soruları cevaplayın. Böylece fikrinizi tamamlayabiliriz.",
    aiRefinedReady: "Geliştirilmiş proje fikriniz hazır. Sağ panelde pasaportu görebilirsiniz.",
    aiSummaryReady: "Özet hazır! Aşağıdaki butona basarak mühendise gönderebilirsiniz.",
    stepIdea: "Fikir",
    stepRefine: "Geliştir",
    stepContact: "İletişim",
    stepSend: "Gönder",
    sendNote: "Özet hazır. Aşağıdaki butona basarak mühendise gönderebilirsiniz.",
    sendSuccess: "Özet alındı. Mühendis ekibine iletmek için hazırlandı.",
    sendSending: "Gönderiliyor...",
    sendError: "Gönderim şu an tamamlanamadı. Lütfen tekrar deneyin.",
    chatInputLabel: "Cevabınız",
    chatInputPlaceholder: "Cevabınızı yazın, ekleme yapın veya 'ekleme yok' yazın.",
    chatSend: "Gönder",
    aiQuestionIntro: "Şimdi birkaç şeyi netleştirelim:",
    aiFinalCheck: "Son olarak eklemek, değiştirmek veya çıkarmak istediğiniz bir şey var mı? Yoksa 'ekleme yok' yazın.",
    aiContactPrompt: "Tamam, ekleme yok olarak kaydettim. Şimdi iletişim bilgilerinizi alıp mühendise gönderim seçeneğini açıyorum.",
    aiAdditionSaved: "Bu eklemeyi pasaporta işledim. Başka ekleme veya değişiklik var mı?",
    insuranceEyebrow: "Sigorta",
    insuranceTitle: "Projenizi sadece inşa etmeyin, güvence altına alın.",
    insuranceLead: "Şantiye, tadilat, villa ve ticari projeler için riskleri erken görür, doğru sigorta kapsamını mühendislik süreciyle birlikte planlarız.",
    insurance1Title: "Şantiye risk analizi",
    insurance1Text: "Yangın, su baskını, hırsızlık, üçüncü şahıs hasarı ve ekipman riskleri proje başlamadan sınıflandırılır.",
    insurance2Title: "Kapsam karşılaştırması",
    insurance2Text: "İşveren, yüklenici ve taşeron sorumlulukları netleştirilir; eksik kalan güvence kalemleri işaretlenir.",
    insurance3Title: "Hasar dosyası hazırlığı",
    insurance3Text: "Fotoğraf, rapor, metraj ve teknik açıklamalar düzenli tutulur; gerektiğinde dosya hızlı hazırlanır.",
    insuranceCta: "Sigorta danışmanlığı iste",
    compareEyebrow: "Önce / Sonra",
    compareTitle: "Tadilat kararını müşteriye hissettirin.",
    compareLead: "Sürgüyü hareket ettirerek eski mekan ile önerilen yeni atmosfer arasındaki farkı görün.",
    compareBefore: "Önce",
    compareAfter: "Sonra",
    portfolioStats1: "Konsept kararları",
    portfolioStats2: "Malzeme senaryosu",
    portfolioStats3: "Saha etkisi"
  },
  en: {
    brandLine: "Architecture and construction consulting",
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Projects",
    navInsurance: "Insurance",
    navAi: "AI Brief",
    navContact: "Contact",
    footerContact: "Request quote",
    footerAi: "Start AI Brief",
    homeEyebrow: "Smart project development in Turkey",
    homeLead: "We turn land, villa, commercial and renovation ideas into clear plans, budgets and buildable site decisions.",
    homeCta: "Clarify my idea",
    homeSecondary: "View projects",
    metric1: "First scope summary",
    metric2: "Concept and material language",
    metric3: "Permits, cost and site tracking",
    homeApproachEyebrow: "Approach",
    homeApproachTitle: "We turn unclear ideas into measurable construction decisions.",
    homeApproachText: "Every project receives needs analysis, concept direction, quantity assumptions, procurement strategy and weekly progress transparency. Client, architect and engineer work from the same information.",
    feature1Title: "AI-guided brief",
    feature1Text: "When a client is unsure, intelligent questions capture goals, style, area, budget and timing.",
    feature2Title: "Live cost map",
    feature2Text: "Design choices are translated into visible cost and schedule impact by package.",
    feature3Title: "Site dashboard",
    feature3Text: "Weekly photos, decisions, delivery dates and pending approvals stay in one place.",
    bandEyebrow: "Premium idea",
    bandTitle: "Give every client a project passport.",
    bandText: "When AI Brief is complete, it creates a project passport: wishes, risks, priorities, estimated scope and technical notes for the engineer.",
    bandCta: "Create passport",
    servicesEyebrow: "Services",
    servicesTitle: "A controlled process from idea to handover.",
    servicesLead: "Design, permits, execution and supervision for homes, villas, clinics, retail spaces and offices.",
    service1Title: "Concept and feasibility",
    service1Text: "Site potential, needs program, reference style, initial cost and first schedule are prepared.",
    service2Title: "Architecture and engineering coordination",
    service2Text: "Architecture, structural, mechanical, electrical and permit files are aligned in one delivery plan.",
    service3Title: "Construction and renovation",
    service3Text: "Site crew, material selection, quality control and weekly reporting keep work on track.",
    service4Title: "Investor package",
    service4Text: "Rental potential, target user, brand direction and sales-ready visual files are prepared.",
    package1Title: "Start",
    package1Text: "Fast brief, concept direction and first cost range.",
    package2Title: "Build",
    package2Text: "Design, project coordination, tender file and execution plan.",
    package3Title: "Investor",
    package3Text: "Revenue model, premium presentation, brand and sales-focused project strategy.",
    portfolioEyebrow: "Projects",
    portfolioTitle: "Clear scope, strong materials and clean handover.",
    portfolioLead: "Selected concepts show a practical quality standard for villas, boutique commercial spaces and renovations.",
    aiEyebrow: "AI Brief",
    aiTitle: "If your idea is not clear yet, start here.",
    aiLead: "Write your raw idea. AI will suggest improvements, additions and critical questions; when the idea is mature, it asks for contact details and prepares the engineer summary.",
    fieldName: "Full name",
    fieldEmail: "Email",
    fieldPhone: "Phone",
    fieldLocation: "City / district",
    fieldType: "Project type",
    typeVilla: "Villa",
    typeRenovation: "Apartment renovation",
    typeCommercial: "Commercial space",
    typeLand: "Land development",
    fieldBudget: "Budget range",
    budgetExploratory: "Not clear yet",
    fieldTimeline: "Target start",
    timeNow: "Immediately",
    timeSoon: "1-3 months",
    timeLater: "3-6 months",
    timeResearch: "Research phase",
    fieldStyle: "Style",
    styleWarm: "Warm modern",
    styleMinimal: "Minimal luxury",
    styleMediterranean: "Natural Mediterranean",
    styleUnsure: "Not sure",
    fieldDream: "Describe the idea in your mind",
    fieldPriorities: "Most important priorities",
    priorityPlaceholder: "Budget, speed, luxury finish, rental return...",
    resultEyebrow: "Engineer note",
    resultTitle: "Project passport",
    resultEmpty: "After the AI suggestions, a send-ready technical summary will appear here.",
    resultEmail: "Send summary",
    contactEyebrow: "Contact",
    contactTitle: "Let us clarify the next decision together.",
    contactLead: "Reach our team for a new project, renovation, investment analysis or technical review.",
    contactInfoTitle: "Studio details",
    contactAddressLabel: "Address",
    tagPermit: "Permits",
    tagDesign: "Design",
    tagBuild: "Build",
    contactSubject: "Subject",
    contactMessage: "Message",
    contactSend: "Prepare email",
    contactSuccess: "Your message was received. Our team will contact you.",
    contactError: "The message could not be sent right now. Please try again.",
    briefIntro: "Project passport prepared by AI Brief",
    briefClient: "Client",
    briefProject: "Project type",
    briefLocation: "Location",
    briefBudget: "Budget",
    briefTimeline: "Timeline",
    briefStyle: "Style",
    briefPriorities: "Priorities",
    briefIdea: "Idea",
    briefRecommendation: "Recommended route",
    briefRecommendationText: "Schedule a 30-minute discovery call, then prepare a concept moodboard, quantity assumptions and risk list.",
    chatStatus: "AI idea assistant ready",
    chatWelcome: "Write your idea freely. I will spot what is missing and suggest a stronger, buildable project direction.",
    ideaLabel: "Your first idea",
    ideaPlaceholder: "Example: I want a modern but warm villa in Istanbul, with a garden, and I do not want the budget to run away.",
    ideaButton: "Get AI suggestions",
    refineEyebrow: "AI questions",
    refineTitle: "Short answers to complete the idea",
    refineButton: "Refine the idea",
    contactGateText: "Share your contact details so our engineering team can follow up with you.",
    contactGateButton: "Save contact",
    aiUserIdea: "Client idea",
    aiSuggestions: "AI suggestions",
    aiQuestions: "Questions to complete",
    aiRefinedIdea: "Refined project idea",
    aiNextStep: "Next step",
    aiAdditions: "Additions to complete your idea",
    aiNeedContact: "Great! Your idea is taking shape. Now let's add your contact details so our engineering team can reach you.",
    aiAnalyzing: "Analyzing your idea...",
    aiAfterSuggestions: "Please answer the questions below so we can complete your project idea.",
    aiRefinedReady: "Your refined project idea is ready. See the passport in the right panel.",
    aiSummaryReady: "Summary is ready! Click the button below to send it to the engineer.",
    stepIdea: "Idea",
    stepRefine: "Refine",
    stepContact: "Contact",
    stepSend: "Send",
    sendNote: "Summary is ready. Click below to send it to the engineer.",
    sendSuccess: "Summary received. It is ready to be forwarded to the engineering team.",
    sendSending: "Sending...",
    sendError: "Sending could not be completed right now. Please try again.",
    chatInputLabel: "Your reply",
    chatInputPlaceholder: "Write your answer, add a change, or type 'no additions'.",
    chatSend: "Send",
    aiQuestionIntro: "Now let's clarify a few things:",
    aiFinalCheck: "Finally, is there anything you want to add, change or remove? If not, type 'no additions'.",
    aiContactPrompt: "Got it, no more additions. I will collect your contact details and unlock the engineer send option.",
    aiAdditionSaved: "I added that to the passport. Any other addition or change?",
    insuranceEyebrow: "Insurance",
    insuranceTitle: "Do not just build the project. Protect it.",
    insuranceLead: "For sites, renovations, villas and commercial projects, we identify risk early and plan the right insurance coverage alongside engineering.",
    insurance1Title: "Site risk analysis",
    insurance1Text: "Fire, flooding, theft, third-party damage and equipment risks are classified before work begins.",
    insurance2Title: "Coverage comparison",
    insurance2Text: "Employer, contractor and subcontractor responsibilities are clarified; missing protection items are flagged.",
    insurance3Title: "Claim file readiness",
    insurance3Text: "Photos, reports, quantities and technical notes stay organized so claim files can be prepared quickly.",
    insuranceCta: "Request insurance consulting",
    compareEyebrow: "Before / After",
    compareTitle: "Let clients feel the renovation decision.",
    compareLead: "Move the slider to compare the existing space with the proposed new atmosphere.",
    compareBefore: "Before",
    compareAfter: "After",
    portfolioStats1: "Concept decisions",
    portfolioStats2: "Material scenario",
    portfolioStats3: "Site impact"
  }
};

window.translations = translations;

function currentLang() {
  return localStorage.getItem("siteLang") || "tr";
}

function t(key) {
  return translations[currentLang()][key] || translations.tr[key] || key;
}

function applyLanguage(lang) {
  localStorage.setItem("siteLang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) element.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[lang][key]) element.setAttribute("placeholder", translations[lang][key]);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

function setupNavigation() {
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const active =
      (page === "home" && href.includes("index")) ||
      (page === "services" && href.includes("services")) ||
      (page === "portfolio" && href.includes("portfolio")) ||
      (page === "insurance" && href.includes("sigorta")) ||
      (page === "ai" && href.includes("ai-brief")) ||
      (page === "contact" && href.includes("contact"));
    link.classList.toggle("active", active);
  });

  const navToggle = document.querySelector(".nav-toggle");
  navToggle?.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
  applyLanguage(currentLang());
}

function setupScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
}

function getFormValue(form, name) {
  return new FormData(form).get(name)?.toString().trim() || "-";
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function submitProjectBrief(payload) {
  if (!briefApiEndpoint) {
    await delay(700);
    console.info("Project brief payload ready for API:", payload);
    return { ok: true, simulated: true };
  }

  const response = await fetch(briefApiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Brief API failed with ${response.status}`);
  }

  return response.json().catch(() => ({ ok: true }));
}

async function submitContactMessage(payload) {
  if (!contactApiEndpoint) {
    await delay(500);
    console.info("Contact payload ready for API:", payload);
    return { ok: true, simulated: true };
  }

  const response = await fetch(contactApiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Contact API failed with ${response.status}`);
  }

  return response.json().catch(() => ({ ok: true }));
}

function setupBriefForm() {
  const ideaForm = document.querySelector("#ideaForm");
  const contactForm = document.querySelector("#briefContactForm");
  const output = document.querySelector("#briefOutput");
  const sendBtn = document.querySelector("#emailBrief");
  const sendSection = document.querySelector("#sendSection");
  const sendSuccess = document.querySelector("#sendSuccess");
  const chatLog = document.querySelector("#aiChatLog");
  const stepTrack = document.querySelector("#stepTrack");
  const ideaInput = ideaForm?.querySelector("textarea[name='idea']");
  const ideaLabel = ideaForm?.querySelector("[data-i18n='ideaLabel']");
  const ideaButton = ideaForm?.querySelector("button");
  const refineForm = document.querySelector("#refineForm");
  if (!ideaForm || !contactForm || !output || !sendBtn || !chatLog || !ideaInput || !ideaButton) return;

  refineForm?.remove();

  let briefState = {
    stage: "idea",
    messagesAfterIdea: 0,
    rawIdea: "",
    notes: [],
    questions: [],
    suggestions: [],
    additions: [],
    finalSummary: "",
    contact: { name: "", email: "", phone: "" },
    chatHistory: []
  };

  const escapeHtml = (value) =>
    value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

  const setStep = (activeStep) => {
    if (!stepTrack) return;
    stepTrack.querySelectorAll(".step").forEach((el) => {
      const step = Number(el.dataset.step);
      el.classList.toggle("active", step === activeStep);
      el.classList.toggle("done", step < activeStep);
    });
  };

  const setComposer = (labelKey, placeholderKey, buttonKey) => {
    if (ideaLabel) ideaLabel.textContent = t(labelKey);
    ideaInput.placeholder = t(placeholderKey);
    ideaButton.textContent = t(buttonKey);
    ideaInput.value = "";
    ideaInput.focus();
  };

  const scrollChat = () => {
    chatLog.scrollTop = chatLog.scrollHeight;
  };

  const addMessage = (type, html) => {
    const message = document.createElement("article");
    message.className = `chat-message ${type}`;
    const label = type === "ai" ? "AI" : type === "user" ? (currentLang() === "tr" ? "Siz" : "You") : "";
    message.innerHTML = `<span>${label}</span><p>${html}</p>`;
    chatLog.appendChild(message);
    briefState.chatHistory.push({ type, html });
    scrollChat();
    return message;
  };

  const showTyping = () => {
    const el = document.createElement("article");
    el.className = "chat-message ai typing";
    el.id = "typingIndicator";
    el.innerHTML = `<span>AI</span><p><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></p>`;
    chatLog.appendChild(el);
    scrollChat();
    return el;
  };

  const hideTyping = () => {
    document.querySelector("#typingIndicator")?.remove();
  };

  const aiRespond = async (html, pause = 900) => {
    showTyping();
    await delay(pause);
    hideTyping();
    addMessage("ai", html);
  };

  const detectProjectTone = (idea) => {
    const text = idea.toLowerCase();
    if (text.includes("villa") || text.includes("bah") || text.includes("garden") || text.includes("bahçe")) return "villa";
    if (text.includes("clinic") || text.includes("shop") || text.includes("office") || text.includes("commercial") || text.includes("mağaza") || text.includes("klinik")) return "commercial";
    if (text.includes("renov") || text.includes("tadil") || text.includes("yenile") || text.includes("daire")) return "renovation";
    if (text.includes("arsa") || text.includes("land") || text.includes("plot")) return "land";
    return "concept";
  };

  const buildSuggestions = (idea) => {
    const tone = detectProjectTone(idea);
    const lang = currentLang();
    const suggestions = {
      villa: lang === "tr"
        ? [
            "Önce dış mekan yaşamını planlayın: gölgeli teras, bahçe dolaşımı, mahremiyet duvarları ve akşam aydınlatması.",
            "Misafir, aile ve hizmet alanlarını ayırın — metrekareyi boşa harcamadan premium hissettirin.",
            "Malzeme paletini erken belirleyin: sıcak taş, dokulu sıva, ahşap görünümlü alüminyum ve düşük bakım peyzaj."
          ]
        : [
            "Plan outdoor life first: shaded terrace, garden circulation, privacy walls and evening lighting.",
            "Separate guest, family and service flows so the house feels premium without wasting square meters.",
            "Set a material palette early: warm stone, textured plaster, wood-look aluminum and low-maintenance landscape."
          ],
      commercial: lang === "tr"
        ? [
            "Girişten kasaya veya resepsiyona kadar müşteri yolculuğunu tanımlayın, sonra kaplamaları seçin.",
            "Marka anları ekleyin: imza duvar, ışık sahnesi, bekleme alanı ve fotoğraflanabilir detay.",
            "Teknik bölgeleri brief'e ekleyin: havalandırma, akustik, depolama, servis erişimi ve temizlik dayanımı."
          ]
        : [
            "Define the customer journey from entrance to checkout or reception before choosing finishes.",
            "Add brand moments: signature wall, lighting scene, waiting zone and photo-ready detail.",
            "Include technical zones in the brief: ventilation, acoustics, storage, service access and cleaning durability."
          ],
      renovation: lang === "tr"
        ? [
            "Yıkım riski taramasıyla başlayın: tesisat şaftları, elektrik kapasitesi, ses yalıtımı ve gizli nem.",
            "Tek güçlü görsel hamle kullanın: sürekli zemin, gömme depolama duvarı veya sıcak aydınlatma planı.",
            "Erken malzeme onayları ve oda oda iş sırası ile programı koruyun."
          ]
        : [
            "Start with a demolition-risk scan: plumbing shafts, electrical capacity, sound insulation and hidden moisture.",
            "Use one strong visual move: continuous flooring, built-in storage wall or warmer lighting plan.",
            "Protect the schedule with early material approvals and a room-by-room work sequence."
          ],
      land: lang === "tr"
        ? [
            "Arsa eğimi, güneş yönü ve imar koşullarını analiz edin — bunlar tasarımı doğrudan belirler.",
            "Altyapı maliyetlerini (elektrik, su, kanalizasyon) erken hesaba katın.",
            "Komşu yapılarla ilişkiyi ve manzara koridorlarını planlayın."
          ]
        : [
            "Analyze slope, sun orientation and zoning rules — these directly shape the design.",
            "Factor infrastructure costs (power, water, sewage) into early budgeting.",
            "Plan relationship with neighboring buildings and view corridors."
          ],
      concept: lang === "tr"
        ? [
            "Fikri üç ana direğe oturtun: kim kullanacak, ne hissettirmeli, bütçeyi ne aşmamalı.",
            "Referanslar, öncelikli alanlar ve net bir 'hayır' listesiyle konsept yönü oluşturun.",
            "Her tasarım kararına bir gerekçe ekleyin: maliyet, konfor, yeniden satış değeri veya hız."
          ]
        : [
            "Anchor the idea on three pillars: who will use it, what feeling it should create, and what must not exceed budget.",
            "Create a concept direction with references, priority spaces and a clear no-go list.",
            "Add a reason to every design choice: cost, comfort, resale value or speed."
          ]
    };
    return suggestions[tone];
  };

  const buildAdditions = (idea) => {
    const tone = detectProjectTone(idea);
    const lang = currentLang();
    const additions = {
      villa: lang === "tr"
        ? ["Enerji verimliliği (güneş paneli, ısı pompası)", "Akıllı ev altyapısı", "Havuz veya jakuzi alanı"]
        : ["Energy efficiency (solar panels, heat pump)", "Smart home infrastructure", "Pool or jacuzzi area"],
      commercial: lang === "tr"
        ? ["Marka kimliği ve tabela tasarımı", "Müşteri deneyimi haritası", "Depolama ve lojistik planı"]
        : ["Brand identity and signage design", "Customer experience map", "Storage and logistics plan"],
      renovation: lang === "tr"
        ? ["Mevcut yapının 3D taraması", "Geçici yaşam planı (tadilat süresince)", "Eski malzeme geri dönüşümü"]
        : ["3D scan of existing structure", "Temporary living plan during renovation", "Old material recycling"],
      land: lang === "tr"
        ? ["Jeoteknik rapor", "Peyzaj master planı", "Etaplı inşaat stratejisi"]
        : ["Geotechnical report", "Landscape master plan", "Phased construction strategy"],
      concept: lang === "tr"
        ? ["Referans moodboard", "Ön fizibilite raporu", "Risk ve fırsat listesi"]
        : ["Reference moodboard", "Pre-feasibility report", "Risk and opportunity list"]
    };
    return additions[tone];
  };

  const buildQuestionList = () => {
    const lang = currentLang();
    return lang === "tr"
      ? [
          "Tam olarak hangi şehir veya ilçede?",
          "En önemli öncelik: bütçe kontrolü, hız, premium malzeme veya kira/satış değeri?",
          "Hedef bütçe aralığı ve ideal başlama tarihi nedir?",
          "Ruhsat, mühendislik çizimleri veya saha uygulaması gerekli mi?"
        ]
      : [
          "What is the exact city or district?",
          "Which matters most: budget control, speed, premium finish or future rental/sale value?",
          "Is there a target budget range and ideal start date?",
          "Are permits, engineering drawings or site execution needed?"
        ];
  };

  const isNoAdditions = (text) => {
    const clean = text.toLowerCase().trim();
    return [
      "no",
      "no additions",
      "nothing",
      "none",
      "لا",
      "ما في",
      "مافي",
      "خلص",
      "بدون",
      "yok",
      "ekleme yok",
      "hayır",
      "hayir"
    ].some((phrase) => clean.includes(phrase));
  };

  const renderDraft = () => {
    const summary = [
      t("aiUserIdea") + ":",
      briefState.rawIdea,
      "",
      t("aiSuggestions") + ":",
      ...briefState.suggestions.map((item) => `- ${item}`),
      "",
      t("aiAdditions") + ":",
      ...briefState.additions.map((item) => `- ${item}`),
      ...briefState.notes.map((item) => `- ${item}`),
      "",
      t("aiQuestions") + ":",
      ...briefState.questions.map((item) => `- ${item}`)
    ].join("\n");
    output.textContent = summary;
    return summary;
  };

  const buildFinalSummary = () => [
    t("briefIntro"),
    "",
    `${t("briefClient")}: ${briefState.contact.name || "-"}`,
    `Email: ${briefState.contact.email || "-"}`,
    `Phone: ${briefState.contact.phone || "-"}`,
    "",
    renderDraft(),
    "",
    `${t("aiNextStep")}: ${t("briefRecommendationText")}`
  ].join("\n");

  const askFinalCheck = async () => {
    briefState.stage = "finalCheck";
    setComposer("chatInputLabel", "chatInputPlaceholder", "chatSend");
    await aiRespond(t("aiFinalCheck"), 700);
  };

  ideaForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const idea = getFormValue(ideaForm, "idea");
    if (!idea || idea === "-") return;

    addMessage("user", escapeHtml(idea));

    if (briefState.stage === "idea") {
      briefState.rawIdea = idea;
      briefState.suggestions = buildSuggestions(idea);
      briefState.additions = buildAdditions(idea);
      briefState.questions = buildQuestionList();
      renderDraft();

      setStep(2);

      await aiRespond(
        `<strong>${t("aiSuggestions")}:</strong><br>${briefState.suggestions.map((item) => `• ${item}`).join("<br>")}`,
        1000
      );

      await aiRespond(
        `<strong>${t("aiAdditions")}:</strong><br>${briefState.additions.map((item) => `+ ${item}`).join("<br>")}`,
        650
      );

      briefState.stage = "conversation";
      briefState.messagesAfterIdea = 0;
      setComposer("chatInputLabel", "chatInputPlaceholder", "chatSend");
      await aiRespond(`${t("aiQuestionIntro")}<br>? ${briefState.questions[0]}`, 650);
      return;
    }

    if (briefState.stage === "conversation") {
      briefState.notes.push(idea);
      briefState.messagesAfterIdea += 1;
      renderDraft();

      const nextQuestion = briefState.questions[briefState.messagesAfterIdea];
      if (nextQuestion) {
        await aiRespond(`Kaydettim. ${nextQuestion}`, 600);
      } else {
        await aiRespond(t("aiRefinedReady"), 600);
        await askFinalCheck();
      }
      return;
    }

    if (briefState.stage === "finalCheck") {
      if (isNoAdditions(idea)) {
        briefState.stage = "contact";
        renderDraft();
        setStep(3);
        ideaForm.classList.add("hidden");
        await aiRespond(t("aiContactPrompt"), 650);
        contactForm.classList.remove("hidden");
        contactForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        briefState.notes.push(idea);
        renderDraft();
        await aiRespond(t("aiAdditionSaved"), 650);
      }
    }
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    briefState.contact = {
      name: getFormValue(contactForm, "name"),
      email: getFormValue(contactForm, "email"),
      phone: getFormValue(contactForm, "phone")
    };

    const summary = [
      t("briefIntro"),
      "",
      `${t("briefClient")}: ${briefState.contact.name}`,
      `Email: ${briefState.contact.email}`,
      `Phone: ${briefState.contact.phone}`,
      "",
      renderDraft(),
      "",
      `${t("aiNextStep")}: ${t("briefRecommendationText")}`
    ].join("\n");

    briefState.finalSummary = summary;
    output.textContent = summary;

    addMessage("user", escapeHtml(`${briefState.contact.name} · ${briefState.contact.email}`));
    contactForm.classList.add("hidden");
    setStep(4);

    await aiRespond(t("aiSummaryReady"), 600);

    sendSection?.classList.remove("hidden");
    sendBtn.classList.remove("disabled");
    sendBtn.classList.add("send-ready");
    sendBtn.disabled = false;
    sendBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  sendBtn.addEventListener("click", async () => {
    if (!briefState.finalSummary) return;

    const originalText = sendBtn.textContent;
    sendBtn.textContent = t("sendSending");
    sendBtn.disabled = true;
    sendBtn.classList.remove("send-ready");

    try {
      await submitProjectBrief({
        to: engineerEmail,
        source: "ai-brief",
        contact: briefState.contact,
        rawIdea: briefState.rawIdea,
        suggestions: briefState.suggestions,
        additions: briefState.additions,
        clientNotes: briefState.notes,
        summary: briefState.finalSummary,
        createdAt: new Date().toISOString()
      });

      sendBtn.classList.add("disabled");
      sendSuccess.textContent = t("sendSuccess");
      sendSuccess?.classList.remove("hidden");
      addMessage("ai", t("sendSuccess"));
    } catch (error) {
      console.error(error);
      sendBtn.disabled = false;
      sendBtn.classList.add("send-ready");
      sendBtn.textContent = originalText;
      sendSuccess.textContent = t("sendError");
      sendSuccess?.classList.remove("hidden");
    }
  });
}

function setupContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  const status = document.createElement("p");
  status.className = "form-status hidden";
  form.appendChild(status);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    const originalText = button?.textContent;
    if (button) {
      button.disabled = true;
      button.textContent = t("sendSending");
    }

    try {
      await submitContactMessage({
        to: engineerEmail,
        source: "contact",
        name: getFormValue(form, "name"),
        email: getFormValue(form, "email"),
        subject: getFormValue(form, "subject"),
        message: getFormValue(form, "message"),
        createdAt: new Date().toISOString()
      });
      status.textContent = t("contactSuccess");
      status.classList.remove("hidden", "error");
      form.reset();
    } catch (error) {
      console.error(error);
      status.textContent = t("contactError");
      status.classList.remove("hidden");
      status.classList.add("error");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = originalText;
      }
    }
  });
}

function setupBeforeAfterSliders() {
  document.querySelectorAll(".compare-slider").forEach((slider) => {
    const range = slider.querySelector("input[type='range']");
    if (!range) return;

    const update = () => {
      slider.style.setProperty("--pos", `${range.value}%`);
    };

    range.addEventListener("input", update);
    update();
  });
}

setupNavigation();
setupLanguageSwitch();
setupScrollReveal();
setupBriefForm();
setupContactForm();
setupBeforeAfterSliders();
window.initSiteContent?.();
