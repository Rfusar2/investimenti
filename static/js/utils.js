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
    }

    insertLink(name, url){
        const link = create("a")
        link.textContent = name
        link.href = url
        link.target = "_blank"
        this.page.append(link)
    }
}
