<template>
  <div class="col-12 col-sm-6 col-lg-4 text-center mt-3">
    <div
      class="project-card"
      @mouseenter="toggleHover"
      @mouseleave="toggleHover"
    >
      <img
        :src="image"
        :alt="title"
        class="project-image"
        :class="{ 'project-image-hover': isHover }"
      />
      <h2 class="project-card-title">{{ title }}</h2>

      <buttonView
        :link="{ path: `/projelerim/${slug}`, query: { id: id } }"
        :isItHover = "isHover"
      >
        View The Project
      </buttonView>
    </div>
  </div>
</template>
<script>
import buttonView from "./UI/button-view.vue";

export default {
  name: " projectsCard",
  components: {
    buttonView,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isHover: false,
    };
  },

  methods: {
    toggleHover() {
      this.isHover = !this.isHover;
    },


  },
};
</script>
<style>
.project-card {
  background-color: whitesmoke;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 40px 20px;
  position: relative;
  height: 100%;
}

.project-card-title {
  font-size: 18px;
  font-weight: 600;
  font-family: system-ui, sans-serif;
  margin-top: 20px;
}

.project-image {
  transition: 1s;
  width: 100%;
  height: auto;
}


.project-image-hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>
