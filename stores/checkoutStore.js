import { defineStore } from "pinia";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useCheckoutStore = defineStore("checkout", {
  state: () => ({
    deliveryDetails: {
      name: "",
      email: "",
      country: "",
      province: "",
      phoneNumber: "",
    },
    paymentDetails: {
      fullNameOnCard: "",
      cardNumber: "",
      cardExpiration: "",
      cvv: "",
    },
    totalCheckouts: 0,
  }),

  actions: {
    generateOrderId() {
      const timestamp = Date.now();
      const randomNum = Math.floor(Math.random() * 10000);
      return `ORDER-${timestamp}-${randomNum}`;
    },

    async saveCheckoutData() {
      try {
        const orderId = this.generateOrderId();
        const docRef = await addDoc(collection(db, "checkout"), {
          orderId: orderId,
          deliveryDetails: this.deliveryDetails,
          paymentDetails: this.paymentDetails,
        });
        // console.log("Order ID: ", orderId);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },

    async fetchTotalCheckouts() {
      try {
        const querySnapshot = await getDocs(collection(db, "checkout"));
        this.totalCheckouts = querySnapshot.size;
      } catch (e) {
        console.error("Error fetching total checkouts: ", e);
      }
    },
  },

  getters: {
    getDeliveryDetails(state) {
      return state.deliveryDetails;
    },

    getPaymentDetails(state) {
      return state.paymentDetails;
    },

    getTotalCheckouts(state) {
      return state.totalCheckouts;
    },
  },
});
