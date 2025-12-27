import { Send, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useLanguage } from './LanguageContext';

export const ContactPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#5FA45A] dark:text-[#7BC277] mb-4">
            {t('contactTitle')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Have questions? We\'re here to help. Reach out to us anytime.'
              : 'ప్రశ్నలు ఉన్నాయా? మేము సహాయానికి ఇక్కడ ఉన్నాము. ఎప్పుడైనా మమ్మల్ని సంప్రదించండి.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-gray-900 dark:text-white mb-6">
              {language === 'en' ? 'Send us a message' : 'మాకు సందేశం పంపండి'}
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t('name')} <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder={language === 'en' ? 'Your full name' : 'మీ పూర్తి పేరు'}
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t('village')} <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder={language === 'en' ? 'Your village/town' : 'మీ గ్రామం/పట్టణం'}
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {language === 'en' ? 'Phone Number' : 'ఫోన్ నంబర్'}
                </label>
                <Input
                  type="tel"
                  placeholder="+91 XXXXX-XXXXX"
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t('question')} <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder={language === 'en' ? 'Tell us how we can help you...' : 'మేము మీకు ఎలా సహాయపడగలమో చెప్పండి...'}
                  rows={5}
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <Button className="w-full bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full gap-2">
                <Send className="w-4 h-4" />
                {t('submit')}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact Cards */}
            <Card className="p-6 border-gray-200 dark:border-gray-800 dark:bg-gray-900 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5FA45A]/10 dark:bg-[#5FA45A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#5FA45A] dark:text-[#7BC277]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-white mb-2">
                    {t('whatsapp')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {language === 'en'
                      ? 'Get instant support via WhatsApp'
                      : 'WhatsApp ద్వారా తక్షణ మద్దతు పొందండి'}
                  </p>
                  <Button className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full">
                    +91 XXXXX-XXXXX
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gray-200 dark:border-gray-800 dark:bg-gray-900 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5FA45A]/10 dark:bg-[#5FA45A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#5FA45A] dark:text-[#7BC277]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-white mb-2">
                    {t('helpline')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {language === 'en'
                      ? 'Call us (Monday - Saturday, 9 AM - 6 PM)'
                      : 'మమ్మల్ని కాల్ చేయండి (సోమవారం - శనివారం, 9 AM - 6 PM)'}
                  </p>
                  <Button variant="outline" className="rounded-full border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white">
                    1800-XXX-XXXX
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gray-200 dark:border-gray-800 dark:bg-gray-900 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5FA45A]/10 dark:bg-[#5FA45A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#5FA45A] dark:text-[#7BC277]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-white mb-2">
                    {language === 'en' ? 'Email' : 'ఇమెయిల్'}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {language === 'en'
                      ? 'Send us an email anytime'
                      : 'ఎప్పుడైనా మాకు ఇమెయిల్ పంపండి'}
                  </p>
                  <a 
                    href="mailto:support@agrisahayam.in"
                    className="text-[#5FA45A] dark:text-[#7BC277] hover:underline"
                  >
                    support@agrisahayam.in
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gray-200 dark:border-gray-800 dark:bg-gray-900 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5FA45A]/10 dark:bg-[#5FA45A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#5FA45A] dark:text-[#7BC277]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-white mb-2">
                    {language === 'en' ? 'Office Address' : 'కార్యాలయ చిరునామా'}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en'
                      ? 'AgriSahayam Headquarters\nHyderabad, Telangana - 500001\nIndia'
                      : 'అగ్రిసహాయం ప్రధాన కార్యాలయం\nహైదరాబాద్, తెలంగాణ - 500001\nభారతదేశం'}
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Follow Us' : 'మమ్మల్ని అనుసరించండి'}
              </h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-[#E4405F] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
