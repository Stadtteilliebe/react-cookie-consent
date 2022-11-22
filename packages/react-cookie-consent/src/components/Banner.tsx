/* eslint-disable @typescript-eslint/prefer-as-const */
import React from "react"
import { checkDomScripts } from "../lib/dom"
import { setLS } from "../lib/ls"
import ListElement from "./ListElement"

type Props = {
    closeBanner: any
    title?: string
    content?: string
    services: { id: string; title: string; description: string; category: string }[]
    initialConsent: State
}

type State = { servicesConsent: { id: string; active: boolean }[] }

function Banner({ closeBanner, title, content, services, initialConsent }: Props) {
    const [consent, setConsent] = React.useState<State>(initialConsent)

    React.useEffect(() => {
        if (initialConsent) {
            return
        } else {
            const initialState = services.map((el) => ({ id: el.id, active: false }))
            setConsent({ servicesConsent: initialState })
        }
    }, [initialConsent, services])

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLS("user-consent", { ...consent, timestamp: new Date() })
        checkDomScripts(consent.servicesConsent)
        return closeBanner(false)
    }

    const getServIndex = (id: string) => {
        return consent.servicesConsent.findIndex((el) => el.id === id)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore - TODO: type attributes
        const serviceId = e.target.attributes["data-id"].value
        const checked = e.target.checked
        const index = getServIndex(serviceId)
        const updateConsent = consent
        updateConsent.servicesConsent[index].active = checked
        setConsent(updateConsent)
    }
    return (
        <div className="background">
            <div className="container">
                <h2>{title}</h2>
                <p>{content}</p>
                <form onSubmit={handleSubmit}>
                    {services.map((serv, index) => (
                        <div key={index}>
                            <ListElement
                                serv={serv}
                                handleChange={handleChange}
                                defaultChecked={
                                    consent.servicesConsent
                                        ? consent.servicesConsent[getServIndex(serv.id)].active
                                        : false
                                }
                            />
                        </div>
                    ))}
                    <button type="submit">Speichern</button>
                    <button onClick={() => closeBanner(false)}>Schließen</button>
                </form>
            </div>
        </div>
    )
}

export default Banner
