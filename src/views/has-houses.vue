<template>
  <div id="content">

  <!--    table-->
      <el-table
          :data="pageData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          height="600"
          border>

        <el-table-column
            prop="communityName"
            label="小区"
            align="center"
            style="width: 100%">
        </el-table-column>
      </el-table>

  <!--    pagination-->
      <div class="pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalNum">
        </el-pagination>
      </div>

  </div>
</template>

<style>

.el-main {
  line-height: 20px;
}

.el-table .warning-row {
  background: #ffffff;
}

.el-table .success-row {
  background: oldlace;
}

#content .pagination {

  margin-left: 25%;
}
</style>

<script>
import {_axios} from '@/plugins/axios'

export default {
  name: "has-houses",

  created() {

    //   get data and show
    _axios.request(
        {
          url: 'http://localhost:8080/hasHouses/getAll',
          method: 'get',
          params: {}
        }
    ).then(
        response => {
          this.tableData = response.data
          this.pageData = this.tableData.slice(0, this.pageSize)
          this.totalNum = this.tableData.length
          this.currentPage = 1
        }
    )
  },

  methods: {
    // change page size listener
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);

      this.pageSize = val

      // reload page
      if (this.currentPage !== Math.ceil(this.totalNum / this.pageSize))
        this.pageData = this.tableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
      else
        this.pageData = this.tableData.slice((this.currentPage - 1) * this.pageSize, this.tableData.length - 1)

    },

    // change current page listener
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);

      // set current page
      this.currentPage = val

      // reload current page
      if (this.currentPage  !== Math.ceil(this.totalNum / this.pageSize))
        this.pageData = this.tableData.slice((this.currentPage  - 1) * this.pageSize, (this.currentPage  - 1) * this.pageSize + this.pageSize)
      else
        this.pageData = this.tableData.slice((this.currentPage  - 1) * this.pageSize, this.tableData.length)

      // for debug
      // console.log('pageData' + this.pageData.length)
      // console.log('begin' + (val - 1) * this.pageSize)
      // console.log('tableData' + this.tableData.length)
    },

    // set different row with different properties
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 === 1) {
        return 'warning-row';
      } else {
        return 'success-row';
      }
      return '';
    }
  },

  data() {
    return {
      // store all table data from axios, will be set value when execute created() method
      tableData: [],

      // store current page data, bound with table attribute 'data'
      pageData: [],

      // total num of data records, bound with pagination plugin's attribute 'total'
      totalNum: 0,

      // every page's size, default is 10, bound with pagination plugin's attribute 'page-size'
      pageSize: 10,

      // store current page, default is 1, bound with pagination plugin's attribute 'current-page'
      currentPage: 1,
    }
  }

}
</script>