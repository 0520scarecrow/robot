<template>
  <div class="main">
    <div class="content">
      <div id="dialogBox">
        <div id="messageArea"></div>
        <!-- 提问区 -->
        <div id="questionArea"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  margin: 10px;
  padding: 10px;
  background-color: #f4f5f6;
  height: calc(100% - 70px);
  border-radius: 10px;
}
.content {
  margin: 10px;
  padding: 10px;
  background-color: #ffffff;
  height: calc(100% - 40px);
  border-radius: 10px;
}
#dialogBox {
  margin: 10px;
  height: calc(100% - 20px);
  border: 1px solid #cccccc;
  border-radius: 10px;
}
</style>
