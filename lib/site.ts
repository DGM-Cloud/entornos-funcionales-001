export const siteUrl = "https://dgm-cloud.github.io/entornos-funcionales-001";

export const company = {
  name: "Entornos Funcionales",
  legal: "Entornos Funcionales Reconstrucción & Acabados",
  tagline: "Reconstrucción & Acabados",
  city: "Rímac, Lima",
  email: "info@entornosfuncionales.com",
  whatsapp: "51993773168",
  instagram: "https://www.instagram.com/entornosfuncionales/",
  facebook: "https://www.facebook.com/entornosfuncionales",
  linkedin: "https://www.linkedin.com/company/entornos-funcionales",
  address: ["Mz. E Lt. 40, Comité 5", "Flor de Amancaes", "Rímac, Lima"],
  maps: "https://maps.google.com/?q=Flor+de+Amancaes+R%C3%ADmac+Lima",
  phones: [
    { label: "913 460 898", href: "tel:+51913460898" },
    { label: "989 825 435", href: "tel:+51989825435" },
    { label: "993 773 168", href: "tel:+51993773168" },
  ],
};

export const nav = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const services = [
  {
    id: "acabados",
    index: "01",
    title: "Reconstrucción y acabados",
    summary:
      "Obra civil menor, oficios y terminaciones para dejar un espacio usable, seguro y presentable.",
    audience: "Hogar, empresa privada e instituciones del Estado.",
    items: [
      "Gasfitería",
      "Carpintería y ebanistería",
      "Soldadura",
      "Pintura",
      "Cerrajería y vidriería",
      "Muebles de melamine",
      "Acabados de interiores",
      "Instalación de drywall",
    ],
  },
  {
    id: "climatizacion",
    index: "02",
    title: "Climatización y refrigeración",
    summary:
      "Suministro, instalación y mantenimiento de aire acondicionado, ventilación, calefacción y frío industrial.",
    audience: "Uso residencial, comercial e industrial.",
    items: [
      "Diseño y comercialización de equipos HVAC y refrigeración",
      "Importación y exportación de equipos de frío y calor",
      "Instalación y mantenimiento de aire acondicionado",
      "Calefacción y ventilación",
      "Refrigeración comercial e industrial",
      "Compresores para aire acondicionado y refrigeración",
    ],
  },
  {
    id: "incendios",
    index: "03",
    title: "Protección contra incendios",
    summary:
      "Proyecto, instalación y mantenimiento de sistemas activos y pasivos, con certificados de protección cuando el alcance lo incluye.",
    audience: "Edificaciones que deben cumplir condiciones de seguridad.",
    items: [
      "Proyectos de sistemas contra incendios y mangueras",
      "Instalación, mantenimiento, reparación y diseño",
      "Certificados de protección contra incendios",
      "Detección, alarmas, sensores y detectores térmicos y de humo",
      "Extracción, señalización y puertas cortafuegos",
      "Extintores de agua, espuma, gases y polvo",
      "Protección pasiva y activa, recarga e inspecciones",
    ],
  },
  {
    id: "electricidad",
    index: "04",
    title: "Electricidad industrial",
    summary:
      "Montaje eléctrico con capacidad técnica y administrativa: del diseño del tablero al levantamiento de observaciones.",
    audience: "Proyectos del sector eléctrico y edificaciones en operación.",
    items: [
      "Diseño, implementación y mantenimiento de ingeniería eléctrica",
      "Eficiencia energética y calidad de la energía",
      "Levantamiento de observaciones de INDECI",
      "Fabricación y montaje de tableros eléctricos",
    ],
  },
] as const;

export const sectors = [
  {
    title: "Empresa privada",
    text: "Locales, plantas y oficinas que necesitan una obra cerrada sin frenar la operación más de lo necesario.",
  },
  {
    title: "Sector público",
    text: "Requerimientos de instituciones del Estado, con alcance claro y ejecución ordenada.",
  },
  {
    title: "Industrial y comercial",
    text: "Climatización, frío, tableros y protección contra incendios en espacios de uso intensivo.",
  },
  {
    title: "Residencial",
    text: "Acabados, muebles, instalaciones y mejoras cuando la vivienda se trata con el mismo rigor que una obra.",
  },
];

