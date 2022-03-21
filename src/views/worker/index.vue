<template>
  <p>
    <el-button type="primary" @click.stop="showTips">Tips</el-button>
  </p>
</template>
<script>
  import workerJS from './js/worker'
  export default {
    name: 'Worker',
    data() {
      return {}
    },
    methods: {
      showTips() {
        const worker = new Worker(workerJS)
        worker.addEventListener('message', function(e) {
          worker.terminate()
        }, false);
        window.localStorage.setItem('operation', null)
        this.$confirm('你确定删除选中的数据吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          worker.postMessage('confirm')
        }).catch(() => {
          worker.postMessage('cancel')
        })
      }
    }
  }
</script>
