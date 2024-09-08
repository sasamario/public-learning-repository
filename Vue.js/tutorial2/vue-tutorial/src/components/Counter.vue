<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<template>
  <div>
    <p class="text-center">{{ count }}</p>
    <div class="row">
      <button class="col mx-1 btn btn-primary" @click="increment()">
        increment
      </button>
      <button class="col mx-1 btn btn-primary" @click="decrement()">
        decrement
      </button>
    </div>
  </div>
</template>
