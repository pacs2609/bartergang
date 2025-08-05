import { defineStore } from 'pinia'

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  actions: {
    addItem(item: Omit<CartItem, 'quantity'>) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + item.quantity || 1;
      } else {
        this.items.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeItem(itemId: string) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
    updateItemQuantity(itemId: string, quantity: number) {
      const item = this.items.find(i => i.id === itemId);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          this.removeItem(itemId);
        }
      }
    },
    clearCart() {
      this.items = [];
    },
  },
  getters: {
    totalItems: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
  },
})
