let app = Vue.createApp({
    data() {
      return {
        markdown: null
      }
    },
    methods: {
      getMarkdownFile(){
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const fileName = urlParams.get('markdown');
          var converter = new showdown.Converter();
          axios
                .get(
                    "https://raw.githubusercontent.com/nissaazizah/tekweb2022/bebas/" + fileName
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);           
                    this.markdown = html;
                })
        }
    },
    beforeMount() {
      this.getMarkdownFile()
    }
  })
  app.mount('#app');