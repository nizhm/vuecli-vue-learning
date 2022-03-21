<template>
  <div class="component-demo">
    <p ref="pageTitle">{{ pageTitle }}</p>
    <el-input
      ref="msg"
      v-if="showInput"
      class="msg-input"
      v-model="msg"
      placeholder="msg"
    ></el-input>
    <p>
      <input type="text">
    </p>
    <el-select v-model="model" placeholder="placeholder">
      <el-option
        v-for="item in optionsList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button ref="vue" type="primary" @click.stop="toggleMsg">Toggle</el-button>
    <el-button ref="vue" type="primary" @click.stop="printVue">%Vue%</el-button>
    <el-button ref="data" type="primary" @click.stop="optionData">data</el-button>
    <el-button ref="props" type="primary" @click.stop="optionProps">props</el-button>
    <el-button type="primary" @click.stop="optionEl">el</el-button>
    <el-button type="primary" @click.stop="optionOptions">options</el-button>
    <el-button type="primary" @click.stop="optionParent">parent</el-button>
    <el-button type="primary" @click.stop="optionRoot">root</el-button>
    <el-button type="primary" @click.stop="optionChildren">children</el-button>
    <el-button type="primary" @click.stop="optionSlots">slots</el-button>
    <el-button type="primary" @click.stop="optionScopedSlots">scopedSlots</el-button>
    <el-button type="primary" @click.stop="optionRefs">refs</el-button>
    <el-button type="primary" @click.stop="optionIsServer">isServer</el-button>
    <el-button type="primary" @click.stop="optionAttrs">attrs</el-button>
    <el-button type="primary" @click.stop="optionListeners">listeners</el-button>
    <slot></slot>
    <slot name="message"></slot>
  </div>
</template>

<script>
  export default {
    name: 'ComponentDemo',
    props: {
      user: {
        required: false,
        default: 'nizhm'
      }
    },
    data() {
      return {
        pageTitle: 'Show about Vue component',
        showInput: true,
        msg: undefined
      }
    },
    methods: {
      toggleMsg() {
        this.$nextTick(() => {
          this.msg = this.msg ? undefined : 'undefined'
        })
        for(let i = 0; i < 10000; i++) {
          console.log(i * 2)
        }
      },
      printVue() {
        console.log(this.$root)
      },
      optionData() {
        console.log(this.$data)
      },
      optionProps() {
        console.log(this.$props)
      },
      optionEl() {
        console.log(this.$el)
      },
      optionOptions() {
        console.log(this.$options)
      },
      optionParent() {
        console.log(this.$parent)
      },
      optionRoot() {
        console.log(this.$root)
      },
      optionChildren() {
        console.log(this.$children)
      },
      optionSlots() {
        console.log(this.$slots.length)
        console.log(this.$slots.default)
        console.log(this.$slots.message)
      },
      optionScopedSlots() {
        console.log(this.$scopedSlots)
      },
      optionRefs() {
        console.log(this.$refs)
      },
      optionIsServer() {
        console.log(this.$isServer)
      },
      optionAttrs() {
        console.log(this.$attrs)
      },
      optionListeners() {
        console.log(this.$listeners)
      }
    }
  }
</script>

<style lang="scss">
  .component-demo {
    .msg-input {
      display: block;
      width: 300px;
      padding: 10px;
    }
  }
</style>
