<template>
    <div class="sticky-github d-none d-sm-block">
        <div class="sticky-inner">
          <div class="d-flex flex-column align-items-center justify-content-center gap-2">
            <a href="https://github.com/yemref07" target="_blank">
              <img src="/social-icons/github-mark-white.svg" alt="" width="40">
            </a>
            <a href="https://github.com/yemref07" target="_blank">
              My Github
            </a>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.sticky-github{
  position: fixed;
  top: 50%;
  right: 0;
  padding: 5px;
  z-index: 1000;
}
.sticky-inner{
    background: #f73800;
    padding: 10px;
    font-size: 14px;
    color: white;
    border-radius: 10px;
}
.sticky-inner a{
  text-decoration: none;
  color: white;
}
</style>