export type Lang = "en" | "ar";

const translations = {
  en: {
    nav: {
      links: [
        { label: "Cuvr Rehab",    href: "https://rehab.cuvr.ae" },
        { label: "Cuvr Realty",  href: "https://realty.cuvr.ae" },
        { label: "Technology",    href: "#technology" },
        { label: "About",         href: "#about" },
        { label: "Vision",        href: "#vision" },
      ],
      cta: "Connect Us",
    },

    hero: {
      badge:  "Protocol V4.1X // Active",
      line1:  "RECODE",
      line2:  "REALITY.",
      desc:   "Architecting the next epoch of human experience. CUVR leverages neural-link precision and spatial compute to dissolve the barrier between biological and digital realms.",
      btn1:   "Request a Demo",
      btn2:   "System Log",
    },

    domains: {
      sectionTag: "Core Architectures",
      sectionTitle: "Immersive Domains",
      items: [
        {
          title: "PhysioVR Engine",
          desc:  "Neural-feedback loops accelerating physical recovery through gamified high-density spatial training.",
        },
        {
          title: "Void Real Estate",
          desc:  "Global property navigation. Photorealistic architectural rendering meets interactive staging.",
        },
      ],
    },

    howItWorks: {
      sectionTag:   "PROCESS_PROTOCOL",
      sectionTitle: "How It",
      sectionHighlight: "Works",
      rehab: {
        tag:      "CUVR_REHAB",
        title:    "PhysioVR",
        subtitle: "How Recovery Works",
        steps: [
          {
            label: "Patient Assessment",
            desc:  "The clinician inputs the patient's condition, mobility range, and recovery goals. Our AI maps a personalised therapy blueprint in seconds.",
          },
          {
            label: "AI Builds the Session",
            desc:  "The neural engine generates a fully immersive VR rehabilitation environment tailored to the patient's specific physical and cognitive needs.",
          },
          {
            label: "Immersive Recovery",
            desc:  "The patient undergoes guided VR therapy with real-time biometric feedback, while clinicians monitor progress through a live analytics dashboard.",
          },
        ],
      },
      reality: {
        tag:      "CUVR_REALTY",
        title:    "CUVR Realty",
        subtitle: "How Property Tours Work",
        steps: [
          {
            label: "Upload Floor Plan",
            desc:  "The developer submits architectural drawings or CAD files. Our platform ingests the data and begins building a spatial model instantly.",
          },
          {
            label: "AI Generates the VR Tour",
            desc:  "Within hours, the AI converts the plans into a photorealistic, fully walkable virtual environment — complete with lighting, materials, and spatial scale.",
          },
          {
            label: "Buyers Explore Remotely",
            desc:  "Clients tour the property from anywhere in the world, customise interiors in real time, and agents track engagement analytics to close faster.",
          },
        ],
      },
    },

    ai: {
      badge:       "Neural Engine V8.0",
      title:       "AI: The Core\nSubstrate.",
      body:        "Beyond rendering, CUVR systems are driven by a proprietary neural core that learns from biometric feedback. We don't just output pixels; we simulate cognitive presence.",
      features: [
        {
          label: "COGNITIVE ADAPTATION",
          desc:  "Real-time environmental shifts based on user cognitive load and ocular metrics.",
        },
        {
          label: "ZERO-LAG SYNAPSE",
          desc:  "Edge-compute AI ensuring sub-millisecond response for total biological synchronization.",
        },
      ],
    },

    story: {
      badge:      "LAB.09 // ORIGIN",
      titleMain:  "Our Story:",
      titleHighlight: "The\nConvergence.",
      para1: "In 2026, CUVR Innovation Labs launched from Dubai with a clear mandate — harness the power of AI to redefine how humans experience space, recovery, and reality. From the heart of the UAE, we set out to build technology that doesn't just assist people, but transforms them.",
      quote: "AI is not a feature we added — it is the foundation everything is built on. Every interaction, every environment, every recovery session is driven by intelligence that adapts in real time.",
      para2: "Through CUVR Rehab, we are accelerating patient recovery with AI-driven immersive therapy. Through CUVR Realty, we are reshaping how properties are experienced before they are built. Two verticals, one vision — AI at the core of every dimension.",
      stats: [
        { key: "LATENCY_MS",    value: "0.02",  label: "Sync Threshold" },
        { key: "DENSITY_RES",   value: "16K",   label: "Retinal Resolution" },
        { key: "NODES_ACTIVE",  value: "800k+", label: "Neural Clusters" },
        { key: "PRECISION_AGC", value: "99.9%", label: "Motion Fidelity" },
      ],
    },

    careers: {
      badge: "PERSONNEL_ACQUISITION",
      titleMain: "WHY WORK AT ",
      titleHighlight: "CUVR",
      cards: [
        {
          title: "FRONTIER TECH",
          desc:  "Access to proprietary 10X neural-link hardware and edge-compute devices that don't exist in the public sector.",
        },
        {
          title: "SYNAPSE CULTURE",
          desc:  "A decentralized workforce of elite engineers, designers, and neuroscientists collaborating in \"The Void\".",
        },
        {
          title: "POST-REALITY",
          desc:  "Full immersive medical benefits, all-immersive travel stipends, and hardware ownership programs.",
        },
      ],
    },

    architects: {
      badge: "CORE_PERSONNEL",
      titleMain: "Architects of ",
      titleHighlight: "CUVR",
      team: [
        {
          name:  "Nikhil Louis",
          title: "CEO & Founder",
          tag:   "FOUNDER",
          desc:  "Visionary behind CUVR Innovation, pioneering the convergence of VR technology, neural computing, and real-world human experience.",
        },
        {
          name:  "Hiba Moonnakkal",
          title: "Lead Architect & Game Designer",
          tag:   "ARCHITECT",
          desc:  "Crafting immersive architectural and game environments that dissolve the boundary between digital simulation and physical reality.",
        },
        {
          name:  "Sneha Balachandran",
          title: "HR & Operations",
          tag:   "OPERATIONS",
          desc:  "Driving the people and operational systems that keep CUVR running at peak performance — building the culture behind the technology.",
        },
        {
          name:  "Geofred George",
          title: "Sales & Marketing",
          tag:   "GROWTH",
          desc:  "Engineering market presence and strategic partnerships that position CUVR's innovations at the forefront of the global VR landscape.",
        },
      ],
    },

    impact: {
      badge:        "SYSTEM_IMPACT",
      titleMain:    "Results That ",
      titleHighlight: "Matter",
      subtitle:     "Enterprise clients buy solutions, not aesthetics. Here is what CUVR delivers in the real world.",
      rehab: {
        tag:   "CUVR REHAB",
        title: "Healthcare Outcomes",
        stats: [
          { value: "40%",  label: "Increase in patient engagement vs. traditional therapy" },
          { value: "30%",  label: "Fewer rehabilitation sessions needed on average" },
          { value: "100%", label: "Remote clinician oversight — monitor patients in real time" },
          { value: "0",    label: "Additional equipment cost after initial setup" },
        ],
      },
      realty: {
        tag:   "CUVR REALTY",
        title: "Real Estate Outcomes",
        stats: [
          { value: "70%",  label: "Reduction in physical property staging costs" },
          { value: "3×",   label: "Faster sales cycle for off-plan properties" },
          { value: "100%", label: "Remote — buyers tour and decide from anywhere in the world" },
          { value: "∞",    label: "Properties shown simultaneously with no scheduling limit" },
        ],
      },
    },

    visionMission: {
      badge: "DIRECTIVE_CORE",
      vision: {
        tag:   "VISION",
        title: "Where We Are Going",
        desc:  "To become the world's leading AI-powered VR company — redefining how humans experience healthcare and real estate. We believe immersive technology should not be a novelty; it should be infrastructure that drives real-world outcomes.",
        stat:  { value: "2030", label: "Global Deployment Target" },
      },
      mission: {
        tag:   "MISSION",
        title: "What We Do Today",
        desc:  "We build AI-driven VR platforms that solve specific, measurable problems. For healthcare providers, we accelerate patient recovery. For real estate developers, we close deals faster. Every product we ship reduces cost, increases efficiency, and improves human experience.",
        stat:  { value: "2", label: "Industries. One Platform." },
      },
    },

    contact: {
      badge:        "INITIALIZE_CONN",
      titleMain:    "Establish",
      titleHighlight: "Neural Link.",
      desc:         "The protocol is ready. Synchronize your vision with our development suite and lead the next paradigm.",
      field1Label:  "MAC_SECURITY",
      field1Placeholder: "node-identifier",
      field2Label:  "CORP_LINK",
      field2Placeholder: "entity@domain.io",
      field3Label:  "POLICY_PLEDGE",
      field3Placeholder: "intent_descriptor",
      submit:       "Connect Us",
      emailLabel:   "Email",
      phoneLabel:   "Phone",
      officeLabel:  "Office",
      officeText:   "Dubai Silicon Oasis,\nDubai, UAE",
    },

    footer: {
      copyright:    "© 2026 CUVR Innovation Labs. All Rights Reserved.",
      status:       "Global OPN Active",
      colDirectory: "DIRECTORY",
      colNode:      "NODE",
      colLegal:     "LEGAL",
      colFollow:    "FOLLOW_US",
      links: {
        directory: [
          { num: "01", text: "Cuvr Rehab",    href: "https://rehab.cuvr.ae" },
          { num: "02", text: "Cuvr Realty", href: "https://realty.cuvr.ae" },
          { num: "03", text: "Tech Stack",   href: "#technology" },
        ],
        node: [
          { text: "About Us",         href: "#about" },
          { text: "Vision & Mission", href: "#vision" },
          { text: "Careers",          href: "#" },
          { text: "Contact",          href: "#" },
          { text: "FAQs",             href: "#faqs" },
        ],
        legal: [
          { text: "Terms & Conditions", href: "/terms" },
          { text: "Privacy Policy",     href: "/privacy" },
          { text: "Sitemap",            href: "/sitemap.xml" },
        ],
      },
    },
  },

  /* ─────────── ARABIC ─────────── */
  ar: {
    nav: {
      links: [
        { label: "كيوفر ريهاب",    href: "https://rehab.cuvr.ae" },
        { label: "كيوفر ريالتي",   href: "https://realty.cuvr.ae" },
        { label: "التقنية",         href: "#technology" },
        { label: "من نحن",          href: "#about" },
        { label: "رؤيتنا",          href: "#vision" },
      ],
      cta: "تواصل معنا",
    },

    hero: {
      badge:  "البروتوكول V4.1X // نشط",
      line1:  "أعِد",
      line2:  "البرمجة.",
      desc:   "نؤسّس الحقبة القادمة من التجربة البشرية. تستخدم CUVR دقة الربط العصبي والحوسبة المكانية لإذابة الحدود بين العوالم البيولوجية والرقمية.",
      btn1:   "احجز عرضاً تجريبياً",
      btn2:   "سجل النظام",
    },

    domains: {
      sectionTag:   "البنى الأساسية",
      sectionTitle: "المجالات الغامرة",
      items: [
        {
          title: "محرك فيزيو في آر",
          desc:  "حلقات التغذية الراجعة العصبية التي تسرّع التعافي الجسدي عبر التدريب المكاني عالي الكثافة والمُلعَّب.",
        },
        {
          title: "كيوفر ريالتي",
          desc:  "استكشاف عقاري عالمي. تقديم معماري فوتوغرافي الواقعية مع تهيئة تفاعلية.",
        },
      ],
    },

    howItWorks: {
      sectionTag:       "بروتوكول_العملية",
      sectionTitle:     "كيف",
      sectionHighlight: "يعمل",
      rehab: {
        tag:      "CUVR_REHAB",
        title:    "فيزيو في آر",
        subtitle: "كيف يعمل التعافي",
        steps: [
          {
            label: "تقييم المريض",
            desc:  "يدخل الطبيب حالة المريض ومدى حركته وأهداف التعافي. يرسم الذكاء الاصطناعي خطة علاجية مخصصة في ثوانٍ.",
          },
          {
            label: "الذكاء الاصطناعي يبني الجلسة",
            desc:  "يُنشئ المحرك العصبي بيئة تأهيل واقع افتراضي غامرة بالكامل مصممة خصيصًا لاحتياجات المريض الجسدية والمعرفية.",
          },
          {
            label: "التعافي الغامر",
            desc:  "يخضع المريض لعلاج واقع افتراضي موجَّه مع تغذية راجعة حيوية فورية، بينما يتابع الأطباء التقدم عبر لوحة تحليلات مباشرة.",
          },
        ],
      },
      reality: {
        tag:      "CUVR_REALTY",
        title:    "كيوفر ريالتي",
        subtitle: "كيف تعمل جولات العقارات",
        steps: [
          {
            label: "رفع المخطط الهندسي",
            desc:  "يقدم المطور الرسومات المعمارية أو ملفات CAD. تستوعب المنصة البيانات وتبدأ في بناء النموذج المكاني فورًا.",
          },
          {
            label: "الذكاء الاصطناعي يُنشئ جولة VR",
            desc:  "في غضون ساعات، يحوّل الذكاء الاصطناعي المخططات إلى بيئة فوتوغرافية الواقعية قابلة للسير — مع إضاءة ومواد وحجم مكاني واقعي.",
          },
          {
            label: "المشترون يستكشفون عن بُعد",
            desc:  "يجول العملاء العقار من أي مكان في العالم، ويخصصون التصاميم الداخلية في الوقت الفعلي، ويتابع الوكلاء تحليلات التفاعل للإغلاق بشكل أسرع.",
          },
        ],
      },
    },

    ai: {
      badge:  "المحرك العصبي V8.0",
      title:  "الذكاء الاصطناعي:\nالركيزة الأساسية.",
      body:   "تتجاوز أنظمة CUVR مجرد التصيير — فهي مدفوعة بنواة عصبية خاصة تتعلم من التغذية الراجعة الحيوية. نحن لا نُخرج بيكسلات وحسب؛ بل نحاكي الحضور المعرفي.",
      features: [
        {
          label: "التكيف_المعرفي",
          desc:  "تحولات بيئية فورية بناءً على الحمل المعرفي للمستخدم والمقاييس البصرية.",
        },
        {
          label: "تشابك_بلا_تأخير",
          desc:  "ذكاء اصطناعي على حافة الحوسبة يضمن استجابة أقل من ميلي ثانية للتزامن البيولوجي الكامل.",
        },
      ],
    },

    story: {
      badge:          "المختبر.09 // الأصل",
      titleMain:      "قصتنا:",
      titleHighlight: "التقاطع.",
      para1: "في عام 2026، أطلقت مختبرات CUVR Innovation من دبي بتفويض واضح — تسخير قوة الذكاء الاصطناعي لإعادة تعريف كيفية تجربة البشر للفضاء والتعافي والواقع. من قلب الإمارات، انطلقنا لبناء تقنية لا تساعد الناس فحسب، بل تحوّلهم.",
      quote: "الذكاء الاصطناعي ليس ميزة أضفناها — بل هو الأساس الذي بُني عليه كل شيء. كل تفاعل، وكل بيئة، وكل جلسة تعافٍ مدفوعة بذكاء يتكيف في الوقت الفعلي.",
      para2: "من خلال CUVR Rehab، نسرّع تعافي المرضى عبر العلاج الغامر المدعوم بالذكاء الاصطناعي. ومن خلال CUVR Realty، نُعيد تشكيل كيفية تجربة العقارات قبل اكتمال بنائها. محوران، رؤية واحدة — الذكاء الاصطناعي في قلب كل بُعد.",
      stats: [
        { key: "كمون_MS",      value: "0.02",  label: "عتبة التزامن" },
        { key: "دقة_الكثافة", value: "16K",   label: "دقة الشبكية" },
        { key: "عقد_نشطة",    value: "800k+", label: "تجمعات عصبية" },
        { key: "دقة_AGC",     value: "99.9%", label: "دقة الحركة" },
      ],
    },

    careers: {
      badge:          "اكتساب_الكفاءات",
      titleMain:      "لماذا تعمل مع ",
      titleHighlight: "CUVR",
      cards: [
        {
          title: "تقنية_الطليعة",
          desc:  "الوصول إلى أجهزة الربط العصبي الخاصة 10X وأجهزة الحوسبة الحافة غير الموجودة في القطاع العام.",
        },
        {
          title: "ثقافة_التشابك",
          desc:  "قوى عاملة لامركزية من المهندسين والمصممين وعلماء الأعصاب المتميزين يتعاونون في \"الفراغ\".",
        },
        {
          title: "ما_بعد_الواقع",
          desc:  "مزايا طبية شاملة بالغمر، وبدلات سفر كاملة التجربة، وبرامج ملكية الأجهزة.",
        },
      ],
    },

    architects: {
      badge:          "الكوادر_الأساسية",
      titleMain:      "مهندسو ",
      titleHighlight: "CUVR",
      team: [
        {
          name:  "نيخيل لويس",
          title: "الرئيس التنفيذي والمؤسس",
          tag:   "FOUNDER",
          desc:  "الرؤية الإبداعية وراء CUVR Innovation، يقود التقاء تقنية الواقع الافتراضي والحوسبة العصبية والتجربة الإنسانية الواقعية.",
        },
        {
          name:  "هبة موناكال",
          title: "المهندسة المعمارية الرئيسية ومصممة الألعاب",
          tag:   "ARCHITECT",
          desc:  "تصميم بيئات معمارية وألعاب غامرة تُذيب الحدود بين المحاكاة الرقمية والواقع المادي.",
        },
        {
          name:  "سنيها بالاشاندران",
          title: "الموارد البشرية والعمليات",
          tag:   "OPERATIONS",
          desc:  "تقود الأنظمة البشرية والتشغيلية التي تُبقي CUVR تعمل بذروة الأداء — بناء ثقافة العمل خلف التكنولوجيا.",
        },
        {
          name:  "جيوفريد جورج",
          title: "المبيعات والتسويق",
          tag:   "GROWTH",
          desc:  "هندسة الحضور في السوق والشراكات الاستراتيجية التي تضع ابتكارات CUVR في طليعة المشهد العالمي للواقع الافتراضي.",
        },
      ],
    },

    impact: {
      badge:        "تأثير_المنظومة",
      titleMain:    "نتائج ",
      titleHighlight: "حقيقية",
      subtitle:     "العملاء المؤسسيون يشترون الحلول، لا الجماليات. إليك ما تحققه CUVR في الواقع الفعلي.",
      rehab: {
        tag:   "كيوفر ريهاب",
        title: "مخرجات الرعاية الصحية",
        stats: [
          { value: "40%",  label: "زيادة في تفاعل المرضى مقارنةً بالعلاج التقليدي" },
          { value: "30%",  label: "تقليل في متوسط جلسات التأهيل المطلوبة" },
          { value: "100%", label: "إشراف طبي عن بُعد — متابعة المرضى في الوقت الفعلي" },
          { value: "0",    label: "تكاليف معدات إضافية بعد الإعداد الأولي" },
        ],
      },
      realty: {
        tag:   "كيوفر ريالتي",
        title: "مخرجات القطاع العقاري",
        stats: [
          { value: "70%",  label: "تخفيض في تكاليف التجهيز المادي للعقارات" },
          { value: "3×",   label: "أسرع في دورة المبيعات للعقارات على الخارطة" },
          { value: "100%", label: "عن بُعد — يجول المشترون ويتخذون قراراتهم من أي مكان" },
          { value: "∞",    label: "عقارات تُعرض في آنٍ واحد بلا حدود جدولة" },
        ],
      },
    },

    visionMission: {
      badge: "المحور_الأساسي",
      vision: {
        tag:   "الرؤية",
        title: "إلى أين نتجه",
        desc:  "أن نصبح الشركة الرائدة عالمياً في مجال الواقع الافتراضي المدعوم بالذكاء الاصطناعي — نُعيد تعريف كيفية تجربة البشر للرعاية الصحية والعقارات. نؤمن بأن التقنية الغامرة لا ينبغي أن تكون مجرد ترفيه؛ بل يجب أن تكون بنية تحتية تُحقق نتائج حقيقية.",
        stat:  { value: "2030", label: "هدف الانتشار العالمي" },
      },
      mission: {
        tag:   "المهمة",
        title: "ما نفعله اليوم",
        desc:  "نبني منصات واقع افتراضي مدعومة بالذكاء الاصطناعي تحل مشكلات محددة وقابلة للقياس. لمزودي الرعاية الصحية، نُسرّع تعافي المرضى. للمطورين العقاريين، نُغلق الصفقات بشكل أسرع. كل منتج نُطلقه يخفض التكاليف ويرفع الكفاءة ويحسّن تجربة الإنسان.",
        stat:  { value: "2", label: "قطاعان. منصة واحدة." },
      },
    },

    contact: {
      badge:             "تهيئة_الاتصال",
      titleMain:         "أنشئ",
      titleHighlight:    "رابطًا عصبيًا.",
      desc:              "البروتوكول جاهز. زامن رؤيتك مع مجموعة التطوير لدينا وقُد النموذج التالي.",
      field1Label:       "أمان_الشبكة",
      field1Placeholder: "معرّف-العقدة",
      field2Label:       "رابط_الشركة",
      field2Placeholder: "entity@domain.io",
      field3Label:       "تعهد_السياسة",
      field3Placeholder: "واصف_النية",
      submit:            "تواصل معنا",
      emailLabel:        "البريد الإلكتروني",
      phoneLabel:        "الهاتف",
      officeLabel:       "المكتب",
      officeText:        "واحة دبي للسيليكون،\nدبي، الإمارات",
    },

    footer: {
      copyright:    "© 2026 مختبرات CUVR Innovation. جميع الحقوق محفوظة.",
      status:       "الشبكة العالمية نشطة",
      colDirectory: "الدليل",
      colNode:      "العقدة",
      colLegal:     "القانوني",
      colFollow:    "تابعنا",
      links: {
        directory: [
          { num: "01", text: "فيزيو في آر",   href: "https://rehab.cuvr.ae" },
          { num: "02", text: "كيوفر ريالتي",  href: "https://realty.cuvr.ae" },
          { num: "03", text: "التقنيات",       href: "#technology" },
        ],
        node: [
          { text: "من نحن",           href: "#about" },
          { text: "رؤيتنا ومهمتنا",  href: "#vision" },
          { text: "الوظائف",          href: "#" },
          { text: "تواصل معنا",       href: "#" },
          { text: "الأسئلة الشائعة",  href: "#faqs" },
        ],
        legal: [
          { text: "الشروط والأحكام",  href: "/terms" },
          { text: "سياسة الخصوصية",  href: "/privacy" },
          { text: "خريطة الموقع",     href: "/sitemap.xml" },
        ],
      },
    },
  },
};

export default translations;
