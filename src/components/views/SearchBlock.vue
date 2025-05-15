<template>
  <div class="search-block">
    <div class="search-block__container">
      <div class="search-block__input">
        <h1 class="search-block__name">Название товара</h1>
        <input v-model="productName" placeholder="Спросить у JadeEye" />
      </div>
      <div class="search-block__input">
        <label>Цена, ₽</label>
        <div class="search-block__row">
          <input class="search-block__input-row" v-model="minPrice" placeholder="От:"/>
          <input class="search-block__input-row" v-model="maxPrice" placeholder="До:" />
        </div>
      </div>

      <div class="search-block__input">
        <label class="raiting">Рейтинг товара</label>
      </div>
        <StarSlider/>

      <div class="search-block__input">
        <label>Объем продаж</label>
        <input v-model="minSales" placeholder="От" />
      </div>
      <button @click="goToProductList" class="button">
        <SvgArrow class="svg"/>
        <div class="text">
            Поиск
        </div>
      </button>    
    </div>
  </div>
</template>
  
<script>
import SvgArrow from "@/components/svg/SvgArrow.vue";

import StarSlider from "@/components/StarSlider.vue";

export default {
  components:{
    SvgArrow,
    StarSlider,
  },
  methods: {
    goToProductList() {
      this.$router.push('/products');
    },
  },
  
};
</script>
  
<style lang="less" scoped>
.search-block{
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 900px;
  background: linear-gradient(45deg, #3BD6F5, #2CEC6C);
  color: #FFFFFF;
  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 25px;
    padding: 30px;

  }
  &__input{
    display: flex;
    flex-direction: column;
    grid-template-columns: auto 1fr;
  }
  &__row{
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  &__input-row{
    width: 180px;
  }
  &__btn{
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
  }
}

label{
  text-align: left;
  font-size: 25px;
  margin-left: 10px;
  font-weight: 600;
}

h1{
  margin-left: 10px;
  margin-bottom: 5px;
}
.raiting{
  margin-left: -220px;
}

input {
  font-family: 'Open Sans', serif;
  margin: 5px;
  padding: 8px;
  width: 410px;
  height: 50px;
  border-radius: 20px;
  background-color: #FFFFFF;
  color: #818181;
  border: none;
  font-size: 25px;
  padding-left: 20px;
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
</style>