<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<template>
  <div>
    <div class="row form-check form-switch mx-4">
      <input
        v-model="isShow"
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
      />
      <label
        v-show="isShow"
        class="form-check-label"
        for="flexSwitchCheckChecked"
        >^ - ^ 「Hello World」</label
      >
    </div>
  </div>
</template>
