<template>
    <div>
        <UserHeader></UserHeader>

        <div class="third_page" style="margin-top: 50px;">


            <div class="facility" ref="facility">
                <el-row>
                    <div class="facility_title" style="font-weight: bold; font-size: 2em;">
                        个人信息
                    </div>
                </el-row>
                <div>
                    <el-row>
                        <el-col :span="8">
                            <el-row>
                                <el-col :span="24">
                                    <div>
                                        <el-card style="margin:10px" shadow="never" prop="order_detail">
                                            <el-row class="card-header">
                                                <div style="font-weight: bold; font-size: 1.05em;">
                                                    <span>订单详情</span>
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row><el-col :span="12">
                                                    <div style="text-align: left;">
                                                        <span>入住时间</span>
                                                    </div>
                                                    <div style="font-weight: bold; font-size: 1.05em; text-align: left;">
                                                        {{ order_detail.in_date }}
                                                    </div>
                                                    <div style="color: dimgrey; text-align: left;">{{ order_detail.in_time
                                                    }}</div>



                                                </el-col>



                                                <el-col :span="12">
                                                    <div style="text-align: left;">
                                                        <span>退房时间</span>
                                                    </div>
                                                    <div style="font-weight: bold; font-size: 1.05em; text-align: left;">
                                                        {{ order_detail.out_date }}
                                                    </div>
                                                    <div style="color: dimgrey; text-align: left;">{{ order_detail.out_time
                                                    }}</div>
                                                </el-col></el-row>


                                            <el-row :gutter="0" style="height: 10px; "></el-row>
                                            <el-row>
                                                <el-col :span="12">
                                                    <div style=" text-align: left;font-size: 0.9em;">
                                                        <span>入住总天数:</span>
                                                    </div>
                                                    <div style=" text-align: left;font-size: 0.9em;">{{
                                                        order_detail.time_long }}</div>
                                                </el-col>

                                            </el-row>
                                            <el-divider></el-divider>




                                            <el-col>
                                                <div style=" text-align: left;font-size: 0.9em;">
                                                    <span>已选择:</span>
                                                </div>
                                                <div style=" text-align: left;font-size: 0.9em;">
                                                    {{ order_detail.select_room }}

                                                </div>
                                                <el-row :gutter="0" style="height: 10px; "></el-row>
                                            </el-col>

                                        </el-card>
                                        <el-card style="margin:10px" shadow="never" prop="Price">
                                            <el-row class="card-header">
                                                <div style="font-weight: bold; font-size: 1.05em;">
                                                    <span>价格汇总</span>
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <el-col :span="8">
                                                    <div style="text-align: left;">原票价</div>

                                                </el-col>
                                                <el-col :span="8">
                                                    <div style="text-align: right;"> {{ Price.type }} </div>
                                                </el-col>

                                                <el-col :span="8">
                                                    <div style="text-align: right;">{{ Price.origin }}</div>

                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :span="8">
                                                    <div style="text-align: left;">限时优惠</div>

                                                </el-col>
                                                <el-col :span="8">
                                                    <div style="text-align: right;"> {{ Price.type }} </div>
                                                </el-col>

                                                <el-col :span="8">
                                                    <div style="text-align: right;">{{ Price.discount }}</div>

                                                </el-col>
                                            </el-row>
                                            <div style="text-align: left; color:gray; font-size: 0.8em;">
                                                此住宿的部分客房提供限时降价，这些客房满足你的搜索条件，因此你获得了折扣。
                                            </div>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <div>
                                                <el-row style="background:#e4f4ff">
                                                    <el-col :span="8">
                                                        <el-row :gutter="0" style="height: 20px;"></el-row>
                                                        <el-row>
                                                            <div
                                                                style="font-weight: bold; font-size: 1.4em; text-align: left;">
                                                                价格
                                                            </div>
                                                        </el-row>


                                                    </el-col>
                                                    <el-col :span="16">
                                                        <el-row>
                                                            <div
                                                                style="font-weight: bold; font-size: 1.4em; text-align: right;">
                                                                {{ Price.type }}{{ Price.origin }}
                                                            </div>
                                                            <div
                                                                style="text-align: left; color:gray; font-size: 0.8em; text-align: right;">
                                                                税费及其他费用

                                                            </div>
                                                            <div
                                                                style="text-align: left; color:gray; font-size: 0.8em; text-align: right;">

                                                                按住宿当地货币计算
                                                            </div>
                                                        </el-row>
                                                    </el-col>
                                                </el-row>

                                            </div>

                                        </el-card>
                                        <el-card style="margin:10px" shadow="never" prop="Price">
                                            <el-row class="card-header">
                                                <div style="font-weight: bold; font-size: 1.05em;">
                                                    <span>取消费用是多少？</span>
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <el-col :span="8">
                                                    <div style="text-align: left;">取消费用</div>

                                                </el-col>
                                                <el-col :span="8">
                                                    <div style="text-align: right;"> {{ Price.type }} </div>
                                                </el-col>

                                                <el-col :span="8">
                                                    <div style="text-align: right;">{{ Price.cancel }}</div>

                                                </el-col>
                                            </el-row>


                                        </el-card>


                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="16">
                            <el-row>
                                <el-col :span="24">
                                    <div>
                                        <el-card style="margin:10px" shadow="never" prop="info_room">
                                            <el-col :span="6">
                                                <el-image style="width: 140px; height: 160px;" :src="info_room.image"
                                                    :fit="fill"></el-image>

                                            </el-col>
                                            <el-col :span="18">
                                                <div style="text-align: left; font-size: 0.8em;">
                                                    {{ info_room.type }} <i class="el-icon-thumb"></i>
                                                </div>
                                                <el-row :gutter="0" style="height: 5px; "></el-row>
                                                <div style="font-weight: bold; font-size: 1.2em; text-align: left;">
                                                    {{ info_room.name }}
                                                </div>
                                                <el-row :gutter="0" style="height: 1px; "></el-row>
                                                <div style="text-align: left; font-size: 0.9em;">
                                                    {{ info_room.location }}

                                                </div>
                                                <div style="text-align: left; color:darkgreen; font-size: 0.8em;">
                                                    {{ info_room.good }}


                                                </div>
                                                <div style="text-align: left; color:gray; font-size: 0.8em;">
                                                    {{ info_room.comment }}条评价
                                                </div>
                                                <div style="text-align: left;  font-size: 0.8em;">
                                                    <i class="el-icon-warning-outline"></i>无限网络 <i
                                                        class="el-icon-warning-outline"></i> 停车场
                                                </div>
                                            </el-col>
                                        </el-card>
                                        <el-card style="margin:10px" shadow="never" prop="notation">
                                            <el-row class="card-header">
                                                <div style="font-weight: bold; font-size: 1.2em;">
                                                    <span>温馨提示：</span>

                                                </div>
                                                <div>
                                                    <i style="color:green" class="el-icon-check"></i>{{ notation.note }}
                                                </div>
                                            </el-row>
                                        </el-card>
                                        <el-card style="margin:10px; background:#e4f4ff" shadow="never" prop="Price">
                                            <el-row class="card-header">
                                                <div style="font-weight: bold; font-size: 1.05em;">
                                                    <span>输入个人信息</span>
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <div style="font-weight: bold; font-size: 0.9em; text-align: left;">
                                                    出行类别：
                                                </div>
                                                <div style="text-align: left;">
                                                    <template>
                                                        <el-radio v-model="trip_type" label="1">出差</el-radio>
                                                        <el-radio v-model="trip_type" label="2">自由行</el-radio>
                                                    </template>
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <el-col :span="8">
                                                    <div style="font-weight: bold; font-size: 0.9em; text-align: left;">姓
                                                        (拼音或英语)</div>

                                                </el-col>
                                                <el-col :span="8">
                                                    <div style="font-weight: bold; font-size: 0.9em; text-align: left;">名
                                                        (拼音或英语)</div>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :span="8">
                                                    <el-input v-model="last_name" placeholder="例： zhang"></el-input>

                                                </el-col>
                                                <el-col :span="8">
                                                    <el-input v-model="first_name" placeholder="例： Xiaoming"></el-input>

                                                </el-col>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <el-col :span="8">
                                                    <div style="font-weight: bold; font-size: 0.9em; text-align: left;">
                                                        电子邮箱地址
                                                    </div>
                                                    <div>
                                                        <el-input v-model="email"
                                                            placeholder="温馨提示：填写后检查一下，避免拼写错误"></el-input>
                                                    </div>
                                                    <div style=" font-size: 0.9em; text-align: left; color: darkgray;">
                                                        确认邮件将发送至该邮箱
                                                    </div>
                                                </el-col>

                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <div style="font-weight: bold; font-size: 0.9em; text-align: left;">
                                                    您为谁预订？
                                                </div>
                                                <div style="text-align: left;">
                                                    <template>
                                                        <el-radio v-model="who" label="1">本人即住客（之一）</el-radio>

                                                    </template>
                                                </div>
                                                <div style="text-align: left;">
                                                    <template>

                                                        <el-radio v-model="who" label="2">本人不会入住</el-radio>
                                                    </template>
                                                </div>
                                            </el-row>
                                            <el-row>

                                            </el-row>
                                        </el-card>
                                        <el-card style="margin:10px; background:#e4f4ff" shadow="never" prop="Price">
                                            <el-row class="card-header">
                                                <div style="font-weight: bold; font-size: 1.05em;">
                                                    <span>豪华一室公寓</span>
                                                </div>
                                            </el-row>
                                            <el-row>
                                                <div style="font-weight: bold; font-size: 0.9em; text-align: left;">
                                                    <i class="el-icon-close"></i>不可退款
                                                </div>
                                                <div
                                                    style="font-weight: bold; font-size: 0.9em; text-align: left; color: darkgreen;">
                                                    <i class="el-icon-check"></i>可灵活修改入住日期，计划有变不用担心
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <div style=" font-size: 0.9em; text-align: left; color: darkgray;">
                                                    <i class="el-icon-warning-outline"></i>公寓超级干净
                                                </div>
                                                <div style=" font-size: 0.9em; text-align: left; color: darkgray;">
                                                    <i class="el-icon-warning-outline"></i>禁止吸烟
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <div style="font-weight: bold; font-size: 0.9em; text-align: left;">
                                                    住客：<template>
                                                        <el-input-number v-model="num" @change="handleChange" :min="1"
                                                            :max="10" label="描述文字"></el-input-number>
                                                    </template>
                                                </div>

                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <el-row>
                                                    <el-col :span="12">
                                                        <div style="font-weight: bold; font-size: 0.9em; text-align: left;">
                                                            住客全名</div>

                                                    </el-col>
                                                    <el-col :span="12">
                                                        <div style="font-weight: bold; font-size: 0.9em; text-align: left;">
                                                            电子邮箱地址</div>
                                                    </el-col>
                                                </el-row>

                                            </el-row>

                                            <el-row>
                                                <el-row>
                                                    <el-col :span="12">
                                                        <el-input v-model="live_name"
                                                            placeholder="姓 （拼音或英文）名（拼音或英文）"></el-input>

                                                    </el-col>
                                                    <el-col :span="12">
                                                        <el-input v-model="live_email" placeholder="电子邮箱地址"></el-input>

                                                    </el-col>
                                                </el-row>
                                            </el-row>



                                        </el-card>
                                        <el-card style="margin:10px; background:#e4f4ff" shadow="never" prop="Price">
                                            <el-row class="card-header">
                                                <div style="font-weight: bold; font-size: 1.05em;">
                                                    <span>您还有什么特殊需求？</span>
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <div style=" font-size: 0.9em; text-align: left;">
                                                    特殊要求无法保证满足，但住宿将尽力为你提供所需。你始终可以在预订完成后提出特殊要求。</div>


                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <div style="font-weight: bold; font-size: 0.9em; text-align: left;">
                                                    请使用英语填写您的请求。</div>
                                            </el-row>
                                            <el-row>
                                                <el-input type="request" :rows="4" placeholder="请输入内容" v-model="textarea">
                                                </el-input>
                                            </el-row>


                                        </el-card>
                                        <el-card style="margin:10px; background:#e4f4ff" shadow="never" prop="Price">
                                            <el-row class="card-header">
                                                <div style="font-weight: bold; font-size: 1.05em;">
                                                    <span>到店时间</span>
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <div
                                                    style="font-weight: bold; font-size: 0.9em; text-align: left; color: darkgreen;">
                                                    <i class="el-icon-check"></i>你可在15:00至22:00办理入住
                                                </div>
                                            </el-row>
                                            <el-row :gutter="0" style="height: 10px;"></el-row>
                                            <el-row>
                                                <div style="font-weight: bold; font-size: 0.9em; text-align: left;">
                                                    预计到店时间</div>
                                            </el-row>
                                            <el-row>
                                                <div style="text-align: left;">
                                                    <el-time-select v-model="arrive_time" :picker-options="{
                                                        start: '13:00',
                                                        step: '00:15',
                                                        end: '22:00'
                                                    }" placeholder="选择时间">
                                                    </el-time-select>
                                                </div>


                                            </el-row>



                                        </el-card>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.picker {
    border-radius: 0;
}

