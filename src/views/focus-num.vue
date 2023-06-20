<template>
  <div id="content" style="width: 100%; height: 600px"></div>
</template>

<script>
import * as echarts from 'echarts'
import {_axios} from '@/plugins/axios'

export default {
  name: "focus-num",

  mounted() {

    //   get data and show
    this.getAll()
  },

  methods: {
    // get data from server
    getAll() {
      _axios.request(
          {
            url: 'http://localhost:8080/focusNum/getAll',
            method: 'get',
            params: {}
          }
      ).then(
          response => {

            // cope data from server
            const focusNum = []
            const locations = []
            for (const i in response.data) {
              focusNum.push(response.data[i].focusNum)
              locations.push(response.data[i].region + '区 ' + response.data[i].district + '街道 ' + response.data[i].community)
            }

            // echarts
            const content = document.querySelector('#content')
            const myChart = echarts.init(content)
            myChart.setOption(
                {
                  title: {
                    text: '关注度',
                    left: 'center',
                    top: '3%'
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  legend: {
                    x: '80%',
                    y: '3%'
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                  },
                  yAxis: {
                    type: 'category',
                    data: locations
                  },
                  series: [
                    {
                      name: '关注数量',
                      type: 'bar',
                      data: focusNum
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