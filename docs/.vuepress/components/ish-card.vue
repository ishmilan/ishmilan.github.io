<template>
  <div class="git-card">
    <div class="git-card__title">
      <a
        :href="'https://github.com/'+username+'/'+project"
        title="ver el repositorio"
      >{{card && card.title ? card.title : ''}}</a>
    </div>
    <div class="git-card__license" v-if="card && card.license">{{card.license}}</div>
    <div class="git-card__description">{{card && card.description ? card.description : ''}}</div>
    <div class="git-card__donation">
      <a
        class="paypalme-button custom"
        href="https://www.paypal.me/ishmilan/1.5"
        target="_blank"
        rel="nofollow"
        title="ir a paypal"
      >
        <img src="https://www.paypalobjects.com/webstatic/icon/pp32.png" alt="paypal logo">
        invítame a un café
      </a>
    </div>
    <div
      class="git-card__lang git-card__lang--text"
      v-if="card && card.langs"
      v-bind:class="{ 'git-card__lang--active': isActive }"
    >
      <div v-for="lang in card.langs" class="lang">
        <div v-bind:class="'lang lang--dot ' + lang.name"></div>
        <strong>{{lang.name==='JavaScript' ? 'JS' : lang.name}}</strong>
        {{(100 * lang.lines / card.lines).toFixed(2) + '%'}}
      </div>
    </div>
    <div class="git-card__lang" v-if="card && card.langs" v-on:click="isActive =! isActive">
      <div
        v-for="lang in card.langs"
        v-bind:class="'lang ' + lang.name"
        v-bind:style="{'width': (100 * lang.lines / card.lines) + '%'}"
      ></div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  props: {
    username: String,
    project: Object
  },
  data() {
    return {
      isActive: false,
      card: {
        title: this.project.title,
        license: this.project.license,
        description: this.project.description,
        langs: [
          {
            name: "Javascript",
            lines: 0
          },
          {
            name: "HTML",
            lines: 0
          }
        ],
        lines: 0
      }
    };
  },
  mounted() {
    const card = localStorage.getItem(
      `github-${this.username}-${this.project.title}`
    );
    if (card) {
      this.card = JSON.parse(card);
    } else {
      axios
        .get(
          `https://api.github.com/repos/${this.username}/${
            this.project.title
          }/languages`,
          {
            params: { "X-RateLimit-Limit": 4999 }
          }
        )
        .then(response => {
          const langs = [];
          var lines = 0;
          for (const lang in response.data) {
            langs.push({ name: lang, lines: response.data[lang] });
            lines += response.data[lang];
          }
          this.card.langs = langs;
          this.card.lines = lines;
          localStorage.setItem(
            `github-${this.username}-${this.project.title}`,
            JSON.stringify(this.card)
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style></style>