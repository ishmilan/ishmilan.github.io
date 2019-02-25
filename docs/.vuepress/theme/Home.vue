<template>
  <div class="home">
    <div class="intro">
      <img
        :src="$withBase(flag ? '/images/profile.jpeg' :'/images/profileColor.jpeg')"
        :alt=" $title"
        @focus="flag = true"
        @blur="flag = false"
      >
      <div class="intro-text">
        <h1>{{ data.heroText || $title || 'Hello' }}</h1>
        <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
      </div>
      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </div>

    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="(feature, index) in data.features" :key="index">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content custom/>

    <div class="footer" v-if="data.footer">{{ data.footer }}</div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl';
</style>
</<style lang="scss">
@import "./styles/main";
</style>
