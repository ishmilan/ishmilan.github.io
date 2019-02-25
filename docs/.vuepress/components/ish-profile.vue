<template>
  <div class="card card-profile">
    <figure class="card-profile__propic" v-bind:style="{'background-image': 'url(' + pictureBackground+')'}">
      <img class="card-profile__propic-image" :src="picture">
    </figure>
    <div class="card-profile__body">
      <a href="/" class="card-profile__avatar">
        <img :src="profile">
      </a>
      <h1 class="card-profile__name">{{name}}</h1>
      <h2 class="card-profile__title" v-html="title"></h2>
      <h3 class="card-profile__location">{{location}}</h3>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        name: String,
        title: String,
        location: String,
        profile: String,
        picture: String,
        pictureBackground: String
    }
}
</script>

<style></style>
