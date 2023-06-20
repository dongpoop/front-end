<template>
  <div id="content" style="width: 100%; height: 600px"></div>
</template>

<script>
import * as echarts from 'echarts'
import {_axios} from '@/plugins/axios'

export default {
  name: "sold-num-community",

  mounted() {

    //   get data and show
    this.getAll()
  },

  methods: {
    // get data from server
    getAll() {
      _axios.request(
          {
            url: 'http://localhost:8080/soldNumCommunity/getAll',
            method: 'get',
            params: {}
          }
      ).then(
          response => {
            const xData = []
            const yData = []
            // cope data from server
            for (const i in response.data) {
              xData.push(response.data[i].communityName)
              yData.push(response.data[i].num)
            }

            // echarts
            const content = document.querySelector('#content')
            const myChart = echarts.init(content)
            myChart.setOption(
                {
                  title: {
                    text: '每个小区售出房源数量（2012 - 2021）',
                    left: 'center',
                    top: '3%'
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow',
                      label: {
                        show: true
                      }
                    }
                  },
                  toolbox: {
                    show: true,
                    feature: {
                      mark: {show: true},
                      dataView: {show: true, readOnly: false},
                      magicType: {show: true, type: ['line', 'bar']},
                      restore: {show: true},
                      saveAsImage: {show: true}
                    }
                  },
                  calculable: true,
                  legend: {
                    x: '80%',
                    y: '5%'
                  },
                  grid: {
                    top: '12%',
                    left: '15%',
                    right: '10%',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: xData
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value',
                      name: '                 出售数量 / 套',
                    }
                  ],
                  dataZoom: [
                    {
                      show: true,
                      start: 97,
                      end: 100
                    },
                    {
                      type: 'inside',
                      start: 94,
                      end: 100
                    },
                    {
                      show: true,
                      yAxisIndex: 0,
                      filterMode: 'empty',
                      width: 30,
                      height: '80%',
                      showDataShadow: false,
                      left: '93%'
                    }
                  ],
                  series: [
                    {
                      name: '小区',
                      type: 'bar',
                      data: yData
                    }
                  ]
                }
            )
          }
      )
    }
  }
}
</script>

<style scoped>
#content {
  background-color: floralwhite;
}
</style>