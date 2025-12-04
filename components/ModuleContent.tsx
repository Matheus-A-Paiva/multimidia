import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';

interface ModuleContentProps {
  moduleId: number;
}

export default function ModuleContent({ moduleId }: ModuleContentProps) {
  const [audioPlaying, setAudioPlaying] = useState<number | null>(null);
  const [audioRef] = useState(new Audio('/musica.mp3'));

  const modulesData = {
    1: {
      title: 'O que é áudio digital',
      image: 'https://images.unsplash.com/photo-1661922028028-e3c340d459d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXVkaW8lMjB3YXZlZm9ybXxlbnwxfHx8fDE3NjQwMTk5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      sections: [
        {
          subtitle: 'Definição',
          text: 'Áudio digital é a representação de ondas sonoras através de valores numéricos discretos. Diferente do áudio analógico, que é contínuo, o áudio digital divide o sinal em pequenos fragmentos que podem ser armazenados e processados por computadores.',
        },
        {
          subtitle: 'Como funciona',
          text: 'O processo de digitalização captura instantâneos do sinal analógico em intervalos regulares (amostragem) e converte a amplitude de cada instantâneo em um valor numérico (quantização). Esses valores são então armazenados como dados binários.',
        },
        {
          subtitle: 'Vantagens',
          text: 'O áudio digital oferece várias vantagens: não degrada com cópias sucessivas, permite edição não-destrutiva, facilita armazenamento e transmissão, e possibilita aplicação de efeitos e processamentos complexos.',
        },
      ],
      audioSamples: [
        { id: 1, name: 'Exemplo de onda senoidal', description: 'Áudio demonstrativo simulado' },
        { id: 2, name: 'Comparação analógico vs digital', description: 'Áudio demonstrativo simulado' },
      ],
      videoUrl: 'https://www.youtube.com/embed/1RIA9U5oXro',
    },
    2: {
      title: 'Amostragem e quantização',
      image: 'https://images.unsplash.com/photo-1617994452722-4145e196248b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMHdhdmUlMjBmcmVxdWVuY3l8ZW58MXx8fHwxNzY0MDE5OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      sections: [
        {
          subtitle: 'Taxa de amostragem',
          text: 'A taxa de amostragem (sample rate) determina quantas vezes por segundo o sinal analógico é medido. Taxas comuns incluem 44.1 kHz (CD), 48 kHz (vídeo) e 96 kHz (áudio profissional). Segundo o Teorema de Nyquist, a taxa deve ser pelo menos o dobro da frequência mais alta a ser capturada.',
        },
        {
          subtitle: 'Profundidade de bits',
          text: 'A profundidade de bits (bit depth) define quantos valores diferentes podem representar cada amostra. Profundidades comuns são 16 bits (CD, 65.536 níveis) e 24 bits (profissional, 16.777.216 níveis). Maior profundidade resulta em maior faixa dinâmica e menos ruído de quantização.',
        },
        {
          subtitle: 'Aliasing e filtros',
          text: 'Quando a taxa de amostragem é insuficiente, pode ocorrer aliasing - frequências altas são interpretadas erroneamente como baixas. Filtros anti-aliasing são aplicados antes da conversão A/D para eliminar frequências acima do limite de Nyquist.',
        },
      ],
      audioSamples: [
        { id: 1, name: '44.1 kHz vs 96 kHz', description: 'Comparação de taxas de amostragem' },
        { id: 2, name: '16 bits vs 24 bits', description: 'Comparação de profundidade' },
      ],
      videoUrl: 'https://www.youtube.com/embed/cIQ9IXSUzuM',
    },
    3: {
      title: 'Compressão de áudio',
      image: 'https://images.unsplash.com/photo-1571512379940-716326f35dbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGNvbXByZXNzaW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQwMTk5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      sections: [
        {
          subtitle: 'Compressão sem perdas (Lossless)',
          text: 'Formatos como FLAC, ALAC e WAV comprimido mantêm toda a informação original do áudio. A redução de tamanho é obtida através de algoritmos que identificam padrões e redundâncias nos dados, permitindo descompressão perfeita.',
        },
        {
          subtitle: 'Compressão com perdas (Lossy)',
          text: 'Formatos como MP3, AAC e Ogg Vorbis descartam informações que o ouvido humano tem dificuldade em perceber. Utilizam modelos psicoacústicos para identificar e eliminar componentes "mascarados" ou inaudíveis, alcançando taxas de compressão muito maiores.',
        },
        {
          subtitle: 'Taxa de bits (Bitrate)',
          text: 'Medida em kbps (kilobits por segundo), define a quantidade de dados usados por segundo de áudio. Bitrates típicos: 128 kbps (qualidade média), 192 kbps (boa qualidade), 320 kbps (alta qualidade). VBR (Variable Bitrate) ajusta dinamicamente para melhor eficiência.',
        },
      ],
      audioSamples: [
        { id: 1, name: 'Comparação FLAC vs MP3 320kbps', description: 'Qualidade de áudio' },
        { id: 2, name: 'MP3 128kbps vs 320kbps', description: 'Efeito do bitrate' },
      ],
      videoUrl: 'https://www.youtube.com/embed/FG9jemV1T7I',
    },
    4: {
      title: 'Formatos e padrões',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYzOTI4MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      sections: [
        {
          subtitle: 'Formatos não comprimidos',
          text: 'WAV (Windows) e AIFF (Mac) são formatos sem compressão que armazenam dados PCM (Pulse Code Modulation) brutos. Oferecem máxima qualidade mas ocupam muito espaço: cerca de 10 MB/minuto para estéreo 16 bits/44.1 kHz.',
        },
        {
          subtitle: 'Formatos comprimidos populares',
          text: 'MP3: formato mais difundido, compatível com praticamente todos os dispositivos. AAC: sucessor do MP3, melhor qualidade em bitrates baixos, usado pela Apple. OGG: formato livre, boa qualidade. FLAC: compressão sem perdas, arquiva coleções de alta fidelidade.',
        },
        {
          subtitle: 'Formatos profissionais',
          text: 'BWF (Broadcast Wave Format): WAV com metadados para broadcast. DSD (Direct Stream Digital): usado em SACDs, taxa de amostragem extremamente alta (2.8 MHz). ProRes e AAF: formatos de áudio para vídeo profissional.',
        },
      ],
      audioSamples: [
        { id: 1, name: 'Mesmo arquivo em formatos diferentes', description: 'Comparação de formatos' },
      ],
      videoUrl: 'https://www.youtube.com/embed/nRdyjpASgGo',
    },
    5: {
      title: 'Exemplos práticos',
      image: 'https://images.unsplash.com/photo-1745848413041-3eeb106db501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGVxdWlwbWVudCUyMG1pY3JvcGhvbmV8ZW58MXx8fHwxNzY0MDE5OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      sections: [
        {
          subtitle: 'Streaming de música',
          text: 'Serviços como Spotify, Apple Music e Deezer utilizam áudio digital comprimido (geralmente AAC 256kbps ou superior) para transmitir milhões de músicas. A compressão adaptativa ajusta a qualidade conforme a velocidade da conexão.',
        },
        {
          subtitle: 'Produção musical',
          text: 'DAWs (Digital Audio Workstations) como Pro Tools, Ableton Live e Logic Pro processam áudio digital em tempo real. Permitem gravação multipista, edição não-destrutiva, aplicação de efeitos e mixagem com precisão impossível no analógico.',
        },
        {
          subtitle: 'Podcasts e audiolivros',
          text: 'Conteúdo falado é tipicamente distribuído em formatos comprimidos com bitrate reduzido (64-128 kbps) já que voz requer menos fidelidade que música. Formatos comuns: MP3, AAC e formatos específicos como M4B para audiolivros.',
        },
        {
          subtitle: 'Jogos e áudio interativo',
          text: 'Engines como FMOD e Wwise gerenciam áudio digital interativo em games, com síntese em tempo real, áudio posicional 3D, e adaptação dinâmica à gameplay. Usam formatos comprimidos para economizar memória.',
        },
      ],
      audioSamples: [
        { id: 1, name: 'Áudio de streaming simulado', description: 'Qualidade típica de streaming' },
        { id: 2, name: 'Áudio profissional 24bit/96kHz', description: 'Qualidade de estúdio' },
      ],
      videoUrl: 'https://www.youtube.com/embed/3-LMw6jOKOg',
    },
  };

  const module = modulesData[moduleId as keyof typeof modulesData];

  if (!module) {
    return <div className="p-8">Módulo não encontrado</div>;
  }

  const toggleAudio = (audioId: number) => {
    if (audioPlaying === audioId) {
      setAudioPlaying(null);
      audioRef.pause();
      audioRef.currentTime = 0;
    } else {
      setAudioPlaying(audioId);
      audioRef.play();
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">{module.title}</h1>
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg mb-8">
          <ImageWithFallback
            src={module.image}
            alt={module.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 mb-12">
        {module.sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-purple-800 mb-3">{section.subtitle}</h2>
            <p className="text-base text-gray-700 leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>

      {/* Audio Samples - For modules 1 and 5 */}
      {(moduleId === 1 || moduleId === 5) && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
            <Volume2 className="w-6 h-6" />
            Áudios demonstrativos
          </h2>
          {moduleId === 5 ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                <div className="flex-1">
                  <p className="text-base font-medium text-gray-900">Música</p>
                  <p className="text-sm text-gray-600">Produção musical com áudio digital</p>
                </div>
                <button
                  onClick={() => toggleAudio(1)}
                  className={`p-3 rounded-full transition-colors ${
                    audioPlaying === 1
                      ? 'bg-pink-600 hover:bg-pink-700'
                      : 'bg-pink-500 hover:bg-pink-600'
                  }`}
                >
                  {audioPlaying === 1 ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {module.audioSamples.map((sample) => (
                <div
                  key={sample.id}
                  className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-base font-medium text-gray-900">{sample.name}</p>
                    <p className="text-sm text-gray-600">{sample.description}</p>
                  </div>
                  <button
                    onClick={() => toggleAudio(sample.id)}
                    className={`p-3 rounded-full transition-colors ${
                      audioPlaying === sample.id
                        ? 'bg-purple-600 hover:bg-purple-700'
                        : 'bg-purple-500 hover:bg-purple-600'
                    }`}
                  >
                    {audioPlaying === sample.id ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
          <p className="text-sm text-gray-500 mt-4 text-center">
            💡 {moduleId === 5 ? 'Áudio real de produção musical' : 'Áudios demonstrativos simulados para fins educativos'}
          </p>
        </div>
      )}

      {/* Video - Only for module 1 */}
      {moduleId === 1 && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Vídeo complementar</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
            <iframe
              width="100%"
              height="100%"
              src={module.videoUrl}
              title={module.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-base text-gray-600 mt-4">
            Assista ao vídeo para complementar seu aprendizado sobre {module.title.toLowerCase()}
          </p>
        </div>
      )}
    </div>
  );
}
