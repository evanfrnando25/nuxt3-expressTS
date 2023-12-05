<template>
  <div class="product">
    <div class="product__filter">
      <div class="product__filter__page">
        <span>Menampikan</span>
        <span>
          <q-btn-dropdown label="10">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>15</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>30</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown></span
        >
        <span> dari 132</span>
      </div>
      <div class="product__filter__sort">
        <span>urutkan</span>
        <span>
          <q-btn-dropdown label="Nama Produk">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>15</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>30</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </span>
      </div>
    </div>
    <div class="product__list">
      <div class="product__list__wrapper">
        <div class="product__list__card">
          <q-card
            v-if="data"
            class="my-card"
            v-for="(items, index) in data.data"
            :key="items.id"
            @click="$emit('detailPage', items.id)"
          >
            <q-card-section>
              <div class="product__list__card__container">
                <div class="product__list__card__image">
                  <img :src="items.image" />
                </div>
                <div class="product__list__card__title">
                  {{ items.title }}
                </div>
                <div class="product__list__card__category">
                  {{ items.category }}
                </div>
                <div class="product__list__card__star">
                  <Icon
                    v-for="(index, items) in 4"
                    name="material-symbols-light:star"
                    :key="index"
                  />
                  ({{ items.star }})
                </div>
                <div class="product__list__card__price">
                  Rp.{{ items.price }}
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="product__paginator">
      <q-pagination
        v-model="current"
        max="5"
        direction-links
        outline
        color="grey"
        active-design="unelevated"
        active-color="red"
        active-text-color="white"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  props: {
    data: {
      required: true,
      type: Object || Array || null,
    },
  },
  setup(props, { emit }) {
    const model = ref(null);

    const options = ref(["12", "30", "50", "60"]);

    const listProduct = ref([
      {
        id: 1,
        image:
          "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/28/41d73890-605c-417f-8b79-45cbf5e449d6.jpg",
        title: " ABID CLEVER DRIPPER 102",
        category: "UBRUKOPI",
        star: 7,
        price: 480.0,
      },
      {
        id: 2,
        image:
          "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/28/41d73890-605c-417f-8b79-45cbf5e449d6.jpg",
        title: " ABID CLEVER DRIPPER 102",
        category: "UBRUKOPI",
        star: 7,
        price: 480.0,
      },
      {
        id: 3,
        image:
          "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/28/41d73890-605c-417f-8b79-45cbf5e449d6.jpg",
        title: " ABID CLEVER DRIPPER 102",
        category: "UBRUKOPI",
        star: 7,
        price: 480.0,
      },
      {
        id: 4,
        image:
          "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/28/41d73890-605c-417f-8b79-45cbf5e449d6.jpg",
        title: " ABID CLEVER DRIPPER 102",
        category: "UBRUKOPI",
        star: 7,
        price: 480.0,
      },
      {
        id: 5,
        image:
          "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/28/41d73890-605c-417f-8b79-45cbf5e449d6.jpg",
        title: " ABID CLEVER DRIPPER 102",
        category: "UBRUKOPI",
        star: 7,
        price: 480.0,
      },
      {
        id: 6,
        image:
          "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/28/41d73890-605c-417f-8b79-45cbf5e449d6.jpg",
        title: " ABID CLEVER DRIPPER 102",
        category: "UBRUKOPI",
        star: 7,
        price: 480.0,
      },
      {
        id: 7,
        image:
          "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/28/41d73890-605c-417f-8b79-45cbf5e449d6.jpg",
        title: " ABID CLEVER DRIPPER 102",
        category: "UBRUKOPI",
        star: 7,
        price: 480.0,
      },
      {
        id: 8,
        image:
          "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/28/41d73890-605c-417f-8b79-45cbf5e449d6.jpg",
        title: " ABID CLEVER DRIPPER 102",
        category: "UBRUKOPI",
        star: 7,
        price: 480.0,
      },
    ]);

    return {
      listProduct,
      options,
      model,
    };
  },
});
</script>

<style lang="scss" scoped>
.product {
  padding: 10px;

  &__filter {
    display: flex;
    justify-content: space-between;

    &__page {
      display: flex;
      gap: 10px;
      align-self: center;
      align-content: center;
      align-items: center;

      span {
        letter-spacing: 2px;
      }
    }

    &__sort {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        letter-spacing: 2px;
      }
    }
  }

  &__list {
    padding: 30px 0px 0px 0px;
    tex-align: center;

    &__card {
      tex-align: center;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3%;

      &__container {
        width: 100%;
        padding: 15px;
        text-align: center;
        cursor: pointer;
      }

      svg {
        color: #ffc107;
      }

      &__title {
        font-weight: 700;
        color: #696969;
        font-size: 20px;
      }

      &__star {
        font-size: 12px;
      }

      &__price {
        color: #eb3f36;
        font-weight: bold;
        font-size: 18px;
        margin-top: 10px;
      }

      &__category {
        font-size: 13px;
        font-weight: 500;
        color: #696969;
      }

      &__image {
        padding: 10%;
        img {
          width: 100%;
          height: 50%;
        }
      }
    }
  }

  &__paginator {
    padding: 50px;
  }
}

:deep(.q-card) {
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.13);
}

:deep(.q-card):hover {
  border: 2px solid #eb3f36;
  transform: 0.3px;
}

:deep(.q-pagination) {
  justify-content: center;
}
</style>
