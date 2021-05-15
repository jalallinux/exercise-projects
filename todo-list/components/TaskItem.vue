<template>
  <v-list-item v-if="task" inactive>
    <v-list-item-action>
      <v-btn icon :color="taskIconColor" @click="changeStatus">
        <v-icon v-text="taskIcon" />
      </v-btn>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title :class="`task ${task.done ? 'done' : ''}`" v-text="task.title" />
      <v-list-item-subtitle v-text="task.description" />
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon color="error" @click="remove">
        <v-icon>mdi-trash-can-outline</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "TaskItem",

  props: {
    task: {
      type: Object,
      default: null
    },
  },

  methods: {
    changeStatus() {
      this.$store.dispatch('task/done', {
        id: this.task.id, done: !this.task.done
      })
    },
    remove() {
      this.$store.dispatch('task/remove', this.task.id)
    }
  },

  computed: {
    taskIcon() {
      return this.task.done ? 'mdi-check' : 'mdi-reload-alert';
    },
    taskIconColor() {
      return this.task.done ? 'success' : 'warning'
    }
  },
}
</script>

<style scoped>
.task.done {
  text-decoration: line-through;
}
</style>
