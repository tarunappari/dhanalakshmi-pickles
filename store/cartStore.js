import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set({ isCartOpen: !get().isCartOpen }),

      addToCart: (product, variant, quantity) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.product.id === product.id && item.variant.weight === variant.weight
        );

        if (existingItemIndex >= 0) {
          // If item already exists in cart, update its quantity
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex].quantity += quantity;
          set({ items: updatedItems, isCartOpen: true });
        } else {
          // Add new item
          set({ items: [...currentItems, { product, variant, quantity }], isCartOpen: true });
        }
      },

      removeFromCart: (productId, variantWeight) => {
        set({
          items: get().items.filter(
            (item) => !(item.product.id === productId && item.variant.weight === variantWeight)
          )
        });
      },

      updateQuantity: (productId, variantWeight, newQuantity) => {
        if (newQuantity < 1) return;
        set({
          items: get().items.map((item) =>
            item.product.id === productId && item.variant.weight === variantWeight
              ? { ...item, quantity: newQuantity }
              : item
          )
        });
      },

      clearCart: () => set({ items: [] }),
      
      getCartTotal: () => {
        return get().items.reduce((total, item) => {
          return total + (item.variant.discountPrice * item.quantity);
        }, 0);
      }
    }),
    {
      name: 'aranya-cart-storage', // unique name
      partialize: (state) => ({ items: state.items }), // Only persist items, not UI state (isCartOpen)
    }
  )
);
