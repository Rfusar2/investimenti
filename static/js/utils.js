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

class Idea extends Page {
    constructor(description){
        super()
        this.page.id = "idea"
        this.description = create("div")
        this.description.id = "description"
        
        this.insertLink_descritpion("BTP 14/02/2026", "https://www.biancolavoro.it/btp-valore-san-valentino-tassi-al-36-e-tasse-dimezzate-conviene-investire-i-risparmi-nel-2026-la-simulazione-e-i-rischi/")
        this.insertLink_descritpion("BTP 02/03/2026", "https://www.borsaitaliana.it/borsa/notizie/teleborsa/finanza/btp-valore-nuova-emissione-dal-2-al-6-marzo-con-meccanismo-stepup-di-222-anni-149_2026-02-05_TLB.html")


        this.description.innerHTML += description
        this.product = create("div")
        this.product.id = "product"

        this.page.append(this.description, this.product)
    }

    insertLink_descritpion(name, url){
        const link = create("a")
        link.textContent = name
        link.href = url
        link.target = "_blank"
        this.description.append(link)

    }
}
