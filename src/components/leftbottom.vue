<template>
  <div class="container">
    <div class="chart" ref="leftbottom">
    </div>
  </div>
</template>

<script>
export default {
  name: "leftbottom",
  data() {
    return {
      chartInstance: null,
      data: {
        symbol: ['甲状腺肿大',
          '糖尿病',
          '累及多部位',
          '脑出血',
          '心肌梗死',
          '出血',
          '肺炎',
          '性疾病',
          '心力衰竭',
          '脑损伤',
        ],
        thisweek: [102, 90, 78, 74, 24, 52, 50, 44, 78, 65],
        lastweek: [35, 41, 66, 88, 101, 69, 62, 62, 43, 55]
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
      this.chartInstance = this.$echarts.init(this.$refs.leftbottom, 'theme1')
      const initOption = {
        grid: {
          top: '30%',
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          right: 20,
          top: '10%',
          icon: 'circle'
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
              fontSize : 14     //更改坐标轴文字大小
            }
          },
        },
        series: [
          {
            areaStyle: {},
            type: 'line',
            name: '本周人数',
            data: this.data.thisweek,
            smooth: true
          },
          {
            // stack:'map',
            areaStyle: {},
            type: 'line',
            name: '上周人数',
            data: this.data.lastweek,
            smooth: true
          }
        ],
        legend: {
          data: ['本周人数', '上周人数']
        }
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      this.titleFontSize = this.$refs.leftbottom.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          padding: 0,
          backgroundColor:'#342d97',
          text: '▎ 住院重点疾病检测                                                                ',
          textStyle: {
            fontSize: this.titleFontSize*1.7
          },
          left: 0,
          top: 0
        },
        legend:{
          itemWidth:this.titleFontSize/2,
          itemHeight:this.titleFontSize/2,
          itemGap:this.titleFontSize*10,
          textStyle: {
            fontsize:this.titleFontSize/ 2
          }
        },
        xAxis: {
          axisLabel: {
            rotate:40,
            interval:0,
            textStyle: {
              fontSize : this.titleFontSize /1.5     //更改坐标轴文字大小
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
