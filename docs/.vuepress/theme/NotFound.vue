<template>
  <div class="theme-container">
    <div class="content content-404">
      <h1 class="404-h1">404</h1>
      <p class="p-404">{{ getMsg() }}</p>
      <router-link to="/" class="link-404">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
];

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
  }
};
</script>
<style lang="scss">
$primary: #f55005;
$secondary: #282a36;

.content-404 {
  position: relative;

  .h1-404 {
    color: $primary;
    font-size: 25vw;
    text-align: center;
    line-height: 1;
  }

  .p-404 {
    color: $secondary;
    border: none;
    text-align: center;
    background: transparent;
  }

  .link-404 {
    display: inline-block;
    margin: 1rem 0 1rem auto;
  }
}
</style>
