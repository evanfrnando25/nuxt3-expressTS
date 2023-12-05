import type { AxiosRequestConfig } from "axios";

const useRegister = () => {
  const axios = useNuxtApp().$axios,
    data = ref(null),
    loading = ref(false),
    error = ref(null);

  const postData = async (payload: any) => {
    loading.value = true;
    try {
      const config: AxiosRequestConfig = {
        method: "post",
        url: "/api/user/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      };
      loading.value = false;
      await axios(config);
    } catch (errors: any) {
      errors.response.data.errors = error;
      loading.value = false;
    }
  };

  return {
    data,
    postData,
    error,
    loading,
  };
};

export default useRegister;
