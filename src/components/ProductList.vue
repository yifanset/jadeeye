<template>
  <div class="product-list">
    <h1>Список товаров</h1>
    <div v-if="loading">Загрузка...</div>
    <div v-else class="flex-container">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="btn">
      <button @click="handleShowStatistics">Cтатистика</button>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import products from "@/data/products.json"; // Импортируем локальный JSON

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  methods: {

    //=========================
    //Связка с backend
    //=========================

    // async fetchProducts() {
    //   this.loading = true;
    //   try {
    //     // Запрос данных с бэкенда
    //     const response = await fetch("https://your-backend-api.com/products");
    //     this.products = await response.json();
    //   } catch (error) {
    //     console.error("Ошибка при загрузке данных:", error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },


    //=========================
    // Локальный сервер
    //=========================

    fetchProducts() {
      this.loading = true;
      // Используем данные из локального JSON
      this.products = products;
      this.loading = false;
    },
    handleShowStatistics() {
      this.$emit("show-statistics"); // Emit события для родительского компонента
    },
    },

    
    mounted() {
     // Загружаем данные при монтировании компонента
      this.fetchProducts();
    },

    
};
</script>

<style scoped>
.btn{
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
.product-list {
  /* text-align: center; */
  align-items: center;
  justify-content: center;
  width: 500px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap; /* Перенос карточек на новую строку */
  gap: 16px; /* Расстояние между карточками */
  justify-content: center; /* Центрирование карточек */
  max-width: 500px; /* Ограничиваем ширину контейнера */
  /* margin: 0 auto;  */
  margin-left: 5px;
}

.flex-container > * {
  flex: 1 1 calc(50% - 8px); /* Две карточки в ряд с учётом gap */
  box-sizing: border-box;
}

button {
    align-items: center;
    text-align: center;
    width: 200px;
    height: 65px;
    font-size: 25px;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
  button:hover {
    background-color: white;
    border: 2px solid #007bff;
    color: #007bff;
  }
</style>