<template>
    <div>
        <UserHeaderWithoutAva></UserHeaderWithoutAva>
        <el-row style="margin-top: 40px; margin-bottom: 20px;">
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="14">
                <div style="text-align: left; font-size: xx-large; font-weight: bold;">
                    查看已有行程
                </div>
            </el-col>
            <el-col :span="5">&nbsp;</el-col>
        </el-row>
        <el-row style="margin-top: 40px; margin-bottom: 50px;">
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="14">
                <el-table :data="tableData" style="width: 100%" border>
                    <el-table-column prop="dateIn" label="入住日期" width="180">
                    </el-table-column>
                    <el-table-column prop="dateOut" label="退房日期" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="酒店">
                    </el-table-column>
                    <el-table-column prop="roomType" label="房型">
                    </el-table-column>
                    <el-table-column>
                        <el-link type="primary" @click="orderCancel">退订</el-link>
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="5">&nbsp;</el-col>
        </el-row>
    </div>
</template>

<script>
import UserHeaderWithoutAva from '@/components/UserHeaderWithoutAva.vue';
import { mapState, mapMutations } from 'vuex'

export default {
    name: "UserOrder",
    data() {
        return {
            tableData: [{}],
            loginVal: ""
        }
    },
    created() {
        if (mailAddress != null) {
            this.loginVal = mailAddress
        } else if (phoneNumber != null) {
            this.loginVal = phoneNumber
        }
        this.$http.post("/userorder", {
            login: this.loginVal
        }
        ).then(res => {
            if (res) {
                this.tableData = res.data;
            }
        }
        ).catch(function (error) { alert("连接失败"); });
    },
    computed: {
        ...mapState(['phoneNumber', 'mailAddress'])
    },
    methods: {
        orderCancel() {
            this.$message({
                type: "success",
                message: "Test"
            })
        }
    },
    components: { UserHeaderWithoutAva }
}
</script>