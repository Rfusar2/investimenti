* Helper per calcoli su titoli di stato

![version](https://img.shields.io/badge/version-0.0.001-green)

è ancora in fase di sviluppo... 

cioè la grafica fa schifo però per i calcoli è funzionale

non ho utilizzato linguaggi di programmazione, perchè questi file sono utilizzabili da tutti senza installare niente sul prorpio pc.


cliccando su Home, 

![img home](static\img\home.jpg)

si puo cliccare su uno dei link che rimando sul sito del relativo stato per visualizzare 
i titoli di stato (per alcuni fanno scaricare un pdf)


per modificare il database devi andare sul file [database](static\js\database.js)

```javascript
const data = [
    ["GB00BT7J0027", "4.5%", "07-03-2035", "99.84", "Gran Bretagna", "Cedola"],
    ["GB00BTXS1K06", "4.75%", "22-10-2035", "101.24", "Gran Bretagna", "Cedola" ],
    ["FR001400X8V5", "3.2%", "25-05-2035", "98.75", "Francia", "Cedola"],
    ["91282CPJ4", "4.0%", "15-11-2035", "98.10", "America", "Cedola"],
    ["IT0005437147", "0%", "01-04-2026", "99.699", "Italia", "Scadenza" ],
    ["IT0005454241", "0%", "01-08-2026", "99.047", "Italia", "Scadenza"],
]
```

esempio di visualizzazione

![img database](static\img\tabella.jpg)
