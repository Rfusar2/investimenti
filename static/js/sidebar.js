const pages = [
    {page: "Home", _class: Home},
    {page: "Database", _class: Database},
    {page: "Ragioniamo", _class: Ragioniamo},
]


class Sidebar {
    constructor(){
        this.aside = select("one", "aside")
        this.list = select("one", "ul")

        for(const p of pages){ this.insertItem(p.page, p._class) }
    }

    insertItem(text, _class){
        const li = create("li")
        li.textContent = text
        li.addEventListener("click", ()=>new _class() )

        this.list.append(li)
    }
}

new Sidebar()
