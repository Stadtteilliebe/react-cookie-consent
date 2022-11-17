import * as React from "react"
import { render } from "@testing-library/react"

import "jest-canvas-mock"

import { Banner } from "../src"

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

describe("Common render", () => {
    it("renders without crashing", () => {
        render(
            <Banner
                services={SERVICES}
                closeBanner={() => {
                    return null
                }}
            />,
        )
    })
})
