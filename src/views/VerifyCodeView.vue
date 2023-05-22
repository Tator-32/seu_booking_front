<template>
    <div>
        <UserHeaderWithoutAva></UserHeaderWithoutAva>
        <div class="VerifyPageBody">
            <el-row style="margin-bottom: 30px;">
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8" style="font-weight: bolder; font-size: xx-large; text-align: left;">确认验证码</el-col>
                <el-col :span="8">&nbsp;</el-col>
            </el-row>
            <el-row style="margin-bottom: 40px;">
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8"><el-input v-model="answer" placeholder="输入验证码" style="height: 10px;"></el-input></el-col>
                <el-col :span="8">&nbsp;</el-col>
            </el-row>
            <el-row style="margin-buttom: 100px"><el-button size="50px" type="primary"
                    @click="confirm">继续</el-button></el-row>
        </div>
    </div>
</template>

<style scoped>
.VerifyPageBody {
    margin: 100px;
}
</style>

<script>
import UserHeaderWithoutAva from '@/components/UserHeaderWithoutAva.vue';
import {mapState, mapMutations} from 'vuex'

export default {
    data() {
        return {
            code: "No Data",
            answer:""
        };
    },
    computed: {
			...mapState(['username'])
		},
    mounted() {
        this.code = this.$route.params.code;
    },
    methods: {
        ...mapMutations(['userlogin']),
        confirm() {
            if(this.answer == this.code) {
                //this.$message({type: 'success', message: 'OK'});
                this.userlogin("test");
                this.$router.push("/");
            } else {
                this.$message({type: 'error', message: '验证码错误'});
            }
        }
    },
    components: { UserHeaderWithoutAva }
}
</script>