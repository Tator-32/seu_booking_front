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
                        <div>&nbsp;</div>
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
export default {
    name: "UserHeaderWithoutAva",
    methods: {
        toHome()
        {
            this.$router.push('/');
        }
    }
}
</script>