const subscribe = (eventName: string, listener: () => void) => {
    document.addEventListener(eventName, listener)
}

const unsubscribe = (eventName: string, listener: () => void) => {
    document.removeEventListener(eventName, listener)
}

const publish = (eventName: string) => {
    const event = new CustomEvent(eventName)
    document.dispatchEvent(event)
}

const showUi = () => {
    publish("showUi")
}

export { publish, subscribe, unsubscribe, showUi }
