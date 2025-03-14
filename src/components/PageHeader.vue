<template>
  <header class="header">
    <SvgLogo class="header__logo" width="60" height="60"/>
    <h1 class="title">{{ title }}</h1>
    <hr class="divider" />
  </header>
</template>

<script>
import SvgLogo from "@/components/svg/SvgLogo.vue";

export default {
  components: {
    SvgLogo,
  },
  data() {
    return {
      title: 'Lisyan', // Название расширения
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  color: black;
  
  /* border-bottom: 2px solid #0056b3; */
}
.header__logo{
  width: 60px;
  margin-left: 20px;
}

.title {
  margin-left: 15px;
  font-size: 40px;
  font-weight: bold;
}
.divider {
  border: none;
  height: 2px;
  background-color: #0056b3; /* Цвет линии */
  margin: 10
}
</style>