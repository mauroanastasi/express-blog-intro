const express = require(`express`);

const app = express();

const port = 3000;

// rotta che ritorna testo esempio
app.get(`/`, (req,res) => {
    res.send(`Server del mio blog`)
})
// avvio server mettendolo in ascolto della porta
app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
})

// creo rotta bacheca che restituisca oggetto json con lista post
app.get(`/bacheca`, (req,res) => {
    const post = [
        {
            title:"Ciambellone",
            content:"lorem imsumo clab caja defcon",
            image:"public/imgs/ciambellone.jpeg",
            tags:[`#zuccheroavelo`, `#giallo`, `#ciambella`,`#ciambellone`, `#zuccero`]
        }, {
            title:"Special crackers",
            content:"lorem imsumo clab caja defcon dicotomic label natus",
            image:"public/imgs/cracker_barbabietola.jpeg",
            tags:[`#fucsia`, `#semi`, `#creckers`, `#barbabietola`, `#zuccero`]
        }, {
            title:"Pane fritto della nonna",
            content:"lorem luna neptum rekiamo lorem imsumo clab caja defcon",
            image:"public/imgs/pane_fritto_dolce.jpeg",
            tags:[`#fritto`, `#pane`, `#ricettedellanonna`, `#zuccero`]
        }, {
            title:"Special pasta",
            content:"lorem sole ictur piena cablando lorem luna neptum rekiamo lorem imsumo clab caja defcon",
            image:"public/imgs/pasta_barbabietola.jpeg",
            tags:[`#barbabietola`, `#fucsia`, `#pasta`, `#pistacchio`]
        }, {
            title:"Torta conviviale",
            content:"lorem imsumo clab caja defcon  sole ictur piena cablando",
            image:"public/imgs/torta_paesana.jpeg",
            tags:[`#ricetteantiche`, `#tradizione`, `#dolcibonta`, `#cioccolato`]
        }
    ];
    res.json(post);
})
