<script setup>
  import { ref } from "vue";
  import IconNeuron from "@/assets/icons/IconNeuron.vue";

  const props = defineProps({
    score: Number,
    bonus: Number,
    cost: Number,
    id: Number,
  });
</script>

<template>
  <div class="card">
    <div class="card__score">
      {{ score }}
      <IconNeuron />
    </div>
    <div v-if="bonus" class="card__bonus bonus">
      <span class="bonus__text">Бонус</span>
      <span class="bonus__count">+{{ bonus }}</span>
    </div>
    <Button
      :label="`${cost} ₽`"
      class="card__btn"
      width="100%"
      tabindex="2"
    />
  </div>
</template>

<style lang="scss" scoped>
  .card {
    background-color: #f2f8ff;
    padding: 60px 24px 24px 24px;
    width: 247px;
    height: 300px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;

    &__score {
      font-size: 40px;
      line-height: 46px;
      font-weight: 200;
      color: var(--default);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bonus {
      color: #fa877a;
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      &__count {
        font-size: 28px;
        line-height: 32px;
        font-weight: 400;
      }
    }

    &__btn {
      margin-top: auto;
    }
  }
</style>
