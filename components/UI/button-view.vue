<template>
  <div>
    <nuxt-link :to="link" class="btn-view" :class="{'btn-view-hover':isItHover}">
      <slot></slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-arrow-right text-green ms-1"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    isItHover:{
      type:Boolean,
      required:true
    }
  },
};
</script>
<style lang="css">
.btn-view {
  position: absolute;
  opacity: 0;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  background: white;
  line-height: 30px;
  border-bottom: 5px solid var(--ygreen);
  color: black;
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 500;
  z-index: 1;
  transition: 1s;
  border-radius: 6px;
  outline: none;
  width: max-content;
}


.btn-view-hover {
  position: absolute;
  opacity: 1;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
