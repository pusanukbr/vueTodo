<template>
  <div class="tableUser">
    <div v-if="user" class="tableUser__wrapp">
      <fieldset>
        <legend>About</legend>
        <div>Name: {{ user.name }}</div>
        <div>
          Email:
          <a :href="`mailto:${user.email}`" target="_blank">{{ user.email }}</a>
        </div>
        <div>
          Phone:
          <a :href="`phone:${user.phone}`" target="_blank">{{ user.phone }}</a>
        </div>
        <div>
          Site:
          <a :href="`https://${user.website}`" target="_blank">{{
            user.website
          }}</a>
        </div>
      </fieldset>
      <fieldset>
        <legend>Address</legend>
        <address>
          <div>City: {{ user.address.city }}</div>
          <div>Street: {{ user.address.street }}</div>
          <div>Suite: {{ user.address.suite }}</div>
        </address>
      </fieldset>

      <fieldset>
        <legend>Zipcode and Geo</legend>
        <div>Zipcode: {{ user.address.zipcode }}</div>
        <div class="tableUser__geo">
          <span>Lat: {{ user.address.geo.lat }}</span>
          <span>Lng: {{ user.address.geo.lng }}</span>
        </div>
      </fieldset>
      <fieldset>
        <legend>Company</legend>
        <div>Name: {{ user.company.name }}</div>
        <div>CatchPhrase: {{ user.company.catchPhrase }}</div>
        <div>Bs: {{ user.company.bs }}</div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";

export default {
  name: "TableUser",
  data() {
    return {
      user: store.user,
    };
  },
};
</script>

<style></style>
