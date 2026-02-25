"use client";

import { useInView } from "@/hooks/useInView";
import BlueprintOverlay from "@/components/BlueprintOverlay";

export default function AboutPage() {
  const { ref: bioRef, isVisible: bioVisible } = useInView();
  const { ref: valRef, isVisible: valVisible } = useInView();
  const { ref: statsRef, isVisible: statsVisible } = useInView();

  const values = [
    {
      title: "الدقة",
      desc: "كل تفصيل مدروس بعناية معمارية",
      icon: "01",
    },
    {
      title: "الأصالة",
      desc: "تصاميم فريدة تعكس هوية كل مساحة",
      icon: "02",
    },
    {
      title: "الوظيفية",
      desc: "الجمال يخدم الاستخدام العملي",
      icon: "03",
    },
    {
      title: "الابتكار",
      desc: "حلول إبداعية لتحديات التصميم",
      icon: "04",
    },
  ];

  const stats = [
    { number: "+50", label: "مشروع مكتمل" },
    { number: "+5", label: "سنوات خبرة" },
    { number: "+30", label: "عميل راضٍ" },
    { number: "3", label: "تخصصات" },
  ];

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
            PAGE — 04
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-cream tracking-wide mb-3">
            عن المصممة
          </h1>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-3" />
          <p className="text-cream/50 text-sm">
            م. لينا ناصر اليازجي — مصممة معمارية
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Portrait placeholder */}
            <div className="relative">
              <div className="aspect-[3/4] bg-cream-dark border border-line blueprint-grid-dense flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 border border-gold/20 rotate-45 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-gold/40 -rotate-45 text-lg font-bold">
                      LN
                    </span>
                  </div>
                  <span className="text-xs text-text-light">
                    م. لينا ناصر اليازجي
                  </span>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t border-r border-gold/30" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b border-l border-gold/30" />
              {/* Coord */}
              <span className="absolute bottom-4 right-4 coord-label">
                PORTRAIT — 01
              </span>
            </div>

            {/* Bio text */}
            <div
              ref={bioRef}
              className={bioVisible ? "animate-fade-in-up" : "opacity-0"}
            >
              <span className="coord-label block mb-2">BIO — 01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-green-dark mb-3">
                م. لينا ناصر اليازجي
              </h2>
              <div className="h-px w-16 bg-gold/50 mb-4" />

              <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <p>
                  مصممة معمارية متخصصة في التصميم الداخلي والخارجي، أمتلك شغفًا
                  عميقًا بتحويل المساحات إلى تجارب بصرية ووظيفية متكاملة.
                </p>
                <p>
                  أؤمن بأن التصميم الجيد ليس مجرد جمال ظاهري، بل هو توازن دقيق
                  بين الشكل والوظيفة، حيث يخدم كل عنصر غرضًا محددًا مع الحفاظ
                  على الهوية البصرية المميزة.
                </p>
                <p>
                  تخصصت في تصميم المقاهي والمكاتب والحدائق، وأعمل على كل مشروع
                  بعناية معمارية تضمن نتيجة استثنائية تتجاوز التوقعات.
                </p>
              </div>

              {/* Specialties */}
              <div className="mt-6 flex flex-wrap gap-4">
                {["مقاهي", "مكاتب", "حدائق"].map((s) => (
                  <span
                    key={s}
                    className="px-5 py-2.5 border border-line text-sm text-text-secondary hover:border-gold/40 hover:text-gold transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-green-dark">
        <div
          ref={statsRef}
          className={`max-w-5xl mx-auto px-6 lg:px-12 ${
            statsVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center py-5 border border-cream/5"
              >
                <span className="block text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </span>
                <span className="text-xs text-cream/65">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8">
            <span className="section-overline">VALUES — 01</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-3">قيمنا</h2>
            <div className="flex items-center justify-center gap-2 mb-0">
              <div className="w-1.5 h-1.5 bg-gold/40 rotate-45" />
              <div className="h-px w-16 bg-gold/50" />
              <div className="w-1.5 h-1.5 bg-gold/40 rotate-45" />
            </div>
          </div>

          <div
            ref={valRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
              valVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {values.map((val) => (
              <div
                key={val.title}
                className="group relative p-5 border border-line hover:border-gold/40 bg-white hover:bg-cream transition-all duration-500 text-center hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/20" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gold/20" />

                <span className="text-xs font-mono text-gold/40 block mb-2">
                  {val.icon}
                </span>
                <h3 className="text-lg font-semibold text-green-dark mb-1">
                  {val.title}
                </h3>
                <p className="text-sm text-text-secondary">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
