import { defineStore } from "pinia";
import { db } from "@/firebase/config";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const useCategoriesStore = defineStore("categoriesStore", {
  state: () => ({
    categories: [],
    subCategories: [],
  }),

  actions: {
    async fetchCategories() {
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        this.categories = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log("Fetched categories:", this.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },

    async fetchSubCategories() {
      try {
        const querySnapshot = await getDocs(collection(db, "subCategories"));
        this.subCategories = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log("Fetched subcategories:", this.subCategories);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    },

    async addCategory(title) {
      try {
        const docRef = await addDoc(collection(db, "categories"), { title });
        const newCategory = { id: docRef.id, title };
        this.categories.push(newCategory);
        // console.log("Category added:", newCategory);
      } catch (error) {
        console.error("Error adding category:", error);
      }
    },

    async addSubCategory(title, categoryId) {
      try {
        const docRef = await addDoc(collection(db, "subCategories"), {
          title,
          categoryId,
        });
        const newSubCategory = { id: docRef.id, title, categoryId };
        this.subCategories.push(newSubCategory);
        // console.log("Subcategory added:", newSubCategory);
      } catch (error) {
        console.error("Error adding subcategory:", error);
      }
    },
  },

  getters: {
    getSubCategoriesByCategory: (state) => (categoryId) => {
      return state.subCategories.filter(
        (subCategory) => subCategory.categoryId === categoryId
      );
    },
  },
});