export const method = [
  {
    index: "01",
    title: "Levantamiento",
    text: "Visita, diagnóstico y definición del alcance. Se acuerda qué se interviene y qué queda fuera.",
  },
  {
    index: "02",
    title: "Ingeniería",
    text: "Diseño, propuesta y coordinación de oficios: acabados, clima, incendio y electricidad en un solo plano de trabajo.",
  },
  {
    index: "03",
    title: "Ejecución",
    text: "Obra, instalaciones y terminaciones con el equipo en campo y seguimiento del avance.",
  },
  {
    index: "04",
    title: "Cierre",
    text: "Pruebas, certificados de protección contra incendios cuando corresponden al encargo, y mantenimiento posterior.",
  },
];

export type WorkCategory =
  | "Acabados"
  | "Climatización"
  | "Incendios"
  | "Instalaciones"
  | "Estructura";

export const works: {
  src: string;
  title: string;
  category: WorkCategory;
  caption: string;
  wide?: boolean;
}[] = [
  {
    src: "/media/obra-07.jpg",
    title: "Planta de climatización",
    category: "Climatización",
    caption: "Condensadoras y red de equipos en cubierta.",
    wide: true,
  },
  {
    src: "/media/obra-01.jpg",
    title: "Línea de rociadores",
    category: "Incendios",
    caption: "Manómetro de protección contra incendio en red húmeda.",
  },
  {
    src: "/media/obra-09.jpg",
    title: "Red y estructura metálica",
    category: "Incendios",
    caption: "Tubería contra incendios bajo cercha de acero.",
  },
  {
    src: "/media/obra-08.jpg",
    title: "Coordinación en obra",
    category: "Instalaciones",
    caption: "Revisión de cielo técnico: clima, incendio e instalaciones.",
    wide: true,
  },
  {
    src: "/media/bomba-2.png",
    title: "Cubierta impermeabilizada",
    category: "Acabados",
    caption: "Colocación de membrana asfáltica en azotea.",
    wide: true,
  },
  {
    src: "/media/obra-02.jpg",
    title: "Cierre de losa",
    category: "Acabados",
    caption: "Preparación de cubierta sobre ambiente técnico.",
  },
  {
    src: "/media/bomba-1.png",
    title: "Piso en ejecución",
    category: "Acabados",
    caption: "Colocación de porcelanato en ambiente de obra.",
  },
  {
    src: "/media/obra-03.jpg",
    title: "Mueble de melamine",
    category: "Acabados",
    caption: "Mueble de entretenimiento instalado a medida.",
  },
  {
    src: "/media/obra-04.jpg",
    title: "Carpintería interior",
    category: "Acabados",
    caption: "Armado de mueble bajo en melamine.",
  },
  {
    src: "/media/obra-05.jpg",
    title: "Techo en obra",
    category: "Estructura",
    caption: "Vivienda con tijerales de madera a la vista.",
    wide: true,
  },
  {
    src: "/media/obra-06.jpg",
    title: "Entramado de madera",
    category: "Estructura",
    caption: "Carpintería estructural en ampliación.",
  },
];

const serviceCategories: Partial<Record<(typeof services)[number]["id"], WorkCategory>> = {
  acabados: "Acabados",
  climatizacion: "Climatización",
  incendios: "Incendios",
};

export function worksForService(id: (typeof services)[number]["id"]) {
  const category = serviceCategories[id];
  if (!category) return [];
  return works.filter((work) => work.category === category);
}

export const trades = [
  "Gasfitería",
  "Drywall",
  "Melamine",
  "Pintura",
  "Soldadura",
  "Cerrajería",
  "Vidriería",
  "HVAC",
  "Refrigeración",
  "Contra incendios",
  "Tableros eléctricos",
  "INDECI",
];
