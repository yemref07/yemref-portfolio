<template lang="">
    <div>
        <a class="btn btn-download hvr-shutter-in-horizontal" :href='source' download type="button">
          <slot></slot>
        </a>     
    </div>
</template>
<script>
export default {
    props:{
        source:{
            type:String,
            required:true
        }
    }
}
</script>
<style lang="css">
    .btn-download {
        color: white;
        font-weight: 500;
        border: none;
        padding: 10px 30px;
        margin-left: 30px;
        cursor: url(/cursor.svg), url(/cursor.png), auto !important;
    }
</style>