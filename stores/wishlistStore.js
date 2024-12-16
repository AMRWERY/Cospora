import { defineStore } from "pinia";
import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const useWishlistStore = defineStore("wishlistStore", {
  state: () => ({
    wishlist: [],
    loading: false,
  }),

  actions: {
    async fetchWishlist() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "wishlist"));
        this.wishlist = querySnapshot.docs.map((doc) => ({
          docId: doc.id,
          productId: doc.data().id,
          title: doc.data().title,
          price: doc.data().price,
          imgOne: doc.data().imgOne,
        }));
        // console.log("Fetched wishlist:", this.wishlist);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        this.loading = false;
      }
    },

    async addToWishlist(id, title, price, imgOne) {
      if (this.wishlist.length === 0) {
        await this.fetchWishlist();
      }
      if (this.wishlist.some((item) => item.productId === id)) {
        throw new Error("Item already added to the wishlist.");
      }
      if (
        typeof id !== "string" ||
        typeof title !== "string" ||
        typeof price !== "string" ||
        typeof imgOne !== "string"
      ) {
        // console.error(
        //   "Invalid parameters passed to addToWishlist. Expected id, title, price, imgOne to be strings.",
        //   { id, title, price, imgOne }
        // );
        return;
      }
      const product = { id, title, price, imgOne };
      try {
        const docRef = await addDoc(collection(db, "wishlist"), product);
        this.wishlist.push({ docId: docRef.id, productId: id, ...product });
        // console.log("Product added to wishlist:", product);
      } catch (error) {
        console.error("Error adding to wishlist:", error);
      }
    },

    async removeFromWishlist(docId) {
      //   console.log("Removing item with docId:", docId);
      try {
        const docRef = doc(db, "wishlist", docId);
        await deleteDoc(docRef);
        // console.log("Item deleted successfully.");
        this.wishlist = this.wishlist.filter((item) => item.docId !== docId);
        // console.log("Updated wishlist:", this.wishlist);
      } catch (error) {
        console.error("Error removing from wishlist:", error);
      }
    },
  },

  getters: {
    isInWishlist: (state) => (productId) => {
      return state.wishlist.some((item) => item.productId === productId);
    },
  },
});
