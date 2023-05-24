<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" width="1400px" height="800px" padding="0px">
      <el-row>
        <el-col span=12>
          <div class="dialogitem" v-for="(item, index) in hotels" :key="index" :item="item"
            style="z-index: -1; margin-top: 20px;">
            <el-row>
              <el-col span=7>
                <el-image class="dialogimg" fit="fit" v-model="item.id"
                  src="https://www.zhaodanji.com/uploadfile/2020/1222/20201222014439173.jpg"></el-image>
              </el-col>
              <el-col span=9 offset=2 v-model="item.id" gutter="0px">
                <div style="display:flex;flex-wrap: wrap;position: relative;">
                  <div class="content">
                    <span class="hoteltitle" @mouseenter="EnterTitle2(item)" @mouseleave="LeaveTitle2(item)"
                      @click="ClickTitle(item.id)">
                      {{ item.name }}
                    </span>
                    <span>
                      <i class="el-icon-star-on" v-for="i in item.stars" :key="i" style="
                                    color: rgb(255,182,0);
                                    margin-right: 0px;
                                    font-size: 20px; 
                                    background-size: cover;
                                    position: relative;
                                    display: inline-block;
                                    transform: translateY(2px);">
                      </i>
                    </span>
                  </div>
                </div>
                <div style="display: flex; margin-top: 15px; font-size: 12px; font-weight: 400;">
                  <div>离中心地区{{ DistanceToCenter(item) }}千米</div>
                  <div v-if="true">靠近地铁站</div>
                </div>
                <div style="margin-top: 30px; font-size: 10px;line-height: 18px;font-weight: 400;">
                  {{ item.comment }}
                </div>
              </el-col>
              <el-col span=6>
                <el-row>
                  <el-col span=24>
                    <el-row style="margin-top: 10px;">
                      <div style="font-size: 20px; text-align: right; margin-top: 10px;">好极了</div>
                    </el-row>
                    <el-row>
                      <div style="text-align: right;">1000条住客点评</div>
                    </el-row>
                  </el-col>
                  <el-col span=6 offset=16 style="margin-top: 10px;">
                    <div>
                      <el-button type="primary"
                        style="font-size: 20px; padding: 10px;background-color: rgb(0,59,149);">9.2</el-button>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col span=10 offset=2>
          <div class="map">
            <baidu-map class="map" :center=mapInfo.center :zoom=mapInfo.zoom :scroll-wheel-zoom="true" :mapClick="false"
              @ready="mapinit">
              <bm-marker :position=mapInfo.center
                :icon="{ url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: { width: 300, height: 157 } }"
                :dragging="true" animation="BMAP_ANIMATION_DROP">
              </bm-marker>
              <template>
                <bm-marker :position="{ lng: 104.116729, lat: 30.629222 }" animation="BMAP_ANIMATION_DROP"
                  style="height: 100px; width: 100px;">
                </bm-marker>
              </template>
            </baidu-map>
          </div>
        </el-col>
      </el-row>
    </el-dialog>

    <el-container style="height: 1000px; border: 0px solid #eee;margin-left: -20px;margin-right: -20px;">
      <el-header>
        <bookingHeader></bookingHeader>
      </el-header>
      <el-container>
        <el-aside width="400px">
          <el-row :gutter="0">
            <el-col :span="17" :offset="6">
              <div style="line-height: 30px;">
                <el-link type="primary">首页</el-link>><el-link type="primary">城市</el-link>><el-link
                  type="primary">搜索结果</el-link>
              </div>
              <div style="border-radius: 30px;background-color: bisque;">
                <el-button icon="el-icon-position" circle @click="displayMap"></el-button>
                在地图上显示
              </div>
              <div class="grid-content light-orange"
                style="font-size: small; text-indent: 20px;font-weight: 400;margin-top: 20px;">
                <div class="grid-content orange"
                  style="height: 50px;border-radius:10cap;font-size: large;line-height: 60px; font-style: bold;">
                  境内外特价搜不停
                </div>
                <p style="line-height: 5px;text-indent: 20px;">
                  目的地/住宿名称
                </p>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input1"
                  style="width: 250px;text-indent: 0px;display: flex; justify-content: flex-start;margin-left: 20px;">
                </el-input>
                <p style="line-height: 5px;text-indent: 20px;">
                  入住日期
                </p>
                <el-date-picker v-model="value1" align="right" type="date" placeholder="入住日期"
                  :picker-options="pickerOptions" style="width: 250px;text-indent: 0px;margin-left: 20px;">
                </el-date-picker>
                <p style="line-height: 5px;text-indent: 20px;">
                  退房日期
                </p>
                <el-date-picker v-model="value2" align="right" type="date" placeholder="退房日期"
                  :picker-options="pickerOptions" style="width: 250px;text-indent: 0px;margin-left: 20px;">
                </el-date-picker>
                <br>
                <div class="Visitors" style="text-indent: 0px; margin-top: 10px;margin-left: 20px;">
                  <el-dropdown style="width: 250px;">
                    <el-input v-model="Visitors" placeholder="入住情况"></el-input>
                    <el-dropdown-menu slot="dropdown" style="width: 270px;">
                      <el-row style="margin-left: 20px;">
                        成人
                        <el-input-number v-model="adultNum" @change="handleChange" :min="1" :max="10"
                          label="描述文字"></el-input-number>
                      </el-row>
                      <el-row style="margin-left: 20px;">
                        儿童
                        <el-input-number v-model="childNum" @change="handleChange" :min="0" :max="10"
                          label="描述文字"></el-input-number>
                      </el-row>
                      <el-row style="margin-left: 20px;">
                        客房
                        <el-input-number v-model="houseNum" @change="handleChange" :min="1" :max="10"
                          label="描述文字"></el-input-number>
                      </el-row>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="17" :offset="6">
              <div class="asideitem">
                <div style="margin-top: 10px;">缩小搜索范围</div>
                <hr>
                <div>
                  热门筛选
                  <div>
                    <el-checkbox v-for="feature in features" :key="feature" v-model="feature.key"
                      style="margin-top: 10px;">
                      {{ feature.value }}
                    </el-checkbox>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-aside>

        <el-main>
          <p class="title">城市：共xxxx家住宿</p>
          <el-dropdown>
            <el-button type="primary" style="background-color:rgb(0,106,228)">
              排序方式：<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="z-index: 999;" popper-append-to-body="false!important">
              <el-dropdown-item @click="RecommandDefault">热门推荐</el-dropdown-item>
              <el-dropdown-item @click="RecommandStars">住宿评级</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="item" v-for="item in hotels" :key="item.id" :item="item" style="z-index: -1; margin-top: 20px;">
            <el-row>
              <el-col span="7">
                <el-image class="mainimg" fit="fit" v-model="item.id"
                  src="https://www.zhaodanji.com/uploadfile/2020/1222/20201222014439173.jpg"></el-image>
              </el-col>
              <el-col span="10" offset="1" v-model="item.id" gutter="0px">
                <div style="display:flex;flex-wrap: wrap;position: relative;">
                  <div class="content">
                    <span class="hoteltitle" @mouseenter="EnterTitle(item)" @mouseleave="LeaveTitle(item)"
                      @click="ClickTitle(item.id)">
                      {{ item.name }}
                    </span>
                    <span>
                      <i class="el-icon-star-on" v-for="i in item.stars" :key="i" style="
                                    color: rgb(255,182,0);
                                    margin-right: 0px;
                                    font-size: 20px; 
                                    background-size: cover;
                                    position: relative;
                                    display: inline-block;
                                    transform: translateY(2px);">
                      </i>
                    </span>
                  </div>
                </div>
                <div style="display: flex; margin-top: 15px; font-size: 12px; font-weight: 400;">
                  <div>离中心地区{{ DistanceToCenter(item) }}千米</div>
                  <div v-if="true">靠近地铁站</div>
                </div>
                <div style="margin-top: 30px; font-size: 10px;line-height: 18px;font-weight: 400;">
                  {{ item.comment }}
                </div>
              </el-col>
              <el-col span="6">
                <el-row>
                  <el-col span="18">
                    <el-row>
                      <div style="font-size: 20px; text-align: right; margin-top: 10px;">好极了</div>
                    </el-row>
                    <el-row>
                      <div style="text-align: right;">1000条住客点评</div>
                    </el-row>
                  </el-col>
                  <el-col span="6">
                    <div>
                      <el-button type="primary"
                        style="font-size: 20px; padding: 10px;background-color: rgb(0,59,149);">9.2</el-button>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <div style="margin-top: 30px; float: right;">
                    <el-button @click="GetPrice" type="primary"
                      style="font-size: 15px; padding: 10px; background-color:rgb(0,106,228) ;">
                      显示价格
                    </el-button>
                  </div>
                </el-row>
              </el-col>
            </el-row>
          </div>
          <el-pagination layout="prev, pager, next" :total="100">
          </el-pagination>
        </el-main>
      </el-container>
      <el-footer height="200px" style="background-color: cornflowerblue;">Footer
        <el-row>
        </el-row>
      </el-footer>
      <el-row>
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
          <el-link type="primary">新冠肺炎（COVID-19）疫情常见问题及解答</el-link>
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
      </el-row>
    </el-container>
  </div>
