const data = require('./solar.json')

const commFribourg = d => d.Canton === 'Fribourg' && d.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh >= "20"

const resultat = data
    .filter(commFribourg)
    .map(d => ({ Commune: d.MunicipalityName, Potentiel: d.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh }))
    .sort((a, b) => a.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh > b.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh ? -1 : 1)

// console.log(resultat)

console.log(JSON.stringify(resultat))