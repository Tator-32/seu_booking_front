<template>
    <div>
        <UserHeaderWithoutAva></UserHeaderWithoutAva>
        <div class="LoginPageBody">
            <el-row>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="12"><el-input v-model="loginform.user_address" placeholder="请输入邮箱"></el-input></el-col>
                <el-col :span="6">&nbsp;</el-col>
            </el-row>
            <el-row><el-button @click="register">登录或注册新账号</el-button></el-row>
        </div>
    </div>
</template>

<style scoped>
.LoginPageBody {
    margin: 50px;
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
                user_address: "",
            }
        };
    },
    methods: {
        register() {
            this.$http.post("/account", {
                user_address: this.loginform.user_address,
            }).then(res => {
                if (res) {
                    this.$message({
                        type: "success",
                        message: "连接成功"
                    });
                }
            }).catch(function (error) {
                alert("连接失败");
            });
            
        }
    },
    components: { UserHeaderWithoutAva }
}
</script>