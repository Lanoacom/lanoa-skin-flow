
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Droplets, Shield, Zap, Heart } from "lucide-react";

const SkinKits = () => {
  const kits = [
    {
      id: "controle",
      name: "Kit Controle",
      subtitle: "Para Pele Oleosa",
      icon: Zap,
      color: "from-emerald-500 to-emerald-600",
      benefits: [
        "Controla oleosidade sem ressecar",
        "Reduz visivelmente poros e imperfeições",
        "4 produtos essenciais numerados"
      ],
      price: "R$ 110",
      duration: "60 dias"
    },
    {
      id: "hidratacao",
      name: "Kit Hidratação",
      subtitle: "Para Pele Seca",
      icon: Droplets,
      color: "from-slate-500 to-slate-600",
      benefits: [
        "Hidratação profunda sem pesar na pele",
        "Elimina descamação e desconforto",
        "4 produtos essenciais numerados"
      ],
      price: "R$ 110",
      duration: "60 dias"
    },
    {
      id: "equilibrio",
      name: "Kit Equilíbrio",
      subtitle: "Para Pele Mista",
      icon: Heart,
      color: "from-emerald-600 to-slate-600",
      benefits: [
        "Equilibra áreas oleosas e secas",
        "Uniformiza textura e aparência",
        "4 produtos essenciais numerados"
      ],
      price: "R$ 110",
      duration: "60 dias"
    },
    {
      id: "calmante",
      name: "Kit Calmante",
      subtitle: "Para Pele Sensível",
      icon: Shield,
      color: "from-rose-500 to-rose-600",
      benefits: [
        "Acalma vermelhidão e irritação",
        "Fortalece a barreira cutânea",
        "4 produtos essenciais numerados"
      ],
      price: "R$ 110",
      duration: "60 dias"
    }
  ];

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="kits" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-emerald-50 rounded-full -translate-x-36"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-slate-50 rounded-full translate-x-32"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Apresentando os{" "}
              <span className="text-emerald-600">
                Kits Lanoa
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Skincare Simplificado que Realmente Funciona.</strong> Rotinas completas formuladas 
              especificamente para cada tipo de pele. Sem adivinhação, sem desperdício, sem frustração.
            </p>
          </div>

          {/* Kits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kits.map((kit, index) => (
              <Card 
                key={kit.id}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${kit.color.replace('500', '50').replace('600', '100')} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <CardContent className="relative p-6 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${kit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <kit.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{kit.name}</h3>
                      <p className="text-gray-600 font-medium">{kit.subtitle}</p>
                    </div>

                    <ul className="space-y-2">
                      {kit.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">{kit.price}</span>
                        <p className="text-sm text-gray-500">Duração: {kit.duration}</p>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300"
                    >
                      Ver Detalhes
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Central CTA */}
          <div className="text-center animate-fade-in">
            <Button 
              onClick={scrollToQuiz}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              FAZER O TESTE E DESCOBRIR MEU KIT IDEAL
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Teste rápido de 60 segundos • Recomendação personalizada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinKits;
