<template>
  <div class="container py-5 product-list">
    <h1 class="text-center mb-5">Our Products</h1>
    <div v-if="$fetchState.pending" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="$fetchState.error" class="alert alert-danger" role="alert">
      Error: {{ $fetchState.error.message }}
    </div>
    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="product in products" :key="product.sku" class="col my-2">
        <div class="card h-100 shadow-sm">
          <img :src="product.image" class="card-img-top" :alt="product.name" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.details }}</p>
            <p class="card-text">
              <small class="text-muted">Size: {{ product.size }}</small>
            </p>
            <div
              class="mt-auto d-flex justify-content-between align-items-center"
            >
              <span class="h5 mb-0">${{ product.price.toFixed(2) }}</span>
              <nuxt-link
                :to="`/product/${product.sku}`"
                class="btn btn-primary"
              >
                View Details
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  async fetch() {
    try {
      this.products = await this.$axios.$get("/api/products");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
};
</script>

<style scoped>
.product-list {
  font-family: "Roboto Mono", monospace;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

h1,
.card-title {
  font-weight: 700;
}

.btn {
  font-family: "Roboto Mono", monospace;
}
</style>
