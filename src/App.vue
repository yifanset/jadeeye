<template>
  <div id="app">
    <PageHeader/>
    <SearchBlock @search="showProductList" />
    <ProductList v-if="showProducts" ref="productList" @show-statistics="showStatistics"/>
    <StatisticBlock v-if="showStatisticsBlock" />
  </div>
</template>

<script>
import SearchBlock from "@/components/SearchBlock.vue";
import ProductList from "@/components/ProductList.vue";
import PageHeader from "@/components/PageHeader.vue";
import StatisticBlock from "@/components/StatisticBlock.vue";

export default {
  components: {
    PageHeader,
    SearchBlock,
    ProductList,
    StatisticBlock,
  },
  data() {
    return {
      showProducts: false,
      showStatisticsBlock: false,
    };
  },
  methods: {
    showProductList() {
      this.showProducts = true;
      this.showStatisticsBlock = false; // Скрываем StatisticBlock при показе ProductList
    },
    showStatistics() {
      this.showStatisticsBlock = !this.showStatisticsBlock; // Переключаем видимость StatisticBlock
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

h2{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: black;
    font-size: 30px;

  }

  h1{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: left;
    margin-left: 15px;
    color: black;
    font-size: 30px;
  }
  p{
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  a{
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
</style>