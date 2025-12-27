import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { id: 'home', label: t('home') },
    { id: 'tools', label: t('tools') },
    { id: 'schemes', label: t('schemes') },
    { id: 'learning', label: t('learning') },
    { id: 'community', label: t('community') },
    { id: 'locate', label: t('locate') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 rounded-full bg-[#5FA45A] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.5"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#5FA45A] dark:text-[#7BC277]">
              AgriSahayam
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-[#5FA45A] dark:text-[#7BC277]'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#5FA45A] dark:hover:text-[#7BC277]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme & Language Toggles */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-[#5FA45A] text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === 'te'
                    ? 'bg-[#5FA45A] text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                తె
              </button>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden rounded-full"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#5FA45A] text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            {/* Mobile Language Toggle */}
            <div className="sm:hidden flex items-center gap-2 mt-4 px-4">
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 px-3 py-2 rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-[#5FA45A] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`flex-1 px-3 py-2 rounded-lg transition-all ${
                  language === 'te'
                    ? 'bg-[#5FA45A] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}
              >
                తెలుగు
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
