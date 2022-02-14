<template>
    <el-config-provider :locale="locale">
        <el-container class="container">
            <Menu></Menu>
            <el-container class="container">
                <el-header>
                    <page-header></page-header>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import Menu from '@/components/Menu'
import PageHeader from '@/components/PageHeader.vue'

const locale = zhCn
</script>

<style lang="scss">
#app {
    height: 100%;
}
</style>
<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
.el-aside {
    // width: 200px;
    height: 100%;
    width: auto;
    background-color: rgb(255, 255, 255);
    border-right: 1px solid #e1eaf1;
    transition: all 1s ease-in-out;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
</style>
