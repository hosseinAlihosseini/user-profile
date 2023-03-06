<template>
  <div>
    <h2 class="mb-4">بیوگرافی</h2>
    <div class="d-flex align-center mt-5">
      <div class="text-gray">
        <v-icon color="#5d5d5d" size="30">mdi-account-circle</v-icon>
        نام:
      </div>
      <span class="mr-2">{{
        `${$store.getters["userData/getFirstName"]} ${$store.getters["userData/getLastName"]}`
      }}</span>
    </div>
    <v-divider class="my-3"/>
    <div class="d-flex align-center mt-5">
      <div class="text-gray">
        <v-icon color="#5d5d5d" size="30">mdi-account-circle-outline</v-icon>
        نام کاربری:
      </div>
      <span class="mr-2">{{ $store.getters["userData/getUserName"] }}</span>
    </div>
    <v-divider class="my-3"/>
    <div class="d-flex align-center mt-5">
      <div class="text-gray">
        <v-icon color="#5d5d5d" size="30">mdi-update</v-icon>
        تاریخ عضویت:
      </div>
      <span class="mr-2">{{
        $store.getters["userData/getRegisteryDate"]
      }}</span>
    </div>
    <v-divider class="my-3"/>
    <div class="d-flex align-center mt-5">
      <div class="text-gray">
        <v-icon color="#5d5d5d" size="30">mdi-email-outline</v-icon>
        پست الکترونیک:
      </div>
      <span class="mr-2">{{ $store.getters["userData/getEmail"] }}</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
