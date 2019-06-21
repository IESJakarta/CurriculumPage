const url = "https://api.steinhq.com/v1/storages/5d0374a0e8f87532b83a4e3b/SpAnnouncementTest_Output";  
const vm = new Vue({
  el: '#SpAnnounce',
  data: {
    announcements: []
  },
  mounted() {
      axios.get(url).then(response => {
        this.announcements = response.data
      })
    }
});

const urll = "https://api.steinhq.com/v1/storages/5d0374a0e8f87532b83a4e3b/CurLinkTest_Output";  
const vml = new Vue({
  el: '#CurLinks',
  data: {
    links: []
  },
  mounted() {
      axios.get(urll).then(response => {
        this.links = response.data
      })
    }
});
