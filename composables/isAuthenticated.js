export const useIsAuthenticated = () => {
  const isAuthenticated = computed(() => {
    if (typeof sessionStorage !== "undefined") {
      return sessionStorage.getItem("isAuthenticated") === "true";
    } else {
      return false;
    }
  });

  return isAuthenticated;
};
