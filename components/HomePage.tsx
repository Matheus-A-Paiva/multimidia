import { Music, Waves, HardDrive, FileType, Headphones, Brain } from 'lucide-react';

interface HomePageProps {
  onNavigateToModule: (moduleId: number) => void;
  onNavigateToQuiz: () => void;
}

export default function HomePage({ onNavigateToModule, onNavigateToQuiz }: HomePageProps) {
  const modules = [
    {
      id: 1,
      title: 'O que é áudio digital',
      description: 'Introdução aos conceitos fundamentais de áudio digital',
      icon: Music,
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Amostragem e quantização',
      description: 'Como o som analógico é convertido em digital',
      icon: Waves,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Compressão de áudio',
      description: 'Técnicas para reduzir o tamanho dos arquivos de áudio',
      icon: HardDrive,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Formatos e padrões',
      description: 'Principais formatos de áudio e suas características',
      icon: FileType,
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 5,
      title: 'Exemplos práticos',
      description: 'Aplicações reais de áudio digital no dia a dia',
      icon: Headphones,
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-6">
            <Music className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Conceitos de Áudio Digital
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore os fundamentos do áudio digital através de módulos interativos com conteúdo multimídia educativo
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => onNavigateToModule(module.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left group hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${module.color} rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {module.description}
                </p>
              </button>
            );
          })}

          {/* Quiz Card */}
          <button
            onClick={onNavigateToQuiz}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left group hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Quiz Interativo
            </h3>
            <p className="text-sm text-purple-100">
              Teste seus conhecimentos com perguntas sobre áudio digital
            </p>
          </button>
        </div>

        {/* Footer Info */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-base text-gray-600">
            💡 <span className="font-medium text-gray-700">Navegue livremente entre os módulos em qualquer ordem que desejar</span>
          </p>
        </div>
      </div>
    </div>
  );
}
