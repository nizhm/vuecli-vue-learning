<template>
  <div class="v-model-usage">
    <section class="section title-section">
      <p class="page-title">Usages about v-model directive</p>
    </section>
    <section class="section summary-section">
      <p>Limit to</p>
      <p>Modifiers</p>
    </section>
    <section class="section demo-section">
      <div class="demo-box">
        <p>lazy modifier</p>
        <label for="lazy">lazyInput:</label>
        <input
          type="text"
          name="lazy"
          id="lazy"
          v-model.lazy="lazyInput"
          @input="inputHandler"
          @change="curEvent = 'change'"
        >
        <p>lazyInput: {{ lazyInput }}</p>
        <p>curEvent: {{ curEvent }}</p>
      </div>
      <div class="demo-box">
        <p>number modifier</p>
        <label for="number">numInput:</label>
        <input type="text" name="number" id="number" v-model.number="numInput">
        <p>numInput: {{ numInput }}</p>
        <p>typeof: {{ typeof numInput}}</p>
      </div>
      <div class="demo-box">
        <p>trim modifier</p>
        <label for="trim">trimInput:</label>
        <input type="text" name="trim" id="trim" v-model.trim="trimInput">
        <p>trimInput: {{ trimInput }}</p>
        <p>length: {{ trimInput.length }}</p>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'VModelUsage',
    components: {},
    data() {
      return {
        message: '',
        multiMsg: '',
        days: [],
        months: [],
        season: '',
        lazyInput: '',
        curEvent: '',
        numInput: '',
        trimInput: ''
      }
    },
    methods: {
      /**
       * @date 20210825
       * @v-model.lazy
       * @question 监听input事件并在事件处理函数中操作了data的数据，会导致获得焦点后首个输入没有同步到绑定值；
       */
      inputHandler() {
        console.log('11111111111111')
//        this.curEvent = 'input'
      }
    }
  }
</script>
<style lang="scss">
  .v-model-usage {
    padding: 8px;
    .section {
      margin-bottom: 8px;
    }
    .title-section .page-title {
      text-align: center;
      font-weight: bold;
      font-size: 32px;
      line-height: 50px;
    }
    .demo-section {
      display: flex;
      .demo-box {
        border: 1px solid #4eebff;
        margin-right: 16px;
        width: 32%;
        text-align: center;
      }
    }
  }
</style>
