<template>
  <app-box class="box">
    <p slot="box-header">Surveys complete!</p>

    <div slot="box-body">
      <div class="checkbox">
        <font-awesome-icon icon="check" class="checkbox_check fa-4x" />
      </div>
      <div class="results">
        <div class="survey" v-for="survey of surveys" :key="survey">
          <div class="survey-result" v-for="(img, i) of survey.questions" :key="img">
            <img :src="img" :alt="img" />
            <p>{{survey.ratings[i]}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="return" @click="restart">
      <font-awesome-icon icon="angle-left" class="fa-2x" />
    </div>
  </app-box>
</template>

<script>
import AppBox from '@/components/UI/Box.vue'
export default {
  props: {
    surveys: {
      type: Array,
      required: true
    }
  },
  components: {
    AppBox
  },
  methods: {
    restart () {
      this.$router.go(this.$router.currentRoute)
    }
  }
}
</script>

<style lang="scss" scoped>
  .checkbox {
    border: 8px solid darkgreen;
    box-shadow: 0 0 15px lighten(darkgreen, 20%);
    border-radius: 10px;
    background: white;
    padding: 1rem;
    color: darkgreen;
  }

  .results {
      padding: 1rem;
    .survey {
      border-bottom: 2px dotted #333;
      padding: 1rem;

      .survey-result {
          display:flex;
          justify-content: center;
          align-items: center;
        img {
          width: 100px;
          height: 54px;
          margin-right: 20px;
          margin-bottom: 5px;
        }
        p {
          display: inline;
          font-size: 2rem;
        }
      }
    }
  }

  .return {
      position: absolute;
      bottom: 50%;
      left: -4rem;
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
        left: 50%;
      }
    }
</style>
