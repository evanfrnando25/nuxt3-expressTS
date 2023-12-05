<template>
  <div class="breadcrumbs">
    <q-breadcrumbs
      separator=">>"
      separator-color="black"
      active-color="black"
      class="text-deep-orange"
    >
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Produk" />
      <q-breadcrumbs-el label="Roasted Bean" />
    </q-breadcrumbs>
  </div>
</template>

<style lang="scss" scoped>
:deep(.flex) {
  gap: 5px !important;
}
</style>
