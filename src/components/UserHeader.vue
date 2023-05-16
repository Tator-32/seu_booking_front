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
                        <a class="LogoLinkToHome" href="https://www.Booking.com" style="color: rgb(255, 255, 255);
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
                            <div class="LoginAvatar" style="width: 50px; height: 50px; margin: 10px; display: inline-block;">
                                <el-avatar :size="60" :src="avatarUrl"></el-avatar>
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <center><el-row><UserRegister></UserRegister></el-row></center>
                                <center><el-row><UserLogin></UserLogin></el-row></center>
                            </el-dropdown-menu>
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
import UserLogin from './UserLogin.vue';
import UserRegister from './UserRegister.vue';
export default {
    name: "UserHeader",
    data() {
        return {
            avatarUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        };
    },
    components: { UserRegister, UserLogin }
}
</script>