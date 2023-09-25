<template>
  <div>
    <div class="col-12 text-center mb-5 pad-5" :class="customStyle">
      <h1>
        <span class="contact-subtitle">{{subTitle}}</span>
      </h1>
      <h1 class="section-title">{{ title }}</h1>
      <p class="text-muted contact-desc" v-if= "desc && desc.length > 0">
      {{desc}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },

    props:{
        title:{
            type:String,
            required:true,
        },

        subTitle:{
            type:String,
            required:true
        },

        desc:{
            type:String,
            required:false,
            default:"",
        },

        customStyle:{
            type:String,
            default:"",
            required:false
        }
        

        
    }
};
</script>
<style lang="css">
.contact-subtitle {
    font-size: 16px;
    padding: 5px 10px;
    background-color: var(--ypurple);
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';

}

.section-title{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
}

.contact-desc {
    font-size: 17px;
    line-height: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
    color: var(--bs-secondary-color)!important;
    font-weight: 500;
    margin-left: 30px;
    margin-right: 30px;

}

@media only screen and (max-width: 600px) {
	.contact-desc{
        margin-left: 5px;
        margin-right: 5px;
    }
}


</style>
