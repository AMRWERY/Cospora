export const useAuthPage = () => {
  const route = useRoute();

  const isAuthPage = computed(() =>
    ["/auth/login", "/auth/sign-up", "/auth/reset-password"].includes(
      route.path
    )
  );

  return { isAuthPage };
};
