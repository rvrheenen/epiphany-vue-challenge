<template>
  <app-box>
    <p slot="box-header">{{title}}</p>

    <div slot="box-body">
      <div class="cards">
        <transition name="slide" mode="out-in">
          <div class="card" :key="currentQuestion" draggable="true" @dragstart="handleDragStart" @dragend.prevent="handleDragEnd">
            <img :src="questions[currentQuestion].img" />
          </div>
        </transition>
      </div>

      <SurveyBoxRating :scale="scale" :disabled="surveyDone" @rate="giveRating" />
    </div>

    <div class="continue" :class="{'disabled' : !surveyDone}" @click="submitSurvey">
      <font-awesome-icon icon="angle-right" class="fa-2x" />
    </div>
  </app-box>
</template>

<script>
import SurveyBoxRating from '@/components/survey/SurveyBoxRating.vue'
import AppBox from '@/components/UI/Box.vue'

export default {
  components: {
    SurveyBoxRating,
    AppBox
  },
  props: {
    questionImgs: { type: Array, required: true },
    scale: { type: String, required: true },
    title: String
  },
  data () {
    return {
      currentQuestion: 0,
      surveyDone: false,
      questions: this.questionImgs.map((img) => {
        return {
          img: img,
          rating: -1
        }
      })
    }
  },
  methods: {
    log (thing) {
      console.log(thing)
    },
    giveRating (rating) {
      this.questions[this.currentQuestion].rating = rating
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
      } else {
        this.surveyDone = true
      }
    },
    submitSurvey () {
      if (!this.surveyDone) return
      const answers = this.questions.map((q) => q.rating)
      this.$emit('submit', answers)
    },
    handleDragStart (e) {
      e.srcElement.style.opacity = '0.4'
    },
    handleDragEnd (e) {
      // console.log(e)
      // console.log(e.dataTransfer.getData('text'))
      e.srcElement.style.opacity = '1'
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    &-body {
      .cards {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100%;

        .card {
          flex: 0 0 100%;
          margin: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s;
          cursor: move;

          img {
            width: 500px;
            max-width: 100%;
            height: 270px;
            max-height: 44vw;
            object-fit: cover;
            border-radius: 8px;
          }
        }
      }
    }

    .continue {
      position: absolute;
      bottom: 50%;
      right: -4rem;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      -moz-box-shadow: 0 0 20px #555;
      -webkit-box-shadow: 0 0 20px #555;
      box-shadow: 0 0 20px #555;
      background: rgb(255, 157, 63);
      cursor: pointer;
      &.disabled {
        background: rgb(191, 191, 191);
        cursor: default;
      }

      @media only screen and (max-device-width: 768px) {
        bottom: -4rem;
        right: 50%;
      }
    }
  }

  .slide-enter-active {
    animation: slide-in 0.3s ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 0.3s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
</style>
