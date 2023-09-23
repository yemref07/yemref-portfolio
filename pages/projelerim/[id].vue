<!-- /products/:id -->
<template>
    <div>
        <div class="container">
            <div class="row  ">
                <div class="col-12 text-center">
                    <div class="project-title">
                        <h1>
                            <span class="contact-subtitle">My Works</span>
                        </h1>
                        <h1>{{ currentProject.title }}</h1>
                    </div>
                </div>
            </div>
            <div class="row align-items-center mb-5 pb-5">
                <div class="col-md-6">
                    <div class="img-part">
                        <img :src="currentProject.image" :alt="currentProject.title" class=" project-image ">
                        <div class="wave"></div>
                    </div>
                </div>
                <div class="col-md-6 justify-content-center align-items-center">
                    <div class="project-detail">
                        <h4>My Responsibilities and Contributions</h4>
                        <p class="contact-desc">{{ currentProject.desc }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import projectDatas from '../../static/dummy-datas/projects.json';
export default {
    data() {
        return {
            projectDatas: projectDatas,
            projectID: "",
            currentProject:"",
        }
    },


    mounted() {
        this.projectID = this.$route.query.id
        const objectKeys = Object.keys(this.projectDatas);
        const projectDatasArray = [];

        // converting it to array so we can use array find method
        for (const key of objectKeys) {
            projectDatasArray.push(this.projectDatas[key]);
        }

        this.currentProject = projectDatasArray.find((obj)=> obj.id == this.projectID);

    },

}
</script>


<style scoped>
.project-detail{
    border-left: 3px solid var(--yorange);
    padding: 15px;
}

.project-title{
    padding: 50px;
}

.project-image{
    z-index: 999;
    position: relative;
}

@media only screen and (max-width: 600px) {
    .project-title{
        padding: 20px;
    }

    .project-image{
        margin-bottom: 20px;
    }
}

@keyframes morphin {
    0% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
}

.wave {
    position: absolute;
    right: 0%;
    bottom: -5%;
    width: 100%;
    height: 110%;
    background: linear-gradient(-90deg,var(--yorange),var(--ygreen),var(--ypurple));
    border: none;
}

.wave {
    text-align: center;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morphin 10s infinite;
    margin: 0 auto;
}

.img-part{
    position: relative;
}

</style>