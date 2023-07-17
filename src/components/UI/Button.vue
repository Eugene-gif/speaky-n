<script>
  export default {
    name: "Button",
    props: {
      label: "",
      color: "",
      textColor: "",
      width: "",
      height: "",
    },
  };
</script>

<template>
  <button
    class="btn"
    :style="`
      background-color: ${color};
      color: ${textColor};
      width: ${width};
      height: ${height};
  `"
  >
    {{ label || "Button" }}
  </button>
</template>

<style lang="scss" scoped>
  .btn {
    padding: 7px 10px;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    color: var(--default);
    background: linear-gradient(219.3deg, #caeea2 0%, #c1e921 100%);
    transition: all 0.1s;
    height: 55px;

    &:focus {
      outline: 2px solid lightskyblue;
    }

    &:active {
      box-shadow: 0 0 5px inset;
    }
  }
</style>
