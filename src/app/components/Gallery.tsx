import { motion } from "motion/react";
import { Camera } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";

type GalleryItem =
  | { type: "photo"; src: string; alt: string }
  | { type: "placeholder" };

const items: GalleryItem[] = [
  { type: "photo", src: photo3, alt: "Pizza Prosciutto z rukolą i pomidorkami" },
  { type: "placeholder" },
  { type: "photo", src: photo1, alt: "Pizza z szynką i czerwoną cebulą" },
  { type: "photo", src: photo2, alt: "Biała pizza z rukolą" },
  { type: "placeholder" },
  { type: "placeholder" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-white to-[#fffbf5] scroll-mt-20">
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
            Nasza <span className="text-[#ff6b35]">Galeria</span>
          </h2>
          <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
            Zobacz, co przygotowujemy dla Ciebie każdego dnia
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
          <Masonry gutter="1.5rem">
            {items.map((item, index) =>
              item.type === "photo" ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={384}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white font-semibold text-lg">{item.alt}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col items-center justify-center text-center aspect-[4/5] rounded-2xl border-2 border-dashed border-[#ff6b35]/30 bg-gradient-to-br from-white to-[#fff5e9] p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b35]/10 flex items-center justify-center mb-4">
                    <Camera className="w-7 h-7 text-[#ff6b35]" />
                  </div>
                  <p className="text-[#6b6b6b] font-medium">
                    Tutaj pojawią się zdjęcia naszej restauracji
                  </p>
                </motion.div>
              )
            )}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
