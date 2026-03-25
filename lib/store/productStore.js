import { create } from 'zustand';
import { getStaticProducts, getStaticProductByHandle, getStaticProductHandles } from '../../data/products';

const useProductStore = create((set, get) => ({
  // State
  products: [],
  currentProduct: null, // For single product details
  loading: false,
  productLoading: false, // Separate loading state for single product
  error: null,

  // Actions
  setProducts: (products) => set({ products }),

  setCurrentProduct: (product) => set({ currentProduct: product }),

  setLoading: (loading) => set({ loading }),

  setProductLoading: (productLoading) => set({ productLoading }),

  setError: (error) => set({ error }),

  clearError: () => set({ error: null }),

  // Fetch products from static data
  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const products = getStaticProducts();

      set({
        products,
        loading: false,
        error: null
      });

      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      set({
        loading: false,
        error: 'Failed to fetch static products'
      });
      throw error;
    }
  },

  // Fetch a single product by handle from static data
  fetchProductByHandle: async (handle) => {
    try {
      set({ productLoading: true, error: null });

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const product = getStaticProductByHandle(handle);

      if (!product) {
        throw new Error('Product not found');
      }

      set({
        currentProduct: product,
        productLoading: false,
        error: null
      });

      return product;
    } catch (error) {
      console.error('Error fetching product by handle:', error);
      set({
        productLoading: false,
        error: error.message || 'Failed to fetch product'
      });
      throw error;
    }
  },

  // Fetch all product handles for static generation
  fetchAllProductHandles: async () => {
    try {
      return getStaticProductHandles();
    } catch (error) {
      console.error('Error fetching product handles:', error);
      throw error;
    }
  },

  // Search products by title or description
  searchProducts: (searchTerm) => {
    const state = get();
    if (!searchTerm) return state.products;

    const lowercaseSearch = searchTerm.toLowerCase();
    return state.products.filter(product =>
      product.title.toLowerCase().includes(lowercaseSearch) ||
      product.description.toLowerCase().includes(lowercaseSearch) ||
      product.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch))
    );
  },
}));

export default useProductStore;
