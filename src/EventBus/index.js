import mitt from 'mitt'

const EventBus = mitt()
const EventType = {
    userFilesHandle: 'userFilesHandle'
}

Object.freeze(EventType)

export{
    EventBus, EventType
}