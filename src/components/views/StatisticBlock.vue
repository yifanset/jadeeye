<template>
    <div class="statistic-block">
      <SvgArrow2 @click="goToProductList" class="back"/>
      <div class="statistic-block__container">
        <h1 class="statistic-block__title">Статистика</h1>

        <div class="statistic-block__list">
          <div class="statistic-block__element">
            <label class="statistic-block__text">Цена закупки</label>
            <img class="statistic-block__graphic" src="@/assets/statistic-chart.png" alt="График статистики" />
          </div>

          <div class="statistic-block__element">
            <label class="statistic-block__text">Объем продаж в Китае</label>
            <img class="statistic-block__graphic" src="@/assets/statistic-chart.png" alt="График статистики" />
          </div>

          <div class="statistic-block__element">
            <label class="statistic-block__text">Объем продаж в России</label>
            <img class="statistic-block__graphic" src="@/assets/statistic-chart.png" alt="График статистики" />
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import SvgArrow2 from "@/components/svg/SvgArrow2.vue";

export default {
  name: "StatisticBlock",
  components:{
    SvgArrow2,
  },
  methods: {
    goToProductList() {
      this.$router.push('/products');
    },
  },
};
</script>

<style lang="less">

.statistic-block {
  display: flex;
  flex-direction: column;
  text-align: left;
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
    margin-left: -230px;
    font-size: 30px;
  }
  &__list{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  &__element{
    display: flex;
    flex-direction: column;
  }
  &__text{
    font-size: 25px;
  }
  &__graphic{
    margin: 20px 0;
  }

}

img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>