const useDetailProduct = () => {
  const axios = useNuxtApp().$axios,
    data = ref<null>(null),
    loading = ref(false),
    error = ref(null);

  const fetchData = async (id: any) => {
    loading.value = true;
    try {
      const response = await axios.get(`/api/product/${id}`);
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

export default useDetailProduct;
