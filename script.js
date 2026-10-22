// Multilingual Dictionary (All 6 Projects Included)
const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_status: "Open to opportunities",
    hero_greeting: "Hello, I'm",
    hero_tagline: "CS student building AI agents, SaaS platforms, and automation tools",
    hero_bio: "Passionate about artificial intelligence, full-stack web engineering, and agentic workflows. Focused on building practical, high-impact SaaS platforms and autonomous systems using Python, Flask, SQL, LLMs, and modern Web APIs.",
    cta_view_work: "View My Work",
    cta_contact: "Get In Touch",
    skills_title: "Technical Skills",
    skills_subtitle: "Core technologies and practical capabilities I utilize in production.",
    skill1_name: "Python & Full-Stack Flask",
    skill1_desc: "Building modular web backends, RESTful APIs, SQLite databases, and automated pytest verification suites.",
    skill2_name: "Telegram Bot Engineering",
    skill2_desc: "Developing interactive Telegram bots and automated 24/7 market broadcasters with resilient API fallbacks.",
    skill3_name: "AI Agent Architecture",
    skill3_desc: "Designing multi-step LLM & Vision workflows utilizing Plan → Act → Synthesize grounded execution patterns.",
    skill4_name: "Git, GitHub & Cloud CI/CD",
    skill4_desc: "Version control, automated testing pipelines with GitHub Actions, and cloud WSGI deployment on Render.",
    skill5_name: "Frontend & Chrome MV3",
    skill5_desc: "Creating responsive bilingual web interfaces and Manifest V3 browser extensions with HTML5, CSS3, and ES6+ JS.",
    skill6_name: "Harvard CS50 Certified",
    skill6_desc: "Certified in Harvard University's CS50x (Computer Science) and CS50P (Programming with Python) with strong English proficiency.",
    projects_title: "Featured Projects",
    projects_subtitle: "Complete collection of my 6 open-source platforms, AI agents, and applications.",
    proj1_type: "Full-Stack SaaS Platform",
    proj1_title: "CEnT-S & IELTS Enterprise LMS",
    proj1_desc: "A multi-tenant Learning Management System & AI diagnostic engine for CISIA CEnT-S and IELTS Academic. Features Instructor & Student portals, a 2-column Grading Workbench, proctored anti-cheat exams, and a Hybrid AI Question Factory backed by 59 automated pytest tests.",
    proj2_type: "CS50x Final Project · Web App",
    proj2_title: "Smart Pantry",
    proj2_desc: "A full-stack kitchen inventory and recipe management web application built as my Harvard CS50x final project. Tracks ingredient quantities, expiration dates, and dynamically matches available pantry items to cookable recipes using Python, Flask, and SQLite.",
    proj3_type: "AI Agent System",
    proj3_title: "Finance Agent AI",
    proj3_desc: "A bilingual (Persian/English) Telegram bot built as a genuine AI agent using Plan → Act → Synthesize architecture, featuring live gold/crypto/Toman data queries, interactive menus, and chart image analysis via Gemini Vision API.",
    proj4_type: "CS50P Final Project · Automated Bot",
    proj4_title: "Gold Price Telegram Bot",
    proj4_desc: "A Python bot built for Harvard CS50P that posts live global gold prices, Iranian Toman/USDT exchange rates, Emami coin intrinsic bubble math, and Gemini AI commentary to a Telegram channel every hour via GitHub Actions.",
    proj5_type: "Chrome Extension (MV3)",
    proj5_title: "Market Pulse",
    proj5_desc: "A Manifest V3 Chrome extension for a fast live market snapshot, combining global gold, zero-config Iranian Toman/USDT rates, and a customizable crypto watchlist with background caching and multi-exchange failover.",
    proj6_type: "Responsive Web Architecture",
    proj6_title: "Bilingual Developer Portfolio",
    proj6_desc: "A zero-dependency, bilingual (English/Persian) portfolio website with instant client-side i18n language switching, dynamic RTL/LTR layout adaptation, custom SVG geometry, and IntersectionObserver scroll animations.",
    btn_live_demo: "Live SaaS Demo",
    btn_github: "GitHub Repo",
    btn_video_demo: "Video Demo",
    btn_view_project: "View Project",
    btn_download: "Download",
    contact_title: "Get In Touch",
    contact_subtitle: "Feel free to reach out for collaborations or project inquiries.",
    contact_email_label: "Email",
    contact_tg_label: "Telegram",
    contact_gh_label: "GitHub",
    footer_text: "© 2026 Ali. Built with static web technologies."
  },
  fa: {
    nav_about: "درباره من",
    nav_skills: "مهارت‌ها",
    nav_projects: "پروژه‌ها",
    nav_contact: "تماس",
    hero_status: "آماده همکاری در پروژه‌ها",
    hero_greeting: "سلام، من",
    hero_tagline: "توسعه‌دهنده پلتفرم‌های وب، ایجنت‌های هوش مصنوعی و ابزارهای اتوماسیون",
    hero_bio: "علاقه‌مند به مهندسی نرم‌افزار، هوش مصنوعی و معماری‌های ایجنتی. تمرکز بر ساخت پلتفرم‌های وب فول‌استک، ربات‌های کاربردی و سیستم‌های خودمختار با استفاده از پایتون، Flask، دیتابیس SQL، مدل‌های زبانی (LLM) و APIهای مدرن.",
    cta_view_work: "مشاهده پروژه‌ها",
    cta_contact: "ارتباط با من",
    skills_title: "مهارت‌های تخصصی",
    skills_subtitle: "تکنولوژی‌های اصلی و توانمندی‌های کاربردی من در پروژه‌های واقعی.",
    skill1_name: "پایتون و بک‌اند (Python & Flask)",
    skill1_desc: "طراحی بک‌اندهای ماژولار، REST API، دیتابیس SQLite و تست‌های خودکار با Pytest.",
    skill2_name: "مهندسی ربات‌های تلگرام",
    skill2_desc: "ساخت ربات‌های تلگرام پیشرفته و سیستم‌های گزارش‌دهی ۲۴ ساعته بازار با منابع پشتیبان خودکار.",
    skill3_name: "معماری ایجنت‌های هوش مصنوعی",
    skill3_desc: "طراحی گردش‌کارهای چندمرحله‌ای LLM و Vision با استفاده از معماری Plan → Act → Synthesize.",
    skill4_name: "گیت، گیت‌هاب و استقرار ابری",
    skill4_desc: "کنترل نسخه، تست و اتوماسیون اجرای کارها با GitHub Actions CI/CD و استقرار ابری روی Render.",
    skill5_name: "فرانت‌اند و افزونه مرورگر (MV3)",
    skill5_desc: "ایجاد رابط‌های کاربری وب واکنش‌گرا و افزونه‌های کروم با HTML5، CSS3 و JavaScript استاندارد.",
    skill6_name: "گواهینامه‌های CS50 دانشگاه هاروارد",
    skill6_desc: "دارای مدارک رسمی CS50x (علوم کامپیوتر) و CS50P (برنامه‌نویسی پایتون) از دانشگاه هاروارد به همراه تسلط به زبان انگلیسی.",
    projects_title: "پروژه‌های برجسته (۶ پروژه)",
    projects_subtitle: "مجموعه کامل ۶ پلتفرم آنلاین، ایجنت هوشمند و سیستم‌های متن‌بازی که طراحی و پیاده‌سازی کرده‌ام.",
    proj1_type: "پلتفرم آموزشی فول‌استک (SaaS)",
    proj1_title: "پلتفرم جامع CEnT-S & IELTS LMS",
    proj1_desc: "سیستم مدیریت یادگیری (LMS) چندکاربره با پنل اختصاصی استاد و دانش‌آموز، میز تصحیح دو ستونه، سیستم ضدتقلب آزمون، کارخانه سوال‌ساز هوش مصنوعی و ۵۹ تست اتوماتیک Pytest.",
    proj2_type: "پروژه نهایی CS50x · وب‌اپلیکیشن",
    proj2_title: "Smart Pantry (مدیریت هوشمند آشپزخانه)",
    proj2_desc: "وب‌اپلیکیشن فول‌استک مدیریت موجودی مواد غذایی و پیشنهاد هوشمند دستور پخت (پروژه نهایی دوره CS50x هاروارد) با استفاده از Python، Flask و دیتابیس SQLite.",
    proj3_type: "سیستم ایجنت هوش مصنوعی",
    proj3_title: "ایجنت هوشمند مالی (Finance Agent)",
    proj3_desc: "ربات دو زبانه تلگرام به عنوان ایجنت واقعی هوش مصنوعی با معماری Plan → Act → Synthesize، استعلام زنده طلا و کریپتو، منوی تعاملی و تحلیل تصاویر نمودار با Gemini Vision.",
    proj4_type: "پروژه نهایی CS50P · ربات خودکار",
    proj4_title: "ربات تلگرام قیمت طلا و حباب سکه",
    proj4_desc: "ربات پایتونی (پروژه نهایی CS50P هاروارد) که قیمت جهانی طلا، نرخ تتر/تومان، محاسبه حباب ذاتی سکه امامی و تحلیل هوش مصنوعی بازار را هر ساعت از طریق GitHub Actions به کانال تلگرام ارسال می‌کند.",
    proj5_type: "افزونه مرورگر کروم (MV3)",
    proj5_title: "Market Pulse",
    proj5_desc: "افزونه Chrome با Manifest V3 برای نمایش سریع وضعیت بازار؛ شامل طلای جهانی، نرخ تتر/تومان بدون نیاز به کلید API و واچ‌لیست قابل تنظیم کریپتو با کش پس‌زمینه.",
    proj6_type: "معماری وب واکنش‌گرا",
    proj6_title: "وب‌سایت پورتفولیوی دو زبانه",
    proj6_desc: "وب‌سایت شخصی دو زبانه (فارسی/انگلیسی) بدون وابستگی به کتابخانه‌های خارجی، دارای سیستم تغییر زبان آنی، چیدمان خودکار راست‌به‌چپ/چپ‌به‌راست و انیمیشن‌های اسکرول.",
    btn_live_demo: "دموی آنلاین سایت",
    btn_github: "ریپازیتوری گیت‌هاب",
    btn_video_demo: "ویدیوی دمو",
    btn_view_project: "مشاهده پروژه",
    btn_download: "دانلود افزونه",
    contact_title: "ارتباط با من",
    contact_subtitle: "جهت همکاری، پیشنهاد پروژه یا گفتگو، می‌توانید از راه‌های زیر با من در تماس باشید.",
    contact_email_label: "ایمیل",
    contact_tg_label: "تلگرام",
    contact_gh_label: "گیت‌هاب",
    footer_text: "© ۲۰۲۶ علی. طراحی و توسعه یافته با تکنولوژی‌های مدرن وب."
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
      const isOpen = navLinks.classList.toggle("mobile-open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Auto-close mobile menu when resizing window back to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navLinks.classList.contains("mobile-open")) {
        navLinks.classList.remove("mobile-open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
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