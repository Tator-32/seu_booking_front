<template>
    <div>
        <UserHeaderWithoutAva></UserHeaderWithoutAva>
        <div class="ProfileBody">
            <el-row>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="12">
                    <div class="Body"></div>
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div style="text-align: left; height: 40px; line-height: 40px;">姓名</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input v-model="accountInfo.realName" placeholder="您的真实姓名"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div style="text-align: left; height: 40px; line-height: 40px;">显示名</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input v-model="accountInfo.userName" placeholder="用户名"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div style="text-align: left; height: 40px; line-height: 40px;">邮箱地址</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input v-model="accountInfo.mailAddr" placeholder="请输入邮箱"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div style="text-align: left; height: 40px; line-height: 40px;">电话号码</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input v-model="accountInfo.phoneNo" placeholder="手机号"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" style="margin-bottom: 50px;">
                        <el-col :span="8">
                            <div style="text-align: left; height: 40px; line-height: 40px;">出生日期</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="dateChoice">
                                <el-date-picker v-model="accountInfo.birthDate" type="date" placeholder="选择日期">
                                </el-date-picker>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row> 
                        <el-col :span="12">
                            <center>
                                <el-button @click="backToHome">返回</el-button>
                            </center>
                        </el-col>
                        <el-col :span="12">
                            <center>
                                <el-button @click="profileChange">修改</el-button>
                            </center>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">&nbsp;</el-col>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
.ProfileBody {
    margin: 50px;
}

.el-row {
    margin-bottom: 20px;
}
</style>

<script>
import UserHeaderWithoutAva from '@/components/UserHeaderWithoutAva.vue';

export default {
    name: "ProfileView",
    data() {
        return {
            accountInfo: {
                realName: "",
                userName: "",
                mailAddr: "",
                phoneNo: "",
                birthDate: ""
            }, 
            verified: true
        }
    },
    methods: {
        profileChange() {
            this.$http.post('/profile', {
                realName: this.accountInfo.realName,
                userName: this.accountInfo.userName,
                mailAddr: this.accountInfo.mailAddr,
                phoneNo: this.accountInfo.phoneNo,
                birthDate: this.accountInfo.birthDate
            }).then(res => {
                    if (res) {
                        this.$message({type: "succes", message: res.data.toString()})                     
                    }
                }
                ).catch(function (error) { alert("连接失败"); });;
        }, 
        backToHome() {
            this.$router.push("/")
        }
    },
    components: { UserHeaderWithoutAva }
}
</script>