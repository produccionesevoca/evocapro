import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage.tsx';
import { MarketingPage } from './pages/MarketingPage.tsx';
import { FilmPage } from './pages/FilmPage.tsx';

export type PageType = 'home' | 'marketing' | 'film';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
  };

  const navigateHome = () => {
    setCurrentPage('home');
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