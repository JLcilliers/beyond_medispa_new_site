// Translation interface defining all keys
type SupportedLanguage = 'en' | 'zh-CN' | 'zh-TW' | 'ar'

interface LanguageSwitcherEntry {
  label: string
  nativeName: string
}

interface LanguageSwitcherConfig {
  selectLabel: string
  languages: Record<SupportedLanguage, LanguageSwitcherEntry>
}

type BodyProcedureKey =
  | 'exilis'
  | 'hifu'
  | 'cmSlim'
  | 'coolLaser'
  | 'coolSculpting'
  | 'unison'
  | 'vanquish'
  | 'laserHairRemoval'
  | 'electrolysis'

type FacialProcedureKey =
  | 'hydrafacialEdinburgh'
  | 'hydrafacialLondon'
  | 'microneedlingEdinburgh'
  | 'microneedlingLondon'

type InjectablesProcedureKey =
  | 'biofillerEdinburgh'
  | 'biofillerLondon'

type PeelsProcedureKey =
  | 'medik8Edinburgh'
  | 'medik8London'
  | 'zoEdinburgh'
  | 'zoLondon'

interface ProcedureCategoryHero {
  title: string
  subtitle: string
  description: string
}

interface ProcedureCategoryTreatment {
  key: BodyProcedureKey
  name: string
  description: string
  duration: string
  price: string
  benefits: string[]
  route: string
}

interface ProcedureDetailHero {
  tagline: string
  title: string
  subtitle: string
  description: string
}

interface ProcedureDetailInfo {
  duration: string
  results: string
  price: string
  benefits: string[]
}

type BodyProcedureDetails = Record<
  BodyProcedureKey,
  {
    hero: ProcedureDetailHero
    treatmentInfo: ProcedureDetailInfo
  }
>

type FacialProcedureDetails = Record<
  FacialProcedureKey,
  {
    hero: ProcedureDetailHero
    treatmentInfo: ProcedureDetailInfo
  }
>

type InjectablesProcedureDetails = Record<
  InjectablesProcedureKey,
  {
    hero: ProcedureDetailHero
    treatmentInfo: ProcedureDetailInfo
  }
>

type PeelsProcedureDetails = Record<
  PeelsProcedureKey,
  {
    hero: ProcedureDetailHero
    treatmentInfo: ProcedureDetailInfo
  }
>

const bodyProcedurePagesEn: Translations['procedurePages'] = {
  body: {
    hero: {
      title: 'Body',
      subtitle: 'Treatments',
      description:
        'Transform your body with our advanced non-invasive treatments designed to sculpt, tone, and rejuvenate your skin.',
    },
    treatments: [
      {
        key: 'exilis',
        name: 'Exilis',
        description: 'Revolutionary radiofrequency technology for skin tightening and body contouring without surgery.',
        duration: '45-60 minutes',
        price: 'From GBP 250',
        benefits: ['Skin tightening', 'Body contouring', 'Cellulite reduction', 'Non-invasive'],
        route: 'procedures/body/exilis',
      },
      {
        key: 'hifu',
        name: 'HIFU',
        description: 'High-intensity focused ultrasound for precise lifting, tightening, and long-lasting rejuvenation.',
        duration: '60-90 minutes',
        price: 'From GBP 350',
        benefits: ['Deep lifting', 'Targets jawline and cheeks', 'Stimulates collagen', 'Minimal downtime'],
        route: 'procedures/body/hifu',
      },
      {
        key: 'cmSlim',
        name: 'CM Slim',
        description: 'Advanced electromagnetic muscle stimulation for building muscle mass and burning fat simultaneously.',
        duration: '30 minutes',
        price: 'From GBP 200',
        benefits: ['Builds muscle', 'Reduces fat', 'Strengthens the core', 'Fast appointments'],
        route: 'procedures/body/cm-slim',
      },
      {
        key: 'coolLaser',
        name: 'Cool Laser',
        description: 'Innovative cold laser therapy that refines texture, brightens tone, and encourages collagen renewal.',
        duration: '45 minutes',
        price: 'From GBP 180',
        benefits: ['Improves texture and tone', 'Targets pigmentation', 'Helps acne scarring', 'Minimal downtime'],
        route: 'procedures/body/cool-laser',
      },
      {
        key: 'coolSculpting',
        name: 'CoolSculpting',
        description: 'FDA-cleared cryolipolysis that freezes and eliminates stubborn fat cells for lasting contour changes.',
        duration: '35-60 minutes',
        price: 'From GBP 400',
        benefits: ['Non-surgical fat reduction', 'Targets stubborn fat', 'Permanent fat-cell removal', 'Proven results'],
        route: 'procedures/body/coolsculpting',
      },
      {
        key: 'unison',
        name: 'Unison',
        description: 'Combined radiofrequency and ultrasound technology for comprehensive cellulite smoothing and toning.',
        duration: '60 minutes',
        price: 'From GBP 300',
        benefits: ['Reduces cellulite', 'Improves elasticity', 'Comfortable sessions', 'Customisable treatment'],
        route: 'procedures/body/unison',
      },
      {
        key: 'vanquish',
        name: 'Vanquish',
        description: 'Contactless radiofrequency energy that treats larger areas for consistent circumferential reduction.',
        duration: '45 minutes',
        price: 'From GBP 280',
        benefits: ['Contactless treatment', 'Large area coverage', 'Comfortable warmth', 'Gradual natural results'],
        route: 'procedures/body/vanquish',
      },
      {
        key: 'laserHairRemoval',
        name: 'Laser Hair Removal',
        description: 'Professional laser hair removal designed to minimise regrowth and leave skin smooth across all areas.',
        duration: '15-60 minutes',
        price: 'From GBP 50',
        benefits: ['Long-term reduction', 'Fast appointments', 'Precision targeting', 'Smooth results'],
        route: 'procedures/body/laser-hair-removal',
      },
      {
        key: 'electrolysis',
        name: 'Electrolysis',
        description: 'FDA-approved permanent hair removal that works on every hair and skin type, including light hairs.',
        duration: '15-45 minutes',
        price: 'From GBP 30',
        benefits: ['Permanent removal', 'All hair types', 'All skin tones', 'Ideal for small areas'],
        route: 'procedures/body/electrolysis',
      },
    ],
  },
  bodyDetails: {
    exilis: {
      hero: {
        tagline: 'SKIN TIGHTENING EXCELLENCE',
        title: 'Exilis',
        subtitle: 'Radio Frequency Body and Skin Contouring',
        description:
          'Discover the power of Exilis radiofrequency technology for non-surgical body contouring and skin tightening. Our advanced treatment stimulates collagen production, reduces cellulite, and sculpts your natural contours with precision and comfort.',
      },
      treatmentInfo: {
        duration: '30-60 minutes',
        results: 'Progressive improvement over 4-12 weeks after a course',
        price: 'From GBP 420',
        benefits: [
          'Skin tightening',
          'Stimulates collagen',
          'Cellulite improvement',
          'Targeted body contouring',
          'Minimal downtime',
          'Suitable for multiple body areas',
        ],
      },
    },
    hifu: {
      hero: {
        tagline: 'NON-SURGICAL LIFTING',
        title: 'HIFU',
        subtitle: 'High Intensity Focused Ultrasound',
        description:
          'Experience the revolutionary HIFU treatment for non-invasive lifting and tightening. Focused ultrasound energy stimulates deep collagen production to lift, firm, and rejuvenate your contours naturally.',
      },
      treatmentInfo: {
        duration: '45-90 minutes',
        results: 'Lifting and tightening develops over 8-12 weeks with results that can last 12-18 months',
        price: 'From GBP 735',
        benefits: [
          'Non-invasive lifting',
          'Stimulates collagen and elastin',
          'Contours jawline and cheeks',
          'Softens wrinkles',
          'Minimal downtime',
          'Long-lasting results',
        ],
      },
    },
    cmSlim: {
      hero: {
        tagline: 'MUSCLE BUILDING AND FAT REDUCTION',
        title: 'CM Slim',
        subtitle: 'Body Sculpting and Contouring',
        description:
          'Transform your shape with CM Slim electromagnetic technology. Sessions gently sculpt your body by reducing fat while enhancing and strengthening targeted muscle groups in record time.',
      },
      treatmentInfo: {
        duration: '30 minutes',
        results: 'Improved tone and definition appears 2-4 weeks after a consistent series',
        price: 'From GBP 263',
        benefits: [
          'Builds muscle with EMS',
          'Helps reduce fat',
          'Strengthens core, glutes, thighs, and arms',
          'No downtime',
          'Quick sessions',
          'Non-invasive',
        ],
      },
    },
    coolLaser: {
      hero: {
        tagline: 'ADVANCED LASER REJUVENATION',
        title: 'Cool Laser',
        subtitle: 'Skin Resurfacing and Rejuvenation',
        description:
          'Transform your skin with Cool Laser technology. This innovative approach refines texture, boosts luminosity, targets pigmentation, and supports collagen renewal for comprehensive rejuvenation.',
      },
      treatmentInfo: {
        duration: '30-60 minutes',
        results: 'Immediate glow with refinement that continues to build over several weeks',
        price: 'Contact for pricing',
        benefits: [
          'Reduces fine lines',
          'Improves texture and tone',
          'Targets pigmentation',
          'Helps acne scarring',
          'Minimal downtime',
          'Stimulates collagen',
        ],
      },
    },
    coolSculpting: {
      hero: {
        tagline: 'NON-SURGICAL FAT REDUCTION',
        title: 'CoolSculpting',
        subtitle: 'FDA Cleared Fat Freezing Technology',
        description:
          "Experience the world's leading non-invasive fat reduction treatment. CoolSculpting uses controlled cooling to eliminate stubborn fat cells and define smooth, contoured lines without surgery.",
      },
      treatmentInfo: {
        duration: '35-60 minutes per cycle',
        results: 'Fat reduction becomes visible in 8-12 weeks as the body naturally clears treated fat cells',
        price: 'Contact for pricing',
        benefits: [
          'Non-surgical fat reduction',
          'Targets stubborn fat',
          'Minimal downtime',
          'Permanent fat-cell removal',
          'Contour improvement',
          'Clinically proven',
        ],
      },
    },
    electrolysis: {
      hero: {
        tagline: 'PERMANENT HAIR REMOVAL',
        title: 'Electrolysis',
        subtitle: 'FDA-Approved Permanent Solution',
        description:
          'Experience permanent hair removal with electrolysis. This precise, medically approved treatment works on every hair and skin type, including fair hairs, for lasting, tailored results.',
      },
      treatmentInfo: {
        duration: '15-60 minutes',
        results: 'Permanent hair removal achieved over a personalised series',
        price: 'Contact for pricing',
        benefits: [
          'Effective for all hair and skin types',
          'Treats blonde and white hairs',
          'Highly precise',
          'Medically certified',
          'Ideal for small areas',
          'Delivers long-term results',
        ],
      },
    },
    laserHairRemoval: {
      hero: {
        tagline: 'LONG-TERM HAIR REDUCTION',
        title: 'Laser Hair Removal',
        subtitle: 'Smooth, Hair-Free Skin',
        description:
          'Achieve long-term hair reduction with targeted laser technology. Fast and effective treatments minimise regrowth, reduce ingrown hairs, and leave skin smooth across every treatment area.',
      },
      treatmentInfo: {
        duration: '15-60 minutes',
        results: 'Long-term hair reduction typically achieved after 6-8 sessions',
        price: 'Contact for pricing',
        benefits: [
          'Long-term reduction',
          'Precision targeting',
          'Fast appointments',
          'Fewer ingrown hairs',
          'Smooth skin',
          'Cost-effective course options',
        ],
      },
    },
    unison: {
      hero: {
        tagline: 'CELLULITE REDUCTION',
        title: 'Unison',
        subtitle: 'Advanced Cellulite Treatment',
        description:
          'Reduce the look of cellulite and improve elasticity with Unison. This comfortable, dual-energy treatment enhances circulation, smooths texture, and supports skin firmness for every tone.',
      },
      treatmentInfo: {
        duration: '20-30 minutes per area',
        results: 'Cellulite appearance improves gradually over 2-8 weeks after treatment',
        price: 'Contact for pricing',
        benefits: [
          'Reduces cellulite',
          'Improves elasticity',
          'Enhances circulation',
          'Comfortable sessions',
          'Suitable for all skin types',
          'Minimal downtime',
        ],
      },
    },
    vanquish: {
      hero: {
        tagline: 'CONTACTLESS FAT REDUCTION',
        title: 'Vanquish',
        subtitle: 'Non-Invasive Body Contouring',
        description:
          'Experience contactless fat reduction with Vanquish. Gentle, uniform heating treats the abdomen and flanks to reduce circumference comfortably, with no required downtime.',
      },
      treatmentInfo: {
        duration: '45 minutes',
        results: 'Circumferential reduction unfolds over 4-8 weeks following a treatment course',
        price: 'Contact for pricing',
        benefits: [
          'Contactless fat reduction',
          'Targets abdomen and flanks',
          'No downtime',
          'Uniform energy delivery',
          'Non-invasive comfort',
          'Supports gradual, natural results',
        ],
      },
    },
  },
  facialDetails: {
    hydrafacialEdinburgh: {
      hero: {
        tagline: 'EDINBURGH EXCELLENCE',
        title: 'HydraFacial Edinburgh',
        subtitle: 'Advanced Facial Rejuvenation in Scotland\'s Capital',
        description:
          'Experience the revolutionary HydraFacial treatment at our prestigious Edinburgh clinic on Dublin Street. This multi-step facial combines deep cleansing, exfoliation, extraction, and intense hydration using patented vortex technology. Perfect for busy professionals and discerning clients seeking immediate, visible results without downtime. Our expert aestheticians customize each treatment to address your unique skin concerns, from fine lines and hyperpigmentation to congested pores and uneven texture. The HydraFacial is suitable for all skin types and delivers an instant radiance that keeps you glowing long after you leave our elegant Edinburgh location. Discover why this award-winning treatment is trusted by dermatologists and loved by clients worldwide. Book your transformative HydraFacial experience in Edinburgh today.',
      },
      treatmentInfo: {
        duration: '30–60 minutes',
        results: 'Immediate radiance and glow; progressive improvements over weeks',
        price: 'From £150 - Contact for personalized package pricing',
        benefits: [
          'Deep cleansing and exfoliation',
          'Painless extractions',
          'Intense hydration with serums',
          'Reduces fine lines and wrinkles',
          'Evens skin tone and texture',
          'Minimizes pores',
          'No downtime required',
          'Suitable for all skin types',
          'Immediate visible results',
          'Customizable for your concerns',
        ],
      },
    },
    hydrafacialLondon: {
      hero: {
        tagline: 'KNIGHTSBRIDGE LUXURY',
        title: 'HydraFacial London',
        subtitle: 'Premium Facial Treatment in the Heart of Knightsbridge',
        description:
          'Indulge in the ultimate HydraFacial experience at our exclusive Knightsbridge clinic. This revolutionary treatment combines cleansing, exfoliation, extraction, and hydration in one seamless procedure using advanced vortex technology. Ideal for London\'s fast-paced lifestyle, the HydraFacial delivers instant luminosity and long-lasting skin health without any downtime. Our highly trained therapists tailor each session to your specific needs, addressing concerns such as fine lines, sun damage, congestion, and dullness. Suitable for all skin types and ages, this treatment is the perfect prelude to any special event or a regular part of your skincare routine. Experience the glowing, rejuvenated complexion that has made HydraFacial a favorite among celebrities and skincare enthusiasts. Book your luxurious HydraFacial in Knightsbridge today.',
      },
      treatmentInfo: {
        duration: '30–60 minutes',
        results: 'Instant luminosity and smoothness; continued improvements with regular sessions',
        price: 'From £150 - Contact for bespoke treatment packages',
        benefits: [
          'Deep pore cleansing',
          'Gentle exfoliation',
          'Painless extraction',
          'Intensive serum infusion',
          'Reduces fine lines',
          'Improves skin texture',
          'Brightens complexion',
          'Hydrates deeply',
          'No recovery time',
          'Safe for all skin types',
        ],
      },
    },
    microneedlingEdinburgh: {
      hero: {
        tagline: 'COMING SOON',
        title: 'Microneedling Edinburgh',
        subtitle: 'Advanced Skin Rejuvenation',
        description: 'Premium microneedling treatments coming soon to our Edinburgh clinic.',
      },
      treatmentInfo: {
        duration: 'TBC',
        results: 'TBC',
        price: 'TBC',
        benefits: ['Coming soon'],
      },
    },
    microneedlingLondon: {
      hero: {
        tagline: 'COMING SOON',
        title: 'Microneedling London',
        subtitle: 'Advanced Skin Rejuvenation',
        description: 'Premium microneedling treatments coming soon to our Knightsbridge clinic.',
      },
      treatmentInfo: {
        duration: 'TBC',
        results: 'TBC',
        price: 'TBC',
        benefits: ['Coming soon'],
      },
    },
  },
  injectablesDetails: {
    biofillerEdinburgh: {
      hero: {
        tagline: 'COMING SOON',
        title: 'Bio Filler Edinburgh',
        subtitle: 'Natural Dermal Fillers',
        description: 'Natural bio filler treatments coming soon to our Edinburgh clinic.',
      },
      treatmentInfo: {
        duration: 'TBC',
        results: 'TBC',
        price: 'TBC',
        benefits: ['Coming soon'],
      },
    },
    biofillerLondon: {
      hero: {
        tagline: 'COMING SOON',
        title: 'Bio Filler London',
        subtitle: 'Natural Dermal Fillers',
        description: 'Natural bio filler treatments coming soon to our Knightsbridge clinic.',
      },
      treatmentInfo: {
        duration: 'TBC',
        results: 'TBC',
        price: 'TBC',
        benefits: ['Coming soon'],
      },
    },
  },
  peelsDetails: {
    medik8Edinburgh: {
      hero: {
        tagline: 'COMING SOON',
        title: 'Medik8 Peel Edinburgh',
        subtitle: 'Professional Chemical Peels',
        description: 'Medik8 professional peel treatments coming soon to our Edinburgh clinic.',
      },
      treatmentInfo: {
        duration: 'TBC',
        results: 'TBC',
        price: 'TBC',
        benefits: ['Coming soon'],
      },
    },
    medik8London: {
      hero: {
        tagline: 'COMING SOON',
        title: 'Medik8 Peel London',
        subtitle: 'Professional Chemical Peels',
        description: 'Medik8 professional peel treatments coming soon to our Knightsbridge clinic.',
      },
      treatmentInfo: {
        duration: 'TBC',
        results: 'TBC',
        price: 'TBC',
        benefits: ['Coming soon'],
      },
    },
    zoEdinburgh: {
      hero: {
        tagline: 'COMING SOON',
        title: 'ZO Peel Edinburgh',
        subtitle: 'Medical-Grade Chemical Peels',
        description: 'ZO Skin Health peel treatments coming soon to our Edinburgh clinic.',
      },
      treatmentInfo: {
        duration: 'TBC',
        results: 'TBC',
        price: 'TBC',
        benefits: ['Coming soon'],
      },
    },
    zoLondon: {
      hero: {
        tagline: 'COMING SOON',
        title: 'ZO Peel London',
        subtitle: 'Medical-Grade Chemical Peels',
        description: 'ZO Skin Health peel treatments coming soon to our Knightsbridge clinic.',
      },
      treatmentInfo: {
        duration: 'TBC',
        results: 'TBC',
        price: 'TBC',
        benefits: ['Coming soon'],
      },
    },
  },
};

