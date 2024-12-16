import { defineStore } from "pinia";
import { db } from "@/firebase/config";
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    isLoading: false,
  }),

  actions: {
    async fetchCart() {
      this.isLoading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "cart"));
        this.cart = querySnapshot.docs.map((doc) => ({
          docId: doc.id,
          productId: doc.data().productId,
          title: doc.data().title,
          price: doc.data().price,
          imgOne: doc.data().imgOne,
          categoryTitle: doc.data().categoryTitle,
          quantity: doc.data().quantity || 1,
        }));
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async addToCart(id, title, price, imgOne, categoryTitle, quantity) {
      if (this.cart.length === 0) {
        await this.fetchCart();
      }
      if (
        typeof id !== "string" ||
        typeof title !== "string" ||
        typeof price !== "string" ||
        typeof imgOne !== "string" ||
        typeof categoryTitle !== "string"
      ) {
        return;
      }
      const existingProduct = this.cart.find((item) => item.productId === id);
      if (existingProduct) {
        try {
          const docRef = doc(db, "cart", existingProduct.docId);
          const newQuantity = (existingProduct.quantity || 0) + quantity;
          await updateDoc(docRef, { quantity: newQuantity });
          existingProduct.quantity = newQuantity;
        } catch (error) {
          console.error("Error updating product quantity in Firestore:", error);
        }
      } else {
        const product = {
          productId: id,
          title,
          price,
          imgOne,
          categoryTitle,
          quantity,
        };
        try {
          const docRef = await addDoc(collection(db, "cart"), product);
          this.cart.push({
            docId: docRef.id,
            ...product,
          });
          // console.log("New product added to Firestore and cart.");
        } catch (error) {
          console.error("Error adding new product to Firestore:", error);
        }
      }
    },

    async removeFromCart(docId) {
      if (!docId) {
        //   console.error("No docId provided to remove from cart.");
        return;
      }
      try {
        const docRef = doc(db, "cart", docId);
        await deleteDoc(docRef);
        if (Array.isArray(this.cart)) {
          this.cart = this.cart.filter((item) => item.docId !== docId);
        } else {
          console.error("Cart is not an array:", this.cart);
        }
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    },

    async updateQuantityInCart(productId, newQuantity) {
      const product = this.cart.find((item) => item.productId === productId);
      if (product) {
        try {
          const docRef = doc(db, "cart", product.docId);
          await updateDoc(docRef, { quantity: newQuantity });
          product.quantity = newQuantity;
        } catch (error) {
          console.error("Error updating product quantity in Firestore:", error);
        }
      }
    },
  },

  getters: {
    isInCart: (state) => (productId) => {
      return state.cart.some((item) => item.productId === productId);
    },
  },
});
