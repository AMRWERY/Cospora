export const useAuthPage = () => {
  const route = useRoute();

  const isAuthPage = computed(() =>
    ["/register", "/forget-password"].includes(route.path)
  );

  return { isAuthPage };
};
