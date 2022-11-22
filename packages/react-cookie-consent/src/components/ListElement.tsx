import React from "react"

type Props = {
    serv: { title: string; description: string; id: string }
    defaultChecked: boolean
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ListElement = ({ serv, defaultChecked, handleChange }: Props) => {
    return (
        <div className="list-element-container">
            <div>
                <h3 className="list-element-title">{serv.title}</h3>
                <details>
                    <summary className="summary">Mehr erfahren</summary>
                    <p className="details-content">{serv.description}</p>
                </details>
            </div>
            <div>
                <label className="label">
                    <input
                        className="checkbox"
                        type="checkbox"
                        data-id={serv.id}
                        defaultChecked={defaultChecked}
                        onChange={handleChange}
                    />
                    <span className="slider" />
                </label>
            </div>
        </div>
    )
}

export default ListElement
