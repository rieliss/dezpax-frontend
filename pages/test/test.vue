<template>
  <div>
    <button @click="testAPI">Test API</button>
    <p>{{ result }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class TestAPI extends Vue {
  result: string = "";

  async testAPI() {
    try {
      const response = await this.$axios.$get("/products");
      this.result = JSON.stringify(response);
    } catch (error) {
      this.result = "Error: " + (error.response?.data || error.message);
    }
  }
}
</script>
