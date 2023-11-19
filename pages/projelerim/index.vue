<template>
  <div>
    <div class="container my-5 justify-content-center">
      <div class="row">
        <sectionTitle
          :title="sectionTitle"
          :subTitle="sectionSubTitle"
          :desc="sectionDesc"
          class="px-3 mx-auto"
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
            sectionDesc:"I've actively contributed to the development of mostly web and mobile applications, including personal learning projects. For more details on my recent work, feel free to explore my GitHub account."
        }
    },
    mounted() {

    },
    computed: {
        computedSlug() {
            return (title) => {
                const slug = this.generateSlug(title);
                return slug;
            };
        }
    },
    methods: {
        generateSlug(title) {
            let slug = title.trim().toLowerCase();
            slug = slug.replace(/\s+/g, "-");
            slug = slug.replace(new RegExp(`[^a-z0-9${"-"}]`, 'g'), '');
            return slug;
        }
    }
}
</script>
<style lang="css">



</style>
