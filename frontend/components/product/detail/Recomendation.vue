<template>
  <div class="recomendation" v-if="data">
    <div class="recomendation__title">
      <h3>REKOMENDASI UNTUK ANDA</h3>
    </div>
    <div class="recomendation__card">
      <q-card
        class="my-card"
        v-for="(items, index) in data"
        :key="items.id"
        @click="$emit('detailPage', items.id)"
      >
        <q-card-section>
          <div class="recomendation__card__container">
            <div class="recomendation__card__image">
              <img :src="items.image" />
            </div>
            <div class="recomendation__card__title">
              {{ items.title }}
            </div>
            <div class="recomendation__card__category">
              {{ items.category }}
            </div>
            <div class="recomendation__card__star">
              <Icon
                v-for="(index, items) in 4"
                name="material-symbols-light:star"
                :key="index"
              />
              ({{ items.star }})
            </div>
            <div class="recomendation__card__price">Rp.{{ items.price }}</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  setup() {
    const data = ref([
      {
        id: 1,
        image: "http://localhost:5000/uploads/image56.png",
        title: "asdasd",
        category: "maknaan",
        star: "7",
        price: 500.0,
      },
      {
        id: 2,
        image: "http://localhost:5000/uploads/image56.png",
        title: "asdasd",
        category: "maknaan",
        star: "7",
        price: 500.0,
      },
      {
        id: 3,
        image: "http://localhost:5000/uploads/image56.png",
        title: "asdasd",
        category: "maknaan",
        star: "7",
        price: 500.0,
      },
    ]);

    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
.recomendation {
  padding: 0% 2%;
  &__card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5%;
    text-align: center;

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

  &__title {
    text-align: center;

    h3 {
      font-size: 22px;
      color: #696969;
      letter-spacing: 2px;
    }
  }
}
</style>
