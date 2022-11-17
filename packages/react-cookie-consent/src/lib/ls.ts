const getLS = (name: "user-consent") => {
    return localStorage.getItem(name)
}

const setLS = (name: "user-consent", data: any) => {
    return localStorage.setItem(name, JSON.stringify(data))
}

export { getLS, setLS }
