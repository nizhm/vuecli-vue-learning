<template>
  <div class="worlds-country">
    <el-select
      v-model="country"
      filterable
    >
      <el-option
        v-for="item in list"
        :key="item.country"
        :value="item.country"
      >
        <template v-if="item.flag_base64">
          <img :src="item.flag_base64" alt="" style="width: 30px; height: 30px;">
        </template>
        <template v-else>
          <span>--</span>
        </template>
        {{ item.country }}
      </el-option>
    </el-select>
  </div>
</template>
<script>
import list from './CountryAndFlags'
export default {
  name: 'WorldsCountry',
  data () {
    return {
      list,
      country: ''
    }
  }
}
</script>
