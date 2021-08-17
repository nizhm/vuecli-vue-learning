<template>
  <div class="element-validate">
    <header class="page-header">
      <p class="page-title">This page practice validate form by using element-ui validation</p>
    </header>
    <section class="sec-common ip-validate">
      <p class="section-title">Validate IP Address</p>
      <el-form
        class="ip-form"
        ref="ipForm"
        :model="ipForm"
        :rules="rules"
      >
        <el-form-item label="IP Pattern">
          <el-input
            v-model="ipForm.ipPattern"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="IP Address:" prop="ipString">
          <el-input
            v-model="ipForm.ipString"
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'ElementValidate',
    data() {
      const ipPattern = '^([1-9]|[1-9]\\d|1\\d\\d|2[012345][012345])[.]' +
      '([0-9]|[1-9]\\d|1\\d\\d|2[012345][012345])[.]' +
      '([0-9]|[1-9]\\d|1\\d\\d|2[012345][012345])[.]' +
      '([1-9]|[1-9]\\d|1\\d\\d|2[012345][012345])$'
      return {
        ipForm: {
          ipPattern: ipPattern,
          ipString: ''
        },
        rules: {
          ipString: [
            {
              pattern: ipPattern, message: 'IP地址不合法', trigger: 'change'
            }
          ]
        }
      }
    }
  }
</script>
<style lang="scss">
  .element-validate {
    padding: 16px;
    display: flex;
    flex-direction: column;
    .page-header {
      .page-title {
        font-size: 32px;
        font-weight: bold;
      }
    }
    .sec-common {
      padding: 8px;
      .sec-title {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .ip-validate {
      .ip-form {
        width: 80%;
      }
    }
  }
</style>
