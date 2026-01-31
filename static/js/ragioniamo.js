class Ragioniamo extends Page {
    constructor(){
        super()
        this.addCss("static/css/ragioniamo.css")
        this.page.innerHTML = `
            <div id="help">
                per eseguire il calcolo scrivere nel input</br>
                (investimento)'spazio'(tasso lordo)'spazio'(cedole)</br>
                *(cedole) on è obbligatorio cioè </br>
                (investimento)'spazio'(tasso lordo)</br>
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
        input.placeholder = "questo è l'input :)"
        const span = create("span")

        input.addEventListener("blur", (e)=>{
            const v = e.target.value
            const [investimento, tasso, n_cedola] = v.split(" ").map(e => parseFloat(e))
            const tasso_fisso = (tasso/100) * 0.875
            console.log(n_cedola)
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
