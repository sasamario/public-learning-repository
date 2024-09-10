<script>
import Card from "./components/Card.vue";
import Counter from "./components/Counter.vue";
import Input from "./components/Input.vue";
import Todo from "./components/Todo.vue";

export default {
  // コンポーネントのローカル登録
  components: {
    Card,
    Counter,
    Input,
    Todo,
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="row my-3">
      <div class="col">
        <Card title="Counter">
          <Counter />
        </Card>
      </div>
      <div class="col">
        <Card title="Input">
          <Input />
        </Card>
      </div>
      <div class="col">
        <Card title="Todo">
          <Todo />
        </Card>
      </div>
    </div>
  </div>
</template>

<style></style>
