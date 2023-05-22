<template>
    <div>
        <div class="HeadLine">
            <el-row>
                <el-col :span="12">
                    <div class="LinkLogo" style="width: 200px; 
                                            height: 60px; 
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;">
                        <a class="LogoLinkToHome" @click="toHome" style="color: rgb(255, 255, 255);
                                                                                    text-decoration: none;
                                                                                    font-weight: bold;
                                                                                    font-family: 'Helvetica Rounded', sans-serif;
                                                                                    font-size: 25px;
                                                                                    text-align: left;">
                            Booking.com
                        </a>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-col :span="4">
                        <div>&nbsp;</div>
                    </el-col>
                    <el-col :span="4">
                        <div>&nbsp;</div>
                    </el-col>
                    <el-col :span="4">
                        <div>&nbsp;</div>
                    </el-col>
                    <el-col :span="4">
                        <div>&nbsp;</div>
                    </el-col>
                    <el-col :span="4">
                        <div>&nbsp;</div>
                    </el-col>
                    <el-col :span="4">
                        <el-dropdown trigger="click" size="large">
                            <div class="LoginAvatar"
                                style="width: 50px; height: 50px; margin: 10px; display: inline-block;">
                                <el-avatar :size="60" :src="avatarUrl"></el-avatar>
                            </div>
                            <div v-if="username === null">
                                <el-dropdown-menu slot="dropdown">
                                    <div style="margin:5px">
                                        <el-row style="margin-bottom: 5px;"><el-button
                                                @click="register">注册</el-button></el-row>
                                        <el-row><el-button @click="login">登录</el-button></el-row>
                                    </div>
                                </el-dropdown-menu>
                            </div>
                            <div v-else>
                                <el-dropdown-menu slot="dropdown">
                                    <div style="margin:5px">
                                        <el-row style="margin-bottom: 5px;"><el-button
                                                @click="profile">账户</el-button></el-row>
                                        <el-row><el-button @click="logout">登出</el-button></el-row>
                                    </div>
                                </el-dropdown-menu>
                            </div>
                        </el-dropdown>
                    </el-col>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
.HeadLine {
    background-color: rgb(22, 59, 150);
    margin: -8px;
    padding: 0px;
    border: 0px;
    height: 50px;
    height: fit-content;
}
</style>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: "UserHeader",
    data() {
        return {
            avatarUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        };
    },
    computed: {
        ...mapState(['username'])
    },
    methods: {
        ...mapMutations(['userlogout']),
        toHome() {
            this.$router.push("/1");
            this.$router.push("/");
        },
        login() {
            this.$router.push("/LoginMail");
        }, register() {
            this.$router.push("/LoginMail");
        }, profile() {
            this.$router.push("/Profile");
        }, logout() {
            this.userlogout();
        }
    }
}
</script>