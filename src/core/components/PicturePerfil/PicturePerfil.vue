<template>
  <q-img
    :src="img"
  />
</template>

<script setup lang="ts">

defineProps<{
  img: string;
}>()

</script>

<style scoped lang="scss">
.q-img {
    width: 243px;
    height: 243px;
    border-radius: 50%;

    &:deep(.q-img__image) {

    }
}

</style>
