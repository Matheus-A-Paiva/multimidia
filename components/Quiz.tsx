import { useState, useEffect } from 'react';
import { Check, X, RotateCcw, Trophy } from 'lucide-react';

interface QuizProps {
  onBackToHome: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const allQuestions: Question[] = [
  {
    id: 1,
    question: 'Qual é a taxa de amostragem padrão usada em CDs de áudio?',
    options: ['22.05 kHz', '44.1 kHz', '48 kHz', '96 kHz'],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'O que significa "bit depth" ou profundidade de bits?',
    options: [
      'A velocidade do processamento',
      'O tamanho do arquivo',
      'O número de valores possíveis para cada amostra',
      'A taxa de compressão',
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: 'Qual formato de áudio é considerado "lossless" (sem perdas)?',
    options: ['MP3', 'AAC', 'FLAC', 'OGG'],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: 'Segundo o Teorema de Nyquist, qual deve ser a relação entre a taxa de amostragem e a frequência máxima?',
    options: [
      'Igual à frequência',
      'Metade da frequência',
      'Pelo menos o dobro da frequência',
      'Quatro vezes a frequência',
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: 'O que é "aliasing" em áudio digital?',
    options: [
      'Um tipo de compressão',
      'Distorção causada por taxa de amostragem insuficiente',
      'Um formato de arquivo',
      'Uma técnica de mixagem',
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'Qual é a profundidade de bits padrão em CDs de áudio?',
    options: ['8 bits', '12 bits', '16 bits', '24 bits'],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: 'Qual formato de áudio é usado pela Apple em sua plataforma iTunes/Apple Music?',
    options: ['MP3', 'AAC', 'WMA', 'OGG'],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'O que significa PCM em áudio digital?',
    options: [
      'Portable Computer Music',
      'Pulse Code Modulation',
      'Professional Compression Method',
      'Primary Channel Monitoring',
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: 'Qual é a vantagem principal do formato MP3?',
    options: [
      'Qualidade superior ao CD',
      'Compressão eficiente com boa qualidade percebida',
      'Não perde nenhuma informação',
      'É o formato mais recente',
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: 'Em áudio digital, o que é um DAW?',
    options: [
      'Digital Audio Workstation',
      'Direct Audio Wave',
      'Dynamic Audio Widget',
      'Digital Amplitude Waveform',
    ],
    correctAnswer: 0,
  },
];

export default function Quiz({ onBackToHome }: QuizProps) {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Select 5 random questions
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);
    setSelectedQuestions(selected);
    setAnswers(new Array(5).fill(null));
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1]);
    } else {
      // Calculate score
      let correctCount = 0;
      selectedQuestions.forEach((question, index) => {
        if (newAnswers[index] === question.correctAnswer) {
          correctCount++;
        }
      });
      setScore(correctCount);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1]);
    }
  };

  const handleRestart = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);
    setSelectedQuestions(selected);
    setAnswers(new Array(5).fill(null));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResults(false);
    setScore(0);
  };

  if (selectedQuestions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <p className="text-gray-600">Carregando quiz...</p>
        </div>
      </div>
    );
  }

  if (showResults) {
    const percentage = (score / selectedQuestions.length) * 100;
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-purple-900 mb-2">Quiz Finalizado!</h2>
            <p className="text-base text-gray-600">Confira seu desempenho abaixo</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
            <div className="text-center">
              <p className="text-base text-gray-700 mb-2">Sua pontuação</p>
              <p className="text-4xl font-bold text-purple-900">
                {score} de {selectedQuestions.length}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <p className="text-lg text-gray-600 mt-2">{percentage.toFixed(0)}% de acertos</p>
            </div>
          </div>

          {/* Review Answers */}
          <div className="space-y-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">Revisão das respostas</h3>
            {selectedQuestions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              return (
                <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        isCorrect ? 'bg-green-100' : 'bg-red-100'
                      }`}
                    >
                      {isCorrect ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-gray-900 mb-2">{question.question}</p>
                      <p className="text-sm text-gray-600">
                        Sua resposta: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                          {question.options[userAnswer!]}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-gray-600 mt-1">
                          Resposta correta: <span className="text-green-600">
                            {question.options[question.correctAnswer]}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Refazer Quiz
            </button>
            <button
              onClick={onBackToHome}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">
              Pergunta {currentQuestionIndex + 1} de {selectedQuestions.length}
            </span>
            <span className="text-purple-600">
              {Math.round(((currentQuestionIndex + 1) / selectedQuestions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / selectedQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentQuestion.question}</h2>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedAnswer === index
                        ? 'border-purple-500 bg-purple-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedAnswer === index && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-base text-gray-800">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-3 rounded-lg transition-colors ${
              currentQuestionIndex === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-lg transition-colors ${
              selectedAnswer === null
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
          >
            {currentQuestionIndex === selectedQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
          </button>
        </div>
      </div>
    </div>
  );
}
