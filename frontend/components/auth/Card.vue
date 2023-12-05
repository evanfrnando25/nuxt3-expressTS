<template>
  <div class="card">
    <q-card class="my-card">
      <q-card-section>
        <div class="container">
          <div class="header">
            <slot name="header" />
          </div>
          <div class="content">
            <slot name="content" />
          </div>
          <div class="footer">
            <slot name="footer" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.container {
  padding: 42px 32px;
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .footer {
    text-align: center;
  }
}

:deep(.q-card) {
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

:deep(.q-field__inner) {
  background: #ffffff;
}
</style>
