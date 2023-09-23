<template>
    <div class=" col-6 col-sm-4 text-center mt-3">
        <div class="project-card">
            <img :src="image" :alt="title" class="project-image">
            <h2 class="project-card-title">{{ title }}</h2>
            
            <!-- <nuxt-link :to="{ path: `/projelerim/${slug}`, query: { id: id } }" class="btn-view">
                View The Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-arrow-right text-green ms-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </nuxt-link> -->

                <buttonView :link="{ path: `/projelerim/${slug}`, query: { id: id } }">
                    View The Project
                </buttonView>
        </div>
    </div>
</template>
<script>
import buttonView from './UI/button-view.vue';

export default {  
    name: " projectsCard",
    components:{
        buttonView
    },
    props: {
        id: {
            type: Number,
            required: true
        },

        title: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: false,
        },

        image: {
            type: String,
            required: true
        },

        slug: {
            type: String,
            required: true
        },

    }
}
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

.project-card:hover {
  .btn-view {
    position: absolute;
    opacity: 1;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .project-image {
    transform: scale(1.1);
    transition: 1s;
  }
  
}

</style>