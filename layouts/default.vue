<template>
    <Head>
      <Title>Yunus Emre Fersiz</Title>
    </Head>
    <TheHeader />
    <div>
        <slot />
    </div>
    <TheFooter />
</template>

<script>
import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';

export default {
    components: {
        TheFooter,
        TheHeader
    }
};
</script>
<style lang="">
    
</style>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}


</style>