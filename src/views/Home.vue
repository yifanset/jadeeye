<template>
    <PageHeader />
   <main class="home">
        <h1 class="home__title">Lisyan - расширение,<br>анализирующее товары на<br>китайских маркетплейсах и<br>прогнозирующее их<br>востребованность в России</h1>
        <button @click="goToExternalSite" class="home__button">Попробовать бесплатно</button>
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
      goToExternalSite() {
        window.location.href = 'https://chromewebstore.google.com/category/extensions?hl=ru';
      },
    },
  };

  
  </script>
  
  
  <style lang="less">
    .home{
        .container;
        margin-top: 120px;
        text-align: center;

        &__title{
            margin-bottom: 30px;
        }

        &__button{
            width: 400px;
            height: 65px;
            background-color: #00A2FF;
            border-radius: 50px;
            color: @white;
            font-size: 20px;
        }
    }
  
  
  
  </style>