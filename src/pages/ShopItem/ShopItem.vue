<script setup>
  import Card from "@/components/Card/Card.vue";

  // Данные карточки из магазина
  const currentCard = history.state.card;
</script>

<template>
  <div class="page shop-item">
    <Card
      class="shop-item__card"
      :score="currentCard.score"
      :bonus="currentCard.bonus"
      :cost="currentCard.cost"
      :id="$route.params.id"
      btnBack
    />
  </div>
</template>

<style lang="scss" scoped>
  @import "@/pages/ShopItem/_ShopItem.scss";
</style>
