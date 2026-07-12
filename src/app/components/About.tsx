import { motion } from "motion/react";
import { Pizza, Leaf, Heart, Smile, Star } from "lucide-react";

export function About() {
  return (
    <section id="o-nas" className="py-24 bg-[#2d2d2d] text-white overflow-hidden relative scroll-mt-20">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-40 h-40 border-4 border-[#ff6b35] opacity-10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-60 h-60 border-4 border-[#2ecc71] opacity-10 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#ff6b35] font-semibold text-lg uppercase tracking-wider"
              >
                O nas
              </motion.span>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black mt-4 mb-6 leading-tight">
                Rodzinna
                <span className="block text-[#ff6b35]">Pizzeria</span>
                w sercu Kamieńca
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                W Pepperoni wierzymy, że prawdziwa pizza to połączenie tradycyjnych włoskich
                receptur ze świeżymi, lokalnymi składnikami. Nasze ciasto przygotowujemy
                codziennie ręcznie, a każda pizza wypiekana jest w wysokiej temperaturze dla
                uzyskania idealnie chrupiącego spodu.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff6b35] flex items-center justify-center flex-shrink-0 text-white">
                  <Pizza className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Autentyczna Receptura</h3>
                  <p className="text-gray-300">
                    Tradycyjne włoskie techniki i sprawdzone przepisy przekazywane z pokolenia na
                    pokolenie.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2ecc71] flex items-center justify-center flex-shrink-0 text-white">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Świeże Składniki</h3>
                  <p className="text-gray-300">
                    Codziennie wybieramy najświeższe warzywa, wysokiej jakości sery i najlepsze
                    mięsa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#e63946] flex items-center justify-center flex-shrink-0 text-white">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Robione z Pasją</h3>
                  <p className="text-gray-300">
                    Każda pizza to dla nas dzieło sztuki, przygotowane z miłością i dbałością o
                    szczegóły.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "1000+", label: "Zadowolonych Klientów", Icon: Smile },
              { number: "15+", label: "Rodzajów Pizzy", Icon: Pizza },
              { number: "100%", label: "Świeże Składniki", Icon: Leaf },
              { number: "4,0", label: "Ocena Google", Icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-[#ff6b35] transition-all"
              >
                <div className="flex justify-center mb-3">
                  <stat.Icon className="w-9 h-9 text-[#ff6b35]" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-[#ff6b35] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
