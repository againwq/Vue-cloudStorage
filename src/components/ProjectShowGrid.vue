<script>
/*网格显示project的组件*/ 
import { NCard } from 'naive-ui'
export default {
    props: ['options'],
    components: {
        NCard
    },
    setup(props) {
        return {

        }
    }
}
</script>
<template>
    <n-card content-style="padding: 0px" hoverable>
       <div class="content">wadasdsadw</div>
    </n-card>
</template>
<style scoped>
.n-card {
    padding: 20px;
    width: 382px;
    height: 212px;
}
</style>