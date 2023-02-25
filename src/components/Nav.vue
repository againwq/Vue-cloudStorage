<script>
/*主页菜单栏 */
import { NCard, NTab, NTabs } from 'naive-ui'
import router from '../router/index'
const routes = router.getRoutes().find((item) => item.path == '/home').children
function handleUpdateValue(tableName) { /*切换子路由 */
    router.push(`/home/${tableName}`)
}
export default {
    components: {
        NCard, NTab, NTabs
    },
    setup() {
        return {
            routes,
            handleUpdateValue
        }
    }
}
</script>

<template>
    <n-card content-style="padding-top: 0; " :bordered="false">
        <n-tabs type="line" size="large" @update:value="handleUpdateValue">
            <n-tab :name="route.name" :tab="route.name" v-for="(route, index) in routes" :key="index">
            </n-tab>
        </n-tabs>
    </n-card>
</template>
<style scoped>
.n-card{
    padding: 0px;
}
</style>