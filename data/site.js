/*  Portfolio content — bilingual (English / Persian).
 *
 *  Any user-visible string is written as { en: "...", fa: "..." }.
 *  Plain strings (URLs, technology names) are shown as-is in both languages.
 *  Keys are documented in README.md.
 */
window.SITE = {

  /* ---------------------------------------------------------- languages */

  languages: {
    en: { label: "EN", name: "English", dir: "ltr" },
    fa: { label: "فا", name: "فارسی",  dir: "rtl" }
  },
  defaultLang: "en",

  /* ------------------------------------------------- interface strings */

  ui: {
    skip:        { en: "Skip to content",       fa: "پرش به محتوا" },
    themeToggle: { en: "Switch colour theme",   fa: "تغییر تم رنگی" },
    langToggle:  { en: "Switch language",       fa: "تغییر زبان" },

    nav: {
      label:    { en: "Sections", fa: "بخش‌ها" },
      about:    { en: "About",    fa: "درباره" },
      projects: { en: "Projects", fa: "پروژه‌ها" },
      kaggle:   { en: "Kaggle",   fa: "کگل" },
      skills:   { en: "Skills",   fa: "مهارت‌ها" },
      contact:  { en: "Contact",  fa: "تماس" }
    },

    hero: {
      badge: { en: "Open to backend & computer-vision work",
               fa: "آماده‌ی همکاری در حوزه‌ی بک‌اند و بینایی ماشین" }
    },

    buttons: {
      email:    { en: "Email me", fa: "ایمیل بزنید" },
      github:   { en: "GitHub",   fa: "گیت‌هاب" },
      kaggle:   { en: "Kaggle",   fa: "کگل" },
      linkedin: { en: "LinkedIn", fa: "لینکدین" }
    },

    sections: {
      about: {
        kicker: { en: "01 — About", fa: "۰۱ — درباره" },
        title:  { en: "Where a face check becomes a service",
                  fa: "جایی که بررسی چهره به سرویس تبدیل می‌شود" }
      },
      projects: {
        kicker: { en: "02 — Selected work", fa: "۰۲ — نمونه‌کارها" },
        title:  { en: "Projects", fa: "پروژه‌ها" },
        lead:   { en: "Public repositories link straight to the source; private work is marked. The main projects come with detail, the smaller ones are listed below them.",
                  fa: "ریپوهای عمومی مستقیم به سورس لینک شده‌اند و پروژه‌های خصوصی علامت خورده‌اند. پروژه‌های شاخص با جزئیات آمده‌اند و بقیه پایین‌تر فهرست شده‌اند." }
      },
      kaggle: {
        kicker: { en: "03 — Kaggle", fa: "۰۳ — کگل" },
        title:  { en: "Datasets, models & notebooks",
                  fa: "دیتاست‌ها، مدل‌ها و نوت‌بوک‌ها" }
      },
      skills: {
        kicker: { en: "04 — Toolkit", fa: "۰۴ — جعبه‌ابزار" },
        title:  { en: "Skills", fa: "مهارت‌ها" }
      },
      contact: {
        kicker: { en: "05 — Contact", fa: "۰۵ — تماس" },
        title:  { en: "Let’s work together", fa: "بیایید با هم کار کنیم" },
        lead:   { en: "LinkedIn is the fastest way to reach me. The code is on GitHub, and the data and trained models are on Kaggle.",
                  fa: "سریع‌ترین راه ارتباط با من لینکدین است. کدها روی گیت‌هاب‌اند و داده‌ها و مدل‌های آموزش‌دیده روی کگل." }
      }
    },

    projects: {
      all:      { en: "All", fa: "همه" },
      empty:    { en: "No projects match that filter.",
                  fa: "پروژه‌ای با این فیلتر پیدا نشد." },
      privateDefault: { en: "Private repository", fa: "مخزن خصوصی" },
      source:   { en: "Source on GitHub", fa: "سورس در گیت‌هاب" },
      demo:     { en: "Live demo", fa: "نسخه‌ی زنده" },
      kaggle:   { en: "On Kaggle", fa: "در کگل" },
      filterLabel: { en: "Filter projects by topic", fa: "فیلتر پروژه‌ها بر اساس موضوع" }
    },

    kaggle: {
      notebooks: { en: "Notebooks", fa: "نوت‌بوک‌ها" },
      models:    { en: "Models",    fa: "مدل‌ها" },
      datasets:  { en: "Datasets",  fa: "دیتاست‌ها" },
      cta:       { en: "View the full Kaggle profile", fa: "دیدن پروفایل کامل کگل" }
    },

    footer: {
      meta: { en: "Built as a static page — no framework, no build step.",
              fa: "یک صفحه‌ی استاتیک — بدون فریم‌ورک و بدون مرحله‌ی build." }
    }
  },

  /* -------------------------------------------------------- tag labels */
  /*  Projects reference tags by id so filtering works in both languages. */

  tagLabels: {
    kyc:     { en: "Identity Verification", fa: "احراز هویت" },
    cv:      { en: "Computer Vision",       fa: "بینایی ماشین" },
    medical: { en: "Medical Imaging",       fa: "تصویربرداری پزشکی" },
    backend: { en: "Backend",               fa: "بک‌اند" },
    data:    { en: "Data",                  fa: "داده" },
    web:     { en: "Web",                   fa: "وب" }
  },

  /* ----------------------------------------------------------- profile */

  profile: {
    name: { en: "Shahla Gharibi", fa: "شهلا غریبی" },
    role: { en: "Backend & Computer Vision Engineer",
            fa: "مهندس بک‌اند و بینایی ماشین" },
    tagline: {
      en: "I build the face side of identity verification — detection, embeddings and matching behind an API — together with the datasets the models are trained on.",
      fa: "سمت چهره‌ی احراز هویت را می‌سازم — تشخیص، استخراج بردار و تطبیق، پشت یک API — همراه با داده‌هایی که مدل‌ها با آن آموزش می‌بینند."
    },

    /*  Portrait: assets/img/profile.jpg. The GitHub avatar stands in only
     *  if that file is missing.  */
    avatar: "assets/img/profile.jpg",
    avatarFallback: "https://avatars.githubusercontent.com/u/103846621?v=4",

    links: {
      github:   "https://github.com/shahla2022",
      kaggle:   "https://www.kaggle.com/sshahla",
      linkedin: "https://www.linkedin.com/in/shahla-garibi-bab660243"
    },

    about: [
      {
        en: "I’m a backend and computer-vision engineer at Akam Intelligent Innovators, where I work on the face modules of our KYC suite: find the face in a photo, turn it into an embedding, compare it with another one, and return a score an operator can act on — along with the reason whenever the service refuses to answer.",
        fa: "مهندس بک‌اند و بینایی ماشین در «نوآوران هوشمند آکام» هستم و روی ماژول‌های چهره‌ی سامانه‌ی احراز هویت کار می‌کنم: پیدا کردن چهره در تصویر، تبدیلش به بردار، مقایسه با بردار دیگر، و بازگرداندن امتیازی که اپراتور بتواند بر اساس آن تصمیم بگیرد — به‌همراه دلیل، هر بار که سرویس از پاسخ دادن امتناع می‌کند."
      },
      {
        en: "Alongside the services I train the models behind them. For image forensics that meant fine-tuning a Swin transformer on 130,000 real and generated faces and judging it on precision, recall, F1 and ROC-AUC rather than accuracy alone; for medical imaging it meant brain MRI — DICOM to NIfTI, skull stripping, augmentation — and a separate U-Net per sequence.",
        fa: "کنار سرویس‌ها، مدل‌های پشت آن‌ها را هم آموزش می‌دهم. برای جرم‌شناسی تصویر این کار به تنظیم دقیق یک ترنسفورمر Swin روی ۱۳۰ هزار چهره‌ی واقعی و ساختگی انجامید و ارزیابی با دقت، بازخوانی، F1 و ROC-AUC به‌جای تکیه بر صحت تنها؛ و در تصویربرداری پزشکی به ام‌آرآی مغز رسید — تبدیل DICOM به NIfTI، حذف جمجمه، داده‌افزایی — و یک یونت جداگانه برای هر توالی."
      },
      {
        en: "I treat the data as part of the engineering, not a step before it: 26 public datasets and the trained weights that go with them are on my Kaggle profiles, about 8 GB in all — brain MRI volumes, occluded-face sets and OCR fine-tuning data. And when a project needs a face of its own, I build the front end too, in React or plain HTML, right-to-left included.",
        fa: "داده را بخشی از مهندسی می‌دانم، نه مرحله‌ای پیش از آن: ۲۶ دیتاست عمومی و وزن‌های آموزش‌دیده‌ی همراهشان روی پروفایل‌های کگل من هستند، حدود ۸ گیگابایت — حجم‌های ام‌آرآی مغز، مجموعه‌های چهره‌ی پوشیده، و داده‌ی تنظیم دقیق OCR. و وقتی پروژه‌ای به رابط کاربری خودش نیاز دارد، آن را هم می‌سازم؛ با ری‌اکت یا HTML ساده، راست‌به‌چپ هم."
      }
    ],

    stats: [
      { value: "26",    label: { en: "public Kaggle datasets",     fa: "دیتاست عمومی روی کگل" } },
      { value: "130k",  label: { en: "faces in the forensics set", fa: "چهره در مجموعه‌ی جرم‌شناسی" } },
      { value: "8 GB",  label: { en: "of published training data", fa: "داده‌ی آموزشی منتشرشده" } },
      { value: "72.5",  label: { en: "face-match threshold, tunable", fa: "آستانه‌ی تطبیق چهره، قابل تنظیم" } }
    ]
  },

  /* ------------------------------------------------------------ skills */

  skills: [
    {
      group: { en: "Computer Vision & Faces", fa: "بینایی ماشین و چهره" },
      items: ["PyTorch", "InsightFace / buffalo_l", "ArcFace embeddings", "Swin Transformer", "torchvision", "OpenCV", "YOLOv8", "EasyOCR"]
    },
    {
      group: { en: "Serving & Backend", fa: "سرو مدل و بک‌اند" },
      items: ["Python", "FastAPI", "REST APIs", "NumPy", "Uvicorn", "Docker", "Vercel", "Railway"]
    },
    {
      group: { en: "Data & Training", fa: "داده و آموزش" },
      items: [
        "Kaggle GPU training",
        { en: "Dataset curation & publishing", fa: "تهیه و انتشار دیتاست" },
        "NIfTI / DICOM",
        "MONAI",
        { en: "Augmentation pipelines", fa: "خط‌لوله‌ی داده‌افزایی" },
        "scikit-learn",
        "Jupyter"
      ]
    },
    {
      group: { en: "Web & Interfaces", fa: "وب و رابط کاربری" },
      items: ["React 19", "Vite", "Tailwind CSS", "JavaScript", "HTML / CSS", { en: "Right-to-left layouts", fa: "چیدمان راست‌به‌چپ" }, "Git"]
    }
  ],

  /* ---------------------------------------------------------- projects */
  /*  `cover` picks the line motif drawn faintly behind the card title:
   *  waveform | scan | chart | network | layers | track | stack        */

  projects: [
    {
      name: { en: "Face Matching API", fa: "API تطبیق چهره" },
      subtitle: { en: "Two photos in, a similarity score out",
                  fa: "دو عکس ورودی، یک امتیاز شباهت خروجی" },
      description: {
        en: "A FastAPI service that takes two uploaded images, detects the face in each with InsightFace’s buffalo_l model pack, and compares their L2-normalised embeddings by cosine similarity. The score is mapped to a 0–100 scale and a match is declared above 72.5 — a threshold the response itself hands back to the caller, so a product can tighten or loosen it without redeploying. Packaged twice: as a serverless function on Vercel and as a long-running service.",
        fa: "یک سرویس FastAPI که دو تصویر بارگذاری‌شده را می‌گیرد، چهره‌ی هرکدام را با بسته‌ی مدل buffalo_l از InsightFace پیدا می‌کند و بردارهای نرمال‌شده‌ی آن‌ها را با شباهت کسینوسی مقایسه می‌کند. امتیاز به بازه‌ی ۰ تا ۱۰۰ نگاشت می‌شود و بالای ۷۲٫۵ تطبیق اعلام می‌شود — آستانه‌ای که خود پاسخ آن را به فراخواننده برمی‌گرداند تا محصول بتواند بدون استقرار دوباره، سخت‌گیرتر یا آسان‌گیرتر شود. دو نسخه‌ی بسته‌بندی‌شده دارد: تابع serverless روی Vercel و سرویس دائمی."
      },
      tags: ["kyc", "cv", "backend"],
      tech: ["Python", "FastAPI", "InsightFace", "OpenCV", "NumPy", "Vercel"],
      repo: "https://github.com/shahla2022/facematchfinal",
      year: "2026",
      featured: true,
      cover: "network",
      highlights: [
        { en: "ArcFace-style embeddings from buffalo_l, compared by cosine similarity",
          fa: "بردارهای چهره به سبک ArcFace از مدل buffalo_l، مقایسه با شباهت کسینوسی" },
        { en: "Clear failure reasons: an invalid image, or no face found in either photo",
          fa: "دلیل خطای روشن: تصویر نامعتبر، یا پیدا نشدن چهره در یکی از دو عکس" },
        { en: "The service behind the Akam site’s live face-matching demo",
          fa: "همان سرویسی که دموی زنده‌ی تطبیق چهره در سایت آکام آن را صدا می‌زند" },
        { en: "A second deployment variant kept for long-running hosting",
          fa: "یک نسخه‌ی استقرار دوم برای میزبانی دائمی" }
      ]
    },
    {
      name: { en: "Face Forensics with a Swin Transformer",
              fa: "جرم‌شناسی چهره با ترنسفورمر Swin" },
      subtitle: { en: "Telling a photographed face from a generated one",
                  fa: "تشخیص چهره‌ی عکس‌برداری‌شده از چهره‌ی ساختگی" },
      description: {
        en: "A Swin-Small transformer fine-tuned on a 130,000-image real-versus-fake face set to decide whether a face was photographed or generated. Trained with a warm-up learning-rate schedule, mixed precision and early stopping, and judged on precision, recall, F1, ROC-AUC and the confusion matrix rather than on accuracy alone — a single accuracy figure hides exactly the mistake that matters here, letting a generated face through. It is the model behind the KYC suite’s image-forensics check.",
        fa: "یک ترنسفورمر Swin-Small که روی مجموعه‌ای ۱۳۰ هزارتایی از چهره‌های واقعی و ساختگی تنظیم دقیق شده تا تشخیص دهد چهره عکس‌برداری شده یا تولید شده است. آموزش با زمان‌بندی گرم‌کردن نرخ یادگیری، دقت ترکیبی و توقف زودهنگام انجام شد و ارزیابی به‌جای تکیه بر صحت تنها، با دقت، بازخوانی، F1، ROC-AUC و ماتریس درهم‌ریختگی سنجیده شد — یک عدد صحت، دقیقاً همان خطایی را پنهان می‌کند که اینجا اهمیت دارد: عبور دادن یک چهره‌ی ساختگی. این مدل پشت بررسی جرم‌شناسی تصویر در سامانه‌ی احراز هویت است."
      },
      tags: ["kyc", "cv"],
      tech: ["PyTorch", "Swin Transformer", "torchvision", "scikit-learn", "Kaggle"],
      repo: "https://github.com/shahla2022/swin_project",
      kaggle: "https://www.kaggle.com/sshahla/code",
      year: "2026",
      featured: true,
      cover: "layers",
      highlights: [
        { en: "Swin-Small fine-tuned on 130,000 real and generated faces",
          fa: "تنظیم دقیق Swin-Small روی ۱۳۰ هزار چهره‌ی واقعی و ساختگی" },
        { en: "Warm-up schedule, mixed precision and early stopping on Kaggle GPUs",
          fa: "گرم‌کردن نرخ یادگیری، دقت ترکیبی و توقف زودهنگام روی GPUهای کگل" },
        { en: "Evaluated on precision, recall, F1, ROC-AUC and the confusion matrix",
          fa: "ارزیابی با دقت، بازخوانی، F1، ROC-AUC و ماتریس درهم‌ریختگی" },
        { en: "Published as the ai-forensicsi notebook on Kaggle",
          fa: "منتشرشده به‌صورت نوت‌بوک ai-forensicsi روی کگل" }
      ]
    },
    {
      name: { en: "Akam KYC Suite", fa: "سامانه‌ی احراز هویت آکام" },
      subtitle: { en: "Team project — OCR, face matching, liveness, anti-spoofing",
                  fa: "پروژه‌ی تیمی — OCR، تطبیق چهره، زنده‌بودن، ضد جعل" },
      description: {
        en: "Akam’s core product, and the system my services live in. A modular monolith on FastAPI: one router per verification module, each returning the same envelope — a decision, a score and the reasons behind it — so an orchestrator can aggregate them into a single verdict and a reviewer can read the audit trail. My part is the face side: detection, quality, embeddings and matching, plus the forensics model and the data they are all trained on. Models train on Kaggle GPUs and serve on CPU through ONNX Runtime.",
        fa: "محصول اصلی آکام، و سامانه‌ای که سرویس‌های من در آن زندگی می‌کنند. یک مونولیت ماژولار روی FastAPI: برای هر ماژول احراز هویت یک روتر، و همه یک ساختار پاسخ یکسان برمی‌گردانند — تصمیم، امتیاز و دلیل‌ها — تا یک هماهنگ‌کننده آن‌ها را در یک حکم واحد جمع کند و کارشناس بازبینی رد پای تصمیم را بخواند. سهم من سمت چهره است: تشخیص، کیفیت، بردارها و تطبیق، به‌علاوه‌ی مدل جرم‌شناسی و داده‌ای که همه با آن آموزش می‌بینند. مدل‌ها روی GPUهای کگل آموزش می‌بینند و با ONNX Runtime روی CPU اجرا می‌شوند."
      },
      tags: ["kyc", "cv", "backend"],
      tech: ["Python", "FastAPI", "ONNX Runtime", "InsightFace", "YOLOv8", "EasyOCR", "Docker"],
      repo: "https://github.com/akamteam-ai/Akamteam_kyc",
      year: "2026",
      featured: true,
      cover: "scan",
      highlights: [
        { en: "Face detection, quality gating, embeddings and matching behind one router each",
          fa: "تشخیص چهره، دروازه‌ی کیفیت، بردارها و تطبیق، هرکدام پشت یک روتر" },
        { en: "Every module answers in the same shape, so one verdict can be assembled from many",
          fa: "پاسخ همه‌ی ماژول‌ها یک شکل دارد، تا از چند بررسی یک حکم ساخته شود" },
        { en: "Bilingual reason codes so operators can see why a document or selfie was flagged",
          fa: "کدهای دلیل دوزبانه تا اپراتور ببیند یک مدرک یا سلفی چرا علامت خورده است" },
        { en: "Trained on GPUs, served on CPU — nothing at serving time imports torch",
          fa: "آموزش روی GPU، اجرا روی CPU — در زمان اجرا هیچ‌چیز torch را لود نمی‌کند" }
      ]
    },
    {
      name: { en: "Brain MRI Abnormality Classification",
              fa: "دسته‌بندی ناهنجاری در ام‌آرآی مغز" },
      subtitle: { en: "IAAA contest — multi-sequence MRI, from DICOM to trained weights",
                  fa: "مسابقه‌ی IAAA — ام‌آرآی چندتوالی، از DICOM تا وزن‌های آموزش‌دیده" },
      description: {
        en: "An end-to-end pipeline for classifying abnormality in T1 / T2 / T2-FLAIR brain MRI. I did much of the data engineering and the per-sequence training: DICOM to NIfTI conversion, skull stripping, slice extraction and augmentation, then a separate U-Net for each sequence — and 45,728 normal slices prepared as the clean-only training set for the GAN anomaly-detection track. The volumes, slice sets and weights are published on Kaggle so the results can be reproduced.",
        fa: "یک خط‌لوله‌ی سرتاسری برای تشخیص ناهنجاری در ام‌آرآی مغز با توالی‌های T1 / T2 / T2-FLAIR. بخش بزرگی از کار داده و آموزشِ هر توالی با من بود: تبدیل DICOM به NIfTI، حذف جمجمه، استخراج اسلایس و داده‌افزایی، و بعد یک یونت جداگانه برای هر توالی — و ۴۵٬۷۲۸ اسلایس سالم که به‌عنوان مجموعه‌ی آموزشی «فقط نرمال» برای مسیر تشخیص ناهنجاری با GAN آماده شد. حجم‌ها، مجموعه‌های اسلایس و وزن‌ها روی کگل منتشر شده‌اند تا نتایج قابل بازتولید باشند."
      },
      tags: ["medical", "cv", "data"],
      tech: ["PyTorch", "MONAI", "NiBabel", "U-Net", "YOLO", "GANs"],
      kaggle: "https://www.kaggle.com/rahagaribi/models",
      year: "2024",
      featured: true,
      cover: "layers",
      private: true,
      privateNote: { en: "Private — contest submission", fa: "خصوصی — ارسال به مسابقه" },
      highlights: [
        { en: "DICOM → NIfTI, skull stripping and augmentation, published as 3 GB and 2 GB datasets",
          fa: "تبدیل DICOM به NIfTI، حذف جمجمه و داده‌افزایی، منتشرشده در دیتاست‌های ۳ و ۲ گیگابایتی" },
        { en: "Per-sequence U-Net weights — t1U, t2U, t2fU — released as Kaggle models",
          fa: "وزن‌های یونت جداگانه برای هر توالی — t1U، t2U، t2fU — منتشرشده به‌صورت مدل در کگل" },
        { en: "45,728 normal slices prepared for training an anomaly detector on healthy data only",
          fa: "۴۵٬۷۲۸ اسلایس سالم، آماده‌شده برای آموزش آشکارساز ناهنجاری فقط روی داده‌ی سالم" }
      ]
    },
    {
      name: { en: "OCR Fine-Tuning Data", fa: "داده‌ی تنظیم دقیق OCR" },
      subtitle: { en: "The data work behind the document module",
                  fa: "کار داده‌ای پشت ماژول مدارک" },
      description: {
        en: "Teaching off-the-shelf OCR to read local identity documents takes data more than architecture. I built and published the sets behind that work: EasyOCR fine-tuning data, a YOLO dataset for locating text fields on a card, a Donut document-understanding set, and the ID-card images they were cut from.",
        fa: "برای اینکه یک OCR آماده بتواند مدارک شناسایی محلی را بخواند، داده بیشتر از معماری اهمیت دارد. مجموعه‌های پشت این کار را ساختم و منتشر کردم: داده‌ی تنظیم دقیق EasyOCR، یک دیتاست YOLO برای یافتن فیلدهای متنی روی کارت، یک مجموعه‌ی Donut برای درک سند، و تصاویر کارت شناسایی که همه از آن‌ها بریده شده‌اند."
      },
      tags: ["kyc", "cv", "data"],
      tech: ["EasyOCR", "YOLOv8", "Donut", "Kaggle"],
      kaggle: "https://www.kaggle.com/sshahla/datasets",
      year: "2025",
      featured: false,
      cover: "scan",
      highlights: []
    },
    {
      name: { en: "Akam Website & Interactive Demo",
              fa: "وب‌سایت و دموی تعاملی آکام" },
      subtitle: { en: "The company’s first site, with four modules to try",
                  fa: "نخستین سایت شرکت، با چهار ماژول قابل امتحان" },
      description: {
        en: "A bilingual English / Persian single-page site for Akam, with a page per KYC module and an interactive demo: pick a service — face detection, face matching, anti-spoofing or OCR — upload one or two images, and see exactly what the backend returns.",
        fa: "یک سایت تک‌صفحه‌ای دوزبانه (انگلیسی / فارسی) برای آکام، با یک صفحه برای هر ماژول احراز هویت و یک دموی تعاملی: سرویس را انتخاب کنید — تشخیص چهره، تطبیق چهره، ضد جعل یا OCR — یک یا دو تصویر بارگذاری کنید و ببینید بک‌اند دقیقاً چه برمی‌گرداند."
      },
      tags: ["web", "kyc"],
      tech: ["React 19", "Vite", "Tailwind CSS", "lucide-react", "Vercel"],
      repo: "https://github.com/shahla2022/React-vercel",
      year: "2026",
      featured: false,
      cover: "stack",
      highlights: []
    },
    {
      name: { en: "Python Socket Programming", fa: "برنامه‌نویسی سوکت در پایتون" },
      subtitle: { en: "A worked tutorial with client and server examples",
                  fa: "آموزش گام‌به‌گام همراه با مثال کلاینت و سرور" },
      description: {
        en: "An explanatory notebook on socket programming in Python, with runnable client/server pairs — including sending Python objects over the wire with pickle.",
        fa: "نوت‌بوکی آموزشی درباره‌ی برنامه‌نویسی سوکت در پایتون، با جفت‌های کلاینت و سرور قابل اجرا — از جمله ارسال اشیای پایتون روی شبکه با pickle."
      },
      tags: ["backend"],
      tech: ["Python", "socket", "pickle", "Jupyter"],
      repo: "https://github.com/shahla2022/Python-Socket-Programming",
      year: "2023",
      featured: false,
      cover: "network",
      highlights: []
    },
    {
      name: { en: "Sanandaj Weather", fa: "آب‌وهوای سنندج" },
      subtitle: { en: "Right-to-left weather card in plain HTML, CSS and JS",
                  fa: "کارت آب‌وهوای راست‌به‌چپ با HTML، CSS و JS ساده" },
      description: {
        en: "A Persian-language weather interface for Sanandaj: today’s temperature, the day’s high and low, and a forecast strip with hand-drawn SVG icons — no framework and no build step.",
        fa: "رابط کاربری فارسی آب‌وهوای سنندج: دمای امروز، بیشینه و کمینه‌ی روز، و نوار پیش‌بینی با آیکون‌های SVG دست‌ساز — بدون فریم‌ورک و بدون مرحله‌ی build."
      },
      tags: ["web"],
      tech: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/shahla2022/frontend",
      year: "2024",
      featured: false,
      cover: "chart",
      highlights: []
    }
  ],

  /* ------------------------------------------------------------ kaggle */
  /*  Counts combine both profiles: sshahla (19 datasets / 2 notebooks)
   *  and rahagaribi (7 datasets / 4 models / 1 notebook), as of
   *  November 2026.                                                     */

  kaggle: {
    username: "sshahla",
    url: "https://www.kaggle.com/sshahla",
    blurb: {
      en: "My published Kaggle work, across the sshahla and rahagaribi profiles, is the raw material behind two pipelines: a brain-MRI classifier — skull-stripped NIfTI volumes, slice sets and a U-Net per sequence — and the document and face side of identity verification, from OCR fine-tuning sets to occluded-face data and the image-forensics notebook.",
      fa: "کارهای منتشرشده‌ام روی کگل، در دو پروفایل sshahla و rahagaribi، مواد خام پشت دو خط‌لوله است: یک دسته‌بند ام‌آرآی مغز — حجم‌های NIfTI بدون جمجمه، مجموعه‌های اسلایس و یک یونت برای هر توالی — و سمت مدارک و چهره‌ی احراز هویت، از مجموعه‌های تنظیم دقیق OCR تا داده‌ی چهره‌ی پوشیده و نوت‌بوک جرم‌شناسی تصویر."
    },
    stats: [
      { value: "26", label: { en: "Datasets",  fa: "دیتاست" } },
      { value: "6",  label: { en: "Models",    fa: "مدل" } },
      { value: "3",  label: { en: "Notebooks", fa: "نوت‌بوک" } }
    ],
    notebooks: [
      {
        name: "ai-forensicsi",
        description: { en: "Real-versus-generated face detection with a fine-tuned Swin transformer.",
                       fa: "تشخیص چهره‌ی واقعی از ساختگی با ترنسفورمر Swin تنظیم‌شده." },
        url: "https://www.kaggle.com/sshahla/code"
      },
      {
        name: "yolo8finetune",
        description: { en: "Fine-tuning a YOLOv8 detector on a custom labelled set.",
                       fa: "تنظیم دقیق آشکارساز YOLOv8 روی مجموعه‌ی برچسب‌خورده‌ی اختصاصی." },
        url: "https://www.kaggle.com/sshahla/code"
      },
      {
        name: "FaceRecognition",
        description: { en: "Face recognition end to end: detection, embeddings and comparison.",
                       fa: "بازشناسی چهره از ابتدا تا انتها: تشخیص، بردار، و مقایسه." },
        url: "https://www.kaggle.com/rahagaribi/code"
      }
    ],
    models: [
      { name: "t1U",             description: { en: "U-Net trained on T1 brain-MRI sequences.", fa: "یونت آموزش‌دیده روی توالی T1 ام‌آرآی مغز." } },
      { name: "t2U",             description: { en: "U-Net trained on T2 sequences.",           fa: "یونت آموزش‌دیده روی توالی T2." } },
      { name: "t2fU",            description: { en: "U-Net trained on T2-FLAIR sequences.",     fa: "یونت آموزش‌دیده روی توالی T2-FLAIR." } },
      { name: "tUnet",           description: { en: "The shared U-Net baseline the per-sequence models branch from.", fa: "یونت پایه‌ای که مدل‌های هر توالی از آن منشعب می‌شوند." } },
      { name: "shahkabestmodel", description: { en: "Best-performing classifier checkpoint from the MRI runs.", fa: "بهترین نقطه‌ی ذخیره‌ی دسته‌بند در اجراهای ام‌آرآی." } },
      { name: "bestzh",          description: { en: "Companion classifier weights kept for comparison.", fa: "وزن‌های دسته‌بند همراه، نگه‌داشته‌شده برای مقایسه." } }
    ],
    datasets: [
      { name: "allnifti",                 meta: { en: "3 GB · brain MRI, NIfTI", fa: "۳ گیگابایت · ام‌آرآی مغز، NIfTI" } },
      { name: "skullstrippedallnifti",    meta: { en: "2 GB · skull-stripped",   fa: "۲ گیگابایت · بدون جمجمه" } },
      { name: "face-obstacle",            meta: { en: "2 GB · occluded faces",   fa: "۲ گیگابایت · چهره‌ی پوشیده" } },
      { name: "alljpgnormalbyfolder2726", meta: { en: "340 MB · normal slices",  fa: "۳۴۰ مگابایت · اسلایس سالم" } },
      { name: "allimgs45728jpg",          meta: { en: "332 MB · all slices",     fa: "۳۳۲ مگابایت · همه‌ی اسلایس‌ها" } },
      { name: "45728allnormaljpg",        meta: { en: "81 MB · healthy only",    fa: "۸۱ مگابایت · فقط سالم" } },
      { name: "fine_tune_easyocrsh",      meta: { en: "297 MB · OCR fine-tuning", fa: "۲۹۷ مگابایت · تنظیم دقیق OCR" } },
      { name: "brain_monai",              meta: { en: "201 MB · MONAI-ready",    fa: "۲۰۱ مگابایت · آماده‌ی MONAI" } },
      { name: "final_donut_ds",           meta: { en: "112 MB · document understanding", fa: "۱۱۲ مگابایت · درک سند" } },
      { name: "easyocr_git",              meta: { en: "81 MB · recogniser build", fa: "۸۱ مگابایت · ساخت بازشناس" } },
      { name: "yoloocr-ds",               meta: { en: "11 MB · text-field detection", fa: "۱۱ مگابایت · تشخیص فیلد متنی" } },
      { name: "AIimgshahla",              meta: { en: "20 MB · generated faces", fa: "۲۰ مگابایت · چهره‌ی ساختگی" } },
      { name: "zhmidcard",                meta: { en: "6 MB · ID-card images",   fa: "۶ مگابایت · تصاویر کارت شناسایی" } }
    ]
  }
};
