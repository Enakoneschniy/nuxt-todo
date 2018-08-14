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
  import uuid from "uuid/v4";

  function getTodos(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: uuid(),
            done: true,
            title: 'ToDo title 1'
          },
          {
            id: uuid(),
            done: false,
            title: 'ToDo title 2'
          },
          {
            id: uuid(),
            done: false,
            title: 'ToDo title 3'
          },
          {
            id: uuid(),
            done: true,
            title: 'ToDo title 4'
          }]);
      }, ms);
    });
  }

  export default {
    components: {
      ToDoItem,
      Logo
    },
    data() {
      return {
        title: ''
      }
    },
    async asyncData() {
      const todoList = await getTodos(500);
      return { todoList };
    },
    methods: {
      onSubmitForm() {
        this.todoList.push({
          id: uuid(),
          title: this.title,
          done: false
        });
        this.title = '';
      },
      onDelete(id) {
        if(confirm('Are you sure?')) {
          this.todoList = this.todoList.filter(todo => todo.id !== id);
        }
      },
      onToggleDone(id) {
        this.todoList = this.todoList.map(todo => {
          if(todo.id === id) {
            todo.done = !todo.done;
          }
          return todo;
        });
      },
      onEdit(newTodo) {
        this.todoList = this.todoList.map(todo => {
          if(todo.id === newTodo.id) {
            todo.title = newTodo.title;
          }
          return todo;
        });
      }
    }
  }
</script>

<style scoped>
  .full-width {
    width: 94%
  }
</style>
