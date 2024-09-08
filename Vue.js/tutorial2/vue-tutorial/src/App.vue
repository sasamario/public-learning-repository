<script>
import Card from "./components/Card.vue";
import Counter from "./components/Counter.vue";

export default {
  // コンポーネントのローカル登録
  components: {
    Card,
    Counter,
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
        <Card title="test2" />
      </div>
      <div class="col">
        <Card title="test3" />
      </div>
    </div>
  </div>
</template>

<style></style>
