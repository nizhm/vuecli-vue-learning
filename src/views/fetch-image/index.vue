<template>
  <div class="fetch-image">
    <p>
      <span>图片URL：</span>
      <el-input
        v-model="url"
        clearable
      ></el-input>
      <el-button type="primary" @click.prevent="fetchImage">Request</el-button>
      <el-button type="primary" @click.prevent="resetFields">Reset</el-button>
    </p>
    <div class="response-info">
      <p>
        <span>状态：</span>
        <span>{{ statusInfo || '--' }}</span>
      </p>
      <p>
        <span>数据信息：</span>
        <span>{{ fileInfo || '--' }}</span>
      </p>
      <p>
        <span>展示方式：</span>
        <el-radio-group v-model="showType">
          <el-radio :label="0">objSRC</el-radio>
          <el-radio :label="1">blobSRC</el-radio>
          <el-radio :label="2">base64SRC</el-radio>
        </el-radio-group>
      </p>
      <p>
        <span>imgSRC：</span>
        <span>{{ imgSRC || '--' }}</span>
      </p>
      <p>
        <span>blobSRC：</span>
        <span>{{ blobSRC || '--' }}</span>
      </p>
      <p>
        <span>base64SRC：</span>
        <span>{{ base64SRC || '--' }}</span>
      </p>
      <p>
        <span>图片：</span>
        <span v-if="imageSRC">src:'{{ imageSRC.substring(0, 50) + '...' }}'</span>
      </p>
      <el-image
        :src="imageSRC"
        :previewSrcList="[imageSRC]"
      ></el-image>
      <p>input-file</p>
      <p>
        <span>图片：</span>
        <input type="file" multiple>
      </p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'FetchImage',
    data() {
      return {
        url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        statusInfo: '',
        fileInfo: '',
        showType: 0,
        imageSRC: '',
        imageHTML: '',
        imgSRC: '',
        blobSRC: '',
        base64SRC: ''
      }
    },
    methods: {
      resetFields() {
        this.statusInfo = ''
        this.fileInfo = ''
        this.imageSRC = ''
        this.objSRC = ''
        this.blobSRC = ''
        this.base64SRC = ''
      },
      fetchImage() {
        const url = this.url
        axios({
          method: 'get',
          url,
          responseType: 'blob'
        }).then(res => {
          const {
                  status,
                  statusText,
                  data,
                  headers
                } = res
          this.statusInfo = `${ status } ${ statusText || 'OK' }`
          this.fileInfo = `${ headers['content-type'] }  ${ headers['content-length'] } bytes`
          const type = this.showType
          if(type === 0) {
            this.setImgSRC()
          }else if(type === 1) {
            this.imageSRC = this.setBlobSRC(data)
          }else {
            this.setBase64SRC(data)
          }
        }).catch(err => {
          this.$message.error('error')
          this.$message.error(err)
        })
      },
      setImgSRC() {
        this.imageSRC = this.url
        this.imgSRC = this.url
      },
      setBlobSRC(data) {
        const url = window.URL.createObjectURL(data)
        this.blobSRC = url
        return this.blobSRC
      },
      setBase64SRC(data) {
        this.blobToBase64(data).then(res => {
          this.base64SRC = res.substring(0, 30) + '...'
          this.imageSRC = res.replace('/jpeg', '')
          console.log('imageSRC', this.imageSRC)
        }).catch(err => {
          this.base64SRC = ''
          this.$message.error(err.message)
        })
      },
      // blob to objURL
      blobToObjectURL(data) {
        const url = window.URL.createObjectURL(data)
        return url
      },
      // blob to base64
      blobToBase64(data) {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader()
          fileReader.onload = e => {
            resolve(e.target.result)
          }
          fileReader.onerror = () => {
            reject('文件流异常！')
          }
          fileReader.readAsDataURL(data)
        })
      }
    }
  }
</script>
<style lang="scss">
  .fetch-image {
    padding: 20px;
    text-align: center;
    .el-input {
      width: 1000px;
      margin-right: 20px;
      .el-input__inner {
        width: 1000px;
      }
    }
    .response-info {
      text-align: left;
      font-size: 16px;
      line-height: 30px;
      width: 800px;
      border: 1px solid red;
      margin: 20px auto;
      padding-left: 20px;
      .el-image {
        width: 300px;
        height: 300px;
        margin-left: 50px;
      }
    }
  }
</style>
