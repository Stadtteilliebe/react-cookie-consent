/* eslint-disable @typescript-eslint/prefer-as-const */
import React from "react"
import { setLS } from "../lib/ls"

type Props = {
    closeBanner: any
    title?: string
    content?: string
    services: { id: string; title: string; description: string; category: string }[]
}

const STYLES = {
    container: {
        // somehow ts troughs an error here
        position: "fixed" as "fixed",
        boxSizing: "border-box" as "border-box",
        overflowY: "auto" as "auto",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto auto",
        width: "min(90vw, 400px)",
        height: "min(600px, 80vh)",
        background: "white",
        boxShadow:
            "0px 0px 2.2px rgba(0, 0, 0, 0.02),  0px 0px 5.3px rgba(0, 0, 0, 0.028),  0px 0px 10px rgba(0, 0, 0, 0.035),  0px 0px 17.9px rgba(0, 0, 0, 0.042),  0px 0px 33.4px rgba(0, 0, 0, 0.05),  0px 0px 80px rgba(0, 0, 0, 0.07)",
        borderRadius: "5px",
        padding: "10px 20px",
    },
}

function Banner({ closeBanner, title, content, services }: Props) {
    // const [consent, setConsent] = React.useState()
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLS("user-consent", true)
        return closeBanner(false)
    }
    const handleChange = (e: React.SyntheticEvent) => {
        console.group(e)
    }
    return (
        <div style={STYLES.container}>
            <h2>{title}</h2>
            <p>{content}</p>
            <form onSubmit={handleSubmit}>
                {services.map((serv, index) => (
                    <div key={index}>
                        <h3>{serv.title}</h3>
                        <details>
                            <summary>Mehr erfahren</summary>
                            {serv.description}
                        </details>
                        <input type='checkbox' data-id={serv.id} onChange={handleChange} />
                    </div>
                ))}
                <button type='submit'>Speichern</button>
                <button onClick={() => closeBanner(false)}>Schließen</button>
            </form>
        </div>
    )
}

export default Banner
