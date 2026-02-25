export type ServiceIcon = "interior" | "exterior" | "consultation" | "supervision";

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}

export const services: Service[] = [
  {
    id: "interior",
    number: "01",
    title: "التصميم الداخلي",
    description:
      "تصميم مساحات داخلية تجمع بين الوظيفية والجمال — من المقاهي إلى المكاتب بأسلوب معماري دقيق.",
    icon: "interior",
  },
  {
    id: "exterior",
    number: "02",
    title: "التصميم الخارجي",
    description:
      "تنسيق واجهات وحدائق بتصميم هندسي يحاكي الطبيعة ويعزز الهوية البصرية للمكان.",
    icon: "exterior",
  },
  {
    id: "consultation",
    number: "03",
    title: "الاستشارات",
    description:
      "جلسات استشارية متخصصة لتحليل المساحات وتقديم حلول تصميمية مبتكرة تناسب احتياجاتك.",
    icon: "consultation",
  },
  {
    id: "supervision",
    number: "04",
    title: "الإشراف على التنفيذ",
    description:
      "متابعة دقيقة لمراحل التنفيذ لضمان تطبيق التصميم بأعلى معايير الجودة والدقة.",
    icon: "supervision",
  },
];
