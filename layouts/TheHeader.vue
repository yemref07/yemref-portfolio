<template lang="">
  <div class="">
    <div class="container-fluid top-header p-2">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="flex-item d-flex">
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-envelope text-light"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                />
              </svg>
              <a href="mailto:yunus.fersiz@gmail.com" class="text-light ms-2" title="Yunus Emre Fersiz Email"
                >yunus.fersiz@gmail.com</a
              >
            </div>

            <div class="ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-telephone text-light"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <a href="tel:+905344997652" class="text-light ms-2" title="Yunus Emre Fersiz Telefon"
                >05344997652</a
              >
            </div>
          </div>

          <div class="flex-item">
            <a href="https://github.com/yemref07" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-github text-light"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
            <a
              href="https:linkedin.com/in/yunus-emre-fersiz-91499b178"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-linkedin text-light ms-3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>

    <div class="w-100 bg-light main-menu">
      <div class="container-fluid">
        <div
          class="d-none d-md-flex flex-row justify-content-between align-items-baseline py-3"
        >
          <div class="flex-item">
            <nuxt-link to="/">
              <img
                src="/logo.png"
                alt="Yunus Emre Fersiz"
                class="header-logo"
              />
            </nuxt-link>
          </div>
          <div class="flex-item">
            <ul class="d-flex flex-row">
              <li>
                <nuxt-link to="/" class="nav-link">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/hakkimda" class="nav-link" title="Hakkımda"
                  >About Me</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="/projelerim"
                  class="nav-link"
                  title="Çalışmalarım"
                  >My Works</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/iletisim" class="nav-link" title="İletişim"
                  >Contact</nuxt-link
                >
              </li>
     
              <li>
                <buttonDownload source="/cv-tr.pdf">
                  Donwload CV
                </buttonDownload>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex d-md-none justify-content-between">
          <div class="flex-item">
            <nuxt-link to="/" title="Anasayfa">
              <img
                src="/logo.png"
                alt="Yunus Emre Fersiz"
                class="header-logo"
              />
            </nuxt-link>
          </div>
          <div class="flex-item">
            <img
              src="/icons/menu-icon.svg"
              alt="Mobile Menu Icon"
              width="40"
              @click="toggleMenu"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="mobile-menu"
      :class="[isVisible ? 'd-mobile-show' : 'd-mobile-none']"
    >
      <div class="d-flex justify-content-between">
        <div class="flex-item">
          <div class="mobile-logo">
            <span class="mobile-menu-title">Yunus Emre</span>
          </div>
        </div>
        <div class="flex-item mobile-menu-close" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-x-lg text-light"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
            />
          </svg>
        </div>
      </div>

      <div class="d-flex flex-column mt-4">
        <div class="menu-item">
          <nuxt-link to="/" title="Home Page">Home</nuxt-link>
        </div>
        <div class="menu-item">
          <nuxt-link to="/hakkimda" title="Yunus Emre Fersiz Hakkında"> About </nuxt-link>
        </div>
        <div class="menu-item">
          <nuxt-link to="/projelerim" title="Yunus Emre Fersiz Çalışmaları"> My Works </nuxt-link>
        </div>
        <div class="menu-item">
          <nuxt-link to="/iletisim" title="Yunus Emre Fersiz İletişim"> Contact </nuxt-link>
        </div>
      </div>

      <div class="d-flex just align-items">
        <div class="social-item">
          <a href="/" target="_blank" title="Yunus Emre Fersiz Twitter">
            <img
              src="/social-icons/twitter.svg"
              alt="Yunus Emre Fersiz Twitter"
            />
          </a>
        </div>
        <div class="social-item">
          <a href="https://wa.me/5344997652" target="_blank" title="Yunus Emre Fersiz WhatsApp">
            <img
              src="/social-icons/whatsapp.svg"
              alt="Yunus Emre Fersiz WhatsApp"
            />
          </a>
        </div>
        <div class="social-item">
          <a href="https://www.linkedin.com/in/yunus-emre-fersiz-91499b178/" target="_blank" title="Yunus Emre Fersiz Linkedin">
            <img
              src="/social-icons/linkedin.svg"
              alt="Yunus Emre Fersiz Linkedin"
            />
          </a>
        </div>
        <div class="social-item">
          <a href="https://github.com/yemref07" target="_blank" title="Yunus Emre Fersiz Github">
            <img
              src="/social-icons/github.svg"
              alt="Yunus Emre Fersiz Github Profil"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import buttonDownload from "../components/UI/button-download.vue";

export default {
  data() {
    return {
      isVisible: false,
      enabled: false,
    };
  },
  components: {
    buttonDownload,
  },

  methods: {
    toggleMenu() {
      this.isVisible = !this.isVisible;
    },
    closeMenu() {
      this.isVisible = false;
    },
  },

  watch: {
    $route: {
      handler() {
        this.closeMenu();
      },
    },
  },
};
</script>
<style lang="css" scoped>
.top-header {
  background-color: #000000;
  font-family: rubik, serif;
}

a {
  text-decoration: none;
}

.nav-link {
  color: black;
  margin-right: 20px;
  font-size: 22px;
  font-weight: 500;
  padding: 0.5rem;
  font-family: "Edo SZ TR","Poppins";
  cursor: url(/cursor.svg), url(/cursor.png), auto !important;
}

.nav-link:hover {
  color: var(--yorange);
}

ul li {
  list-style: none !important;
}

.d-mobile-show {
  right: 0px;
  transition: right 0.4s ease-in-out 0s;
  -webkit-transition: right 0.4s ease-in-out 0s;
  -moz-transition: right 0.4s ease-in-out 0s;
  -o-transition: right 0.4s ease-in-out 0s;
}

.d-mobile-none {
  right: -520px;
  transition: right 0.4s ease-in-out 0s;
  -webkit-transition: right 0.4s ease-in-out 0s;
  -moz-transition: right 0.4s ease-in-out 0s;
  -o-transition: right 0.4s ease-in-out 0s;
}

.mobile-menu {
  background: #000000;
  padding: 80px 40px 70px 60px;
  z-index: 1050;
  display: block;
  height: 100%;
  overflow: auto;
  position: fixed;
  font-size: 18px;
  top: 0;
  width: 100%;
  max-width: 520px;
  position: fixed;
  overflow-y: auto;
}

.menu-item {
  padding: 10px 10px;
  font-weight: bold;
}

.menu-item a {
  color: white;
  text-decoration: none;
  font-family: "Edo SZ TR";
}

.mobile-menu-title {
  font-size: 24px;
  font-family: "Edo SZ TR";
  color: white;
}

.close-btn {
  overflow: visible;
}

.mobile-menu-close {
  overflow: hidden;
}

.social-item {
  margin-right: 10px;
  margin-top: 40px;
}

.main-menu {
  padding-left: 75px;
  padding-right: 75px;
}

.header-logo {
  width: 300px;
}

@media only screen and (max-width: 1200px) {
  .main-menu {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media only screen and (max-width: 992px) {
  .main-menu {
    padding-left: 30px;
    padding-right: 30px;
  }

  .nav-link {
    margin-right: 10px;
    font-size: 16px;
  }

  .header-logo {
    width: 250px;
  }
}

@media only screen and (max-width: 768px) {
  .main-menu {
    padding-left: 10px;
    padding-right: 10px;
    padding: 20px;
  }

  .header-logo {
    width: 200px;
  }

  .top-header {
    display: none;
  }
}
</style>
