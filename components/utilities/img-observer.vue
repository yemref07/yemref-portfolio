<template>
    <div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            observer: ""
        }
    },

    props: {
        observerOptions: {
            type: String
        }
    },

    mounted() {
      const observerOptions = this.options || {};
      this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
        }
      }, observerOptions);
      //this.$el represent root element of the compenent
        this.observer.observe(this.$el);
      },

      unmounted() {
        this.observer.disconnect();
    },
}
</script>
<style lang="css"></style>