<template>
  <section>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column :sortable="true" :sort-method="sortDate" label="姓名">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="left" :open-delay="1000">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="住址">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改个人信息" :visible="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave" :loading="editLoading">修改</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>

<script>
const ERR_OK = "000";
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      editLoading: false,
      form: {
        name: '',
        address: '',
        date: '',
      },
      table_index: 999,
    }
  },
  created() {
    this.$http.get('/api/getTable').then((response) => {
      response = response.data;
      if (response.code === ERR_OK) {
        this.tableData = response.datas;
      }
    });
  },
  methods: {
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.form = Object.assign({}, row);
      this.table_index = index;
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
      this.$message({
        message: "操作成功！",
        type: 'success'
      });
    },
    onSubmit() {
      this.$message('模拟数据，这个方法并不管用哦~');
    },
    handleSave() {
      this.$confirm('确认提交吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        cancelButtonClass: 'cancel'
      }).then(() => {
        this.editLoading = true;
        let date = this.form.date;
        if (typeof date === "object") {
          date = [date.getFullYear(), (date.getMonth() + 1), (date.getDate())].join('-');
          this.form.date = date
        }
        //          this.tableData[this.table_index] = this.form;
        this.tableData.splice(this.table_index, 1, this.form);
        this.$message({
          message: "操作成功！",
          type: 'success'
        });
        this.editLoading = false;
        this.dialogFormVisible = false;
      }).catch(() => {

      });
    },
    download: function () {
      console.log("xiazai")
      var obj = document.getElementById('download');
      var str = "姓名,出生日期,地址\n";
      for (var i = 0; i < this.tableData.length; i++) {
        var item = this.tableData[i];
        str += item.name + ',' + item.date + ',' + item.address;
        str += "\n";
      }
      console.log(obj)
      str = encodeURIComponent(str);
      console.log(str)
      obj.href = "data:text/xls;charset=utf-8,\ufeff" + str;
      obj.download = "download.xls";
    },
    sortDate(a, b) {
      let val1 = a.date
      let val2 = b.date
      return this.getTimeTmp(val1) - this.getTimeTmp(val2);
    },
    getTimeTmp(str) {
      let date = new Date(str);
      console.log(date.getTime())
      return date.getTime();
    }
  },
}
</script>
