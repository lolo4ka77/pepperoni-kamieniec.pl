import { motion } from "motion/react";
import { Phone, MapPin, Star, Bike, Flame, Users, Leaf } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pizzaImage from "../../assets/photo3.jpg";

/* Custom tomato glyph (Lucide has no tomato) for the "Świeże pomidory" badge. */
function TomatoGlyph({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="14" r="7.2" />
      <path d="M12 6.8V4.4M12 6.8c-.6-1.6-2.2-2.6-3.9-2.4M12 6.8c.6-1.6 2.2-2.6 3.9-2.4" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="start" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fffbf5] via-[#fff5e9] to-[#ffe8d6]">
      {/* Background Typography */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="text-[20vw] lg:text-[25vw] font-black tracking-tighter text-[#ff6b35] whitespace-nowrap leading-[1.5]">
          PEPPERONI
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#2ecc71] text-white rounded-full">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">Ocena 4,0 w Google</span>
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#2d2d2d] leading-[0.95]">
              Prawdziwa włoska pizza
              <span className="block text-[#ff6b35]">w Kamieńcu</span>
              <span className="block text-[#e63946]">Wrocławskim</span>
            </h1>

            <p className="text-xl lg:text-2xl text-[#6b6b6b] max-w-xl">
              Świeże składniki, ręcznie wyrabiane ciasto — Twoja ulubiona lokalna
              pizzeria.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#ff6b35] text-white rounded-full font-semibold text-lg hover:bg-[#e63946] transition-colors shadow-lg hover:shadow-xl"
            >
              Zobacz menu
            </motion.a>
            <motion.a
              href="tel:504005398"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#2d2d2d] text-white rounded-full font-semibold text-lg hover:bg-[#1a1a1a] transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń teraz
            </motion.a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#2ecc71] flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#2d2d2d]">Kamieniec</p>
                <p className="text-sm text-[#6b6b6b]">Wrocławski</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#ff6b35] flex items-center justify-center text-white">
                <Bike className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#2d2d2d]">Na wynos</p>
                <p className="text-sm text-[#6b6b6b]">i dowóz</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#e63946] flex items-center justify-center text-white">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#2d2d2d]">Pieczone</p>
                <p className="text-sm text-[#6b6b6b]">codziennie</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#2ecc71] flex items-center justify-center text-white">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#2d2d2d]">Rodzinna</p>
                <p className="text-sm text-[#6b6b6b]">atmosfera</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Pizza Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <ImageWithFallback
              src={pizzaImage}
              alt="Pizza Prosciutto z rukolą, pomidorkami koktajlowymi i szynką parmeńską — Pizzeria Pepperoni, Kamieniec Wrocławski"
              width={384}
              height={512}
              decoding="async"
              {...({ fetchpriority: "high" } as Record<string, string>)}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 bg-[#2ecc71] text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg inline-flex items-center gap-2"
            >
              <Leaf className="w-5 h-5" />
              Świeża bazylia
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 bg-[#e63946] text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg inline-flex items-center gap-2"
            >
              <TomatoGlyph className="w-5 h-5" />
              Świeże pomidory
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
