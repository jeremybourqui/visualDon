const data = require('./noms.json')

const femmesAYverdon = d => d.plz === '1489'

const resultat = data
    .filter(femmesAYverdon)
    .map(d => ({ nom: d.nachname, nombre: d.anzahl }))
    .sort((a, b) => a.nombre > b.nombre ? 1 : -1)

console.log(resultat)