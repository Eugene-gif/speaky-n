<script setup>
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import IconExit from "@/assets/icons/IconExit.vue";
  import IconPerson from "@/assets/icons/IconPerson.vue";
  import IconNeuron from "@/assets/icons/IconNeuron.vue";
  import IconArrowLeft from "@/assets/icons/IconArrowLeft.vue";

  const route = useRoute();

  // Параметры для разрешений экранов
  const desktop = window.matchMedia("(min-width: 768px)");
  const mobile = window.matchMedia("(max-width: 768px)");
  // Почта
  const email = ref("test@gmail.com");
  // Счет в нейронах
  const score = ref(25567);
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <template v-if="route.path === '/shop'">
        <a
          class="header__back back --link"
          @click="$router.push('/')"
          @keyup.enter="$router.push('/')"
          @keyup.space="$router.push('/')"
          aria-label="back"
          href="#"
        >
          <IconArrowLeft class="back__icon" />
          <span> Назад в Статистику </span>
        </a>

        <div class="header__score score">
          {{ score }}
          <IconNeuron class="score__icon" />
        </div>
      </template>

      <div
        class="header__auth auth"
        :style="
          route.path === '/' && desktop.matches
            ? 'margin-left: auto;'
            : route.path === '/' && mobile.matches
            ? 'display: flex; width: 100%; justify-content: space-between;'
            : ''
        "
      >
        <a
          class="auth__email --link"
          aria-label="exit"
          href="#"
          :style="
            route.path === '/shop' && mobile.matches
              ? 'display: none'
              : ''
          "
        >
          <IconPerson />
          {{ email }}
        </a>

        <a
          class="auth__exit --link"
          aria-label="exit"
          href="#"
        >
          <IconExit />
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import "@/components/Header/_Header.scss";
</style>
