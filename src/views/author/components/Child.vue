<template>
  <div>
    <p>
      <span>arr{{ typeof arr}}:</span>
      <span>{{ arr }}</span>
    </p>
    <p>
      <span>obj{{ typeof obj}}:</span>
      <span>{{ obj }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    // @see https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81
    arr: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object,
      // ({}) as a expression to return an object
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
