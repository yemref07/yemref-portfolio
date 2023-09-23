<template lang="">
    <div class='footer'>
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col-6">
                    Copyright © {{currentYear}} yemref. All Rights Reserved.
                </div>
                <div class="col-6">
                    Powered By Nuxt JS
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentYear:'',
        }
    },
    mounted() {
      this.currentYear =  new Date().getFullYear()
    },
}
</script>
<style lang="css">
    .footer{
        margin-top:40px;
        background-color:black;
        color: white;
        padding: 25px;
    }
</style>