<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TaskManage msg="Welcome to Your Vue.js App"></TaskManage>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskManage from '@/components/TaskManage.vue'

export default {
  name: 'home',
  components: {
    TaskManage
  }
}
</script>
