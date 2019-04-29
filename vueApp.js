const url = "https://script.google.com/macros/s/AKfycbzcPaPX6-qkLfjPMDY0OS6fw-uQOcwK9hno4Zksw5iu7bw_xOaf/exec";  
const vm = new Vue({
  el: '#app',
  data: {
    posts: []
  },
  mounted() {
      axios.get(url).then(response => {
        this.posts = response.data
      })
    }
});