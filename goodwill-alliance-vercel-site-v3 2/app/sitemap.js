export default function sitemap() {
  const base = "https://goodwillalliance.org";
  return ["/", "/our-work", "/about", "/donate", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
