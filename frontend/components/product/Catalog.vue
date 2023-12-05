<template>
  <div class="catalog">
    <q-btn-dropdown :label="catalog">
      <q-list>
        <q-item
          v-for="(items, index) in catalogList"
          :key="items.id"
          clickable
          v-close-popup
          @click="valueCatalog(items.value)"
        >
          <q-item-section>
            <q-item-label>{{ items.value }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  setup() {
    const catalog = ref("Belanja");

    const valueCatalog = (index: string) => {
      catalog.value = index;
    };

    const catalogList = ref([
      {
        id: 1,
        value: "Belanja",
      },
      {
        id: 2,
        value: "Elektronik",
      },
      {
        id: 3,
        value: "Otomotif",
      },
    ]);

    return {
      catalog,
      catalogList,
      valueCatalog,
    };
  },
});
</script>

<style lang="scss" scoped>
.catalog {
  background: #f5f5f5;
  padding: 0% 5%;
}

:deep(.q-btn) {
  background: #eb3f36;
  color: #ffffff;
  width: 212px;
  height: 64px;
  font-size: 20px;
}
</style>
