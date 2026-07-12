import { motion, useScroll, useTransform } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo-header.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 251, 245, 0)", "rgba(255, 255, 255, 0.98)"]
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.1)"]
  );

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "O nas", href: "#o-nas" },
    { name: "Galeria", href: "#galeria" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#start"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
            aria-label="Pepperoni — strona główna"
          >
            <img
              src={logo}
              alt="Pepperoni — pizzeria w Kamieńcu Wrocławskim"
              width={500}
              height={144}
              decoding="async"
              className="h-9 md:h-11 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                className="text-[#2d2d2d] hover:text-[#ff6b35] font-semibold transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="tel:504005398"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#ff6b35] text-white rounded-full font-semibold hover:bg-[#e63946] transition-colors shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2d2d2d]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-[#f5f5f5] shadow-lg"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#2d2d2d] hover:text-[#ff6b35] font-semibold py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:504005398"
              className="block w-full px-6 py-3 bg-[#ff6b35] text-white rounded-full font-semibold text-center hover:bg-[#e63946] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Zadzwoń teraz
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
