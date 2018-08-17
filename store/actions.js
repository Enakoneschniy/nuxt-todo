import { ADD_TODO, EDIT_TODO, TOGGLE_DONE, DELETE_TODO, SET_PRICE } from './mutation-types'

export default {
  addTodo({ commit }, todo) {
    commit(ADD_TODO, todo);
  },
  editTodo({ commit }, todo) {
    commit(EDIT_TODO, todo);
  },
  toggleDone({ commit }, id) {
    commit(TOGGLE_DONE, id);
  },
  deleteTodo({ commit }, id) {
    commit(DELETE_TODO, id);
  },
  async setPrice({ commit }, priceData) {
    commit(SET_PRICE, priceData);
    return true;
  }
}
