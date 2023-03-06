<template>
  <div class="pa-4 bg-white rounded position-relative" style="direction: rtl">
    <v-expand-transition>
      <div v-if="changeEmailStep === 1">
        <v-icon style="cursor: pointer" @click="$emit('closeDialog')"
          >mdi-close</v-icon
        >
        <h3 class="text-center">تغییر ایمیل</h3>
        <div class="my-4 text-center">
          برای تغییر ایمیل خود, ایمیل جدید را وارد کنید.
        </div>
        <v-form lazy-validation v-model="validForm">
          <v-text-field
            v-model="newEmail"
            :rules="[
              (v) => !!v || 'ایمیل اجباری است.',
              (v) =>
                !v.match(/^[\u0600-\u06FF\s]+$/) ||
                'ایمیل با حروف انگلیسی است.',
              (v) =>
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'ایمیل اشتباه است.',
            ]"
            variant="underlined"
            label="ایمیل"
          />
        </v-form>
        <div class="d-flex flex-row-reverse">
          <v-btn @click="changeEmailStep = 2" :disabled="!validForm">
            تغییر ایمیل
          </v-btn>
        </div>
      </div>
    </v-expand-transition>
    <v-expand-transition>
      <div v-if="changeEmailStep === 2">
        <v-icon style="cursor: pointer" @click="changeEmailStep = 1"
          >mdi-arrow-right-thin</v-icon
        >
        <h3 class="text-center">تایید کد</h3>
        <div class="my-4 text-center">
          برای ثبت ایمیل جدید کد ۶ رقمی زیر را وارد و تایید کنید.
        </div>
        <div class="text-center mb-4">۱۲۳۴۵۶</div>
        <v-form lazy-validation v-model="validForm">
          <v-text-field
            v-model="verifyCode"
            :rules="[
              (v) => !!v || 'کد تایید الزامی است.',
              (v) => v.length === 6 || 'کد تایید ۶ رقمی می‌باشد',
              (v) => v === '123456' || 'کد وارد شده اشتباه میباشد',
            ]"
            :maxlength="6"
            variant="underlined"
            label="کد تایید"
          />
        </v-form>
        <div class="d-flex flex-row-reverse">
          <v-btn
            @click="changeEmailHandler"
            :disabled="!validForm"
            :loading="loading"
            >تایید
          </v-btn>
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useStore } from "vuex";
const store = useStore();
const changeEmailStep = ref(1);
const verifyCode = ref("");
const validForm = ref(true);
const newEmail = ref("");
const loading = ref(false);

const emit = defineEmits(["closeDialog", "showSnackBar"]);

const changeEmailHandler = () => {
  loading.value = true;
  setTimeout(() => {
    store.commit("userData/setEmail", newEmail.value);
    loading.value = false;
    emit("changeEmailSuccess");
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
