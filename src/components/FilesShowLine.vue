
<template>
    <n-data-table :columns="columns" :data="userFiles" :pagination="pagination" :bordered="false" />
</template>

<script>
/*展示文件表格的组件 */
import { h, onMounted, onUnmounted } from "vue";
import { NButton, NDataTable, NIcon } from "naive-ui";
import { CloudDownloadOutline as downloadIcon, TrashOutline as deleteIcon } from '@vicons/ionicons5'
import { userFiles, getUserFilesInfo, dowloadFile, removeFile} from '../control/userFileControl.js'
import { EventBus, EventType } from '../EventBus/index.js'
const createColumns = ({
    deleteFile, downloadFile
}) => {
    return [
        {
            title: "文件名",
            key: "filename"
        },
        {
            title: "大小",
            key: "filesize"
        },
        {
            title: "类型",
            key: "type"
        },
        {
            title: "上传日期",
            key: "upload_date"
        },
        {
            title: "Action",
            key: "actions",
            render(row) {
                return h("div", null, [
                    h(
                        NButton, {
                        text: true,
                        style: 'font-size:25px; margin-right: 10px',
                        onClick: () => deleteFile(row)
                    },
                        { default: () => h(NIcon, null, { default: () => h(deleteIcon) }) }
                    ), h(
                        NButton, {
                        text: true,
                        style: 'font-size: 25px',
                        onClick: () => downloadFile(row)
                    },
                        { default: () => h(NIcon, null, { default: () => h(downloadIcon) }) }
                    )
                ])
            }
        },
    ];
};


export default {
    components: {
        NButton, NDataTable, NIcon, downloadIcon, deleteIcon
    },
    setup() {
        onMounted(async () => {
            //await getUserFilesInfo()
            EventBus.on(EventType.userFilesHandle, async (data) => {
            })
        })
        onUnmounted(() => {
            EventBus.off(EventType.userFilesHandle)
        })
        return {
            getUserFilesInfo,
            userFiles,
            columns: createColumns({
                async deleteFile(fileRow){
                    await removeFile(fileRow.filename)
                },
                async downloadFile(fileRow){
                    await dowloadFile(fileRow.filename)
                }
            }),
            pagination: false
        };
    }
}
</script>

