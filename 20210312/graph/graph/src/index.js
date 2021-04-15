import {
  axisLeft,
  select,
  scaleLinear,
  max,
} from 'd3'

const DATA = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon-les-Bains', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

getPieData = d3.pie().value(d => d.value);

pieData = getPieData(DATA);

  const WIDTH = width / 3
  const HEIGHT = width / 4
  const container = DOM.svg(WIDTH, HEIGHT)
  const svg = d3.select(container)
  
  const arcCreator = d3.arc()
    .innerRadius(0)
    .outerRadius(HEIGHT / 2 - 10) // pour que tout le camembert soit visible
  
  // une fonction pour la couleur
  const color = (DATA) => {
    switch (DATA.nom) {
      case 'Lausanne': return 'gold'
      case 'Yverdon-les-Bains': return 'limegreen'
      case 'Montreux': return 'blue'
      case 'Renens': return 'red'
      case 'Nyon': return 'green'
      case 'Vevey': return 'yellow'
      default: return 'indianred'
    }
  }
  
  const pie = svg.append('g')
    .attr('transform', `translate(${HEIGHT / 2}, ${HEIGHT / 2})`)
  
  pie.selectAll('path')
    .data(pieData)
    .enter()
    .append('path')
    .attr('d', arcCreator)
    .attr('fill', color)
  
  // un texte pour chaque tranche
  pie.selectAll('text')
    .data(pieData)
    .enter()
    .append('text')
    // .centroid permet de trouver le centre de la tranche
    .attr('transform', d => `translate(${arcCreator.centroid(d)})`)
    .attr('text-anchor', 'middle')
    .text(d => d.data.name)
  
  // la légende
  const legend = svg.append('g')
    .attr('transform', `translate(${HEIGHT-10})`)
  
  const RECT_WIDTH = 20
  
  // les carrés de couleur3.line()
  legend.selectAll('rect')
    .data(pieData)
    .enter()
    .append('rect')
    .attr('y', (d, i) => i * RECT_WIDTH)
    .attr('width', RECT_WIDTH)
    .attr('height', RECT_WIDTH)
    .attr('fill', color)
  
  // les noms de ville
  legend.selectAll('text')
    .data(pieData)
    .enter()
    .append('text')
    .attr('x', RECT_WIDTH * 1.5)
    .attr('y', (d, i) => i * RECT_WIDTH + RECT_WIDTH * 0.75)
    .attr('width', RECT_WIDTH)
    .attr('height', RECT_WIDTH)
    .text(d => d.data.name)