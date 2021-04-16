const xlsx = require('xlsx')

const file = xlsx.readFile('data.xlsx')
const json = xlsx.utils.sheet_to_json(file.Sheets['data'])


const commFribourg = d => d.Kanton === 'FR' && d.DTV_2018 >= "1000"

const resultat = json
    .filter(commFribourg)
    .map(d => ({ Arret: d.Bahnhof_Haltestelle, Trafic: d.DTV_2018 }))


console.log(resultat);