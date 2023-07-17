<script setup>
  import { ref } from "vue";
  import IconNeuron from "@/assets/icons/IconNeuron.vue";
</script>

<template>
  <div class="page main">
    <div class="main__list">
      <div class="main__card card level">
        <div class="level__circle">
          <div class="level__title">Словарный запас</div>
          <div class="level__score">3278</div>
        </div>
        <div class="level__title">Оранжевый пояс</div>
        <div class="level__belt">
          <div data-belt="70%"></div>
        </div>
        <div class="level__subtitle">7 уровень</div>
      </div>

      <div class="main__card card time">
        <div class="time__title">Текущий запас времени</div>
        <div class="time__box">
          <div class="time__block --bold">
            <div class="time__value">03</div>
            <div class="time__text">дней</div>
          </div>
          <div class="time__block">
            <div class="time__value">03</div>
            <div class="time__text">часов</div>
          </div>
          <div class="separator">:</div>
          <div class="time__block">
            <div class="time__value">32</div>
            <div class="time__text">минут</div>
          </div>
          <div class="separator">:</div>
          <div class="time__block">
            <div class="time__value">12</div>
            <div class="time__text">секунд</div>
          </div>
        </div>
      </div>

      <div class="main__card card influence">
        <div class="influence__title">Влияние</div>
        <div class="influence__box">
          <div class="influence__block">
            <div class="influence__value">23</div>
            <div class="influence__text">часов</div>
          </div>
          <div class="separator">:</div>
          <div class="influence__block">
            <div class="influence__value">30</div>
            <div class="influence__text">минут</div>
          </div>
        </div>
      </div>

      <div class="main__card card regular">
        <div class="card__title">Регулярность</div>
        <div class="card__score">25</div>
        <div class="card__subtitle">дней подряд</div>
      </div>

      <div class="main__card card intensive">
        <div class="card__title">Интенсивность</div>
        <div class="card__score">7</div>
        <div class="card__subtitle">тренировок в день</div>
      </div>

      <div class="main__card card neurons">
        <div class="neurons__title">Баланс нейронов</div>
        <IconNeuron class="neurons__icon" />
        <div class="neurons__score">25567</div>
        <Button
          class="neurons__btn"
          label="Пополнить"
          @click="$router.push('/shop')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/pages/Main/_Main.scss";
</style>
