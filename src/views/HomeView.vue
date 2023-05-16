<template>
    <div>
        <UserHeader></UserHeader>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue';

export default {
    name: "AppStart",
    components: { UserHeader }
}
</script>