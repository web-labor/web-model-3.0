import './index.scss'
import { defineComponent, reactive } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import router from '@/router'
import { useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const route = useRoute()
        const routes: RouteRecordRaw[] = router?.options.routes
        const getImageUrl = (name: string) => {
            return new URL(`../.././assets/${name}.png`, import.meta.url).href
        }
        const logo = getImageUrl('logo')
        const menuState = reactive({
            isCollapse: false
        })
        const toggleMenu = () => {
            menuState.isCollapse = !menuState.isCollapse
        }
        // 当前激活路由
        const activeTitle = computed(() => {
            return `/${route.path.split('/')[1]}`
        })
        // 标题渲染
        const titleRender = () => {
            return (
                <div class="logo-wraper">
                    <img class="logo" src={logo} />
                    {!menuState.isCollapse ? <span class="p-l-6 title">xx管理</span> : null}
                    {!menuState.isCollapse ? (
                        <i class="iconfont icon-shixiangzuojiantou--copy arrow-icon" onClick={() => toggleMenu()}></i>
                    ) : (
                        <i class="iconfont icon-shixiangzuojiantou- arrow-icon icon-unexpand" onClick={() => toggleMenu()}></i>
                    )}
                </div>
            )
        }
        // 路由渲染
        const Menurender = (list: RouteRecordRaw[]) => {
            if (!list) return []
            return list.map((i: any) => {
                if (Array.isArray(i.children) && i.children.length && i.meta.menu) {
                    return (
                        <el-sub-menu
                            index={i.path}
                            v-slots={{
                                title: () => {
                                    return (
                                        <>
                                            {i.meta.icon ? <i class={`iconfont ${i.meta.icon} s-20`}></i> : ''}
                                            <span class="p-l-10">{i.meta.title}</span>
                                        </>
                                    )
                                }
                            }}
                        >
                            {Menurender(i.children)}
                        </el-sub-menu>
                    )
                }

                return i.meta.menu ? (
                    <el-menu-item index={i.path} key={i.name}>
                        {i.meta.icon ? <i class={`iconfont ${i.meta.icon} s-20`}></i> : ''}
                        <span class="p-l-10"> {i.meta.title} </span>
                    </el-menu-item>
                ) : null
            })
        }
        return () => (
            <>
                <el-aside class={menuState.isCollapse ? 'fold menu-wraper' : 'unfold menu-wraper'}>
                    {titleRender()}
                    <el-menu default-active={activeTitle} collapse={menuState.isCollapse} router>
                        {Menurender(routes)}
                    </el-menu>
                </el-aside>
            </>
        )
    }
})
