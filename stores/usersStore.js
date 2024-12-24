import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
    currentPage: 1,
    usersPerPage: 6,
  }),

  actions: {
    async fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        this.users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },

    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },

  getters: {
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },

    totalUsers: (state) => {
      return state.users.length;
    },

    totalPages: (state) => Math.ceil(state.users.length / state.usersPerPage),

    paginatedUsers: (state) => {
      const start = (state.currentPage - 1) * state.usersPerPage;
      const end = start + state.usersPerPage;
      return state.users.slice(start, end);
    },
  },
});