const bodyProcedurePagesZhTW = {
  body: {
    hero: {
      title: '身體療程',
      subtitle: '療程',
      description: '透過我們先進的非侵入性療程，改造您的身體，專為塑形、緊緻和煥發肌膚而設計。',
    },
    treatments: [
      {
        key: 'exilis',
        name: 'Exilis',
        description: '革命性射頻技術，無需手術即可緊緻肌膚和塑造身體輪廓。',
        duration: '45-60分鐘',
        price: '從 250英鎊起',
        benefits: ['肌膚緊緻', '身體塑形', '減少橘皮組織', '非侵入性'],
        route: 'procedures/body/exilis',
      },
      {
        key: 'hifu',
        name: 'HIFU',
        description: '高強度聚焦超聲波，實現精準提拉、緊緻和持久煥發。',
        duration: '60-90分鐘',
        price: '從 735英鎊起',
        benefits: ['深層提拉', '針對下顎線和面頰', '刺激膠原蛋白', '恢復期短'],
        route: 'procedures/body/hifu',
      },
      {
        key: 'cmSlim',
        name: 'CM Slim',
        description: '先進電磁肌肉刺激技術，同時增加肌肉量和燃燒脂肪。',
        duration: '30分鐘',
        price: '從 263英鎊起',
        benefits: ['增加肌肉', '減少脂肪', '強化核心', '快速療程'],
        route: 'procedures/body/cm-slim',
      },
      {
        key: 'coolLaser',
        name: 'Cool Laser',
        description: '創新冷激光療法，改善膚質、提升膚色，並促進膠原蛋白更新。',
        duration: '45分鐘',
        price: '從 735英鎊起',
        benefits: ['改善膚質和膚色', '針對色素沉澱', '幫助改善痘疤', '恢復期短'],
        route: 'procedures/body/cool-laser',
      },
      {
        key: 'coolSculpting',
        name: 'CoolSculpting',
        description: 'FDA認證冷凍溶脂技術，冷凍並消除頑固脂肪細胞，實現持久輪廓改變。',
        duration: '35-60分鐘',
        price: '請洽詢價格',
        benefits: ['非手術減脂', '針對頑固脂肪', '永久消除脂肪細胞', '經驗證效果'],
        route: 'procedures/body/coolsculpting',
      },
      {
        key: 'unison',
        name: 'Unison',
        description: '結合射頻和超聲波技術，全面平滑橘皮組織和緊緻肌膚。',
        duration: '60分鐘',
        price: '從 735英鎊起',
        benefits: ['減少橘皮組織', '改善彈性', '舒適療程', '可客製化療程'],
        route: 'procedures/body/unison',
      },
      {
        key: 'vanquish',
        name: 'Vanquish',
        description: '非接觸式射頻能量，針對較大區域進行一致性圍度減少。',
        duration: '45分鐘',
        price: '從 735英鎊起',
        benefits: ['非接觸式療程', '大面積覆蓋', '舒適溫熱感', '漸進自然效果'],
        route: 'procedures/body/vanquish',
      },
      {
        key: 'laserHairRemoval',
        name: '激光脫毛',
        description: '專業激光脫毛，旨在減少毛髮再生，使所有部位的肌膚光滑。',
        duration: '15-60分鐘',
        price: '從 50英鎊起',
        benefits: ['長期減少', '快速療程', '精準定位', '光滑效果'],
        route: 'procedures/body/laser-hair-removal',
      },
      {
        key: 'electrolysis',
        name: '電解脫毛',
        description: 'FDA認證的永久脫毛，適用於每種毛髮和膚質類型，包括淺色毛髮。',
        duration: '15-45分鐘',
        price: '從 30英鎊起',
        benefits: ['永久脫除', '所有毛髮類型', '所有膚色', '適合小範圍'],
        route: 'procedures/body/electrolysis',
      },
    ],
  },
  bodyDetails: {
    hifu: {
      hero: {
        tagline: '非手術提拉',
        title: 'HIFU超聲刀',
        subtitle: '高強度聚焦超聲波',
        description: '體驗革命性的HIFU療程，實現非侵入性提拉和緊緻。聚焦超聲波能量刺激深層膠原蛋白生成，自然提拉、緊緻和煥發您的輪廓。',
      },
      treatmentInfo: {
        duration: '45-90分鐘',
        results: '提拉和緊緻效果在8-12週內逐漸顯現，效果可持續12-18個月',
        price: '從 735英鎊起',
        benefits: [
          '非侵入性提拉',
          '刺激膠原蛋白和彈力蛋白',
          '塑造下顎線和面頰輪廓',
          '軟化皺紋',
          '恢復期短',
          '持久效果',
        ],
      },
    },
    cmslim: {
      hero: {
        tagline: '增肌減脂',
        title: 'CM Slim塑形',
        subtitle: '身體塑形和輪廓雕塑',
        description: '透過CM Slim電磁技術改造您的體態。療程溫和地塑造您的身體，在短時間內減少脂肪同時增強和強化目標肌肉群。',
      },
      treatmentInfo: {
        duration: '30分鐘',
        results: '在持續療程2-4週後，緊緻度和線條感會逐漸顯現',
        price: '從 263英鎊起',
        benefits: [
          '透過EMS增肌',
          '幫助減少脂肪',
          '強化核心、臀部、大腿和手臂',
          '無恢復期',
          '快速療程',
          '非侵入性',
        ],
      },
    },
    coolLaser: {
      hero: {
        tagline: '先進激光煥膚',
        title: 'Cool Laser冷激光',
        subtitle: '肌膚重塑和煥發',
        description: '透過Cool Laser技術改造您的肌膚。這種創新方法改善膚質、提升光澤、針對色素沉澱，並支持膠原蛋白更新，實現全面煥發。',
      },
      treatmentInfo: {
        duration: '30-60分鐘',
        results: '立即展現光采，細緻效果在數週內持續累積',
        price: '請洽詢價格',
        benefits: [
          '減少細紋',
          '改善膚質和膚色',
          '針對色素沉澱',
          '幫助改善痘疤',
          '恢復期短',
          '刺激膠原蛋白',
        ],
      },
    },
    coolsculpting: {
      hero: {
        tagline: '非手術減脂',
        title: 'CoolSculpting冷凍溶脂',
        subtitle: 'FDA認證冷凍技術',
        description: '體驗世界領先的非侵入性減脂療程。CoolSculpting使用控制性冷卻技術消除頑固脂肪細胞，無需手術即可塑造平滑的輪廓線條。',
      },
      treatmentInfo: {
        duration: '每個循環35-60分鐘',
        results: '減脂效果在8-12週內逐漸顯現，因為身體會自然清除被處理的脂肪細胞',
        price: '請洽詢價格',
        benefits: [
          '非手術減脂',
          '針對頑固脂肪',
          '恢復期短',
          '永久消除脂肪細胞',
          '改善輪廓',
          '經臨床驗證',
        ],
      },
    },
    unison: {
      hero: {
        tagline: '橘皮組織改善',
        title: 'Unison多波長',
        subtitle: '先進橘皮組織療程',
        description: '透過Unison減少橘皮組織外觀並改善彈性。這種舒適的雙能量療程增強循環、平滑膚質，並支持各種膚色的肌膚緊緻度。',
      },
      treatmentInfo: {
        duration: '每個區域20-30分鐘',
        results: '橘皮組織外觀在療程後2-8週內逐漸改善',
        price: '請洽詢價格',
        benefits: [
          '減少橘皮組織',
          '改善彈性',
          '增強循環',
          '舒適療程',
          '適合所有膚質',
          '恢復期短',
        ],
      },
    },
    vanquish: {
      hero: {
        tagline: '非接觸式減脂',
        title: 'Vanquish射頻溶脂',
        subtitle: '非侵入性身體塑形',
        description: '體驗Vanquish非接觸式減脂。溫和均勻的加熱療程針對腹部和側腰，舒適地減少圍度，無需恢復期。',
      },
      treatmentInfo: {
        duration: '45分鐘',
        results: '在療程後4-8週內逐漸減少圍度',
        price: '請洽詢價格',
        benefits: [
          '非接觸式減脂',
          '針對腹部和側腰',
          '無恢復期',
          '均勻能量傳遞',
          '非侵入性舒適',
          '支持漸進自然效果',
        ],
      },
    },
  },
  facialDetails: {
    hydrafacialEdinburgh: {
      hero: {
        tagline: '待翻譯',
        title: 'HydraFacial愛丁堡',
        subtitle: '待翻譯',
        description: '待翻譯 - HydraFacial愛丁堡療程內容將在翻譯配額重置後新增',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['待翻譯'],
      },
    },
    hydrafacialLondon: {
      hero: {
        tagline: '待翻譯',
        title: 'HydraFacial倫敦',
        subtitle: '待翻譯',
        description: '待翻譯 - HydraFacial倫敦療程內容將在翻譯配額重置後新增',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['待翻譯'],
      },
    },
    microneedlingEdinburgh: {
      hero: {
        tagline: '即將推出',
        title: '微針愛丁堡',
        subtitle: '先進肌膚煥發',
        description: '優質微針療程即將在我們的愛丁堡診所推出。',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['即將推出'],
      },
    },
    microneedlingLondon: {
      hero: {
        tagline: '即將推出',
        title: '微針倫敦',
        subtitle: '先進肌膚煥發',
        description: '優質微針療程即將在我們的騎士橋診所推出。',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['即將推出'],
      },
    },
  },
  injectablesDetails: {
    biofillerEdinburgh: {
      hero: {
        tagline: '即將推出',
        title: 'Bio Filler愛丁堡',
        subtitle: '天然真皮填充劑',
        description: '天然生物填充劑療程即將在我們的愛丁堡診所推出。',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['即將推出'],
      },
    },
    biofillerLondon: {
      hero: {
        tagline: '即將推出',
        title: 'Bio Filler倫敦',
        subtitle: '天然真皮填充劑',
        description: '天然生物填充劑療程即將在我們的騎士橋診所推出。',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['即將推出'],
      },
    },
  },
  peelsDetails: {
    medik8Edinburgh: {
      hero: {
        tagline: '即將推出',
        title: 'Medik8煥膚愛丁堡',
        subtitle: '專業化學煥膚',
        description: 'Medik8專業煥膚療程即將在我們的愛丁堡診所推出。',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['即將推出'],
      },
    },
    medik8London: {
      hero: {
        tagline: '即將推出',
        title: 'Medik8煥膚倫敦',
        subtitle: '專業化學煥膚',
        description: 'Medik8專業煥膚療程即將在我們的騎士橋診所推出。',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['即將推出'],
      },
    },
    zoEdinburgh: {
      hero: {
        tagline: '即將推出',
        title: 'ZO煥膚愛丁堡',
        subtitle: '醫療級化學煥膚',
        description: 'ZO Skin Health煥膚療程即將在我們的愛丁堡診所推出。',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['即將推出'],
      },
    },
    zoLondon: {
      hero: {
        tagline: '即將推出',
        title: 'ZO煥膚倫敦',
        subtitle: '醫療級化學煥膚',
        description: 'ZO Skin Health煥膚療程即將在我們的騎士橋診所推出。',
      },
      treatmentInfo: {
        duration: '待確認',
        results: '待確認',
        price: '待確認',
        benefits: ['即將推出'],
      },
    },
  },
};

const bodyProcedurePagesZhCN = {
  body: {
    hero: {
      title: '身体疗程',
      subtitle: '疗程',
      description: '通过我们先进的非侵入性疗程，改造您的身体，专为塑形、紧致和焕发肌肤而设计。',
    },
    treatments: [
      {
        key: 'exilis',
        name: 'Exilis',
        description: '革命性射频技术，无需手术即可紧致肌肤和塑造身体轮廓。',
        duration: '45-60分钟',
        price: '从 250英镑起',
        benefits: ['肌肤紧致', '身体塑形', '减少橘皮组织', '非侵入性'],
        route: 'procedures/body/exilis',
      },
      {
        key: 'hifu',
        name: 'HIFU',
        description: '高强度聚焦超声波，精准提拉、紧致，效果持久焕发。',
        duration: '60-90分钟',
        price: '从 735英镑起',
        benefits: ['深层提拉', '针对下颚线和面颊', '刺激胶原蛋白', '恢复期短'],
        route: 'procedures/body/hifu',
      },
      {
        key: 'cmSlim',
        name: 'CM Slim',
        description: '先进电磁肌肉刺激，同时增肌减脂。',
        duration: '30分钟',
        price: '从 263英镑起',
        benefits: ['增肌', '减脂', '强化核心', '快速疗程'],
        route: 'procedures/body/cm-slim',
      },
      {
        key: 'coolLaser',
        name: 'Cool Laser',
        description: '创新冷激光疗程，改善肤质、提亮肤色，促进胶原蛋白更新。',
        duration: '45分钟',
        price: '从 735英镑起',
        benefits: ['改善肤质和肤色', '针对色素沉淀', '帮助改善痘疤', '恢复期短'],
        route: 'procedures/body/cool-laser',
      },
      {
        key: 'coolSculpting',
        name: 'CoolSculpting',
        description: 'FDA认证冷冻技术，冻结并消除顽固脂肪细胞，持久塑造轮廓。',
        duration: '35-60分钟',
        price: '请洽询价格',
        benefits: ['非手术减脂', '针对顽固脂肪', '永久消除脂肪细胞', '经验证效果'],
        route: 'procedures/body/coolsculpting',
      },
      {
        key: 'unison',
        name: 'Unison',
        description: '结合射频和超声波技术，全面平滑橘皮组织和紧致肌肤。',
        duration: '60分钟',
        price: '从 735英镑起',
        benefits: ['减少橘皮组织', '改善弹性', '舒适疗程', '可定制疗程'],
        route: 'procedures/body/unison',
      },
      {
        key: 'vanquish',
        name: 'Vanquish',
        description: '非接触式射频能量，针对大面积区域，持续减少围度。',
        duration: '45分钟',
        price: '从 735英镑起',
        benefits: ['非接触式疗程', '大面积覆盖', '舒适温感', '渐进自然效果'],
        route: 'procedures/body/vanquish',
      },
      {
        key: 'laserHairRemoval',
        name: '激光脱毛',
        description: '专业激光脱毛，减少毛发再生，让肌肤保持光滑。',
        duration: '15-60分钟',
        price: '从 50英镑起',
        benefits: ['长期减少', '快速疗程', '精准针对', '光滑效果'],
        route: 'procedures/body/laser-hair-removal',
      },
      {
        key: 'electrolysis',
        name: '电解脱毛',
        description: 'FDA认证永久脱毛，适用于所有毛发和肤质类型，包括浅色毛发。',
        duration: '15-45分钟',
        price: '从 30英镑起',
        benefits: ['永久脱毛', '所有毛发类型', '所有肤色', '适合小区域'],
        route: 'procedures/body/electrolysis',
      },
    ],
  },
  bodyDetails: {
    hifu: {
      hero: {
        tagline: '非手术提拉',
        title: 'HIFU超声刀',
        subtitle: '高强度聚焦超声波',
        description: '体验革命性的HIFU疗程，实现非侵入性提拉和紧致。聚焦超声波能量刺激深层胶原蛋白生成，自然提拉、紧致和焕发您的轮廓。',
      },
      treatmentInfo: {
        duration: '45-90分钟',
        results: '提拉和紧致效果在8-12周内逐渐显现，效果可持续12-18个月',
        price: '从 735英镑起',
        benefits: [
          '非侵入性提拉',
          '刺激胶原蛋白和弹力蛋白',
          '塑造下颚线和面颊轮廓',
          '软化皱纹',
          '恢复期短',
          '持久效果',
        ],
      },
    },
    cmslim: {
      hero: {
        tagline: '增肌减脂',
        title: 'CM Slim塑形',
        subtitle: '身体塑形和轮廓雕塑',
        description: '通过CM Slim电磁技术改造您的体态。疗程温和地塑造您的身体，在短时间内减少脂肪同时增强和强化目标肌肉群。',
      },
      treatmentInfo: {
        duration: '30分钟',
        results: '在持续疗程2-4周后，紧致度和线条感会逐渐显现',
        price: '从 263英镑起',
        benefits: [
          '通过EMS增肌',
          '帮助减少脂肪',
          '强化核心、臀部、大腿和手臂',
          '无恢复期',
          '快速疗程',
          '非侵入性',
        ],
      },
    },
    coolLaser: {
      hero: {
        tagline: '先进激光焕肤',
        title: 'Cool Laser冷激光',
        subtitle: '肌肤重塑和焕发',
        description: '通过Cool Laser技术改造您的肌肤。这种创新方法改善肤质、提升光泽、针对色素沉淀，并支持胶原蛋白更新，实现全面焕发。',
      },
      treatmentInfo: {
        duration: '30-60分钟',
        results: '立即展现光采，细致效果在数周内持续累积',
        price: '请洽询价格',
        benefits: [
          '减少细纹',
          '改善肤质和肤色',
          '针对色素沉淀',
          '帮助改善痘疤',
          '恢复期短',
          '刺激胶原蛋白',
        ],
      },
    },
    coolsculpting: {
      hero: {
        tagline: '非手术减脂',
        title: 'CoolSculpting冷冻溶脂',
        subtitle: 'FDA认证冷冻技术',
        description: '体验世界领先的非侵入性减脂疗程。CoolSculpting使用控制性冷却技术消除顽固脂肪细胞，无需手术即可塑造平滑的轮廓线条。',
      },
      treatmentInfo: {
        duration: '每个循环35-60分钟',
        results: '减脂效果在8-12周内逐渐显现，因为身体会自然清除被处理的脂肪细胞',
        price: '请洽询价格',
        benefits: [
          '非手术减脂',
          '针对顽固脂肪',
          '恢复期短',
          '永久消除脂肪细胞',
          '改善轮廓',
          '经临床验证',
        ],
      },
    },
    unison: {
      hero: {
        tagline: '橘皮组织改善',
        title: 'Unison多波长',
        subtitle: '先进橘皮组织疗程',
        description: '通过Unison减少橘皮组织外观并改善弹性。这种舒适的双能量疗程增强循环、平滑肤质，并支持各种肤色的肌肤紧致度。',
      },
      treatmentInfo: {
        duration: '每个区域20-30分钟',
        results: '橘皮组织外观在疗程后2-8周内逐渐改善',
        price: '请洽询价格',
        benefits: [
          '减少橘皮组织',
          '改善弹性',
          '增强循环',
          '舒适疗程',
          '适合所有肤质',
          '恢复期短',
        ],
      },
    },
    vanquish: {
      hero: {
        tagline: '非接触式减脂',
        title: 'Vanquish射频溶脂',
        subtitle: '非侵入性身体塑形',
        description: '体验Vanquish非接触式减脂。温和均匀的加热疗程针对腹部和侧腰，舒适地减少围度，无需恢复期。',
      },
      treatmentInfo: {
        duration: '45分钟',
        results: '在疗程后4-8周内逐渐减少围度',
        price: '请洽询价格',
        benefits: [
          '非接触式减脂',
          '针对腹部和侧腰',
          '无恢复期',
          '均匀能量传递',
          '非侵入性舒适',
          '支持渐进自然效果',
        ],
      },
    },
  },
  facialDetails: {
    hydrafacialEdinburgh: {
      hero: {
        tagline: '待翻译',
        title: 'HydraFacial爱丁堡',
        subtitle: '待翻译',
        description: '待翻译 - HydraFacial爱丁堡疗程内容将在翻译配额重置后新增',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['待翻译'],
      },
    },
    hydrafacialLondon: {
      hero: {
        tagline: '待翻译',
        title: 'HydraFacial伦敦',
        subtitle: '待翻译',
        description: '待翻译 - HydraFacial伦敦疗程内容将在翻译配额重置后新增',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['待翻译'],
      },
    },
    microneedlingEdinburgh: {
      hero: {
        tagline: '即将推出',
        title: '微针爱丁堡',
        subtitle: '先进肌肤焕发',
        description: '优质微针疗程即将在我们的爱丁堡诊所推出。',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['即将推出'],
      },
    },
    microneedlingLondon: {
      hero: {
        tagline: '即将推出',
        title: '微针伦敦',
        subtitle: '先进肌肤焕发',
        description: '优质微针疗程即将在我们的伦敦诊所推出。',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['即将推出'],
      },
    },
  },
  injectablesDetails: {
    biofillerEdinburgh: {
      hero: {
        tagline: '即将推出',
        title: 'Bio Filler爱丁堡',
        subtitle: '天然真皮填充剂',
        description: '天然生物填充剂疗程即将在我们的爱丁堡诊所推出。',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['即将推出'],
      },
    },
    biofillerLondon: {
      hero: {
        tagline: '即将推出',
        title: 'Bio Filler伦敦',
        subtitle: '天然真皮填充剂',
        description: '天然生物填充剂疗程即将在我们的伦敦诊所推出。',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['即将推出'],
      },
    },
  },
  peelsDetails: {
    medik8Edinburgh: {
      hero: {
        tagline: '即将推出',
        title: 'Medik8焕肤爱丁堡',
        subtitle: '专业化学焕肤',
        description: 'Medik8专业焕肤疗程即将在我们的爱丁堡诊所推出。',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['即将推出'],
      },
    },
    medik8London: {
      hero: {
        tagline: '即将推出',
        title: 'Medik8焕肤伦敦',
        subtitle: '专业化学焕肤',
        description: 'Medik8专业焕肤疗程即将在我们的伦敦诊所推出。',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['即将推出'],
      },
    },
    zoEdinburgh: {
      hero: {
        tagline: '即将推出',
        title: 'ZO焕肤爱丁堡',
        subtitle: '医学级焕肤',
        description: 'ZO医学焕肤疗程即将在我们的爱丁堡诊所推出。',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['即将推出'],
      },
    },
    zoLondon: {
      hero: {
        tagline: '即将推出',
        title: 'ZO焕肤伦敦',
        subtitle: '医学级焕肤',
        description: 'ZO医学焕肤疗程即将在我们的伦敦诊所推出。',
      },
      treatmentInfo: {
        duration: '待确认',
        results: '待确认',
        price: '待确认',
        benefits: ['即将推出'],
      },
    },
  },
};

