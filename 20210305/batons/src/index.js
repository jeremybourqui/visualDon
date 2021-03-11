import {
    axisLeft,
    select,
    scaleLinear,
    max,
} from 'd3'

const DATA = [{ "Commune": "Bulle", "Potentiel": 127.95 }, { "Commune": "Fribourg", "Potentiel": 105.92 }, { "Commune": "Estavayer", "Potentiel": 80.74 }, { "Commune": "Tafers", "Potentiel": 73.19 }, { "Commune": "D├╝dingen", "Potentiel": 68.64 }, { "Commune": "Gibloux", "Potentiel": 66.47 }, { "Commune": "Belmont-Broye", "Potentiel": 59.07 }, { "Commune": "Murten", "Potentiel": 57.36 }, { "Commune": "Ch├ótel-Saint-Denis", "Potentiel": 56.69 }, { "Commune": "Kerzers", "Potentiel": 50.48 }, { "Commune": "Romont (FR)", "Potentiel": 49.5 }, { "Commune": "Villars-sur-Gl├óne", "Potentiel": 46.81 }, { "Commune": "Courtepin", "Potentiel": 41.87 }, { "Commune": "Mont-Vully", "Potentiel": 41.2 }, { "Commune": "Plaffeien", "Potentiel": 40.68 }, { "Commune": "Marly", "Potentiel": 39.95 }, { "Commune": "Ried bei Kerzers", "Potentiel": 39.43 }, { "Commune": "Gurmels", "Potentiel": 37.98 }, { "Commune": "Vuisternens-devant-Romont", "Potentiel": 35.36 }, { "Commune": "Schmitten (FR)", "Potentiel": 34.99 }, { "Commune": "W├╝nnewil-Flamatt", "Potentiel": 33.63 }, { "Commune": "Givisiez", "Potentiel": 33.02 }, { "Commune": "Siviriez", "Potentiel": 31.46 }, { "Commune": "Val-de-Charmey", "Potentiel": 30.68 }, { "Commune": "B├Âsingen", "Potentiel": 30.63 }, { "Commune": "Le Mouret", "Potentiel": 29.48 }, { "Commune": "Ursy", "Potentiel": 27.47 }, { "Commune": "Vuadens", "Potentiel": 26.69 }, { "Commune": "Granges-Paccot", "Potentiel": 25.45 }, { "Commune": "Hauterive (FR)", "Potentiel": 24.97 }, { "Commune": "S├óles", "Potentiel": 24.91 }, { "Commune": "Villaz", "Potentiel": 24.33 }, { "Commune": "Attalens", "Potentiel": 24.03 }, { "Commune": "Ueberstorf", "Potentiel": 23.6 }, { "Commune": "Montagny (FR)", "Potentiel": 23.47 }, { "Commune": "Avry", "Potentiel": 23.11 }, { "Commune": "Prez", "Potentiel": 22.58 }, { "Commune": "Haut-Intyamon", "Potentiel": 20.99 }, { "Commune": "Villorsonnens", "Potentiel": 20.65 }, { "Commune": "Gruy├¿res", "Potentiel": 20.25 }]



const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const svg = select('body')
    .append('svg')
    .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const yScale = scaleLinear()
    .domain([0, max(DATA, d => d.Potentiel)])
    .range([HEIGHT - MARGIN_BOTTOM, 0])


const g = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

g.selectAll('rect')
    .data(DATA)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * BAR_WIDTH)
    .attr('width', BAR_WIDTH - MARGIN)
    .attr('y', d => yScale(d.Potentiel))
    .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.Potentiel))
    .attr('fill', 'steelblue')

g.selectAll('text')
    .data(DATA)
    .enter()
    .append('text')
    .text(d => d.Commune)
    .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
    .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
    .attr('text-anchor', 'middle')

const axisY = axisLeft().scale(yScale)
    .tickFormat(d => `${d / 1000}k`)
    .ticks(5)

svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT - 3})`)
    .call(axisY)