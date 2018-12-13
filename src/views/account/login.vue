<template>
    <div class="login">
        <div class="lwrap">
            <div class="left">
              <div class="title">
                <span>
                  后台系统
                </span>
              </div>
              <!-- <img src="../../assets/images/login_logo.png"> -->
            </div>
            <div class="right">
              <div class="title">
                <span>登录</span>
              </div>
              <el-form>
                <el-form-item label="用户名/手机号" prop="userCode">
                  <el-input v-model="user.userCode"></el-input>
                </el-form-item>

                <el-form-item label="密码">
                  <el-input v-model="user.userPwd" type="password"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button @click="submit">登录</el-button>
                </el-form-item>

              </el-form>
            </div>
          </div>
    </div>
</template>

<script>
import Login from "@/server/account/login";
// import Tips from "@/utils/Tips";

export default {
  data() {
    return {
      user: {
        userCode: "",
        userPwd: ""
      },
      rules: {
          userCode: [
            { required: true, message: '请输入手机号', trigger: 'change' },
            { min: 11, max: 1, message: '请输入11位手机号码', trigger: 'change' }
          ]
      }
    };
  },
  methods: {
    async submit() {
      if (!this.user.userCode || !this.user.userPwd) {
        this.$message.error("用户名和密码不能为空");
        return;
      }
      const res = await Login.doLogin(this.user);
      console.log('res',res);
    }
  },
  created() {
    console.log(process.env.NODE_ENV)
  },
};
</script>
<style lang="scss">
  .login {
      .el-input {
        input {
          border: none;
          border-radius: 0;
          border-bottom: 1px solid rgba(221, 221, 221, 1);
        }
        input:focus {
          border-bottom: 2px solid rgba(88, 116, 200, 1);
        }
      }
  }
  :-webkit-autofill {
    // -webkit-text-fill-color: #fff !important;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #E4EBFF;
}
.lwrap {
  width: 38rem;
  height: 24rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  .left {
    width: 18rem;
    height: 24rem;
    background: linear-gradient(
      -46deg,
      rgba(99, 131, 237, 1) 0%,
      rgba(143, 158, 255, 1) 49%,
      rgba(114, 162, 255, 1) 100%
    );
    box-shadow: 0rem 10rem 14rem 0rem rgba(2, 31, 133, 0.08);
    float: left;
    .title {
      width: 7rem;
      height: 1.45rem;
      font-size: 1.5rem;
      font-family: FZPSHJW--GB1-0;
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
      line-height: 1rem;
      top: 1.5rem;
      left: 1rem;
      position: absolute;
    }
    img {
      width: 16rem;
      height: 16rem;
      margin-top: 4rem;
    }
  }
  .right {
    width: 20rem;
    height: 24rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 10rem 14rem 0rem rgba(2, 31, 133, 0.08);
    box-sizing: border-box;
    float: left;
    padding: 3rem;
    .el-form-item {
      padding-bottom: 0;
    }
    .el-form-item__content {
      // height: 4rem;
      .el-input {
        // height: 2rem;
        input {
          border: 0;
          height: 1.5rem;
          border-bottom: 1px solid rgba(221, 221, 221, 1);
          border-radius: 0;
        }
        input:focus {
          border-bottom: 2px solid rgba(88, 116, 200, 1);
        }
      }
      .el-button {
        width: 100%;
        background: rgba(88, 116, 200, 1);
        border-radius: 0rem;
        color: #ffffff;
        margin-top: 1rem;
      }
    }
    .title {
      width: 100%;
      height: 0.95rem;
      font-size: 1rem;
      margin-bottom: 2rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(88, 116, 200, 1);
      line-height: 1.03rem;
    }
  }
}
</style>