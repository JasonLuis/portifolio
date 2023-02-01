<template>
  <q-card class="row justify-center q-pt-md">
    <q-card-section>
      <q-card-section class="section-card q-pa-none">
        <div class="style-title">
          {{ props.title }}
        </div>
      </q-card-section>
      <q-card-section class="section-date q-pa-none q-mt-xs">
        <div
          class="style-date row justify-between"
          style="text-align: justify"
        >
          <div class="col-4">
            {{ props.date }}
          </div>
          <div class="col-1">
            |
          </div>
          <div class="col-7">
            {{ props.nameProject }}
          </div>
        </div>
      </q-card-section>
      <q-card-section class="section-info q-pa-none q-mt-sm">
        <div class="style-info">
          {{ props.info }}
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">

interface Props {
    title: string;
    date: string;
    nameProject: string;
    info: string;
}

const props = defineProps<Props>()

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap');

%text {
    font-family: 'Heebo';
    font-style: normal;
}
.q-card {
  width: 418px;
  height: 295px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
  border-radius: 4px;
  &:deep(.section-card) {
    width: 374px;
    height: 85px;
  }
  &:deep(.section-date) {
    width: 374px;
    height: 34px;
  }
  &:deep(.section-info) {
    width: 374px;
    height: 117px;
  }
}

.style-title {
    @extend %text;
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
    color: #21243D;
}

.style-date {
    @extend %text;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #21243D;
}

.style-info {
    @extend %text;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
</style>
