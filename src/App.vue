<template>
  <TheHeader />
  
  <MainView></MainView>
    
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import MainView from '@/components/MainView.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    MainView
  }
}
</script>

<style>

</style>
