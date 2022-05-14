<template>
  <div class="html">
    <header>
      <p>HTML Document structure</p>
    </header>
    <section class="body">
      <div class="text-box">
        <p class="text-content">The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data</p>
      </div>
      <div class="text-box">
        <p class="text-content">俄罗斯程序员实现了全自动化的生活，写了一堆脚本，会给老婆发加班短信、会在宿醉不醒时给自己请假、会自动根据邮件恢复客户的数据库、还可以一键远程煮咖啡。还原这一故事的GitHub项目已经成了这几天最为火热的项目之一，真是程序员们的楷模啊……    GitHub上这个名为“hacker scripts”的项目收获7800多星，甚至超过了微软开源Visual Studio Code的受欢迎程度……。这个项目，其实出自于一个“故事”——它原本来自于俄罗斯聊天记录收存网站http://bash.im上的一段聊天记录，由JitBit网站的Alex翻译为英文后，GitHub上这名为NARKOZ的用户试着还原出了故事中的相关脚本，其实更多还是起到分享这则故事的作用。</p>
      </div>
      <div class="text-box">
        <p class="text-content">The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data</p>
      </div>
    </section>
    <footer>
      <p>HTML footer</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HTML'
}
</script>

<style lang="scss">
  .html {
    .body {
      margin: 16px;
      padding: 12px;
      border: 1px solid rgb(244, 200, 7);
      display: flex;
      .text-box {
        margin: 0 8px;
        flex: 0 0 33.3%;
        .text-content {
          border: 1px solid #8590a6;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>
