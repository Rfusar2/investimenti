const titoli = [
    "ISIN", "Interesse", "Scadenza", "Prezzo", "Paese Titolo", "Scopo"
]

const data = [
    ["GB00BT7J0027", "4.5%", "07-03-2035", "99.84", "Gran Bretagna", "Cedola"],
    ["GB00BTXS1K06", "4.75%", "22-10-2035", "101.24", "Gran Bretagna", "Cedola" ],
    ["FR001400X8V5", "3.2%", "25-05-2035", "98.75", "Francia", "Cedola"],
    ["91282CPJ4", "4.0%", "15-11-2035", "98.10", "America", "Cedola"],
    ["IT0005437147", "0%", "01-04-2026", "99.699", "Italia", "Scadenza" ],
    ["IT0005454241", "0%", "01-08-2026", "99.047", "Italia", "Scadenza"],
]

class Database extends Page {
    constructor(){
        super()
        this.addCss("static/css/database.css")

        this.table = create("table")
        this.initTable()

        this.page.append(this.table)
    }

    initTable(){
        this.thead = create("thead")
        this.tbody = create("tbody")
        const tr_thead = create("tr")
        for(const t of titoli){
            const th = create("th")
            th.textContent = t
            tr_thead.append(th)
        }
        this.thead.append(tr_thead)
        for(const row of data){
            const tr = create("tr")
            for(const cell of row){
                const td = create("td")
                td.textContent = cell
                tr.append(td)
            }
            this.tbody.append(tr)
        }
        this.table.append(this.thead)
        this.table.append(this.tbody)
    }
}
