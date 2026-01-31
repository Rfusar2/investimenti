class Home extends Page {
    constructor(){
        super()
        this.page.id = "home"
        this.insertLink("Italia", "https://www.milanofinanza.it/quotazioni/ricerca/bond-btp#021")
        this.insertLink("Germania", "https://www.deutsche-finanzagentur.de/en/federal-securities/issuances/issuance-calendar")
        this.insertLink("Francia", "https://www.aft.gouv.fr/en/encours-detaille-oat")
        this.insertLink("Bretagna", "https://www.dmo.gov.uk/data/pdfdatareport?reportCode=D1A")
        this.insertLink("America", "https://www.treasurydirect.gov/auctions/announcements-data-results/")
        this.insertLink("Cambio Valuta", "https://it.investing.com/currencies/")
    }
}
