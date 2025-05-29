
import { CheckCircle, Users, Beaker, Clock, DollarSign, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Formulados para Trabalhar Juntos",
      description: "Cada produto do kit foi desenvolvido para potencializar o efeito dos outros, criando resultados que produtos isolados não conseguem entregar.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Simplificação que Funciona",
      description: "Apenas 4 passos, 5 minutos, manhã e noite. Rotinas que cabem na sua vida real e entregam resultados reais.",
      color: "from-slate-500 to-slate-600"
    },
    {
      icon: Beaker,
      title: "Ingredientes na Concentração Certa",
      description: "Sem marketing enganoso. Usamos ativos comprovados cientificamente nas concentrações que realmente funcionam.",
      color: "from-emerald-600 to-slate-600"
    },
    {
      icon: Shield,
      title: "Resultados em 21 Dias ou Dinheiro de Volta",
      description: "Confiamos tanto nos nossos produtos que oferecemos garantia total. Sem burocracia, sem perguntas.",
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: DollarSign,
      title: "Preço Justo, Sem Sacrificar Qualidade",
      description: "Eliminamos intermediários e embalagens extravagantes para oferecer produtos premium a preços acessíveis.",
      color: "from-slate-600 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-50 rounded-full -translate-y-48"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-50 rounded-full translate-y-40"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Por Que os Kits Lanoa São{" "}
              <span className="text-emerald-600">
                Diferentes
              </span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color.replace('500', '50').replace('600', '100').replace('700', '200')} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                
                <div className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-200 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                20K+
              </div>
              <p className="text-sm text-gray-600">Clientes Satisfeitas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                97%
              </div>
              <p className="text-sm text-gray-600">Resultados em 21 Dias</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                4.9★
              </div>
              <p className="text-sm text-gray-600">Avaliação Média</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                30 Dias
              </div>
              <p className="text-sm text-gray-600">Garantia Total</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
