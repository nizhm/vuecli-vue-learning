<template>
  <div class="users-manage">
    <el-card>
      <el-form
        class="search-form"
        ref="searchForm"
        :model="searchForm"
        :inline="true"
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
        <el-button type="primary" @click.prevent="onSearch">Search</el-button>
      </el-form>
    </el-card>
    <el-card>
      <div class="btn-box">
        <el-button type="primary" @click.prevent="onAdd">Add</el-button>
      </div>
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
            <el-button type="text" @click.prevent="onModify(row)">Modify</el-button>
            <el-button type="text" @click.prevent="onDelete(row.userId)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog
      customClass="add-dialog"
      width="600px"
      ref="addDialog"
      :visible.sync="visible"
      :closeOnClickModal="false"
    >
      <div slot="title">{{ title }}</div>
      <el-form
        class="add-form"
        ref="addForm"
        :model="addForm"
        :inline="false"
      >
        <el-form-item label="Name：">
          <el-input
            v-model="addForm.name"
            clearable
            :maxLength="32"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password：">
          <el-input
            v-model="addForm.password"
            clearable
            :maxLength="32"
          ></el-input>
        </el-form-item>
        <el-button
          type="primary"
          :loading="addRequesting"
          @click.prevent="title === 'Add' ? addUser() : modifyUser()"
        >
          {{ title }}
        </el-button>
        <el-button @click.prevent="visible = false">Cancel</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { getList, addUser, modifyUser, deleteUser } from '../../api/users-manage'
export default {
  name: 'users-manage',
  data () {
    return {
      listLoading: false,
      addRequesting: false,
      visible: false,
      searchForm: {
        name: '',
        password: ''
      },
      addForm: {
        name: '',
        password: ''
      },
      tableList: [],
      title: 'Add'
    }
  },
  methods: {
    onSearch () {
      this.listLoading = true
      getList(this.searchForm).then(res => {
        this.tableList = res.data
        this.listLoading = false
      }).catch(err => {
        console.log(err)
        this.listLoading = false
      })
    },
    onAdd () {
      this.title = 'Add'
      this.addForm.userId = undefined
      this.addForm.name = ''
      this.addForm.password = ''
      this.visible = true
    },
    addUser () {
      this.addRequesting = true
      addUser(this.addForm).then(res => {
        if (res.code !== 200) {
          this.addRequesting = false
          this.$message.error(res.msg)
        } else {
          this.addRequesting = false
          this.$message.success('新增成功')
          this.visible = false
          this.onSearch()
        }
      }).catch(err => {})
    },
    onModify (row) {
      this.title = 'Modify'
      this.addForm.name = row.name
      this.addForm.password = row.password
      this.addForm.userId = row.userId
      this.visible = true
    },
    modifyUser () {
      modifyUser(this.addForm).then(res => {
        const { code } = res
        if (code !== 200) {
          const { msg } = res
          this.$message.error(msg)
        } else {
          this.visible = false
          this.$message.success('修改成功')
          this.onSearch()
        }
      }).catch(err => {})
    },
    onDelete (userId) {
      const query = {
        userId: userId
      }
      deleteUser(query).then(res => {
        const { code } = res
        if (code !== 200) {
          const { msg } = res
          this.$message.error(msg)
        } else {
          this.$message.success('删除成功')
          this.onSearch()
        }
      }).catch(err => {})
    }
  },
  created () {
    console.log(this.$route)
    this.onSearch()
  }
}
</script>
<style lang="scss">
  .btn-box {
    padding-bottom: 8px;
  }
  .el-card {
    background-color: aliceblue;
    border-radius: 6px;
    margin: 20px;
  }
  .btn-box {
    display: inline-block;
  }
</style>
