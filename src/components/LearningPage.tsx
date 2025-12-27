import { Play, BookOpen, Video } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const LearningPage = () => {
  const { t, language } = useLanguage();

  const tutorials = [
    {
      id: 1,
      title: t('soilSensors'),
      duration: language === 'en' ? '12 min' : '12 నిమి',
      level: language === 'en' ? 'Beginner' : 'ప్రారంభ స్థాయి',
      image: 'https://images.unsplash.com/photo-1599320092708-8a9dde49fc2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwaGFuZHMlMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQ4MDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: language === 'en'
        ? 'Learn to install and read soil moisture sensors for optimal irrigation'
        : 'సరైన నీటిపారుదల కోసం మట్టి తేమ సెన్సార్లను ఇన్‌స్టాల్ చేయడం మరియు చదవడం నేర్చుకోండి',
    },
    {
      id: 2,
      title: t('dripIrrigation'),
      duration: language === 'en' ? '18 min' : '18 నిమి',
      level: language === 'en' ? 'Intermediate' : 'మధ్యస్థ స్థాయి',
      image: 'https://images.unsplash.com/photo-1689349483530-bb7a0734d9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwd2F0ZXIlMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQ4MDUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: language === 'en'
        ? 'Step-by-step guide to setting up an efficient drip irrigation system'
        : 'సమర్థవంతమైన డ్రిప్ ఇరిగేషన్ వ్యవస్థను ఏర్పాటు చేయడానికి దశల వారీ గైడ్',
    },
    {
      id: 3,
      title: t('droneSafety'),
      duration: language === 'en' ? '15 min' : '15 నిమి',
      level: language === 'en' ? 'Advanced' : 'అధునాతన స్థాయి',
      image: 'https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE0ODA1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: language === 'en'
        ? 'Safe operation and best practices for agricultural drones'
        : 'వ్యవసాయ డ్రోన్ల కోసం సురక్షిత ఆపరేషన్ మరియు ఉత్తమ పద్ధతులు',
    },
    {
      id: 4,
      title: language === 'en' ? 'Organic Pest Management' : 'సేంద్రీయ తెగులు నిర్వహణ',
      duration: language === 'en' ? '20 min' : '20 నిమి',
      level: language === 'en' ? 'Beginner' : 'ప్రారంభ స్థాయి',
      image: 'https://images.unsplash.com/photo-1630600967074-3095a8865ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZpZWxkJTIwY3JvcHN8ZW58MXx8fHwxNzYxNDgwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: language === 'en'
        ? 'Natural methods for controlling pests without harmful chemicals'
        : 'హానికరమైన రసాయనాలు లేకుండా తెగుళ్లను నియంత్రించడానికి సహజ పద్ధతులు',
    },
    {
      id: 5,
      title: language === 'en' ? 'Tractor Maintenance Basics' : 'ట్రాక్టర్ నిర్వహణ ప్రాథమికాలు',
      duration: language === 'en' ? '25 min' : '25 నిమి',
      level: language === 'en' ? 'Intermediate' : 'మధ్యస్థ స్థాయి',
      image: 'https://images.unsplash.com/photo-1685474442734-bb453f03060d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFjdG9yJTIwZmFybWluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE0ODA1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: language === 'en'
        ? 'Essential maintenance tips to keep your tractor running smoothly'
        : 'మీ ట్రాక్టర్ సజావుగా నడిచేలా ఉండటానికి అవసరమైన నిర్వహణ చిట్కాలు',
    },
    {
      id: 6,
      title: language === 'en' ? 'Weather-Based Farming' : 'వాతావరణ ఆధారిత వ్యవసాయం',
      duration: language === 'en' ? '16 min' : '16 నిమి',
      level: language === 'en' ? 'Beginner' : 'ప్రారంభ స్థాయి',
      image: 'https://images.unsplash.com/photo-1677501002892-6fe7ba4bfe98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0cmFpbmluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MTQ4MDUzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: language === 'en'
        ? 'Use weather forecasts and data to plan your farming activities'
        : 'మీ వ్యవసాయ కార్యకలాపాలను ప్లాన్ చేయడానికి వాతావరణ అంచనాలు మరియు డేటాను ఉపయోగించండి',
    },
  ];

  const levelColors: { [key: string]: string } = {
    'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'ప్రారంభ స్థాయి': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    'మధ్యస్థ స్థాయి': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    'Advanced': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
    'అధునాతన స్థాయి': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5FA45A]/10 dark:bg-[#5FA45A]/20 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-[#5FA45A] dark:text-[#7BC277]" />
          </div>
          <h1 className="text-[#5FA45A] dark:text-[#7BC277] mb-4">
            {t('learningTitle')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Free video tutorials in English and Telugu to help you master modern farming techniques'
              : 'ఆధునిక వ్యవసాయ పద్ధతులను నేర్చుకోవడానికి ఇంగ్లీష్ మరియు తెలుగులో ఉచిత వీడియో ట్యుటోరియల్స్'}
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="overflow-hidden hover:shadow-xl transition-shadow group border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                <ImageWithFallback
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-[#5FA45A] ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge className={levelColors[tutorial.level] || 'bg-gray-100'}>
                    {tutorial.level}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <Video className="w-4 h-4" />
                  <span>{tutorial.duration}</span>
                </div>
                <h3 className="mb-2 text-gray-900 dark:text-white">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {tutorial.description}
                </p>
                <Button className="w-full bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full gap-2">
                  <Play className="w-4 h-4" />
                  {t('watchVideo')}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#5FA45A]/10 to-[#F5C542]/10 dark:from-[#5FA45A]/20 dark:to-[#F5C542]/20 rounded-2xl border border-[#5FA45A]/20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-gray-900 dark:text-white mb-3">
              {language === 'en' ? 'Want Offline Access?' : 'ఆఫ్‌లైన్ యాక్సెస్ కావాలా?'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {language === 'en'
                ? 'Download our mobile app to access all tutorials offline and get notifications for new content.'
                : 'అన్ని ట్యుటోరియల్స్‌ను ఆఫ్‌లైన్‌లో యాక్సెస్ చేయడానికి మరియు కొత్త కంటెంట్ కోసం నోటిఫికేషన్‌లను పొందడానికి మా మొబైల్ యాప్‌ను డౌన్‌లోడ్ చేయండి.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="rounded-full border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white">
                {language === 'en' ? 'Download for Android' : 'Android కోసం డౌన్‌లోడ్ చేయండి'}
              </Button>
              <Button variant="outline" className="rounded-full border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white">
                {language === 'en' ? 'Download for iOS' : 'iOS కోసం డౌన్‌లోడ్ చేయండి'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