const bodyProcedurePagesAr = {
  body: {
    hero: {
      title: 'علاجات الجسم',
      subtitle: 'العلاجات',
      description: 'حوّلي جسمك بعلاجاتنا غير الجراحية المتقدمة، المصممة خصيصًا لنحت الجسم وشده وإشراق البشرة.',
    },
    treatments: [
      {
        key: 'exilis',
        name: 'Exilis',
        description: 'تقنية التردد اللاسلكي الثورية لشد البشرة ونحت معالم الجسم بدون جراحة.',
        duration: '45-60 دقيقة',
        price: 'من 250 جنيه إسترليني',
        benefits: ['شد البشرة', 'نحت الجسم', 'تقليل السيلوليت', 'غير جراحي'],
        route: 'procedures/body/exilis',
      },
      {
        key: 'hifu',
        name: 'HIFU',
        description: 'الموجات فوق الصوتية المركزة عالية الكثافة لرفع وشد دقيقين مع نتائج مشرقة طويلة الأمد.',
        duration: '60-90 دقيقة',
        price: 'من 735 جنيه إسترليني',
        benefits: ['رفع عميق', 'يستهدف خط الفك والوجنتين', 'يحفز إنتاج الكولاجين', 'وقت نقاهة قصير'],
        route: 'procedures/body/hifu',
      },
      {
        key: 'cmSlim',
        name: 'CM Slim',
        description: 'تقنية بناء العضلات ونحت الدهون بالطاقة المغناطيسية المتقدمة.',
        duration: '30 دقيقة',
        price: 'من 300 جنيه إسترليني',
        benefits: ['بناء العضلات', 'حرق الدهون', 'تحسين لياقة العضلات', 'بدون جراحة'],
        route: 'procedures/body/cmslim',
      },
      {
        key: 'coolLaser',
        name: 'Cool Laser',
        description: 'تقنية الليزر المتقدمة لنحت الدهون وشد البشرة.',
        duration: '30-45 دقيقة',
        price: 'من 200 جنيه إسترليني',
        benefits: ['نحت الدهون بدقة', 'شد البشرة', 'غير جراحي', 'نتائج ملحوظة'],
        route: 'procedures/body/cool-laser',
      },
      {
        key: 'coolSculpting',
        name: 'CoolSculpting',
        description: 'تقنية تجميد الدهون الثورية لنحت معالم الجسم غير الجراحي.',
        duration: '35-60 دقيقة',
        price: 'من 600 جنيه إسترليني',
        benefits: ['تقليل الدهون بنسبة 20-25%', 'علاج دقيق', 'بدون جراحة', 'نتائج طبيعية المظهر'],
        route: 'procedures/body/coolsculpting',
      },
      {
        key: 'unison',
        name: 'Unison',
        description: 'تقنية التردد اللاسلكي لشد البشرة وتحسين ملمس الجلد.',
        duration: '30-45 دقيقة',
        price: 'من 250 جنيه إسترليني',
        benefits: ['شد البشرة', 'تحسين ملمس الجلد', 'تعزيز الكولاجين', 'غير جراحي'],
        route: 'procedures/body/unison',
      },
      {
        key: 'vanquish',
        name: 'Vanquish',
        description: 'تقنية نحت الدهون بالتردد اللاسلكي بدون تلامس.',
        duration: '45 دقيقة',
        price: 'من 450 جنيه إسترليني',
        benefits: ['علاج تلقائي', 'غير جراحي', 'مريح', 'تقليل محيط الخصر'],
        route: 'procedures/body/vanquish',
      },
      {
        key: 'laserHairRemoval',
        name: 'إزالة الشعر بالليزر',
        description: 'حل طويل الأمد لتقليل نمو الشعر غير المرغوب.',
        duration: '15-60 دقيقة',
        price: 'من 80 جنيه إسترليني',
        benefits: ['طويل الأمد', 'آمن لجميع أنواع البشرة', 'متعدد الاستخدامات', 'فعّال'],
        route: 'procedures/body/laser-hair-removal',
      },
      {
        key: 'electrolysis',
        name: 'التحليل الكهربائي',
        description: 'إزالة دائمة للشعر بتقنية موثوقة.',
        duration: '15-60 دقيقة',
        price: 'من 50 جنيه إسترليني',
        benefits: ['إزالة دائمة', 'آمن لجميع ألوان الشعر', 'علاج دقيق', 'معتمد من FDA'],
        route: 'procedures/body/electrolysis',
      },
    ],
  },
  bodyDetails: {
    hifu: {
      hero: {
        tagline: 'رفع غير جراحي',
        title: 'HIFU',
        subtitle: 'الموجات فوق الصوتية عالية الكثافة المركزة',
        description: 'استمتعي بعلاج HIFU الثوري للرفع والشد غير الجراحي. طاقة الموجات فوق الصوتية المركزة تحفز إنتاج الكولاجين في العمق، مما يرفع ويشد ويضفي الإشراق على معالمك بشكل طبيعي.',
      },
      treatmentInfo: {
        duration: '45-90 دقيقة',
        results: 'تظهر نتائج الرفع والشد تدريجيًا على مدى 8-12 أسبوعًا، مع نتائج تدوم 12-18 شهرًا',
        price: 'من 735 جنيه إسترليني',
        benefits: [
          'رفع غير جراحي',
          'يحفز الكولاجين والإيلاستين',
          'ينحت معالم خط الفك والوجنتين',
          'ينعّم التجاعيد',
          'وقت نقاهة قصير',
          'نتائج طويلة الأمد',
        ],
      },
    },
    cmslim: {
      hero: {
        tagline: 'بناء العضلات وحرق الدهون',
        title: 'CM Slim',
        subtitle: 'نحت الجسم بالطاقة المغناطيسية',
        description: 'تقنية CM Slim الثورية تجمع بين بناء العضلات وحرق الدهون. تستخدم طاقة مغناطيسية عالية الكثافة لتحفيز انقباضات عضلية قوية مع حرق الدهون في نفس الوقت.',
      },
      treatmentInfo: {
        duration: '30 دقيقة',
        results: 'نتائج مرئية بعد 2-4 أسابيع، مع أفضل نتائج بعد 8 جلسات',
        price: 'من 300 جنيه إسترليني',
        benefits: [
          'بناء وتعريف العضلات',
          'حرق الدهون',
          'تحسين لياقة العضلات',
          'غير جراحي',
          'دون ألم',
          'علاج سريع',
        ],
      },
    },
    coolLaser: {
      hero: {
        tagline: 'نحت الدهون بالليزر',
        title: 'Cool Laser',
        subtitle: 'نحت متقدم للدهون',
        description: 'اكتشفي تقنية Cool Laser المتقدمة لنحت الدهون. طاقة الليزر المستهدفة تحلل الخلايا الدهنية مع شد البشرة لمظهر أكثر نحافة.',
      },
      treatmentInfo: {
        duration: '30-45 دقيقة',
        results: 'نتائج تدريجية على مدى 8-12 أسبوعًا',
        price: 'من 200 جنيه إسترليني',
        benefits: [
          'نحت الدهون بدقة',
          'شد البشرة',
          'غير جراحي',
          'الحد الأدنى من وقت النقاهة',
          'نتائج مرئية',
          'آمن وفعّال',
        ],
      },
    },
    coolsculpting: {
      hero: {
        tagline: 'تجميد الدهون',
        title: 'CoolSculpting',
        subtitle: 'نحت الجسم بالتبريد',
        description: 'جرّبي CoolSculpting، تقنية نحت الدهون غير الجراحية الثورية. تجمّد وتحلل الخلايا الدهنية بدقة دون ألم لمظهر أكثر نحافة ونحتًا.',
      },
      treatmentInfo: {
        duration: '35-60 دقيقة',
        results: 'تظهر النتائج في 3 أسابيع، مع نتائج نهائية في 2-3 أشهر',
        price: 'من 600 جنيه إسترليني',
        benefits: [
          'يقلل الدهون 20-25%',
          'علاج دقيق للمناطق العنيدة',
          'غير جراحي ودون ألم',
          'نتائج طبيعية المظهر',
          'بدون وقت نقاهة',
          'معتمد من FDA',
        ],
      },
    },
    unison: {
      hero: {
        tagline: 'شد البشرة بالتردد اللاسلكي',
        title: 'Unison',
        subtitle: 'رفع وشد متقدم',
        description: 'تقنية Unison بالتردد اللاسلكي توفّر شدًا ورفعًا متقدمًا للبشرة. تحفز طبقات البشرة العميقة لزيادة إنتاج الكولاجين وتحسين مرونة الجلد.',
      },
      treatmentInfo: {
        duration: '30-45 دقيقة',
        results: 'تحسّن تدريجي على مدى 3-6 أشهر',
        price: 'من 250 جنيه إسترليني',
        benefits: [
          'شد ورفع البشرة',
          'تحسين ملمس الجلد',
          'تقليل التجاعيد',
          'تعزيز إنتاج الكولاجين',
          'غير جراحي',
          'علاج مريح',
        ],
      },
    },
    vanquish: {
      hero: {
        tagline: 'نحت الدهون بدون تلامس',
        title: 'Vanquish',
        subtitle: 'نحت الجسم بالتردد اللاسلكي',
        description: 'تقنية Vanquish الفريدة تستخدم طاقة التردد اللاسلكي بدون تلامس لنحت الدهون. تعالج مناطق أكبر بشكل مريح لتقليل محيط الخصر ونحت الجسم.',
      },
      treatmentInfo: {
        duration: '45 دقيقة',
        results: 'نتائج تدريجية على مدى 4-6 أسابيع',
        price: 'من 450 جنيه إسترليني',
        benefits: [
          'علاج تلقائي بدون تلامس',
          'علاج منطقة كبيرة',
          'غير جراحي ودون ألم',
          'مريح',
          'تقليل محيط الخصر',
          'آمن وفعّال',
        ],
      },
    },
  },
  facialDetails: {
    hydrafacialEdinburgh: {
      hero: {
        tagline: 'قيد الترجمة',
        title: 'HydraFacial إدنبرة',
        subtitle: 'قيد الترجمة',
        description: 'قيد الترجمة - سيتم إضافة محتوى علاج HydraFacial إدنبرة بعد إعادة تعيين حصة الترجمة',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قيد الترجمة'],
      },
    },
    hydrafacialLondon: {
      hero: {
        tagline: 'قيد الترجمة',
        title: 'HydraFacial لندن',
        subtitle: 'قيد الترجمة',
        description: 'قيد الترجمة - سيتم إضافة محتوى علاج HydraFacial لندن بعد إعادة تعيين حصة الترجمة',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قيد الترجمة'],
      },
    },
    microneedlingEdinburgh: {
      hero: {
        tagline: 'قريبًا',
        title: 'الوخز الدقيق إدنبرة',
        subtitle: 'تجديد البشرة المتقدم',
        description: 'علاجات الوخز الدقيق المتقدمة قريبًا في عيادتنا بإدنبرة.',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قريبًا'],
      },
    },
    microneedlingLondon: {
      hero: {
        tagline: 'قريبًا',
        title: 'الوخز الدقيق لندن',
        subtitle: 'تجديد البشرة المتقدم',
        description: 'علاجات الوخز الدقيق المتقدمة قريبًا في عيادتنا بلندن.',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قريبًا'],
      },
    },
  },
  injectablesDetails: {
    biofillerEdinburgh: {
      hero: {
        tagline: 'قريبًا',
        title: 'Bio Filler إدنبرة',
        subtitle: 'حشو أدمة طبيعية',
        description: 'علاجات الحشو البيولوجي الطبيعية قريبًا في عيادتنا بإدنبرة.',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قريبًا'],
      },
    },
    biofillerLondon: {
      hero: {
        tagline: 'قريبًا',
        title: 'Bio Filler لندن',
        subtitle: 'حشو أدمة طبيعية',
        description: 'علاجات الحشو البيولوجي الطبيعية قريبًا في عيادتنا بلندن.',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قريبًا'],
      },
    },
  },
  peelsDetails: {
    medik8Edinburgh: {
      hero: {
        tagline: 'قريبًا',
        title: 'تقشير Medik8 إدنبرة',
        subtitle: 'تقشير كيميائي احترافي',
        description: 'علاجات تقشير Medik8 الاحترافية قريبًا في عيادتنا بإدنبرة.',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قريبًا'],
      },
    },
    medik8London: {
      hero: {
        tagline: 'قريبًا',
        title: 'تقشير Medik8 لندن',
        subtitle: 'تقشير كيميائي احترافي',
        description: 'علاجات تقشير Medik8 الاحترافية قريبًا في عيادتنا بلندن.',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قريبًا'],
      },
    },
    zoEdinburgh: {
      hero: {
        tagline: 'قريبًا',
        title: 'تقشير ZO إدنبرة',
        subtitle: 'تقشير كيميائي احترافي',
        description: 'علاجات تقشير ZO الاحترافية قريبًا في عيادتنا بإدنبرة.',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قريبًا'],
      },
    },
    zoLondon: {
      hero: {
        tagline: 'قريبًا',
        title: 'تقشير ZO لندن',
        subtitle: 'تقشير كيميائي احترافي',
        description: 'علاجات تقشير ZO الاحترافية قريبًا في عيادتنا بلندن.',
      },
      treatmentInfo: {
        duration: 'قيد التأكيد',
        results: 'قيد التأكيد',
        price: 'قيد التأكيد',
        benefits: ['قريبًا'],
      },
    },
  },
}

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    londonTreatments: string;
    edinburghTreatments: string;
    locations: string;
    allLocations: string;
    london: string;
    edinburgh: string;
    doctors: string;
    contact: string;
    bookNow: string;
  };

  // Treatment Categories
  treatments: {
    body: string;
    peels: string;
    facial: string;
    injectables: string;
  };

  // Treatment Names for Menu
  treatmentNames: {
    // Body treatments
    exilis: string;
    hifu: string;
    cmSlim: string;
    coolLaser: string;
    coolSculpting: string;
    unison: string;
    vanquish: string;
    electrolysis: string;
    laserHairRemoval: string;

    // Peels
    medik8: string;
    obagi: string;
    zo: string;

    // Facial
    skinScanner: string;
    hydrafacial: string;
    hydraTite: string;
    oxygenFacial: string;
    keravive: string;
    ledFacial: string;
    microneedling: string;
    exosome: string;

    // Injectables
    antiWrinkle: string;
    carboxy: string;
    biofiller: string;
    dermalFiller: string;
    moleRemoval: string;
    polynucleotides: string;
    prp: string;
    profhilo: string;
    sclerotherapy: string;
    neofound: string;
    ivDrip: string;
    vitaminD: string;
    b12: string;
    biotin: string;
    glutathione: string;
    magnesium: string;
    allergy: string;
  };

  // Hero Section
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    cqcRegulated: string;
    doctorLed: string;
    newCustomerDiscounts: string;
    yearsOfExcellence: string;
  };

  // Common Buttons & UI
  buttons: {
    learnMore: string;
    bookNow: string;
    bookAppointment: string;
    viewAll: string;
    viewAllTreatments: string;
    getDirections: string;
    sendMessage: string;
    callNow: string;
    emailConsultation: string;
    whatsapp: string;
    viewProfile: string;
    bookWith: string;
  };

  languageSwitcher: LanguageSwitcherConfig;

  // About Page
  about: {
    pageTitle: string;
    pageSubtitle: string;
    pageDescription: string;
    makeBooking: string;
    trustedBy: string;
    ourMission: string;
    missionTitle: string;
    elevatingCare: string;
    elevatingCareDesc: string;
    yourJourney: string;
    yourJourneyDesc: string;
    whatMakesUsDifferent: string;
    whatMakesUsDifferentHighlight: string;
    trustedExperts: string;
    trustedExpertsDesc: string;
    honestAdvice: string;
    honestAdviceDesc: string;
    familyTouch: string;
    familyTouchDesc: string;
    whoWeAre: string;
    whoWeAreHighlight: string;
    whoWeAreDesc: string;
    meetOurTeam: string;
    meetOurTeamHighlight: string;
    teamSubtitle: string;
    specialistsInBeauty: string;
    insideClinic: string;
    insideClinicHighlight: string;
    gallery: string;
    trustHonestyExpertise: string;
    trustHonestyExpertiseHighlight: string;
    trustDesc: string;
    personalisedExperience: string;
    personalisedExperienceHighlight: string;
    personalisedDesc: string;
    ourCommitment: string;
    safetyInnovation: string;
    safetyInnovationHighlight: string;
    safetyDesc: string;
    visitUsToday: string;
    visitDesc: string;
    whereToFindUs: string;
    whereToFindUsHighlight: string;
    twoLocations: string;
  };

  // Team Roles
  teamRoles: {
    aestheticDoctor: string;
    seniorPractitioner: string;
    aestheticPractitioner: string;
    clientRelations: string;
  };

  // Team Members
  teamMembers: Array<{
    name: string;
    image: string;
    description: string;
    role: string;
  }>;

  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
    happyClients: string;
    yearsExperience: string;
    satisfactionRate: string;
  };

  // Client Reviews
  clientReviews: Array<{
    name: string;
    location: string;
    rating: number;
    text: string;
    treatment: string;
  }>;

  // Why Choose Us
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

  // FAQ
  faq: {
    title: string;
    visitTitle: string;
    visitDesc: string;
    callUs: string;
  };

  // Contact Page
  contact: {
    pageTitle: string;
    pageDescription: string;
    phone: string;
    email: string;
    locations: string;
    hours: string;
    callDuringHours: string;
    respondWithin24Hours: string;
    twoConvenientLocations: string;
    extendedWeekendHours: string;
    sendMessage: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    preferredLocation: string;
    selectLocation: string;
    message: string;
    messagePlaceholder: string;
    visitOurClinics: string;
    findOurLocations: string;
    findLocationsDesc: string;
    londonHarleyStreet: string;
    edinburghGeorgeStreet: string;
    needImmediate: string;
    needImmediateDesc: string;
    mondayToFriday: string;
    saturdayToSunday: string;
    primaryPhoneNumber: string;
    secondaryPhoneNumber: string;
    primaryEmail: string;
    secondaryEmail: string;
  };

  // Doctors Page
  doctors: {
    pageTitle: string;
    pageDescription: string;
    expertDoctors: string;
    yearsCombinedExperience: string;
    averageRating: string;
    clinicLocations: string;
    experience: string;
    specialties: string;
    qualifications: string;
    languages: string;
    readyToMeet: string;
    readyToMeetDesc: string;
    callToBook: string;
  };

  // Services/Treatments
  services: {
    whatCanWeHelp: string;
    injectables: string;
    injectablesDesc: string;
    skinTreatments: string;
    skinTreatmentsDesc: string;
    bodyContouring: string;
    bodyContouringDesc: string;
    skinConcerns: string;
    skinConcernsDesc: string;
    wellbeing: string;
    wellbeingDesc: string;

    // Individual treatments
    antiWrinkle: string;
    antiWrinkleDesc: string;
    dermalFillers: string;
    dermalFillersDesc: string;
    lipEnhancement: string;
    lipEnhancementDesc: string;
    cheekEnhancement: string;
    cheekEnhancementDesc: string;
    nasolabialLines: string;
    nasolabialLinesDesc: string;
    underEyeCorrection: string;
    underEyeCorrectionDesc: string;
    profhilo: string;
    profhiloDesc: string;
    b12Injections: string;
    b12InjectionsDesc: string;

    hydrafacial: string;
    hydrafacialDesc: string;
    oxygenFacial: string;
    oxygenFacialDesc: string;
    ledTherapy: string;
    ledTherapyDesc: string;
    microneedling: string;
    microneedlingDesc: string;
    chemicalPeels: string;
    chemicalPeelsDesc: string;
    prpHair: string;
    prpHairDesc: string;

    coolsculpting: string;
    coolsculptingDesc: string;
    fatFreezing: string;
    fatFreezingDesc: string;
    vanquish: string;
    vanquishDesc: string;
    exilis: string;
    exilisDesc: string;
    buttocksEnhancement: string;
    buttocksEnhancementDesc: string;

    antiAgeing: string;
    antiAgeingDesc: string;
    acneScarring: string;
    acneScarringDesc: string;
    sunDamage: string;
    sunDamageDesc: string;
    sensitiveSkin: string;
    sensitiveSkinDesc: string;
    moleRemoval: string;
    moleRemovalDesc: string;

    antiCellulite: string;
    antiCelluliteDesc: string;
    harmonyMassage: string;
    harmonyMassageDesc: string;
    mesotherapy: string;
    mesotherapyDesc: string;
    nutritionist: string;
    nutritionistDesc: string;
  };

  // Treatment Journey
  journey: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    clientSatisfaction: string;
  };

  // Footer
  footer: {
    brandDescription: string;
    services: string;
    quickLinks: string;
    aboutUs: string;
    ourTeam: string;
    londonClinic: string;
    edinburghClinic: string;
    bookTreatment: string;
    contactInfo: string;
    londonAddress: string;
    edinburghAddress: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsConditions: string;
    cookies: string;
  };

  // Common
  common: {
    years: string;
    readMore: string;
    close: string;
    select: string;
    submit: string;
    cancel: string;
    search: string;
    loading: string;
    and: string;
  };

  // Procedure Pages
  procedurePages: {
    body: {
      hero: ProcedureCategoryHero;
      treatments: ProcedureCategoryTreatment[];
    };
    bodyDetails: BodyProcedureDetails;
    facialDetails: FacialProcedureDetails;
    injectablesDetails: InjectablesProcedureDetails;
    peelsDetails: PeelsProcedureDetails;
  };

  // Get More Section
  getMore: {
    title: string;
    benefits: {
      googleReviews: string;
      referFriend: string;
      freeConsultation: string;
    };
  };

  // Personalised Approach Section
  personalisedApproach: {
    title: string;
    programs: {
      consultation: {
        title: string;
        description: string;
      };
      customization: {
        title: string;
        description: string;
      };
      treatment: {
        title: string;
        description: string;
      };
      aftercare: {
        title: string;
        description: string;
      };
    };
    details: {
      consultAssess: {
        title: string;
        description: string;
      };
      bespokePlan: {
        title: string;
        description: string;
      };
      cuttingEdge: {
        title: string;
        description: string;
      };
      resultsAftercare: {
        title: string;
        description: string;
      };
    };
    stats: {
      experienceLabel: string;
      experienceValue: string;
      priceLabel: string;
      priceValue: string;
    };
  };

  // Expert Medicine Section
  expertMedicine: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    points: {
      quality: string;
      progress: string;
      nonInvasive: string;
    };
    buttonText: string;
  };

  // Locations Section
  locations: {
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    parkingLabel: string;
    bookAppointment: string;
    getDirections: string;
    locationData: Array<{
      id: number;
      city: string;
      address: string;
      phone: string;
      hours: string;
      parking: string;
      mapEmbed: string;
      email?: string;
    }>;
  };

  // FAQ Questions Section
  faqQuestions: Array<{
    question: string;
    answer: string;
  }>;
}

