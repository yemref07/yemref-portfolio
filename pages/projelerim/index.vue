<template>
  <div>
    <div class="container my-5 justify-content-center">
      <div class="row">
        <sectionTitle
          :title="sectionTitle"
          :subTitle="sectionSubTitle"
          :desc="sectionDesc"
        />

        <projectsCard
          v-for="item in projectsData"
          :key="item.id"
          :title="item.title"
          :image="item.image"
          :slug="computedSlug(item.title)"
          :url="item.url"
          :desc="item.desc"
          :id="item.id"
        />

      </div>
    </div>
  </div>
</template>
<script>
import projectsCard from '../../components/projects-card.vue';
import projectsData from '../../static/dummy-datas/projects.json'
import sectionTitle from '../../components/UI/section-title.vue';

export default {
    components: { projectsCard , sectionTitle},
    data() {
        return {
            projectsData: projectsData,
            sectionTitle:"My Works & Demo Projects",
            sectionSubTitle:"Works & Demos",
            sectionDesc:"Here are some of the projects I took part in the development process and web and mobile applications and that I developed for learning purposes."
        }
    },
    mounted() {

    },
    computed: {
        computedSlug() {
            //with using computed propery we achieve reactivity due to title variable and evert iteration we pass a slug value to our card compenent
            //computed propery recognize his dependencies based on the return part
            return (title) => {
                const slug = this.generateSlug(title);
                return slug;
            };
        }
    },
    methods: {
        generateSlug(title) {
            //genetaring slug due to title
            let slug = title.trim().toLowerCase();
            slug = slug.replace(/\s+/g, "-");
            slug = slug.replace(new RegExp(`[^a-z0-9${"-"}]`, 'g'), '');
            return slug;
        }
    }
}
</script>
<style lang="css">



.deneme {
  font-size: 12px;
}
</style>
