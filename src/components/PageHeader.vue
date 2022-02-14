<template>
    <div class="header-wraper">
        <div class="title">
            <el-icon v-if="whetherBack" class="back-icon"><arrow-left-bold /></el-icon>
            <span class="title p-l-6"> {{ currentTitle }} </span>
        </div>
        <div class="btgp-wraper">
            <el-button v-for="bt in useBt.getBtGp" :key="bt.name" @click="bt.click">
                {{ bt.name }}
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ArrowLeftBold } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import useButton from '@/store/pageheaderButton'

const route = useRoute()
const useBt = useButton()
const currentTitle = computed(() => {
    return `${route.meta.title}`
})
// 是否显示返回按钮，根据目前是几级路由
const whetherBack = computed(() => {
    return route.path.split('/').length > 2
})
</script>
<style lang="scss" scoped>
.header-wraper {
    height: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 2px 0 rgb(66 64 86 / 5%);
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px 40px 10px 10px;
    .back-icon {
        cursor: pointer;
    }
    .btgp-wraper {
        display: flex;
    }
}
</style>
