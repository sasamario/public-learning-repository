<script>
export default {
  props: ["title"],
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        <!-- slotにサンプルコンポーネントを埋め込む -->
        <slot />
      </p>
    </div>
  </div>
</template>
