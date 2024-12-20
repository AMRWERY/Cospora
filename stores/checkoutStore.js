import { defineStore } from "pinia";
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useCheckoutStore = defineStore("checkout", () => {
  const deliveryDetails = ref({
    name: "",
    email: "",
    country: "",
    province: "",
    phoneNumber: "",
  });

  const paymentDetails = ref({
    fullNameOnCard: "",
    cardNumber: "",
    cardExpiration: "",
    cvv: "",
  });

  const saveCheckoutData = async () => {
    try {
      const docRef = await addDoc(collection(db, "checkout"), {
        deliveryDetails: deliveryDetails.value,
        paymentDetails: paymentDetails.value,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return {
    deliveryDetails,
    paymentDetails,
    saveCheckoutData,
  };
});
