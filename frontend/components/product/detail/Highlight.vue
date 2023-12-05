<template>
  <div class="highlight" v-if="data">
    <div class="highlight__title">{{ data.title }}</div>
    <div class="highlight__category">{{ data.category }}</div>
    <div class="highlight__rating">
      <Icon
        v-for="(index, items) in 4"
        name="material-symbols-light:star"
        :key="index"
      />
      ({{ data.star }})
    </div>
    <div class="highlight__price">
      <div class="highlight__price__total">Rp. {{ data.price }}</div>
      <div class="highlight__price__stock">
        <Icon name="tabler:checkbox" />
        tersedia
      </div>
    </div>
    <div class="highlight__action">
      <div class="highlight__action__count">
        <span>-</span>
        <span>1</span>
        <span>-</span>
      </div>
      <div class="highlight__action__addcart">
        <span>Tambah ke keranjang</span>
      </div>
      <div class="highlight__action__favorite">
        <span><Icon name="mdi:heart-outline" /></span>
      </div>
    </div>
    <div class="highlight__description">
      {{ data.description }}
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  props: {
    data: {
      type: Object || null,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.highlight {
  display: flex;
  flex-direction: column;
  gap: 0px;

  &__title {
    font-size: 30px;
    letter-spacing: 3px;
    color: #696969;
  }

  &__category {
    margin-top: 10px;
    font-size: 22px;
    color: #696969;
    letter-spacing: 3px;
    font-weight: 500;
  }

  &__rating {
    margin-top: 10px;
    font-size: 14px;
    color: #868686;

    svg {
      color: #ffc107;
    }
  }

  &__price {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    &__total {
      color: #eb3f36;
      font-size: 22px;
      font-weight: 600;
    }

    &__stock {
      color: #6f8eff;
      font-size: 12px;
      letter-spacing: 3px;
    }

    &__favorite {
      span {
        color: #eb3f36;
        border: 1px solid #868686;
      }
    }
  }

  &__action {
    margin-top: 20px;
    display: flex;
    gap: 20px;

    &__count {
      display: flex;
      gap: 5px;

      span {
        border: 1px solid #f1f1f1;
        width: 40px;
        text-align: center;
        padding: 3%;
        align-self: center;
        align-items: center;
        align-content: center;
        font-size: 20px;
        color: #979797;
      }
    }

    &__addcart {
      span {
        border: 1px solid red;
        background: #eb3f36;
        color: #ffffff;
        width: 100%;
        font-size: 18px;
        height: 100%;
        padding: 10px;
        letter-spacing: 3px;
      }
    }
  }

  &__description {
    margin-top: 25px;
    color: #696969;
    height: 53px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
