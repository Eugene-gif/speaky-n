<script setup>
  import { ref } from "vue";
  import Card from "@/components/Card/Card.vue";

  // Фэйковые данные карточек
  const cards = [
    { id: 1, score: 10000, bonus: 0, cost: 100 },
    { id: 2, score: 15000, bonus: 200, cost: 150 },
    { id: 3, score: 20000, bonus: 300, cost: 200 },
    { id: 4, score: 30000, bonus: 500, cost: 300 },
    { id: 5, score: 40000, bonus: 600, cost: 400 },
    { id: 6, score: 50000, bonus: 1000, cost: 500 },
    { id: 7, score: 55000, bonus: 1200, cost: 555 },
    { id: 8, score: 60000, bonus: 1500, cost: 600 },
    { id: 9, score: 65000, bonus: 1600, cost: 650 },
    { id: 10, score: 75000, bonus: 3000, cost: 700 },
    { id: 11, score: 90000, bonus: 5000, cost: 888 },
    { id: 12, score: 100000, bonus: 10000, cost: 999 },
  ];
</script>

<template>
  <div class="page shop">
    <div class="shop__list">
      <template
        v-for="(card, index) in cards"
        :key="index"
      >
        <Card
          class="shop__item"
          :score="card.score"
          :bonus="card.bonus"
          :cost="card.cost"
          :id="card.id"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/pages/Shop/_Shop.scss";
</style>
