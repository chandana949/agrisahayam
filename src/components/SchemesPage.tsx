import { ExternalLink, IndianRupee, Building2, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useLanguage } from './LanguageContext';

export const SchemesPage = () => {
  const { t, language } = useLanguage();

  const schemes = [
    {
      id: 'pm-kisan',
      name: t('pmKisan'),
      description: t('pmKisanDesc'),
      icon: IndianRupee,
      steps: language === 'en' ? [
        'Visit the PM-KISAN official website or nearest CSC center',
        'Fill the registration form with Aadhaar details',
        'Submit land ownership documents',
        'Verification by local authorities',
        'Receive ₹2,000 installments three times a year',
      ] : [
        'PM-కిసాన్ అధికారిక వెబ్‌సైట్ లేదా సమీప CSC కేంద్రాన్ని సందర్శించండి',
        'ఆధార్ వివరాలతో రిజిస్ట్రేషన్ ఫారమ్ పూరించండి',
        'భూ యాజమాన్య పత్రాలను సమర్పించండి',
        'స్థానిక అధికారులచే ధృవీకరణ',
        'సంవత్సరానికి మూడు సార్లు ₹2,000 వాయిదాలను అందుకోండి',
      ],
    },
    {
      id: 'kcc',
      name: t('kcc'),
      description: t('kccDesc'),
      icon: Building2,
      steps: language === 'en' ? [
        'Visit your nearest bank branch',
        'Carry land records, Aadhaar, and identity proof',
        'Fill KCC application form',
        'Bank processes the application (7-10 days)',
        'Receive KCC card with credit limit',
      ] : [
        'మీ సమీప బ్యాంక్ శాఖను సందర్శించండి',
        'భూ రికార్డులు, ఆధార్ మరియు గుర్తింపు రుజువును తీసుకురండి',
        'KCC దరఖాస్తు ఫారమ్ పూరించండి',
        'బ్యాంక్ దరఖాస్తును ప్రాసెస్ చేస్తుంది (7-10 రోజులు)',
        'క్రెడిట్ పరిమితితో KCC కార్డ్ అందుకోండి',
      ],
    },
    {
      id: 'pmfby',
      name: t('pmfby'),
      description: t('pmfbyDesc'),
      icon: CheckCircle2,
      steps: language === 'en' ? [
        'Contact bank or insurance agent during sowing season',
        'Submit land details and crop information',
        'Pay nominal premium (2% for Kharif, 1.5% for Rabi)',
        'Get policy certificate',
        'Claim in case of crop loss due to natural calamities',
      ] : [
        'విత్తన కాలంలో బ్యాంక్ లేదా బీమా ఏజెంట్‌ను సంప్రదించండి',
        'భూమి వివరాలు మరియు పంట సమాచారాన్ని సమర్పించండి',
        'నామమాత్రపు ప్రీమియం చెల్లించండి (ఖరీఫ్‌కు 2%, రబీకి 1.5%)',
        'పాలసీ సర్టిఫికేట్ పొందండి',
        'ప్రకృతి వైపరీత్యాల కారణంగా పంట నష్టం జరిగినప్పుడు క్లెయిమ్ చేయండి',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#5FA45A] dark:text-[#7BC277] mb-4">
            {t('schemesTitle')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Explore government schemes and subsidies available for farmers'
              : 'రైతులకు అందుబాటులో ఉన్న ప్రభుత్వ పథకాలు మరియు సబ్సిడీలను అన్వేషించండి'}
          </p>
        </div>

        {/* Schemes Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {schemes.map((scheme) => {
            const Icon = scheme.icon;
            return (
              <AccordionItem
                key={scheme.id}
                value={scheme.id}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-[#5FA45A]/10 dark:bg-[#5FA45A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#5FA45A] dark:text-[#7BC277]" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white mb-1">{scheme.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {scheme.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="mb-4 text-[#5FA45A] dark:text-[#7BC277]">
                      {t('howToApply')}
                    </h4>
                    <ol className="space-y-3">
                      {scheme.steps.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#5FA45A] text-white rounded-full flex items-center justify-center text-xs">
                            {index + 1}
                          </span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 pt-0.5">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-6">
                      <Button className="bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full gap-2">
                        <ExternalLink className="w-4 h-4" />
                        {t('applyNow')}
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-[#F5C542]/10 dark:bg-[#F5C542]/20 rounded-lg border border-[#F5C542]/30">
          <h3 className="text-gray-900 dark:text-white mb-3">
            {language === 'en' ? 'Need Help?' : 'సహాయం అవసరమా?'}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {language === 'en'
              ? 'Visit your nearest Common Service Center (CSC) or contact our helpline for assistance with applications.'
              : 'దరఖాస్తులతో సహాయం కోసం మీ సమీప కామన్ సర్వీస్ సెంటర్ (CSC)ని సందర్శించండి లేదా మా హెల్ప్‌లైన్‌ను సంప్రదించండి.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Helpline:' : 'హెల్ప్‌లైన్:'}
              </span>
              <span className="text-[#5FA45A] dark:text-[#7BC277]">1800-XXX-XXXX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
