<template>
<test-check></test-check>
<modal-res></modal-res>
<user></user>
<reg-form></reg-form>
<user-test></user-test>
<admin-test></admin-test>
<admin-img></admin-img>

<user-img></user-img>
</template> 

<script>
import RegForm from './components/RegForm'
import User from './components/User.vue'
import ModalRes from "./components/ModalRes"
import TestCheck from "./components/TestCheck"
import UserTest from "./components/UserTest"
import AdminTest from "./components/AdminTest"
import AdminImg from "./components/AdminImg"
import UserImg from './components/UserImg'


export default {
  components: {
    ModalRes,
    TestCheck,
    User,
    RegForm,
    UserTest,
    AdminTest,
    AdminImg,
    UserImg,
  },

  data() {
    return {
      user: false,
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
