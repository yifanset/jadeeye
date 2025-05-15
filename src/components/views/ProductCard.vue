<template>
  <main class="main">
    <div class="product-card">
    <h2>{{ product.name }}</h2>
    <p>Цена: {{ product.price }} руб.</p>
    <p>Рейтинг: {{ product.rating }}</p>
    <a :href="product.link" target="_blank">Перейти к товару</a>
    </div>
  </main>
  
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  justify-content: center; 
  border: 1px solid #ccc;
  padding: 16px; 
  border-radius: 8px;
  text-align: center;
  width: 184px;
  height: 184px;
  
}
</style>