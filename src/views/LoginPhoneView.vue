<template>
    <div>
        <UserHeaderWithoutAva></UserHeaderWithoutAva>
        <div class="LoginPageBody">
            <el-row style="margin-bottom: 30px;">
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8" style="font-weight: bolder; font-size: xx-large; text-align: left;">登录或创建账号</el-col>
                <el-col :span="8">&nbsp;</el-col>
            </el-row>
            <el-row style="margin-bottom: 40px;">
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8"><el-input v-model="loginform.loginVal" placeholder="输入手机号"
                        style="height: 10px;"></el-input></el-col>
                <el-col :span="8">&nbsp;</el-col>
            </el-row>
            <el-row style="margin-buttom: 100px"><el-button size="50px" type="primary"
                    @click="register">使用手机号继续</el-button></el-row>
            <el-row style="margin-buttom: 200px"><el-divider>或使用其他方式</el-divider></el-row>
            <el-row>
                <el-col :span="10">&nbsp;</el-col>
                <el-col :span="4">
                    <center>
                        <el-card shadow="hover" style="height: fit-content; width: fit-content; border: 2px solid gray"
                            title="使用邮箱登录">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"
                                width="40" height="40" role="img" @click="mailLog">
                                <path
                                    d="M22.5 12v6a.75.75 0 0 1-.75.75H2.25A.75.75 0 0 1 1.5 18V6a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v6zm1.5 0V6a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 6v12a2.25 2.25 0 0 0 2.25 2.25h19.5A2.25 2.25 0 0 0 24 18v-6zm-8.822-1.474l3.813 3.525a.75.75 0 1 0 1.018-1.102l-3.813-3.525a.75.75 0 1 0-1.018 1.102zM7.804 9.424L3.99 12.95a.75.75 0 1 0 1.018 1.102l3.813-3.525a.75.75 0 1 0-1.018-1.102zm14.65-5.027l-9.513 6.56a1.656 1.656 0 0 1-1.882 0l-9.513-6.56A.75.75 0 1 0 .694 5.63l9.513 6.56a3.156 3.156 0 0 0 3.586 0l9.513-6.56a.75.75 0 1 0-.852-1.234z"
                                    fill="var(--bui_color_action_foreground)"></path>
                            </svg>
                        </el-card>
                    </center>
                </el-col>
                <el-col :span="10">&nbsp;</el-col>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
.LoginPageBody {
    margin: 100px;
}

.el-row {
    margin-bottom: 10px;
}
</style>
    
<script>
import UserHeaderWithoutAva from '@/components/UserHeaderWithoutAva.vue';

export default {
    data() {
        return {
            loginform: {
                loginVal: "",
            }
        };
    },
    methods: {
        register() {
            var reg = new RegExp(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/);
            if (reg.test(this.loginform.loginVal)) {
                this.$http.post("/account",
                    {
                        loginVal: this.loginform.loginVal,
                        loginType: 'Phone'
                    }
                ).then(res => {
                    if (res) {
                        //this.$message({type: "succes", message: res.data.toString()})
                        //console.log(typeof(res.data))
                        this.$router.push({
                            name: 'VerifyCode',
                            params: {
                                code: res.data                                
                            }
                        });
                    }
                }
                ).catch(function (error) { alert("连接失败"); });
            }
            else {
                this.$message({ type: "error", message: "手机号格式有误" })
            }
        },
        mailLog() {
            this.$router.push('/LoginMail');
        }
    },
    components: { UserHeaderWithoutAva }
}
</script>