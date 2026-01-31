const select = (type, selector)=>{
    switch(type){
        case "one": return document.querySelector(selector)
        case "all": return document.querySelectorAll(selector)
    }
}

const create = (element)=>document.createElement(element)


class Page {
    constructor(){
        this.page = select("one", "page")
        this.page.innerHTML = ""
        this.css = select("all", "link")[1]
        this.css.remove()
    }

    insertLink(name, url){
        const link = create("a")
        link.textContent = name
        link.href = url
        link.target = "_blank"
        this.page.append(link)
    }
    addCss(src){
        const head = select("one","head")
        const css = create("link")
        css.rel = "stylesheet"
        css.href = src
        head.append(css)
    }
}
