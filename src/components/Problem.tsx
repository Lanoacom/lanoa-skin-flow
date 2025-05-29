
import { AlertCircle, ShoppingBag, Clock, DollarSign } from "lucide-react";

const Problem = () => {
  const painPoints = [
    {
      icon: AlertCircle,
      title: "Confusão",
      description: "Tantos produtos, tantos passos... e zero clareza sobre o que realmente funciona"
    },
    {
      icon: DollarSign,
      title: "Desperdício",
      description: "Centenas de reais gastos em produtos que acabam esquecidos no armário"
    },
    {
      icon: ShoppingBag,
      title: "Frustração",
      description: "A sensação de que sua pele nunca vai melhorar, não importa o que você tente"
    },
    {
      icon: Clock,
      title: "Tempo",
      description: "Rotinas complicadas que ninguém com vida real consegue manter"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-50 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Cansada de Gastar Dinheiro com Produtos que{" "}
              <span className="text-rose-600">
                Não Funcionam
              </span>{" "}
              para Você?
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Você já se sentiu frustrada ao olhar para sua prateleira cheia de produtos que prometeram 
              resultados milagrosos, mas não entregaram? <strong>Não está sozinha.</strong>
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-rose-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <point.icon className="w-8 h-8 text-rose-600" />
                  </div>
                  <div className="space-y-3 text-left">
                    <h3 className="text-xl font-bold text-gray-900">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual representation */}
          <div className="relative mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-slate-50 to-emerald-50 rounded-3xl p-12">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 opacity-60">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-white rounded-lg shadow-sm flex items-center justify-center"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-lg font-medium text-gray-700">
                  Quantos produtos você tem em casa que não funcionaram?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
