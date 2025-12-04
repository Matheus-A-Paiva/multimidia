import { useState } from 'react';
import HomePage from './components/HomePage';
import ModuleContent from './components/ModuleContent';
import Quiz from './components/Quiz';
import { ArrowLeft } from 'lucide-react';

export type Page = 'home' | 'module' | 'quiz';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentModule, setCurrentModule] = useState<number | null>(null);

  const navigateToModule = (moduleId: number) => {
    setCurrentModule(moduleId);
    setCurrentPage('module');
  };

  const navigateToQuiz = () => {
    setCurrentPage('quiz');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setCurrentModule(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {currentPage !== 'home' && (
        <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={navigateToHome}
              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Início
            </button>
          </div>
        </div>
      )}

      {currentPage === 'home' && (
        <HomePage onNavigateToModule={navigateToModule} onNavigateToQuiz={navigateToQuiz} />
      )}

      {currentPage === 'module' && currentModule !== null && (
        <ModuleContent moduleId={currentModule} />
      )}

      {currentPage === 'quiz' && <Quiz onBackToHome={navigateToHome} />}
    </div>
  );
}
