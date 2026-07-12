import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const scale = useTransform(scrollY, [0, 300], [0.5, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      style={{ opacity, scale }}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#ff6b35] text-white rounded-full shadow-2xl hover:bg-[#e63946] transition-colors flex items-center justify-center"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
}
