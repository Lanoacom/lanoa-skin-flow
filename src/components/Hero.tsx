
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Shield, Truck, Clock } from "lucide-react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToKits = () => {
    document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-slate-50/50"></div>
      
      <div className="relative container mx-auto px-4 py-16 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-emerald-100">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                Mais de 20 mil mulheres transformaram sua pele
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transforme Sua Pele em{" "}
                <span className="text-emerald-600">
                  21 Dias
                </span>{" "}
                ou Seu Dinheiro de Volta
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Descubra o Kit Lanoa formulado especificamente para o{" "}
                <strong>SEU</strong> tipo de pele. Rotina completa, resultados reais, sem complicação.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <Button 
                onClick={scrollToKits}
                size="lg" 
                className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                DESCOBRIR MEU KIT IDEAL
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Teste rápido de 60 segundos</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>Frete Grátis</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </div>

            {/* Timer */}
            <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Oferta especial expira em:</p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-2 min-w-[60px] shadow-sm">
                    <span className="text-2xl font-bold text-gray-900">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">HORAS</span>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-2 min-w-[60px] shadow-sm">
                    <span className="text-2xl font-bold text-gray-900">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">MIN</span>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-2 min-w-[60px] shadow-sm">
                    <span className="text-2xl font-bold text-gray-900">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">SEG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-scale-in">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">LANOA</span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">Resultados Reais</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>Antes</div>
                      <div>Depois de 21 dias</div>
                    </div>
                    <div className="bg-gradient-to-r from-red-100 to-green-100 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-pulse">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-500 rounded-full p-3 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
