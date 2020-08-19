<template>
  <div class="survey">
    <transition name="slide" mode="out-in">
    <SurveyBox
      v-if="!allSurveysDone"
      :questionImgs="activeSurvey.questions"
      :title="activeSurvey.title"
      :scale="activeSurvey.ratingScale"
      :key="currentSurveyIndex"
      @submit="finalizeSurvey"
    />
    <SurveyComplete v-else :surveys="surveys" />
    </transition>
  </div>
</template>

<script>
import SurveyBox from '@/components/survey/SurveyBox.vue'
import SurveyComplete from '@/components/survey/SurveyComplete.vue'

export default {
  name: 'Survey',
  components: {
    SurveyBox,
    SurveyComplete
  },
  data () {
    const questions = [
      require('@/assets/img/img_statement_1.png'),
      require('@/assets/img/img_statement_2.png'),
      require('@/assets/img/img_statement_3.png'),
      require('@/assets/img/img_statement_4.png'),
      require('@/assets/img/img_statement_5.png')
    ]

    return {
      currentSurveyIndex: 0,
      allSurveysDone: false,
      surveys: [
        {
          questions,
          title: 'How do you feel about these quotes?',
          ratingScale: 'cats',
          ratings: []
        },
        {
          questions,
          title: 'How would you rate these quotes?',
          ratingScale: 'stars',
          ratings: []
        }
      ]
    }
  },
  computed: {
    activeSurvey () {
      return this.surveys[this.currentSurveyIndex]
    }
  },
  methods: {
    finalizeSurvey (ratings) {
      this.$set(this.activeSurvey, 'ratings', ratings)
      this.nextSurvey()
    },
    nextSurvey () {
      if (this.currentSurveyIndex < this.surveys.length - 1) this.currentSurveyIndex++
      else this.allSurveysDone = true
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  .survey {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
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
