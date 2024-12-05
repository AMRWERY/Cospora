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
          nail: [],
          accessories: [],
        };
        querySnap.forEach((doc) => {
          const data = doc.data();
          if (
            data &&
            Array.isArray(data.newProducts) &&
            data.newProducts.length > 0
          ) {
            const makeup = data.newProducts[0]?.makeup;
            const nail = data.newProducts[0]?.nail;
            const accessories = data.newProducts[0]?.accessories;
            if (Array.isArray(makeup)) tempProducts.makeup = [...makeup];
            if (Array.isArray(nail)) tempProducts.nail = [...nail];
            if (Array.isArray(accessories))
              tempProducts.accessories = [...accessories];
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
