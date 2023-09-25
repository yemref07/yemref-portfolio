<template lang="">
  <div class="bottom-menu d-block d-md-none">
    <div
      class="d-flex flex-row justify-content-between align-items-center px-3 py-2"
    >
      <div class="flex-item">
        <nuxt-link to="/">
          <img src="../public/bot-menu-icons/home2.svg" alt="" />
          <p>Home</p>
        </nuxt-link>
      </div>
      <div class="flex-item">
        <nuxt-link to="/hakkimda">
          <img src="../public/bot-menu-icons/about.svg" alt="" />
          <p>About</p>
        </nuxt-link>
      </div>
      <div class="flex-item">
        <nuxt-link to="projelerim">
          <img src="../public/bot-menu-icons/project.svg" alt="" />
          <p>Projects</p>
        </nuxt-link>
      </div>
      <div class="flex-item">
        <nuxt-link to="/iletisim">
          <img src="../public/bot-menu-icons/contact.svg" alt="" />
          <p>Contact</p>
        </nuxt-link>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="container-fluid">
      <div class="row text-center align-items-center">
        <div class="col-6">
          Copyright © {{ currentYear }} yemref. All Rights Reserved.
        </div>
        <div class="col-6">Powered By Nuxt JS</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: "",
    };
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  },
};
</script>
<style lang="css">
.footer {
  margin-top: 40px;
  background-color: black;
  color: white;
  padding: 25px;
}

.bottom-menu {
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
}

.bottom-menu img {
  width: 32px;
}

.bottom-menu a {
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}
.bottom-menu p {
  margin-bottom: 0 !important;
  text-align: center;
}

.flex-item {
  text-align: center;
}
</style>
