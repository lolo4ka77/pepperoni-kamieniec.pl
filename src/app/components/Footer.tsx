import { motion } from "motion/react";
import { Heart, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo-header.png";

const footerLinks = [
  { name: "Menu", href: "#menu" },
  { name: "O nas", href: "#o-nas" },
  { name: "Galeria", href: "#galeria" },
  { name: "Kontakt", href: "#kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img
                src={logo}
                alt="Pepperoni — pizzeria w Kamieńcu Wrocławskim"
                width={500}
                height={144}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400">
                Prawdziwa włoska pizza w sercu Kamieńca Wrocławskiego
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors inline-block"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-[#ff6b35]" />
                <a href="tel:504005398" className="hover:text-white transition-colors">
                  504 005 398
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#ff6b35] mt-1 flex-shrink-0" />
                <address className="not-italic">Wrocławska 13, 55-002 Kamieniec Wrocławski</address>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Godziny otwarcia</h3>
            <div className="text-gray-400 space-y-1">
              <p>Poniedziałek – Niedziela</p>
              <p className="text-white font-semibold text-lg">13:00 – 21:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Pepperoni. Wszystkie prawa zastrzeżone.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>Stworzone z</span>
              <Heart className="w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" />
              <span>w Kamieńcu Wrocławskim</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
