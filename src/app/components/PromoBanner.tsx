import { motion } from "motion/react";
import { Sparkles, Pizza } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#ff6b35] via-[#e63946] to-[#ff6b35] text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Specjalna Oferta</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight"
          >
            Każda druga pizza
            <br />
            <span className="text-[#2ecc71]">-30% TANIEJ!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto"
          >
            Zamów dwie pizzy i otrzymaj drugą 30% taniej! Oferta dostępna codziennie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="tel:504005398"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-[#ff6b35] rounded-full font-black text-xl hover:bg-[#f5f5f5] transition-colors shadow-2xl hover:shadow-3xl"
            >
              Zadzwoń i zamów teraz!
            </motion.a>
          </motion.div>

          {/* Floating Pizza Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [100, -100],
                  x: [0, (i % 2 === 0 ? 40 : -40)],
                  rotate: [0, i % 2 === 0 ? 180 : -180],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut",
                }}
                className="absolute text-white/60"
                style={{
                  left: `${(i * 20) % 100}%`,
                  top: "50%",
                }}
              >
                <Pizza className="w-14 h-14" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