// English translations
const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    londonTreatments: 'London Treatments',
    edinburghTreatments: 'Edinburgh Treatments',
    locations: 'Locations',
    allLocations: 'All Locations',
    london: 'London',
    edinburgh: 'Edinburgh',
    doctors: 'Doctors',
    contact: 'Contact',
    bookNow: 'Book Now',
  },

  treatments: {
    body: 'Body',
    peels: 'Peels',
    facial: 'Facial',
    injectables: 'Injectables',
  },

  treatmentNames: {
    exilis: 'Exilis',
    hifu: 'Hifu',
    cmSlim: 'CM Slim',
    coolLaser: 'Cool Laser',
    coolSculpting: 'CoolSculpting',
    unison: 'Unison',
    vanquish: 'Vanquish',
    electrolysis: 'Electrolysis',
    laserHairRemoval: 'Laser Hair Removal',
    medik8: 'Medik8',
    obagi: 'Obagi',
    zo: 'ZO',
    skinScanner: 'Skin Scanner',
    hydrafacial: 'Hydrafacial',
    hydraTite: 'HydraTite',
    oxygenFacial: 'Oxygen Facial',
    keravive: 'Keravive',
    ledFacial: 'LED Facial',
    microneedling: 'Microneedling',
    exosome: 'Exosome',
    antiWrinkle: 'Anti Wrinkle',
    carboxy: 'Carboxy',
    biofiller: 'Biofiller',
    dermalFiller: 'Dermal Filler',
    moleRemoval: 'Mole Removal',
    polynucleotides: 'Polynucleotides',
    prp: 'PRP',
    profhilo: 'Profhilo',
    sclerotherapy: 'Sclerotherapy',
    neofound: 'Neofound',
    ivDrip: 'IV Drip',
    vitaminD: 'Vitamin D',
    b12: 'B12',
    biotin: 'Biotin',
    glutathione: 'Glutathione',
    magnesium: 'Magnesium',
    allergy: 'Allergy',
  },

  hero: {
    title: 'Let Your Natural Beauty Shine at a',
    titleHighlight: 'World-Class Aesthetic Clinic',
    subtitle: 'Refine. Rejuvenate. Radiate confidence.',
    description: 'Here at Beyond, we combine advanced aesthetic medicine with a luxurious, calming experience, helping you achieve natural, beautiful results. Our expert doctors and beauticians use the latest techniques and treatments to enhance your beauty - discreetly, elegantly, and effectively.',
    cqcRegulated: 'CQC & HIS Regulated',
    doctorLed: 'Doctor-led Treatment',
    newCustomerDiscounts: 'New Customer Discounts',
    yearsOfExcellence: '10 Years of Excellence',
  },

  buttons: {
    learnMore: 'Learn More',
    bookNow: 'Book Now',
    bookAppointment: 'Book Appointment',
    viewAll: 'View All',
    viewAllTreatments: 'View All Treatments',
    getDirections: 'Get Directions',
    sendMessage: 'Send Message',
    callNow: 'Call Now',
    emailConsultation: 'Email Consultation',
    whatsapp: 'WhatsApp',
    viewProfile: 'View Profile',
    bookWith: 'Book with',
  },

  languageSwitcher: {
    selectLabel: 'Select language',
    languages: {
      en: { label: 'English', nativeName: 'English' },
      'zh-CN': { label: 'Simplified Chinese', nativeName: '简体中文' },
      'zh-TW': { label: 'Traditional Chinese', nativeName: '繁體中文' },
      ar: { label: 'Arabic', nativeName: 'العربية' },
    },
  },

  about: {
    pageTitle: 'Our Vision, Mission,',
    pageSubtitle: 'Learn more about Beyond Aesthetic Clinic',
    pageDescription: 'Here at Beyond Aesthetic Clinic, we go beyond expectations to deliver advanced aesthetic treatments that enhance your natural beauty. With a patient-first approach, expert practitioners, and cutting-edge technology, we create a bespoke experience tailored to your unique goals, ensuring exceptional results every time.',
    makeBooking: 'Make a Booking Today',
    trustedBy: 'Tried and Trusted By Top Aesthetic Professionals',
    ourMission: 'OUR MISSION',
    missionTitle: 'Going Above & Beyond In Medical Aesthetics',
    elevatingCare: 'Elevating Aesthetic Care',
    elevatingCareDesc: 'We believe that beauty should be approached with expertise, precision, and care. Our highly skilled team provides safe, effective, and scientifically backed treatments, ensuring that every patient receives world-class results in a welcoming, luxurious environment.',
    yourJourney: 'Your Journey, Our Expertise',
    yourJourneyDesc: 'Your journey is just as important as the outcome. Through detailed consultations, personalised treatment plans, and industry-leading techniques, we help you achieve your desired look while maintaining a natural and refreshed appearance.',
    whatMakesUsDifferent: 'What Makes Us ',
    whatMakesUsDifferentHighlight: 'Different?',
    trustedExperts: 'Trusted Experts in Aesthetic Medicine',
    trustedExpertsDesc: 'Our team of qualified doctors and practitioners deliver safe, effective treatments backed by science.',
    honestAdvice: 'Honest Advice, Real Results',
    honestAdviceDesc: 'We provide transparent consultations and realistic expectations, ensuring you make informed decisions.',
    familyTouch: 'Aesthetic Excellence with a Family Touch',
    familyTouchDesc: 'We combine professional expertise with a warm, welcoming approach that makes you feel at home.',
    whoWeAre: 'Who We ',
    whoWeAreHighlight: 'Are',
    whoWeAreDesc: 'With locations in London and Edinburgh, since 2006, Beyond Aesthetic Clinic has established itself as a leader in medical aesthetics. Our expert team provides facial and body treatments designed to enhance your confidence and well-being. We prioritise safety, innovation, and personalised care, ensuring that every treatment plan is tailored to meet the unique needs of our patients. From skin rejuvenation to body contouring, we are committed to delivering exceptional results.',
    meetOurTeam: 'Meet Our ',
    meetOurTeamHighlight: 'Team',
    teamSubtitle: 'Behind every exceptional result is an expert you can trust. Our handpicked team of aesthetic specialists includes leading doctors, nurses, and advanced practitioners dedicated to tailoring treatments to your needs.',
    specialistsInBeauty: 'SPECIALISTS IN BEAUTY',
    insideClinic: 'Inside ',
    insideClinicHighlight: 'Beyond Aesthetic Clinic',
    gallery: 'GALLERY',
    trustHonestyExpertise: 'Trust, Honesty, ',
    trustHonestyExpertiseHighlight: 'Expertise',
    trustDesc: 'We are committed to delivering outstanding aesthetic results with integrity and professionalism. Our approach is built on trust, honesty, and clinical excellence, ensuring that every patient receives treatments tailored to their unique needs.',
    personalisedExperience: 'A Truly ',
    personalisedExperienceHighlight: 'Personalised Experience',
    personalisedDesc: 'Every individual is unique, and so is our approach to aesthetic care. We take the time to understand your goals, crafting a bespoke treatment plan that enhances your natural beauty while prioritising long-term skin health.',
    ourCommitment: 'OUR COMMITMENT',
    safetyInnovation: 'Safety & ',
    safetyInnovationHighlight: 'Innovation',
    safetyDesc: 'Patient safety is always our top priority. We use only the most advanced, clinically approved technologies and techniques to ensure every treatment is safe, effective, and tailored to your needs. Our team continually undergoes training to stay ahead in the industry.',
    visitUsToday: 'Visit Us In London Or Edinburgh Today',
    visitDesc: 'Experience expert aesthetic care in a luxurious, calming setting. Visit our London or Edinburgh clinics and start your beauty journey today.',
    whereToFindUs: 'Where To ',
    whereToFindUsHighlight: 'Find Us',
    twoLocations: 'TWO LOCATIONS – ONE PREMIUM AESTHETIC BRAND',
  },

  teamRoles: {
    aestheticDoctor: 'Aesthetic Doctor',
    seniorPractitioner: 'Senior Aesthetic Practitioner',
    aestheticPractitioner: 'Aesthetic Practitioner',
    clientRelations: 'Client Relations',
  },

  teamMembers: [
    {
      name: 'Dr Azadeh Manesh',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Azadeh-Manesh.png',
      description: 'Dr Azadeh Manesh specialises in non‑surgical aesthetics, offering natural‑looking results and holistic skin consultations tailored to individual needs.',
      role: 'Aesthetic Doctor'
    },
    {
      name: 'Dr Sana Sadiq',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/DR-SANA-SADIQ.jpeg',
      description: 'Dr Sana Sadiq focuses on full‑face beautification, combining corrective and preventive treatments for stunning, natural results.',
      role: 'Aesthetic Doctor'
    },
    {
      name: 'Marianne',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/MARIANNE.jpg',
      description: 'Marianne focuses on natural enhancements and subtle tweaks to highlight your facial contours.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Ewelina Roguska',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ewelina-Roguska-1.png',
      description: 'Ewelina has 9+ years of experience and a passion for treating acne and post‑acne skin with advanced skin therapies.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Louise Walker',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Louise-Walker-1.jpg',
      description: 'Louise customises skin treatments using medical‑grade devices and advanced skincare techniques with 18+ years in aesthetics.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Joanna Pullar',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Joanna-Pullar-1.webp',
      description: 'Joanna is a Senior Aesthetic Practitioner with expertise in electrolysis and advanced skin treatments.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Nazish Aman',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Nazish-Aman.jpg',
      description: 'With 11+ years in aesthetics, Naz assists front‑of‑house operations and provides tailored skincare treatments.',
      role: 'Aesthetic Practitioner'
    },
    {
      name: 'Reza',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Reza.png',
      description: 'Known for his five‑star service, Reza ensures clients feel comfortable while delivering expert aesthetic advice.',
      role: 'Aesthetic Practitioner'
    },
    {
      name: 'Leanne',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Leanne.jpg',
      description: 'Leanne has 6+ years of experience in customer service, providing a professional and welcoming presence at Beyond Aesthetic Clinic.',
      role: 'Client Relations'
    },
    {
      name: 'Ruxi',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ruxi.png',
      description: 'With over a decade in aesthetics, Ruxi specialises in modern skincare treatments and practitioner training.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Claire Hill',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Claire-Hill.png',
      description: 'A Senior Aesthetician with 14+ years of experience, Claire specialises in laser hair and tattoo removal treatments.',
      role: 'Senior Aesthetic Practitioner'
    }
  ],

  testimonials: {
    title: 'What Our Clients |Say',
    subtitle: 'Don\'t just take our word for it. Hear from our satisfied clients who have experienced the Beyond Aesthetic Clinic difference across our London and Edinburgh clinics.',
    happyClients: 'Happy Clients',
    yearsExperience: 'Years Experience',
    satisfactionRate: 'Satisfaction Rate',
  },

  clientReviews: [
    {
      name: 'Sarah Mitchell',
      location: 'London',
      rating: 5,
      text: 'Dr Azadeh is absolutely amazing! I went for anti-wrinkle treatment and the results exceeded my expectations. The clinic is beautiful and the staff are so professional and welcoming.',
      treatment: 'Anti-Wrinkle Treatment'
    },
    {
      name: 'Emma Thompson',
      location: 'Edinburgh',
      rating: 5,
      text: 'I had the HydraFacial treatment and my skin has never looked better. Louise was fantastic - she explained everything and made me feel completely at ease throughout.',
      treatment: 'HydraFacial'
    },
    {
      name: 'James Wilson',
      location: 'London',
      rating: 5,
      text: 'CoolSculpting at Beyond Aesthetic Clinic was life-changing. The team was incredibly professional and the results speak for themselves. Highly recommend!',
      treatment: 'CoolSculpting'
    },
    {
      name: 'Charlotte Davies',
      location: 'Edinburgh',
      rating: 5,
      text: 'Dr Sana is truly gifted. My dermal filler treatment looks so natural - exactly what I wanted. The whole experience was comfortable and professional.',
      treatment: 'Dermal Fillers'
    },
    {
      name: 'Michael Brown',
      location: 'London',
      rating: 5,
      text: 'Outstanding service from start to finish. The consultation was thorough and the Profhilo treatment has given me the skin confidence I was looking for.',
      treatment: 'Profhilo'
    },
    {
      name: 'Lucy Roberts',
      location: 'Edinburgh',
      rating: 5,
      text: 'The best aesthetic clinic I have ever been to. Ewelina treated my acne scarring with microneedling and the improvement is incredible. Thank you!',
      treatment: 'Microneedling'
    }
  ],

  whyChooseUs: {
    title: 'Aesthetic Excellence Redefined|It\'s Who We Are',
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
    premiumLocations: 'Premium Locations',
  },

  faq: {
    title: 'Beyond Aesthetic Clinic Medical Aesthetic Clinic |FAQs',
    visitTitle: 'Visit Our Aesthetic Clinic In London Or Edinburgh Today',
    visitDesc: 'Experience expert aesthetic care in a luxurious, calming setting. Visit our London or Edinburgh clinics and start your beauty journey today.',
    callUs: 'Call Us: 020 7201 8595',
  },

  contact: {
    pageTitle: 'Contact |Us',
    pageDescription: 'Get in touch with our team to book your consultation or learn more about our treatments.',
    phone: 'Phone',
    email: 'Email',
    locations: 'Locations',
    hours: 'Hours',
    callDuringHours: 'Call us during business hours',
    respondWithin24Hours: 'We respond within 24 hours',
    twoConvenientLocations: 'Two convenient locations',
    extendedWeekendHours: 'Extended weekend hours',
    sendMessage: 'Send us a |Message',
    firstName: 'First Name',
    lastName: 'Last Name',
    emailAddress: 'Email',
    phoneNumber: 'Phone',
    preferredLocation: 'Preferred Location',
    selectLocation: 'Select Location',
    message: 'Message',
    messagePlaceholder: 'Tell us about your treatment interests...',
    visitOurClinics: 'Visit Our |Clinics',
    findOurLocations: 'Find Our |Locations',
    findLocationsDesc: 'Easily locate our clinics in London and Edinburgh using the interactive maps below.',
    londonHarleyStreet: 'London - Harley Street',
    edinburghGeorgeStreet: 'Edinburgh - George Street',
    needImmediate: 'Need Immediate |Assistance?',
    needImmediateDesc: 'Contact us directly for urgent inquiries or last-minute bookings.',
    mondayToFriday: 'Mon-Fri: 9:00 AM - 8:00 PM',
    saturdayToSunday: 'Sat-Sun: 10:00 AM - 6:00 PM',
    primaryPhoneNumber: '+44 (20) 7123 4567',
    secondaryPhoneNumber: '+44 (131) 456 7890',
    primaryEmail: 'info@magispa.co.uk',
    secondaryEmail: 'bookings@magispa.co.uk',
  },

  doctors: {
    pageTitle: 'Meet Our Doctors',
    pageDescription: 'Our team of highly qualified medical professionals brings years of experience and expertise to deliver exceptional aesthetic treatments with the highest standards of care.',
    expertDoctors: 'Expert Doctors',
    yearsCombinedExperience: 'Years Combined Experience',
    averageRating: 'Average Rating',
    clinicLocations: 'Clinic Locations',
    experience: 'experience',
    specialties: 'Specialties',
    qualifications: 'Qualifications',
    languages: 'Languages',
    readyToMeet: 'Ready to Meet Our Team?',
    readyToMeetDesc: 'Book a consultation with one of our expert doctors and start your aesthetic journey today.',
    callToBook: 'Call to Book',
  },

  services: {
    whatCanWeHelp: 'What Can We |Help With?',
    injectables: 'Injectables',
    injectablesDesc: 'Expert anti-aging and enhancement treatments',
    skinTreatments: 'Skin Treatments',
    skinTreatmentsDesc: 'Advanced therapies for radiant, healthy skin',
    bodyContouring: 'Body Contouring & Fat Reduction',
    bodyContouringDesc: 'Non-surgical body sculpting solutions',
    skinConcerns: 'Skin Concerns',
    skinConcernsDesc: 'Targeted treatments for specific skin issues',
    wellbeing: 'Wellbeing & Specialist Therapies',
    wellbeingDesc: 'Holistic treatments for mind and body wellness',

    antiWrinkle: 'Anti-Wrinkle Treatment',
    antiWrinkleDesc: 'Reduce fine lines and wrinkles for a youthful appearance',
    dermalFillers: 'Dermal & Facial Fillers',
    dermalFillersDesc: 'Restore volume and enhance facial contours naturally',
    lipEnhancement: 'Lip Enhancement',
    lipEnhancementDesc: 'Achieve fuller, more defined lips with expert precision',
    cheekEnhancement: 'Cheek Enhancement',
    cheekEnhancementDesc: 'Add volume and definition to enhance facial structure',
    nasolabialLines: 'Nasolabial Lines',
    nasolabialLinesDesc: 'Smooth smile lines for a refreshed appearance',
    underEyeCorrection: 'Under Eye Correction',
    underEyeCorrectionDesc: 'Address dark circles and under-eye concerns',
    profhilo: 'Profhilo',
    profhiloDesc: 'Bio-remodelling treatment for skin hydration and firmness',
    b12Injections: 'B12 Injections',
    b12InjectionsDesc: 'Boost energy levels and overall wellbeing',

    hydrafacial: 'HydraFacial',
    hydrafacialDesc: 'Deep cleansing and hydrating facial treatment',
    oxygenFacial: 'Oxygen Facial',
    oxygenFacialDesc: 'Revitalizing treatment for glowing skin',
    ledTherapy: 'LED Light Therapy',
    ledTherapyDesc: 'Advanced light therapy for skin rejuvenation',
    microneedling: 'Microneedling',
    microneedlingDesc: 'Stimulate collagen production for smoother skin',
    chemicalPeels: 'Chemical Peels',
    chemicalPeelsDesc: 'Exfoliate and renew skin texture and tone',
    prpHair: 'PRP for Hair Growth',
    prpHairDesc: 'Platelet-rich plasma therapy for hair restoration',

    coolsculpting: 'CoolSculpting',
    coolsculptingDesc: 'FDA-approved fat freezing technology',
    fatFreezing: 'Fat Freezing',
    fatFreezingDesc: 'Non-invasive fat reduction treatment',
    vanquish: 'Vanquish',
    vanquishDesc: 'Radiofrequency body contouring',
    exilis: 'Exilis Elite Body',
    exilisDesc: 'Skin tightening and fat reduction combined',
    buttocksEnhancement: 'Buttocks Enhancement',
    buttocksEnhancementDesc: 'Non-surgical buttock lifting and contouring',

    antiAgeing: 'Anti-Ageing Treatments',
    antiAgeingDesc: 'Comprehensive approach to age-related skin concerns',
    acneScarring: 'Acne and Scarring',
    acneScarringDesc: 'Effective treatments for acne and post-acne scarring',
    sunDamage: 'Sun Damage and Pigmentation',
    sunDamageDesc: 'Address hyperpigmentation and sun damage',
    sensitiveSkin: 'Sensitive Skin Treatments',
    sensitiveSkinDesc: 'Gentle therapies for reactive skin types',
    moleRemoval: 'Mole & Skin Tag Removal',
    moleRemovalDesc: 'Safe removal of unwanted skin growths',

    antiCellulite: 'Anti-Cellulite Treatment',
    antiCelluliteDesc: 'Reduce cellulite appearance with Alidya injections',
    harmonyMassage: 'The Harmony Massage',
    harmonyMassageDesc: 'Relaxing therapeutic massage for stress relief',
    mesotherapy: 'Mesotherapy',
    mesotherapyDesc: 'Targeted nutrient injections for skin health',
    nutritionist: 'Nutritionist Consultation',
    nutritionistDesc: 'Expert advice on skin health and nutrition',
  },

  journey: {
    title: 'Your Transformation Journey',
    subtitle: 'A simple and efficient process for remarkable results',
    step1Title: 'Initial Consultation',
    step1Desc: 'Complete skin assessment and personalized treatment plan development',
    step2Title: 'Treatment Preparation',
    step2Desc: 'Cleansing and preparing the skin for the selected procedure',
    step3Title: 'Treatment Application',
    step3Desc: 'Performing procedures with state-of-the-art equipment',
    step4Title: 'Post-Treatment Care',
    step4Desc: 'Recommendations for maintaining results and follow-up schedule',
    clientSatisfaction: 'Client Satisfaction',
  },

  footer: {
    brandDescription: 'Aesthetic medicine clinic dedicated to your beauty and skin health. Advanced technology, remarkable results.',
    services: 'Services',
    quickLinks: 'Quick Links',
    aboutUs: 'About Us',
    ourTeam: 'Our Team',
    londonClinic: 'London Clinic',
    edinburghClinic: 'Edinburgh Clinic',
    bookTreatment: 'Book Treatment',
    contactInfo: 'Contact',
    londonAddress: 'London: 123 Harley Street, W1G 6AX',
    edinburghAddress: 'Edinburgh: 45 Queen Street, EH2 3NH',
    allRightsReserved: '© 2024 Aesthetic Lab. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    cookies: 'Cookies',
  },

  common: {
    years: 'Years',
    readMore: 'Read More',
    close: 'Close',
    select: 'Select',
    submit: 'Submit',
    cancel: 'Cancel',
    search: 'Search',
    loading: 'Loading...',
    and: 'and',
  },

  procedurePages: bodyProcedurePagesEn,

  getMore: {
    title: 'Get More |With Beyond',
    benefits: {
      googleReviews: '4.7 Stars Across 110+ Google Reviews',
      referFriend: 'Refer a Friend Discounts',
      freeConsultation: 'Optional Free Skin Consultation with Every Appointment',
    },
  },

  personalisedApproach: {
    title: 'A Personalised Approach |to Aesthetics',
    programs: {
      consultation: {
        title: 'Consultation',
        description: 'Personalized assessment by our medical experts',
      },
      customization: {
        title: 'Customization',
        description: 'Tailored treatment plan for your goals',
      },
      treatment: {
        title: 'Treatment',
        description: 'Safe, advanced procedures for natural results',
      },
      aftercare: {
        title: 'Aftercare',
        description: 'Ongoing support for lasting beauty',
      },
    },
    details: {
      consultAssess: {
        title: '1. Consult & Assess',
        description: 'We offer a personalised consultation to assess your goals and recommend the best skin, body, or facial aesthetic treatments for you. Through initial consulting and assessment, our expert team ensures every treatment enhances your natural beauty while delivering real, noticeable results.',
      },
      bespokePlan: {
        title: '2. Bespoke Treatment Plan',
        description: 'Following your consultation, we create a tailored treatment plan designed around your unique treatment preferences, lifestyle, and goals. Whether you\'re looking to refresh your skin, sculpt your body, or achieve subtle facial enhancements, your plan is personalised to deliver safe, effective, and lasting results.',
      },
      cuttingEdge: {
        title: '3. Cutting Edge Treatments',
        description: 'We combine advanced techniques with the latest aesthetic technology to ensure your treatments are both innovative and results-driven. From Carboxytherapy and Biofiller to HydraFacial and Microneedling with Exosomes, we stay on the cutting edge of aesthetics to ensure you always get the best treatment options. Our clinically proven injectables to medical-grade skin therapies mean every procedure is carried out with precision, safety, and artistry by our highly trained professionals.',
      },
      resultsAftercare: {
        title: '4. Results & Aftercare',
        description: 'Your journey doesn\'t end after treatment. We provide ongoing support and aftercare to maximise and maintain your results. Our team offers expert guidance on recovery, skincare, and follow-up sessions, ensuring you feel confident, comfortable, and fully supported at every stage.',
      },
    },
    stats: {
      experienceLabel: 'Experience',
      experienceValue: '15+ Years',
      priceLabel: 'Treatments Start From',
      priceValue: '£200',
    },
  },

  expertMedicine: {
    title: 'We Only Offer Expert',
    titleHighlight: 'Aesthetic Medicine & Beauty',
    subtitle: 'At Beyond Aesthetic Clinic, your care is always led by experts who combine medical knowledge with a passion for excellence. We believe in safe, effective and natural results through expert treatments and the latest aesthetic care.',
    points: {
      quality: 'We never compromise on quality, using only trusted products, proven technologies, and advanced techniques to achieve the best possible beauty results.',
      progress: 'We\'re constantly progressing. Our team trains in the latest aesthetic techniques and international standards of care, while we also invest in brand new devices and proven technologies to ensure treatments are safe, comfortable and results driven.',
      nonInvasive: 'We specialise in non-invasive, non-surgical aesthetic treatments. This means low risk, no-downtime treatments that provide immediate and long-lasting results.',
    },
    buttonText: 'Meet the Team',
  },

  locations: {
    title: 'Our |Locations',
    subtitle: 'Visit our premium clinics in London and Edinburgh for expert aesthetic treatments',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    hoursLabel: 'Hours',
    parkingLabel: 'Parking',
    bookAppointment: 'Book Appointment',
    getDirections: 'Get Directions',
    locationData: [
      {
        id: 1,
        city: 'London',
        address: 'Premium Location, Central London',
        phone: '+44 (20) 7123 4567',
        email: 'london@magispa.co.uk',
        hours: 'Monday - Friday: 9:00 - 18:00\nSaturday: 9:00 - 17:00\nSunday: Closed',
        parking: 'Street parking available',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.628183492772!2d-0.1624627224548056!3d51.50169031111937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605397680ad09%3A0x68bb8e672eb273a1!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20MediSpa!5e0!3m2!1sen!2sza!4v1758541805476!5m2!1sen!2sza',
      },
      {
        id: 2,
        city: 'Edinburgh',
        address: 'Premium Location, Edinburgh Centre',
        phone: '+44 (131) 123 4567',
        email: 'edinburgh@magispa.co.uk',
        hours: 'Monday - Friday: 9:00 - 18:00\nSaturday: 9:00 - 16:00\nSunday: Closed',
        parking: 'Nearby parking available',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.678446141864!2d-3.194440922303394!3d55.954944976402295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac0abf29af5%3A0xe8c125ae82237941!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20Medispa!5e0!3m2!1sen!2sza!4v1758541860806!5m2!1sen!2sza',
      },
    ],
  },

  faqQuestions: [
    {
      question: 'What treatments does Beyond Aesthetic Clinic offer?',
      answer: 'Beyond Aesthetic Clinic provides a wide range of aesthetic medicine treatments, including dermal fillers, laser treatments, and body contouring. Whether you\'re looking to reduce wrinkles, enhance your natural beauty, or achieve a sculpted silhouette, our expert team tailors every treatment to you.',
    },
    {
      question: 'Are your treatments suitable for all skin types?',
      answer: 'Yes. Our medical aesthetics experts specialise in treating a variety of skin concerns, from dry skin to dark spots and fine lines. We personalise every skin treatment to your unique needs, ensuring the best possible results while prioritising your skin health.',
    },
    {
      question: 'What is body contouring, and how does it work?',
      answer: 'Body contouring helps sculpt and refine your figure by reducing stubborn fat and enhancing definition. Our expert team, led by experienced professionals, offers non-surgical treatments and more advanced reshaping procedures like liposuction.',
    },
    {
      question: 'How long do aesthetic treatments take?',
      answer: 'Most treatments take just 30-90 minutes, making them easy to fit into your schedule. Note that some procedures may require multiple sessions for optimal, long-lasting results.',
    },
    {
      question: 'Is there any downtime after treatment?',
      answer: 'Many of our aesthetic clinic treatments require minimal to no downtime. Many clients return to daily activities immediately, though treatments like laser procedures or injectables may cause slight redness or swelling for a short time.',
    },
    {
      question: 'How do I know which treatment is right for me?',
      answer: 'We offer a personalised consultation to assess your goals and recommend the best skin, body, or facial aesthetic treatments for you. Our expert team ensures every treatment enhances your natural beauty while delivering real, noticeable results.',
    },
    {
      question: 'Can I combine treatments for a complete transformation?',
      answer: 'Absolutely. Many clients choose to combine facial aesthetics, body treatments, and medical aesthetics for a comprehensive, tailored approach. Whether you want to smooth wrinkles, restore skin health, or refine your appearance, we create bespoke treatment plans to suit your needs.',
    },
    {
      question: 'How can I book a consultation?',
      answer: 'Booking is simple. Contact us now, call us at 020 7201 8595, or visit our aesthetic clinic in London or Edinburgh to start your beauty journey today. Our team is here to guide you toward real results with confidence.',
    },
  ],
};

