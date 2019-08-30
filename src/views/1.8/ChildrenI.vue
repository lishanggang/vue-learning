<template functional>
  <div class="border2">
    <h3 :style="{ color: injections.theme.color }">I 结点</h3>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      default: () => ({})
    }
  },
  mounted () {
    console.log(this.theme)
    console.log(this.injections)
  }
};
</script>
