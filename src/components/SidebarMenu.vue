<template>
  <div class="sidebar">
    <v-list>
      <v-list-item link rounded="lg" @click="$emit('showUserInfo')">
        <template v-slot:prepend>
          <v-icon>mdi-card-account-details-outline</v-icon>
        </template>

        <v-list-item-title>مشخصات</v-list-item-title>
      </v-list-item>
      <v-list-item link rounded="lg" @click="$emit('showUserEdit')">
        <template v-slot:prepend>
          <v-icon>mdi-account-edit-outline</v-icon>
        </template>

        <v-list-item-title>ویرایش</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup></script>

<style scoped>
.sidebar {
  background-color: rgba(230, 230, 230, 0.9);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 0px 5px #e6e6e6;
}
</style>
