<template>
      <div id="app">
       <PageHeader />

        <router-view></router-view>
      </div>
</template>


<script>
 import PageHeader from '@/components/PageHeader.vue';


export default {
  name: 'App',

  components: {
    PageHeader,
  },
};
</script>

<style lang="less">
      
</style>