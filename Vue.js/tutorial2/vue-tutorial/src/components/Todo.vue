<script>
let id = 1;
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    add(newTodo) {
      if (newTodo !== "") {
        this.todos.push({
          id: id++,
          text: newTodo,
        });
      }
      this.newTodo = "";
    },
  },
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-8">
        <input v-model="newTodo" maxlength="15" />
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-primary" @click="add(newTodo)">
          追加
        </button>
      </div>
    </div>
    <div class="row mt-3">
      <ul class="list-group" v-if="todos.length > 0">
        <li v-for="todo in todos" :key="todo.id" class="list-group-item">
          {{ todo.id }}： {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
