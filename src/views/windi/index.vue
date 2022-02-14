<template>
    <h1 class="w-10 text-3xl font-bold underline">Hello world!</h1>
</template>

<script setup lang="ts">
import useButton from '@/store/pageheaderButton'

const useBt = useButton()
useBt.changeGroup([
    {
        name: '测试',
        click: () => {
            console.log('111')
        }
    },
    {
        name: '测试二',
        click: () => {
            console.error(222)
        }
    }
])

console.log('windi')
</script>
