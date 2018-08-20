export default {
  getTodoList(state, getters, store) {
    if(store.Search.query) {
      return state.todoList.filter(todo => todo.title.toLowerCase().indexOf(store.Search.query.toLowerCase()) !== -1);
    } else {
      return state.todoList;
    }
  }
}
