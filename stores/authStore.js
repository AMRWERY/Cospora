import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  getAuth,
  // updatePassword,
  getIdToken,
  // onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "@/firebase/config";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      isAuthenticated: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userToken: null,
      isUserLoggedIn: false,
      suggestions: [],
      showWelcomeMessage: false,
    };
  },

  actions: {
    userSignUp(payload) {
      return new Promise((resolve, reject) => {
        const { email, password, firstName, lastName } = payload;
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            if (user) {
              this.isAuthenticated = true;
              sessionStorage.setItem("isAuthenticated", true);
              sessionStorage.setItem("firstName", firstName);
              sessionStorage.setItem("lastName", lastName);
              sessionStorage.setItem("email", email);
              try {
                await updateProfile(user, { displayName: firstName });
                const token = await getIdToken(user);
                sessionStorage.setItem("userToken", token);
                sessionStorage.setItem("userId", user.uid);
                await addDoc(collection(db, "users"), {
                  firstName,
                  lastName,
                  email,
                  id: user.uid,
                });
                resolve();
              } catch (error) {
                reject(error);
              }
            } else {
              reject("User not authenticated");
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    userSignIn(payload) {
      return new Promise(async (resolve, reject) => {
        const { email, password } = payload;
        try {
          const usersCollection = collection(db, "users");
          const q = query(usersCollection, where("email", "==", email));
          const querySnapshot = await getDocs(q);
          if (querySnapshot.empty) {
            throw new Error("User not found in Firestore.");
          }
          const userData = querySnapshot.docs[0].data();
          if (userData.isBlocked) {
            // console.log(userData, "user blocked");
            throw new Error("Your account has been blocked.");
          }
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;
          if (user) {
            this.isAuthenticated = true;
            sessionStorage.setItem("isAuthenticated", true);
            sessionStorage.setItem("email", email);
            this.firstName = userData.firstName;
            this.lastName = userData.lastName;
            sessionStorage.setItem("firstName", userData.firstName);
            sessionStorage.setItem("lastName", userData.lastName);
            sessionStorage.setItem("username", userData.username);
            sessionStorage.setItem("userId", user.uid);
            resolve();
          } else {
            reject("User not authenticated.");
          }
        } catch (error) {
          reject(error.message || "An error occurred during login.");
        }
      });
    },
    // userSignIn(payload) {
    //   return new Promise((resolve, reject) => {
    //     const { email, password } = payload;
    //     signInWithEmailAndPassword(auth, email, password)
    //       .then(async (userCredential) => {
    //         const user = userCredential.user;
    //         if (user) {
    //           this.isAuthenticated = true;
    //           sessionStorage.setItem("isAuthenticated", true);
    //           sessionStorage.setItem("email", email);
    //           try {
    //             const usersCollection = collection(db, "users");
    //             const q = query(
    //               usersCollection,
    //               where("email", "==", user.email)
    //             );
    //             const querySnapshot = await getDocs(q);
    //             if (!querySnapshot.empty) {
    //               const userData = querySnapshot.docs[0].data();
    //               this.firstName = userData.firstName;
    //               this.lastName = userData.lastName
    //               sessionStorage.setItem("firstName", userData.firstName);
    //               sessionStorage.setItem("lastName", userData.lastName);
    //               sessionStorage.setItem("username", userData.username);
    //               sessionStorage.setItem("userId", user.uid);
    //             } else {
    //               console.log("User data not found in Firestore");
    //             }
    //             resolve();
    //           } catch (error) {
    //             reject(error);
    //           }
    //         } else {
    //           reject("User not authenticated");
    //         }
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   });
    // },

    logout() {
      return new Promise((resolve, reject) => {
        signOut(auth)
          .then(() => {
            sessionStorage.clear();
            this.isAuthenticated = false;
            resolve();
          })
          .catch((error) => {
            console.error("Logout error:", error);
            reject(error);
          });
      });
    },

    resetUserPassword(payload) {
      return new Promise(async (resolve, reject) => {
        const { email } = payload;
        try {
          await sendPasswordResetEmail(auth, email);
          // console.log("Password reset email sent successfully.");
          resolve("Success");
        } catch (error) {
          console.error("Failed to send password reset email:", error);
          reject(error);
        }
      });
    },

    //sign up & sign in with google
    signUpWithGoogle() {
      const router = useRouter();
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider).then((result) => {
        const user = result.user;
        const userData = {
          username: user.displayName,
          email: user.email,
          userId: user.uid,
        };
        Object.entries(userData).forEach(([key, value]) => {
          sessionStorage.setItem(`${key}`, value);
        });
        addDoc(collection(db, "users"), userData);
        // console.log(user);
        if (user) {
          this.isAuthenticated = true;
          sessionStorage.setItem("isAuthenticated", true);
        }
        setTimeout(() => {
          location.reload();
        }, 500);
        router.replace("/");
      });
    },

    signInWithGoogle() {
      const router = useRouter();
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider).then((result) => {
        const user = result.user;
        if (user) {
          this.isAuthenticated = true;
          sessionStorage.setItem("isAuthenticated", true);
        }
        const userData = {
          username: user.displayName,
          email: user.email,
          userId: user.uid,
        };
        Object.entries(userData).forEach(([key, value]) => {
          sessionStorage.setItem(`${key}`, value);
        });
        getDocs(collection(db, "users"), userData);
        setTimeout(() => {
          location.reload();
        }, 500);
        console.log(user);
        router.replace("/");
      });
    },

    async checkNameAvailability(name) {
      if (!name.trim()) {
        this.suggestions = [];
        return;
      }
      try {
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("firstName", "==", name));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const recommendedSuffixes = [
            "123",
            "_Pro",
            "_2024",
            "TheReal",
            "_Super",
          ];
          this.suggestions = recommendedSuffixes.map(
            (suffix) => `${name}${suffix}`
          );
        } else {
          this.suggestions = [];
        }
      } catch (error) {
        console.error("Error checking name availability:", error);
        this.suggestions = [];
      }
    },

    setWelcomeMessageVisibility(visible) {
      this.showWelcomeMessage = visible;
    },

    setUserDetails({ firstName, lastName }) {
      this.firstName = firstName;
      this.lastName = lastName;
    },
  },

  getters: {
    getUsername: (state) => state.firstName,
    getGoogleUsername: (state) => state.username,
    getUserEmail: (state) => state.email,
    getSuggestions: (state) => state.suggestions,
    isUserAuthenticated(state) {
      return (
        state.isAuthenticated ||
        (typeof sessionStorage !== "undefined" &&
          sessionStorage.getItem("isAuthenticated") === "true")
      );
    },
  },
});
