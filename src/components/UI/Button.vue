<script>
  export default {
    name: "Button",
    props: {
      label: "",
      color: "",
      textColor: "",
      width: "",
      height: "",
      fontSize: "",
      outline: true,
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
      font-size: ${fontSize};
  `"
  >
    {{ label || "Button" }}
  </button>
</template>

<style lang="scss" scoped>
  @import "@/components/UI/styles/_Button.scss";
</style>