// Simplified Chinese translations
const zhCN: Translations = {
  nav: {
    home: '首页',
    about: '关于我们',
    londonTreatments: '伦敦治疗项目',
    edinburghTreatments: '爱丁堡治疗项目',
    locations: '诊所位置',
    allLocations: '所有诊所',
    london: '伦敦',
    edinburgh: '爱丁堡',
    doctors: '医生团队',
    contact: '联系我们',
    bookNow: '立即预约',
  },

  treatments: {
    body: '身体护理',
    peels: '焕肤疗程',
    facial: '面部护理',
    injectables: '注射美容',
  },

  treatmentNames: {
    exilis: 'Exilis紧肤',
    hifu: 'HIFU超声刀',
    cmSlim: 'CM Slim塑形',
    coolLaser: 'Cool Laser冷激光',
    coolSculpting: 'CoolSculpting冷冻溶脂',
    unison: 'Unison多波长',
    vanquish: 'Vanquish射频溶脂',
    electrolysis: '电解脱毛',
    laserHairRemoval: '激光脱毛',
    medik8: 'Medik8焕肤',
    obagi: 'Obagi奥贝琪',
    zo: 'ZO焕肤',
    skinScanner: '皮肤扫描',
    hydrafacial: 'Hydrafacial水飞梭',
    hydraTite: 'HydraTite水光紧致',
    oxygenFacial: '氧气面部护理',
    keravive: 'Keravive头皮护理',
    ledFacial: 'LED光疗面部',
    microneedling: '微针美容',
    exosome: 'Exosome外泌体',
    antiWrinkle: '抗皱针',
    carboxy: 'Carboxy二氧化碳注射',
    biofiller: 'Biofiller生物填充',
    dermalFiller: '真皮填充剂',
    moleRemoval: '痣移除',
    polynucleotides: 'Polynucleotides多聚核苷酸',
    prp: 'PRP自体血清',
    profhilo: 'Profhilo逆时针',
    sclerotherapy: '硬化疗法',
    neofound: 'Neofound新生肽',
    ivDrip: 'IV静脉滴注',
    vitaminD: '维生素D',
    b12: 'B12维生素',
    biotin: '生物素',
    glutathione: '谷胱甘肽',
    magnesium: '镁',
    allergy: '过敏治疗',
  },

  hero: {
    title: '让您的自然美在',
    titleHighlight: '世界级美容诊所绽放光彩',
    subtitle: '精致。焕颜。自信绽放。',
    description: '在Beyond美容诊所，我们将先进的美容医学与奢华舒适的体验相结合，帮助您实现自然美丽的效果。我们的专家医生和美容师采用最新的技术和疗法，以谨慎、优雅、有效的方式提升您的美丽。',
    cqcRegulated: 'CQC & HIS 监管认证',
    doctorLed: '医生主导治疗',
    newCustomerDiscounts: '新客户优惠',
    yearsOfExcellence: '10年卓越服务',
  },

  buttons: {
    learnMore: '了解更多',
    bookNow: '立即预约',
    bookAppointment: '预约咨询',
    viewAll: '查看全部',
    viewAllTreatments: '查看所有疗程',
    getDirections: '获取路线',
    sendMessage: '发送消息',
    callNow: '立即致电',
    emailConsultation: '邮件咨询',
    whatsapp: 'WhatsApp',
    viewProfile: '查看简介',
    bookWith: '预约',
  },

  languageSwitcher: {
    selectLabel: '选择语言',
    languages: {
      en: { label: '英语', nativeName: 'English' },
      'zh-CN': { label: '简体中文', nativeName: '简体中文' },
      'zh-TW': { label: '繁體中文', nativeName: '繁體中文' },
      ar: { label: '阿拉伯语', nativeName: 'العربية' },
    },
  },

  about: {
    pageTitle: '我们的愿景、使命',
    pageSubtitle: '深入了解Beyond美容诊所',
    pageDescription: '在Beyond美容诊所，我们超越期望，提供先进的美容治疗，提升您的自然美。凭借以患者为先的理念、专业医师和尖端技术，我们为您量身定制独特的体验，确保每次都能获得卓越的效果。',
    makeBooking: '立即预约',
    trustedBy: '受顶级美容专业人士信赖',
    ourMission: '我们的使命',
    missionTitle: '在医学美容领域超越卓越',
    elevatingCare: '提升美容护理水平',
    elevatingCareDesc: '我们相信，美容应该以专业、精准和关怀的方式进行。我们高度专业的团队提供安全、有效、科学支持的治疗，确保每位患者在温馨奢华的环境中获得世界级的效果。',
    yourJourney: '您的旅程，我们的专业',
    yourJourneyDesc: '您的美容旅程与最终结果同样重要。通过详细的咨询、个性化的治疗方案和行业领先的技术，我们帮助您实现理想的外观，同时保持自然清新的容貌。',
    whatMakesUsDifferent: '我们的与众不同之',
    whatMakesUsDifferentHighlight: '处',
    trustedExperts: '值得信赖的美容医学专家',
    trustedExpertsDesc: '我们的专业医生和执业人员团队提供有科学支持的安全有效治疗。',
    honestAdvice: '诚实建议，真实效果',
    honestAdviceDesc: '我们提供透明的咨询和切合实际的期望，确保您做出明智的决定。',
    familyTouch: '专业卓越与家庭温暖',
    familyTouchDesc: '我们将专业技能与温暖友好的方式相结合，让您感到宾至如归。',
    whoWeAre: '关于我',
    whoWeAreHighlight: '们',
    whoWeAreDesc: '自2006年以来，Beyond美容诊所在伦敦和爱丁堡设有诊所，已成为医学美容领域的领导者。我们的专家团队提供面部和身体治疗，旨在增强您的自信和幸福感。我们优先考虑安全、创新和个性化护理，确保每个治疗方案都能满足患者的独特需求。从肌肤焕颜到身体塑形，我们致力于提供卓越的效果。',
    meetOurTeam: '认识我们的团',
    meetOurTeamHighlight: '队',
    teamSubtitle: '每一个卓越成果的背后都有值得信赖的专家。我们精心挑选的美容专家团队包括顶尖医生、护士和高级从业者，致力于为您量身定制治疗方案。',
    specialistsInBeauty: '美容专家',
    insideClinic: 'Beyond美容诊所内',
    insideClinicHighlight: '部',
    gallery: '画廊',
    trustHonestyExpertise: '信任、诚实、专',
    trustHonestyExpertiseHighlight: '业',
    trustDesc: '我们致力于以诚信和专业精神提供卓越的美容效果。我们的方法建立在信任、诚实和临床卓越的基础上，确保每位患者都能获得针对其独特需求量身定制的治疗。',
    personalisedExperience: '真正的个性化体',
    personalisedExperienceHighlight: '验',
    personalisedDesc: '每个人都是独一无二的，我们的美容护理方法也是如此。我们花时间了解您的目标，制定定制的治疗方案，在优先考虑长期皮肤健康的同时增强您的自然美。',
    ourCommitment: '我们的承诺',
    safetyInnovation: '安全与创',
    safetyInnovationHighlight: '新',
    safetyDesc: '患者安全始终是我们的首要任务。我们只使用最先进、经过临床批准的技术和方法，确保每项治疗都安全、有效且适合您的需求。我们的团队不断接受培训，以保持行业领先地位。',
    visitUsToday: '今天就来伦敦或爱丁堡拜访我们',
    visitDesc: '在奢华舒适的环境中体验专业的美容护理。访问我们的伦敦或爱丁堡诊所，开始您的美丽之旅。',
    whereToFindUs: '如何找到我',
    whereToFindUsHighlight: '们',
    twoLocations: '两个诊所 - 一个优质美容品牌',
  },

  teamRoles: {
    aestheticDoctor: '美容医生',
    seniorPractitioner: '资深美容师',
    aestheticPractitioner: '美容师',
    clientRelations: '客户关系',
  },

  teamMembers: [
    {
      name: 'Dr Azadeh Manesh',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Azadeh-Manesh.png',
      description: 'Azadeh Manesh医生专注于非手术美容，提供自然效果和针对个人需求定制的整体皮肤咨询。',
      role: 'Aesthetic Doctor'
    },
    {
      name: 'Dr Sana Sadiq',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/DR-SANA-SADIQ.jpeg',
      description: 'Sana Sadiq医生专注于全面部美化，结合矫正和预防性治疗，呈现令人惊艳的自然效果。',
      role: 'Aesthetic Doctor'
    },
    {
      name: 'Marianne',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/MARIANNE.jpg',
      description: 'Marianne专注于自然提升和细微调整，突出您的面部轮廓。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Ewelina Roguska',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ewelina-Roguska-1.png',
      description: 'Ewelina拥有9年以上经验，热衷于使用先进皮肤疗法治疗痤疮和痤疮后皮肤。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Louise Walker',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Louise-Walker-1.jpg',
      description: 'Louise使用医疗级设备和先进护肤技术定制皮肤治疗，在美容领域拥有18年以上经验。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Joanna Pullar',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Joanna-Pullar-1.webp',
      description: 'Joanna是资深美容师，在电解和高级皮肤治疗方面具有专业知识。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Nazish Aman',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Nazish-Aman.jpg',
      description: 'Naz在美容领域拥有11年以上经验，协助前台运营并提供定制护肤治疗。',
      role: 'Aesthetic Practitioner'
    },
    {
      name: 'Reza',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Reza.png',
      description: 'Reza以五星级服务著称，在提供专业美容建议的同时确保客户感到舒适。',
      role: 'Aesthetic Practitioner'
    },
    {
      name: 'Leanne',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Leanne.jpg',
      description: 'Leanne在客户服务方面拥有6年以上经验，为Beyond美容诊所提供专业和热情的服务。',
      role: 'Client Relations'
    },
    {
      name: 'Ruxi',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ruxi.png',
      description: 'Ruxi在美容领域拥有十多年经验，专注于现代护肤治疗和从业人员培训。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Claire Hill',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Claire-Hill.png',
      description: 'Claire是拥有14年以上经验的资深美容师，专注于激光脱毛和纹身去除治疗。',
      role: 'Senior Aesthetic Practitioner'
    }
  ],

  testimonials: {
    title: '客户|评价',
    subtitle: '不要只听我们的说法。听听我们满意的客户在伦敦和爱丁堡诊所体验Beyond美容诊所的区别。',
    happyClients: '满意客户',
    yearsExperience: '年经验',
    satisfactionRate: '满意度',
  },

  clientReviews: [
    {
      name: 'Sarah Mitchell',
      location: 'London',
      rating: 5,
      text: 'Azadeh医生绝对令人惊叹！我接受了抗皱治疗，效果超出了我的期望。诊所非常漂亮，员工专业且热情。',
      treatment: '抗皱治疗'
    },
    {
      name: 'Emma Thompson',
      location: 'Edinburgh',
      rating: 5,
      text: '我做了HydraFacial治疗，我的皮肤从未如此好过。Louise非常棒 - 她详细解释了一切，让我在整个过程中感到完全放松。',
      treatment: 'HydraFacial水疗'
    },
    {
      name: 'James Wilson',
      location: 'London',
      rating: 5,
      text: '在Beyond美容诊所的冷冻溶脂治疗改变了我的生活。团队非常专业，效果不言而喻。强烈推荐！',
      treatment: '冷冻溶脂'
    },
    {
      name: 'Charlotte Davies',
      location: 'Edinburgh',
      rating: 5,
      text: 'Sana医生真的很有天赋。我的真皮填充治疗看起来非常自然 - 正是我想要的。整个体验既舒适又专业。',
      treatment: '真皮填充'
    },
    {
      name: 'Michael Brown',
      location: 'London',
      rating: 5,
      text: '从头到尾都是出色的服务。咨询非常全面，Profhilo治疗让我重拾了肌肤自信。',
      treatment: 'Profhilo焕颜针'
    },
    {
      name: 'Lucy Roberts',
      location: 'Edinburgh',
      rating: 5,
      text: '这是我去过的最好的美容诊所。Ewelina用微针治疗了我的痤疮疤痕，改善效果令人难以置信。谢谢！',
      treatment: '微针治疗'
    }
  ],

  whyChooseUs: {
    title: '重新定义美学卓越|这就是我们',
    subtitle: '在Beyond美容诊所，我们正在重新定义美学卓越。',
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
    premiumLocations: '高级地点',
  },

  faq: {
    title: 'Beyond美容诊所医学美容诊所|常见问题',
    visitTitle: '今天就来参观我们在伦敦或爱丁堡的美容诊所',
    visitDesc: '在豪华、宁静的环境中体验专业的美容护理。参观我们的伦敦或爱丁堡诊所，今天就开始您的美丽之旅。',
    callUs: '致电我们：020 7201 8595',
  },

  contact: {
    pageTitle: '联系|我们',
    pageDescription: '联系我们的团队预约咨询或了解更多关于我们治疗项目的信息。',
    phone: '电话',
    email: '电子邮件',
    locations: '诊所位置',
    hours: '营业时间',
    callDuringHours: '请在营业时间内致电',
    respondWithin24Hours: '我们将在24小时内回复',
    twoConvenientLocations: '两个便利的诊所位置',
    extendedWeekendHours: '周末延长营业时间',
    sendMessage: '发送消息|给我们',
    firstName: '名字',
    lastName: '姓氏',
    emailAddress: '电子邮件',
    phoneNumber: '电话',
    preferredLocation: '首选诊所',
    selectLocation: '选择诊所',
    message: '留言',
    messagePlaceholder: '告诉我们您感兴趣的治疗项目...',
    visitOurClinics: '访问我们的|诊所',
    findOurLocations: '查找我们的|诊所位置',
    findLocationsDesc: '使用下面的互动地图轻松找到我们在伦敦和爱丁堡的诊所。',
    londonHarleyStreet: '伦敦 - 哈利街',
    edinburghGeorgeStreet: '爱丁堡 - 乔治街',
    needImmediate: '需要|紧急协助？',
    needImmediateDesc: '如有紧急咨询或临时预约，请直接与我们联系。',
    mondayToFriday: '周一至周五：上午9:00 - 晚上8:00',
    saturdayToSunday: '周六至周日：上午10:00 - 下午6:00',
    primaryPhoneNumber: '+44 (20) 7123 4567',
    secondaryPhoneNumber: '+44 (131) 456 7890',
    primaryEmail: 'info@magispa.co.uk',
    secondaryEmail: 'bookings@magispa.co.uk',
  },

  doctors: {
    pageTitle: '认识我们的医生',
    pageDescription: '我们的高素质医疗专业团队拥有多年的经验和专业知识，以最高标准的护理提供卓越的美容治疗。',
    expertDoctors: '专家医生',
    yearsCombinedExperience: '综合经验年数',
    averageRating: '平均评分',
    clinicLocations: '诊所位置',
    experience: '经验',
    specialties: '专业领域',
    qualifications: '资质认证',
    languages: '语言',
    readyToMeet: '准备好见我们的团队了吗？',
    readyToMeetDesc: '预约我们的专家医生咨询，今天就开始您的美容之旅。',
    callToBook: '致电预约',
  },

  services: {
    whatCanWeHelp: '我们能为您|提供什么帮助？',
    injectables: '注射美容',
    injectablesDesc: '专业抗衰老和提升治疗',
    skinTreatments: '皮肤护理',
    skinTreatmentsDesc: '先进疗法，打造健康亮丽肌肤',
    bodyContouring: '身体塑形与减脂',
    bodyContouringDesc: '非手术身体雕塑解决方案',
    skinConcerns: '皮肤问题',
    skinConcernsDesc: '针对特定皮肤问题的定向治疗',
    wellbeing: '健康与专业疗法',
    wellbeingDesc: '身心健康的整体治疗',

    antiWrinkle: '抗皱治疗',
    antiWrinkleDesc: '减少细纹和皱纹，呈现年轻容貌',
    dermalFillers: '真皮及面部填充',
    dermalFillersDesc: '自然恢复容量，提升面部轮廓',
    lipEnhancement: '丰唇美容',
    lipEnhancementDesc: '以专业精准技术打造丰满清晰的唇形',
    cheekEnhancement: '颧骨提升',
    cheekEnhancementDesc: '增加容量和立体感，提升面部结构',
    nasolabialLines: '法令纹治疗',
    nasolabialLinesDesc: '平滑笑纹，呈现清新容貌',
    underEyeCorrection: '眼下修正',
    underEyeCorrectionDesc: '改善黑眼圈和眼下问题',
    profhilo: 'Profhilo生物重塑',
    profhiloDesc: '皮肤保湿和紧致的生物重塑治疗',
    b12Injections: 'B12注射',
    b12InjectionsDesc: '提升能量水平和整体健康',

    hydrafacial: '水光焕肤',
    hydrafacialDesc: '深层清洁和保湿面部护理',
    oxygenFacial: '氧气焕肤',
    oxygenFacialDesc: '焕活肌肤的活力治疗',
    ledTherapy: 'LED光疗',
    ledTherapyDesc: '先进光疗，肌肤焕颜',
    microneedling: '微针疗法',
    microneedlingDesc: '刺激胶原蛋白生成，打造更光滑肌肤',
    chemicalPeels: '化学焕肤',
    chemicalPeelsDesc: '去角质，更新肌肤质地和肤色',
    prpHair: 'PRP生发疗法',
    prpHairDesc: '富血小板血浆疗法促进头发再生',

    coolsculpting: '冷冻溶脂',
    coolsculptingDesc: 'FDA批准的冷冻减脂技术',
    fatFreezing: '冷冻减脂',
    fatFreezingDesc: '非侵入性减脂治疗',
    vanquish: 'Vanquish射频',
    vanquishDesc: '射频身体塑形',
    exilis: 'Exilis精英身体',
    exilisDesc: '紧肤与减脂相结合',
    buttocksEnhancement: '臀部提升',
    buttocksEnhancementDesc: '非手术臀部提升和塑形',

    antiAgeing: '抗衰老治疗',
    antiAgeingDesc: '全面应对与年龄相关的皮肤问题',
    acneScarring: '痤疮和疤痕',
    acneScarringDesc: '有效治疗痤疮和痤疮后疤痕',
    sunDamage: '日晒损伤和色素沉着',
    sunDamageDesc: '改善色素沉着过度和日晒损伤',
    sensitiveSkin: '敏感肌肤治疗',
    sensitiveSkinDesc: '适合反应性皮肤类型的温和疗法',
    moleRemoval: '痣和皮赘去除',
    moleRemovalDesc: '安全去除不需要的皮肤生长物',

    antiCellulite: '抗橘皮组织治疗',
    antiCelluliteDesc: '通过Alidya注射减少橘皮组织外观',
    harmonyMassage: '和谐按摩',
    harmonyMassageDesc: '放松疗法，缓解压力',
    mesotherapy: '中胚层疗法',
    mesotherapyDesc: '针对性营养注射，促进皮肤健康',
    nutritionist: '营养师咨询',
    nutritionistDesc: '皮肤健康和营养方面的专业建议',
  },

  journey: {
    title: '您的蜕变之旅',
    subtitle: '简单高效的流程，实现非凡效果',
    step1Title: '初步咨询',
    step1Desc: '完整的皮肤评估和个性化治疗方案制定',
    step2Title: '治疗准备',
    step2Desc: '清洁和准备皮肤，进行选定的治疗程序',
    step3Title: '治疗应用',
    step3Desc: '使用最先进的设备执行治疗程序',
    step4Title: '治疗后护理',
    step4Desc: '维持效果的建议和后续时间安排',
    clientSatisfaction: '客户满意度',
  },

  footer: {
    brandDescription: '致力于您的美丽和皮肤健康的美容医学诊所。先进技术，卓越效果。',
    services: '服务项目',
    quickLinks: '快速链接',
    aboutUs: '关于我们',
    ourTeam: '我们的团队',
    londonClinic: '伦敦诊所',
    edinburghClinic: '爱丁堡诊所',
    bookTreatment: '预约治疗',
    contactInfo: '联系方式',
    londonAddress: '伦敦：哈利街123号，W1G 6AX',
    edinburghAddress: '爱丁堡：皇后街45号，EH2 3NH',
    allRightsReserved: '© 2024 Aesthetic Lab. 版权所有。',
    privacyPolicy: '隐私政策',
    termsConditions: '条款与条件',
    cookies: 'Cookies政策',
  },

  common: {
    years: '年',
    readMore: '阅读更多',
    close: '关闭',
    select: '选择',
    submit: '提交',
    cancel: '取消',
    search: '搜索',
    loading: '加载中...',
    and: '和',
  },
  procedurePages: bodyProcedurePagesZhTW,

  getMore: {
    title: '选择Beyond|享受更多',
    benefits: {
      googleReviews: '110多条谷歌评论获得4.7星好评',
      referFriend: '推荐好友优惠',
      freeConsultation: '每次预约可选免费皮肤咨询',
    },
  },

  personalisedApproach: {
    title: '个性化美学|定制方案',
    programs: {
      consultation: {
        title: '咨询',
        description: '由医学专家进行个性化评估',
      },
      customization: {
        title: '定制',
        description: '为您的目标量身定制治疗方案',
      },
      treatment: {
        title: '治疗',
        description: '安全先进的疗程，呈现自然效果',
      },
      aftercare: {
        title: '术后护理',
        description: '持续支持，保持持久美丽',
      },
    },
    details: {
      consultAssess: {
        title: '1. 咨询与评估',
        description: '我们提供个性化咨询，评估您的目标，并为您推荐最佳的皮肤、身体或面部美学治疗方案。通过初步咨询和评估，我们的专家团队确保每项治疗都能增强您的自然美，并带来真实显著的效果。',
      },
      bespokePlan: {
        title: '2. 定制治疗方案',
        description: '咨询后，我们会根据您独特的治疗偏好、生活方式和目标，制定量身定制的治疗计划。无论您是想焕新肌肤、塑造身形，还是实现面部微调，您的方案都将个性化定制，以提供安全、有效且持久的效果。',
      },
      cuttingEdge: {
        title: '3. 前沿治疗技术',
        description: '我们结合先进技术与最新美学科技，确保您的治疗既创新又有效。从二氧化碳疗法和生物填充剂，到水光焕肤和微针联合外泌体疗法，我们始终处于美学前沿，确保您获得最佳治疗选择。从临床验证的注射剂到医学级皮肤疗法，每项疗程都由我们训练有素的专业人士以精准、安全和艺术的方式执行。',
      },
      resultsAftercare: {
        title: '4. 效果与术后护理',
        description: '您的美丽之旅不会在治疗后结束。我们提供持续支持和术后护理，以最大化和维持您的治疗效果。我们的团队提供关于恢复、护肤和后续疗程的专业指导，确保您在每个阶段都感到自信、舒适并获得全面支持。',
      },
    },
    stats: {
      experienceLabel: '经验',
      experienceValue: '15年以上',
      priceLabel: '疗程起价',
      priceValue: '£200',
    },
  },

  expertMedicine: {
    title: '我们只提供专业的',
    titleHighlight: '美学医疗与美容服务',
    subtitle: '在Beyond美学诊所，您的护理始终由专家主导，他们将医学知识与卓越追求完美结合。我们相信通过专业治疗和最新美学护理，实现安全、有效和自然的效果。',
    points: {
      quality: '我们从不在质量上妥协，只使用值得信赖的产品、经过验证的技术和先进的方法，以实现最佳美容效果。',
      progress: '我们不断进步。我们的团队接受最新美学技术和国际护理标准的培训，同时我们也投资于全新设备和经过验证的技术，确保治疗安全、舒适且效果显著。',
      nonInvasive: '我们专注于非侵入性、非手术美学治疗。这意味着低风险、无恢复期的治疗，可提供即时且持久的效果。',
    },
    buttonText: '认识团队',
  },

  locations: {
    title: '我们的诊所|位置',
    subtitle: '欢迎访问我们位于伦敦和爱丁堡的高端诊所，体验专业美学治疗',
    addressLabel: '地址',
    phoneLabel: '电话',
    hoursLabel: '营业时间',
    parkingLabel: '停车信息',
    bookAppointment: '预约咨询',
    getDirections: '获取路线',
    locationData: [
      {
        id: 1,
        city: '伦敦',
        address: '优质地段，伦敦市中心',
        phone: '+44 (20) 7123 4567',
        hours: '周一至周五：9:00 - 18:00\n周六：9:00 - 17:00\n周日：休息',
        parking: '街边停车位',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.628183492772!2d-0.1624627224548056!3d51.50169031111937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605397680ad09%3A0x68bb8e672eb273a1!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20MediSpa!5e0!3m2!1sen!2sza!4v1758541805476!5m2!1sen!2sza',
      },
      {
        id: 2,
        city: '爱丁堡',
        address: '优质地段，爱丁堡市中心',
        phone: '+44 (131) 123 4567',
        hours: '周一至周五：9:00 - 18:00\n周六：9:00 - 16:00\n周日：休息',
        parking: '附近有停车场',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.678446141864!2d-3.194440922303394!3d55.954944976402295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac0abf29af5%3A0xe8c125ae82237941!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20Medispa!5e0!3m2!1sen!2sza!4v1758541860806!5m2!1sen!2sza',
      },
    ],
  },

  faqQuestions: [
    {
      question: 'Beyond美学诊所提供哪些治疗项目？',
      answer: 'Beyond美学诊所提供广泛的美学医疗治疗，包括真皮填充剂、激光治疗和身体塑形。无论您是想减少皱纹、提升自然美，还是打造完美身形，我们的专业团队都会为您量身定制治疗方案。',
    },
    {
      question: '你们的治疗适合所有肤质吗？',
      answer: '是的。我们的医学美容专家擅长治疗各种皮肤问题，从干燥皮肤到黑斑和细纹。我们根据您的独特需求个性化定制每项皮肤治疗，确保在优先考虑皮肤健康的同时获得最佳效果。',
    },
    {
      question: '什么是身体塑形，它是如何工作的？',
      answer: '身体塑形通过减少顽固脂肪和增强轮廓来帮助雕塑和精炼您的身材。我们由经验丰富的专业人士领导的专家团队，提供非手术治疗和更先进的塑形程序，如吸脂术。',
    },
    {
      question: '美学治疗需要多长时间？',
      answer: '大多数治疗只需30-90分钟，很容易融入您的日程安排。请注意，某些程序可能需要多次疗程才能获得最佳、持久的效果。',
    },
    {
      question: '治疗后有恢复期吗？',
      answer: '我们的许多美学诊所治疗需要最少或无需恢复期。许多客户可以立即恢复日常活动，尽管激光程序或注射剂等治疗可能会在短时间内引起轻微发红或肿胀。',
    },
    {
      question: '我如何知道哪种治疗适合我？',
      answer: '我们提供个性化咨询，评估您的目标，并为您推荐最佳的皮肤、身体或面部美学治疗方案。我们的专家团队确保每项治疗都能增强您的自然美，并带来真实、显著的效果。',
    },
    {
      question: '我可以组合治疗以实现完全蜕变吗？',
      answer: '当然可以。许多客户选择将面部美学、身体治疗和医学美容结合起来，以获得全面、量身定制的方案。无论您是想抚平皱纹、恢复皮肤健康，还是精炼外观，我们都会根据您的需求制定定制治疗计划。',
    },
    {
      question: '我如何预约咨询？',
      answer: '预约很简单。立即联系我们，拨打 020 7201 8595，或访问我们在伦敦或爱丁堡的美学诊所，开启您的美丽之旅。我们的团队将自信地引导您获得真实的效果。',
    },
  ],
};

