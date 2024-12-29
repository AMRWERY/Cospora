import { defineStore } from "pinia";
import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
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
        const authStore = useAuthStore();
        const userId = authStore.userId;
        if (!userId) {
          // console.error("User ID not found. Cannot fetch wishlist.");
          return;
        }
        const wishlistQuery = query(
          collection(db, "wishlist"),
          where("userId", "==", userId)
        );
        const querySnapshot = await getDocs(wishlistQuery);
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
      if (this.wishlist.some((item) => item.productId === id)) {
        throw new Error("Item already added to the wishlist.");
      }
      const authStore = useAuthStore();
      const userId = authStore.userId;
      if (!userId) {
        console.error("User ID not found. Cannot add to wishlist.");
        return;
      }
      const product = { id, title, price, imgOne, userId };
      try {
        const docRef = await addDoc(collection(db, "wishlist"), product);
        this.wishlist.push({ docId: docRef.id, productId: id, ...product });
        console.log("Product added to wishlist:", product);
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
