import { useState } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ToolsPage } from './components/ToolsPage';
import { SchemesPage } from './components/SchemesPage';
import { LearningPage } from './components/LearningPage';
import { CommunityPage } from './components/CommunityPage';
import { LocatePage } from './components/LocatePage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'tools':
        return <ToolsPage />;
      case 'schemes':
        return <SchemesPage />;
      case 'learning':
        return <LearningPage />;
      case 'community':
        return <CommunityPage />;
      case 'locate':
        return <LocatePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
          <Header currentPage={currentPage} onNavigate={setCurrentPage} />
          <main>
            {renderPage()}
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
