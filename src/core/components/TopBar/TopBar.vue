<template>
  <div class="q-pr-xl">
    <q-toolbar class="bg-white text-black no-shadow">
      <q-space />

      <q-btn-toggle
        :model-value="props.modelValue"
        toggle-color="light"
        flat
        no-caps
        :options="props.options"
        @update:model-value="$emit('update:model-value', $event)"
      />
    </q-toolbar>
  </div>
</template>

<script setup lang="ts">
interface Props {
    modelValue?: string;
    options: Array<{
        label: string;
        value: string;
    }>
}

defineEmits(['update:model-value'])
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@500&display=swap");
.q-toolbar {

.q-btn-group {

    &:deep(.q-btn__content) {
        font-family: 'Heebo';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 29px;

    }
    &:deep(.q-btn) {
        margin-left: 33px;
        &:hover {
            background: white;
            background-color: white;
        }
    }
}
}
</style>
