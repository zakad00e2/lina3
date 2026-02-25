"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import BlueprintOverlay from "@/components/BlueprintOverlay";

export default function ContactPage() {
  const { ref, isVisible } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = `مرحباً، أنا ${formData.name}%0A${formData.subject}%0A%0A${formData.message}`;
    window.open(`https://wa.me/970000000000?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Page header */}
      <section className="relative pt-10 pb-8 bg-green-dark overflow-hidden">
        <BlueprintOverlay />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#f7f6f2 1px, transparent 1px), linear-gradient(90deg, #f7f6f2 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="coord-label text-gold/40 block mb-2">
            PAGE — 05
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-cream tracking-wide mb-3">
            تواصل معنا
          </h1>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-3" />
          <p className="text-cream/50 text-sm">
            ابدأ رحلة تصميم مساحتك اليوم
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-10 bg-cream blueprint-grid">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* WhatsApp CTA */}
          <div
            ref={ref}
            className={`text-center mb-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <a
              href="https://wa.me/970000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-4 bg-gold text-green-dark font-medium text-sm tracking-wide hover:bg-gold-light transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تواصل عبر واتساب
            </a>

            <div className="flex items-center gap-4 justify-center mt-5">
              <div className="h-px flex-1 max-w-[80px] bg-line" />
              <span className="text-xs text-text-light">أو</span>
              <div className="h-px flex-1 max-w-[80px] bg-line" />
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-text-secondary mb-2 tracking-wide">
                  الاسم
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-line text-sm text-green-dark placeholder:text-text-light focus:border-gold/50 focus:outline-none transition-colors duration-300"
                  placeholder="اسمك الكامل"
                />
              </div>
              <div>
                <label className="block text-xs text-text-secondary mb-2 tracking-wide">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-line text-sm text-green-dark placeholder:text-text-light focus:border-gold/50 focus:outline-none transition-colors duration-300"
                  placeholder="بريدك الإلكتروني"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-text-secondary mb-2 tracking-wide">
                الموضوع
              </label>
              <select
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 bg-transparent border border-line text-sm text-green-dark focus:border-gold/50 focus:outline-none transition-colors duration-300 appearance-none"
              >
                <option value="">اختر نوع الخدمة</option>
                <option value="تصميم داخلي">تصميم داخلي</option>
                <option value="تصميم خارجي">تصميم خارجي</option>
                <option value="استشارة">استشارة</option>
                <option value="آخر">آخر</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-text-secondary mb-2 tracking-wide">
                الرسالة
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-transparent border border-line text-sm text-green-dark placeholder:text-text-light focus:border-gold/50 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="أخبرنا عن مشروعك..."
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-12 py-3.5 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-green-dark transition-all duration-300"
              >
                إرسال
              </button>
            </div>
          </form>

          {/* Additional contact info */}
          <div className="mt-10 pt-8 border-t border-line">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="coord-label block mb-2">SOCIAL — 01</span>
                <h4 className="text-sm font-medium text-green-dark mb-1">
                  واتساب
                </h4>
                <a
                  href="https://wa.me/970000000000"
                  className="text-xs text-text-secondary hover:text-gold transition-colors"
                >
                  +970 00 000 0000
                </a>
              </div>
              <div>
                <span className="coord-label block mb-2">SOCIAL — 02</span>
                <h4 className="text-sm font-medium text-green-dark mb-1">
                  انستغرام
                </h4>
                <a
                  href="https://instagram.com/venza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-secondary hover:text-gold transition-colors"
                >
                  @venza
                </a>
              </div>
              <div>
                <span className="coord-label block mb-2">SOCIAL — 03</span>
                <h4 className="text-sm font-medium text-green-dark mb-1">
                  البريد
                </h4>
                <a
                  href="mailto:info@venza.design"
                  className="text-xs text-text-secondary hover:text-gold transition-colors"
                >
                  info@venza.design
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