.facility_title {
    text-align: left;
}

.card-header {
    text-align: left;
}

.card-body {
    text-align: left;
}

.third_page {
    max-width: 1000px;
    /* 控制页面最大宽度为1200px */
    margin: 0 auto;
    /* 居中显示 */
}



.button {
    display: flex;
    justify-content: space-between;
}



.btn-1 {
    background-color: #EBF3FF;
    color: #006CE4;
    flex-basis: 350px;
}

.btn-2 {
    background-color: #EBF3FF;
    color: #006CE4;
    flex-basis: 300px;
}

.btn-3 {
    background-color: #EBF3FF;
    color: #006CE4;
    flex-basis: 300px;
}

.btn-4 {
    background-color: #EBF3FF;
    color: #006CE4;
    flex-basis: 300px;
}

.btn-5 {
    background-color: #EBF3FF;
    color: #006CE4;
    flex-basis: 80px;
}



.demonstration {
    color: white;
}

.hotel_botton {
    text-align: left;
}

.hotel_row {
    display: flex;
    justify-content: space-between;
}

.comment_title {
    display: flex;
    justify-content: space-between;
}

.hotel_title,
.hotel_botton {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}

.hotel_title {
    justify-content: flex-start;
}

.hotel_botton {
    justify-content: flex-end;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 等比缩放图像填满容器 */
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
import UserHeader from '@/components/UserHeader.vue';
import YellowSearch from '@/components/YellowSearch.vue'

export default {
    name: "home",

    data() {
        return {

            value_room: 0,

            order_detail: {
                in_date: '2023年5月2日',
                out_date: '2023年5月13日',
                in_time: '15:00 - 22:00',
                out_time: '11:00 - 12:00',
                time_long: '1周',
                select_room: '豪华一室公寓'
            },
            info_room: {
                type: '公寓',
                image: 'https://cf.bstatic.com/xdata/images/hotel/square200/331486215.jpg?k=2e4775b5ac2d2fc0021596b6a240d408c875a9de34345c3e335cd74c717d4897&o=',
                name: 'Dream Inn - Address Dubai Mall',
                location: 'Sheikh Mohammed bin Rashid Boulevard Address Dubai Mall, 迪拜市中心, 迪拜, 阿拉伯联合酋长国',
                good: '位置很赞 - 9.5',
                score: '7.5',
                comment: '197'

            },
            notation: {
                note: '尽情享受公寓！'
            },
            Price: {
                origin: '2000',
                discount: '-500',
                type: 'TWD',
                cancel: '500'
            },
            trip_type: '1',
            first_name: '',
            last_name: '',
            email: '',
            who: '',
            num: '',
            live_name: '',
            live_email: '',
            request: '',
            arrive_time: '',
        };
    },
    components: { UserHeader, YellowSearch }
}
</script>