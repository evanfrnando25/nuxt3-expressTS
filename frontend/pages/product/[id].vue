<template>
  <div class="product-detail">
    <CommonHeader />
    <ProductCatalog />
    <div v-if="loading">
      <q-spinner-comment color="deep-purple" />
    </div>
    <div class="product-detail__display" v-if="data">
      <ProductBreadcrumb />
      <div class="product-detail__wrapper">
        <div class="product-detail__image">
          <ProductDetailImage :data="data.data" />
        </div>
        <div class="product-detail__highlight">
          <ProductDetailHighlight :data="data.data" />
        </div>
      </div>
      <div class="product-detail__description">
        <div class="product-detail__description__header__wrapper">
          <div
            class="product-detail__description__header__title"
            @click="changeTab('description')"
            :class="{ 'active-tab': activeTab === 'description' }"
          >
            DESKRIPSI
          </div>
          <div
            class="product-detail__description__header__title"
            @click="changeTab('information')"
            :class="{ 'active-tab': activeTab === 'information' }"
          >
            INFORMASI
          </div>
        </div>
        <div class="product-detail__description__content__wrapper">
          <span v-if="activeTab === 'description'">
            {{ data?.data?.description }}
          </span>
          <span v-else>
            {{ data?.data?.information }}
          </span>
        </div>
      </div>
      <div class="product-detail__recomendation">
        <ProductDetailRecomendation />
      </div>
    </div>
    <div v-if="error">
      <h5 style="text-align: center; margin-top: 5%">Data tidak ditemukan</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { useDetailProduct } from "~/composables/index";
export default defineNuxtComponent({
  setup() {
    const { data, loading, error, fetchData } = useDetailProduct();
    const route = useRoute();

    const activeTab = ref("description");

    const changeTab = (tab: string) => {
      activeTab.value = tab;
    };

    onMounted(() => {
      fetchData(route.params.id);
    });

    return {
      activeTab,
      data,
      loading,
      error,
      changeTab,
    };
  },
});
</script>

<style lang="scss" scoped>
.product-detail {
  &__display {
    padding: 1% 5%;
  }

  &__wrapper {
    margin-top: 3%;
    display: grid;
    grid-template-columns: 45% 50%;
    gap: 5%;
  }

  &__description {
    grid-row: 3;

    &__header {
      &__wrapper {
        display: flex;
        gap: 10px;
        justify-content: center;
      }

      &__title {
        font-size: 22px;
        padding: 1% 5%;
        color: #bebebe;

        cursor: pointer;
      }
    }

    &__content {
      &__wrapper {
        padding: 3% 8%;
        color: #696969;
        font-size: 18px;
        font-weight: 400;
        line-height: normal;
      }
    }
  }

  &__recomendation {
    grid-row: 4;
  }

  .active-tab {
    border-bottom: 2px solid red;
    color: red; /* You can customize the active tab style */
  }
}
</style>
