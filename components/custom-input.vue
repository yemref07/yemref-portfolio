<template>
    <div class="input-group mb-3 w-sm-50">
      <input
        :type="inputType"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-control custom-form"
        :class="{ error: error }"
        :placeholder="error ? error : placeHolder"
        :aria-label="ariaLabel"
        aria-describedby="basic-addon1"
      />
  </div>
</template>
<script>
export default {
  props: ["modelValue", "error", "inputType", "ariaLabel", "placeHolder"],
  emits: ["update:modelValue"],
};
</script>
<style>
.error {
  border: 2px solid rgb(230 92 92 / 41%);
}

.error:focus {
  color: black;
  background-color: white;
  border-color: rgb(215 117 117 / 74%) !important;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(215 117 117 / 32%);
}

.custom-form {
  font-size: 1.1rem;
}

.input-group {
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
}

.w-sm-50 {
  width: 50%;
}

@media only screen and (max-width: 600px) {
  .w-sm-50 {
    width: 100%;
  }
}
</style>
