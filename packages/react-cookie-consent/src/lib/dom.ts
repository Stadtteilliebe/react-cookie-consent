const checkDomScripts = (scripts: { id: string; active: boolean }[]) => {
    scripts.map((sc) => {
        const el: HTMLScriptElement | null = document.querySelector(`[data-consent="${sc.id}"]`)
        if (!el) {
            return
        }
        console.log(el.type)
        el.type = sc.active ? "text/javascript" : "text/plain"
        return
    })
}

export { checkDomScripts }
