import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie("token");

  // if (token.value) {
  //   authenticated.value = true;
  // }

  // if (token && token.value && to.path !== "/product") {
  //   return navigateTo("/product");
  // }

  // // if token doesn't exist redirect to log in
  // if (!token.value && to.path === "/product") {
  //   return navigateTo("/login");
  // }
});
