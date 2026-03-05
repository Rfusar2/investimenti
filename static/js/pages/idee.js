function handlerPages(text, lenLimit = 1500) {
    const pages = []
    for (let i = 0; i < text.length; i += lenLimit) {
        pages.push(text.slice(i, i + lenLimit))
    }
    return pages
}


class Formazione extends Page {
    constructor(){
        super()
        this.page.id = "formazione"

        const viewer = create("div")
        this.pages = []
        viewer.innerHTML = this.initViewer()

        const menu = create("div")
        menu.innerHTML = this.initMenu()

        this.page.append(viewer, menu)

        //*Events
        this.btnsEvent()
        this.btnPrevNextEvent()

    }

    initViewer(){
        return `
            <div>
                <div id="pagesBTN">
                    <button data-prev class="btn btn-primary">Prev</button>
                    <span id="nPag"></span>
                    <button data-next class="btn btn-primary">Next</button>
                </div>
                <pre id="preview">
                    Preview...
                </pre>
            </div>
        `
    }

    initMenu(){
        return `
            <div id="formazione-menu">
                <button class="btn btn-primary btn-idea" data-btn="0" class="btn-primary">Prodotti</button>
                <button class="btn btn-primary btn-idea" data-btn="1" class="btn-primary">Tipi Società</button>
            </div>
        `
    }

    btnPrevNextEvent(){

        const btnPrev = select("one", "[data-prev]")
        const btnNext = select("one", "[data-next]")
        
        this.nPagText = select("one", "#nPag")

        const changePage = (delta) => {
        
            const maxIndex = this.pages.length - 1
        
            this.currentPageIndex += delta
            if (this.currentPageIndex <= 0) { this.currentPageIndex = 0 }
            if (this.currentPageIndex > maxIndex) { this.currentPageIndex = maxIndex }

            this.nPagText.textContent = `Pagina ${this.currentPageIndex+1} - ${this.pages.length}`
            this.previewer.textContent = this.pages[this.currentPageIndex]
        }

        btnNext.addEventListener("click", ()=> changePage(1)  )
        btnPrev.addEventListener("click", ()=> changePage(-1) )
    }

    btnsEvent(){
        this.previewer = select("one", "#preview")
        const btnsPages = select("one", "#pagesBTN")
        select("all", ".btn-idea").forEach(btn =>{
            btn.addEventListener("click", (e)=> {
                this.currentPageIndex = 0
                switch(e.currentTarget.dataset.btn){
                    case "0":{ 
                        this.pages = handlerPages(IDEA_A)
                        break 
                    }
                    case "1":{ 
                        this.pages = handlerPages(IDEA_B)
                        break 
                    }
                    case "2":{ 
                        this.pages = handlerPages(IDEA_C)
                        break 
                    }
                }
                this.previewer.style.opacity = 1
                btnsPages.style.opacity = 1
                this.nPagText.textContent = `Pagina ${this.currentPageIndex+1} - ${this.pages.length}`
                this.previewer.textContent = this.pages[this.currentPageIndex]
            })
        })
    }
}


