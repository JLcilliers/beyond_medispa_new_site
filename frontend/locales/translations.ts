import { Language } from '../contexts/LanguageContext';

export interface Translations {
  nav: {
    home: string;
    about: string;
    londonTreatments: string;
    edinburghTreatments: string;
    doctors: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    welcomeTitle: string;
    welcomeSubtitle: string;
    bookConsultation: string;
    learnMore: string;
  };
  common: {
    readMore: string;
    viewAll: string;
    contactUs: string;
    getInTouch: string;
    location: string;
    phone: string;
    email: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    happyClients: string;
    yearsExperience: string;
    satisfactionRate: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    locationsTitle: string;
    londonClinic: string;
    londonClinicDesc: string;
    edinburghClinic: string;
    edinburghClinicDesc: string;
    monthlyTreatments: string;
    clientRetention: string;
    expertPractitioners: string;
    premiumLocations: string;
  };
  faq: {
    title: string;
    visitTitle: string;
    visitDesc: string;
    callUs: string;
  };
}

export const translations: Record<Language, Translations> = {
  'en': {
    nav: {
      home: 'Home',
      about: 'About',
      londonTreatments: 'London Treatments',
      edinburghTreatments: 'Edinburgh Treatments',
      doctors: 'Doctors',
      contact: 'Contact',
      bookNow: 'Book Now'
    },
    hero: {
      welcomeTitle: 'Welcome to Beyond MediSpa',
      welcomeSubtitle: 'Premium Aesthetic Treatments in London & Edinburgh',
      bookConsultation: 'Book Consultation',
      learnMore: 'Learn More'
    },
    common: {
      readMore: 'Read More',
      viewAll: 'View All',
      contactUs: 'Contact Us',
      getInTouch: 'Get In Touch',
      location: 'Location',
      phone: 'Phone',
      email: 'Email'
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Don\'t just take our word for it. Hear from our satisfied clients who have experienced the Beyond Aesthetic Clinic difference across our London and Edinburgh clinics.',
      happyClients: 'Happy Clients',
      yearsExperience: 'Years Experience',
      satisfactionRate: 'Satisfaction Rate'
    },
    whyChooseUs: {
      title: 'Aesthetic Excellence Redefined: It\'s Who We Are',
      subtitle: 'At Beyond Aesthetic Clinic, we\'re redefining aesthetic excellence.',
      feature1Title: 'Award-Winning, Doctor-Led Medical Aesthetic Clinic',
      feature1Desc: 'Our clinic is led by highly qualified doctors, nurse prescribers, and experienced aestheticians who have successfully provided revitalising beauty treatments to thousands of patients worldwide. Recognised for excellence in aesthetic medicine, we combine medical expertise with a commitment to natural, safe, and effective results.',
      feature2Title: 'Cutting-Edge Technology & Medical-Grade Products',
      feature2Desc: 'We routinely invest in the latest aesthetic technologies and use only medical-grade, clinically proven products. This ensures every treatment is safe, comfortable, and results-driven; never compromising on quality, innovation, or your wellbeing.',
      feature3Title: 'Treatment Plans for Natural-Looking Results',
      feature3Desc: 'Every patient is unique, which is why we create bespoke treatment plans tailored to your goals, skin type, and lifestyle. Our approach is focused on enhancing your natural beauty, delivering results that are subtle, balanced, and long-lasting.',
      locationsTitle: 'Two Premium Locations',
      londonClinic: 'London Clinic',
      londonClinicDesc: 'Located in the heart of London, our flagship clinic offers the full range of treatments in a luxurious, modern setting with the latest aesthetic technologies.',
      edinburghClinic: 'Edinburgh Clinic',
      edinburghClinicDesc: 'Our Edinburgh location brings the same high standards of care and expertise to Scotland, serving clients with personalized treatments in an elegant environment.',
      monthlyTreatments: 'Monthly Treatments',
      clientRetention: 'Client Retention',
      expertPractitioners: 'Expert Practitioners',
      premiumLocations: 'Premium Locations'
    },
    faq: {
      title: 'Beyond Aesthetic Clinic Medical Aesthetic Clinic: FAQs',
      visitTitle: 'Visit Our Aesthetic Clinic In London Or Edinburgh Today',
      visitDesc: 'Experience expert aesthetic care in a luxurious, calming setting. Visit our London or Edinburgh clinics and start your beauty journey today.',
      callUs: 'Call Us: 020 7201 8595'
    }
  },
  'zh-TW': {
    nav: {
      home: '首頁',
      about: '關於我們',
      londonTreatments: '倫敦療程',
      edinburghTreatments: '愛丁堡療程',
      doctors: '醫生團隊',
      contact: '聯絡我們',
      bookNow: '立即預約'
    },
    hero: {
      welcomeTitle: '歡迎來到 Beyond MediSpa',
      welcomeSubtitle: '倫敦及愛丁堡的頂級美容療程',
      bookConsultation: '預約諮詢',
      learnMore: '了解更多'
    },
    common: {
      readMore: '閱讀更多',
      viewAll: '查看全部',
      contactUs: '聯絡我們',
      getInTouch: '取得聯絡',
      location: '地點',
      phone: '電話',
      email: '電郵'
    },
    testimonials: {
      title: '客戶評價',
      subtitle: '不要只聽我們的說法。聽聽我們滿意的客戶在倫敦和愛丁堡診所體驗 Beyond 美容診所的分別。',
      happyClients: '滿意客戶',
      yearsExperience: '年經驗',
      satisfactionRate: '滿意度'
    },
    whyChooseUs: {
      title: '重新定義美學卓越：這就是我們',
      subtitle: '在 Beyond 美容診所，我們正在重新定義美學卓越。',
      feature1Title: '屢獲殊榮、由醫生主導的醫學美容診所',
      feature1Desc: '我們的診所由高資歷的醫生、護士處方師和經驗豐富的美容師領導，已成功為全球數千名患者提供煥發活力的美容療程。我們在美容醫學方面獲得卓越認可，將醫學專業知識與對自然、安全和有效結果的承諾相結合。',
      feature2Title: '尖端技術和醫療級產品',
      feature2Desc: '我們定期投資最新的美容技術，並只使用經臨床驗證的醫療級產品。這確保每次療程都是安全、舒適和結果導向的；絕不在質量、創新或您的福祉上妥協。',
      feature3Title: '自然效果的療程計劃',
      feature3Desc: '每位患者都是獨特的，這就是為什麼我們會根據您的目標、皮膚類型和生活方式創建定制療程計劃。我們的方法專注於增強您的自然美，提供微妙、平衡和持久的效果。',
      locationsTitle: '兩個高級地點',
      londonClinic: '倫敦診所',
      londonClinicDesc: '位於倫敦市中心，我們的旗艦診所在豪華、現代的環境中提供全方位的療程，配備最新的美容技術。',
      edinburghClinic: '愛丁堡診所',
      edinburghClinicDesc: '我們的愛丁堡地點將同樣高標準的護理和專業知識帶到蘇格蘭，在優雅的環境中為客戶提供個性化療程。',
      monthlyTreatments: '每月療程',
      clientRetention: '客戶留存率',
      expertPractitioners: '專業從業者',
      premiumLocations: '高級地點'
    },
    faq: {
      title: 'Beyond 美容診所醫學美容診所：常見問題',
      visitTitle: '今天就來參觀我們在倫敦或愛丁堡的美容診所',
      visitDesc: '在豪華、寧靜的環境中體驗專業的美容護理。參觀我們的倫敦或愛丁堡診所，今天就開始您的美麗之旅。',
      callUs: '致電我們：020 7201 8595'
    }
  },
  'zh-CN': {
    nav: {
      home: '首页',
      about: '关于我们',
      londonTreatments: '伦敦疗程',
      edinburghTreatments: '爱丁堡疗程',
      doctors: '医生团队',
      contact: '联系我们',
      bookNow: '立即预约'
    },
    hero: {
      welcomeTitle: '欢迎来到 Beyond MediSpa',
      welcomeSubtitle: '伦敦及爱丁堡的顶级美容疗程',
      bookConsultation: '预约咨询',
      learnMore: '了解更多'
    },
    common: {
      readMore: '阅读更多',
      viewAll: '查看全部',
      contactUs: '联系我们',
      getInTouch: '取得联系',
      location: '地点',
      phone: '电话',
      email: '电邮'
    },
    testimonials: {
      title: '客户评价',
      subtitle: '不要只听我们的说法。听听我们满意的客户在伦敦和爱丁堡诊所体验 Beyond 美容诊所的区别。',
      happyClients: '满意客户',
      yearsExperience: '年经验',
      satisfactionRate: '满意度'
    },
    whyChooseUs: {
      title: '重新定义美学卓越：这就是我们',
      subtitle: '在 Beyond 美容诊所，我们正在重新定义美学卓越。',
      feature1Title: '屡获殊荣、由医生主导的医学美容诊所',
      feature1Desc: '我们的诊所由高资历的医生、护士处方师和经验丰富的美容师领导，已成功为全球数千名患者提供焕发活力的美容疗程。我们在美容医学方面获得卓越认可，将医学专业知识与对自然、安全和有效结果的承诺相结合。',
      feature2Title: '尖端技术和医疗级产品',
      feature2Desc: '我们定期投资最新的美容技术，并只使用经临床验证的医疗级产品。这确保每次疗程都是安全、舒适和结果导向的；绝不在质量、创新或您的福祉上妥协。',
      feature3Title: '自然效果的疗程计划',
      feature3Desc: '每位患者都是独特的，这就是为什么我们会根据您的目标、皮肤类型和生活方式创建定制疗程计划。我们的方法专注于增强您的自然美，提供微妙、平衡和持久的效果。',
      locationsTitle: '两个高级地点',
      londonClinic: '伦敦诊所',
      londonClinicDesc: '位于伦敦市中心，我们的旗舰诊所在豪华、现代的环境中提供全方位的疗程，配备最新的美容技术。',
      edinburghClinic: '爱丁堡诊所',
      edinburghClinicDesc: '我们的爱丁堡地点将同样高标准的护理和专业知识带到苏格兰，在优雅的环境中为客户提供个性化疗程。',
      monthlyTreatments: '每月疗程',
      clientRetention: '客户留存率',
      expertPractitioners: '专业从业者',
      premiumLocations: '高级地点'
    },
    faq: {
      title: 'Beyond 美容诊所医学美容诊所：常见问题',
      visitTitle: '今天就来参观我们在伦敦或爱丁堡的美容诊所',
      visitDesc: '在豪华、宁静的环境中体验专业的美容护理。参观我们的伦敦或爱丁堡诊所，今天就开始您的美丽之旅。',
      callUs: '致电我们：020 7201 8595'
    }
  },
  'ar': {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      londonTreatments: 'علاجات لندن',
      edinburghTreatments: 'علاجات إدنبرة',
      doctors: 'الأطباء',
      contact: 'اتصل بنا',
      bookNow: 'احجز الآن'
    },
    hero: {
      welcomeTitle: 'مرحباً بك في Beyond MediSpa',
      welcomeSubtitle: 'علاجات تجميلية متميزة في لندن وإدنبرة',
      bookConsultation: 'احجز استشارة',
      learnMore: 'اعرف المزيد'
    },
    common: {
      readMore: 'اقرأ المزيد',
      viewAll: 'عرض الكل',
      contactUs: 'اتصل بنا',
      getInTouch: 'تواصل معنا',
      location: 'الموقع',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني'
    },
    testimonials: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'لا تأخذ كلامنا فقط. استمع إلى عملائنا الراضين الذين اختبروا الفرق في عيادة Beyond للجماليات في لندن وإدنبرة.',
      happyClients: 'عملاء سعداء',
      yearsExperience: 'سنوات من الخبرة',
      satisfactionRate: 'معدل الرضا'
    },
    whyChooseUs: {
      title: 'إعادة تعريف التميز الجمالي: هذا ما نحن عليه',
      subtitle: 'في عيادة Beyond للجماليات، نعيد تعريف التميز الجمالي.',
      feature1Title: 'عيادة طبية تجميلية حائزة على جوائز يقودها الأطباء',
      feature1Desc: 'تقودها أطباء مؤهلون تأهيلاً عالياً، وممرضات واصفات، وخبراء تجميل ذوو خبرة نجحوا في تقديم علاجات تجميلية منعشة لآلاف المرضى في جميع أنحاء العالم. معترف بها للتميز في الطب التجميلي، نجمع بين الخبرة الطبية والالتزام بالنتائج الطبيعية والآمنة والفعالة.',
      feature2Title: 'تكنولوجيا متطورة ومنتجات طبية',
      feature2Desc: 'نستثمر بانتظام في أحدث تقنيات التجميل ونستخدم فقط المنتجات الطبية المثبتة سريرياً. هذا يضمن أن كل علاج آمن ومريح وموجه نحو النتائج؛ دون المساومة أبداً على الجودة أو الابتكار أو رفاهيتك.',
      feature3Title: 'خطط علاج للحصول على نتائج طبيعية',
      feature3Desc: 'كل مريض فريد من نوعه، ولهذا السبب نقوم بإنشاء خطط علاج مخصصة تناسب أهدافك ونوع بشرتك وأسلوب حياتك. نهجنا يركز على تعزيز جمالك الطبيعي، وتقديم نتائج دقيقة ومتوازنة وطويلة الأمد.',
      locationsTitle: 'موقعان متميزان',
      londonClinic: 'عيادة لندن',
      londonClinicDesc: 'تقع في قلب لندن، عيادتنا الرئيسية تقدم مجموعة كاملة من العلاجات في بيئة فاخرة وحديثة مع أحدث تقنيات التجميل.',
      edinburghClinic: 'عيادة إدنبرة',
      edinburghClinicDesc: 'يجلب موقعنا في إدنبرة نفس المعايير العالية من الرعاية والخبرة إلى اسكتلندا، لخدمة العملاء بعلاجات شخصية في بيئة أنيقة.',
      monthlyTreatments: 'علاجات شهرية',
      clientRetention: 'الاحتفاظ بالعملاء',
      expertPractitioners: 'ممارسون خبراء',
      premiumLocations: 'مواقع متميزة'
    },
    faq: {
      title: 'عيادة Beyond الطبية التجميلية: الأسئلة الشائعة',
      visitTitle: 'قم بزيارة عيادتنا التجميلية في لندن أو إدنبرة اليوم',
      visitDesc: 'جرب الرعاية التجميلية الخبيرة في بيئة فاخرة وهادئة. قم بزيارة عياداتنا في لندن أو إدنبرة وابدأ رحلة جمالك اليوم.',
      callUs: 'اتصل بنا: 020 7201 8595'
    }
  }
};

export function useTranslations(language: Language): Translations {
  return translations[language];
}
