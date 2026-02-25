export type ProjectCategory = "cafes" | "offices" | "gardens";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  area: string;
  year: string;
  client: string;
  coord: string;
}

export const categories: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "الكل" },
  { key: "cafes", label: "مقاهي" },
  { key: "offices", label: "مكاتب" },
  { key: "gardens", label: "حدائق" },
];

export const projects: Project[] = [
  {
    id: "cafe-noir",
    number: "01",
    title: "مقهى نوار",
    category: "cafes",
    categoryLabel: "مقاهي",
    description: "تصميم داخلي عصري لمقهى بأجواء هادئة ودافئة",
    fullDescription:
      "مقهى نوار هو مشروع تصميم داخلي متكامل يجمع بين الطابع العصري والأجواء الدافئة. تم اختيار مواد طبيعية كالخشب والحجر مع إضاءة ناعمة لخلق بيئة مريحة تشجع على الاسترخاء والتواصل. يتميز التصميم بتوزيع ذكي للمساحات يوفر زوايا خاصة ومناطق مفتوحة للتجمعات، مع الحفاظ على تدفق سلس للحركة بين مناطق الطلب والجلوس.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2000&auto=format&fit=crop",
    ],
    area: "120 م²",
    year: "2024",
    client: "عميل خاص",
    coord: "N 31.52° E 34.45°",
  },
  {
    id: "cafe-blossom",
    number: "02",
    title: "مقهى بلوسوم",
    category: "cafes",
    categoryLabel: "مقاهي",
    description: "مساحة مفتوحة تجمع بين الأناقة والراحة",
    fullDescription:
      "مقهى بلوسوم صُمّم ليكون واحة حضرية تمزج بين الأناقة والبساطة. المساحة المفتوحة تسمح بدخول الإضاءة الطبيعية بشكل وافر، مع استخدام النباتات الداخلية كعناصر تصميمية رئيسية. تم اعتماد لوحة ألوان هادئة من درجات البيج والأخضر الزيتوني لتعزيز الشعور بالاسترخاء. يتضمن التصميم منطقة بار مركزية وزوايا جلوس متنوعة تلبي احتياجات مختلف الزوار.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2000&auto=format&fit=crop",
    ],
    area: "95 م²",
    year: "2024",
    client: "شركة بلوسوم",
    coord: "N 31.50° E 34.46°",
  },
  {
    id: "office-hub",
    number: "03",
    title: "مكتب هاب",
    category: "offices",
    categoryLabel: "مكاتب",
    description: "بيئة عمل ملهمة بتصميم وظيفي متكامل",
    fullDescription:
      "مكتب هاب هو مشروع تصميم مكتبي حديث يركز على خلق بيئة عمل تعزز الإنتاجية والإبداع. يجمع التصميم بين المساحات المفتوحة للعمل التشاركي والمكاتب الخاصة للتركيز، مع غرف اجتماعات مجهزة بأحدث التقنيات. تم استخدام ألوان محايدة مع لمسات من الأخضر لإضفاء طابع حيوي ومنعش على المكان.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2000&auto=format&fit=crop",
    ],
    area: "200 م²",
    year: "2023",
    client: "شركة هاب التقنية",
    coord: "N 31.53° E 34.44°",
  },
  {
    id: "office-zen",
    number: "04",
    title: "مكتب زين",
    category: "offices",
    categoryLabel: "مكاتب",
    description: "مساحة إبداعية تعزز الإنتاجية والتركيز",
    fullDescription:
      "مكتب زين مستوحى من فلسفة البساطة اليابانية، حيث يعتمد على الخطوط النظيفة والمساحات المنظمة لتقليل المشتتات وتعزيز التركيز. يتميز بإضاءة طبيعية وافرة عبر نوافذ كبيرة، واستخدام مواد طبيعية كالخيزران والحجر. يشمل التصميم مناطق للاستراحة والتأمل لتحقيق التوازن بين العمل والراحة.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505409859467-3a796fd5a263?q=80&w=2000&auto=format&fit=crop",
    ],
    area: "150 م²",
    year: "2023",
    client: "استوديو زين",
    coord: "N 31.51° E 34.47°",
  },
  {
    id: "garden-oasis",
    number: "05",
    title: "حديقة الواحة",
    category: "gardens",
    categoryLabel: "حدائق",
    description: "تصميم خارجي يحاكي الطبيعة بأسلوب معاصر",
    fullDescription:
      "حديقة الواحة مشروع تنسيق خارجي يحاكي جمال الطبيعة بأسلوب هندسي معاصر. يتضمن التصميم مسارات متعرجة بين أحواض النباتات المحلية، ونافورة مركزية محاطة بمقاعد حجرية. تم اختيار نباتات متنوعة تتناسب مع المناخ المحلي لضمان استدامة الحديقة مع الحد الأدنى من الصيانة. الإضاءة المسائية تضفي سحرًا خاصًا على المكان.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2000&auto=format&fit=crop",
    ],
    area: "300 م²",
    year: "2024",
    client: "مجمع سكني خاص",
    coord: "N 31.54° E 34.43°",
  },
  {
    id: "garden-serenity",
    number: "06",
    title: "حديقة سيرينيتي",
    category: "gardens",
    categoryLabel: "حدائق",
    description: "حديقة خاصة بتنسيق هندسي وطبيعي متوازن",
    fullDescription:
      "حديقة سيرينيتي هي مساحة خارجية خاصة صُمّمت لتكون ملاذًا هادئًا بعيدًا عن صخب المدينة. يجمع التصميم بين التنسيق الهندسي المنظم والعناصر الطبيعية العفوية، مع استخدام أحجار محلية ونباتات عطرية. يتضمن المشروع منطقة جلوس خارجية مظللة وممشى حصوي يقود إلى زاوية تأمل هادئة محاطة بالخضرة.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551410224-699683e15636?q=80&w=2000&auto=format&fit=crop",
    ],
    area: "250 م²",
    year: "2025",
    client: "عميل خاص",
    coord: "N 31.49° E 34.48°",
  },
];
