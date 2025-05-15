<template>


  <div class="product-list">
    <SvgArrow2 @click="goToSearch" class="back"/>

    <div class="product-list__container">
      <h1 class="product-list__title">Список товаров</h1>
      <div v-if="loading">Загрузка...</div>
      <div v-else class="flex-container">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <button @click="goToStatistics" class="button">
        <SvgArrow class="svg"/>
        <div class="text">
            Поиск
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/views/ProductCard.vue";
import SvgArrow from "@/components/svg/SvgArrow.vue";
import SvgArrow2 from "@/components/svg/SvgArrow2.vue";

export default {
  components: {
    ProductCard,
    SvgArrow,
    SvgArrow2,
  },
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  methods: {
    goToStatistics() {
      this.$router.push('/statistics');
    },
    goToSearch() {
      this.$router.push('/');
    },
  },
    
};
</script>

<style lang="less">

.product-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 900px;
  background: linear-gradient(45deg, #3BD6F5, #2CEC6C);
  color: #FFFFFF;

  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 25px;
    padding: 30px;
  }

  &__title{
    text-align: left;
    font-size: 32px;
    font-weight: 800;
    margin-left: -180px;

  }
}

.flex-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Перенос карточек на новую строку */
  gap: 16px; /* Расстояние между карточками */
  justify-content: center; /* Центрирование карточек */
}

.flex-container > * {
  flex: 1 1 calc(50% - 8px); /* Две карточки в ряд с учётом gap */
  box-sizing: border-box;
}

.button {
  background-color: #ffffff00;
  color: #fff;
  width: 14em;
  height: 3.5em;
  border: #FFFFFF 0.2em solid;
  border-radius: 20px;
  text-align: right;
  transition: all 0.6s ease;
  margin-top: 20px;
}

.button:hover {
  background-color: #3654ff;
  cursor: pointer;
}

.button .svg {
  width: 3.2em;
  margin: -8px 0 0 8px;
  position: absolute;
  display: flex;
  transition: all 0.6s ease;
}

.button:hover .svg {
  transform: translateX(5px);
}

.text {
  font-family: 'Open Sans', serif;
  margin: 0 1.5em;
  font-size: 20px;
  font-weight: 800;
}

.back{
  position: absolute;
  width: 75px;
  height: 75px;
  top: 110px;
  left: 20px;

}
</style>