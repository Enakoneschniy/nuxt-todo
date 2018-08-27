export default {
  methods: {
    isMobile() {
      if(process.browser) {
        return window.screen.availWidth <= 360
      } else {
        return false;
      }
    }
  }
}
