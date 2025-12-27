import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    tools: 'Tools',
    schemes: 'Schemes',
    learning: 'Learning',
    community: 'Community',
    locate: 'Locate Centers',
    contact: 'Contact',
    
    // Home Page
    heroTitle: 'Bringing Modern Tools to Every Farmer\'s Field',
    heroSubtext: 'Empathy-driven innovation for accessible and affordable agriculture',
    findTools: 'Find Tools',
    getTraining: 'Get Training',
    tagline: 'Technology that Understands Farmers',
    
    // Tools Page
    toolsTitle: 'Affordable Tools & Technology',
    machinery: 'Machinery',
    irrigation: 'Irrigation',
    soilHealth: 'Soil Health',
    others: 'Others',
    all: 'All',
    availableNearMe: 'Available Near Me',
    learnMore: 'Learn More',
    compareTools: 'Compare Tools',
    rentToolsTitle: 'Rent Tools from Community',
    rentPerDay: 'Rent/Day',
    viewDetails: 'View Details',
    ownerDetails: 'Owner Details',
    closeDialog: 'Close',
    phone: 'Phone',
    location: 'Location',
    availability: 'Availability',
    rentNow: 'Rent Now',
    addYourTool: 'List Your Tool',
    addToolTitle: 'Add Your Tool to Marketplace',
    addToolDesc: 'Share your farming equipment with fellow farmers',
    toolName: 'Tool Name',
    description: 'Description',
    category: 'Category',
    listingType: 'Listing Type',
    forSale: 'For Sale',
    forRent: 'For Rent',
    price: 'Price',
    rentPrice: 'Rent per Day',
    ownerName: 'Your Name',
    contactNumber: 'Contact Number',
    district: 'District/Location',
    availabilitySchedule: 'Availability Schedule',
    submitListing: 'Submit Listing',
    toolImage: 'Tool Image (Optional)',
    
    // Schemes Page
    schemesTitle: 'Government Schemes & Subsidies',
    howToApply: 'How to Apply',
    applyNow: 'Apply Now',
    
    // Learning Page
    learningTitle: 'Learn How to Use New Farming Tools',
    watchVideo: 'Watch Video',
    
    // Community Page
    communityTitle: 'Farmer Community',
    discussionForum: 'Discussion Forum',
    askExpert: 'Ask an Expert',
    collaborate: 'Collaborate',
    forumDesc: 'Ask and answer questions',
    expertDesc: 'Get help from agricultural experts',
    collaborateDesc: 'For NGOs and tech partners',
    
    // Locate Page
    locateTitle: 'Find Nearby Centers',
    enterLocation: 'Enter your district or pin code',
    search: 'Search',
    
    // Contact Page
    contactTitle: 'Get in Touch',
    name: 'Name',
    village: 'Village',
    question: 'Your Question',
    submit: 'Submit',
    whatsapp: 'WhatsApp Us',
    helpline: 'Helpline',
    
    // Footer
    sdgCaption: 'Aligned with UN Sustainable Development Goals for poverty reduction, hunger elimination, and inclusive innovation',
    
    // Tool Names
    tractor: 'Mini Tractor',
    drone: 'Agricultural Drone',
    pump: 'Solar Irrigation Pump',
    sensor: 'Soil Moisture Sensor',
    
    // Descriptions
    tractorDesc: 'Compact tractor suitable for small farms',
    droneDesc: 'For pesticide spraying and crop monitoring',
    pumpDesc: 'Energy-efficient solar-powered pump',
    sensorDesc: 'Monitor soil moisture levels in real-time',
    
    // Schemes
    pmKisan: 'PM-KISAN',
    kcc: 'Kisan Credit Card',
    pmfby: 'PM Fasal Bima Yojana',
    pmKisanDesc: 'Direct income support of ₹6,000 per year',
    kccDesc: 'Easy credit facility for farmers',
    pmfbyDesc: 'Crop insurance against natural calamities',
    
    // Learning
    soilSensors: 'Using Soil Sensors',
    dripIrrigation: 'Setting up Drip Irrigation',
    droneSafety: 'Using Drones Safely',
  },
  te: {
    // Navigation
    home: 'హోమ్',
    tools: 'పరికరాలు',
    schemes: 'పథకాలు',
    learning: 'నేర్చుకోండి',
    community: 'సమాజం',
    locate: 'కేంద్రాలు కనుగొనండి',
    contact: 'సంప్రదించండి',
    
    // Home Page
    heroTitle: 'ప్రతి రైతు పొలానికి ఆధునిక పరికరాలను అందిస్తోంది',
    heroSubtext: 'అందుబాటులో ఉండే మరియు సరసమైన వ్యవసాయం కోసం సానుభూతితో కూడిన ఆవిష్కరణ',
    findTools: 'పరికరాలు కనుగొనండి',
    getTraining: 'శిక్షణ పొందండి',
    tagline: 'రైతులను అర్థం చేసుకునే సాంకేతికత',
    
    // Tools Page
    toolsTitle: 'సరసమైన పరికరాలు & సాంకేతికత',
    machinery: 'యంత్రాలు',
    irrigation: 'నీటిపారుదల',
    soilHealth: 'నేల ఆరోగ్యం',
    others: 'ఇతరాలు',
    all: 'అన్నీ',
    availableNearMe: 'నా సమీపంలో అందుబాటులో ఉంది',
    learnMore: 'మరింత తెలుసుకోండి',
    compareTools: 'పరికరాలను పోల్చండి',
    rentToolsTitle: 'సమాజం నుండి పరికరాలను భారీకరించండి',
    rentPerDay: 'భారీకరణ/రోజు',
    viewDetails: 'వివరాలను చూడండి',
    ownerDetails: 'మాలిక వివరాలు',
    closeDialog: 'ముందుకు',
    phone: 'ఫోన్',
    location: 'స్థానం',
    availability: 'అందుబాటు',
    rentNow: 'ఇప్పుడే భారీకరించండి',
    addYourTool: 'మీ పరికరాన్ని పేర్కొనండి',
    addToolTitle: 'మీ పరికరాన్ని మార్కెట్‌ప్లేస్‌కు చేర్కోండి',
    addToolDesc: 'మీ పొలానికి ఉపయోగించే పరికరాలను మీ మీత్ర రైతులతో శాంతిశాల్యం చేయండి',
    toolName: 'పరికరా పేరు',
    description: 'వివరణ',
    category: 'వర్గం',
    listingType: 'వివరాల రకం',
    forSale: 'ముందుకు విక్రయం',
    forRent: 'ముందుకు భారీకరణ',
    price: 'ధర',
    rentPrice: 'భారీకరణ రోజుకు',
    ownerName: 'మీ పేరు',
    contactNumber: 'సంప్రదించు సంఖ్య',
    district: 'జిల్లా/స్థానం',
    availabilitySchedule: 'అందుబాటు స్కేజుల్',
    submitListing: 'వివరాలను సమర్పించు',
    toolImage: 'పరికరా చిత్రం (ఎంపియాంట్)',
    
    // Schemes Page
    schemesTitle: 'ప్రభుత్వ పథకాలు & సబ్సిడీలు',
    howToApply: 'ఎలా దరఖాస్తు చేయాలి',
    applyNow: 'ఇప్పుడే దరఖాస్తు చేయండి',
    
    // Learning Page
    learningTitle: 'కొత్త వ్యవసాయ పరికరాలను ఉపయోగించడం నేర్చుకోండి',
    watchVideo: 'వీడియో చూడండి',
    
    // Community Page
    communityTitle: 'రైతు సమాజం',
    discussionForum: 'చర్చా వేదిక',
    askExpert: 'నిపుణులను అడగండి',
    collaborate: 'సహకరించండి',
    forumDesc: 'ప్రశ్నలు అడగండి మరియు సమాధానా��ు ఇవ్వండి',
    expertDesc: 'వ్యవసాయ నిపుణుల నుండి సహాయం పొందండి',
    collaborateDesc: 'NGOలు మరియు టెక్ భాగస్వాముల కోసం',
    
    // Locate Page
    locateTitle: 'సమీప కేంద్రాలను కనుగొనండి',
    enterLocation: 'మీ జిల్లా లేదా పిన్ కోడ్ నమోదు చేయండి',
    search: 'వెతకండి',
    
    // Contact Page
    contactTitle: 'మాతో సంప్రదించండి',
    name: 'పేరు',
    village: 'గ్రామం',
    question: 'మీ ప్రశ్న',
    submit: 'సమర్పించు',
    whatsapp: 'WhatsApp ద్వారా',
    helpline: 'హెల్ప్‌లైన్',
    
    // Footer
    sdgCaption: 'పేదరిక తగ్గింపు, ఆకలి నిర్మూలన మరియు సమ్మిళిత ఆవిష్కరణ కోసం UN స్థిరమైన అభివృద్ధి లక్ష్యాలతో సమలేఖనం చేయబడింది',
    
    // Tool Names
    tractor: 'మినీ ట్రాక్టర్',
    drone: 'వ్యవసాయ డ్రోన్',
    pump: 'సౌర నీటిపారుదల పంపు',
    sensor: 'మట్టి తేమ సెన్సార్',
    
    // Descriptions
    tractorDesc: 'చిన్న పొలాలకు అనువైన కాంపాక్ట్ ట్రాక్టర్',
    droneDesc: 'పురుగుమందుల చల్లడం మరియు పంట పర్యవేక్షణ కోసం',
    pumpDesc: 'శక్తి-సామర్థ్యవంతమైన సౌర శక్తితో పనిచేసే పంపు',
    sensorDesc: 'నిజ సమయంలో మట్టి తేమ స్థాయిలను పర్యవేక్షించండి',
    
    // Schemes
    pmKisan: 'PM-కిసాన్',
    kcc: 'కిసాన్ క్రెడిట్ కార్డ్',
    pmfby: 'PM ఫసల్ బీమా యోజన',
    pmKisanDesc: 'సంవత్సరానికి ₹6,000 ప్రత్యక్ష ఆదాయ మద్దతు',
    kccDesc: 'రైతుల కోసం సులభమైన రుణ సౌకర్యం',
    pmfbyDesc: 'ప్రకృతి వైపరీత్యాలకు వ్యతిరేకంగా పంట బీమా',
    
    // Learning
    soilSensors: 'మట్టి సెన్సార్లను ఉపయోగించడం',
    dripIrrigation: 'డ్రిప్ ఇరిగేషన్ సెటప్ చేయడం',
    droneSafety: 'డ్రోన్లను సురక్షితంగా ఉపయోగించడం',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};