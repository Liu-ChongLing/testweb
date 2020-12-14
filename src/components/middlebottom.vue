<template>
  <div class="container">
    <div class="chart" ref="middlebottom">
    </div>
    <div class="doctorImg">
      <img src="../assets/resources/医生1.png" alt="" height="80" width="80">
    </div>
  </div>
</template>

<script>
export default {
  name: "middlebottom",
  data() {
    return {
      chartInstance: null,
      data: {
        data: [
          {value: 1434, name: '普通门诊'},
          {value: 1320, name: '副主任医师'},
          {value: 1000, name: '专家门诊'},
          {value: 998, name: '主任医师'},
          {value: 856, name: '急诊'},
        ]
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
      this.chartInstance = this.$echarts.init(this.$refs.middlebottom, 'theme1')
      const initOption = {
        grid: {
          top: '30%',
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'item'
        },
      }
      this.chartInstance.setOption(initOption)
    },
    updateData() {

      const dataOption = {
        series: [
          {
            type: 'pie',
            data: this.data.data,
          },
        ],
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      this.titleFontSize = this.$refs.middlebottom.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          padding: 0,
          backgroundColor: '#342d97',
          text: '▎ 接诊医师人次                                                                ',
          textStyle: {
            fontSize: this.titleFontSize * 1.14
          },
          left: 0,
          top: 0
        },
        series: {
          radius: ['50%', '70%'],
          label: {
            formatter: '{b} {d}%',
            color: '#abe9f2'
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
.doctorImg {
  position: absolute;
  left:43.2%;
  top: 29.5%;
}
</style>
