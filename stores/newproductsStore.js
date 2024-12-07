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
        const querySnap = await getDocs(query(collection(db, "products")));
        const tempProducts = {};
        querySnap.forEach((doc) => {
          const data = doc.data();
          const category = data.categoryTitle;
          const subCategory = data.subCategoryTitle;

          // Initialize category array if it doesn't exist
          if (!tempProducts[category]) {
            tempProducts[category] = [];
          }
          if (!tempProducts[subCategory]) {
            tempProducts[subCategory] = [];
          }
          tempProducts[category].push({
            id: doc.id,
            ...data,
          });
          tempProducts[subCategory].push({
            id: doc.id,
            ...data,
          });
        });
        this.products = tempProducts;
        console.log("Products fetched and organized:", this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },

  getters: {},
});