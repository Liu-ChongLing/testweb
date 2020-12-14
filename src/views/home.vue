<template>
  <div style="background-color: black">
    <el-header style="background-color: black;">
      <div><span style="margin-left: 570px;font-size: 24px;color: #d5fffe">医院数据实时展示大屏</span>
        <span style="color: #abe9f2;margin-left: 400px;">{{ date }}</span>
      </div>
    </el-header>
    <el-row :gutter="10">

      <el-col :span="6">
        <el-container style="margin-bottom: 10px">
          <el-main>
            <div style="height: 330px">
              <lefttop></lefttop>
            </div>
          </el-main>
        </el-container>
        <el-container>
          <el-main>
            <div style="height: 330px">
              <leftbottom></leftbottom>
            </div>
          </el-main>
        </el-container>
      </el-col>

      <el-col :span="9">
        <el-container style="margin-bottom: 10px">
          <el-main>
            <div style="height: 330px">
              <middletop></middletop>
            </div>
          </el-main>
        </el-container>

        <el-container>
          <el-main>
            <div style="height: 330px">
              <middlebottom></middlebottom>
            </div>
          </el-main>
        </el-container>
      </el-col>

      <el-col :span="9">
        <el-container style="margin-bottom: 10px">
          <el-main>
            <div style="height: 330px">
              <righttop></righttop>
            </div>
          </el-main>
        </el-container>

        <el-row :gutter="10">
          <el-col :span="12">
            <el-container>
              <el-main>
                <div style="height: 330px">
                  <rightbottom1></rightbottom1>
                </div>
              </el-main>
            </el-container>
          </el-col>

          <el-col :span="12">
            <el-container>
              <el-main>
                <div style="height: 330px">
                  <rightbottom2></rightbottom2>
                </div>
              </el-main>
            </el-container>
          </el-col>
        </el-row>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import lefttop from "@/components/lefttop";
import leftbottom from "@/components/leftbottom";
import righttop from "@/components/righttop";
import rightbottom1 from "@/components/rightbottom1";
import rightbottom2 from "@/components/rightbottom2";
import middlebottom from "@/components/middlebottom";
import middletop from "@/components/middletop";

export default {
  name: "home",
  data() {
    return {}
  },
  computed: {
    date() {
      let dayMsg = new Date();
      let year = dayMsg.getFullYear(); // 获取年份
      let month = dayMsg.getMonth();  // 获取月份
      let day = dayMsg.getDate();  // 获取日
      let hour = dayMsg.getHours();  // 获取小时
      let minute = dayMsg.getMinutes();  // 获取分钟
      let second = dayMsg.getSeconds();  // 获取秒
      let nowTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
      this.startInterval();
      return nowTime;
    }
  },
  methods: {
    startInterval() {
      setInterval(1000);
    }
  },
  components: {
    middlebottom,
    leftbottom,
    lefttop,
    righttop,
    rightbottom1,
    rightbottom2,
    middletop
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  /*background-color: #E9EEF3;*/
  color: #333;
  text-align: center;
  line-height: 200px;
  padding: 0;
}

body > .el-container {
  margin: 0;
  padding: 0;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>

