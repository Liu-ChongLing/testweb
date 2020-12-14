<template>
  <div class="container">
    <div class="chart" ref="righttop"></div>
    <span class="info1">今日手术人次</span>
    <span class="num1">123</span>
    <span class="info2">昨日手术人次</span>
    <span class="num2">123</span>
    <span class="info3">年住院手术数量</span>
    <span class="num3">12345</span>
  </div>
</template>

<script>
export default {
  name: "righttop",
  data() {
    return {
      chartInstance: null,
      data: {
        symbol: ['剖宫产', '切除术', '脉旁路移植', '胰腺切除术', '置换术', '腹腔镜', '动脉介入', '颅脑手术', '椎板切除', '食管切除'],
        thisWeek: [111, 71, 81, 62, 40, 32, 19, 66, 70, 87],
        lastWeek: [92, 90, 78, 29, 55, 52, 50, 44, 31, 46],
        thisMonth: [312, 289, 167, 156, 174, 123, 102, 122, 80, 93]
      },
      titleFontSize: 0
    }
  },
  mounted() {
    this.initChart()
    this.updateData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.righttop, 'theme1')
      const initOption = {
        grid: {
          top: '28%',
          left: '30%',
          right: '6%',
          bottom: '1%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          right: 20,
          top: '10%',
          icon: 'circle'
        },
      }
      this.chartInstance.setOption(initOption)
    },
    updateData() {

      const dataOption = {

        xAxis: {
          data: this.data.symbol
        },
        series: [
          {
            areaStyle: {},
            type: 'bar',
            name: '上周人数',
            data: this.data.lastWeek,
          },
          {
            areaStyle: {},
            type: 'bar',
            name: '本周人数',
            data: this.data.thisWeek,
          },
          {
            areaStyle: {},
            type: 'bar',
            name: '本月人数',
            data: this.data.thisMonth,
          }
        ],
        legend: {
          data: ['上周人数', '本周人数', '本月人数']
        }
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      this.titleFontSize = this.$refs.righttop.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          padding: 0,
          backgroundColor: '#342d97',
          text: '▎ 住院重点手术检测                                                                ',
          textStyle: {
            fontSize: this.titleFontSize * 1.14
          },
          left: 0,
          top: 0
        },
        xAxis: {
          axisLabel: {
            interval: 0,
            rotate: 35,
            textStyle: {
              fontSize: this.titleFontSize / 1.6     //更改坐标轴文字大小
            }
          },
        },
        legend: {
          itemWidth: this.titleFontSize / 2,
          itemHeight: this.titleFontSize / 2,
          itemGap: this.titleFontSize * 3,
          textStyle: {
            fontsize: this.titleFontSize / 2
          }
        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style scoped>
.info1 {
  position: absolute;
  left:5%;
  top: 0%;
  font-size: 16px;
  color: khaki;
  transform: translateY(-20%);
}
.info2 {
  position: absolute;
  left:5%;
  top: 26%;
  font-size: 16px;
  color: #4ade6c;
  transform: translateY(-20%);
}
.info3 {
  position: absolute;
  left:5%;
  top: 52%;
  font-size: 16px;
  color: #2241d9;
  transform: translateY(-20%);
}
.num1 {
  position: absolute;
  left:10%;
  top: 13%;
  font-size: 27px;
  color: #b1e8e8;
  transform: translateY(-20%);
}
.num2 {
  position: absolute;
  left:10%;
  top: 39%;
  font-size: 27px;
  color: #b1e8e8;
  transform: translateY(-20%);
}
.num3 {
  position: absolute;
  left:8%;
  top: 65%;
  font-size: 27px;
  color: #b1e8e8;
  transform: translateY(-20%);
}
</style>
