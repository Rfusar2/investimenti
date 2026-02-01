//TODO sistemare il concetto di riga cioe
// una riga deve avere il msg di help, calcolo e spiegazione di calcolo

class Ragioniamo extends Page {
    constructor(){
        super()
        this.page.id = ""
        this.page.innerHTML = `
            <div id="help">
                tasso_fisso = tasso_lordo * 0.875 (12,5) </br>
                tasso_fisso = tasso_lordo * 0.740 (26)
            </div>
            <div id="card"></div>
        `
        this.card = select("one", "#card")
        this.Row()
    }

    Row(){
        const row = create("div")
        row.classList.add("row")

        const input = create("input")
        input.placeholder = "(investimento)'spazio'(tasso lordo)'spazio'(cedole)"
        const span = create("span")

        input.addEventListener("blur", (e)=>{
            const v = e.target.value
            const [investimento, tasso, n_cedola] = v.split(" ").map(e => parseFloat(e))
            const tasso_fisso = (tasso/100) * 0.875
            //* Log
            console.log({ investimento, tasso_fisso, n_cedola })

            if(n_cedola != undefined){
                const tot = ((investimento*tasso_fisso)/n_cedola).toFixed(3)
                span.textContent = `[${investimento} * (tasso fisso) ${(tasso_fisso).toFixed(3)}] / (n° cedole) ${n_cedola} = (cedola) ${tot}`
            }
            else {
                const tot = (investimento*tasso_fisso).toFixed(3)
                span.textContent = `${investimento} * (tasso fisso) ${(tasso_fisso).toFixed(3)} = (cedola) ${tot}`
            }
            row.append(span)
        })
        row.append(input, span)
       this.card.append(row)
    }
}
