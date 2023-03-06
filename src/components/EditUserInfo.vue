<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-4">
      <h2>ویرایش اطلاعات</h2>
      <v-btn :loading="loading" @click="editUserInfo" :disabled="!validForm">
        ویرایش اطلاعات
      </v-btn>
    </div>
    <v-form lazy-validation v-model="validForm">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userData.firstName"
            :rules="[
              (v) => !!v || 'نام ضروری است.',
              (v) => v.length >= 3 || 'لطفا نام خود را به صورت کامل وارد کنید.',
              (v) =>
                !!v.match(/^[\u0600-\u06FF\s]+$/) ||
                'از حروف فارسی استفاده کنید',
            ]"
            variant="underlined"
            label="نام"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userData.lastName"
            :rules="[
              (v) => !!v || 'نام ضروری است.',
              (v) => v.length >= 3 || 'لطفا نام خود را به صورت کامل وارد کنید.',
              (v) =>
                !!v.match(/^[\u0600-\u06FF\s]+$/) ||
                'از حروف فارسی استفاده کنید',
            ]"
            variant="underlined"
            label="نام خانوادگی"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userData.userName"
            :rules="[
              (v) => !!v || 'نام ضروری است.',
              (v) => v.length >= 3 || 'لطفا نام خود را به صورت کامل وارد کنید.',
              (v) =>
                !v.match(/^[\u0600-\u06FF\s]+$/) ||
                'از حروف لاتین استفاده کنید',
            ]"
            variant="underlined"
            label="نام کاربری"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            disabled
            v-model="userData.registeryDate"
            variant="underlined"
            label="تاریخ عضویت"
          />
        </v-col>
      </v-row>
    </v-form>
    <div class="w-100 d-flex justify-space-between py-3">
      <div class="d-flex align-center">
        <div class="text-gray">
          <v-icon color="#5d5d5d" size="30">mdi-email-outline</v-icon>
          پست الکترونیک:
        </div>
        <span class="mr-2"> {{ userData.email }} </span>
      </div>
      <v-btn @click="openDialog = true"> تغییر ایمیل </v-btn>
    </div>
    <v-dialog v-model="openDialog" max-width="500">
      <ChangeEmail
        @closeDialog="openDialog = false"
        @changeEmailSuccess="changeEmailHandler"
      />
    </v-dialog>
    <v-snackbar v-model="snackbar">
      <div class="py-3 text-center">
        {{ messageText }}
      </div>
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          بستن
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import ChangeEmail from "./ChangeEmail.vue";
const store = useStore();
const userData = reactive({
  firstName: "",
  lastName: "",
  userName: "",
  registeryDate: "",
  email: "",
});
const messageText = ref("");
const snackbar = ref(false);
const loading = ref(false);
const openDialog = ref(false);
const validForm = ref(false);

onMounted(() => {
  userData.firstName = store.getters["userData/getFirstName"];
  userData.lastName = store.getters["userData/getLastName"];
  userData.userName = store.getters["userData/getUserName"];
  userData.registeryDate = store.getters["userData/getRegisteryDate"];
  userData.email = store.getters["userData/getEmail"];
});

const editUserInfo = () => {
  loading.value = true;
  setTimeout(() => {
    try {
      store.commit("userData/setFirstName", userData.firstName);
      store.commit("userData/setLastName", userData.lastName);
      store.commit("userData/setUserName", userData.userName);
      loading.value = false;
      messageText.value = "اطلاعات کاربر با موفقیت تغییر یافت";
      snackbar.value = true;
    } catch (err) {}
  }, 2000);
};
const changeEmailHandler = () => {
  userData.email = store.getters["userData/getEmail"];
  openDialog.value = false;
  messageText.value = "ایمیل با موفقیت تغییر یافت";
  snackbar.value = true;
};
</script>

<style lang="scss" scoped></style>
