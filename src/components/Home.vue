<template>
  <div><el-button type="info" @click="logout">退出</el-button></div>
</template>
<script>
export default {
  data (){
    return {}
  },
  methods:{
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  },
  mounted () {},
  components: {}
}
</script>
<style scoped>
</style>
