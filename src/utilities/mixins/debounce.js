export default {
    data() {
      return {
        timeout:"",
      };
    },
    methods: {
      mydebounce(func, wait = 1000) {
        // console.log("i am from mixin");
        clearTimeout(this.timeout);
        this.timeout = setTimeout(func, wait);
      },
    },
  };