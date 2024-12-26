import { defineStore } from "pinia";
import { db } from "@/firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";

export const useUserStore = defineStore("users", {
  state: () => ({
    users: [],
    paginatedUsers: [],
    currentPage: 1,
    usersPerPage: 8,
  }),

  actions: {
    async fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        this.users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.updatePagination();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },

    updatePagination() {
      this.paginatedUsers = this.users.slice(
        (this.currentPage - 1) * this.usersPerPage,
        this.currentPage * this.usersPerPage
      );
    },

    async deleteUser(userId) {
      try {
        const userRef = doc(db, "users", userId);
        this.users = this.users.filter((user) => user.id === userId);
        this.updatePagination();
        await deleteDoc(userRef);
        console.log(
          `User with ID: ${userId} deleted successfully from Firestore.`
        );
      } catch (error) {
        console.error("Failed to delete user:", error);
        await this.fetchUsers();
      }
    },

    async blockUser(userId) {
      try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, { isBlocked: true });
        const user = this.users.find((user) => user.id === userId);
        if (user) user.isBlocked = true;
      } catch (error) {
        console.error("Failed to block user:", error);
      }
    },

    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
        this.updatePagination();
      }
    },
  },

  getters: {
    totalPages() {
      return Math.ceil(this.users.length / this.usersPerPage);
    },
  },
});
