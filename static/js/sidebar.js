const pages = [
    {page:{ long: "Titoli Di Stato", short: "T"}, _class: Home},
    {page:{ long: "Database", short: "D"}, _class: Database},
    {page:{ long: "Ragioniamo", short:"R"}, _class: Ragioniamo},
    {page:{ long: "Idea 1", short: "1"}, _class: Idea1},
    {page:{ long: "Idea 2", short: "2"}, _class: Idea2},
    {page:{ long: "Idea 3", short: "3"}, _class: Idea3},
]

function myAnimation(e, mouseover_func, mouseout_func){
    e.addEventListener("mouseover", mouseover_func)
    e.addEventListener("mouseout", mouseout_func)
}


class Sidebar {
    constructor(){
        this.aside = select("one", "aside")
        this.list = select("one", "ul")
        for(const p of pages){ this.insertItem(p.page, p._class) }

        const component = select("one", "component")
        myAnimation(
            this.aside, 
            ()=>{
                component.style.gridTemplateColumns = "15% 85%"
                select("all", "li").forEach(e => {
                    e.textContent = e.getAttribute("long")
                })
            },
            ()=>{
                component.style.gridTemplateColumns = "5% 95%"
                select("all", "li").forEach(e => {
                    e.textContent = e.getAttribute("short")
                })
            },
        )
    }

    insertItem(text, _class){
        const li = create("li")
        li.textContent = text.long
        
        li.setAttribute("short", text.short)
        li.setAttribute("long", text.long)

        li.addEventListener("click", ()=>new _class() )
        myAnimation(
            li, 
            (e)=>e.target.style.marginLeft = "10px",
            (e)=>e.target.style.marginLeft = "0px",
        )

        this.list.append(li)
    }
}

new Sidebar()
