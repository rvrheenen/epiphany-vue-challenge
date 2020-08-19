<template>
  <div class="box">
    <div class="box-header">
      <slot name="box-header"></slot>
    </div>

    <div class="box-body">
      <slot name="box-body"></slot>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .box {
    position: relative;
    max-width: 600px;
    width: 90vw;
    &-header {
      padding: 0.6rem;
      border-radius: 6px 6px 0 0;
      border-bottom: solid 1px rgb(115, 205, 252);
      background: rgb(94, 180, 231);
      p {
        font-size: 1.2rem;
      }
    }

    &-body {
      background: rgb(59, 168, 225);
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 500px;
      overflow: hidden;
      @media only screen and (max-device-width: 480px) {
        padding: 1rem;
        min-height: 400px;
      }
      @media only screen and (max-width: 320px) {
        min-height: 300px;
      }
    }
  }
</style>
