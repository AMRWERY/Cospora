import { defineStore } from "pinia";
import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useNewProductsStoreStore = defineStore("new-products", {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts() {
      try {
        const querySnap = await getDocs(query(collection(db, "new-products")));
        const tempProducts = {
          makeup: [],
          // tshirt: [],
          // bags: [],
        };
        querySnap.forEach((doc) => {
          const data = doc.data();
          if (
            data &&
            Array.isArray(data.newProducts) &&
            data.newProducts.length > 0
          ) {
            const makeup = data.newProducts[0]?.makeup;
            // const tshirt = data.newProducts[0]?.tshirt;
            // const bags = data.newProducts[0]?.bags;
            if (Array.isArray(makeup)) tempProducts.makeup = [...makeup];
            // if (Array.isArray(tshirt)) tempProducts.tshirt = [...tshirt];
            // if (Array.isArray(bags)) tempProducts.bags = [...bags];
          }
        });
        this.products = tempProducts;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },

  getters: {},
});
