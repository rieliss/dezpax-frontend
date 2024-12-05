<!-- pages/index.vue -->
<template>
  <div class="container">
    <h1 class="my-4">Products</h1>
    <div class="row">
      <div v-for="product in products" :key="product.sku" class="col-md-4 mb-4">
        <div class="card">
          <img :src="products.image" class="card-img-top" :alt="product.name" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">${{ product.price.toFixed(2) }}</p>
            <nuxt-link :to="`/product/${product.sku}`" class="btn btn-primary"
              >View Details</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

interface Product {
  sku: string;
  name: string;
  image: string;
  price: number;
  details: string;
  size: string;
  weight: number;
}

@Component
export default class ProductsPage extends Vue {
  products: Product[] = [];

  async asyncData({ $axios }: Context & { $axios: NuxtAxiosInstance }) {
    try {
      const products = await $axios.$get<Product[]>("/products");
      console.log(products);
      return { products };
    } catch (error) {
      console.error("Error fetching products:", error);
      return { products: [] };
    }
  }
}
</script>
