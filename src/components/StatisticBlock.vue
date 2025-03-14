<template>
    <div class="statistic-block">
      <h1>Статистика</h1>
      <img src="@/assets/statistic-chart.png" alt="График статистики" />
    </div>
  </template>
  
  <script>
  export default {
    name: "StatisticBlock",
  };
  </script>
  
  <style scoped>
  .statistic-block {
    width: 500px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  </style>