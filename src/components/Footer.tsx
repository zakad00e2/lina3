import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-dark text-cream/70 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-[0.2em] text-cream mb-3">
              VENZA
            </h3>
            <div className="h-px w-16 bg-gold/40 mb-5" />
            <p className="text-sm leading-relaxed text-cream/60">
              مساحات بأسلوب وظيفي وجمالي
              <br />
              تصميم داخلي وخارجي
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-gold/80 mb-6 uppercase font-medium">
              الصفحات
            </h4>
            <ul className="space-y-3.5">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/projects", label: "المشاريع" },
                { href: "/services", label: "الخدمات" },
                { href: "/about", label: "عنّا" },
                { href: "/contact", label: "تواصل" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/65 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-gold/80 mb-6 uppercase font-medium">
              تواصل
            </h4>
            <ul className="space-y-3.5 text-sm text-cream/65">
              <li>
                <a
                  href="https://wa.me/970000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                >
                  واتساب
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/venza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                >
                  انستغرام
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Architectural line */}
        <div className="relative mb-8">
          <div className="h-px bg-cream/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-gold/30 rotate-45" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/45">
          <p>© {new Date().getFullYear()} VENZA — جميع الحقوق محفوظة</p>
          <span className="coord-label opacity-60">N 31.5° E 34.4°</span>
        </div>
      </div>
    </footer>
  );
}
