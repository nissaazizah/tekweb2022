let apiUrl = "https://myapi.nissazizah.my.id/index.php/";

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
          .get(apiUrl+"articles")
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