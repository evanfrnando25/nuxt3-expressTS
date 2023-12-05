const useProduct = () => {
  const axios = useNuxtApp().$axios,
    data = ref<null>(null),
    loading = ref(false),
    loadingExport = ref(false),
    error = ref(null);

  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await axios.get("/api/product");
      data.value = response.data;
    } catch (error: any) {
      console.log(error.response);
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    fetchData,
    loading,
    error,
  };
};

export default useProduct;
