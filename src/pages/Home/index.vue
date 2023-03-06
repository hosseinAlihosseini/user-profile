<template>
  <div class="main-wrapper">
    <v-container>
      <div class="main-box">
        <label class="avatar-box">
          <v-progress-circular
            v-if="avatarLoading"
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
          <template v-else>
            <img
              :src="
                !avatarImage ? '/src/assets/images/avatar.jpg' : avatarImage
              "
              alt=""
            />
          </template>
          <span class="edit-avatar">
            <v-icon> mdi-image-edit-outline </v-icon>
          </span>
          <input type="file" hidden accept="image/*" @change="uploadAvatar" />
        </label>
        <div class="row">
          <v-col cols="4">
            <sidebar-menu
              @showUserInfo="goToUserInfo"
              @showUserEdit="goToUserEdit"
            />
          </v-col>
          <v-col cols="8">
            <div class="main-content">
              <v-expand-transition>
                <div v-if="userInfo && !userEdit">
                  <show-user-info />
                </div>
              </v-expand-transition>
              <v-expand-transition>
                <div v-if="userEdit && !userInfo">
                  <edit-user-info />
                </div>
              </v-expand-transition>
            </div>
          </v-col>
        </div>
      </div>
    </v-container>
    <v-snackbar v-model="snackbar" location="top" color="green">
      <div class="py-3 text-center d-flex align-center justify-center flex-row-reverse">
        عکس پروفایل با موفقیت تغییر یافت.
        <v-btn color="pink" variant="text" @click="snackbar = false" class="mr-2">
          بستن
        </v-btn>
      </div>
    </v-snackbar>
  </div>
</template>

<script setup>
import ShowUserInfo from "./../../components/ShowUserInfo.vue";
import EditUserInfo from "./../../components/EditUserInfo.vue";
import SidebarMenu from "./../../components/SidebarMenu.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const userInfo = ref(null);
const userEdit = ref(null);
const snackbar = ref(false);
const avatarLoading = ref(false);
const avatarImage = ref(null);
const route = useRoute();

onMounted(() => {
  if (route.path === "/edit") {
    userInfo.value = false;
    userEdit.value = true;
  } else {
    userInfo.value = true;
    userEdit.value = false;
  }
});

const goToUserInfo = () => {
  userInfo.value = true;
  userEdit.value = false;
  window.history.pushState("", "", "/");
};

const goToUserEdit = () => {
  userInfo.value = false;
  userEdit.value = true;
  window.history.pushState("", "", "/edit");
};

const uploadAvatar = (event) => {
  avatarLoading.value = true;
  setTimeout(() => {
    try {
      avatarImage.value = null;
      const avatar = event.target.files[0];
      avatarImage.value = URL.createObjectURL(avatar);
    } catch (err) {}
    avatarLoading.value = false;
    snackbar.value = true;
  }, 2000);
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
  background-image: url("@/assets/images/bg2.jpg");
  background-size: cover;
  background-position: center bottom;
  padding-top: 150px;
}
.main-box {
  position: relative;
  width: 100%;
  height: auto;
  padding-block: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}
.avatar-box {
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  border-radius: 100%;
  cursor: pointer;
}
.avatar-box img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 2px solid #e6e6e6;
}
.edit-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  left: 0;
  bottom: 10px;
  border-radius: 100%;
  background-color: rgb(230, 230, 230, 0.8);
  position: absolute;
}
.row {
  display: flex;
  flex-wrap: wrap;
}

.main-content {
  background-color: rgba(230, 230, 230, 0.9);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 0px 5px #e6e6e6;
}
</style>
