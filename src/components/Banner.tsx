import React from "react"

type Props = {
    content?: string
}

function Banner({ content = "empty string" }: Props) {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>COOKIE CONSENT - {content}</h1>
            </header>
        </div>
    )
}

export default Banner
