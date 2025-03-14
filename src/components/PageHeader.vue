<template>

    <header class="page-header">
      <div class="page-header__container">
        <div class="page-header__logo-wrap">
          <SvgLogo class="page-header__logo" width="284" height="141" />
        </div>

        <div class="page-header__right-block">
          <button @click="handleButtonClick">
            {{ buttonText }}
          </button>
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

  computed: {
    // Определяем текст кнопки в зависимости от текущего маршрута
    buttonText() {
      return this.$route.name === 'Profile' ? 'Выход' : 'Личный кабинет';
    },
  },
  methods: {
    handleButtonClick() {
      if (this.$route.name === 'Profile') {
        // Если мы на странице личного кабинета, переходим на главную страницу
        this.$router.push({ name: 'Home' });
      } else {
        // Иначе переходим на страницу личного кабинета
        this.$router.push({ name: 'Profile' });
      }
    },
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
    height: 136px;
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
      margin-left: auto;
      width: 243px;       /* Ширина прямоугольника */
      height: 50px;      /* Высота прямоугольника */
      background-color: none; /* Цвет фона */
      border: #00A2FF solid 3px; /* Граница (необязательно) */
      justify-content: center;
      border-radius: 50px;
      place-items: center;
      
  }

}

button{
  color: #00A2FF; /* Цвет текста кнопки */
  cursor: pointer;
  font-size: 16px;

}


</style>