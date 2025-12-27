import { MapPin, Search, Phone, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { useLanguage } from './LanguageContext';

export const LocatePage = () => {
  const { t, language } = useLanguage();

  const centers = [
    {
      id: 1,
      name: language === 'en' ? 'Warangal Agri Tool Bank' : 'వరంగల్ అగ్రి టూల్ బ్యాంక్',
      type: language === 'en' ? 'Tool Bank' : 'టూల్ బ్యాంక్',
      address: language === 'en' 
        ? 'Station Road, Warangal - 506001'
        : 'స్టేషన్ రోడ్, వరంగల్ - 506001',
      phone: '+91 870-XXX-XXXX',
      hours: language === 'en' ? '9:00 AM - 6:00 PM' : '9:00 AM - 6:00 PM',
      distance: '5.2 km',
    },
    {
      id: 2,
      name: language === 'en' ? 'Karimnagar Farmers Co-op' : 'కరీంనగర్ రైతుల సహకార సంఘం',
      type: language === 'en' ? 'Co-operative' : 'సహకార సంఘం',
      address: language === 'en'
        ? 'Main Market, Karimnagar - 505001'
        : 'మెయిన్ మార్కెట్, కరీంనగర్ - 505001',
      phone: '+91 878-XXX-XXXX',
      hours: language === 'en' ? '8:00 AM - 7:00 PM' : '8:00 AM - 7:00 PM',
      distance: '8.7 km',
    },
    {
      id: 3,
      name: language === 'en' ? 'Khammam District Agriculture Office' : 'ఖమ్మం జిల్లా వ్యవసాయ కార్యాలయం',
      type: language === 'en' ? 'Government Office' : 'ప్రభుత్వ కార్యాలయం',
      address: language === 'en'
        ? 'Collectorate Complex, Khammam - 507001'
        : 'కలెక్టరేట్ కాంప్లెక్స్, ఖమ్మం - 507001',
      phone: '+91 874-XXX-XXXX',
      hours: language === 'en' ? '10:00 AM - 5:00 PM' : '10:00 AM - 5:00 PM',
      distance: '12.3 km',
    },
    {
      id: 4,
      name: language === 'en' ? 'Nizamabad Training Center' : 'నిజామాబాద్ శిక్షణా కేంద్రం',
      type: language === 'en' ? 'Training Center' : 'శిక్షణా కేంద్రం',
      address: language === 'en'
        ? 'Agricultural College Road, Nizamabad - 503001'
        : 'అగ్రికల్చరల్ కాలేజ్ రోడ్, నిజామాబాద్ - 503001',
      phone: '+91 846-XXX-XXXX',
      hours: language === 'en' ? '9:00 AM - 5:00 PM' : '9:00 AM - 5:00 PM',
      distance: '15.8 km',
    },
  ];

  const typeColors: { [key: string]: string } = {
    'Tool Bank': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    'టూల్ బ్యాంక్': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    'Co-operative': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'సహకార సంఘం': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'Government Office': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    'ప్రభుత్వ కార్యాలయం': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    'Training Center': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
    'శిక్షణా కేంద్రం': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5FA45A]/10 dark:bg-[#5FA45A]/20 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-[#5FA45A] dark:text-[#7BC277]" />
          </div>
          <h1 className="text-[#5FA45A] dark:text-[#7BC277] mb-4">
            {t('locateTitle')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Find tool banks, agricultural offices, and training centers near you'
              : 'మీకు సమీపంలోని టూల్ బ్యాంకులు, వ్యవసాయ కార్యాలయాలు మరియు శిక్షణా కేంద్రాలను కనుగొనండి'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder={t('enterLocation')}
                className="pl-10 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
              />
            </div>
            <Button className="bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full px-8">
              {t('search')}
            </Button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div className="aspect-[16/9] bg-gradient-to-br from-[#5FA45A]/10 to-[#F5C542]/10 dark:from-[#5FA45A]/20 dark:to-[#F5C542]/20 flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#5FA45A] dark:text-[#7BC277] mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'en' 
                  ? 'Interactive map showing nearby centers'
                  : 'సమీప కేంద్రాలను చూపుతున్న ఇంటరాక్టివ్ మ్యాప్'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                {language === 'en'
                  ? '(Map integration coming soon)'
                  : '(మ్యాప్ ఇంటిగ్రేషన్ త్వరలో వస్తుంది)'}
              </p>
            </div>
            {/* Decorative map markers */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
            <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
          </div>
        </div>

        {/* Centers List */}
        <div className="space-y-4">
          <h2 className="text-gray-900 dark:text-white mb-6">
            {language === 'en' ? 'Nearby Centers' : 'సమీప కేంద్రాలు'}
          </h2>
          {centers.map((center) => (
            <Card key={center.id} className="p-6 hover:shadow-lg transition-shadow border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-gray-900 dark:text-white mb-2">
                        {center.name}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs ${typeColors[center.type] || 'bg-gray-100'}`}>
                        {center.type}
                      </span>
                    </div>
                    <div className="text-sm text-[#5FA45A] dark:text-[#7BC277]">
                      📍 {center.distance}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{center.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{center.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 md:flex-none bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full"
                  >
                    {language === 'en' ? 'Get Directions' : 'దిశలను పొందండి'}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 md:flex-none rounded-full border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white"
                  >
                    {language === 'en' ? 'Call' : 'కాల్ చేయండి'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-[#F5C542]/10 dark:bg-[#F5C542]/20 rounded-lg border border-[#F5C542]/30">
          <h3 className="text-gray-900 dark:text-white mb-2">
            {language === 'en' ? 'Can\'t find a center near you?' : 'మీకు సమీపంలో కేంద్రం కనుగొనలేకపోతున్నారా?'}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {language === 'en'
              ? 'Contact our helpline to find the nearest agricultural resource center or request a mobile service visit.'
              : 'సమీప వ్యవసాయ వనరుల కేంద్రాన్ని కనుగొనడానికి లేదా మొబైల్ సేవా సందర్శనను అభ్యర్థించడానికి మా హెల్ప్‌లైన్‌ను సంప్రదించండి.'}
          </p>
          <Button variant="outline" className="rounded-full border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white">
            {language === 'en' ? 'Contact Helpline' : 'హెల్ప్‌లైన్‌ను సంప్రదించండి'}
          </Button>
        </div>
      </div>
    </div>
  );
};
