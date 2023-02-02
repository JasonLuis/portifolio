<template>
  <q-list padding>
    <q-item-label
      header
    >
      <span>Featured works</span>
    </q-item-label>
    <q-item
      v-for="item in props.listItems"
      :key="item.description"
    >
      <UiWorkItem
        :img="item.img"
        :year="item.year"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
      />
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import UiWorkItem from '../WorkItem/WorkItem.vue'

interface WorkItem {
  img: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

interface Props {
  listItems: Array<WorkItem>;
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;700;900&display=swap");

.q-list {
  background-color: #fff;
  &:deep(.q-item__label) {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 60px;
    color: #21243d;
    padding-left: 35px;
  }

  .q-item {
    &:deep(.q-focus-helper) {
      visibility: hidden;
    }
    &:deep(.q-ripple) {
      display: none;
    }
  }
}
</style>
