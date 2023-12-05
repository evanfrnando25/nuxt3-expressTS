import { defineStore } from "pinia";

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    error: null,
    message: null,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      this.loading = true;
      const { data, error }: any = await useFetch("/api/user/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
      });

      if (data.value) {
        const token = useCookie("token");
        const tokenRefresh = useCookie("tokenRefresh");
        token.value = data?.value?.data?.token;
        tokenRefresh.value = data?.value?.data?.refreshToken;
        this.authenticated = true;
        this.loading = false;
      }

      if (error) {
        this.error = error?.value?.data?.message || null;
        this.loading = false;
        this.authenticated = false;
      }
    },
    logUserOut() {
      const token = useCookie("refreshToken"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});
