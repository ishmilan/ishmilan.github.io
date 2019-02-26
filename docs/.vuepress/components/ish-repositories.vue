<template>
  <div>
    <div class="card">
      <h2 class="title">Proyectos</h2>
      <p>Estos son algunos de mis proyectos, por si quieres echar un vistazo.</p>
      <p>
        Ademas, si quieres hacer una donación para que pueda seguir desarrollando el proyecto que quieras,
        puedes hacerlo desde el botón de paypal indicando la cantidad y el nombre del proyecto al que va destinado
        y te convertirás en sponsor de ese proyecto.
      </p>
    </div>
    <div class="git-card-container">
      <ish-card v-for="(repo, index) in repos" :key="index" :username="username" :project="repo"></ish-card>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      username: "ishmilan",
      reponames: [
        "ikextremadura",
        "fireworks",
        "PMH",
        "bindcfg",
        "ishmilan.github.io"
      ],
      repos: []
    };
  },
  mounted() {
    const repos = localStorage.getItem(`github-${this.username}`);
    if (repos) {
      this.repos = JSON.parse(repos);
    } else {
      axios
        .get(`https://api.github.com/users/${this.username}/repos`, {
          params: { "X-RateLimit-Limit": 4999 }
        })
        .then(response => {
          this.repos = response.data
            .map(repo => {
              if (this.reponames.indexOf(repo.name) !== -1) {
                return {
                  title: repo.name,
                  license:
                    repo.license && repo.license.spdx_id
                      ? repo.license.spdx_id
                      : "",
                  description: repo.description
                };
              }
            })
            .filter(repo => repo);
          localStorage.setItem(
            `github-${this.username}`,
            JSON.stringify(this.repos)
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
