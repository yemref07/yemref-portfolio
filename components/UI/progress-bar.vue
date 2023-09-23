<template>
  <div>
    <div class="skill-bar">
      <span class="skill-title">{{ progressBarTitle }}</span>
      <div
        class="progress mt-2"
        role="progressbar"
        aria-label="Default striped example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar progress-bar-striped" :style="barStyle">
        {{progressBarPercent}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            barPercentage:this.progressBarPercent,
        }
    },

    props:{
        progressBarTitle:{
            type:String,
            required:true,
            default:"Some Title"
        },

        progressBarPercent:{
            type:String,
            required:true,
        }
    },

    computed: {
    barStyle() {
      return `width:${this.barPercentage}%`;
    },
}

};
</script>
<style>
.skill-bar{
    margin-top: 15px;
}

.skill-title{
    font-size: 16px;
    font-weight: 500;
}

.progress-bar {
    background-color: var(--ygreen);
}

.progress{
    font-size:0.9rem;
    height: 1.25rem;
}


</style>
