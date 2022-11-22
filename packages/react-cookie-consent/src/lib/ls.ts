const getLS = (name: "user-consent") => {
    if (typeof window !== "undefined") {
        const ls = localStorage.getItem(name)
        return ls ? JSON.parse(ls) : false
    }
    return false
}

const setLS = (name: "user-consent", data: any) => {
    if (typeof window !== "undefined") {
        return localStorage.setItem(name, JSON.stringify(data))
    }
    return false
}

export { getLS, setLS }
