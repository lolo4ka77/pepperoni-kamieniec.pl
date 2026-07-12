import { motion } from "motion/react";
import { Clock, Heart, Truck, Users, Award, Flame, Pizza } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Świeże Ciasto",
    description: "Przygotowywane codziennie ręcznie według tradycyjnej receptury",
    color: "#ff6b35",
  },
  {
    icon: Heart,
    title: "Najlepsze Składniki",
    description: "Wybieramy tylko najwyższej jakości produkty od lokalnych dostawców",
    color: "#e63946",
  },
  {
    icon: Truck,
    title: "Szybka Dostawa",
    description: "Dowozimy gorącą pizzę prosto do Twoich drzwi",
    color: "#2ecc71",
  },
  {
    icon: Users,
    title: "Rodzinna Atmosfera",
    description: "Przyjazne miejsce dla całej rodziny",
    color: "#ff6b35",
  },
  {
    icon: Clock,
    title: "Szybka Obsługa",
    description: "Twoja pizza gotowa w 20-30 minut",
    color: "#e63946",
  },
  {
    icon: Award,
    title: "Lokalny Ulubieniec",
    description: "Najwyżej oceniana pizzeria w okolicy",
    color: "#2ecc71",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-[#2d2d2d] mb-4 tracking-tight">
            Dlaczego <span className="text-[#ff6b35]">my?</span>
          </h2>
          <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
            Co sprawia, że jesteśmy najlepszym wyborem w okolicy
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white to-[#fffbf5] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#ff6b35]">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow"
                    style={{ backgroundColor: feature.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#2d2d2d] mb-3 group-hover:text-[#ff6b35] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">{feature.description}</p>
                </div>

                {/* Decorative dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                  style={{ backgroundColor: feature.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#ff6b35] text-white rounded-full font-bold text-xl hover:bg-[#e63946] transition-colors shadow-xl hover:shadow-2xl"
          >
            <span>Sprawdź nasze menu</span>
            <Pizza className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
