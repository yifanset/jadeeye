<template  >
    <PageHeader />
    
    <div class="background">
      <div class="triangle-left"></div>
      <div class="bar-top"></div>
      <div class="triangle-right1"></div>
      <div class="triangle-right2"></div>
      <div class="bar-bottom"></div>
    </div>

    <main class="home">
      <section class="home__main">
        <h1>
          Анализируем товары<br />
          на <span class="highlight">китайских маркетплейсах</span><br />
          и прогнозируем<br />
          их <span class="highlight">востребованность в России</span>
        </h1>
        <button @click="goToStore">
          Попробовать бесплатно
        </button>
      </section>
    </main>
    

</template>
  
  <script>
  import PageHeader from '@/components/PageHeader.vue';
  export default {
    name: "Home",

    components: {
    PageHeader,
    },

    methods: {
      goToStore() {
        window.location.href = 'https://chromewebstore.google.com/category/extensions?hl=ru';
      },

    },
  };

  
  </script>
  
  
<style lang="less" scoped>
  .home{
    display: flex;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    position: relative;
    &__main{
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      z-index: 1;
    }
    
  }
  h1 {
    font-size: 48px;
    line-height: 60px;
    font-weight: 700;
    color: #000;
  }

  .highlight {
    color: #08A525;
  }
  button {
    width: 350px;
    padding: 20px 30px;
    background-color: #36B5FF;
    color: #FFFFFF;
    border: none;
    border-radius: 30px;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }


  .background {
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -100;
    overflow: hidden;
  }
  .triangle-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    width: 500px;
    height: 650px;
    background: linear-gradient(to bottom, #42C346, #42C548);
    clip-path: polygon(0% 0, 0 100%, 100% 0%);
    z-index: -1;
  }

  .bar-top {
    position: absolute;
    top: 40px;
    left: 300px;
    width: 70%;
    height: 120px;
    background: linear-gradient(to right, #6DDA74, #5DE090);
    transform: rotate(0deg);
    z-index: -2;
  }
  .bar-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(to right, #69DB7A, #50E6AA);
    transform: rotate(0deg);
    z-index: -2;
  }

  .triangle-right1 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 700px;
    background: linear-gradient(to bottom, #6BD9CC, #5DE6F5);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    z-index: -1;
  }

  .triangle-right2{
    position: absolute;
    bottom: 0;
    right: 150px;
    width: 150px;
    height: 350px;
    background: linear-gradient(to bottom, #24DEA4, #26DD9E);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    
    z-index: -1;
  }



</style>