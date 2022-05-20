let app = Vue.createApp({
    data() {
      return {
        articles: {},
        foto : "https://raw.githubusercontent.com/nissaazizah/tekweb2022/main/assets/Group%203.png"
      }
    },
    methods: {
      getArticleData() {
        axios
          .get(
            "https://raw.githubusercontent.com/nissaazizah/tekweb2022/main/article.json"
          )
          .then((res) => {
            this.articles = res.data;
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getArticleData()
    }
  })
  app.mount('#app');