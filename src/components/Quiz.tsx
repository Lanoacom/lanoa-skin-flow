
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Como você descreveria sua pele pela manhã?",
      options: [
        { text: "Oleosa, especialmente na zona T", value: "oleosa" },
        { text: "Seca e às vezes descamando", value: "seca" },
        { text: "Oleosa em algumas áreas, seca em outras", value: "mista" },
        { text: "Sensível e facilmente irritada", value: "sensivel" }
      ]
    },
    {
      question: "Qual é sua maior preocupação com a pele?",
      options: [
        { text: "Poros dilatados e oleosidade excessiva", value: "oleosa" },
        { text: "Ressecamento e linhas finas", value: "seca" },
        { text: "Textura irregular e aparência desigual", value: "mista" },
        { text: "Vermelhidão e reações alérgicas", value: "sensivel" }
      ]
    },
    {
      question: "Como sua pele reage a novos produtos?",
      options: [
        { text: "Geralmente bem, mas pode ficar mais oleosa", value: "oleosa" },
        { text: "Precisa de tempo para se adaptar", value: "seca" },
        { text: "Reage diferente em cada área do rosto", value: "mista" },
        { text: "Fico sempre receosa de irritações", value: "sensivel" }
      ]
    }
  ];

  const getRecommendation = () => {
    const skinTypes = {
      oleosa: 0,
      seca: 0,
      mista: 0,
      sensivel: 0
    };

    answers.forEach(answer => {
      skinTypes[answer as keyof typeof skinTypes]++;
    });

    const dominantType = Object.entries(skinTypes).reduce((a, b) => 
      skinTypes[a[0] as keyof typeof skinTypes] > skinTypes[b[0] as keyof typeof skinTypes] ? a : b
    )[0];

    const recommendations = {
      oleosa: {
        kit: "Kit Controle",
        description: "Formulado especificamente para controlar oleosidade e reduzir poros",
        color: "from-emerald-500 to-emerald-600",
        benefits: ["Controla oleosidade", "Reduz poros", "Textura matificante"]
      },
      seca: {
        kit: "Kit Hidratação",
        description: "Hidratação profunda e duradoura sem sensação pegajosa",
        color: "from-slate-500 to-slate-600",
        benefits: ["Hidratação intensa", "Elimina descamação", "Suaviza linhas"]
      },
      mista: {
        kit: "Kit Equilíbrio",
        description: "Equilibra diferentes necessidades de cada área do rosto",
        color: "from-emerald-600 to-slate-600",
        benefits: ["Equilibra oleosidade", "Uniformiza textura", "Versatilidade"]
      },
      sensivel: {
        kit: "Kit Calmante",
        description: "Acalma, protege e fortalece peles sensíveis e reativas",
        color: "from-rose-500 to-rose-600",
        benefits: ["Acalma irritações", "Reduz vermelhidão", "Fortalece barreira"]
      }
    };

    return recommendations[dominantType as keyof typeof recommendations];
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getRecommendation();
    
    return (
      <section id="quiz" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12 text-center space-y-8">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Perfeito! Encontramos seu kit ideal
                  </h3>
                </div>

                <div className={`bg-gradient-to-br ${recommendation.color} rounded-2xl p-8 text-white`}>
                  <h4 className="text-2xl font-bold mb-4">{recommendation.kit}</h4>
                  <p className="text-lg mb-6">{recommendation.description}</p>
                  <div className="grid grid-cols-1 gap-3">
                    {recommendation.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 text-lg"
                  >
                    GARANTIR MEU {recommendation.kit.toUpperCase()} - R$ 110
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={restartQuiz}
                    className="w-full"
                  >
                    Refazer o teste
                  </Button>
                </div>

                <p className="text-sm text-gray-500">
                  Frete grátis • Garantia de 30 dias • Entrega em até 7 dias úteis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Descobrir Seu Kit Ideal
            </h2>
            <p className="text-xl text-gray-600">
              Responda 3 perguntas rápidas e encontre o kit perfeito para sua pele
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                {questions.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index <= currentQuestion ? 'bg-emerald-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl animate-scale-in">
            <CardContent className="p-8 space-y-8">
              <div className="text-center space-y-4">
                <span className="text-sm font-medium text-emerald-600">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {questions[currentQuestion].question}
                </h3>
              </div>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full p-6 text-left justify-start hover:bg-emerald-50 hover:border-emerald-500 transition-all duration-300"
                    onClick={() => handleAnswer(option.value)}
                  >
                    <span className="text-lg">{option.text}</span>
                  </Button>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Teste rápido • 60 segundos</span>
                <span>100% gratuito</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
