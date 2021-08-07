<template>
  <div class="users-manage">
    <el-card>
      <el-form
        class="search-form"
        ref="searchForm"
        :model="searchForm"
      >
        <el-form-item label="Name：">
          <el-input
            v-model="searchForm.name"
            clearable
            :maxLength="32"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password：">
          <el-input
            v-model="searchForm.password"
            clearable
            :maxLength="32"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-box">
        <el-button type="primary" @click.prevent="onSearch">查询</el-button>
      </div>
    </el-card>
    <el-card>
      <el-table
        class="multiple-table"
        ref="multipleTable"
        v-loading="listLoading"
        :data="tableList"
      >
        <el-table-column label="Name" prop="name">
          <template slot-scope="{ row }">
            <span>{{ row.name || '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Password" prop="password">
          <template slot-scope="{ row }">
            <span>{{ row.password || '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template slot-scope="{ row }">
            <el-button type="text" @click.prevent="onEdit">Edit</el-button>
            <el-button type="text" @click.prevent="onDelete">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
  import { getList } from '../../api/users-manage'
  export default {
    name: 'users-manage',
    data() {
      return {
        listLoading: false,
        searchForm: {
          name: '',
          password: ''
        },
        tableList: []
      }
    },
    methods: {
      onSearch() {
        this.listLoading = true
        getList(this.searchForm).then(res => {
          this.tableList = res.data
          this.listLoading = false
        }).catch(err => {
          console.log(err)
          this.listLoading = false
        })
      },
      onEdit() {
        console.log('Edit')
      },
      onDelete() {
        console.log('Delete')
      }
    },
    created() {
      this.onSearch()
    }
  }
</script>
<style>
  .el-card {
    background-color: aliceblue;
    border-radius: 6px;
    margin: 20px;
  }
</style>
