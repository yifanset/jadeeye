<template>
  <div class="main">
    <div class="search-block">
      
      <div class="input">
        <h1>Поиск товаров</h1>
        <input v-model="productName" placeholder="Название товара" />
      </div>
      <div class="input">
        <label>Цена:</label>
        <input v-model="minPrice" placeholder="От"/>
        <input v-model="maxPrice" placeholder="До" />
      </div>
      <div class="input">
        <label>Рейтинг:</label>
        <input v-model="minRating" placeholder="От" />
      </div>
      <div class="input">
        <label>Объем продаж:</label>
        <input v-model="minSales" placeholder="От" />
      </div>
      <div class="btn">
        <button @click="handleSearch">Поиск</button>
      </div>
    </div>
    
  </div>
    
  </template>
  
  <script>
  //===================================
  // Это для теста
  //===================================
  export default {
    
    data() {
      return {
        productName: '',
        minPrice: '',
        maxPrice: '',
        minRating: '',
        minSales: '',
      };
    },
    methods: {
      handleSearch() {
        const filters = {
          productName: this.productName,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          minRating: this.minRating,
          minSales: this.minSales,
        };
        this.$emit('search', filters);
      },
    },


    //===================================
    // Это рабочий
    //===================================

//     export default {
//   data() {
//     return {
//       productName: "", // Название товара
//       minPrice: "",     // Минимальная цена
//       maxPrice: "",     // Максимальная цена
//       minRating: "",    // Минимальный рейтинг
//       minSales: "",     // Минимальный объем продаж
//     };
//   },
//   methods: {
//     async handleSearch() {
//         const filters = {
//           productName: this.productName,
//           minPrice: this.minPrice,
//           maxPrice: this.maxPrice,
//           minRating: this.minRating,
//           minSales: this.minSales,
//         };
//         this.$emit('search', filters);
//       },

//       // Собираем данные из формы
//       // const searchData = {
//       //   name: this.productName,
//       //   min_price: this.minPrice ? parseFloat(this.minPrice) : null,
//       //   max_price: this.maxPrice ? parseFloat(this.maxPrice) : null,
//       //   min_rating: this.minRating ? parseFloat(this.minRating) : null,
//       //   min_sales: this.minSales ? parseInt(this.minSales) : null,
//       // };

//       // try {
//       //   // Отправляем запрос на бэкенд
//       //   const response = await fetch("http://127.0.0.1:8000/products/search", {
//       //     method: "POST",
//       //     headers: {
//       //       "Content-Type": "application/json",
//       //     },
//       //     body: JSON.stringify(searchData),
//       //   });

//       //   if (!response.ok) {
//       //     throw new Error("Ошибка при отправке запроса");
//       //   }

//       //   const data = await response.json();
//       //   console.log("Результаты поиска:", data);

//       //   // Здесь можно обработать результаты поиска (например, отобразить их на странице)
//       // } catch (error) {
//       //   console.error("Ошибка:", error);
//       // }
//     },

// };
    
  };
  </script>
  
  <style scoped>
  .btn{
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
  }
  .main{
    width: 500px;
  }

  
  label{
    text-align: left;
    color: black;
    font-size: 25px;
    margin-left: 15px;

  }
  .search-block {
    display: flex;
    flex-direction: column;
    gap: 20px; /* Отступ между элементами */
    background-color: #ffffff;
  }
  .input{
    flex-direction: column;
    display: flex;
    grid-template-columns: auto 1fr;
    margin-left: 16px;
  }
  input {
    margin: 5px;
    padding: 8px;
    width: 419px;
    height: 40px;
    border-radius: 20px;
    background-color: #d9d9d9;
    border: none;
    font-size: 25px;
    padding-left: 20px;


  }
  
  button {
    align-items: center;
    text-align: center;
    width: 140px;
    height: 65px;
    font-size: 25px;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
  button:hover {
    background-color: white;
    border: 2px solid #007bff;
    color: #007bff;

  }
  </style>