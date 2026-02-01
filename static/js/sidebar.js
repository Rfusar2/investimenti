const pages = [
    {page: "Home", _class: Home},
    {page: "Database", _class: Database},
    {page: "Ragioniamo", _class: Ragioniamo},
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
                    //e.querySelector("el").style.display = "flex"
                    e.style.width="80%"
                })

            },
            ()=>{
                component.style.gridTemplateColumns = "5% 95%"
                select("all", "li").forEach(e => {
                    //e.querySelector("el").style.display = "none"
                    e.style.width="20%"

                })
            },
        )
    }

    insertItem(text, _class){
        const li = create("li")
        //const svg = icon(text.toLowerCase())
        //const span = create("el")
        //span.textContent = text
        li.textContent = text
        //li.append(svg, span)
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
