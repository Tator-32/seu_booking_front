<template>
    <div>
        <div class="HeadLine">
            <div class="LinkLogo" style="width: 200px; height: 60px;">
                <center>
                    <a class="LogoLinkToHome" href="https://www.Booking.com" style="color: rgb(255, 255, 255);
                                    text-decoration: none;
                                    font-weight: bold;
                                    font-family: 'Helvetica Rounded', sans-serif;
                                    font-size: 25px;
                                    text-align: left;">
                        Booking.com
                    </a>
                </center>
            </div>
            <right style="width: fit-content;">
                <div class="LoginAvatar" style="width: fit-content;">
                    <el-avatar>Tator</el-avatar>
                </div>
            </right>
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
    name: 'UserHeader',
}
</script>