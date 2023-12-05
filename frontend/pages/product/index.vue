<template>
  <div>
    <CommonHeader />
    <ProductCatalog />
    <div class="display">
      <ProductBreadcrumb />
      <div class="display__wrapper">
        <div class="display__filter">
          <ProductExpansion />
        </div>
        <div class="display__product">
          <ProductDisplay @detailPage="detailPage" :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useProduct } from "~/composables/index";

export default defineNuxtComponent({
  setup() {
    const router = useRouter();
    const { data, loading, error, fetchData } = useProduct();

    const detailPage = (index: any) => {
      router.push(`/product/${index}`);
    };

    onMounted(() => {
      fetchData(), data, loading, error;
    });

    return {
      data,
      loading,
      error,
      detailPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.display {
  padding: 1% 5%;

  &__wrapper {
    margin-top: 3%;
    display: grid;
    grid-template-columns: 30% 65%;
    gap: 5%;
  }
}
</style>
