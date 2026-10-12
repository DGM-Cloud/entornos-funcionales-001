import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.entornosfuncionales.com";
  return ["", "/nosotros", "/servicios", "/proyectos", "/contacto"].map((path) => ({
    url: `${base}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
