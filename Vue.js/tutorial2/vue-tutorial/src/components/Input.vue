<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>

<template>
  <div>
    <p class="text-center">text: {{ text }}</p>
    <div class="row">
      <input v-model="text" maxlength="15" />
    </div>
  </div>
</template>
