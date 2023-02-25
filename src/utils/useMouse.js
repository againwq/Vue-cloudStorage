import {  onUnmounted, onMounted, reactive} from 'vue'

export function useMouse(){
    const position = reactive({
        x: 0,
        y: 0
    })
    function getPosition(e){
        position.x = e.clientX
        position.y = e.clientY
    }
    onMounted(() => {
        window.addEventListener('mousemove', getPosition)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', getPosition)
    })
    return position
}