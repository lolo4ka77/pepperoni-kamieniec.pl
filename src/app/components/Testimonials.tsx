import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Pyszna pizza, w dobrej cenie, zamawiamy już nie raz i zawsze jest pyszna, dużo dodatków.",
  },
  {
    rating: 5,
    text: "Prosta smaczna pizza w przystępnej cenie, mogę polecić.",
  },
  {
    rating: 5,
    text: "Nie wiem jak pizza, ale pierogi przepyszne.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#fffbf5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-1.5 mb-5"
            role="img"
            aria-label="Ocena 5 gwiazdek"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} aria-hidden="true" className="w-8 h-8 fill-[#ff6b35] text-[#ff6b35]" />
            ))}
          </motion.div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-[#2d2d2d] mb-4 tracking-tight">
            Co mówią <span className="text-[#ff6b35]">nasi</span>
            <br />
            <span className="text-[#e63946]">klienci</span>
          </h2>
          <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
            Opinie naszych gości z Google
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#ff6b35]"
            >
              {/* Rating */}
              <div
                className="flex gap-1 mb-4"
                role="img"
                aria-label={`Ocena ${testimonial.rating} z 5 gwiazdek`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-[#ff6b35] text-[#ff6b35]"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#2d2d2d] mb-6 leading-relaxed">{testimonial.text}</p>

              {/* Source */}
              <div className="flex items-center justify-between pt-4 border-t border-[#f5f5f5]">
                <div>
                  <p className="font-bold text-[#2d2d2d]">Opinia z Google</p>
                  <p className="text-sm text-[#6b6b6b]">Zweryfikowana opinia</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#e63946] flex items-center justify-center text-white">
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#6b6b6b] mb-4 text-lg">Średnia ocena: 4,0 / 5,0</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#2d2d2d] rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-[#ff6b35]"
          >
            <Star className="w-5 h-5 fill-[#ff6b35] text-[#ff6b35]" />
            <span>Zobacz wszystkie opinie</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
