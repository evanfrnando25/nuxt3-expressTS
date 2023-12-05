<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__search">
        <input type="text" placeholder="Cari Produk" />
        <span><Icon name="circum:search" /></span>
      </div>
      <div class="header__favorite">
        <Icon name="material-symbols:favorite-outline" />
      </div>
      <div class="header__cart">
        <Icon name="lucide:shopping-bag" />
      </div>
      <div class="profile">
        <Icon name="bx:user" />
        <Icon name="icon-park-solid:down-one" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 30px 20px;
  text-align: center;

  &__wrapper {
    display: flex;
    gap: 12px;
    font-size: 14px;
    align-items: center;
  }

  &__favorite {
    cursor: pointer;
  }

  &__cart {
    cursor: pointer;
  }

  &__profile {
    cursor: pointer;
  }

  &__search {
    position: relative;
    border-radius: 9px;

    input {
      border: none;
      border-radius: 20px 0px 0px 20px;
      outline: none;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
      padding: 8px 8px;
      font-size: 10px;
      color: #b0b0b0;
      letter-spacing: 2px;
      width: 30%;
    }

    span {
      background: #eb3f36;
      padding: 12px 30px;
      font-size: 13px;
      color: #ffffff;
      font-weight: bold;
      border-radius: 0px 5px 5px 0px;
      cursor-pointer: pointer;
    }
  }
}

@media (min-width: 700px) {
  .header {
    padding: 26px 46px;
    text-align: end;

    &__wrapper {
      gap: 25px;
      justify-content: end;
      font-size: 26px;
      align-items: center;
    }

    &__search {
      input {
        padding: 21px 20px;
        font-size: 16px;
        color: #b0b0b0;
        letter-spacing: 2px;
        width: 300px;
        height: 57px;
      }

      span {
        padding: 20px 30px;
        border-radius: 0px 15px 15px 0px;
        font-size: 24px;
        color: #ffffff;
      }
    }
  }
}
</style>
