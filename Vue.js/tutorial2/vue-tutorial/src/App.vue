<script>
import Card from "./components/Card.vue";

export default {
  // コンポーネントのローカル登録
  components: {
    Card,
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="row my-3">
      <div class="col">
        <Card title="test" />
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
