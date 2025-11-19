import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage.tsx';
import { MarketingPage } from './pages/MarketingPage.tsx';
import { FilmPage } from './pages/FilmPage.tsx';

export type PageType = 'home' | 'marketing' | 'film';

const App: React.FC = () => {
  // 1. Initialize state based on the current URL
  // This ensures if a user lands on /marketing, they see the Marketing page immediately.
  const getInitialPage = (): PageType => {
    const path = window.location.pathname;
    if (path === '/marketing') return 'marketing';
    if (path === '/film') return 'film';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  // 2. Handle Browser "Back/Forward" Buttons
  // This listens for when the user clicks the browser's back arrow.
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 3. Navigation Functions that update URL
  // When we navigate, we now push the new URL to the browser history.
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
      <div className="bg-brand-dark animate-fadeIn">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'marketing' && <MarketingPage onNavigateBack={navigateHome} />}
        {currentPage === 'film' && <FilmPage onNavigateBack={navigateHome} />}
      </div>
    </HelmetProvider>
  );
};

export default App;