<template>
    <a v-if="href && text" class="ish-button" :href="href" target="_blank" rel="nofollow" title="link ">
        <img :src="img" alt="icon" v-if="img">
        <span class="ish-button__text" v-html="text"></span>
    </a>
</template>
<script>
export default {
  props: {
    href: String,
    img: String,
    text: String,
  }
}
</script>
