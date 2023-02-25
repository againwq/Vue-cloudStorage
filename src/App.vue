<script>
import { RouterView } from 'vue-router'
import { NMessageProvider, NDialogProvider } from 'naive-ui'
export default {
    components: {
        NMessageProvider, NDialogProvider
    }
}
</script>

<template>
    <n-message-provider>
        <n-dialog-provider>
            <RouterView></RouterView>
        </n-dialog-provider>
    </n-message-provider>
</template>

<style scoped></style>
