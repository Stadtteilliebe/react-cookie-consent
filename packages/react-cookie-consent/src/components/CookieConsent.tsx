import React from "react"
import { getLS } from "../lib/ls"
import { subscribe, unsubscribe } from "../lib/events"
import Banner from "./Banner"
import "../static/styles.css"

type Props = {
    title?: string
    content?: string
    services: { id: string; title: string; description: string; category: string }[]
}

const CookieConsent = (props: Props) => {
    const [showUI, setShowUI] = React.useState(false)
    const ls = getLS("user-consent")

    React.useEffect(() => {
        subscribe("showUi", () => setShowUI(true))

        if (!ls || ls.servicesConsent?.length !== props.services.length) {
            setShowUI(true)
        }

        return unsubscribe("showUi", () => setShowUI(false))
    }, [props.services, ls])

    React.useEffect(() => {
        const bodyTag = document.querySelector("body")

        if (!bodyTag) return

        if (showUI) {
            bodyTag.style.height = "100vh"
            bodyTag.style.overflow = "hidden"
        } else {
            bodyTag.style.overflow = "initial"
            bodyTag.style.height = "initial"
        }
    }, [showUI])

    return (
        <>
            {showUI ? (
                <Banner
                    closeBanner={setShowUI}
                    title={props.title}
                    content={props.content}
                    services={props.services}
                    initialConsent={ls ? ls : false}
                />
            ) : null}
        </>
    )
}

export default CookieConsent
