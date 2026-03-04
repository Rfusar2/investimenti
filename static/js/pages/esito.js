const titoli = [
    "ISIN", "Tipo", "Costo Annuo", "Costo entrata", "Dimensione (Circa)", "Emittente", "Valuta", "Inves. min. entrata e poi", "Consigliato da", "Esito"
]

const data = [
    [
        ["LU3225976060", "https://www.blackrock.com/lu/intermediaries/products/347200/"]
        , "Obbl.", "1.33%", "3.00%", "332Mln", "Blackrock", "EUR", "5.000 - 1.000", "BCC", "NO"
    ],
    [
        ["LU0117861202", "https://global.morningstar.com/it/investimenti/fondi/F0GBR04MWU/quote"]
        , "Azio.", "2,45%", "/", "7,9Mld", "JPMorgan", "USD", "5.000 - /", "BCC", "NO"
    ],
    [
        ["LU2244417460", "https://global.morningstar.com/it/investimenti/fondi/F00001CZ5A/quote"]
        , "Azio.", "2,69%", "/", "56,6Mln", "Fidelity", "USD", "/ - /", "BCC", "NO"
    ],
]


class Database extends Page {
    constructor(){
        super()
        this.page.id = "database"
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
            for(let i = 0; i<row.length;i++){
                const td = create("td")
                if(i==0){
                    const link = create("a")
                    link.textContent = row[i][0]
                    link.href = row[i][1]
                    link.target = "_blank"
                    td.append(link)
                    tr.append(td)
                }
                else{
                    td.textContent = row[i]
                    tr.append(td)
                }
            }
            this.tbody.append(tr)
        }
        this.table.append(this.thead)
        this.table.append(this.tbody)
    }
}
