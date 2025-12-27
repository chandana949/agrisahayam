import { Sprout, Users, Handshake, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sprout,
      title: t('language') === 'en' ? 'Modern Tools' : 'ఆధునిక పరికరాలు',
      description: t('language') === 'en' ? 'Access affordable agricultural technology' : 'సరసమైన వ్యవసాయ సాంకేతికతను పొందండి',
    },
    {
      icon: Users,
      title: t('language') === 'en' ? 'Community Support' : 'సమాజ మద్దతు',
      description: t('language') === 'en' ? 'Connect with fellow farmers and experts' : 'తోటి రైతులు మరియు నిపుణులతో కనెక్ట్ అవ్వండి',
    },
    {
      icon: Handshake,
      title: t('language') === 'en' ? 'Government Schemes' : 'ప్రభుత్వ పథకాలు',
      description: t('language') === 'en' ? 'Learn about subsidies and support' : 'సబ్సిడీలు మరియు మద్దతు గురించి తెలుసుకోండి',
    },
    {
      icon: TrendingUp,
      title: t('language') === 'en' ? 'Training & Growth' : 'శిక్షణ & అభివృద్ధి',
      description: t('language') === 'en' ? 'Free training on modern farming' : 'ఆధునిక వ్యవసాయంపై ఉచిత శిక్షణ',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#5FA45A]/10 via-[#F5C542]/10 to-[#8B6B4B]/10 dark:from-[#5FA45A]/20 dark:via-[#F5C542]/20 dark:to-[#8B6B4B]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-[#5FA45A] dark:text-[#7BC277] mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {t('heroSubtext')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => onNavigate('tools')}
                  className="bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full px-8"
                >
                  {t('findTools')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('learning')}
                  className="border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white rounded-full px-8"
                >
                  {t('getTraining')}
                </Button>
              </div>
              <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 italic">
                "{t('tagline')}"
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1696371269645-7297d31dd4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBmaWVsZCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2MTM3NTIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Farmer in field"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F5C542] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#5FA45A] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white dark:fill-gray-950">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#5FA45A]/10 dark:bg-[#5FA45A]/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#5FA45A] dark:text-[#7BC277]" />
                  </div>
                  <h3 className="mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#5FA45A] to-[#4E8A4A] dark:from-[#5FA45A]/90 dark:to-[#4E8A4A]/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            {t('language') === 'en' ? 'Ready to Transform Your Farm?' : 'మీ పొలాన్ని మార్చడానికి సిద్ధంగా ఉన్నారా?'}
          </h2>
          <p className="mb-8 text-white/90">
            {t('language') === 'en' 
              ? 'Join thousands of farmers already benefiting from modern agricultural technology.'
              : 'ఆధునిక వ్యవసాయ సాంకేతికత నుండి ఇప్పటికే ప్రయోజనం పొందుతున్న వేలాది రైతులతో చేరండి.'}
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#5FA45A] hover:bg-gray-100 rounded-full px-8 border-0"
          >
            {t('contact')}
          </Button>
        </div>
      </section>
    </div>
  );
};
