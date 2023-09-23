<template lang="">
    <div>
        <div class="skill-card">
              <img :src="imgSource" :alt="title" :width="size">
              <h3 class="skill-title">{{title}}</h3>
              <p class="skill-desc"> 
                {{desc}}
              </p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },

        desc: {
            type: String,
            required: true
        },

        imgSource: {
            type: String,
            required: true
        },

        size: {
            type: Number,
            required: true
        }
    }
}
</script>
<style lang="css" scoped>
.skill-title {
    margin-bottom: 10px;
    margin-top: 15px;
    font-size: 24px;
    text-align: center;
}

.skill-desc {
    padding: 15px;
    font-size: 16px;
    line-height: 30px;
    color: var(--muted);
    font-weight: 400;
}
</style>