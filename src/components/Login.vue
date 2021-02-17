<template>
  <div class="login_conter">
    <div class="login_box">
      <div class="login_top">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form
        :model="from"
        :rules="rules"
        label-width="0px"
        class="login_form"
        ref="loginForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="from.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="from.password"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetbtn">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      from: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    resetbtn () {
      this.$refs.loginForm.resetFields()
    },
    login () {
      this.$refs.loginForm.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.from)
        if (res.meta.status === 200) {
          this.$message.success('登陆成功')
          window.sessionStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        } else {
          this.$message.error('登陆失败')
        }
      })
    }
  },
  mounted () {},
  components: {}
}
</script>
<style scoped>
.login_conter {
  background-color: #2b4b6b;
  width: 100vw;
  height: 100vh;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_top {
  height: 130px;
  width: 130px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #000;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.login_top img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.button {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
