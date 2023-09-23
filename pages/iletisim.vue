<template>
  <div class="contact">
    <div class="container mt-3">
      <div class="row">
        <sectionTitle
          title="Keep In Touch"
          subTitle="Contact Me"
          desc="Please contact me for any job offers or suggestions and opinions about my work"
        />

        <div class="col-md-5">
          <div class="d-flex mt-3">
            <div class="flex-item">
              <div class="i-location-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-geo-alt i-location"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                  />
                  <path
                    d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
              </div>
            </div>

            <div class="flex-item">
              <h3 class="info-title">Address</h3>
              <p class="contact-info">Somewhere in world</p>
            </div>
          </div>

          <div class="d-flex mt-3">
            <div class="flex-item">
              <div class="i-phone-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-telephone-fill i-phone"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </div>
            </div>

            <div class="flex-item">
              <h3 class="info-title">Phone</h3>
              <p class="contact-info">
                <a href="tel: +905344997652">
                  +90 534 499 76 52
                </a>
              </p>
            </div>
          </div>

          <div class="d-flex mt-3">
            <div class="flex-item">
              <div class="i-email-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-envelope-fill i-email"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                  />
                </svg>
              </div>
            </div>

            <div class="flex-item">
              <h3 class="info-title">Email</h3>
              <p class="contact-info">
                <a href="mailto:yunus.fersiz@gmail.com" class="">
                  yunus.fersiz@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-7 justify-content-end">
          <form>
            <div class="contact-form">

              <customInput
                inputType="text"
                :error="errors.nameSurname"
                ariaLabel="Name Surname"
                v-model="formData.nameSurname"
                placeHolder="Name Surname"
              />

              <customInput
                inputType="email"
                :error="errors.email"
                ariaLabel="Email Address"
                v-model="formData.email"
                placeHolder="Email"
              />

              <customInput
                inputType="tel"
                :error="errors.phone"
                ariaLabel="Phone Number"
                v-model="formData.phone"
                placeHolder="Phone"
              />

              <customInput
                inputType="text"
                :error="errors.subject"
                ariaLabel="Subject"
                v-model="formData.subject"
                placeHolder="Subject"
              />
              
              <div class="input-group mb-3 w-sm-50 d-none">
                <input
                  type="email"
                  v-model="honeyPot"
                  class="form-control custom-form"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="input-group">
                <textarea
                  v-model="formData.message"
                  :class="{ error: errors.message }"
                  :placeholder="errors.message ? errors.message : 'Your Message'"
                  class="form-control custom-form"
                  aria-label="With textarea"
                ></textarea>
              </div>

              <div class="d-grid gap-2 mt-3" style="padding: 5px">
                <button class="btn-send" type="button" ref="btnSend" @click="handleSubmit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <img src="/shapes/shape-5.png" alt="" class="shape-size-2 shape-5" />
  </div>
</template>
<script>
import sectionTitle from "../components/UI/section-title.vue";
import customInput from "../components/custom-input.vue";
export default {
  data() {
    return {
      formData: {
        nameSurname: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      },
      errors: {},
      honeyPot: "",
      sectionTitle: "Keep In Touch",
      sectionSubTitle: "Contact Me",
      sectionDesc:
        "Please contact me for any job offers or suggestions and opinions about my work.",
    };
  },
  layout: "customLayout",
  components: {
    sectionTitle,
    customInput,
  },

  methods: {
    handleSubmit() {
      this.errors = {};
      if (this.validateForm() && !this.honeyPot) {

        setTimeout(() => {
          this.formData = {
            nameSurname: "",
            email: "",
            subject: "",
            phone: "",
            message: "",
          };
          this.$refs.btnSend.innerText = "The message has been sent successfully"
        }, 1000);

        setTimeout(() => {
          this.$refs.btnSend.innerText = "Submit"
        }, 3000);


      }
    },
    validateForm() {
      const { nameSurname, email, message, subject, phone } = this.formData;
      let formIsValid = true;
      this.errors = {};
      if (!nameSurname.trim()) {
        this.errors.nameSurname = "Name Surname is required";
        formIsValid = false;
      }

      if (!message.trim()) {
        this.errors.message = "Message is required";
        formIsValid = false;
      }

      if (!email.trim()) {
        this.errors.email = "Email is required";
        formIsValid = false;
      } else {
        if (this.isValidEmail()) {
          this.errors.email = "Invalid Email Format";
          formIsValid = false;
        }
      }

      if (!subject.trim()) {
        this.errors.subject = "Subject is required";
        formIsValid = false;
      }

      if (!phone.trim()) {
        this.errors.phone = "Phone Number is required";
      } else {
        if (!this.isValidPhoneNumber(phone)) {
          this.errors.phone = "Invalid phone number for turkey";
          formIsValid = false;
        }
      }

      if (!message.trim()) {
        this.errors.message = "Message is required";
        formIsValid = false;
      }

      return formIsValid;
    },

    isValidEmail(email) {
      const emailRegex = /^(?:\+?90|0)?\d{10}$/;
      return emailRegex.test(email);
    },

    isValidPhoneNumber(phoneNumber) {
      const cleanedPhoneNumber = phoneNumber.replace(/[\s()-]/g, "");
      const turkishPhoneNumberRegex = /^(0|)?\d{10}$/;
      return turkishPhoneNumberRegex.test(cleanedPhoneNumber);
    },
  },
};
</script>
<style>
.i-location {
  color: var(--ypurple);
}

.i-location-box {
  background-color: #ece8fd;
  padding: 20px;
  border-radius: 50%;
  margin-right: 20px;
}

.i-email {
  color: var(--yorange);
}

.i-email-box {
  background-color: #fedfd7;
  padding: 20px;
  border-radius: 50%;
  margin-right: 20px;
}

.i-phone {
  color: var(--ygreen);
}

.i-phone-box {
  background-color: #ddf5e6;
  padding: 20px;
  border-radius: 50%;
  margin-right: 20px;
}

.contact-info {
  font-size: 17px;
  color: rgba(33, 37, 41, 0.75);
}

.contact-info a {
  text-decoration: none !important;
  color: rgba(33, 37, 41, 0.75);
}

.info-title {
  font-size: 24px;
}


.contact-form {
  margin-top: 50px;
}

.contact {
  position: relative;
}



@media only screen and (min-width: 600px) {
  .contact-form {
    margin-top: 10px;
    margin-bottom: 50px;
  }
}

.btn-send {
  background-color: var(--ygreen);
  color: white;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 0.375rem;
}

.btn-send:hover {
  opacity: 0.8 !important;
  transition: 1s;
}

.shape-size-2 {
  width: 250px;
  height: 250px;
}

.shape-5 {
  position: absolute;
  bottom: 50%;
  right: 0%;
}
</style>
