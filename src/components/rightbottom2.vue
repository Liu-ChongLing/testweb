<template>
  <div class="container">
    <div class="chart" ref="rightbottom2">
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "rightbottom2",
  data() {
    return {
      chartInstance: null,
      data: {
        symbol: ['B超', '心电图', 'CT', 'MRI', 'X光摄影', '内镜科'],

        percent: [80, 71, 64, 55, 47, 60],
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
      this.chartInstance = this.$echarts.init(this.$refs.rightbottom2, 'theme1')
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
          show: false,
          type: 'value'
        },
        yAxis: {
          type: 'category'
        },
      }
      this.chartInstance.setOption(initOption)
    },
    updateData() {

      const dataOption = {

        yAxis: {
          data: this.data.symbol
        },
        series: [
          {
            areaStyle: {},
            type: 'bar',
            data: this.data.percent,
            barWidth: 12,
            // 设置柱状图渐变颜色
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 1, color: '#ff8b8b'},
                    {offset: 0, color: '#e81d02'}
                  ]
              )
            },
          },
        ],
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      this.titleFontSize = this.$refs.rightbottom2.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          padding: 0,
          backgroundColor: '#342d97',
          text: '▎ 医技影像人次对比                                                                ',
          textStyle: {
            fontSize: this.titleFontSize * 2.3
          },
          left: 0,
          top: 0
        },
        yAxis: {
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: this.titleFontSize      //更改坐标轴文字大小
            }
          },
        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style scoped>

</style>

