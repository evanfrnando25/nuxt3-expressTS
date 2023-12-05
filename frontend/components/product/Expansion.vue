<template>
  <div class="expansion">
    <q-expansion-item expand-separator label="Urutkan Berdasarkan Harga">
      <q-card>
        <q-card-section>
          <div class="expansion__slider">
            <q-range v-model="modelPrice" :min="1" :max="200" />
          </div>
          <div class="expansion__range">
            <span>Rp.50.000 </span>
            <span>Rp. 2.250.000</span>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      v-for="(items, index) in listExpansionCheckbox"
      :key="items.id"
      expand-separator
      :label="items.name"
      style="background: rgba(245, 245, 245, 0.75); margin-top: 10px"
    >
      <q-card>
        <q-card-section>
          <div
            class="expansion__checkbox__wrapper"
            v-for="(items, index) in items.list"
            :key="items.id"
          >
            <div class="expansion__checkbox__label">
              <input type="checkbox" />
              <span> {{ items.name }}</span>
            </div>
            <div class="expansion__checkbox__stock">( {{ items.stock }} )</div>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script lang="ts" scoped>
export default defineNuxtComponent({
  setup() {
    const modelPrice = ref();
    const right = ref(true);
    const listExpansionCheckbox = ref([
      {
        id: 1,
        name: "Origin",
        list: [
          {
            id: 1,
            name: "Aceh",
            stock: 8,
          },
          {
            id: 2,
            name: "Semarang",
            stock: 2,
          },
          {
            id: 3,
            name: "Bandung",
            stock: 7,
          },
          {
            id: 4,
            name: "Jawa",
            stock: 5,
          },
          {
            id: 5,
            name: "Amerika Selatah",
            stock: 6,
          },
          {
            id: 6,
            name: "Lain - Lain",
            stock: 8,
          },
        ],
      },
      {
        id: 2,
        name: "Species",
        list: [
          {
            id: 1,
            name: "Arabika",
            stock: 128,
          },
          {
            id: 2,
            name: "Robusta",
            stock: 23,
          },
          {
            id: 3,
            name: "Blend",
            stock: 9,
          },
        ],
      },
      {
        id: 3,
        name: "Roast Level",
        list: [
          {
            id: 1,
            name: "Light Roast",
            stock: 8,
          },
          {
            id: 2,
            name: "Medium Roast",
            stock: 2,
          },
          {
            id: 3,
            name: "Dark Roast",
            stock: 7,
          },
          {
            id: 4,
            name: "Light to Medium Roast",
            stock: 5,
          },
        ],
      },
      {
        id: 4,
        name: "Tasted",
        list: [
          {
            id: 1,
            name: "Sweet",
            stock: 18,
          },
          {
            id: 2,
            name: "Floral",
            stock: 21,
          },
          {
            id: 3,
            name: "Fruity",
            stock: 7,
          },
          {
            id: 4,
            name: "Nutty",
            stock: 5,
          },
          {
            id: 5,
            name: "Cocoa",
            stock: 21,
          },
          {
            id: 6,
            name: "Spices",
            stock: 18,
          },
        ],
      },
      {
        id: 5,
        name: "Processing",
        list: [
          {
            id: 1,
            name: "Honey White",
            stock: 8,
          },
          {
            id: 2,
            name: "Natural",
            stock: 2,
          },
          {
            id: 3,
            name: "Honey Gold",
            stock: 7,
          },
          {
            id: 4,
            name: "Honey Yellow",
            stock: 5,
          },
        ],
      },
    ]);

    return {
      modelPrice,
      right,
      listExpansionCheckbox,
    };
  },
});
</script>

<style lang="scss" scoped>
.expansion {
  &__range {
    display: flex;
    justify-content: space-between;
  }

  &__checkbox {
    &__wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__label {
      align-content: center;
      align-items: center;
      align-self: center;

      span {
        color: #868686;
        padding-left: 5px;
        font-size: 16px;
      }
    }

    &__stock {
      color: #868686;
      font-size: 16px;
    }
  }
}

:deep(.q-item) {
  color: #696969;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
}
</style>
