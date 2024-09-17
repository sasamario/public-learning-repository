<script>
import Card from "./components/Card.vue";
import Counter from "./components/Counter.vue";
import Input from "./components/Input.vue";
import Todo from "./components/Todo.vue";
import Switch from "./components/Switch.vue";

export default {
  // コンポーネントのローカル登録
  components: {
    Card,
    Counter,
    Input,
    Todo,
    Switch,
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="row my-3">
      <div class="col">
        <!-- フォールスルー属性として、classをCardコンポーネント要素の属性に追加される -->
        <Card title="Counter" class="bg-primary-subtle">
          <Counter />
        </Card>
      </div>
      <div class="col">
        <Card title="Input" class="bg-success-subtle">
          <Input />
        </Card>
      </div>
      <div class="col">
        <Card title="Todo" class="bg-info-subtle">
          <Todo />
        </Card>
      </div>
    </div>
    <div class="row my-3">
      <div class="col">
        <Card title="Switch">
          <Switch />
        </Card>
      </div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style></style>
