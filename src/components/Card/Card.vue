<script setup>
  import IconNeuron from "@/assets/icons/IconNeuron.vue";

  const props = defineProps({
    score: Number,
    bonus: Number,
    cost: Number,
    id: String,
    btnBack: Boolean,
  });
</script>

<template>
  <div class="card">
    <div class="card__score">
      {{ score }}
      <IconNeuron />
    </div>
    <div
      v-if="bonus"
      class="card__bonus bonus"
    >
      <span class="bonus__text">Бонус</span>
      <span class="bonus__count">+{{ bonus }}</span>
    </div>
    <Button
      :label="`${cost} ₽`"
      class="card__btn"
      width="100%"
      tabindex="2"
    />
    <Button
      v-if="btnBack"
      @click="$router.back"
      class="outline card__btn-back"
      label="Вернуться в магазин"
      width="100%"
      fontSize="18px"
    />
  </div>
</template>

<style lang="scss" scoped>
  @import "@/components/Card/_Card.scss";
</style>
