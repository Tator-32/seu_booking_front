<template>
    <div>
        <div class="BlueBackground">
            <center>
                <div class="SearchInfos">
                    <el-main>
                        <div class="HouseSearch">
                            <el-row>
                                <div class="Destination" style="height:80px;">
                                    <el-col :span="6">
                                        <div class="grid-content-bg-purple">
                                            <span class="demonstration">目的地</span>
                                        </div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div class="grid-content-bg-purple">
                                            <el-cascader placeholder="试试搜索：南京" :options="options" filterable></el-cascader>
                                        </div>
                                    </el-col>
                                </div>
                            </el-row>
                            <el-row>
                                <div class="TimeIn" style="height:80px;">
                                    <el-col :span="6">
                                        <div class="grid-content-bg-purple">
                                            <span class="demonstration">入住日期</span>
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="grid-content-bg-purple">
                                            <el-date-picker v-model="timeValueIn" type="date" placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </el-col>
                                </div>
                            </el-row>
                            <el-row>
                                <div class="TimeOut" style="height:80px;">
                                    <el-col :span="6">
                                        <div class="grid-content-bg-purple">
                                            <span class="demonstration">退房日期</span>
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="grid-content-bg-purple">
                                            <el-date-picker v-model="timeValueOut" type="date" placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </el-col>
                                </div>
                            </el-row>
                            <el-row>
                                <div class="Visitors" style="height:80px">
                                    <el-col :span="6">
                                        <div class="grid-content-bg-purple">
                                            <span class="demonstration">入住人员</span>
                                        </div>
                                    </el-col>
                                    <el-dropdown>
                                        <el-input v-model="Visitors" placeholder="入住情况" readonly></el-input>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-row>
                                                成人
                                                <el-input-number v-model="andultNum" @change="handleChange" :min="1"
                                                    :max="10"></el-input-number>
                                            </el-row>
                                            <el-row>
                                                儿童
                                                <el-input-number v-model="childNum" @change="handleChange" :min="0"
                                                    :max="10"></el-input-number>
                                            </el-row>
                                            <el-row>
                                                客房
                                                <el-input-number v-model="houseNum" @change="handleChange" :min="1"
                                                    :max="10"></el-input-number>
                                            </el-row>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </el-row>
                            <el-row>
                                <center>
                                    <el-button type="primary" @click="hotelInfoSearch">
                                        查询
                                    </el-button>
                                </center>
                            </el-row>
                        </div>
                    </el-main>
                </div>
            </center>
        </div>
        <div class="HomePageRecommendation">
            <el-container>
                <el-header style="margin-right: auto;">
                    <div style="font-size: xx-large; font-weight: bold; text-align: left;">推荐目的地</div>
                    <div style="text-align: left;">带您纵情山水，遨游四海。</div>
                </el-header>
                <el-main>
                    <div class="block">
                        <el-carousel trigger="click" height="400px" width="300px">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3 class="small">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>


<style scoped>
.demonstration {
    color: white;
}

.grid-content-bg-purple {
    width: 200px
}

.BlueBackground {
    background-color: rgb(22, 59, 150);
    margin: -8px;
    padding: 0px;
    border: 0px;
    text-align: center;
}

.SearchInfos {
    text-align: left;
    width: fit-content;
}

.HomePageRecommendation {
    margin: 20px;
}

.HomePageRecommendation>>>.el-header {
    color: rgb(0, 0, 133);
}
</style>

<script>
export default {
    name: "home",
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            options: [{
                value: "JiangSu",
                label: "江苏",
                children: [{
                    value: "NanJing",
                    label: "南京",
                    children: [{
                        value: "JiangNing",
                        label: "江宁"
                    }, {
                        value: "JianYe",
                        label: "建邺"
                    }]
                }, {
                    value: "XuZhou",
                    label: "徐州"
                }]
            }],
            timeValueIn: "",
            timeValueOut: "",
            Visitors: "",
            andultNum: 2,
            childNum: 0,
            houseNum: 1
        };
    }, 
    methods: {
        handleChange(value) {
            this.Visitors = "成人：" + this.andultNum.toString() + "/ 儿童：" + this.childNum.toString() + "/ 客房：" + this.houseNum.toString();
        },
        hotelInfoSearch() {
            
        }
    }

}
</script>