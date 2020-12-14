<template>
  <div class="container">
    <el-header>
      <img class="img1" src="../assets/resources/医院.png" alt="" width="50" height="50">
      <img class="img2" src="../assets/resources/评分星级.png" alt="" width="50" height="7">
      <span class="text1">XX市第一人民医院</span>
      <span class="text2">星级评价:</span>
      <span class="text3">机构等级:</span>
      <span class="text4">地址:</span>
      <span class="text5">联系电话:</span>
      <span class="text6">公立一甲</span>
      <span class="text7">XX市人民路120号</span>
      <span class="text8">18960875590</span>
    </el-header>

    <el-row :gutter="0">
      <el-col :span="10" style="color: black">
        1
        <img class="img3" src="../assets/resources/门诊医疗.png" alt="" width="30" height="30">
        <span class="text9">门诊人次情况</span>
        <span class="text10">今日门诊人次:</span>
        <span class="text11">今日急诊人次:</span>
        <span class="text12">今日住院人次:</span>
        <span class="text13">今日出院人次:</span>
        <span class="text14">3210</span>
        <span class="text15">1230</span>
        <span class="text16">123</span>
        <span class="text17">123</span>
      </el-col>

      <el-col :span="14">
        <img  src="../assets/resources/img_1.png" alt="" width="270" height="270">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "middletop"
}
</script>

<style scoped>
.img1 {
  position: absolute;
  left: 5%;
  top: 0%;
  font-size: 16px;
  /*transform: translateY(-20%);*/
}

.img2 {
  position: absolute;
  left: 24.5%;
  top: 12%;
  transform: translateY(-30%);
}
.img3 {
  position: absolute;
  left: 5%;
  top: 5%;
  font-size: 16px;
  /*transform: translateY(-20%);*/
}

.text1 {
  position: absolute;
  left: 16%;
  top: 0%;
  font-size: 18px;
  color: #abe9f2;
  transform: translateY(-42%);
}

.text2 {
  position: absolute;
  left: 16%;
  top: 0%;
  font-size: 10px;
  color: #a8c4c7;
  transform: translateY(-30%);
}

.text3 {
  position: absolute;
  left: 36%;
  top: 0%;
  font-size: 10px;
  color: #a8c4c7;
  transform: translateY(-30%);
}

.text4 {
  position: absolute;
  left: 54%;
  top: 0%;
  font-size: 10px;
  color: #a8c4c7;
  transform: translateY(-30%);
}

.text5 {
  position: absolute;
  left: 76%;
  top: 0%;
  font-size: 10px;
  color: #a8c4c7;
  transform: translateY(-30%);
}

.text6 {
  position: absolute;
  left: 45%;
  top: 0%;
  font-size: 10px;
  color: #abe9f2;
  transform: translateY(-30%);
}

.text7 {
  position: absolute;
  left: 60%;
  top: 0%;
  font-size: 10px;
  color: #abe9f2;
  transform: translateY(-30%);
}

.text8 {
  position: absolute;
  left: 85%;
  top: 0%;
  font-size: 10px;
  color: #abe9f2;
  transform: translateY(-30%);
}
.text9 {
  position: absolute;
  left: 13%;
  top: 0%;
  font-size: 18px;
  color: #abe9f2;
  transform: translateY(-33%);
}
.text10 {
  position: absolute;
  left: 5%;
  top: 16%;
  font-size: 18px;
  color: #abe9f2;
  transform: translateY(-33%);
}
.text11 {
  position: absolute;
  left: 5%;
  top: 28%;
  font-size: 18px;
  color: #abe9f2;
  transform: translateY(-33%);
}
.text12 {
  position: absolute;
  left: 5%;
  top: 40%;
  font-size: 18px;
  color: #abe9f2;
  transform: translateY(-33%);
}
.text13 {
  position: absolute;
  left: 5%;
  top: 52%;
  font-size: 18px;
  color: #abe9f2;
  transform: translateY(-33%);
}
.text14 {
  position: absolute;
  left: 30%;
  top: 16%;
  font-size: 24px;
  font-style: oblique;
  color: khaki;
  transform: translateY(-33%);
}
.text15 {
  position: absolute;
  left: 30%;
  top: 28%;
  font-size: 24px;
  font-style: oblique;
  color: khaki;
  transform: translateY(-33%);
}
.text16 {
  position: absolute;
  left: 31.8%;
  top: 40%;
  font-size: 24px;
  font-style: oblique;
  color: khaki;
  transform: translateY(-33%);
}
.text17 {
  position: absolute;
  left: 31.8%;
  top: 52%;
  font-size: 24px;
  font-style: oblique;
  color: khaki;
  transform: translateY(-33%);
}

</style>
