<template>
  <div v-if="scale=='cats'" class="answers answers-cats" :class="{'disabled' : disabled}">
    <div class="answer answer-cat" @click="submitRating(0)" @drop.prevent="submitRating(0)" @dragover.prevent>
      <img src="~@/assets/img/img_cat_supersad.png" alt />
    </div>
    <div class="answer answer-cat" @click="submitRating(1)" @drop.prevent="submitRating(1)" @dragover.prevent>
      <img src="~@/assets/img/img_cat_neutral.png" alt />
    </div>
    <div class="answer answer-cat" @click="submitRating(2)" @drop.prevent="submitRating(2)" @dragover.prevent>
      <img src="~@/assets/img/img_cat_happy.png" alt />
    </div>
  </div>
  <div v-else class="answers answers-stars" :class="{'disabled' : disabled}">
    <div
      v-for="i in 5"
      :key="i"
      class="answer answer-star"
      @click="submitRating(i)"
      @mouseenter="starHoverRating=i"
      @drop.prevent="submitRating(i)"
      @dragover.prevent
    >
      <font-awesome-icon
        :icon="['fas', 'star']"
        class="rating-star fa-3x"
        :class="{'active' : i <= starHoverRating}"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: true
    },
    scale: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      starHoverRating: -1
    }
  },
  methods: {
    log (thing) {
      console.log(thing)
    },
    submitRating (rating) {
      this.$emit('rate', rating)
    },
    handleDrop (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .answers {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .answer {
      cursor: pointer;
      margin: 0 0.5rem;
      border-radius: 8px;
      max-width: 120px;
      &-cat {
        background: white;
        img {
          height: 100%;
          width: 100%;
        }
      }

      &-star {
        .rating-star.active {
          color: orange;
        }
      }
    }
    &.disabled .answer {
      cursor: default;
      opacity: 0.6;
    }
    &:not(.disabled) .answer:active {
      box-shadow: 0px 0px 15px #444;
      transform: translateY(4px);
    }
  }
</style>
