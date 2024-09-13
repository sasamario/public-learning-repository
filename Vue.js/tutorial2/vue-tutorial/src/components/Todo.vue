<script>
let id = 1;
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  watch: {
    // 対象のリアクティブなプロパティ名を関数名にする必要があるため、todos: {}としている
    todos: {
      // 通常のwatchだと、監視対象のプロパティに新しい値が割り当てられたときにしか実行できない
      // ネストしたプロパティの変更を検知する場合は、以下のようなディープウォッチャーを使用する
      handler(newTodos, oldTodos) {
        // 追加したTodoの内容をコンソールに出力している
        console.log(this.todos[this.todos.length - 1]);
      },
      deep: true,
    },
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
