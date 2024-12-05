<template>
  <div class="container">
    <div v-if="product" class="row">
      <div class="col-md-6">
        <img :src="product.image" class="img-fluid" :alt="product.name" />
      </div>
      <div class="col-md-6">
        <h1>{{ product.name }}</h1>
        <p class="lead">${{ product.price.toFixed(2) }}</p>
        <p>{{ product.details }}</p>
        <p>Size: {{ product.size }}</p>
        <p>Weight: {{ product.weight }} kg</p>
        <p>SKU: {{ product.sku }}</p>
      </div>
    </div>
    <div v-else>
      <p>Product not found</p>
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
export default class ProductDetailPage extends Vue {
  product: Product | null = null;

  async asyncData({ $axios, params }: Context & { $axios: NuxtAxiosInstance }) {
    try {
      const product = await $axios.$get<Product>(`/products/${params.sku}`);
      return { product };
    } catch (error) {
      console.error("Error fetching product:", error);
      return { product: null };
    }
  }
}
</script>