// Traditional Chinese translations
const zhTW: Translations = {
  nav: {
    home: '首頁',
    about: '關於我們',
    londonTreatments: '倫敦治療項目',
    edinburghTreatments: '愛丁堡治療項目',
    locations: '診所位置',
    allLocations: '所有診所',
    london: '倫敦',
    edinburgh: '愛丁堡',
    doctors: '醫生團隊',
    contact: '聯絡我們',
    bookNow: '立即預約',
  },

  treatments: {
    body: '身體護理',
    peels: '煥膚療程',
    facial: '面部護理',
    injectables: '注射美容',
  },

  treatmentNames: {
    exilis: 'Exilis緊膚',
    hifu: 'HIFU超聲刀',
    cmSlim: 'CM Slim塑形',
    coolLaser: 'Cool Laser冷激光',
    coolSculpting: 'CoolSculpting冷凍溶脂',
    unison: 'Unison多波長',
    vanquish: 'Vanquish射頻溶脂',
    electrolysis: '電解脫毛',
    laserHairRemoval: '激光脫毛',
    medik8: 'Medik8煥膚',
    obagi: 'Obagi奧貝琪',
    zo: 'ZO煥膚',
    skinScanner: '皮膚掃描',
    hydrafacial: 'Hydrafacial水飛梭',
    hydraTite: 'HydraTite水光緊緻',
    oxygenFacial: '氧氣面部護理',
    keravive: 'Keravive頭皮護理',
    ledFacial: 'LED光療面部',
    microneedling: '微針美容',
    exosome: 'Exosome外泌體',
    antiWrinkle: '抗皺針',
    carboxy: 'Carboxy二氧化碳注射',
    biofiller: 'Biofiller生物填充',
    dermalFiller: '真皮填充劑',
    moleRemoval: '痣移除',
    polynucleotides: 'Polynucleotides多聚核苷酸',
    prp: 'PRP自體血清',
    profhilo: 'Profhilo逆時針',
    sclerotherapy: '硬化療法',
    neofound: 'Neofound新生肽',
    ivDrip: 'IV靜脈滴注',
    vitaminD: '維生素D',
    b12: 'B12維生素',
    biotin: '生物素',
    glutathione: '谷胱甘肽',
    magnesium: '鎂',
    allergy: '過敏治療',
  },

  hero: {
    title: '讓您的自然美在',
    titleHighlight: '世界級美容診所綻放光彩',
    subtitle: '精緻。煥顏。自信綻放。',
    description: '在Beyond美容診所，我們將先進的美容醫學與奢華舒適的體驗相結合，幫助您實現自然美麗的效果。我們的專家醫生和美容師採用最新的技術和療法，以謹慎、優雅、有效的方式提升您的美麗。',
    cqcRegulated: 'CQC & HIS 監管認證',
    doctorLed: '醫生主導治療',
    newCustomerDiscounts: '新客戶優惠',
    yearsOfExcellence: '10年卓越服務',
  },

  buttons: {
    learnMore: '了解更多',
    bookNow: '立即預約',
    bookAppointment: '預約諮詢',
    viewAll: '查看全部',
    viewAllTreatments: '查看所有療程',
    getDirections: '獲取路線',
    sendMessage: '發送訊息',
    callNow: '立即致電',
    emailConsultation: '郵件諮詢',
    whatsapp: 'WhatsApp',
    viewProfile: '查看簡介',
    bookWith: '預約',
  },

  languageSwitcher: {
    selectLabel: '選擇語言',
    languages: {
      en: { label: '英語', nativeName: 'English' },
      'zh-CN': { label: '簡體中文', nativeName: '简体中文' },
      'zh-TW': { label: '繁體中文', nativeName: '繁體中文' },
      ar: { label: '阿拉伯語', nativeName: 'العربية' },
    },
  },

  about: {
    pageTitle: '我們的願景、使命',
    pageSubtitle: '深入了解Beyond美容診所',
    pageDescription: '在Beyond美容診所，我們超越期望，提供先進的美容治療，提升您的自然美。憑藉以患者為先的理念、專業醫師和尖端技術，我們為您量身定製獨特的體驗，確保每次都能獲得卓越的效果。',
    makeBooking: '立即預約',
    trustedBy: '受頂級美容專業人士信賴',
    ourMission: '我們的使命',
    missionTitle: '在醫學美容領域超越卓越',
    elevatingCare: '提升美容護理水平',
    elevatingCareDesc: '我們相信，美容應該以專業、精準和關懷的方式進行。我們高度專業的團隊提供安全、有效、科學支持的治療，確保每位患者在溫馨奢華的環境中獲得世界級的效果。',
    yourJourney: '您的旅程，我們的專業',
    yourJourneyDesc: '您的美容旅程與最終結果同樣重要。通過詳細的諮詢、個性化的治療方案和行業領先的技術，我們幫助您實現理想的外觀，同時保持自然清新的容貌。',
    whatMakesUsDifferent: '我們的與眾不同之',
    whatMakesUsDifferentHighlight: '處',
    trustedExperts: '值得信賴的美容醫學專家',
    trustedExpertsDesc: '我們的專業醫生和執業人員團隊提供有科學支持的安全有效治療。',
    honestAdvice: '誠實建議，真實效果',
    honestAdviceDesc: '我們提供透明的諮詢和切合實際的期望，確保您做出明智的決定。',
    familyTouch: '專業卓越與家庭溫暖',
    familyTouchDesc: '我們將專業技能與溫暖友好的方式相結合，讓您感到賓至如歸。',
    whoWeAre: '關於我',
    whoWeAreHighlight: '們',
    whoWeAreDesc: '自2006年以來，Beyond美容診所在倫敦和愛丁堡設有診所，已成為醫學美容領域的領導者。我們的專家團隊提供面部和身體治療，旨在增強您的自信和幸福感。我們優先考慮安全、創新和個性化護理，確保每個治療方案都能滿足患者的獨特需求。從肌膚煥顏到身體塑形，我們致力於提供卓越的效果。',
    meetOurTeam: '認識我們的團',
    meetOurTeamHighlight: '隊',
    teamSubtitle: '每一個卓越成果的背後都有值得信賴的專家。我們精心挑選的美容專家團隊包括頂尖醫生、護士和高級從業者，致力於為您量身定製治療方案。',
    specialistsInBeauty: '美容專家',
    insideClinic: 'Beyond美容診所內',
    insideClinicHighlight: '部',
    gallery: '畫廊',
    trustHonestyExpertise: '信任、誠實、專',
    trustHonestyExpertiseHighlight: '業',
    trustDesc: '我們致力於以誠信和專業精神提供卓越的美容效果。我們的方法建立在信任、誠實和臨床卓越的基礎上，確保每位患者都能獲得針對其獨特需求量身定製的治療。',
    personalisedExperience: '真正的個性化體',
    personalisedExperienceHighlight: '驗',
    personalisedDesc: '每個人都是獨一無二的，我們的美容護理方法也是如此。我們花時間了解您的目標，制定定製的治療方案，在優先考慮長期皮膚健康的同時增強您的自然美。',
    ourCommitment: '我們的承諾',
    safetyInnovation: '安全與創',
    safetyInnovationHighlight: '新',
    safetyDesc: '患者安全始終是我們的首要任務。我們只使用最先進、經過臨床批准的技術和方法，確保每項治療都安全、有效且適合您的需求。我們的團隊不斷接受培訓，以保持行業領先地位。',
    visitUsToday: '今天就來倫敦或愛丁堡拜訪我們',
    visitDesc: '在奢華舒適的環境中體驗專業的美容護理。訪問我們的倫敦或愛丁堡診所，開始您的美麗之旅。',
    whereToFindUs: '如何找到我',
    whereToFindUsHighlight: '們',
    twoLocations: '兩個診所 - 一個優質美容品牌',
  },

  teamRoles: {
    aestheticDoctor: '美容醫生',
    seniorPractitioner: '資深美容師',
    aestheticPractitioner: '美容師',
    clientRelations: '客戶關係',
  },

  teamMembers: [
    {
      name: 'Dr Azadeh Manesh',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Azadeh-Manesh.png',
      description: 'Azadeh Manesh醫生專注於非手術美容，提供自然效果和針對個人需求定制的整體皮膚諮詢。',
      role: 'Aesthetic Doctor'
    },
    {
      name: 'Dr Sana Sadiq',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/DR-SANA-SADIQ.jpeg',
      description: 'Sana Sadiq醫生專注於全面部美化，結合矯正和預防性治療，呈現令人驚艷的自然效果。',
      role: 'Aesthetic Doctor'
    },
    {
      name: 'Marianne',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/MARIANNE.jpg',
      description: 'Marianne專注於自然提升和細微調整，突出您的面部輪廓。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Ewelina Roguska',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ewelina-Roguska-1.png',
      description: 'Ewelina擁有9年以上經驗，熱衷於使用先進皮膚療法治療痤瘡和痤瘡後皮膚。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Louise Walker',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Louise-Walker-1.jpg',
      description: 'Louise使用醫療級設備和先進護膚技術定制皮膚治療，在美容領域擁有18年以上經驗。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Joanna Pullar',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Joanna-Pullar-1.webp',
      description: 'Joanna是資深美容師，在電解和高級皮膚治療方面具有專業知識。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Nazish Aman',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Nazish-Aman.jpg',
      description: 'Naz在美容領域擁有11年以上經驗，協助前台運營並提供定制護膚治療。',
      role: 'Aesthetic Practitioner'
    },
    {
      name: 'Reza',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Reza.png',
      description: 'Reza以五星級服務著稱，在提供專業美容建議的同時確保客戶感到舒適。',
      role: 'Aesthetic Practitioner'
    },
    {
      name: 'Leanne',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Leanne.jpg',
      description: 'Leanne在客戶服務方面擁有6年以上經驗，為Beyond美容診所提供專業和熱情的服務。',
      role: 'Client Relations'
    },
    {
      name: 'Ruxi',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ruxi.png',
      description: 'Ruxi在美容領域擁有十多年經驗，專注於現代護膚治療和從業人員培訓。',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Claire Hill',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Claire-Hill.png',
      description: 'Claire是擁有14年以上經驗的資深美容師，專注於激光脫毛和紋身去除治療。',
      role: 'Senior Aesthetic Practitioner'
    }
  ],

  testimonials: {
    title: '客戶|評價',
    subtitle: '不要只聽我們的說法。聽聽我們滿意的客戶在倫敦和愛丁堡診所體驗Beyond美容診所的分別。',
    happyClients: '滿意客戶',
    yearsExperience: '年經驗',
    satisfactionRate: '滿意度',
  },

  clientReviews: [
    {
      name: 'Sarah Mitchell',
      location: 'London',
      rating: 5,
      text: 'Azadeh醫生絕對令人驚嘆！我接受了抗皺治療，效果超出了我的期望。診所非常漂亮，員工專業且熱情。',
      treatment: '抗皺治療'
    },
    {
      name: 'Emma Thompson',
      location: 'Edinburgh',
      rating: 5,
      text: '我做了HydraFacial治療，我的皮膚從未如此好過。Louise非常棒 - 她詳細解釋了一切，讓我在整個過程中感到完全放鬆。',
      treatment: 'HydraFacial水療'
    },
    {
      name: 'James Wilson',
      location: 'London',
      rating: 5,
      text: '在Beyond美容診所的冷凍溶脂治療改變了我的生活。團隊非常專業，效果不言而喻。強烈推薦！',
      treatment: '冷凍溶脂'
    },
    {
      name: 'Charlotte Davies',
      location: 'Edinburgh',
      rating: 5,
      text: 'Sana醫生真的很有天賦。我的真皮填充治療看起來非常自然 - 正是我想要的。整個體驗既舒適又專業。',
      treatment: '真皮填充'
    },
    {
      name: 'Michael Brown',
      location: 'London',
      rating: 5,
      text: '從頭到尾都是出色的服務。諮詢非常全面，Profhilo治療讓我重拾了肌膚自信。',
      treatment: 'Profhilo煥顏針'
    },
    {
      name: 'Lucy Roberts',
      location: 'Edinburgh',
      rating: 5,
      text: '這是我去過的最好的美容診所。Ewelina用微針治療了我的痤瘡疤痕，改善效果令人難以置信。謝謝！',
      treatment: '微針治療'
    }
  ],

  whyChooseUs: {
    title: '重新定義美學卓越|這就是我們',
    subtitle: '在Beyond美容診所，我們正在重新定義美學卓越。',
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
    premiumLocations: '高級地點',
  },

  faq: {
    title: 'Beyond美容診所醫學美容診所|常見問題',
    visitTitle: '今天就來參觀我們在倫敦或愛丁堡的美容診所',
    visitDesc: '在豪華、寧靜的環境中體驗專業的美容護理。參觀我們的倫敦或愛丁堡診所，今天就開始您的美麗之旅。',
    callUs: '致電我們：020 7201 8595',
  },

  contact: {
    pageTitle: '聯絡|我們',
    pageDescription: '聯絡我們的團隊預約諮詢或了解更多關於我們治療項目的資訊。',
    phone: '電話',
    email: '電子郵件',
    locations: '診所位置',
    hours: '營業時間',
    callDuringHours: '請在營業時間內致電',
    respondWithin24Hours: '我們將在24小時內回覆',
    twoConvenientLocations: '兩個便利的診所位置',
    extendedWeekendHours: '週末延長營業時間',
    sendMessage: '發送訊息|給我們',
    firstName: '名字',
    lastName: '姓氏',
    emailAddress: '電子郵件',
    phoneNumber: '電話',
    preferredLocation: '首選診所',
    selectLocation: '選擇診所',
    message: '留言',
    messagePlaceholder: '告訴我們您感興趣的治療項目...',
    visitOurClinics: '訪問我們的|診所',
    findOurLocations: '查找我們的|診所位置',
    findLocationsDesc: '使用下面的互動地圖輕鬆找到我們在倫敦和愛丁堡的診所。',
    londonHarleyStreet: '倫敦 - 哈利街',
    edinburghGeorgeStreet: '愛丁堡 - 喬治街',
    needImmediate: '需要|緊急協助？',
    needImmediateDesc: '如有緊急諮詢或臨時預約，請直接與我們聯絡。',
    mondayToFriday: '週一至週五：上午9:00 - 晚上8:00',
    saturdayToSunday: '週六至週日：上午10:00 - 下午6:00',
    primaryPhoneNumber: '+44 (20) 7123 4567',
    secondaryPhoneNumber: '+44 (131) 456 7890',
    primaryEmail: 'info@magispa.co.uk',
    secondaryEmail: 'bookings@magispa.co.uk',
  },

  doctors: {
    pageTitle: '認識我們的醫生',
    pageDescription: '我們的高素質醫療專業團隊擁有多年的經驗和專業知識，以最高標準的護理提供卓越的美容治療。',
    expertDoctors: '專家醫生',
    yearsCombinedExperience: '綜合經驗年數',
    averageRating: '平均評分',
    clinicLocations: '診所位置',
    experience: '經驗',
    specialties: '專業領域',
    qualifications: '資質認證',
    languages: '語言',
    readyToMeet: '準備好見我們的團隊了嗎？',
    readyToMeetDesc: '預約我們的專家醫生諮詢，今天就開始您的美容之旅。',
    callToBook: '致電預約',
  },

  services: {
    whatCanWeHelp: '我們能為您|提供什麼幫助？',
    injectables: '注射美容',
    injectablesDesc: '專業抗衰老和提升治療',
    skinTreatments: '皮膚護理',
    skinTreatmentsDesc: '先進療法，打造健康亮麗肌膚',
    bodyContouring: '身體塑形與減脂',
    bodyContouringDesc: '非手術身體雕塑解決方案',
    skinConcerns: '皮膚問題',
    skinConcernsDesc: '針對特定皮膚問題的定向治療',
    wellbeing: '健康與專業療法',
    wellbeingDesc: '身心健康的整體治療',

    antiWrinkle: '抗皺治療',
    antiWrinkleDesc: '減少細紋和皺紋，呈現年輕容貌',
    dermalFillers: '真皮及面部填充',
    dermalFillersDesc: '自然恢復容量，提升面部輪廓',
    lipEnhancement: '豐唇美容',
    lipEnhancementDesc: '以專業精準技術打造豐滿清晰的唇形',
    cheekEnhancement: '顴骨提升',
    cheekEnhancementDesc: '增加容量和立體感，提升面部結構',
    nasolabialLines: '法令紋治療',
    nasolabialLinesDesc: '平滑笑紋，呈現清新容貌',
    underEyeCorrection: '眼下修正',
    underEyeCorrectionDesc: '改善黑眼圈和眼下問題',
    profhilo: 'Profhilo生物重塑',
    profhiloDesc: '皮膚保濕和緊緻的生物重塑治療',
    b12Injections: 'B12注射',
    b12InjectionsDesc: '提升能量水平和整體健康',

    hydrafacial: '水光煥膚',
    hydrafacialDesc: '深層清潔和保濕面部護理',
    oxygenFacial: '氧氣煥膚',
    oxygenFacialDesc: '煥活肌膚的活力治療',
    ledTherapy: 'LED光療',
    ledTherapyDesc: '先進光療，肌膚煥顏',
    microneedling: '微針療法',
    microneedlingDesc: '刺激膠原蛋白生成，打造更光滑肌膚',
    chemicalPeels: '化學煥膚',
    chemicalPeelsDesc: '去角質，更新肌膚質地和膚色',
    prpHair: 'PRP生髮療法',
    prpHairDesc: '富血小板血漿療法促進頭髮再生',

    coolsculpting: '冷凍溶脂',
    coolsculptingDesc: 'FDA批准的冷凍減脂技術',
    fatFreezing: '冷凍減脂',
    fatFreezingDesc: '非侵入性減脂治療',
    vanquish: 'Vanquish射頻',
    vanquishDesc: '射頻身體塑形',
    exilis: 'Exilis精英身體',
    exilisDesc: '緊膚與減脂相結合',
    buttocksEnhancement: '臀部提升',
    buttocksEnhancementDesc: '非手術臀部提升和塑形',

    antiAgeing: '抗衰老治療',
    antiAgeingDesc: '全面應對與年齡相關的皮膚問題',
    acneScarring: '痤瘡和疤痕',
    acneScarringDesc: '有效治療痤瘡和痤瘡後疤痕',
    sunDamage: '日曬損傷和色素沉著',
    sunDamageDesc: '改善色素沉著過度和日曬損傷',
    sensitiveSkin: '敏感肌膚治療',
    sensitiveSkinDesc: '適合反應性皮膚類型的溫和療法',
    moleRemoval: '痣和皮贅去除',
    moleRemovalDesc: '安全去除不需要的皮膚生長物',

    antiCellulite: '抗橘皮組織治療',
    antiCelluliteDesc: '通過Alidya注射減少橘皮組織外觀',
    harmonyMassage: '和諧按摩',
    harmonyMassageDesc: '放鬆療法，緩解壓力',
    mesotherapy: '中胚層療法',
    mesotherapyDesc: '針對性營養注射，促進皮膚健康',
    nutritionist: '營養師諮詢',
    nutritionistDesc: '皮膚健康和營養方面的專業建議',
  },

  journey: {
    title: '您的蜕變之旅',
    subtitle: '簡單高效的流程，實現非凡效果',
    step1Title: '初步諮詢',
    step1Desc: '完整的皮膚評估和個性化治療方案制定',
    step2Title: '治療準備',
    step2Desc: '清潔和準備皮膚，進行選定的治療程序',
    step3Title: '治療應用',
    step3Desc: '使用最先進的設備執行治療程序',
    step4Title: '治療後護理',
    step4Desc: '維持效果的建議和後續時間安排',
    clientSatisfaction: '客戶滿意度',
  },

  footer: {
    brandDescription: '致力於您的美麗和皮膚健康的美容醫學診所。先進技術，卓越效果。',
    services: '服務項目',
    quickLinks: '快速連結',
    aboutUs: '關於我們',
    ourTeam: '我們的團隊',
    londonClinic: '倫敦診所',
    edinburghClinic: '愛丁堡診所',
    bookTreatment: '預約治療',
    contactInfo: '聯絡方式',
    londonAddress: '倫敦：哈利街123號，W1G 6AX',
    edinburghAddress: '愛丁堡：皇后街45號，EH2 3NH',
    allRightsReserved: '© 2024 Aesthetic Lab. 版權所有。',
    privacyPolicy: '隱私政策',
    termsConditions: '條款與條件',
    cookies: 'Cookies政策',
  },

  common: {
    years: '年',
    readMore: '閱讀更多',
    close: '關閉',
    select: '選擇',
    submit: '提交',
    cancel: '取消',
    search: '搜尋',
    loading: '載入中...',
    and: '與',
  },
  procedurePages: bodyProcedurePagesZhTW,

  getMore: {
    title: '選擇Beyond|享受更多',
    benefits: {
      googleReviews: '110多條谷歌評論獲得4.7星好評',
      referFriend: '推薦好友優惠',
      freeConsultation: '每次預約可選免費皮膚諮詢',
    },
  },

  personalisedApproach: {
    title: '個性化美學|定製方案',
    programs: {
      consultation: {
        title: '諮詢',
        description: '由醫學專家進行個性化評估',
      },
      customization: {
        title: '定製',
        description: '為您的目標量身定製治療方案',
      },
      treatment: {
        title: '治療',
        description: '安全先進的療程，呈現自然效果',
      },
      aftercare: {
        title: '術後護理',
        description: '持續支持，保持持久美麗',
      },
    },
    details: {
      consultAssess: {
        title: '1. 諮詢與評估',
        description: '我們提供個性化諮詢，評估您的目標，並為您推薦最佳的皮膚、身體或面部美學治療方案。通過初步諮詢和評估，我們的專家團隊確保每項治療都能增強您的自然美，並帶來真實顯著的效果。',
      },
      bespokePlan: {
        title: '2. 定製治療方案',
        description: '諮詢後，我們會根據您獨特的治療偏好、生活方式和目標，制定量身定製的治療計劃。無論您是想煥新肌膚、塑造身形，還是實現面部微調，您的方案都將個性化定製，以提供安全、有效且持久的效果。',
      },
      cuttingEdge: {
        title: '3. 前沿治療技術',
        description: '我們結合先進技術與最新美學科技，確保您的治療既創新又有效。從二氧化碳療法和生物填充劑，到水光煥膚和微針聯合外泌體療法，我們始終處於美學前沿，確保您獲得最佳治療選擇。從臨床驗證的注射劑到醫學級皮膚療法，每項療程都由我們訓練有素的專業人士以精準、安全和藝術的方式執行。',
      },
      resultsAftercare: {
        title: '4. 效果與術後護理',
        description: '您的美麗之旅不會在治療後結束。我們提供持續支持和術後護理，以最大化和維持您的治療效果。我們的團隊提供關於恢復、護膚和後續療程的專業指導，確保您在每個階段都感到自信、舒適並獲得全面支持。',
      },
    },
    stats: {
      experienceLabel: '經驗',
      experienceValue: '15年以上',
      priceLabel: '療程起價',
      priceValue: '£200',
    },
  },

  expertMedicine: {
    title: '我們只提供專業的',
    titleHighlight: '美學醫療與美容服務',
    subtitle: '在Beyond美學診所，您的護理始終由專家主導，他們將醫學知識與卓越追求完美結合。我們相信通過專業治療和最新美學護理，實現安全、有效和自然的效果。',
    points: {
      quality: '我們從不在質量上妥協，只使用值得信賴的產品、經過驗證的技術和先進的方法，以實現最佳美容效果。',
      progress: '我們不斷進步。我們的團隊接受最新美學技術和國際護理標準的培訓，同時我們也投資於全新設備和經過驗證的技術，確保治療安全、舒適且效果顯著。',
      nonInvasive: '我們專注於非侵入性、非手術美學治療。這意味著低風險、無恢復期的治療，可提供即時且持久的效果。',
    },
    buttonText: '認識團隊',
  },

  locations: {
    title: '我們的診所|位置',
    subtitle: '歡迎訪問我們位於倫敦和愛丁堡的高端診所，體驗專業美學治療',
    addressLabel: '地址',
    phoneLabel: '電話',
    hoursLabel: '營業時間',
    parkingLabel: '停車資訊',
    bookAppointment: '預約諮詢',
    getDirections: '獲取路線',
    locationData: [
      {
        id: 1,
        city: '倫敦',
        address: '優質地段，倫敦市中心',
        phone: '+44 (20) 7123 4567',
        hours: '週一至週五：9:00 - 18:00\n週六：9:00 - 17:00\n週日：休息',
        parking: '街邊停車位',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.628183492772!2d-0.1624627224548056!3d51.50169031111937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605397680ad09%3A0x68bb8e672eb273a1!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20MediSpa!5e0!3m2!1sen!2sza!4v1758541805476!5m2!1sen!2sza',
      },
      {
        id: 2,
        city: '愛丁堡',
        address: '優質地段，愛丁堡市中心',
        phone: '+44 (131) 123 4567',
        hours: '週一至週五：9:00 - 18:00\n週六：9:00 - 16:00\n週日：休息',
        parking: '附近有停車場',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.678446141864!2d-3.194440922303394!3d55.954944976402295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac0abf29af5%3A0xe8c125ae82237941!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20Medispa!5e0!3m2!1sen!2sza!4v1758541860806!5m2!1sen!2sza',
      },
    ],
  },

  faqQuestions: [
    {
      question: 'Beyond美學診所提供哪些治療項目？',
      answer: 'Beyond美學診所提供廣泛的美學醫療治療，包括真皮填充劑、激光治療和身體塑形。無論您是想減少皺紋、提升自然美，還是打造完美身形，我們的專業團隊都會為您量身定製治療方案。',
    },
    {
      question: '你們的治療適合所有膚質嗎？',
      answer: '是的。我們的醫學美容專家擅長治療各種皮膚問題，從乾燥皮膚到黑斑和細紋。我們根據您的獨特需求個性化定製每項皮膚治療，確保在優先考慮皮膚健康的同時獲得最佳效果。',
    },
    {
      question: '什麼是身體塑形，它是如何工作的？',
      answer: '身體塑形通過減少頑固脂肪和增強輪廓來幫助雕塑和精煉您的身材。我們由經驗豐富的專業人士領導的專家團隊，提供非手術治療和更先進的塑形程序，如吸脂術。',
    },
    {
      question: '美學治療需要多長時間？',
      answer: '大多數治療只需30-90分鐘，很容易融入您的日程安排。請注意，某些程序可能需要多次療程才能獲得最佳、持久的效果。',
    },
    {
      question: '治療後有恢復期嗎？',
      answer: '我們的許多美學診所治療需要最少或無需恢復期。許多客戶可以立即恢復日常活動，儘管激光程序或注射劑等治療可能會在短時間內引起輕微發紅或腫脹。',
    },
    {
      question: '我如何知道哪種治療適合我？',
      answer: '我們提供個性化諮詢，評估您的目標，並為您推薦最佳的皮膚、身體或面部美學治療方案。我們的專家團隊確保每項治療都能增強您的自然美，並帶來真實、顯著的效果。',
    },
    {
      question: '我可以組合治療以實現完全蛻變嗎？',
      answer: '當然可以。許多客戶選擇將面部美學、身體治療和醫學美容結合起來，以獲得全面、量身定製的方案。無論您是想撫平皺紋、恢復皮膚健康，還是精煉外觀，我們都會根據您的需求製定定製治療計劃。',
    },
    {
      question: '我如何預約諮詢？',
      answer: '預約很簡單。立即聯繫我們，撥打 020 7201 8595，或訪問我們在倫敦或愛丁堡的美學診所，開啟您的美麗之旅。我們的團隊將自信地引導您獲得真實的效果。',
    },
  ],
};

