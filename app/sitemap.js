import { products } from "@/data/products";
import { blogData } from "@/data/blog";
import { generateSlug } from "@/lib/utils";

export default function sitemap() {
  const baseUrl = "https://venkatraogarivantillu.com";

  const productPaths = products.map((product) => ({
    url: `${baseUrl}/products/${generateSlug(product.name)}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  const blogPaths = blogData.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const staticRoutes = [
    "",
    "/products",
    "/blog",
    "/about",
    "/categories",
    "/gifting"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "yearly" : "daily",
    priority: route === "" ? 1 : 0.8,
  }));

  return [...staticRoutes, ...productPaths, ...blogPaths];
}
