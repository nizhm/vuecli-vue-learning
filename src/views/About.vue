<template>
  <div class="about">
    <p>This is an about page</p>
    <p>
      <label for="name">
        Name:
        <input
          v-model="addForm.name"
          type="text"
          name="name"
        >
      </label>
      <label for="password">
        Password:
        <input
          v-model="addForm.password"
          type="text"
          name="password"
        >
      </label>
      <input
        class="button"
        type="button"
        value="新增"
        @click.prevent="onAdd"
      >
    </p>
    <p>
      <label for="name">
        Name:
        <input
          v-model="searchForm.name"
          type="text"
          name="name"
        >
      </label>
      <label for="password">
        Password:
        <input
          v-model="searchForm.password"
          type="text"
          name="password"
        >
      </label>
      <input
        class="button"
        type="button"
        value="查询"
        @click.prevent="onSearch"
      >
    </p>
    <div class="table-wrapper">
      <table>
        <tr>
          <th>Name</th>
          <th>Password</th>
          <th>Operations</th>
        </tr>
        <tr v-for="item in tableList">
          <td>{{ item.name }}</td>
          <td>{{ item.password }}</td>
          <td>
            <input
              class="table-button"
              type="button"
              value="修改"
              @click.prevent="onModify"
            >
            <input
              class="table-button"
              type="button"
              value="删除"
              @click.prevent="onDelete(item.userId)"
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  import { getList, addUser, modifyUser, deleteUser } from '../api/about'
  export default {
    name: 'About',
    data() {
      return {
        addForm: {
          name: '',
          password: ''
        },
        searchForm: {
          name: '',
          password: ''
        },
        tableList: []
      }
    },
    methods: {
      onSearch() {
        getList(this.searchForm).then(res => {
          this.tableList = res.data
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      onAdd() {
        addUser(this.addForm).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      onModify() {
        modifyUser().then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      onDelete(userId) {
        const query = {
          userId: userId
        }
        deleteUser(query).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style>
  .table-wrapper {
    margin: 0 auto;
    width: 500px;
    background-color: antiquewhite;
  }
  .button {
    margin-left: 8px;
  }
  .table-button {
    margin-left: 5px;
  }
  tr {
    text-align: center;
  }
  tr > th, tr > td {
    width: 150px;
  }
</style>
