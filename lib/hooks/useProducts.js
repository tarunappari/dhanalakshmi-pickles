import { useCallback } from 'react';
import useProductStore from '../store/productStore';

/**
 * Custom hook for easier product store usage
 * Provides commonly used store actions and state
 */
export const useProducts = () => {
  const store = useProductStore();
  
  // Memoize the fetch function to prevent unnecessary re-renders
  const fetchProducts = useCallback(() => {
    return store.fetchProducts();
  }, [store.fetchProducts]);

  const fetchProductByHandle = useCallback((handle) => {
    return store.fetchProductByHandle(handle);
  }, [store.fetchProductByHandle]);

  const searchProducts = useCallback((searchTerm) => {
    return store.searchProducts(searchTerm);
  }, [store.searchProducts]);

  const getProductById = useCallback((productId) => {
    return store.getProductById(productId);
  }, [store.getProductById]);
  
  return {
    // State
    products: store.products,
    currentProduct: store.currentProduct,
    loading: store.loading,
    productLoading: store.productLoading,
    error: store.error,

    // Actions
    fetchProducts,
    fetchProductByHandle,
    searchProducts,
    getProductById,
    clearError: store.clearError,
    clearProducts: store.clearProducts,
    setCurrentProduct: store.setCurrentProduct,

    // Computed values
    hasProducts: store.products.length > 0,
    productCount: store.products.length,
    hasCurrentProduct: !!store.currentProduct,
  };
};

export default useProducts;
