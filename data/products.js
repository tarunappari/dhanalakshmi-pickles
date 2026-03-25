export const staticProducts = [
  {
    id: "gid://shopify/Product/1",
    handle: "peace-lily",
    title: "Peace Lily",
    description: "A beautiful indoor plant that helps purify the air.",
    tags: ["Indoor", "Low Maintenance", "Air Purifying"],
    images: {
      edges: [
        {
          node: {
            url: "https://images.pexels.com/photos/1959062/pexels-photo-1959062.jpeg?auto=compress&cs=tinysrgb&w=800",
            altText: "Peace Lily Plant"
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: {
        amount: "29.99",
        currencyCode: "USD"
      }
    }
  },
  {
    id: "gid://shopify/Product/2",
    handle: "snake-plant",
    title: "Snake Plant",
    description: "Hardy, low light tolerant indoor plant.",
    tags: ["Indoor", "Low Light", "Hardy"],
    images: {
      edges: [
        {
          node: {
            url: "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=800",
            altText: "Snake Plant"
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: {
        amount: "24.99",
        currencyCode: "USD"
      }
    }
  },
  {
    id: "gid://shopify/Product/3",
    handle: "monstera",
    title: "Monstera Deliciosa",
    description: "Tropical plant with iconic split leaves.",
    tags: ["Indoor", "Tropical", "Popular"],
    images: {
      edges: [
        {
          node: {
            url: "https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg?auto=compress&cs=tinysrgb&w=800",
            altText: "Monstera Plant"
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: {
        amount: "39.99",
        currencyCode: "USD"
      }
    }
  },
  {
    id: "gid://shopify/Product/4",
    handle: "tomato-seeds",
    title: "Tomato Seeds",
    description: "High yield, organic heirloom tomato seeds.",
    tags: ["Seeds", "Vegetable", "Organic"],
    images: {
      edges: [
        {
          node: {
            url: "https://images.pexels.com/photos/1327357/pexels-photo-1327357.jpeg?auto=compress&cs=tinysrgb&w=800",
            altText: "Tomato Seeds"
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: {
        amount: "4.99",
        currencyCode: "USD"
      }
    }
  }
];

export const getStaticProducts = () => staticProducts;

export const getStaticProductByHandle = (handle) => {
  return staticProducts.find((p) => p.handle === handle) || null;
};

export const getStaticProductHandles = () => {
  return staticProducts.map((p) => p.handle);
};
