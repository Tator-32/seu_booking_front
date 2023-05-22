<template>
    <div>
        <UserHeaderWithoutAva></UserHeaderWithoutAva>
        <div class="ProfileBody">
            <el-row>
                <el-col :span="9">&nbsp;</el-col>
                <el-col :span="6">
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div style="text-align: right; height: 40px; line-height: 40px;">姓名</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input v-model="input" placeholder="您的真实姓名"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div style="text-align: right; height: 40px; line-height: 40px;">显示名</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input v-model="input" placeholder="用户名"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div style="text-align: right; height: 40px; line-height: 40px;">邮箱地址</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input v-model="input" placeholder="请输入邮箱"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div style="text-align: right; height: 40px; line-height: 40px;">电话号码</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input v-model="input" placeholder="手机号"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div style="text-align: right; height: 40px; line-height: 40px;">出生日期</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input v-model="input" placeholder="出生日期"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="9">&nbsp;</el-col>
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
            }
        }
    },
    components: { UserHeaderWithoutAva }
}
</script>