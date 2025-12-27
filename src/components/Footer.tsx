import { useLanguage } from './LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const sdgGoals = [
    { number: 2, color: '#DDA63A', title: 'Zero Hunger' },
    { number: 9, color: '#FD6925', title: 'Industry, Innovation' },
    { number: 12, color: '#BF8B2E', title: 'Responsible Consumption' },
    { number: 17, color: '#19486A', title: 'Partnerships' },
  ];

  return (
    <footer className="bg-[#8B6B4B] dark:bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SDG Section */}
        <div className="text-center mb-8">
          <h3 className="mb-6">Supporting UN Sustainable Development Goals</h3>
          <div className="flex justify-center gap-4 flex-wrap mb-6">
            {sdgGoals.map((goal) => (
              <div
                key={goal.number}
                className="w-20 h-20 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: goal.color }}
              >
                <div className="text-center">
                  <div className="text-xs opacity-80">GOAL</div>
                  <div className="text-2xl">{goal.number}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm opacity-90 max-w-3xl mx-auto">
            {t('sdgCaption')}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#5FA45A] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.5"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>AgriSahayam</span>
          </div>
          <p className="text-sm opacity-80">
            {t('tagline')}
          </p>
          <p className="text-xs opacity-60 mt-4">
            © 2025 AgriSahayam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};