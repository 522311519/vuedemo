<template>
  <div class="head">
    <img src="../../static/images/logo.svg" alt="logo" class="header-logo">
    <ul class="header-operations">
      <li>
        <span class="header-lang is-active">{{user.name}}</span>
        <span class="header-opacity">({{user.area}}/{{user.identity}})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DemoHeader",
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style scoped>
.head {
  background-color: rgb(32, 160, 255);
  box-sizing: border-box;
  padding: 0;
  line-height: 80px;
}
ul {
  margin: 0;
}
.header-logo {
  vertical-align: middle;
  margin-left: 20px;
}
.header-operations {
  float: right;
  height: 100%;
}
.header-operations li {
  color: #fff;
  display: inline-block;
  padding: 0 10px;
  line-height: 80px;
  cursor: pointer;
}
.header-opacity {
  opacity: 0.7;
}
</style>