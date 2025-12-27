import { MessageSquare, HelpCircle, Users, Send, ThumbsUp, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const CommunityPage = () => {
  const { t, language } = useLanguage();

  const discussionTopics = [
    {
      id: 1,
      author: language === 'en' ? 'Ramesh Kumar' : 'రమేష్ కుమార్',
      avatar: 'RK',
      time: language === 'en' ? '2 hours ago' : '2 గంటల క్రితం',
      title: language === 'en' 
        ? 'Best time to use drip irrigation in summer?' 
        : 'వేసవిలో డ్రిప్ ఇరిగేషన్ ఉపయోగించడానికి ఉత్తమ సమయం?',
      replies: 12,
      likes: 24,
    },
    {
      id: 2,
      author: language === 'en' ? 'Lakshmi Devi' : 'లక్ష్మీ దేవి',
      avatar: 'LD',
      time: language === 'en' ? '5 hours ago' : '5 గంటల క్రితం',
      title: language === 'en'
        ? 'Organic fertilizers vs chemical - which is better for rice?'
        : 'సేంద్రీయ ఎరువులు vs రసాయన ఎరువులు - వరికి ఏది మంచిది?',
      replies: 8,
      likes: 15,
    },
    {
      id: 3,
      author: language === 'en' ? 'Vijay Reddy' : 'విజయ్ రెడ్డి',
      avatar: 'VR',
      time: language === 'en' ? '1 day ago' : '1 రోజు క్రితం',
      title: language === 'en'
        ? 'Looking for farmers using solar pumps in Telangana'
        : 'తెలంగాణలో సోలార్ పంపులు ఉపయోగిస్తున్న రైతుల కోసం వెతుకుతున్నాను',
      replies: 18,
      likes: 32,
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5FA45A]/10 dark:bg-[#5FA45A]/20 rounded-full mb-4">
            <Users className="w-8 h-8 text-[#5FA45A] dark:text-[#7BC277]" />
          </div>
          <h1 className="text-[#5FA45A] dark:text-[#7BC277] mb-4">
            {t('communityTitle')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Connect with fellow farmers, share knowledge, and get expert advice'
              : 'తోటి రైతులతో కనెక్ట్ అవ్వండి, జ్ఞానాన్ని పంచుకోండి మరియు నిపుణుల సలహాను పొందండి'}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1687563100680-6b763a90da45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwY29sbGFib3JhdGlvbiUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjE0ODA1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Farmers Community"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="forum" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-1">
            <TabsTrigger 
              value="forum" 
              className="rounded-md data-[state=active]:bg-[#5FA45A] data-[state=active]:text-white"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              {t('discussionForum')}
            </TabsTrigger>
            <TabsTrigger 
              value="expert"
              className="rounded-md data-[state=active]:bg-[#5FA45A] data-[state=active]:text-white"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              {t('askExpert')}
            </TabsTrigger>
            <TabsTrigger 
              value="collaborate"
              className="rounded-md data-[state=active]:bg-[#5FA45A] data-[state=active]:text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              {t('collaborate')}
            </TabsTrigger>
          </TabsList>

          {/* Discussion Forum Tab */}
          <TabsContent value="forum" className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('forumDesc')}
              </p>
              <Button className="bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full">
                {language === 'en' ? 'New Topic' : 'కొత్త విషయం'}
              </Button>
            </div>

            <div className="space-y-4">
              {discussionTopics.map((topic) => (
                <Card key={topic.id} className="p-5 hover:shadow-md transition-shadow border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex gap-4">
                    <Avatar className="w-12 h-12 bg-[#5FA45A] text-white">
                      <AvatarFallback className="bg-[#5FA45A] text-white">
                        {topic.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-gray-900 dark:text-white mb-1">
                            {topic.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {topic.author} • {topic.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-6 mt-3">
                        <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#5FA45A] dark:hover:text-[#7BC277] transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          {topic.likes}
                        </button>
                        <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#5FA45A] dark:hover:text-[#7BC277] transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          {topic.replies} {language === 'en' ? 'replies' : 'సమాధానాలు'}
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Ask an Expert Tab */}
          <TabsContent value="expert" className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              {t('expertDesc')}
            </p>
            <Card className="p-6 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Submit Your Question' : 'మీ ప్రశ్నను సమర్పించండి'}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    {t('name')}
                  </label>
                  <Input 
                    placeholder={language === 'en' ? 'Your name' : 'మీ పేరు'}
                    className="border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'Category' : 'వర్గం'}
                  </label>
                  <Input 
                    placeholder={language === 'en' ? 'e.g., Irrigation, Pest Control' : 'ఉదా., నీటిపారుదల, తెగులు నియంత్రణ'}
                    className="border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    {t('question')}
                  </label>
                  <Textarea 
                    placeholder={language === 'en' ? 'Describe your question in detail...' : 'మీ ప్రశ్నను వివరంగా వివరించండి...'}
                    rows={5}
                    className="border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  />
                </div>
                <Button className="bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full gap-2">
                  <Send className="w-4 h-4" />
                  {t('submit')}
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Collaborate Tab */}
          <TabsContent value="collaborate" className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              {t('collaborateDesc')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="text-gray-900 dark:text-white mb-4">
                  {language === 'en' ? 'For NGOs' : 'NGOల కోసం'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {language === 'en'
                    ? 'Partner with us to reach more farmers and expand your programs.'
                    : 'ఎక్కువ రైతులను చేరుకోవడానికి మరియు మీ కార్యక్రమాలను విస్తరించడానికి మాతో భాగస్వామి అవ్వండి.'}
                </p>
                <Button variant="outline" className="w-full rounded-full border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white">
                  {language === 'en' ? 'Learn More' : 'మరింత తెలుసుకోండి'}
                </Button>
              </Card>
              <Card className="p-6 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="text-gray-900 dark:text-white mb-4">
                  {language === 'en' ? 'For Tech Partners' : 'టెక్ భాగస్వాముల కోసం'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {language === 'en'
                    ? 'Bring your agricultural technology solutions to our farmer network.'
                    : 'మీ వ్యవసాయ సాంకేతిక పరిష్కారాలను మా రైతుల నెట్‌వర్క్‌కు తీసుకురండి.'}
                </p>
                <Button variant="outline" className="w-full rounded-full border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white">
                  {language === 'en' ? 'Get Started' : 'ప్రారంభించండి'}
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
