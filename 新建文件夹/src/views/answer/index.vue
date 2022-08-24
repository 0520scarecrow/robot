<template>
  <div class="main">
    <div class="content">
      <div id="dialogBox">
        <div id="messageArea" class="messageArea" ref="messageArea">
          <div class="robotMessage" v-for="(item, index) in questionList" :key="index">
            <div v-show="item.id == '2'" style="display:flex; margin-top:10px">
              <img src="../../assets/img/1.jpg" alt="" style="float:right; display: block">
              <el-input v-model="item.message" readonly style="float:right; display:block; width:400px"></el-input>
            </div>
            <div v-show="item.id == '1'" class="rightMessage" style="margin-top:10px">
              <el-input v-model="item.message" readonly style="float:right; display:block; width:400px ; margin-right:10px"></el-input>
              <img src="../../assets/img/2.jpg" alt="" style="float:right; display: block">
              
            </div>

          </div>
        </div>
        <!-- 提问区 -->
        <div id="questionArea" class="questionArea">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
          <div class="questionArea-btn">
            <el-button round size="small">清空</el-button>
           <el-button round size="small" type="primary" @click="send">发送</el-button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      questionList: [{'id':1, 'message': 'hello'},{'id':2, 'message': 'Hi~ 小易在呢, 请描述您的问题~'},{'id':1, 'message': 'hello'},{'id':2, 'message': 'Hi~ 小易在呢, 请描述您的问题~'}],
      textarea:''
    };
  },
  mounted() {
    this.$nextTick(() => {
       this.$refs.messageArea.scrollTop = this.$refs.messageArea.scrollHeight;
     })
  },
  methods:{
    send() {
      this.questionList.push({
        'id':'1', 
        'message': this.textarea,
      })
      var div = document.getElementById("messageArea")
      this.$nextTick(() => {
       this.$refs.messageArea.scrollTop = this.$refs.messageArea.scrollHeight;
     })
      console.log(this.$refs.messageArea.scrollTop, div.scrollHeight, 'div-----------');
      // div.scrollTop = div.scrollHeight + '20px'
      console.log(div.scrollTop, div.scrollHeight, 'div-----------');
      
      // 发起请求
      // axios('http://ai-svc-test.yoyi.com.cn/api/task/v1/robot/chat', {"robot_id": 10, "query": this.textarea, "threshold": 0.7, "uniq_id":12}).then(res => {
      //   console.log(res, 'res----------')
      // })
      axios({
        method: 'post',
        url: '/foo/api/task/v1/robot/chat',
        data:{"robot_id": 10, "query": this.textarea, "threshold": 0.7, "uniq_id":12}
      }).then(res => {
        console.log(res, 'res----------')
      })
      this.textarea = ''
    }
  }
};
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
.messageArea {
  height: calc(100% - 160px);
  max-height: calc(100% - 160px);
  padding: 10px;
  overflow: auto;
}
.questionArea {
  border-top: 1px solid #cccccc;
  height: 140px;
}
.questionArea-btn {
  text-align: right;
  margin: 10px;
}
.robotMessage {
  /* float: left; */
  /* display: flex; */
  margin-left: 20px;
  /* margin-top: 20px; */
}
.robotMessage img{
  width: 40px;
  height: 40px;
  margin-right: 20px;
}
.rightMessage{
  display:flex; 
  justify-content: flex-end;
}
/* .rightMessage img{
  position: absolute ;
  right: 20px;
}
.rightMessage input{
  position: absolute ;
  right: 20px;
} */
</style>
