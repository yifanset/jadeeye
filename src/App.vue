<template>
  <div class="app" id="app">
    <header class="header">
      <SvgLogo class="header__logo" width="292" height="91"/>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
import SvgLogo from "@/components/svg/SvgLogo.vue";


export default {
  components: {
    SvgLogo,
  },
};
</script>

<style>

body{
    margin: 0;
}

.header {
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: #ffffff;  
  width: 550px;
  height: 100px;

}

#app {
  font-family: "Open Sans", sans-serif;
  color: #2c3e50;

}


  
</style>