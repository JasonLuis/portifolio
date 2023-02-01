<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-btn
      no-caps
      :label="label"
      @click="$emit('click')"
    />
</template>

<script setup lang="ts">
defineProps<{
  label: string
}
>()
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@500&display=swap');
 .q-btn {
  color: #fff;
  width: 218px;
  min-height: 47px;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  background-color: #FF6464;
  border-radius: 2px;
}
</style>
