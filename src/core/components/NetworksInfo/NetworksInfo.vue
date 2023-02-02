<template>
  <div class="q-pa-none  text-center full-width">
    <div>
      <template
        v-for="(item, index) in icons"
        :key="index"
      >
        <template v-if="index === 0">
          <q-icon
            :name="`img: ${item.src}`"
            size="30px"
          />
        </template>
        <template v-else>
          <q-icon
            class="q-ml-lg"
            :name="`img: ${item.src}`"
            size="30px"
          />
        </template>
      </template>
    </div>
    <div class="row justify-center q-mt-lg">
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icons: Array<{
    src: string
  }>;
  text: string;
}

defineProps<Props>()
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400&display=swap');

.q-ml-lg {
  margin-left: 35px;
}

p {
  width: 222px;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #21243D;
}
</style>
