<template>
  <div class="container py-5 product-detail">
    <div v-if="$fetchState.pending" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="$fetchState.error" class="alert alert-danger" role="alert">
      Error: {{ $fetchState.error.message }}
    </div>
    <div v-else-if="product" class="row">
      <div class="col-md-6 mb-4">
        <img
          :src="product.image"
          class="img-fluid rounded shadow"
          :alt="product.name"
        />
      </div>
      <div class="col-md-6">
        <h1 class="mb-3">{{ product.name }}</h1>
        <p class="lead fw-bold text-primary mb-4">
          ${{ product.price.toFixed(2) }}
        </p>
        <div class="mb-4">
          <h5 class="mb-3">Product Details</h5>
          <p>{{ product.details }}</p>
        </div>
        <div class="mb-4">
          <h5 class="mb-3">Specifications</h5>
          <ul class="list-unstyled">
            <li><strong>Size:</strong> {{ product.size }}</li>
            <li><strong>Weight:</strong> {{ product.weight }} kg</li>
            <li><strong>SKU:</strong> {{ product.sku }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-warning" role="alert">Product not found</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  async fetch() {
    try {
      this.product = await this.$axios.$get(
        `/api/products/${this.$route.params.sku}`
      );
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  },
};
</script>

<style scoped>
.product-detail {
  font-family: "Roboto Mono", monospace;
}

.img-fluid {
  max-height: 400px;
  width: 100%;
  object-fit: contain;
}

h1,
h5 {
  font-weight: 700;
}

.btn {
  font-family: "Roboto Mono", monospace;
}
</style>
