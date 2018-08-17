<template>
  <main>
    <div class="mb-5 mt-5">
      <form class="form-inline" @submit.prevent="onSubmitForm">
        <input class="form-control mr-sm-2 full-width" v-model="title" type="search" placeholder="ToDo title">
        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Add</button>
      </form>
    </div>
    <div class="list-group">
      <ToDoItem v-for="todo of todoList" :key="todo.id" :todo="todo" @delete="onDelete" @done="onToggleDone" @edit="onEdit"/>
    </div>
  </main>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import ToDoItem from "../components/ToDoItem";
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      ToDoItem,
      Logo
    },
    data() {
      return {
        title: '',
      }
    },
    computed: mapGetters({
      todoList: 'getTodoList'
    }),
    methods: {
      ...mapActions({
        addTodo: 'addTodo',
        onEdit: 'editTodo',
        toggleDone: 'toggleDone',
        deleteTodo: 'deleteTodo',
        setPrice: 'setPrice'
      }),
      onSubmitForm() {
        this.addTodo({
          title: this.title,
          done: false
        });
        this.title = '';
      },
      async onToggleDone(id) {
        let price = parseFloat(prompt('Input price', ''));
        if(!isNaN(price)) {
          await this.setPrice({ id, price });
          this.toggleDone(id);
        }

      },
      onDelete(id) {
        if(confirm('Are you sure?')) {
          this.deleteTodo(id);
        }
      }
    }
  }
</script>

<style scoped>
  .full-width {
    width: 94%
  }
</style>