</template> 
<style scoped>
.el-header,
.el-footer {
  background-color: rgb(255, 255, 255);
  height: 300px;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 50px;
}

.el-aside {
  background-color: rgb(255, 255, 255);
  color: #333;
  text-align: left;
  line-height: 20px;
}

.el-main {
  background-color: rgb(255, 255, 255);
  color: #333;
  text-align: left;
  text-indent: 20px;
  line-height: 10px;
}

body>.el-container {
  margin-bottom: 0px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 10px;
}

.orange {
  background: #ffb700;
}

.light-orange {
  background: #ffc489;
}

.grid-content {
  border-radius: 10px;
  min-height: 36px;
  line-height: 15px;
  text-indent: 20px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.title {
  font-size: 30px;
  font-style: bold;
  font-weight: 700;
  text-align: left;
  text-indent: 20px;
}

.item {

  padding: 10px;
  line-height: 10%;
  text-indent: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  font-family: Arial, Helvetica, sans-serif
}

.asideitem {
  line-height: 15px;
  text-indent: 20px;
  margin-top: 30px;
  border-radius: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.mainimg {
  width: 300px;
  height: 300px;
}

.hoteltitle {
  font-size: 20px;
  font-style: bold !important;
  font-weight: 700;
  line-height: 28px;
  flex: 1;
  color: rgb(0, 106, 228);
  word-break: break-all;
  overflow: hidden;
}

.hoteltitleActive {
  font-size: 20px;
  font-style: bold !important;
  line-height: 150%;
  color: black;
  word-break: break-all;
  overflow: hidden;


}

.hotelcontext {
  font-size: 12px;
  word-break: break-all;
  overflow: hidden;
}

.content {
  font-size: 14px;
  line-height: 20px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

/*撑开高度，确保icon-1位于文本右下方*/
.content::before {
  content: '';
  display: block;
  float: right;
  width: 0px;
  height: calc(100% - 18px);
}

/*用于文本未超出时遮挡icon-1*/
.content::after {
  position: absolute;
  content: '';
  display: inline-block;
  width: 100%;
  height: 100%;
}

.option {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
}

.mapwindow {
  width: 100%;
  height: 100%;
  background-color: violet;
  position: fixed;
  top: 0px;
  bottom: 0px;
}

.map {
  width: 550px;
  height: 500px;
}

.dialogitem {
  padding: 10px;
  line-height: 10%;
  text-indent: 5px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  font-family: Arial, Helvetica, sans-serif
}

.dialogimg {
  width: auto;
  height: auto;
}
</style>
<script>
import header from '../../src/components/UserHeader'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
// import markericon from "../../public/img/icon_map.png";

export default {
  name: 'search',
  components: {
    'bookingHeader': header,
    BaiduMap
  },
  data() {
    return {
      searchCondition: "",
      searchType: "",
      searchResult: [{}],
      dialogVisible: false,
      features: [
        {
          key: 'stars',
          value: '五星级'
        },
        {
          key: 'type',
          value: '酒店'
        },
        {
          key: 'equipment',
          value: '健身房'
        },
        {
          key: 'location',
          value: '靠近中心'
        },

      ],
      hotels: [
        {
          id: 1,
          name: '大鸟转转转',
          stars: 5,
          address: 'nightcity',
          img: "https://www.zhaodanji.com/uploadfile/2020/1222/20201222014439173.jpg",
          label: "low-carbon",
          comment: "大鸟转转转酒吧是赛博朋克2077里的一个男同性恋酒吧，这个酒吧就是针对男同性恋而开设的，在夜之城非常的有名。而且在支线的委托任务中，也会要求玩家前往一探究竟。在接到委托拉德利罗先生的私藏任务后，传送前往丽景区德拉曼总部点的对面就是大鸟转转转酒吧，但是网上流传广泛的能够提供服务是不存在的，所以请不要失望。",
          scores: 10.0,
          pos: {
            lng: 104.116729,
            lat: 30.629222
          }
        },
      ],
      mapInfo: {
        ak: "7YnpT6md6PPyVg1b40cxBaMOTbO013Xn",
        center: {
          lng: 104.116729,
          lat: 30.629222
        },
        zoom: 17
      },

      totalPage: [],
      // 每页显示数量
      pageSize: 5,
      // 共几页
      pageNum: 1,
      // 当前显示的数据
      dataShow: "",
      // 默认当前显示第一页
      currentPage: 0,

      input1: '',
      value1: '',
      value2: '',
      value3: [],
      adultNum: 2,
      childNum: 0,
      houseNum: 1,
      Visitors: "成人：2/ 儿童：0/ 客房：1",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
    };
  },
  mounted() {
    // this.getLocation;
    this.searchCondition = this.$route.params.searchPar;
    this.searchType = this.$route.params.type;
    this.$http.post("/hotelsearch",
      {
        type: this.searchType,
        searchVal: this.searchCondition
      }
    ).then(res => {
      if (res) {
        this.searchResult = res.data;
        //console.log(this.searchResult);
      }
    }
    ).catch(function (error) { alert("连接失败"); });
  },
  methods: {
    init() {
      this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1;
      for (let i = 0; i < this.pageNum; i++) {
        // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5条，即slice(0,5)，第二页是6-10条，即slice(5,10)...
        this.totalPage[i] = this.data.slice(this.pageSize * i, this.pageSize * (i + 1));
      }
      this.dataShow = this.totalPage[this.currentPage];
    },

    nextPage() {
      if (this.currentPage === this.pageNum - 1) return;
      this.dataShow = this.totalPage[++this.currentPage];
    },
    // 上一页
    prePage() {
      if (this.currentPage === 0) return;
      this.dataShow = this.totalPage[--this.currentPage];
    },
    GetPrice() {

    },
    RecommandDefault() {

    },
    RecommandStars() {

    },
    EnterTitle(index) {
      document.getElementById(index).classList.add();

    },
    LeaveTitle(index) {
      document.getElementById().classList.remove();

    },
    ClickTitle(index) {

    },
    handleChange(value) {
      this.Visitors = "成人：" + this.adultNum.toString() + "/ 儿童：" + this.childNum.toString() + "/ 客房：" + this.houseNum.toString();
    },
    mapinit({ BMap, map }) {
      console.log(BMap, map);

    },
    displayMap() {
      this.dialogVisible = true;
    },
    getLocation(address) {
      var url = '/api/ws/geocoder/v1/?key=LFYBZ-I5E3Z-H6SXU-ZIWDL-2S773-J2BF2&address=' + encodeURIComponent(address);
      this.$http.get(url)
        .then(response => {
          if (response.data) {
            console.log(response.data);
            return response.data.result.location;
          }
        })
    },
    DistanceToCenter(item) {
      var lat1 = this.mapInfo.center.lat;
      var lon1 = this.mapInfo.center.lng;
      var lat2 = item.pos.lat;
      var lon2 = item.pos.lng;


      var R = 6371; // 地球半径（千米）
      var dLat = (lat2 - lat1) * Math.PI / 180; // 将纬度转换为弧度

      var dLon = (lon2 - lon1) * Math.PI / 180; // 将经度转换为弧度

      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distance = R * c; // 计算距离（千米）

      return distance;

    },
    CloseToMetro(item) {
      return true;
    }
  },


  computed: {
  },
}
</script>