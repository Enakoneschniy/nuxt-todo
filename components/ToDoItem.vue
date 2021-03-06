<template>
  <span class="list-group-item">
    <form class="form-inline d-flex justify-content-between">
      <div class="form-group form-check">
        <input type="checkbox" :checked="todo.done" @change.prevent.stop="onChange" class="form-check-input" id="done">
        <no-ssr>
          <div>
            <span v-if="!isEdit && isMobile()" class="form-check-label ml-3"
                :class="{ 'done': todo.done, 'not-done': !todo.done }">{{ todo.title | truncate(15, '...') }}</span>
            <span v-if="!isEdit && !isMobile()" class="form-check-label ml-3"
                :class="{ 'done': todo.done, 'not-done': !todo.done }">{{ todo.title }}</span>
            <input v-else-if="isEdit" class="form-control" v-model="title" type="text">
          </div>
        </no-ssr>
      </div>
      <div class="form-group">
        <span class="mr-5" v-if="!isEdit"><strong>{{ todo.price }} UAH</strong></span>
        <input v-else class="form-control" v-model="price" type="text">
        <button v-if="!isEdit" class="btn btn-primary btn-sm mr-2" @click.prevent="onToggleEdit">Edit</button>
        <button v-else class="btn btn-success btn-sm mr-2" @click.prevent="onEdit">Save</button>
        <button type="button" @click.prevent="onDelete" class="btn btn-danger btn-sm">Delete</button>
      </div>
    </form>
  </span>
</template>

<script>
  import mobileMixin from '../mixins/mobile'

  export default {
    name: "ToDoItem",
    mixins: [mobileMixin],
    props: {
      todo: {
        type: Object,
        required: true,
      }
    },
    created() {
      this.title = this.todo.title;
      this.updateTodo();
    },
    updated() {
      this.updateTodo();
    },
    data() {
      return {
        isEdit: false,
        title: '',
        price: 0
      }
    },
    methods: {
      updateTodo() {
        this.price = this.todo.price;
      },
      onDelete() {
        this.$emit('delete', this.todo.id);
      },
      onChange() {
        event.target.checked = this.todo.done;
        if (this.todo.done === false) {
          this.$emit('done', this.todo.id);
        }
      },
      onToggleEdit() {
        this.isEdit = !this.isEdit;
      },
      onEdit() {
        this.onToggleEdit();
        this.$emit('edit', {
          id: this.todo.id,
          title: this.title,
          price: this.price
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
