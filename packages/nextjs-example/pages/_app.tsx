import { CookieConsent } from "@stadtteilliebe/react-cookie-consent"
import type { AppProps } from "next/app"

const SERVICES = [
    {
        id: "ga",
        title: "Google Analytics",
        description: "Das macht was mit dir",
        category: "Marketing",
    },
    {
        id: "fb",
        title: "Facebook",
        description: "Das macht auch was mit dir",
        category: "Marketing",
    },
    {
        id: "linkedin",
        title: "LinkedIn",
        description: "Das macht was mit dir",
        category: "Marketing",
    },
    {
        id: "prismic",
        title: "Prismic",
        description: "Das macht was mit dir",
        category: "Essentiel",
    },
]

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <CookieConsent
                title="Cookie Consent"
                content="Uns ist Datenschutz wichtig"
                services={SERVICES}
            />
            <Component {...pageProps} />
        </>
    )
}
