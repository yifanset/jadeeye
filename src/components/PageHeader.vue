<template>
    <header class="page-header">
      <div class="page-header__container">
        <button @click="goToHome" class="page-header__logo-wrap">
          <SvgLogo class="page-header__logo" width="466" height="100" />
        </button>

        <div class="page-header__right-block">
          <buttom @click="goToHome" class="page-header__btn">
            <a class="page-header__btn-text">Главная</a>
          </buttom>

          <buttom @click="goToEntrance" class="page-header__btn">
            <a class="page-header__btn-text">Личный кабинет</a>
          </buttom>
        </div>
        
      </div>
    </header>
  </template>

<script>
import SvgLogo from "@/components/svg/SvgLogo.vue";

export default {
  components: {
    SvgLogo,
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    goToEntrance() {
      this.$router.push('/entrance')
    }
  },
};

</script>

<style lang="less">
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: @white;
  z-index: 100;
  justify-content: space-between;

  &__container {
    .container();
    height: 100px;
    display: flex;
    align-items: center;
  }

  &__logo-wrap {
    display: flex;
    align-items: center;
  }

  &__logo {
    width: 284px;
  }

  &__logo-text {
    color: @black;
    font-size: 26px;
    font-family: @font2;
    flex-direction: column;
    text-align: center;

  }

  &__logo-text-red {
    color: @dark_orange;
  }

  &__right-block{
      display: flex;
      justify-content: end;
      margin-left: auto;
      width: 500px;
      height: 100px;      
      gap: 30px;
      border-radius: 50px;
      place-items: center;
  }

  &__btn-text{
      cursor: pointer;
      color: #10AEED;
      font-size: 20px;
      font-weight: 600;
      font-family: "Open Sans", sans-serif;
  }

}



</style>