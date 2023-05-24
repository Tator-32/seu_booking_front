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
                <el-col :span="8"><el-input v-model="loginform.loginVal" placeholder="输入邮箱地址"
                        style="height: 10px;"></el-input></el-col>
                <el-col :span="8">&nbsp;</el-col>
            </el-row>
            <el-row style="margin-buttom: 100px"><el-button size="50px" type="primary"
                    @click="register">使用邮箱继续</el-button></el-row>
            <el-row style="margin-buttom: 200px"><el-divider>或使用其他方式</el-divider></el-row>
            <el-row>
                <el-col :span="10">&nbsp;</el-col>
                <el-col :span="4">
                    <center>
                        <el-card shadow="hover" style="height: fit-content; width: fit-content; border: 2px solid gray"
                            title="使用手机号登录">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"
                                width="40" height="40" role="img" @click="phoneLog">
                                <path
                                    d="M14.25 15.75v4.768a1.982 1.982 0 0 1-1.982 1.982H5.732a1.982 1.982 0 0 1-1.983-1.981V4.983A1.985 1.985 0 0 1 5.733 3H7.5a.75.75 0 0 0 0-1.5H5.733A3.483 3.483 0 0 0 2.25 4.983v15.536A3.482 3.482 0 0 0 5.733 24h6.535a3.482 3.482 0 0 0 3.482-3.482V15.75a.75.75 0 0 0-1.5 0zM3 19.5h12a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zM20.25 6.75a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0zm1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0zm-4.676-2.194l-2.9 3.873h-.002l-1.499-1.5a.75.75 0 1 0-1.06 1.061l1.5 1.5a1.502 1.502 0 0 0 2.26-.16l2.901-3.874a.75.75 0 0 0-1.2-.9z">
                                </path>
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
                loginVal: ''
            }
        };
    },
    methods: {
        register() {
            var reg = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
            if (reg.test(this.loginform.loginVal)) {
                this.$http.post("/account", {
                        loginVal: this.loginform.loginVal,
                        loginType: 'Mail'
                    }
                ).then(res => {
                    if (res) {
                        this.$router.push({
                            name: 'VerifyCode',
                            params: {
                                phonePar: null,
                                mailPar: this.loginform.loginVal,
                                code: res.data
                            }
                        });
                    }
                }
                ).catch(function (error) { alert("连接失败"); });
            }
            else {
                this.$message({ type: "error", message: "邮箱格式有误" })
            }
        },
        phoneLog() {
            this.$router.push('/LoginPhone')
        }
    },
    components: { UserHeaderWithoutAva }
}
</script>