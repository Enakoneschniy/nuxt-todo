<template>
  <span class="list-group-item">
    <form class="form-inline d-flex justify-content-between">
      <div class="form-group form-check">
        <input type="checkbox" :checked="todo.done" @change.prevent="onChange" class="form-check-input" id="done">
        <span v-if="!isEdit" class="form-check-label" :class="{ 'done': todo.done }">{{ todo.title }}</span>
        <input v-else class="form-control" v-model="title" type="text">
      </div>
      <div class="form-group">
        <button v-if="!isEdit" class="btn btn-primary btn-sm mr-2" @click.prevent="onToggleEdit">Edit</button>
        <button v-else class="btn btn-success btn-sm mr-2" @click.prevent="onEdit">Save</button>
        <button type="button" @click.prevent="onDelete" class="btn btn-danger btn-sm">Delete</button>
      </div>
    </form>
  </span>
</template>

<script>
  export default {
    name: "ToDoItem",
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    created() {
      this.title = this.todo.title
    },
    data() {
      return {
        isEdit: false,
        title: ''
      }
    },
    methods: {
      onDelete() {
        this.$emit('delete', this.todo.id);
      },
      onChange() {
        this.$emit('done', this.todo.id);
      },
      onToggleEdit() {
        this.isEdit = !this.isEdit;
      },
      onEdit() {
        this.onToggleEdit();
        this.$emit('edit', {
          id: this.todo.id,
          title: this.title
        });
      }
    }
  }
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
