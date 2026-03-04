const createLink = (text, url) => `<a href="${url}" target="_blank">${text}</a>`
const initLinks = (arr) => arr.map(e => createLink(e[0], e[1])).join("")

const titoliEuropei = [
    ["Germania", "https://www.deutsche-finanzagentur.de/en/federal-securities/issuances/issuance-calendar"],
    ["Francia", "https://www.aft.gouv.fr/en/encours-detaille-oat"],
    ["Bretagna", "https://www.dmo.gov.uk/data/pdfdatareport?reportCode=D1A"],
]
const titoliItalia = [
    ["BTP", "https://www.milanofinanza.it/quotazioni/ricerca/bond-btp#021"],
    ["MEF (Calendario)", "https://www.dt.mef.gov.it/it/debito_pubblico/calendari_emissioni/"]
]
const notizie = [
    ["ilSole24ORE", "https://www.ilsole24ore.com/"],
    ["Ansa", "https://www.ansa.it/sito/notizie/topnews/index.shtml"],
]
const altro = [
    ["justETF", "https://www.justetf.com/it/"],
    ["BorsaItaliana", "https://www.borsaitaliana.it/homepage/homepage.htm"],
    ["MorningStar", "https://www.morningstar.com/"],
]

class Home extends Page {
    constructor(){
        super()
        this.page.id = "home"

        this.titoliItalia =  initLinks(titoliItalia)
        this.titoliEuropei = initLinks(titoliEuropei)
        this.notizie =       initLinks(notizie)
        this.altro =         initLinks(altro)

        const Titoli = create("div")
        Titoli.innerHTML = this.setContentTDS()

        const Companies = create("div")
        Companies.innerHTML = this.setContentGiornali() 

        this.page.append(Titoli, Companies)
    }


    setContentTDS(){
        return `
            <div class="box">
                <div>
                    <h2 class="titoli">Dettagli ITALIA</h2>
                    <div class="flex"> ${this.titoliItalia} </div>
                </div>
                <div>
                    <h2 class="titoli">Titoli EUROPEI</h2>
                    <div class="flex"> ${this.titoliEuropei} </div>
                </div>
            </div>
        `
    }
    setContentGiornali(){
        return `
            <div class="box">
                <div>
                    <h2 class="titoli">Giornali</h2>
                    <div class="flex"> ${this.notizie} </div>
                </div>
                <div>
                    <h2 class="titoli">Altro</h2>
                    <div class="flex"> ${this.altro} </div>
                </div>
            </div>
        `
    }


}
