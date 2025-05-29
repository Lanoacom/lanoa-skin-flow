
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana",
      age: 32,
      kit: "Kit Controle",
      rating: 5,
      image: "M",
      color: "from-coral to-peach",
      text: "Depois de anos lutando contra a oleosidade excessiva e gastando fortunas em produtos que não funcionavam, encontrei o Kit Controle da Lanoa. Em apenas 3 semanas, minha pele mudou completamente. A oleosidade está controlada, os poros visivelmente menores e não tenho mais aquela sensação de pele pesada. O melhor é que a rotina leva só 5 minutos!",
      highlight: "Pele oleosa controlada em 3 semanas"
    },
    {
      name: "Camila",
      age: 41,
      kit: "Kit Hidratação",
      rating: 5,
      image: "C",
      color: "from-cyan to-violet",
      text: "Minha pele sempre foi muito seca, especialmente no inverno. Já tinha desistido de encontrar produtos que realmente hidratassem sem deixar aquela sensação pegajosa. O Kit Hidratação da Lanoa mudou tudo. Desde a primeira semana, a descamação sumiu e minha pele finalmente parece saudável. As linhas finas também estão menos visíveis, um bônus que não esperava!",
      highlight: "Hidratação profunda sem sensação pegajosa"
    },
    {
      name: "Juliana",
      age: 27,
      kit: "Kit Calmante",
      rating: 5,
      image: "J",
      color: "from-violet to-cyan",
      text: "Tenho pele extremamente sensível e reativa. Qualquer produto novo era motivo de ansiedade porque nunca sabia como minha pele reagiria. O Kit Calmante da Lanoa foi o primeiro que não causou nenhuma irritação. Pelo contrário, acalmou a vermelhidão que eu tinha há anos e fortaleceu minha pele. Agora posso sair sem maquiagem pela primeira vez em muito tempo!",
      highlight: "Primeira vez sem irritação em anos"
    }
  ];

  const stats = [
    { number: "97%", label: "relataram melhora visível em 21 dias" },
    { number: "92%", label: "continuaram usando após o primeiro kit" },
    { number: "89%", label: "recomendam para amigas e familiares" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-peach-100 to-coral-100 rounded-full translate-x-40 -translate-y-40 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-violet-100 to-cyan-100 rounded-full -translate-x-36 translate-y-36 opacity-60"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Histórias Reais de{" "}
              <span className="bg-gradient-to-r from-coral via-peach to-cyan bg-clip-text text-transparent">
                Transformação
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como outras mulheres transformaram suas peles com os Kits Lanoa
            </p>
          </div>

          {/* Main Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color.replace('coral', 'coral-50').replace('peach', 'peach-50').replace('cyan', 'cyan-50').replace('violet', 'violet-50')} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <CardContent className="relative p-8 space-y-6">
                  {/* Quote icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-8 h-8 text-gray-300" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-peach-400 text-peach-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>

                  {/* Highlight */}
                  <div className={`bg-gradient-to-r ${testimonial.color} rounded-lg p-3`}>
                    <p className="text-white font-medium text-sm">{testimonial.highlight}</p>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}, {testimonial.age} anos</p>
                      <p className="text-sm text-gray-600">{testimonial.kit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Results Statistics */}
          <div className="bg-gradient-to-r from-violet-50 via-peach-50 to-cyan-50 rounded-3xl p-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Resultados Comprovados
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-default"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-coral via-peach to-cyan bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
