<template>
<test-check></test-check>
</template> 

<script>
import RegForm from './components/RegForm'
import User from './components/User.vue'
import ModalRes from "./components/ModalRes"
import TestCheck from "./components/TestCheck"


export default {
  components: {
    ModalRes,
    TestCheck
  },

  data() {
    return {
      user: false,
    }
  },

  methods: {
    user(user) {
      this.user = user;
    }
  }
}
</script>



<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif; 
  }

  body {
    background: #000;
  }

</style>
