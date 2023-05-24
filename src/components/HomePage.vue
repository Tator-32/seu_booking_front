<template>
    <div>
        <div class="BlueBackground">
            <center>
                <div class="SearchInfos">
                    <el-main>
                        <div class="HouseSearch" style="width:80%;margin: auto;">
                            <el-row>
                                <div class="Destination" style="height:80px;">
                                    <el-col :span="6">
                                        <div class="grid-content-bg-purple">
                                            <span class="demonstration">目的地</span>
                                        </div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div class="grid-content-bg-purple">
                                            <el-cascader v-model="addressPar" placeholder="试试搜索：南京" :options="options" filterable></el-cascader>
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
                                    <el-button type="primary" @click="hotelInfoSearch(addressPar)">
                                        查询
                                    </el-button>
                                </center>
                            </el-row>
                        </div>
                    </el-main>
                </div>
            </center>
        </div>

        <div class="EpidemicNotice" style="margin-top: 50px; margin-bottom: 50px;">
            <el-row>
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="16">
                    <el-collapse>
                        <el-collapse-item>
                            <template slot="title">
                                <el-col :span="4" style="text-align: right;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z">
                                        </path>
                                    </svg>
                                </el-col>
                                <el-col :span="20">
                                    <div style="text-align: left; font-weight: bolder; font-size:medium">
                                        &nbsp;&nbsp;新冠肺炎（COVID-19）疫情帮助
                                    </div>
                                </el-col>
                            </template>
                            <el-row>
                                <el-col :span="4">
                                    &nbsp;
                                </el-col>
                                <el-col :span="20">
                                    <div style="text-align: left; font-size:medium">
                                        &nbsp;&nbsp;获取所需建议。出行前查看最新新冠肺炎（COVID-19）相关限制。
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="4">
                                    &nbsp;
                                </el-col>
                                <el-col :span="20">
                                    <div style="text-align: left; font-size:medium">
                                        <a target="_blank" aria-label="查看最新新冠肺炎（COVID-19）旅行限制"
                                            data-testid="global-alert-link"
                                            href="https://www.booking.com/covid-19.html?aid=397645&amp;label=bin859jc-1DCAEoggI46AdIK1gDaDGIAQGYASu4ARfIAQzYAQPoAQH4AQKIAgGoAgO4ArbStqMGwAIB0gIkYmE1NTk5YWYtOWExYS00NDg5LWI3ZTktZTA0M2NkYWRiM2Qy2AIE4AIB"
                                            class="fc63351294 a168c6f285 a25b1d9e47"
                                            style="color:blue; text-decoration: none;">
                                            <span>&nbsp;&nbsp;了解详情</span>
                                        </a>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-collapse-item>

                    </el-collapse>
                </el-col>
                <el-col :span="4">&nbsp;</el-col>
            </el-row>
        </div>

        <div class="EventBody">
            <el-row style="margin-top: 50px; margin-bottom: 100px;">

                <el-row style="margin-right: auto; margin-bottom: 20px;">
                    <el-col :span="5">&nbsp;</el-col>
                    <el-col :span="14">
                        <div style="font-size: xx-large; font-weight: bold; text-align: left;">推荐目的地</div>
                        <div style="text-align: left;">带您纵情山水，遨游四海。</div>
                    </el-col>
                    <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <el-row>
                    <el-col :span="5">&nbsp;</el-col>
                    <el-col :span="14">
                        <div class="block">
                            <el-carousel trigger="click">
                                <el-carousel-item v-for="item in destinationUrl" :key="item">
                                    <img :src="item.url" :fit="scale - down"
                                        style="height: 400px; width: 600px; position: absolute; transform: translate(-50%, -50%); top: 50%;">
                                    <label
                                        style="position: absolute;  transform: translate(-50%, -50%); top: 20%; left: 30%;color:ivory; font-size: 25px; font-weight: bold;">{{
                                            item.name }}</label>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-col>
                    <el-col :span="5">&nbsp;</el-col>
                </el-row>
            </el-row>
        </div>

        <div class="EventBody">
            <el-row style="margin-top: 50px; margin-bottom: 100px;">

                <el-row style="margin-right: auto; margin-bottom: 20px;">
                    <el-col :span="5">&nbsp;</el-col>
                    <el-col :span="14">
                        <div style="font-size: xx-large; font-weight: bold; text-align: left;">查看房型</div>
                        <div style="text-align: left;">万般样式，总是合心合意。</div>
                    </el-col>
                    <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <el-row>
                    <el-col :span="5">&nbsp;</el-col>
                    <el-col :span="14">
                        <div class="ImageDemonstration" style="color: black;">
                            <el-col :span="4" v-for="item in roomTypeUrl" :key="item">
                                <el-image style="width: 100px; height: 100px; display: flex; align-items: left;"
                                    :src="item.url" :fit="scale - down" @click="roomInfoSearch(item.name)"></el-image>
                                <el-row style="text-align: left; font-size: large;">{{ item.name }}</el-row>
                                <el-row style="text-align: left; font-size: small;">共有{{ item.number }}家住宿</el-row>
                            </el-col>
                        </div>
                    </el-col>
                    <el-col :span="5">&nbsp;</el-col>
                </el-row>
            </el-row>
        </div>

        <div class="EventBody">
            <el-row style="margin-top: 50px; margin-bottom: 100px;">

                <el-row style="margin-right: auto; margin-bottom: 20px;">
                    <el-col :span="5">&nbsp;</el-col>
                    <el-col :span="14">
                        <div style="font-size: xx-large; font-weight: bold; text-align: left;">住宿推荐</div>
                        <div style="text-align: left;">舒适轻奢，备受旅客青睐。</div>
                    </el-col>
                    <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="5">&nbsp;</el-col>
                    <el-col :span="14">
                        <el-col :span="8" v-for="item in recommendUrl" :key="item">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url"></el-image>
                                <div style="padding: 14px;">
                                    <div style="text-align: left; font-weight: bold; font-size: large;">
                                        <span>{{ item.name }}</span>
                                    </div>
                                    <div class="bottom clearfix">
                                        <div class="Describe" style="text-align: left;">{{ item.desc }}</div>
                                        <el-button type="text" class="button">现在预定</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-col>
                    <el-col :span="5">&nbsp;</el-col>
                </el-row>
            </el-row>
        </div>

        <div class="EventBody">
            <el-row style="margin-top: 50px; margin-bottom: 100px;">

                <el-row style="margin-right: auto; margin-bottom: 20px;">
                    <el-col :span="5">&nbsp;</el-col>
                    <el-col :span="14">
                        <div style="font-size: xx-large; font-weight: bold; text-align: left;">推荐旅地特色</div>
                        <div style="text-align: left;">巷间花里，皆是人生惊喜</div>
                    </el-col>
                    <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="5">&nbsp;</el-col>
                    <el-col :span="14">
                        <el-col :span="8" v-for="item in recommendDestUrl" :key="item">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url"></el-image>
                                <div style="padding: 14px;">
                                    <div style="text-align: left; font-weight: bold; font-size: large;">
                                        <span>{{ item.name }}</span>
                                    </div>
                                    <div class="bottom clearfix">
                                        <div class="Describe" style="text-align: left; margin-bottom: 15px;">{{ item.desc }}
                                        </div>
                                        <el-button type="text" class="button">查看周边</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-col>
                    <el-col :span="5">&nbsp;</el-col>
                </el-row>
            </el-row>
        </div>

        <el-footer height="200px" style="background-color: rgb(22, 59, 150);">
            <el-row>
            </el-row>
        </el-footer>
        <el-row>
            <div style="color: rgb(15, 30, 100);">
                <el-col span="4" offset="2" style="display: flex;flex-direction: column;line-height: 30px;font-size: 10px;">
                    <el-link type="primary">国家/地区</el-link>
                    <el-link type="primary">区域</el-link>
                    <el-link type="primary">城市</el-link>
                    <el-link type="primary">区</el-link>
                    <el-link type="primary">机场</el-link>
                    <el-link type="primary">酒店</el-link>
                    <el-link type="primary">周边地标/景点</el-link>
                </el-col>
                <el-col span="4" style="display: flex;flex-direction: column;line-height: 30px;font-size: 10px;">
                    <el-link type="primary">民宿短租</el-link>
                    <el-link type="primary">公寓</el-link>
                    <el-link type="primary">度假村</el-link>
                    <el-link type="primary">别墅</el-link>
                    <el-link type="primary">青旅</el-link>
                    <el-link type="primary">住宿加早餐旅馆</el-link>
                    <el-link type="primary">旅馆</el-link>
                </el-col>
                <el-col span="4" style="display: flex;flex-direction: column;line-height: 30px;font-size: 10px;">
                    <el-link type="primary">租车服务</el-link>
                    <el-link type="primary">订机票</el-link>
                    <el-link type="primary">餐厅订位</el-link>
                    <el-link type="primary">Booking代理机构中心</el-link>
                </el-col>
                <el-col span="4" style="display: flex;flex-direction: column;line-height: 30px;font-size: 10px;">
                    <el-link type="primary">全球独特住宿</el-link>
                    <el-link type="primary">客人点评</el-link>
                    <el-link type="primary">探索月租</el-link>
                    <el-link type="primary">游记攻略</el-link>
                    <el-link type="primary">季节和假日优惠</el-link>
                    <el-link type="primary">Traveller Review Awards</el-link>
                </el-col>
                <el-col span="4" style="display: flex;flex-direction: column;line-height: 30px;font-size: 10px;">
                    <el-link type="primary">新冠肺炎疫情常见问题及解答</el-link>
                    <el-link type="primary">关于Booking</el-link>
                    <el-link type="primary">联系我们</el-link>
                    <el-link type="primary">营业执照</el-link>
                    <el-link type="primary">客服帮助</el-link>
                    <el-link type="primary">酒店自助平台</el-link>
                    <el-link type="primary">Careers</el-link>
                    <el-link type="primary">可持续发展项目</el-link>
                    <el-link type="primary">新闻中心</el-link>
                    <el-link type="primary">安全旅行信息中心</el-link>
                    <el-link type="primary">投资者关系</el-link>
                    <el-link type="primary">条款与条件</el-link>
                    <el-link type="primary">合作伙伴申诉</el-link>
                </el-col>
            </div>
        </el-row>

    </div>
