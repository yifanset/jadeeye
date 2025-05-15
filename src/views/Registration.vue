<template>
    <main class="main">
        <div class="registration">
            <div class="registration__title">
                <h2 class="registration__text">Регистрация</h2>
                <div class="registration__line"></div>
            </div>
            
            <form class="registration__form">
                <input type="email" class="registration__input" placeholder="Email" required>
                <input type="password" class="registration__input" placeholder="Пароль" required>
                <input type="password" class="registration__input" placeholder="Повторите пароль" required>
            </form>

            <button @click="goToProfile" class="registration__btn">
                Далее
            </button>
        </div>

        <button @click="goToEntrance" class="main__bottom-text">
            Уже есть аккаунт?
        </button>
    </main>
</template>

<script>

export default {
  name: "Registration",
  methods: {
      goToEntrance(){
        this.$router.push('/entrance')
      },
      goToProfile() {
        this.$router.push('/profile')
      }
    }

};


</script>

<style lang="less" scoped>
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #34CC15, #00D4FF);
    overflow: hidden;
    width: 100%;
    height: 100vh;
    &__bottom-text{
        padding: 15px 10px;
        margin-top: 10px;
        color: #FFFFFF;
        font-family: "Open Sans", sans-serif;
        font-size: 26px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.registration {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 581px;
  height: 570px;
  background: #fff;
  padding: 30px;
  border-radius: 30px;
  gap: 20px;

  &__text {
    font-family: 'Inter', sans-serif;
    color: #000000;
    font-size: 50px;
    font-weight: 400;
    margin-bottom: 20px;
    width: 100%;
    box-sizing: border-box; // Чтобы padding включался в ширину
  }

  &__line{
    width: 400px;
    height: 5px;
    content: '';
    background: linear-gradient(to right, #4DC93D, #3BD6F5);
    margin-bottom: 40px;
  }


  &__form {
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 42px;
  }

  &__input {
    width: 100%;
    padding: 12px 20px;
    background: #F1F1F1;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 26px;
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box; // Важно: padding включается в ширину
 }

 &__btn{
    margin-top: 30px;
    width: 233px;
    height: 51px;
    padding: 15px 10px;
    border-radius: 40px;
    background-color: #00B6FE;
    color: #FFFFFF;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
 }

}




</style>


