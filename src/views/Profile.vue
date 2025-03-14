<template>
     <PageHeader />
    <main class="main">
        <section class="personal-account">
            <div class="personal-account__photo">
                <div class="personal-account__avatar"></div>
                <button class="button personal-account__upload-btn">Загрузить фото</button>
                <button class="button personal-account__delete-btn">Удалить</button>
            </div>

            <div class="profile-form">
                <h2 class="profile-form__title">Личный кабинет</h2>
                <form class="profile-form__form">
                    <div class="profile-form__input-row">
                        <input type="text" class="profile-form__input" placeholder="ФИО" required>
                        <input type="email" class="profile-form__input" placeholder="Email" required>
                    </div>
                    <div class="profile-form__input-row">
                        <input type="tel" class="profile-form__input" placeholder="Номер телефона" required>
                        <input type="password" class="profile-form__input" placeholder="Пароль" required>
                    </div>
                    <button type="submit" class="button profile-form__save-btn">Сохранить изменения</button>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  components: {
    PageHeader,
  },
};
</script>

<style lang="less">
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .personal-account {
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    width: 1146px;
    height: 250px;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;    
    gap: 30px;

    &__photo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__avatar {
        width: 150px;
        height: 150px;
        background: #e0e0e0;
        border-radius: 50%;
        margin-bottom: 15px;
    }

    &__upload-btn {
        background-color: #0099ff;
        color: white;
        margin-bottom: 10px;
    }

    &__delete-btn {
        background-color: #007acc;
        color: white;
    }
}

.button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }
}

.profile-form {
    width: 100%;

    &__title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    &__input-row {
        display: flex;
        gap: 20px;
        margin-bottom: 15px;
    }

    &__input {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 10px;
        outline: none;
        transition: border-color 0.3s;

        &:focus {
            border-color: #0099ff;
        }
    }

    &__save-btn {
        background-color: #0099ff;
        color: white;
        width: 100%;
        margin-top: 20px;
    }
}
</style>


