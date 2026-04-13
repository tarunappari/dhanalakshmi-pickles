export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/admin/*",
        "/checkout",
        "/checkout/*",
        "/order-success",
        "/api/*",
        "/test",
        "/search",
      ],
    },
    sitemap: "https://venkatraogarivantillu.com/sitemap.xml",
  };
}
