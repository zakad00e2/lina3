import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BlueprintOverlay from "@/components/BlueprintOverlay";
import { services } from "@/data/services";

export default function ServicesPage() {
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
            PAGE — 03
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-cream tracking-wide mb-3">
            الخدمات
          </h1>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-3" />
          <p className="text-cream/65 text-sm">
            حلول تصميمية شاملة من الفكرة إلى التنفيذ
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* Process section */}
          <div className="pt-10 border-t border-line/20">
            <SectionHeading
              title="آلية العمل"
              subtitle="خطوات منظمة لتحويل رؤيتك إلى واقع"
              coord="PROC — 01"
            />

            <div className="max-w-4xl mx-auto mt-8 space-y-2">
              {[
                {
                  step: "01",
                  title: "الاستشارة",
                  desc: "جلسة أولية لفهم متطلباتك ورؤيتك للمساحة",
                },
                {
                  step: "02",
                  title: "التصميم",
                  desc: "تطوير مخططات ومفاهيم تصميمية تتوافق مع احتياجاتك",
                },
                {
                  step: "03",
                  title: "المراجعة",
                  desc: "عرض التصاميم ومناقشة التعديلات للوصول للنتيجة المثالية",
                },
                {
                  step: "04",
                  title: "التنفيذ",
                  desc: "إشراف دقيق على مراحل التنفيذ لضمان أعلى جودة",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="flex items-start gap-8 py-5 border-b border-line last:border-0 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 border border-line group-hover:border-gold/30 flex items-center justify-center transition-colors duration-500">
                    <span className="text-sm font-mono text-gold/50">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
