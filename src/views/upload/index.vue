<template>
  <div class="upload">
    <el-image-viewer
      class="image-viewer"
      v-if="showViewer"
      :maskClosable="false"
      :initialIndex="currentImageIndex"
      :urlList="imageUrlList"
      :onClose="closeViewer"
    ></el-image-viewer>
    <p>图片上传</p>
    <el-upload
      class="image-upload"
      ref="imageUploader"
      :action="uploadAPI"
      :autoUpload="true"
      :headers="headers"
      :data="data"
      :multiple="true"
      :name="name"
      :showFileList="true"
      :accept="validFileType"
      :listType="listType"
      :fileList="fileList"
      :limit="6"
      :onChange="onChange"
      :beforeUpload="beforeUpload"
      :onExceed="onExceed"
      :onProgress="onProgress"
      :onSuccess="onSuccess"
      :onError="onError"
      :onPreview="onPreview"
      :beforeRemove="beforeRemove"
      :onRemove="onRemove"
    >
      <template slot="default">
        <i class="el-icon-s-promotion trigger-icon"></i>
        <span class="trigger-text">点击上传图片</span>
      </template>
      <template slot="file" slot-scope="{ file }">
        <div
          v-loading="file.status !== 'success'"
          :element-loading-text="file.status"
          element-loading-spinner="el-icon-loading"
        >
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url"
            alt=""
          />
          <span class="el-upload-list__item-actions">
            <span
              title="预览"
              class="el-upload-list__item-preview"
              @click.prevent="previewImage(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              title="下载"
              class="el-upload-list__item-preview"
              @click.prevent="downloadImage(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span
              title="替换"
              class="el-upload-list__item-preview"
              @click.prevent="replaceImage(file)"
            >
              <i class="el-icon-refresh"></i>
            </span>
            <span
              title="删除"
              class="el-upload-list__item-preview"
              @click.prevent="deleteImage(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </template>
    </el-upload>
  </div>
</template>
<script>
  import { deleteImg, fetchImg } from '../../api/upload'
  import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
  export default {
    name: 'Upload',
    components: {
      ElImageViewer
    },
    data() {
      return {
        uploadAPI: 'http://localhost:9001/upload/image',
        headers: {
          Authorization: '123456'
        },
        data: {
          type: 'image',
          author: 'nizm'
        },
        name: '',
        validFileType: '.jpeg,.png,.jpg',
        // listType: text/picture/picture-card
        listType: 'picture-card',
        fileList: [],
        showViewer: false,
        currentImageIndex: 0,
        imageUrlList: [],
        preOverflow: ''
      }
    },
    methods: {
      /**
       * @param file element封装的file对象
       * @key
       *      { String } status
       *      { String } name
       *      { Number } size
       *      { Number } percentage
       *      { Number } uid
       *      { Object } raw
       *      { String[Blob url] } url
       *      { JSON } response
       *
       *  @param rawFile
       *  @description
       *      1.JS原生file对象
       *      2.上传时传送rawFile
       *      3.beforeUpload的file和onExceed的files判断的是rawFile（所以我改了下面对应函数的入参）
       *      4.file.raw指rawFile
       *  @key
       *      { String } name
       *      { Number } size
       *      { MIME type String } type
       *      { Number } uid
       *      { timestamp } lastModified
       *      { Date } lastModifiedDate
       *      { String } webkitRelativePath
       *
       */
      // 添加文件后、上传成功后、上传失败后触发
      onChange(file, fileList) {
        console.log('onChange')
      },
      beforeUpload(rawFile) {
        const acceptType = ['png', 'jpg', 'jpeg']
        const currentType = rawFile.type.slice(rawFile.type.indexOf('/') + 1).toLowerCase()
        const isAccept = acceptType.indexOf(currentType) >= 0
        if(!isAccept) {
          this.$message.error(`仅支持上传${ acceptType.join('/') }格式图片`)
          return false
        }
        const maxSize = 10 * 1024 * 1024
        const currentSize = rawFile.size
        const isOk = currentSize <= maxSize
        if(!isOk) {
          this.$message.error('图片大小不能超过3M')
          return false
        }
      },
      onExceed(exceededRawFileList, fileList) {
        this.$message.warning(`最多上传6张图片`)
      },
      // status变为uploading，文件由http分发到服务器的过程中，每间隔一段时间触发，event.percent会记录到file.percentage
      onProgress(event, file, fileList) {
        console.log(event.percent)
      },
      onSuccess(response, file, fileList) {
        const { code, msg } = response
        if(code !== 200) {
          this.$message.error(msg || '上传失败')
          this.$refs['imageUploader'].handleRemove(file)
        }else {
          this.fileList = fileList
          this.$message.success('上传成功')
        }
      },
      onError(error, file, fileList) {
        const err = JSON.parse(error.message)
        const msg = err.msg || '上传失败'
        this.$message.error(msg)
      },
      onPreview(file) {
        console.log('onPreview')
      },
      beforeRemove(file, fileList) {
        console.log('beforeRemove')
      },
      onRemove(file, fileList) {
        console.log('onRemove')
      },
      previewImage(file) {
        const { uploadFiles } = this.$refs['imageUploader']
        this.imageUrlList = uploadFiles.map(item => {
          return item.url
        })
        this.currentImageIndex = this.imageUrlList.indexOf(file.url)
        this.preOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        this.showViewer = true
      },
      downloadImage(file) {
        const preStatus = file.status
        file.status = 'downloading'
        const query = {
          name: file.response.data.name
        }
        fetchImg(query).then(res => {
          if(!res) {
            this.$message.error(res.msg || '获取图片失败')
            file.status = preStatus
          }else {
            const url = window.URL.createObjectURL(new Blob([res]));
            if(window.navigator.msSaveBlob) {
              try {
                window.navigator.msSaveBlob(res, query.name);
              } catch (e) {
                this.$message.error('下载失败');
              }
              file.status = preStatus;
            }else {
              const link = document.createElement("a")
              link.download = query.name
              link.href = res
              link.click()
              file.status = preStatus
            }
          }
        }).catch(err => {
          file.status = preStatus
          this.$message.error(err.message || '下载失败')
        })
      },
      replaceImage(file) {
//        const index = this.fileList.indexOf(file)
//        const item = this.fileList[index + 1]
//        this.fileList.splice(index, 1, item)
//        this.$refs['imageUploader'].$refs['upload-inner'].upload(file.raw)
      },
      deleteImage(file) {
        const preStatus = file.status
        file.status = 'deleting'
        const query = {
          name: file.response.data.name
        }
        deleteImg(query).then(res => {
          if(res.code !== 200) {
            file.status = preStatus
            this.$message.error(res.msg || '删除失败')
          }else {
            try {
              this.$refs['imageUploader'].handleRemove(file)
            } catch (e) {
              console.error(e.toString())
            }
            this.$message.success('删除成功')
          }
        }).catch(err => {
          file.status = preStatus
          this.$message.error(err.toString())
        })
      },
      closeViewer() {
        document.body.style.overflow = this.preOverflow
        this.showViewer = false
      }
    }
  }
