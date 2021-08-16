<template>
  <div class="v-bind-usage">
    <section :class="['common', 'head']">
      <p class="page-title">This page show the usage of v-bind directive</p>
      <div class="conclusion">
        <p class="title">v-bind basics usage：</p>
        <p class="summary">1.with-argument(<span class="tips">shorthand or not</span>) bind to any value</p>
          <p class="sub-summary">1.1 inline expression</p>
          <p class="sub-summary">1.2 single variable</p>
          <p class="sub-summary">1.3 Object(<span class="tips">bind to Class/Style attributes</span>)</p>
          <p class="sub-summary">1.4 Array(<span class="tips">bind to Class attribute</span>)</p>
          <p class="sub-summary">1.5 Array with Object(<span class="tips">Class: class name Object, Style: style declare Object</span>) inside(<span class="tips">bind to Class/Style attributes</span>)</p>
          <p class="sub-summary">1.5 Function(<span class="tips">bind to Event handler</span>)</p>
        <p class="summary">2.non-argument(<span class="tips">forbid shorthand</span>) only bind to Object value</p>
        <p class="title">addition to Style binding：</p>
        <p class="summary">1.auto-prefixing(<span class="tips"><a href="https://vuejs.org/v2/guide/class-and-style.html" target="_blank">https://vuejs.org/v2/guide/class-and-style</a></span>)</p>
        <p class="summary">2.provided-prefixing(<span class="tips">For Example, :class="{ display: [ '-webkit-box', '-ms-flexbox', 'flex' ] }", match from right to left</span>)</p>
      </div>
    </section>
    <section class="common condition">
      <p class="item">
        <label for="">Image Toggle：</label>
        <el-radio-group v-model="currentImage">
          <el-radio label="a">aaa.jpeg</el-radio>
          <el-radio label="b">bbb.jpeg</el-radio>
          <el-radio label="c">ccc.jpeg</el-radio>
        </el-radio-group>
      </p>
      <p class="item">
        <label for="">Image Size：</label>
        <el-radio-group v-model="imageSize">
          <el-radio label="small"></el-radio>
          <el-radio label="normal"></el-radio>
          <el-radio label="large"></el-radio>
        </el-radio-group>
      </p>
      <p class="condition_tips">property: currentImage/imageSize('small'/'normal'/'large')/imageBorder('image-border')</p>
      <p class="condition_tips">computed property: currentImageSize</p>
      <p class="condition_tips">class name: 'small-size'/'normal-size'/'large-size'/'image-border'/'green-border'</p>
    </section>
    <section class="common content">
      <div
        v-bind="{
          class: 'image-box',
          style: { display: [ '-webkit-box', '-ms-flexbox', 'flex' ] }
         }"
      >
        <div class="item">
          <p class="item_title">
            <span>v-bind="{ class: imageSize ? imageSize + '-size': '', src: imageSRC, alt: 'Here is an image' }"</span>
          </p>
          <img
            v-bind="{
              class: imageSize ? imageSize + '-size': '',
              src: imageSRC,
              alt: 'Here is an image'
             }"
          />
        </div>
        <div class="item">
          <p class="item_title">
            <span>:class="currentImageSize"</span>
          </p>
          <img :class="currentImageSize" :src="imageSRC"/>
        </div>
        <div class="item">
          <p class="item_title">
            <span>:class="{ [currentImageSize]: true }"</span>
          </p>
          <img :class="{ [currentImageSize]: true }" :src="imageSRC"/>
        </div>
        <div class="item">
          <p class="item_title">
            <span>:class="[ currentImageSize, imageBorder ]"</span>
          </p>
          <img :class="[ currentImageSize, imageBorder ]" :src="imageSRC"/>
        </div>
        <div class="item">
          <p class="item_title">
            <span>v-bind="{ class: [ { [currentImageSize]: true }, imageBorder, 'green-border' ], src: imageSRC }"</span>
          </p>
          <img
            v-bind="{
              class: [ { [currentImageSize]: true }, imageBorder, 'green-border' ],
              src: imageSRC
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import a from '../../../public/aaa.jpeg'
  import b from '../../../public/bbb.jpeg'
  import c from '../../../public/ccc.jpeg'
  export default {
    name: 'VBindUsage',
    components: {  },
    computed: {
      imageSRC() {
        switch (this.currentImage) {
          case 'a': return this.a; break
          case 'b': return this.b; break
          case 'c': return this.c; break
        }
      },
      currentImageSize() {
        return this.imageSize + '-size'
      }
    },
    data() {
      return {
        a,b,c,
        article: '',
        currentImage: 'a',
        imageSize: 'normal',
        smallSize: {},
        size: 'normal-size',
        imageBorder: 'image-border'
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .v-bind-usage {
    .common {
      padding: 8px;
    }
    .head {
      font-weight: bold;
      .page-title {
        font-size: 32px;
      }
      .conclusion {
        background-color: #c8aa63;
        padding: 8px;
        line-height: 20px;
        .title {
          font-size: 16px;
        }
        .summary {
          font-size: 14px;
          text-indent: 2em;
        }
        .sub-summary {
          font-size: 14px;
          text-indent: 4em;
        }
        .tips {
          font-weight: 400;
        }
      }
    }
    .condition {
      .item {
        margin-bottom: 8px;
      }
      .condition_tips {
        font-size: 12px;
      }
    }
    .content .image-box .item {
      width: 350px;
      display: flex;
      flex-direction: column;
      .item_title {
        height: 60px;
        font-size: 12px;
        line-height: 20px;
        font-weight: bold;
        text-align: center;
      }
      img {
        margin: 0 auto;
      }
      $small: 100px;
      $normal: 150px;
      $large: 200px;
      .small-size {
        width: $small;
        height: $small;
      }
      .normal-size {
        width: $normal;
        height: $normal;
      }
      .large-size {
        width: $large;
        height: $large;
      }
      .image-border {
        border: 2px solid #ff7148;
      }
      .green-border {
        border-color: #3ff01c;
      }
    }
  }
</style>
