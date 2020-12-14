<template>
  <div class="container">
    <div class="chart" ref="rightbottom1">
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "rightbottom1",
  data() {
    return {
      chartInstance: null,
      data: {
        symbol: ['医疗收入', '药品收入', '挂号收入', '全院收入', '住院收入', '门诊总收入'],
        percent: [31, 43, 54, 91, 60, 80],
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
      this.chartInstance = this.$echarts.init(this.$refs.rightbottom1, 'theme1')
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
                    {offset: 1, color: '#83bff6'},
                    {offset: 0, color: '#188df0'}
                  ]
              )
            },
          },
        ],
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      this.titleFontSize = this.$refs.rightbottom1.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          padding: 0,
          backgroundColor: '#342d97',
          text: '▎ 全院收入占比                                                                ',
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
