<script setup>
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import IconExit from "@/assets/icons/IconExit.vue";
  import IconPerson from "@/assets/icons/IconPerson.vue";
  import IconNeuron from "@/assets/icons/IconNeuron.vue";
  import IconArrowLeft from "@/assets/icons/IconArrowLeft.vue";

  const route = useRoute();

  const desktop = window.matchMedia("(min-width: 768px)");
  const mobile = window.matchMedia("(max-width: 768px)");
  const email = ref("olivertwist89@gmail.com");
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
  .header {
    position: fixed;
    width: 100%;
    height: var(--height-header);
    background-color: #fff;
    top: 0;
    left: 0;
    right: 0;

    &__container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 15px;
      height: 100%;
      width: 100%;
      justify-content: space-between;
    }

    .back {
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      user-select: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .score {
      font-size: 32px;
      font-weight: 400;
      line-height: 38px;
      color: var(--default);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .auth {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 30px;

      &__email {
        display: flex;
        gap: 6px;
        align-items: center;
        font-size: 16px;
        line-height: 18px;
        font-weight: 500;
      }

      &__exit {
        display: flex;
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }

    // _____ Media queries _____
    @media (max-width: 968px) {
      .back {
        padding: 5px 10px 5px 0;
        &__icon {
          height: 22px;
          width: 16px;
        }
        span {
          display: none;
        }
      }
    }

    @media (max-width: 768px) {
      height: var(--height-header-mobile);

      &__container {
        gap: 10px;
      }

      .score {
        gap: 5px;
        font-size: 20px;
        line-height: 24px;
        &__icon {
          width: auto;
          height: 30px;
        }
      }
    }

    @media (max-width: 968px) and (orientation: landscape) {
      height: var(--height-header-mobile-landscape);

      .score {
        gap: 5px;
        font-size: 20px;
        line-height: 24px;
        &__icon {
          width: auto;
          height: 30px;
        }
      }
    }
  }
</style>