// Arabic translations
const ar: Translations = {
  nav: {
    home: 'الرئيسية',
    about: 'عن العيادة',
    londonTreatments: 'علاجات لندن',
    edinburghTreatments: 'علاجات إدنبرة',
    locations: 'المواقع',
    allLocations: 'جميع المواقع',
    london: 'لندن',
    edinburgh: 'إدنبرة',
    doctors: 'الأطباء',
    contact: 'تواصل معنا',
    bookNow: 'احجز الآن',
  },

  treatments: {
    body: 'الجسم',
    peels: 'التقشير',
    facial: 'الوجه',
    injectables: 'الحقن التجميلية',
  },

  treatmentNames: {
    exilis: 'إكزيليس',
    hifu: 'هايفو',
    cmSlim: 'سي إم سليم',
    coolLaser: 'كول ليزر',
    coolSculpting: 'كول سكالبتينج',
    unison: 'يونيسون',
    vanquish: 'فانكويش',
    electrolysis: 'التحليل الكهربائي',
    laserHairRemoval: 'إزالة الشعر بالليزر',
    medik8: 'ميديك8',
    obagi: 'أوباجي',
    zo: 'زد أو',
    skinScanner: 'ماسح البشرة',
    hydrafacial: 'هايدرافيشال',
    hydraTite: 'هايدراتايت',
    oxygenFacial: 'علاج الوجه بالأكسجين',
    keravive: 'كيرافيف',
    ledFacial: 'علاج الوجه LED',
    microneedling: 'الوخز بالإبر الدقيقة',
    exosome: 'إكسوسوم',
    antiWrinkle: 'مضاد التجاعيد',
    carboxy: 'كاربوكسي',
    biofiller: 'بيوفيلر',
    dermalFiller: 'حشو الجلد',
    moleRemoval: 'إزالة الشامات',
    polynucleotides: 'بولينوكليوتيدات',
    prp: 'البلازما الغنية بالصفائح',
    profhilo: 'بروفايلو',
    sclerotherapy: 'العلاج التصلبي',
    neofound: 'نيوفاوند',
    ivDrip: 'التنقيط الوريدي',
    vitaminD: 'فيتامين د',
    b12: 'فيتامين ب12',
    biotin: 'البيوتين',
    glutathione: 'الجلوتاثيون',
    magnesium: 'المغنيسيوم',
    allergy: 'علاج الحساسية',
  },

  hero: {
    title: 'دع جمالك الطبيعي يتألق في',
    titleHighlight: 'عيادة تجميل عالمية المستوى',
    subtitle: 'صقل. تجديد. إشراقة بثقة.',
    description: 'هنا في Beyond، نجمع بين الطب التجميلي المتقدم والتجربة الفاخرة الهادئة، لمساعدتك على تحقيق نتائج طبيعية وجميلة. يستخدم أطباؤنا الخبراء وأخصائيو التجميل أحدث التقنيات والعلاجات لتعزيز جمالك - بسرية وأناقة وفعالية.',
    cqcRegulated: 'معتمد من CQC و HIS',
    doctorLed: 'علاج بإشراف طبي',
    newCustomerDiscounts: 'خصومات للعملاء الجدد',
    yearsOfExcellence: '10 سنوات من التميز',
  },

  buttons: {
    learnMore: 'اعرف المزيد',
    bookNow: 'احجز الآن',
    bookAppointment: 'احجز موعد',
    viewAll: 'عرض الكل',
    viewAllTreatments: 'عرض جميع العلاجات',
    getDirections: 'احصل على الاتجاهات',
    sendMessage: 'إرسال|رسالة',
    callNow: 'اتصل الآن',
    emailConsultation: 'استشارة عبر البريد الإلكتروني',
    whatsapp: 'واتساب',
    viewProfile: 'عرض الملف الشخصي',
    bookWith: 'احجز مع',
  },

  languageSwitcher: {
    selectLabel: 'اختر اللغة',
    languages: {
      en: { label: 'الإنجليزية', nativeName: 'English' },
      'zh-CN': { label: 'الصينية المبسطة', nativeName: '简体中文' },
      'zh-TW': { label: 'الصينية التقليدية', nativeName: '繁體中文' },
      ar: { label: 'العربية', nativeName: 'العربية' },
    },
  },

  about: {
    pageTitle: 'رؤيتنا ورسالتنا',
    pageSubtitle: 'تعرف أكثر على عيادة Beyond التجميلية',
    pageDescription: 'هنا في عيادة Beyond التجميلية، نتجاوز التوقعات لتقديم علاجات تجميلية متقدمة تعزز جمالك الطبيعي. من خلال نهج يركز على المريض أولاً، وممارسين خبراء، وتكنولوجيا متطورة، نخلق تجربة مخصصة مصممة لتحقيق أهدافك الفريدة، مما يضمن نتائج استثنائية في كل مرة.',
    makeBooking: 'احجز موعدك اليوم',
    trustedBy: 'موثوق به من قبل كبار المتخصصين في مجال التجميل',
    ourMission: 'مهمتنا',
    missionTitle: 'نتجاوز التميز في الطب التجميلي',
    elevatingCare: 'الارتقاء بالرعاية التجميلية',
    elevatingCareDesc: 'نؤمن بأن الجمال يجب أن يتم التعامل معه بخبرة ودقة ورعاية. يقدم فريقنا ذو المهارات العالية علاجات آمنة وفعالة ومدعومة علميًا، مما يضمن حصول كل مريض على نتائج عالمية المستوى في بيئة ترحيبية فاخرة.',
    yourJourney: 'رحلتك، خبرتنا',
    yourJourneyDesc: 'رحلتك لا تقل أهمية عن النتيجة. من خلال الاستشارات التفصيلية وخطط العلاج الشخصية والتقنيات الرائدة في الصناعة، نساعدك على تحقيق المظهر المطلوب مع الحفاظ على مظهر طبيعي ومنتعش.',
    whatMakesUsDifferent: 'ما الذي ',
    whatMakesUsDifferentHighlight: 'يميزنا؟',
    trustedExperts: 'خبراء موثوقون في الطب التجميلي',
    trustedExpertsDesc: 'فريقنا من الأطباء والممارسين المؤهلين يقدمون علاجات آمنة وفعالة مدعومة بالعلم.',
    honestAdvice: 'نصيحة صادقة، نتائج حقيقية',
    honestAdviceDesc: 'نقدم استشارات شفافة وتوقعات واقعية، مما يضمن اتخاذك قرارات مستنيرة.',
    familyTouch: 'التميز التجميلي مع لمسة عائلية',
    familyTouchDesc: 'نجمع بين الخبرة المهنية والنهج الدافئ الترحيبي الذي يجعلك تشعر وكأنك في منزلك.',
    whoWeAre: 'من ',
    whoWeAreHighlight: 'نحن',
    whoWeAreDesc: 'مع مواقع في لندن وإدنبرة، منذ عام 2006، رسخت عيادة Beyond الجمالية نفسها كرائدة في مجال التجميل الطبي. يقدم فريقنا من الخبراء علاجات الوجه والجسم المصممة لتعزيز ثقتك ورفاهيتك. نحن نعطي الأولوية للسلامة والابتكار والرعاية الشخصية، مما يضمن تخصيص كل خطة علاج لتلبية الاحتياجات الفريدة لمرضانا. من تجديد البشرة إلى نحت الجسم، نحن ملتزمون بتقديم نتائج استثنائية.',
    meetOurTeam: 'تعرف على ',
    meetOurTeamHighlight: 'فريقنا',
    teamSubtitle: 'وراء كل نتيجة استثنائية خبير يمكنك الوثوق به. يضم فريقنا المختار بعناية من المتخصصين في التجميل أطباء وممرضين وممارسين متقدمين رائدين مكرسين لتخصيص العلاجات وفقًا لاحتياجاتك.',
    specialistsInBeauty: 'متخصصون في الجمال',
    insideClinic: 'داخل ',
    insideClinicHighlight: 'عيادة Beyond الجمالية',
    gallery: 'المعرض',
    trustHonestyExpertise: 'الثقة والصدق و',
    trustHonestyExpertiseHighlight: 'الخبرة',
    trustDesc: 'نحن ملتزمون بتقديم نتائج تجميلية متميزة بنزاهة واحترافية. يعتمد نهجنا على الثقة والصدق والتميز السريري، مما يضمن حصول كل مريض على علاجات مصممة خصيصًا لتلبية احتياجاته الفريدة.',
    personalisedExperience: 'تجربة ',
    personalisedExperienceHighlight: 'شخصية حقيقية',
    personalisedDesc: 'كل فرد فريد من نوعه، وكذلك نهجنا في الرعاية التجميلية. نأخذ الوقت الكافي لفهم أهدافك، وصياغة خطة علاج مخصصة تعزز جمالك الطبيعي مع إعطاء الأولوية لصحة البشرة على المدى الطويل.',
    ourCommitment: 'التزامنا',
    safetyInnovation: 'السلامة و',
    safetyInnovationHighlight: 'الابتكار',
    safetyDesc: 'سلامة المرضى هي دائمًا أولويتنا القصوى. نستخدم فقط التقنيات والتقنيات الأكثر تقدمًا والمعتمدة سريريًا لضمان أن كل علاج آمن وفعال ومصمم وفقًا لاحتياجاتك. يخضع فريقنا باستمرار للتدريب للبقاء في صدارة الصناعة.',
    visitUsToday: 'قم بزيارتنا في لندن أو إدنبرة اليوم',
    visitDesc: 'اختبر الرعاية التجميلية المتخصصة في بيئة فاخرة هادئة. قم بزيارة عياداتنا في لندن أو إدنبرة وابدأ رحلة جمالك اليوم.',
    whereToFindUs: 'أين ',
    whereToFindUsHighlight: 'تجدنا',
    twoLocations: 'موقعان - علامة تجميلية راقية واحدة',
  },

  teamRoles: {
    aestheticDoctor: 'طبيب تجميل',
    seniorPractitioner: 'أخصائي تجميل أول',
    aestheticPractitioner: 'أخصائي تجميل',
    clientRelations: 'علاقات العملاء',
  },

  teamMembers: [
    {
      name: 'Dr Azadeh Manesh',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Azadeh-Manesh.png',
      description: 'الدكتورة أزاده مانيش متخصصة في التجميل غير الجراحي، وتقدم نتائج ذات مظهر طبيعي واستشارات شاملة للبشرة مصممة حسب الاحتياجات الفردية.',
      role: 'Aesthetic Doctor'
    },
    {
      name: 'Dr Sana Sadiq',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/DR-SANA-SADIQ.jpeg',
      description: 'الدكتورة سناء صادق تركز على تجميل الوجه الكامل، من خلال الجمع بين العلاجات التصحيحية والوقائية لتحقيق نتائج طبيعية مذهلة.',
      role: 'Aesthetic Doctor'
    },
    {
      name: 'Marianne',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/MARIANNE.jpg',
      description: 'ماريان تركز على التحسينات الطبيعية والتعديلات الدقيقة لإبراز ملامح وجهك.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Ewelina Roguska',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ewelina-Roguska-1.png',
      description: 'إيولينا لديها خبرة تزيد عن 9 سنوات وشغف بعلاج حب الشباب وآثار حب الشباب بالعلاجات الجلدية المتقدمة.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Louise Walker',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Louise-Walker-1.jpg',
      description: 'لويز تخصص علاجات البشرة باستخدام أجهزة طبية وتقنيات عناية متقدمة بخبرة تزيد عن 18 عامًا في مجال التجميل.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Joanna Pullar',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Joanna-Pullar-1.webp',
      description: 'جوانا أخصائية تجميل أولى ذات خبرة في التحليل الكهربائي وعلاجات البشرة المتقدمة.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Nazish Aman',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Nazish-Aman.jpg',
      description: 'ناز لديها خبرة تزيد عن 11 عامًا في مجال التجميل، تساعد في عمليات الاستقبال وتقدم علاجات عناية مخصصة.',
      role: 'Aesthetic Practitioner'
    },
    {
      name: 'Reza',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Reza.png',
      description: 'معروف بخدمته الخمس نجوم، رضا يضمن شعور العملاء بالراحة مع تقديم نصائح تجميلية خبيرة.',
      role: 'Aesthetic Practitioner'
    },
    {
      name: 'Leanne',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Leanne.jpg',
      description: 'ليان لديها خبرة تزيد عن 6 سنوات في خدمة العملاء، وتوفر حضورًا احترافيًا ومرحبًا في عيادة Beyond للتجميل.',
      role: 'Client Relations'
    },
    {
      name: 'Ruxi',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ruxi.png',
      description: 'روكسي لديها خبرة تزيد عن عقد من الزمان في مجال التجميل، متخصصة في علاجات العناية بالبشرة الحديثة وتدريب الممارسين.',
      role: 'Senior Aesthetic Practitioner'
    },
    {
      name: 'Claire Hill',
      image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Claire-Hill.png',
      description: 'كلير أخصائية تجميل أولى ذات خبرة تزيد عن 14 عامًا، متخصصة في علاجات إزالة الشعر بالليزر وإزالة الوشم.',
      role: 'Senior Aesthetic Practitioner'
    }
  ],

  testimonials: {
    title: 'ماذا يقول|عملاؤنا',
    subtitle: 'لا تأخذ كلامنا فقط. استمع إلى عملائنا الراضين الذين اختبروا الفرق في عيادة Beyond للجماليات في لندن وإدنبرة.',
    happyClients: 'عملاء سعداء',
    yearsExperience: 'سنوات من الخبرة',
    satisfactionRate: 'معدل الرضا',
  },

  clientReviews: [
    {
      name: 'Sarah Mitchell',
      location: 'London',
      rating: 5,
      text: 'الدكتورة آزاده رائعة للغاية! ذهبت لعلاج التجاعيد والنتائج فاقت توقعاتي. العيادة جميلة والموظفون محترفون ومرحبون للغاية.',
      treatment: 'علاج التجاعيد'
    },
    {
      name: 'Emma Thompson',
      location: 'Edinburgh',
      rating: 5,
      text: 'خضعت لعلاج HydraFacial وبشرتي لم تكن أبداً بهذا الجمال. كانت لويز رائعة - شرحت كل شيء وجعلتني أشعر بالراحة التامة طوال الوقت.',
      treatment: 'علاج HydraFacial'
    },
    {
      name: 'James Wilson',
      location: 'London',
      rating: 5,
      text: 'تجميد الدهون في عيادة Beyond للجماليات غيّر حياتي. الفريق كان محترفاً للغاية والنتائج تتحدث عن نفسها. أوصي به بشدة!',
      treatment: 'تجميد الدهون'
    },
    {
      name: 'Charlotte Davies',
      location: 'Edinburgh',
      rating: 5,
      text: 'الدكتورة سناء موهوبة حقاً. علاج الفيلر الخاص بي يبدو طبيعياً جداً - بالضبط ما أردته. كانت التجربة بأكملها مريحة ومهنية.',
      treatment: 'حشوات الجلد'
    },
    {
      name: 'Michael Brown',
      location: 'London',
      rating: 5,
      text: 'خدمة متميزة من البداية إلى النهاية. كانت الاستشارة شاملة وعلاج Profhilo أعطاني الثقة بالبشرة التي كنت أبحث عنها.',
      treatment: 'علاج Profhilo'
    },
    {
      name: 'Lucy Roberts',
      location: 'Edinburgh',
      rating: 5,
      text: 'أفضل عيادة تجميل ذهبت إليها على الإطلاق. عالجت إويلينا ندبات حب الشباب لدي بالإبر الدقيقة والتحسن لا يصدق. شكراً لكم!',
      treatment: 'العلاج بالإبر الدقيقة'
    }
  ],

  whyChooseUs: {
    title: 'إعادة تعريف التميز الجمالي|هذا ما نحن عليه',
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
    premiumLocations: 'مواقع متميزة',
  },

  faq: {
    title: 'عيادة Beyond الطبية التجميلية|الأسئلة الشائعة',
    visitTitle: 'قم بزيارة عيادتنا التجميلية في لندن أو إدنبرة اليوم',
    visitDesc: 'جرب الرعاية التجميلية الخبيرة في بيئة فاخرة وهادئة. قم بزيارة عياداتنا في لندن أو إدنبرة وابدأ رحلة جمالك اليوم.',
    callUs: 'اتصل بنا: 020 7201 8595',
  },

  contact: {
    pageTitle: 'تواصل|معنا',
    pageDescription: 'تواصل مع فريقنا لحجز استشارتك أو معرفة المزيد عن علاجاتنا.',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    locations: 'المواقع',
    hours: 'ساعات العمل',
    callDuringHours: 'اتصل بنا خلال ساعات العمل',
    respondWithin24Hours: 'نرد خلال 24 ساعة',
    twoConvenientLocations: 'موقعان مناسبان',
    extendedWeekendHours: 'ساعات عمل ممتدة في عطلة نهاية الأسبوع',
    sendMessage: 'أرسل لنا رسالة',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    emailAddress: 'البريد الإلكتروني',
    phoneNumber: 'الهاتف',
    preferredLocation: 'الموقع المفضل',
    selectLocation: 'اختر الموقع',
    message: 'الرسالة',
    messagePlaceholder: 'أخبرنا عن اهتماماتك بالعلاج...',
    visitOurClinics: 'قم بزيارة|عياداتنا',
    findOurLocations: 'ابحث عن|مواقعنا',
    findLocationsDesc: 'حدد موقع عياداتنا في لندن وإدنبرة بسهولة باستخدام الخرائط التفاعلية أدناه.',
    londonHarleyStreet: 'لندن - شارع هارلي',
    edinburghGeorgeStreet: 'إدنبرة - شارع جورج',
    needImmediate: 'هل تحتاج إلى|مساعدة فورية؟',
    needImmediateDesc: 'اتصل بنا مباشرة للاستفسارات العاجلة أو الحجوزات في اللحظة الأخيرة.',
    mondayToFriday: 'الإثنين - الجمعة: 9:00 صباحًا - 8:00 مساءً',
    saturdayToSunday: 'السبت - الأحد: 10:00 صباحًا - 6:00 مساءً',
    primaryPhoneNumber: '+44 (20) 7123 4567',
    secondaryPhoneNumber: '+44 (131) 456 7890',
    primaryEmail: 'info@magispa.co.uk',
    secondaryEmail: 'bookings@magispa.co.uk',
  },

  doctors: {
    pageTitle: 'تعرف على أطبائنا',
    pageDescription: 'يجلب فريقنا من المتخصصين الطبيين ذوي المؤهلات العالية سنوات من الخبرة والمعرفة لتقديم علاجات تجميلية استثنائية بأعلى معايير الرعاية.',
    expertDoctors: 'أطباء خبراء',
    yearsCombinedExperience: 'سنوات الخبرة المشتركة',
    averageRating: 'متوسط التقييم',
    clinicLocations: 'مواقع العيادات',
    experience: 'خبرة',
    specialties: 'التخصصات',
    qualifications: 'المؤهلات',
    languages: 'اللغات',
    readyToMeet: 'هل أنت مستعد لمقابلة فريقنا؟',
    readyToMeetDesc: 'احجز استشارة مع أحد أطبائنا الخبراء وابدأ رحلة التجميل الخاصة بك اليوم.',
    callToBook: 'اتصل للحجز',
  },

  services: {
    whatCanWeHelp: 'كيف يمكننا|المساعدة؟',
    injectables: 'الحقن التجميلية',
    injectablesDesc: 'علاجات مضادة للشيخوخة وتحسين الخبراء',
    skinTreatments: 'علاجات البشرة',
    skinTreatmentsDesc: 'علاجات متقدمة لبشرة مشرقة وصحية',
    bodyContouring: 'نحت الجسم وتقليل الدهون',
    bodyContouringDesc: 'حلول نحت الجسم غير الجراحية',
    skinConcerns: 'مشاكل البشرة',
    skinConcernsDesc: 'علاجات مستهدفة لمشاكل بشرة محددة',
    wellbeing: 'الصحة والعلاجات المتخصصة',
    wellbeingDesc: 'علاجات شاملة للعافية الجسدية والعقلية',

    antiWrinkle: 'علاج مضاد للتجاعيد',
    antiWrinkleDesc: 'تقليل الخطوط الدقيقة والتجاعيد للحصول على مظهر شاب',
    dermalFillers: 'الحشوات الجلدية والوجه',
    dermalFillersDesc: 'استعادة الحجم وتعزيز ملامح الوجه بشكل طبيعي',
    lipEnhancement: 'تكبير الشفاه',
    lipEnhancementDesc: 'احصل على شفاه أكثر امتلاءً وتحديدًا بدقة خبيرة',
    cheekEnhancement: 'تعزيز الخدود',
    cheekEnhancementDesc: 'إضافة حجم وتحديد لتعزيز بنية الوجه',
    nasolabialLines: 'خطوط الطيات الأنفية الشفوية',
    nasolabialLinesDesc: 'تنعيم خطوط الابتسامة للحصول على مظهر منتعش',
    underEyeCorrection: 'تصحيح تحت العين',
    underEyeCorrectionDesc: 'معالجة الهالات السوداء ومشاكل تحت العين',
    profhilo: 'بروفيلو',
    profhiloDesc: 'علاج إعادة البناء الحيوي لترطيب البشرة وثباتها',
    b12Injections: 'حقن فيتامين B12',
    b12InjectionsDesc: 'تعزيز مستويات الطاقة والصحة العامة',

    hydrafacial: 'هيدرافيشيال',
    hydrafacialDesc: 'علاج وجه للتنظيف العميق والترطيب',
    oxygenFacial: 'علاج الأكسجين للوجه',
    oxygenFacialDesc: 'علاج منشط لبشرة متوهجة',
    ledTherapy: 'العلاج بالضوء LED',
    ledTherapyDesc: 'علاج ضوئي متقدم لتجديد البشرة',
    microneedling: 'الوخز بالإبر الدقيقة',
    microneedlingDesc: 'تحفيز إنتاج الكولاجين لبشرة أكثر نعومة',
    chemicalPeels: 'التقشير الكيميائي',
    chemicalPeelsDesc: 'تقشير وتجديد نسيج البشرة ولونها',
    prpHair: 'PRP لنمو الشعر',
    prpHairDesc: 'العلاج بالبلازما الغنية بالصفائح الدموية لاستعادة الشعر',

    coolsculpting: 'كول سكالبتنج',
    coolsculptingDesc: 'تقنية تجميد الدهون المعتمدة من FDA',
    fatFreezing: 'تجميد الدهون',
    fatFreezingDesc: 'علاج تقليل الدهون غير الجراحي',
    vanquish: 'فانكويش',
    vanquishDesc: 'نحت الجسم بالترددات الراديوية',
    exilis: 'إكسيليس إليت للجسم',
    exilisDesc: 'شد البشرة وتقليل الدهون معًا',
    buttocksEnhancement: 'تعزيز الأرداف',
    buttocksEnhancementDesc: 'رفع ونحت الأرداف غير الجراحي',

    antiAgeing: 'علاجات مكافحة الشيخوخة',
    antiAgeingDesc: 'نهج شامل لمشاكل البشرة المرتبطة بالعمر',
    acneScarring: 'حب الشباب والندبات',
    acneScarringDesc: 'علاجات فعالة لحب الشباب وندبات ما بعد حب الشباب',
    sunDamage: 'أضرار الشمس والتصبغ',
    sunDamageDesc: 'معالجة فرط التصبغ وأضرار الشمس',
    sensitiveSkin: 'علاجات البشرة الحساسة',
    sensitiveSkinDesc: 'علاجات لطيفة لأنواع البشرة التفاعلية',
    moleRemoval: 'إزالة الشامة والزوائد الجلدية',
    moleRemovalDesc: 'إزالة آمنة للنمو الجلدي غير المرغوب فيه',

    antiCellulite: 'علاج مضاد للسيلوليت',
    antiCelluliteDesc: 'تقليل ظهور السيلوليت بحقن Alidya',
    harmonyMassage: 'تدليك الهارموني',
    harmonyMassageDesc: 'تدليك علاجي مريح لتخفيف التوتر',
    mesotherapy: 'الميزوثيرابي',
    mesotherapyDesc: 'حقن مغذيات مستهدفة لصحة البشرة',
    nutritionist: 'استشارة أخصائي تغذية',
    nutritionistDesc: 'نصائح خبيرة حول صحة البشرة والتغذية',
  },

  journey: {
    title: 'رحلة التحول الخاصة بك',
    subtitle: 'عملية بسيطة وفعالة لنتائج ملحوظة',
    step1Title: 'الاستشارة الأولية',
    step1Desc: 'تقييم كامل للبشرة وتطوير خطة علاج شخصية',
    step2Title: 'التحضير للعلاج',
    step2Desc: 'تنظيف وتحضير البشرة للإجراء المحدد',
    step3Title: 'تطبيق العلاج',
    step3Desc: 'تنفيذ الإجراءات بأحدث المعدات',
    step4Title: 'الرعاية بعد العلاج',
    step4Desc: 'توصيات للحفاظ على النتائج وجدول المتابعة',
    clientSatisfaction: 'رضا العملاء',
  },

  footer: {
    brandDescription: 'عيادة طب تجميلي مكرسة لجمالك وصحة بشرتك. تكنولوجيا متقدمة، نتائج ملحوظة.',
    services: 'الخدمات',
    quickLinks: 'روابط سريعة',
    aboutUs: 'عن العيادة',
    ourTeam: 'فريقنا',
    londonClinic: 'عيادة لندن',
    edinburghClinic: 'عيادة إدنبرة',
    bookTreatment: 'احجز علاج',
    contactInfo: 'اتصل بنا',
    londonAddress: 'لندن: 123 شارع هارلي، W1G 6AX',
    edinburghAddress: 'إدنبرة: 45 شارع الملكة، EH2 3NH',
    allRightsReserved: '© 2024 Aesthetic Lab. جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    termsConditions: 'الشروط والأحكام',
    cookies: 'سياسة ملفات تعريف الارتباط',
  },

  common: {
    years: 'سنوات',
    readMore: 'اقرأ المزيد',
    close: 'إغلاق',
    select: 'اختر',
    submit: 'إرسال',
    cancel: 'إلغاء',
    search: 'بحث',
    loading: 'جاري التحميل...',
    and: 'و',
  },
  procedurePages: bodyProcedurePagesAr,

  getMore: {
    title: 'احصل على المزيد|مع Beyond',
    benefits: {
      googleReviews: '4.7 نجوم عبر أكثر من 110 تقييم على جوجل',
      referFriend: 'خصومات إحالة الأصدقاء',
      freeConsultation: 'استشارة جلدية مجانية اختيارية مع كل موعد',
    },
  },

  personalisedApproach: {
    title: 'نهج شخصي|للجماليات',
    programs: {
      consultation: {
        title: 'الاستشارة',
        description: 'تقييم شخصي من قبل خبرائنا الطبيين',
      },
      customization: {
        title: 'التخصيص',
        description: 'خطة علاج مصممة خصيصاً لأهدافك',
      },
      treatment: {
        title: 'العلاج',
        description: 'إجراءات آمنة ومتقدمة لنتائج طبيعية',
      },
      aftercare: {
        title: 'الرعاية اللاحقة',
        description: 'دعم مستمر لجمال دائم',
      },
    },
    details: {
      consultAssess: {
        title: '1. الاستشارة والتقييم',
        description: 'نقدم استشارة شخصية لتقييم أهدافك والتوصية بأفضل علاجات الجلد أو الجسم أو الوجه الجمالية المناسبة لك. من خلال الاستشارة والتقييم الأوليين، يضمن فريقنا من الخبراء أن كل علاج يعزز جمالك الطبيعي مع تقديم نتائج حقيقية وملحوظة.',
      },
      bespokePlan: {
        title: '2. خطة علاج مخصصة',
        description: 'بعد استشارتك، نقوم بإنشاء خطة علاج مصممة خصيصاً حول تفضيلاتك العلاجية الفريدة ونمط حياتك وأهدافك. سواء كنت تتطلع إلى تجديد بشرتك أو نحت جسمك أو تحقيق تحسينات دقيقة للوجه، فإن خطتك مخصصة لتقديم نتائج آمنة وفعالة ودائمة.',
      },
      cuttingEdge: {
        title: '3. علاجات حديثة متطورة',
        description: 'نجمع بين التقنيات المتقدمة وأحدث التكنولوجيا الجمالية لضمان أن تكون علاجاتك مبتكرة وموجهة نحو النتائج. من العلاج بالكربوكسي والحشوات الحيوية إلى هيدرا فيشل والإبر الدقيقة مع الإكسوسومات، نظل في طليعة علم الجمال لضمان حصولك دائماً على أفضل خيارات العلاج. من الحقن المثبتة سريرياً إلى علاجات البشرة من الدرجة الطبية، يتم تنفيذ كل إجراء بدقة وأمان وفنية من قبل متخصصينا المدربين تدريباً عالياً.',
      },
      resultsAftercare: {
        title: '4. النتائج والرعاية اللاحقة',
        description: 'رحلتك لا تنتهي بعد العلاج. نحن نقدم دعماً مستمراً ورعاية لاحقة لتعظيم نتائجك والحفاظ عليها. يقدم فريقنا إرشادات خبراء حول التعافي والعناية بالبشرة والجلسات المتابعة، مما يضمن شعورك بالثقة والراحة والدعم الكامل في كل مرحلة.',
      },
    },
    stats: {
      experienceLabel: 'الخبرة',
      experienceValue: 'أكثر من 15 سنة',
      priceLabel: 'تبدأ العلاجات من',
      priceValue: '£200',
    },
  },

  expertMedicine: {
    title: 'نقدم فقط خدمات',
    titleHighlight: 'الطب التجميلي والجمال المتخصصة',
    subtitle: 'في عيادة Beyond للجماليات، يتم رعايتك دائماً من قبل خبراء يجمعون بين المعرفة الطبية والشغف بالتميز. نؤمن بالنتائج الآمنة والفعالة والطبيعية من خلال العلاجات المتخصصة وأحدث الرعاية الجمالية.',
    points: {
      quality: 'نحن لا نتنازل أبداً عن الجودة، باستخدام المنتجات الموثوقة والتقنيات المثبتة والأساليب المتقدمة فقط لتحقيق أفضل النتائج الجمالية الممكنة.',
      progress: 'نحن نتقدم باستمرار. يتدرب فريقنا على أحدث التقنيات الجمالية والمعايير الدولية للرعاية، بينما نستثمر أيضاً في الأجهزة الجديدة والتقنيات المثبتة لضمان أن تكون العلاجات آمنة ومريحة وموجهة نحو النتائج.',
      nonInvasive: 'نحن نتخصص في العلاجات الجمالية غير الجراحية وغير الغازية. هذا يعني علاجات منخفضة المخاطر وبدون وقت توقف توفر نتائج فورية ودائمة.',
    },
    buttonText: 'تعرف على الفريق',
  },

  locations: {
    title: 'مواقعنا|',
    subtitle: 'قم بزيارة عياداتنا المتميزة في لندن وإدنبرة للحصول على علاجات جمالية متخصصة',
    addressLabel: 'العنوان',
    phoneLabel: 'الهاتف',
    hoursLabel: 'ساعات العمل',
    parkingLabel: 'موقف السيارات',
    bookAppointment: 'حجز موعد',
    getDirections: 'الحصول على الاتجاهات',
    locationData: [
      {
        id: 1,
        city: 'لندن',
        address: 'موقع متميز، وسط لندن',
        phone: '+44 (20) 7123 4567',
        email: 'london@magispa.co.uk',
        hours: 'الاثنين - الجمعة: 9:00 - 18:00\nالسبت: 9:00 - 17:00\nالأحد: مغلق',
        parking: 'مواقف سيارات في الشارع',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.628183492772!2d-0.1624627224548056!3d51.50169031111937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605397680ad09%3A0x68bb8e672eb273a1!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20MediSpa!5e0!3m2!1sen!2sza!4v1758541805476!5m2!1sen!2sza',
      },
      {
        id: 2,
        city: 'إدنبرة',
        address: 'موقع متميز، وسط إدنبرة',
        phone: '+44 (131) 123 4567',
        email: 'edinburgh@magispa.co.uk',
        hours: 'الاثنين - الجمعة: 9:00 - 18:00\nالسبت: 9:00 - 16:00\nالأحد: مغلق',
        parking: 'مواقف سيارات قريبة',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.678446141864!2d-3.194440922303394!3d55.954944976402295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac0abf29af5%3A0xe8c125ae82237941!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20Medispa!5e0!3m2!1sen!2sza!4v1758541860806!5m2!1sen!2sza',
      },
    ],
  },

  faqQuestions: [
    {
      question: 'ما هي العلاجات التي تقدمها عيادة Beyond للجماليات؟',
      answer: 'تقدم عيادة Beyond للجماليات مجموعة واسعة من علاجات الطب التجميلي، بما في ذلك الحشوات الجلدية والعلاجات بالليزر ونحت الجسم. سواء كنت تبحث عن تقليل التجاعيد أو تعزيز جمالك الطبيعي أو تحقيق صورة ظلية منحوتة، فإن فريقنا المتخصص يصمم كل علاج خصيصاً لك.',
    },
    {
      question: 'هل علاجاتكم مناسبة لجميع أنواع البشرة؟',
      answer: 'نعم. يتخصص خبراء الطب التجميلي لدينا في علاج مجموعة متنوعة من مشاكل البشرة، من البشرة الجافة إلى البقع الداكنة والخطوط الدقيقة. نخصص كل علاج للبشرة وفقاً لاحتياجاتك الفريدة، مما يضمن أفضل النتائج الممكنة مع إعطاء الأولوية لصحة بشرتك.',
    },
    {
      question: 'ما هو نحت الجسم وكيف يعمل؟',
      answer: 'يساعد نحت الجسم على تشكيل وتحسين شكلك من خلال تقليل الدهون العنيدة وتعزيز التحديد. يقدم فريقنا المتخصص، بقيادة محترفين ذوي خبرة، علاجات غير جراحية وإجراءات إعادة تشكيل أكثر تقدماً مثل شفط الدهون.',
    },
    {
      question: 'كم من الوقت تستغرق العلاجات الجمالية؟',
      answer: 'تستغرق معظم العلاجات 30-90 دقيقة فقط، مما يجعلها سهلة الدمج في جدولك الزمني. لاحظ أن بعض الإجراءات قد تتطلب جلسات متعددة للحصول على نتائج مثلى وطويلة الأمد.',
    },
    {
      question: 'هل هناك فترة توقف بعد العلاج؟',
      answer: 'تتطلب العديد من علاجات عيادتنا الجمالية الحد الأدنى من وقت التوقف أو لا تتطلب أي وقت توقف. يعود العديد من العملاء إلى الأنشطة اليومية فوراً، على الرغم من أن العلاجات مثل إجراءات الليزر أو الحقن قد تسبب احمراراً أو تورماً طفيفاً لفترة قصيرة.',
    },
    {
      question: 'كيف أعرف أي علاج مناسب لي؟',
      answer: 'نقدم استشارة مخصصة لتقييم أهدافك والتوصية بأفضل علاجات البشرة أو الجسم أو الوجه الجمالية لك. يضمن فريقنا المتخصص أن كل علاج يعزز جمالك الطبيعي ويحقق نتائج حقيقية وملموسة.',
    },
    {
      question: 'هل يمكنني الجمع بين العلاجات للحصول على تحول كامل؟',
      answer: 'بالتأكيد. يختار العديد من العملاء الجمع بين جماليات الوجه وعلاجات الجسم والطب التجميلي للحصول على نهج شامل ومخصص. سواء كنت ترغب في تنعيم التجاعيد أو استعادة صحة البشرة أو تحسين مظهرك، فإننا نضع خطط علاج مخصصة لتناسب احتياجاتك.',
    },
    {
      question: 'كيف يمكنني حجز استشارة؟',
      answer: 'الحجز بسيط. اتصل بنا الآن، أو اتصل بنا على 020 7201 8595، أو قم بزيارة عيادتنا الجمالية في لندن أو إدنبرة لبدء رحلتك الجمالية اليوم. فريقنا هنا لإرشادك نحو نتائج حقيقية بثقة.',
    },
  ],
};

// Export all translations
export const translations = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ar,
};

// Helper function to get translations for a specific language
export function useTranslations(language: string): Translations {
  return translations[language as keyof typeof translations] || translations.en;
}

export type Language = keyof typeof translations;
