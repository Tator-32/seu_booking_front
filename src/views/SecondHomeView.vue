<template>
    <div>
        <UserHeader></UserHeader>

        <div class="third_page">
            <div class="BlueBackground">
                <center>
                </center>
            </div>
            <div class="hotelinfo" style="margin:30px">
                <el-container>
                    <el-header>
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-header>
                    <el-main>
                        <el-row>
                            <div class="button">
                                <el-button type="primary" class="btn-1" @click="open">价格更放心</el-button>
                                <el-button @click="scrollToTarget('room')" type="primary" class="btn-2">别墅信息＆价格</el-button>
                                <el-button @click="scrollToTarget('facility')" type="primary" class="btn-3">设施</el-button>
                                <el-button @click="scrollToTarget('rules')" type="primary" class="btn-4">住宿规定</el-button>
                                <el-button @click="scrollToTarget('comment')" type="primary" class="btn-5">酒店点评</el-button>
                            </div>
                        </el-row>
                    </el-main>
                </el-container>
                <el-container>

                    <YellowSearch></YellowSearch>


                    <el-main style="overflow: hidden">
                        <el-row class="hotel_row">
                            <el-col class="hotel_title">
                                <div>
                                    酒店信息
                                </div>
                            </el-col>
                            <el-col class="hotel_botton">
                                <div>
                                    <el-button @click="scrollToTarget('room')" type="primary">
                                        现在就预订
                                    </el-button>
                                </div>
                            </el-col>
                        </el-row>
                        <div>
                            <br>
                        </div>
                        <el-row>
                            <div class="hotel_image" style="width:700px; height:470px;">
                                <!-- <span class="demonstration">默认 Hover 指示器触发</span>
                                <el-carousel width="640px" height="410px">
                                    <el-carousel-item v-for="item in imageList" :key="item">
                                        <img :src="item" class="carousel-image" />
                                    </el-carousel-item>
                                </el-carousel> -->

                                <el-container style="width:660px; height: 350px;">
                                    <el-aside width="200px" height="350px" style="overflow: hidden; padding-right: 10px;">
                                        <el-col>
                                            <el-image style="width: 200px; height: 170px" :src="image_url_2"
                                                :fit="fill"></el-image>
                                            <el-image style="width: 200px; height: 170px" :src="image_url_3"
                                                :fit="fill"></el-image>
                                        </el-col>
                                    </el-aside>
                                    <el-main style="padding: 0px;  overflow: hidden;">
                                        <el-image style="width: 446px; height: 344px;" :src="image_url_1"
                                            :fit="fill"></el-image>
                                    </el-main>
                                </el-container>
                                <el-container>
                                    <el-header style="width:654px; height: 120px; padding-left: 0%;">
                                        <el-row
                                            style="display: flex; justify-content: center; width: 654px; height: 120px; padding-left: 0%;">
                                            <el-image style="width: 160px; height: 120px; margin-right: 8px"
                                                :src="image_url_4" :fit="fill"></el-image>
                                            <el-image style="width: 160px; height: 120px; margin-right: 8px"
                                                :src="image_url_5" :fit="fill"></el-image>
                                            <el-image style="width: 160px; height: 120px; margin-right: 8px"
                                                :src="image_url_6" :fit="fill"></el-image>
                                            <el-image style="width: 160px; height: 120px" :src="image_url_7"
                                                :fit="fill"></el-image>
                                        </el-row>
                                    </el-header>
                                </el-container>
                            </div>
                        </el-row>
                    </el-main>
                </el-container>
            </div>
            <div>
                <el-row style="display: flex; flex-wrap: wrap; justify-content: space-between;">
                    <div v-for="(item, index) in character1" :key="index"
                        style="margin: 10px; flex-basis: calc(25% - 20px);">
                        <el-card>
                            <span><i class="el-icon-check"></i>{{ item }}</span>
                        </el-card>
                    </div>
                </el-row>
                <el-row style="display: flex; flex-wrap: wrap; justify-content: space-between;">
                    <div v-for="(item, index) in character2" :key="index"
                        style="margin: 10px; flex-basis: calc(25% - 20px);">
                        <el-card>
                            <span><i class="el-icon-check"></i>{{ item }}</span>
                        </el-card>
                    </div>
                </el-row>
            </div>
            <div class="booking">
                <div class="empty_room" style="margin-top: 40px;">
                    <div ref="room">
                        <el-row class="empty_room_title">
                            <el-col class="hotel_title">
                                <div>
                                    空房情况
                                </div>
                            </el-col>
                            <el-col class="hotel_botton">
                                <div>
                                    <el-button type="text" icon="el-icon-coin">
                                        价格更放心
                                    </el-button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>

                            <el-col :span="5">
                                <div style="border:2px solid orange; height:40px;  width:fit-content" :gutter=200>
                                    <div class="date">
                                        <el-date-picker v-model="value1" type="date" placeholder="入住时间"
                                            style="width: 205px; ">
                                        </el-date-picker>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div style="border:2px solid orange; height:40px;  width:fit-content" :gutter=200>
                                    <div class="date">
                                        <el-date-picker v-model="value1" type="date" placeholder="退房时间"
                                            style="width: 205px;">
                                        </el-date-picker>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div style="border:2px solid orange; height:40px;  width:fit-content" :gutter=200>
                                    <el-dropdown style="width: 205px;">
                                        <el-input placeholder="入住人数/客房数" suffix-icon="el-icon-s-custom" v-model="input1">
                                        </el-input>
                                        <el-dropdown-menu slot="dropdown">
                                            <div>
                                                <span style="float: left"> 成人 </span>
                                                <span style="float: right"></span><el-input-number v-model="num"
                                                    @change="handleChange" :min="1" :max="10"
                                                    label="描述文字"></el-input-number>
                                            </div>
                                            <div>
                                                <span style="float: left"> 儿童 </span>
                                                <span style="float: right"></span><el-input-number v-model="num"
                                                    @change="handleChange" :min="1" :max="10"
                                                    label="描述文字"></el-input-number>
                                            </div>
                                            <div>
                                                <span style="float: left"> 客房 </span>
                                                <span style="float: right"></span><el-input-number v-model="num"
                                                    @change="handleChange" :min="1" :max="10"
                                                    label="描述文字"></el-input-number>
                                            </div>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </el-col>
                            <el-col :span="4" style="text-align:right ;">
                                <div style="border:2px solid orange; height:40px;  width:fit-content" :gutter=200>
                                    <el-button type="primary" icon="el-icon-success">
                                        确认更新
                                    </el-button>
                                </div>
                            </el-col>


                        </el-row>

                    </div>
                </div>
                <div class="booking_table">
                    <el-table :header-cell-style="{ background: '#4c76b2', color: '#FFFFFF', borderColor: '#5BBAFF' }"
                        :cell-style="{ borderColor: '#5BBAFF', background: '#FFFFFF' }" :data="tableData"
                        style="width: 100%" border>

                        <el-table-column prop="type" label="公寓类型" width="500">
                            <template slot-scope="scope">
                                <div><el-button type="text" @click="openroom">{{ scope.row.type.name_room }}</el-button>
                                </div>
                                <div>{{ scope.row.type.bed }}</div>
                                <div>{{ scope.row.type.info }}</div>
                                <div></div>
                            </template>

                            <!-- <template>
                                <el-button type="text" @click="open">点击打开 Message Box</el-button>
                            </template> -->
                        </el-table-column>
                        <el-table-column prop="price" label="价格" width="100">
                        </el-table-column>
                        <el-table-column prop="nknow" label="预订须知" width="150">
                            <div style="color:green"><i class="el-icon-coffee-cup">含美味早餐</i></div>
                            <div style="color:green"><i class="el-icon-check">可退订</i></div>
                            <div style="color:green"><i class="el-icon-check">无需预付</i></div>
                            <el-row>
                                <div style="color:blue"><i class="el-icon-discount">Genius</i>
                                    <span style="color: black;">{{ '优惠享不停' }}</span>
                                </div>

                            </el-row>

                        </el-table-column>
                        <el-table-column prop="nknow" label="选择客房" width="100">
                            <el-select v-model="value_room" placeholder="请选择">
                                <el-option v-for="item in options_room" :key="item.value" :label="item.label"
                                    :value="item.value">
                                    <span style="float: left">{{ item.value }}</span>
                                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.label }}</span>
                                </el-option>
                            </el-select>
                        </el-table-column>
                        <el-table-column label="预订" width="160">
                            <template slot-scope="scope">
                                <el-button :disabled="!scope.row.isBookable" style="margin-bottom: 10px" type="primary"
                                    @click="bookApartment(scope.row)">预订</el-button>
                                <div v-if="scope.row.isBookable">该公寓可以预订</div>
                                <div v-else>该公寓已经被预订</div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="comment" style="margin:30px">
                <el-row class="comment_title">
                    <el-col class="hotel_title">
                        <div>
                            住客点评
                        </div>
                    </el-col>
                    <el-col class="hotel_botton">
                        <div>
                            <el-button type="primary">
                                现在就预订
                            </el-button>
                        </div>
                    </el-col>
                </el-row>
                <div class="score_bar">
                    <div>
                        单项得分
                        <el-row>
                            <el-col :span="8">
                                <div class="project-name">员工素质</div>
                                <el-progress :percentage=percentage[0] :format="format"
                                    :color=bar_color(percentage[0])></el-progress>
                            </el-col>
                            <el-col :span="8">
                                <div class="project-name">设施/服务</div>
                                <el-progress :percentage=percentage[1] :format="format"
                                    :color=bar_color(percentage[1])></el-progress>
                            </el-col>
                            <el-col :span="8">
                                <div class="project-name">清洁程度</div>
                                <el-progress :percentage=percentage[2] :format="format"
                                    :color=bar_color(percentage[2])></el-progress>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="project-name">舒适程度</div>
                                <el-progress :percentage=percentage[3] :format="format"
                                    :color=bar_color(percentage[3])></el-progress>
                            </el-col>
                            <el-col :span="8">
                                <div class="project-name">性价比</div>
                                <el-progress :percentage=percentage[4] :format="format"
                                    :color=bar_color(percentage[4])></el-progress>
                            </el-col>
                            <el-col :span="8">
                                <div class="project-name">位置</div>
                                <el-progress :percentage=percentage[5] :format="format"
                                    :color=bar_color(percentage[5])></el-progress>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="project-name">免费WiFi</div>
                                <el-progress :percentage=percentage[6] :format="format"
                                    :color=bar_color(percentage[6])></el-progress>
                            </el-col>
                            <el-col :span="8">
                                <div class="project-name">餐厅</div>
                                <el-progress :percentage=percentage[7] :format="format"
                                    :color=bar_color(percentage[7])></el-progress>
                            </el-col>
                            <el-col :span="8">
                                <div class="project-name">安静程度</div>
                                <el-progress :percentage=percentage[8] :format="format"
                                    :color=bar_color(percentage[8])></el-progress>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="comment_details" ref="comment" style="margin:30px">
                    <div style="display: flex; justify-content: flex-start; width: 100%;">
                        选择选择相关主题浏览点评：
                    </div>
                    <div>
                        <div class="tag">
                            <el-row>
                                <el-button type="primary" icon="el-icon-plus" style="float: left" round>地铁</el-button>
                                <el-button type="primary" icon="el-icon-plus" style="float: left" round>火车站</el-button>
                                <el-button type="primary" icon="el-icon-plus" style="float: left" round>位置</el-button>
                                <el-button type="primary" icon="el-icon-plus" style="float: left" round>早餐</el-button>
                                <el-button type="primary" icon="el-icon-plus" style="float: left" round>交通</el-button>
                            </el-row>
                        </div>
                    </div>
                    <div class="comment_cards" style="margin-top: 40px;">
                        <el-carousel :interval="4000" type="card" height="200px">
                            <el-carousel-item v-for="(item, index) in heads" :key="index">
                                <el-card class="box-card" height="100%">
                                    <div slot="header" class="clearfix"
                                        style="display:flex; align-items:center; justify-content:space-between;">
                                        <div style="display:flex; align-items:center;">
                                            <img :src="item.imgSrc" alt="carousel image"
                                                style="width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;">
                                            <span>{{ item.text }}</span>
                                        </div>
                                        <el-button style="padding: 3px 0" type="text" class="button-right"> </el-button>
                                    </div>
                                    <div style="height: 150px;">
                                        {{ item.comment }}
                                    </div>
                                </el-card>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
            <div class="facility" ref="facility">
                <el-row>
                    <div class="facility_title" style="font-weight: bold; font-size: 2em;">
                        设施与服务
                    </div>
                </el-row>
                <div>
                    <el-card>
                        <el-row>
                            <el-col :span="8">
                                <el-row>
                                    <el-col :span="24">
                                        <div>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>浴室</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility01" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>户外</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility02" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>宠物</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility03" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>媒体/科技</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility04" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>餐饮服务</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility05" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>网络</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility06" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="8">
                                <el-row>
                                    <el-col :span="24">
                                        <div>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>停车场</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility11" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>服务项目</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility12" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>前台服务</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility13" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>安全</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility14" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="8">
                                <el-row>
                                    <el-col :span="24">
                                        <div>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"
                                                                style="float: left"></i>其他</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility21" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>无障碍设施</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility22" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>
                                            <el-card style="margin:10px">
                                                <el-row class="card-header">
                                                    <div style="font-weight: bold; font-size: 1.2em;">
                                                        <span><i class="el-icon-warning-outline"></i>使用的语言</span>
                                                    </div>
                                                </el-row>
                                                <div class="card-body">
                                                    <div v-for="(item, index) in facility23" :key="index">
                                                        <span><i class="el-icon-check"></i>{{ item }}</span>
                                                    </div>
                                                </div>
                                            </el-card>

                                        </div>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-card>
                </div>
            </div>
            <div class="rule" ref="rules">
                <div style="font-weight: bold; font-size: 2em;">
                    住宿规定
                </div>
                <el-card class="card-flex" style="margin:10px">
                    <el-col :span="6">
                        <span
                            style="display: flex; align-items: center; float: left; font-weight: bold; font-size: 1.2em;"><i
                                class="el-icon-info" style="float: left;"></i>入住时间</span>
                    </el-col>
                    <el-col :span="18">
                        <span style="display: flex; align-items: center; float: left;"><i class="el-icon-zoom-in"
                                style="float: left;"></i>11111</span>
                    </el-col>
                    <br>
                    <br>
                </el-card>
                <el-card class="card-flex" style="margin:10px">
                    <el-col :span="6">
                        <span
                            style="display: flex; align-items: center; float: left; font-weight: bold; font-size: 1.2em;"><i
                                class="el-icon-info" style="float: left;"></i>退房时间</span>
                    </el-col>
                    <el-col :span="18">
                        <span style="display: flex; align-items: center; float: left;"><i class="el-icon-zoom-in"
                                style="float: left;"></i>22222</span>
                    </el-col>
                    <br>
                    <br>
                </el-card>
                <div v-for="(item, index) in rules" :key="index">
                    <el-card class="card-flex" style="margin:10px">
                        <el-col :span="6">
                            <span
                                style="display: flex; align-items: center; float: left; font-weight: bold; font-size: 1.2em;"><i
                                    class="el-icon-info" style="float: left;"></i>{{ item.head }}</span>
                        </el-col>
                        <el-col :span="18">
                            <span style="display: flex; align-items: center; float: left;"><i class="el-icon-zoom-in"
                                    style="float: left;"></i>{{ item.content }}</span>
                        </el-col>
                        <br>
                        <br>
                    </el-card>
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
    methods: {
        // init() {
        //     this.$http.post("/thirdPage", {
        //         user_address: this.loginform.user_address,
        //     }).then(res => {
        //         if (res) {
        //             this.$message({
        //                 type: "success",
        //                 message: "连接成功"
        //             });
        //             // 检查rules属性是否存在，并分配默认值
        //             this.rules=[
        //                 {
        //                     head: "你不许参加apex竞赛",
        //                     content: "你不许参加apex竞赛"
        //                 }
        //             ];
        //         }
        //     }).catch(function (error) {
        //         alert("连接失败");
        //     });

        // }
        init() {
            //     this.$http.post("/thirdPage", {
            //         user_address: this.loginform.user_address,
            //     }).then(res => {
            //         if (res) {
            //             this.$message({
            //                 type: "success",
            //                 message: "连接成功"
            //             });
            //             // 检查rules属性是否存在，并分配默认值
            //             this.rules=[
            //                 {
            //                     head: "你不许参加apex竞赛",
            //                     content: "你不许参加apex竞赛"
            //                 }
            //             ];
            //         }
            //     }).catch(function (error) {
            //         alert("连接失败");
            //     });

        },
        created() {
            //     this.$http.post("/thirdPage", {
            //         user_address: this.loginform.user_address,
            //     }).then(res => {
            //         if (res) {
            //             this.$message({
            //                 type: "success",
            //                 message: "连接成功"
            //             });
            //             // 检查rules属性是否存在，并分配默认值
            //             this.rules=[
            //                 {
            //                     head: "你不许参加apex竞赛",
            //                     content: "你不许参加apex竞赛"
            //                 }
            //             ];
            //         }
            //     }).catch(function (error) {
            //         alert("连接失败");
            //     });
            // this.init();
        },
        open() {
            this.$http.post("/thirdPage",
                {
                    loginVal: "Hello World!",
                    loginType: 'Phone'
                }
            ).then(res => {
                if (res) {
                    //this.$message({type: "succes", message: res.data.toString()})
                    //console.log(typeof(res.data))
                    console.log(res.data);
                }
            }
            ).catch(function (error) { alert("连接失败"); });
            
            // this.$http.post("/thirdPage", {
            //     loginVal: '这是一个前端数据',
            //     loginType: 'Phone'

            // }).then(res => {
            //     if (res) {
            //         this.$message({
            //             type: "success",
            //             message: "连接成功"
            //         });
            //         // 检查rules属性是否存在，并分配默认值
            //         this.rules = [
            //             {
            //                 head: "你不许参加apex竞赛",
            //                 content: "你不许参加apex竞赛"
            //             }
            //         ];
            //     }
            // }).catch(function (error) {
            //     alert("连接失败");
            // });

            //     this.$alert(
            //         `
            // <div class="modal">
            //     <div class="header">
            //         &nbsp&nbsp&nbsp如果您在其他网站发现能够以更低的价格预订相同的房型，您即可申请差价补偿。
            //         <br>
            //         &nbsp&nbsp&nbsp记住,预订后请至少在您入住日前24小时与我们联系。 您需要向我们提供其他网站的预订链接，在我们的工作人员核查时，该链接所提供的预订信息须仍然在线有效且可预订。
            //     </div>
            // <div class="body">
            // </div>
            // `,
            //         '价格更放心',
            //         { dangerouslyUseHTMLString: true }
            //     );
        },
        scrollToTarget(refName) {
            const targetEl = this.$refs[refName]
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        format(percentage) {
            return percentage / 10;
        },
        bar_color(percentage) {
            if (percentage >= 0 && percentage <= 20)
                return '#f56c6c';
            if (percentage > 20 && percentage <= 40)
                return '#e6a23c';
            if (percentage > 40 && percentage <= 60)
                return '#6f7ad3';
            if (percentage > 60 && percentage <= 80)
                return '#5cb87a';
            return '#1989fa';

        }
    },
    data() {
        return {
            rules: [
                {
                    head: "你不许参加apex竞赛",
                    content: "你不许参加apex竞赛"
                },
                {
                    head: "你可以参加apex竞赛",
                    content: "你可以参加apex竞赛"
                }
            ],
            percentage: [100, 90, 80, 70, 60, 50, 40, 30, 10],
            tableData: [
                {
                    type: {
                        name_room: '公寓 A',
                        bed: '1张超大号双人床',
                        info: '这间双人间配有平板电视、浴袍和沙发。'
                    }

                    ,

                    price: 1000,
                    nknow: '须知 A',
                    isBookable: true // 默认可以预订
                },
                {
                    type: {
                        name_room: '公寓 B',
                        bed: '1张超大号双人床',
                        info: '这间双人间配有平板电视、浴袍和沙发。'
                    }

                    ,

                    price: 1000,
                    nknow: '须知 B',
                    isBookable: true // 默认可以预订
                },
                {
                    type: {
                        name_room: '公寓 C',
                        bed: '1张超大号双人床',
                        info: '这间双人间配有平板电视、浴袍和沙发。'
                    }

                    ,

                    price: 1000,
                    nknow: '须知 C',
                    isBookable: true // 默认可以预订
                },
            ],
            character1: [
                "aaa",
                "bbb",
                "ccc",

            ],
            character2: [
                "ddd",
                "eee",
                "fff",
                "ggg"
            ],
            facility01: [
                "卫生纸",
                "毛巾",
                "卫生间",
                "淋浴"
            ],
            facility02: [
                "户外家具",
                "露台",
                "花园"
            ],
            facility03: [
                "客人可携带宠物入住。 住宿方可能会收取额外费用。"
            ],
            facility04: [
                "平板电视"
            ],
            facility05: [
                "住宿内咖啡店",
                "小吃吧",
                "酒吧"
            ],
            facility06: [
                "住宿方于各处提供WiFi（免费）。"
            ],
            facility11: [
                " 无需预订：住宿场所设有私人停车设施，收费标准：每日€ 20。",
                "停车库",
                "无障碍停车场"
            ],
            facility12: [
                "杂货递送",
                "每日客房打扫",
                "共用休息室/电视区",
                "办理私人登记入住/退房手续",
                "行李寄存",
                "额外收费",
                "传真/复印",
                "额外收费",
                "快速办理入住/退房手续",
                "24小时前台"
            ],
            facility13: [
                "提供发票"
            ],
            facility14: [
                "灭火器",
                "住宿外部闭路电视监控系统",
                "公共区域闭路电视监控系统",
                "烟雾报警器",
                "安全报警器",
                "刷卡进门",
                "钥匙进门",
                "24小时安保"
            ],
            facility21: [
                "吸烟区",
                "空调",
                "酒店各处禁烟",
                "暖气",
                "隔音",
                "隔音客房",
                "电梯",
                "家庭间",
                "无障碍设施",
                "禁烟客房"
            ],
            facility22: [
                " 盥洗盆较低",
                "坐便器较高",
                "坐便器 - 带扶手",
                "无障碍通道"
            ],
            facility23: [
                "  阿拉伯语",
                "英语",
                "西班牙语",
                "法语",
                "印地语"
            ],
            heads: [
                {
                    imgSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.Fc_sZTmq-1Q8aKpCX7ewMgAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    text: "花开富贵  ",
                    comment: "我们在这家酒店住了几晚，整个住宿过程非常愉快。员工非常友好，房间干净整洁，早餐也非常美味。"
                },
                {
                    imgSrc: "https://tse4-mm.cn.bing.net/th/id/OIP-C.gV9xEU5BrP0QQTzLJzmoSAAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    text: "大漠祥云",
                    comment: "这家酒店的设施非常好，位置便捷，员工热情周到。房间宽敞舒适，床铺非常柔软舒适，也很安静。"
                },
                {
                    imgSrc: "data:image/jpeg;base64,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",
                    text: "简单和微笑",
                    comment: "酒店位置非常方便，很多景点和商场都在附近。酒店的房间舒适宽敞，员工服务专业周到，早餐也很好吃。"
                },
                {
                    imgSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.lkqGPGQMYGQSmtvlu1rTnwAAAA?w=209&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    text: "简单和微笑",
                    comment: "这家酒店的设施非常新，房间布置非常唯美，给人一种温馨舒适的感觉。酒店员工非常热情，酒店的位置也很便捷。"
                },
                {
                    imgSrc: "https://tse2-mm.cn.bing.net/th/id/OIP-C.R5fM5ULYdu2-y84Ge4ToeQAAAA?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    text: "幸福一生 ",
                    comment: "这家酒店的设施非常新，房间布置非常唯美，给人一种温馨舒适的感觉。酒店员工非常热情，酒店的位置也很便捷。"
                },
                {
                    imgSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.6IMmuJiTdGGhxUffZCwHgwAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    text: "云淡天高 ",
                    comment: "这家酒店的设施非常新，房间布置非常唯美，给人一种温馨舒适的感觉。酒店员工非常热情，酒店的位置也很便捷。"
                },
            ],

            imageList: [
                'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/448107908.jpg?k=f18ec7522a53c80372458b1942b44f0f7b8ce849dd3df7fcecaedf69efa2beb3&o=&hp=1',
                'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/448115447.jpg?k=197dbcb14c8fc9017711ff36d220a9a6c29a85a48b670924b6195d1c48dde56b&o=&hp=1',
                'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/456696501.jpg?k=2bb528de569186dcbd7ca8be4d51131e0e7f3193e60b6ce8ae1d30784090d309&o=&hp=1',
                'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/448108954.jpg?k=99d89aeb9560057df60cebb229e44499f571dc8b02674a16367b5ea364a69276&o=&hp=1',
            ],
            image_url_1: 'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/170758821.jpg?k=9718ef0be2e07d96c6f510bc4d356aa5ee0b15a268e43d4b6427a454dcc86d52&o=&hp=1',
            image_url_2: 'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/170758784.jpg?k=aaa9e9ea92b9dfffdb4fa3bae3379908de5a19cf5ed6b444b0c3354c34215c19&o=&hp=1',
            image_url_3: 'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/214301339.jpg?k=e22b97d15e94a1520601a87e05db4a3a54cfb989afe986639d0758ba0c3b7325&o=&hp=1',
            image_url_4: 'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/214301416.jpg?k=49858b10803e9020f0a92971d3915878f4f8e6f4cef00af4088343455f2330fe&o=&hp=1',
            image_url_5: 'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/173422707.jpg?k=a2de862eb16c63bed2a855a7466675c6a5bc15102f177bdb0c4564678b254254&o=&hp=1',
            image_url_6: 'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/173330732.jpg?k=1c0fcae3d70f882c33928458189926fb76b639310383ad6c5ce9e5963aabe015&o=&hp=1',
            image_url_7: 'https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/214301262.jpg?k=ae0c61321ac62be2a0fcffc49f711e17aea58dd5eb5765acdcd978c6ed1ccc0f&o=&hp=1',
            image_url_8: 'https://gratisography.com/wp-content/uploads/2021/07/gratisography-green-bug-car-free-stock-photo-800x525.jpg',
            image_url_9: 'https://gratisography.com/wp-content/uploads/2021/03/gratisography-circuit-board-detail-free-stock-photo-800x525.jpg',
            image_url_10: 'https://gratisography.com/wp-content/uploads/2021/02/gratisography-anvil-kite-free-stock-vector-800x525.jpg',
            value1: '',
            value2: '',
            date_startOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 3600 * 1000 * 24;
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '明天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周后',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            date_endOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '明天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周后',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            num_adult: 2,
            num_child: 0,
            num_room: 1,
            options_room: [{
                value: '1',
                label: '$ 129'
            }, {
                value: '2',
                label: '$ 278'
            }, {
                value: '3',
                label: '$ 467'
            }, {
                value: '4',
                label: '$ 798'
            }, {
                value: '5',
                label: '$ 1045'
            }],
            value_room: 0,
        };
    },
    components: { UserHeader, YellowSearch }
}
</script>
<!-- <script>
import UserHeader from '@/components/UserHeader.vue';

export default {
    data() {
        return {
            imageList: [
                '/1.png',
                '/c.jpg',
                '/a.jpeg',
                '/b.png',
            ],
        };
    },
};


</script> -->