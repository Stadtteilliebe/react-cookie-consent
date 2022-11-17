import React from "react"
import { getLS } from "../lib/ls"
import { subscribe, unsubscribe } from "../lib/showUi"
import Banner from "./Banner"

type Props = {
    title?: string
    content?: string
    services: { id: string; title: string; description: string; category: string }[]
}

const CookieConsent = (props: Props) => {
    const [showUI, setShowUI] = React.useState(false)

    React.useEffect(() => {
        subscribe("showUi", () => setShowUI(true))
        const ls = getLS("user-consent")

        if (!ls) {
            setShowUI(true)
        }

        return unsubscribe("showUi", () => setShowUI(false))
    }, [])

    return (
        <>
            {showUI ? (
                <Banner closeBanner={setShowUI} title={props.title} content={props.content} services={props.services} />
            ) : null}
        </>
    )
}

export default CookieConsent
