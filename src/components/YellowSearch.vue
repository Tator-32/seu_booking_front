<template>
    <div class="YellowSearch">
        <center>
            <el-aside width="250px" style="margin-top: 20px;margin-bottom: 20px;">
                <span class="title">境内外特价搜不停</span>
                <el-row>
                    <div class="city" style="height:80px;">
                        <div class="grid-content-bg-purple">
                            <span class="demonstration" style="display: flex; justify-content: flex-start;">目的地/住宿名称：</span>
                        </div>

                        <div class="grid-content-bg-purple" style="display: flex; justify-content: flex-start;">
                            <el-input v-model="input" placeholder="东京"></el-input>
                        </div>
                    </div>
                </el-row>
                <el-row>
                    <div class="TimeIn" style="height:80px;">
                        <div class="grid-content-bg-purple">
                            <span class="demonstration" style="display: flex; justify-content: flex-start;">入住日期</span>
                        </div>

                        <div class="grid-content-bg-purple" style="display: flex; justify-content: flex-start;">
                            <el-date-picker v-model="timeValueIn" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </div>
                </el-row>
                <el-row>
                    <div class="TimeOut" style="height:80px;">
                        <div class="grid-content-bg-purple">
                            <span class="demonstration" style="display: flex; justify-content: flex-start;">退房日期</span>
                        </div>
                        <div class="grid-content-bg-purple" style="display: flex; justify-content: flex-start;">
                            <el-date-picker v-model="timeValueOut" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </div>
                </el-row>
                <el-row>
                    <div class="Visitors" style="height:80px">
                        <el-dropdown>
                            <el-input v-model="Visitors" placeholder="入住情况"></el-input>
                            <el-dropdown-menu slot="dropdown">
                                <el-row>
                                    成人
                                    <el-input-number v-model="andultNum" @change="handleChange" :min="1" :max="10"
                                        label="描述文字"></el-input-number>
                                </el-row>
                                <el-row>
                                    儿童
                                    <el-input-number v-model="childNum" @change="handleChange" :min="0" :max="10"
                                        label="描述文字"></el-input-number>
                                </el-row>
                                <el-row>
                                    客房
                                    <el-input-number v-model="houseNum" @change="handleChange" :min="1" :max="10"
                                        label="描述文字"></el-input-number>
                                </el-row>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-row>
                <el-row style="display: flex; justify-content: flex-start;">
                    <div class="massage">
                        <el-col :span="6">
                            <div class="massage_sentense" style="margin-left: 20px;">
                                <el-checkbox label="显示房子和公寓" float:left></el-checkbox>
                                <el-checkbox label="我要出差" float:left></el-checkbox>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="massage_hint">

                            </div>
                        </el-col>
                    </div>
                </el-row>
                <el-row>
                    <center>
                        <el-button type="primary">
                            搜特价
                        </el-button>
                    </center>
                </el-row>
            </el-aside>
        </center>
    </div>
</template>

<style scoped>
.YellowSearch {
    transform: scale(0.8);
    background-color: #FFC489;
    border-radius: 20px;
}



.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.grid-content-bg-purple {
    width: 200px
}

</style>
<script>
export default {
    name: 'YellowSearch',
}
</script>