</template>


<style scoped>
.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.carousel-item-container {
    height: 600px;
}

.carousel-item-image {
    height: 100%;
    width: 100%;
    background-position: center bottom;
    background-size: cover;
    object-fit: contain;
}

.demonstration {
    color: white;
}

.grid-content-bg-purple {
    width: 200px
}

.BlueBackground {
    background-color: rgb(22, 59, 150);
    margin: -16px;
    padding: 0px;
    border: 0px;
    text-align: center;
}

.SearchInfos {
    text-align: left;
    width: fit-content;
}

.EventBody {
    color: rgb(0, 0, 133);
    margin: 14px;
}
</style>

<script>
import cityData from "../assets/cityData.js";
export default {
    name: "home",
    data() {
        return {
            destinationUrl: [{
                name: "北京",
                url: "https://images.pexels.com/photos/5760659/pexels-photo-5760659.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }, {
                name: "上海",
                url: "https://ac-a.static.booking.cn/xdata/images/city/600x600/683831.jpg?k=bbe0665d459d2ca7a7be29dbae2f8f4c13924f320da1a2a7bdec4f30b1e9470a&o="
            }, {
                name: "南京",
                url: "https://ac-a.static.booking.cn/xdata/images/city/600x600/683806.jpg?k=176bc3ee4fa71288a12427ff8f9b7305f79ddf9986eb726e1bc4f60165b38899&o="
            }, {
                name: "长沙",
                url: "https://ac-a.static.booking.cn/xdata/images/city/600x600/683689.jpg?k=928dfb86b1457f3ae84e92d14af6e77343632607c61aa62906b5f0e2149a78f5&o="
            }
            ],
            roomTypeUrl: [{
                name: "大床房",
                number: "667",
                url: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
            }, {
                name: "双床房",
                number: "865",
                url: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
            }, {
                name: "家庭房",
                number: "122",
                url: "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o="
            }, {
                name: "豪华套间",
                number: "841",
                url: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450097.jpeg?k=eac0f917a53dc395bd379fef8c191e7d5e37012b68e60232e4f6bba2a2901b7a&o="
            }, {
                name: "行政套间",
                number: "348",
                url: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
            }, {
                name: "露台套房",
                number: "27",
                url: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o="
            },],
            recommendUrl: [{
                name: "海悦滨江酒店公寓",
                desc: "好极了 9.0",
                url: "https://ac-a.static.booking.cn/xdata/images/hotel/max300/121257262.jpg?k=7dfe84aa637cc6d0e4396669aab80e80a6e42a421b8d78b3ec05cc3f6fc152a0&o=&hp=1"
            }, {
                name: "北京5号小院",
                desc: "好极了 9.0",
                url: "https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/314005096.jpg?k=07b7838b29371bb1cbd4fbccf5640db09b935196c057be9790627a8dcfe32999&o=&hp=1"
            }, {
                name: "上海大华长风华邑酒店",
                desc: "优异的 10.0",
                url: "https://ac-a.static.booking.cn/xdata/images/hotel/max300/416059547.jpg?k=64f96d0b3082966fb63da15db71a51ee8921cdbfd3fbc97421f9b65f99cb5f14&o=&hp=1"
            }],
            recommendDestUrl: [{
                name: "鼓浪屿",
                desc: "摇曳海屿风情，跃动缤纷色彩",
                url: "https://img.zcool.cn/community/01e5b15c8f05e9a80121416853d52c.jpg@1280w_1l_2o_100sh.jpg"
            }, {
                name: "青岩古镇",
                desc: "感受苗家历史，静听石间呼吸",
                url: "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/92ebdac983d1bb888fc804435c647a92.jpg"
            }, {
                name: "牛首山",
                desc: "山下竹林滔滔，山顶佛音浩浩",
                url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F338732%2F15ff3b30d4e34a1794a91f54fb800d31.jpeg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMzM4NzMyLzE1ZmYzYjMwZDRlMzRhMTc5NGE5MWY1NGZiODAwZDMxLmpwZWc%3D%2Fsign%2Fa02a9b2d972a3baad1ca43471f87926b.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687518619&t=ae2bef7fc2e310a0eaaada11e9bcd3ce"
            }],
            options: cityData.options,
            addressPar: "",
            hotelNamePar: "",
            timeValueIn: "",
            timeValueOut: "",
            Visitors: "成人：2/ 儿童：0/ 客房：1",
            andultNum: 2,
            childNum: 0,
            houseNum: 1,
            hotelUrl: 'http://114514.cn/yjsp.jpeg'
        };
    },
    methods: {
        handleChange(value) {
            this.Visitors = "成人：" + this.andultNum.toString() + "/ 儿童：" + this.childNum.toString() + "/ 客房：" + this.houseNum.toString();
        },
        hotelInfoSearch(hotelNameVar) {
            this.$router.push ({
                name: 'SearchList',
                params: {
                    type: "hotel_address",
                    searchPar: hotelNameVar,
                }
            });
        },
        roomInfoSearch(roomTypeVar) {
            this.$router.push ({
                name: 'SearchList',
                params: {
                    type: "room_type",
                    searchPar: roomTypeVar,
                }
            });
        },
        searchRoomType(roomType) {
            this.$message({ type: "success", message: roomType });
        }
    }

}
</script>