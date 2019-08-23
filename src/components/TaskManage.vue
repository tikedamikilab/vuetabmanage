<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done" v-on:change="toggleTaskStatus">
        {{ task.name }}
      </li>
    </ul>

    <form v-on:submit.prevent="addTask">
      <input type="task" v-model="newTaskName" placeholder="新しいタスク">
    </form>

    <button type="button" v-on:click="save">保存</button>
    <button type="button" v-on:click="restore">復元</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newTaskName: '',
    }
  },
  name: 'TaskManage',
  props: {
    msg: String
  },
  computed: {
    tasks(){
      return this.$store.state.tasks
    },
  },
  methods: {
    addTask(){
      this.$store.commit('addTask', {
        name: this.newTaskName,
      }),
      this.newTaskName = ''
    },
    toggleTaskStatus(task) {
      this.$store.commit('togleTaskState', {
        id: task.id
      })
    },
    save(){
      this.$store.dispatch('save')
    },
    restore(){
      this.$store.dispatch('restore')
    },
  },
}
</script>
