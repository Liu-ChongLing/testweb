<template>
  <div class="container">
    <div class="chart" ref="lefttop">
    </div>
  </div>
</template>

<script>
export default {
  name: "lefttop",
  data() {
    return {
      chartInstance: null,
      data: {
        symbol: [
          '24/48小时',
          'VAP预防',
          'VAP发病',
          '血流感染',
          '泌尿感染',
          '重症死亡',
          '压疮发生'],
        thisWeek: [57, 94, 95, 24, 95, 97, 93],
        lastWeek: [56, 68, 57, 50, 54, 50, 49],
        lastMonth: [69, 70, 74, 76, 68, 65, 59]
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
      this.chartInstance = this.$echarts.init(this.$refs.lefttop, 'theme1')
      const initOption = {
        grid: {
          top: '20%',
          left: '3%',
          right: '6%',
          bottom: '3%',
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
        }
      }
      this.chartInstance.setOption(initOption)
    },
    updateData() {

      const dataOption = {

        xAxis: {
          data: this.data.symbol,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 14     //更改坐标轴文字大小
            }
          },
        },
        series: [
          {
            areaStyle: {},
            type: 'scatter',
            name: '上周',
            data: this.data.lastWeek,
          },
          {
            areaStyle: {},
            type: 'scatter',
            name: '本周',
            data: this.data.thisWeek,
          },
          {
            areaStyle: {},
            type: 'scatter',
            name: '上月',
            data: this.data.lastMonth,
          }
        ],
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      this.titleFontSize = this.$refs.lefttop.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          padding: 0,
          backgroundColor: '#342d97',
          text: '▎ 重症医学ICU质量检测                                                                ',
          textStyle: {
            fontSize: this.titleFontSize * 1.7
          },
          left: 0,
          top: 0
        },
        xAxis: {
          axisLabel: {
            rotate:40,
            interval:0,
            textStyle: {
              fontSize: this.titleFontSize /1.2     //更改坐标轴文字大小
            }
          },
        },
        series: [
          {
            symbolSize: this.titleFontSize*1.6
          },
          {
            symbolSize: this.titleFontSize*2
          },
          {
            symbolSize: this.titleFontSize*1.3
          }
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style scoped>

</style>
