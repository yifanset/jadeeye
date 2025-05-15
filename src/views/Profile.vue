<template>
    <main class="main">
        <section class="personal-account">
            <div class="profile-form">
                <h2 class="profile-form__title">Личный кабинет</h2>
                <form class="profile-form__form">
                    <input type="text" class="profile-form__input" placeholder="ФИО" required>
                    <input type="email" class="profile-form__input" placeholder="Email" required>
                    <input type="tel" class="profile-form__input" placeholder="Номер телефона" required>
                    <input type="password" class="profile-form__input" placeholder="Пароль" required>
                </form>
                <div class="profile-form__actions">
                  <button class="profile-form__action-btn profile-form__action-btn--save">Сохранить изменения</button>
                  <button @click="goToEntrance" class="profile-form__action-btn profile-form__action-btn--exit">Выход</button>
                </div>
            </div>

            <div class="personal-account__photo">
                <div class="personal-account__avatar"></div>
                <button class="button personal-account__upload-btn">Загрузить фото</button>
                <button class="button personal-account__delete-btn">Удалить</button>
            </div>
        </section>
    </main>
</template>

<script>

export default {
  name: "Profile",
  methods: {
    goToEntrance() {
      this.$router.push('/entrance')
    }
  },
};
</script>

<style lang="less" scoped>
.main{
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #34CC15, #00D4FF);
    width: 100%;
}
.profile-form {
  display: flex;
  flex-direction: column;
  width: 437px;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  align-items: center;
  text-align: center;
  gap: 20px;

  &__title {
    color: #109E5F;
    font-size: 39px;
    font-weight: 800;
    margin-bottom: 20px;
    width: calc(100% - 40px); // Учитываем padding инпутов
    padding: 0 20px; // Добавляем такой же padding как у инпутов
    box-sizing: border-box; // Чтобы padding включался в ширину
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }

  &__input {
    width: 100%;
    padding: 12px 20px;
    border: 1px solid #ccc;
    background: #F1F1F1;
    box-shadow: inset 3px 3px 10px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    outline: none;
    transition: border-color 0.3s;
    font-size: 28px;
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box; // Важно: padding включается в ширину

    &:focus {
      border-color: #0099ff;
    }
}

  &__actions {
    display: flex;
    justify-content: space-between; // Равномерное распределение
    width: 100%;
    gap: 20px; // Расстояние между кнопками
    margin-top: 70px; // Отступ от предыдущих элементов
  }

  &__action-btn {
    border: none;
    font-size: 20px;
    font-weight: 800;
    font-family: "Open Sans", sans-serif;
    cursor: pointer;
    &--save {
      color: #09B7FC;
    }

    &--exit {
      color: #1DBA75;
    }
    
  }
}

.personal-account {
    display: flex;    
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    width: 1146px;
    height: 600px;
    background: #fff;
    padding: 30px;
    border-radius: 40px;
    gap: 300px;
    
    &__photo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    &__avatar {
        width: 270px;
        height: 270px;
        background: #e0e0e0;
        border-radius: 50%;
    }

    &__upload-btn {
        background-color: #23D788;
        color: white;
        width: 200px;
        height: 50px;
        font-size: 20px;
        font-weight: 600;

    }

    &__delete-btn {
        background-color: #09B7FC;
        color: white;
        font-size: 18px;
        width: 120px;
        height: 50px;
        font-weight: 600;
    }
}

.button {
    padding: 15px 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }
}


</style>


