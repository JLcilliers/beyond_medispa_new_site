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
    }
  }
};

export function useTranslations(language: Language): Translations {
  return translations[language];
}
