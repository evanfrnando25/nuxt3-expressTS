import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie("token");

  if (token.value) {
    authenticated.value = true;
  }

  if (token.value && (to.path === "/login" || to.path === "/register")) {
    return navigateTo("/product");
  }

  if (!token) {
    return navigateTo("/login");
  }
});
