<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card max-width="475" class="mx-auto">
        <v-toolbar dark color="teal">
          <v-app-bar-nav-icon>
            <v-icon>mdi-beaker-check</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>To Do List</v-toolbar-title>
          <v-spacer />
          <AddTaskForm />
        </v-toolbar>
        <v-list>
          <v-subheader>In Progress Tasks</v-subheader>
          <v-list-item-group multiple>
            <TaskItem v-for="(task, i) in pendingTasks" :key="i" :task="task" />
          </v-list-item-group>
          <v-subheader>Done Tasks</v-subheader>
          <v-list-item-group multiple>
            <TaskItem v-for="(task, i) in doneTasks" :key="i" :task="task" />
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TaskItem from "~/components/TaskItem";
import AddTaskForm from "~/components/AddTaskForm";
import {mapGetters} from "vuex";
export default {
  name: "index",
  components: {AddTaskForm, TaskItem},

  mounted() {
      this.$store.dispatch('task/init')
  },

  computed: {
    ...mapGetters({
      doneTasks: 'task/doneTasks',
      pendingTasks: 'task/pendingTasks',
    }),
  },
}
</script>

<style>
</style>
