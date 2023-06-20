<template>
  <div id="content" style="width: 100%; height: 600px"></div>
</template>

<script>
import * as echarts from 'echarts'
import {_axios} from '@/plugins/axios'

export default {
  name: "sold-num-by-year",

  mounted() {

    //   get data and show
    this.getAll()
  },

  methods: {
    // get data from server
    getAll() {
      _axios.request(
          {
            url: 'http://localhost:8080/soldNumByYear/getAll',
            method: 'get',
            params: {}
          }
      ).then(
          response => {

            // cope data from server
            var xData = []
            const yData = []
            for (const i in response.data) {
              xData.push(Number(response.data[i].yearTime))
              yData.push(response.data[i].soldNum)
            }

            // adjust xData to make xData(the yearTime) ordered from small to big
            xData = xData.sort()

            // echarts
            const content = document.querySelector('#content')
            const myChart = echarts.init(content)
            myChart.setOption(
                {
                  title: {
                    text: '房源售出总情况',
                    left: 'center',
                    top: '3%'
                  },
                  xAxis: {
                    type: 'category',
                    data: xData
                  },
                  yAxis: {
                    type: 'value',
                    name: '售出量 / 套 \n\n'
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      label: {
                        show: true
                      }
                    }
                  },
                  series: [
                    {
                      data: yData,
                      type: 'line'
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