import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage.tsx';
import { MarketingPage } from './pages/MarketingPage.tsx';
import { FilmPage } from './pages/FilmPage.tsx';
import { WhatsAppButton } from './components/ui/WhatsAppButton.tsx';
import { Footer } from './components/ui/Footer.tsx'; 
import { PrivacyPage } from './pages/PrivacyPage.tsx';
import { TermsPage } from './pages/TermsPage.tsx';

export type PageType = 'home' | 'marketing' | 'film' | 'privacy' | 'terms';

const App: React.FC = () => {
  const getInitialPage = (): PageType => {
    const path = window.location.pathname;
    if (path === '/marketing') return 'marketing';
    if (path === '/film') return 'film';
    if (path === '/privacy') return 'privacy';
    if (path === '/terms') return 'terms';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageType) => {
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    navigateTo('home');
  };

  return (
    <HelmetProvider>
      <div className="bg-brand-dark animate-fadeIn relative flex flex-col min-h-screen">
        
        {/* Global Floating Elements */}
        <WhatsAppButton />

        {/* Page Content */}
        <div className="flex-grow">
          {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
          {currentPage === 'marketing' && <MarketingPage onNavigateBack={navigateHome} />}
          {currentPage === 'film' && <FilmPage onNavigateBack={navigateHome} />}
          {currentPage === 'privacy' && <PrivacyPage onNavigateBack={navigateHome} />}
          {currentPage === 'terms' && <TermsPage onNavigateBack={navigateHome} />}
        </div>

        {currentPage !== 'home' && <Footer onNavigate={navigateTo} />}
        
      </div>
    </HelmetProvider>
  );
};

export default App;