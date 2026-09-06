// Multilingual Dictionary
const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_status: "Open to opportunities",
    hero_greeting: "Hello, I'm",
    hero_tagline: "CS student building AI agents and automation tools",
    hero_bio: "Passionate about artificial intelligence, backend automation, and agentic workflows. Focus on building practical, high-impact bots and autonomous systems using Python, LLMs, and modern Web APIs.",
    cta_view_work: "View My Work",
    cta_contact: "Get In Touch",
    skills_title: "Technical Skills",
    skills_subtitle: "Core technologies and practical capabilities I utilize in production.",
    skill1_name: "Python",
    skill1_desc: "Writing clean, modular code for web scraping, automation scripts, and async API integrations.",
    skill2_name: "Telegram Bot Development",
    skill2_desc: "Building feature-rich, asynchronous Telegram bots using aiogram / python-telegram-bot with interactive UIs.",
    skill3_name: "AI Agent Design",
    skill3_desc: "Designing multi-step LLM workflows utilizing Plan → Act → Synthesize architecture patterns.",
    skill4_name: "Git & GitHub",
    skill4_desc: "Version control, collaborative workflows, and automating task execution with GitHub Actions CI/CD.",
    skill5_name: "Web Fundamentals",
    skill5_desc: "Creating responsive, accessible, and fast web user interfaces using standard HTML5, CSS3, and JavaScript.",
    skill6_name: "English Proficiency",
    skill6_desc: "Effective technical communication, documentation reading, and international collaboration.",
    projects_title: "Featured Projects",
    projects_subtitle: "Selected automated systems and intelligent bots I've built.",
    proj1_type: "Automated Bot",
    proj1_title: "Gold Price Telegram Bot",
    proj1_desc: "A Python bot that posts live global gold prices plus Iranian Toman/USDT conversion rates and AI-generated market commentary to a Telegram channel every hour via GitHub Actions workflows.",
    btn_github: "GitHub Repo",
    btn_view_channel: "View Channel",
    proj2_type: "AI Agent System",
    proj2_title: "Finance Agent AI",
    proj2_desc: "A bilingual (Persian/English) Telegram bot built as a genuine AI agent using Plan → Act → Synthesize architecture, featuring live gold/crypto/Toman data queries, interactive menus, and chart image analysis via Gemini Vision API.",
    contact_title: "Get In Touch",
    contact_subtitle: "Feel free to reach out for collaborations or project inquiries.",
    contact_email_label: "Email",
    contact_tg_label: "Telegram",
    contact_gh_label: "GitHub",
    footer_text: "© 2026 Ali. Built with static web technologies."
  },
  fa: {
    nav_about: "درباره من",
    nav_skills: "مهارتها",
    nav_projects: "پروژهها",
    nav_contact: "تماس",
    hero_status: "آماده همکاری در پروژهها",
    hero_greeting: "سلام، من",
    hero_tagline: "دانشجوی علوم کامپیوتر، توسعهدهنده ایجنتهای هوش مصنوعی و اتوماسیون",
    hero_bio: "علاقهمند به هوش مصنوعی، اتوماسیون بکاند و معماریهای ایجنتی. تمرکز بر ساخت رباتهای کاربردی و سیستمهای خودمختار با استفاده از پایتون، مدلهای زبانی (LLM) و APIهای مدرن.",
    cta_view_work: "مشاهده پروژهها",
    cta_contact: "ارتباط با من",
    skills_title: "مهارتهای تخصصی",
    skills_subtitle: "تکنولوژیهای اصلی و توانمندیهای کاربردی من در دنیای واقعی.",
    skill1_name: "پایتون (Python)",
    skill1_desc: "نگارش کد تمیز و ماژولار برای وب اسکرپینگ، اسکریپتهای اتوماسیون و یکپارچهسازی APIهای ناهمگام.",
    skill2_name: "توسعه ربات تلگرام",
    skill2_desc: "ساخت رباتهای تلگرام پیشرفته و ناهمگام با استفاده از aiogram و python-telegram-bot همراه با رابطهای تعاملی.",
    skill3_name: "طراحی ایجنتهای هوش مصنوعی",
    skill3_desc: "طراحی گردشکارهای چندمرحلهای LLM با استفاده از معماری Plan → Act → Synthesize.",
    skill4_name: "گیت و گیتهاب (Git / GitHub)",
    skill4_desc: "کنترل نسخه، گردشکارهای تیمی و اتوماسیون اجرای کارها با GitHub Actions.",
    skill5_name: "پایههای وب (HTML/CSS/JS)",
    skill5_desc: "ایجاد رابطهای کاربری وب واکنشگرا، دسترسپذیر و سریع با HTML5، CSS3 و JavaScript استاندارد.",
    skill6_name: "تسلط به زبان انگلیسی",
    skill6_desc: "ارتباطات فنی مؤثر، مطالعه مستندات تخصصی و همکاریهای بینالمللی.",
    projects_title: "پروژههای برجسته",
    projects_subtitle: "مجموعهای از سیستمهای خودکار و رباتهای هوشمندی که طراحی کردهام.",
    proj1_type: "ربات خودکار",
    proj1_title: "ربات تلگرام قیمت طلا",
    proj1_desc: "ربات پایتونی که قیمت جهانی طلا، نرخ برابری تومان/تتر و تحلیل هوش مصنوعی بازار را هر ساعت از طریق GitHub Actions به کانال تلگرام ارسال میکند.",
    btn_github: "ریپازیتوری گیتهاب",
    btn_view_channel: "مشاهده کانال",
    proj2_type: "سیستم ایجنت هوش مصنوعی",
    proj2_title: "ایجنت هوشمند مالی",
    proj2_desc: "ربات دو زبانه تلگرام به عنوان ایجنت واقعی هوش مصنوعی با معماری Plan → Act → Synthesize، استعلام زنده طلا و کریپتو، منوی تعاملی و تحلیل تصاویر نمودار با Gemini Vision.",
    contact_title: "ارتباط با من",
    contact_subtitle: "جهت همکاری، پیشنهاد پروژه یا گفتگو، میتوانید از راههای زیر با من در تماس باشید.",
    contact_email_label: "ایمیل",
    contact_tg_label: "تلگرام",
    contact_gh_label: "گیتهاب",
    footer_text: "© ۲۰۲۶ علی. طراحی و توسعه یافته با تکنولوژیهای استاتیک وب."
  }
};

// State Management & Init
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = localStorage.getItem("preferred_lang") || "en";
  setLanguage(currentLang);

  // Setup Event Listeners
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", toggleLanguage);
  }

  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    // Close menu when clicking link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }

  // Scroll Reveal Observer
  initScrollReveal();
});

// Switch Language
function setLanguage(lang) {
  const htmlEl = document.documentElement;
  const langTextEl = document.getElementById("lang-text");

  if (lang === "fa") {
    htmlEl.setAttribute("lang", "fa");
    htmlEl.setAttribute("dir", "rtl");
    if (langTextEl) langTextEl.textContent = "EN";
  } else {
    htmlEl.setAttribute("lang", "en");
    htmlEl.setAttribute("dir", "ltr");
    if (langTextEl) langTextEl.textContent = "FA";
  }

  // Translate all marked elements
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("preferred_lang", lang);
}

function toggleLanguage() {
  const currentLang = document.documentElement.getAttribute("lang");
  const newLang = currentLang === "fa" ? "en" : "fa";
  setLanguage(newLang);
}

// Scroll Reveal Implementation
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