</script>
<style lang="scss">
  .upload {
    .image-upload {
      /* 上传触发框、图片框、图片的尺寸 */
      $image-width-size: 300px;
      /**
        ul --> el-upload-list
        li --> el-upload-list__item
        img --> el-upload-list__item-thumbnail
       */
      .el-upload-list {
        .el-upload-list__item {
          width: $image-width-size;
          height: $image-width-size;
          .el-upload-list__item-thumbnail {
            height: $image-width-size;
          }
          /* span buttons block */
          .el-upload-list__item-actions {
            .el-upload-list__item-preview {
            }
          }
        }
      }
      /* upload trigger box */
      .el-upload {
        width: $image-width-size;
        height: $image-width-size;
        .trigger-icon {
          font-size: 32px;
        }
        .trigger-text {
          display: block;
          color: #8c939d;
          line-height: 30px;
        }
      }
    }
  }
  /* 图片预览组件样式 */
  .image-viewer {
    .el-image-viewer__mask {
      background: #88878a;
    }
    .el-image-viewer__close {
      width: 56px;
      height: 56px;
      font-size: 36px;
      background-color: #e9ffec;
      color: #4c7fff;
      &:hover {
        background-color: #cdffbf;
        color: #ff454a;
      }
    }
    .el-image-viewer__prev {
      width: 56px;
      height: 56px;
      font-size: 36px;
      background-color: #d3f9ff;
      color: #4dff31;
      &:hover {
        background-color: #ffb7e4;
        color: #ff8824;
      }
    }
    .el-image-viewer__next {
      width: 56px;
      height: 56px;
      font-size: 36px;
      background-color: #ffb7e4;
      color: #ff8824;
      &:hover {
        background-color: #d3f9ff;
        color: #4dff31;
      }
    }
    .el-image-viewer__actions {
      background-color: #e9ffec;
      .el-image-viewer__actions__inner {
        font-size: 32px;
        color: #4c7fff;
        .el-icon-zoom-out,
        .el-icon-zoom-in,
        .el-icon-full-screen,
        .el-icon-refresh-left,
        .el-icon-refresh-right {
          cursor: pointer;
          &:hover {
            color: #ff8d53;
          }
        }
      }
    }
  }
</style>
