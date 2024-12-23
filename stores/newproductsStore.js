import { defineStore } from "pinia";
import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useNewProductsStoreStore = defineStore("new-products", {
  state: () => ({
    products: [],
    selectedProduct: null,
  }),

  actions: {
    async fetchProducts() {
      try {
        const querySnap = await getDocs(query(collection(db, "products")));
        const tempProducts = [];
        querySnap.forEach((doc) => {
          const data = doc.data();
          const category = data.categoryTitle;
          const subCategory = data.subCategoryTitle;
          const availability = data.availability;
          const brand = data.brand;
          const product = {
            id: doc.id,
            ...data,
            categoryTitle: category,
            subCategoryTitle: subCategory,
            availability: availability,
            brand: brand,
          };
          tempProducts.push(product);
        });
        this.products = tempProducts;
        // console.log("Products fetched and organized:", this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async fetchProductDetail(productId) {
      if (!productId) {
        return;
      }
      try {
        // console.log("Fetching product details for ID:", productId);
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let product = { ...docSnap.data(), id: productId };
          // console.log("Fetched product:", product);
          this.selectedProduct = product;
          // console.log('selected product:', this.selectedProduct)
        } else {
          console.error("No product found for ID:", id);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    },
  },

  getters: {},
});
