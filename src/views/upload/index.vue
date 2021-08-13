<template>
  <div class="upload">
    <el-image
      class="image-viewer"
      ref="imageViewer"
      :src="currentImage"
      :previewSrcList="imageList"
    ></el-image>
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
      :limit="20"
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
          element-loading-text="上传中"
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
  export default {
    name: 'Upload',
    data() {
      return {
        uploadAPI: 'http://localhost:9001/upload/image',
        headers: {
          Authorization: '123456'
        },
        data: {},
        name: '',
        validFileType: '',
        // listType: text/picture/picture-card
        listType: 'picture-card',
        fileList: [],
        currentImage: '',
        imageList: []
      }
    },
    methods: {
      /**
       * @param file
       * @key
       *      { String } status
       *      { String } name
       *      { Number } size
       *      { Number } percentage
       *      { Number } uid
       *      { Object } raw
       *      { String[Blob url] } url
       *      { JSON } response
       */
      // 添加文件后、上传成功后、上传失败后触发
      onChange(file, fileList) {
        console.log('onChange')
      },
      beforeUpload(file) {
        console.log('beforeUpload')
      },
      onExceed(files, fileList) {
        console.log('onExceed')
      },
      onProgress(event, file, fileList) {
        console.log('onProgress')
      },
      onSuccess(response, file, fileList) {
        console.log('onSuccess')
      },
      onError(error, file, fileList) {
        console.log('onError')
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
        this.currentImage = file.url
        this.imageList.length = 0
        this.imageList.push(file.url)
        setTimeout(() => {
          this.$refs['imageViewer'].clickHandler()
        }, 0)
      },
      downloadImage(file) {
        console.log('downloadImage')
      },
      replaceImage(file) {
        console.log('replaceImage')
      },
      deleteImage(file) {
        console.log('deleteImage')
      }
    }
  }
</script>
<style lang="scss">
  .upload {
    .image-viewer {
      /* el-image 设置为 0x0 尺寸 */
      $image-viewer-size: 0;
      width: $image-viewer-size;
      height: $image-viewer-size;
    }
    .image-upload {
      /* 上传触发框、图片框、图片的尺寸 */
      $image-width-size: 300px;
      /* ul --> el-upload-list */
      .el-upload-list {
        /* li --> el-upload-list__item */
        .el-upload-list__item {
          width: $image-width-size;
          height: $image-width-size;
          /* img --> el-upload-list__item-thumbnail */
          .el-upload-list__item-thumbnail {
            height: $image-width-size;
          }
          /* span buttons block */
          .el-upload-list__item-actions {
            /* span button */
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
</style>
