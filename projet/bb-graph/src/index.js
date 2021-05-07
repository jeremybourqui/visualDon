import bb, { bar } from 'billboard.js'

const DATA = [
  {"Date":"2016-01","km":"91.562"},{"Date":"2016-02","km":"74.5"},{"Date":"2016-03","km":"56.512"},{"Date":"2016-04","km":"42.38"},{"Date":"2016-05","km":"71.722"},{"Date":"2016-06","km":"20.063"},{"Date":"2016-07","km":"51.711"},{"Date":"2016-08","km":"68.516"},{"Date":"2016-09","km":"88.512"},{"Date":"2016-10","km":"79.385"},{"Date":"2016-11","km":"76.631"},{"Date":"2016-12","km":"71.563"}
]



bb.generate({
  data: {
    json: {
      km: DATA.map(({ km }) => km),
    },
    type: bar(),
  },
  axis: {
    x: {
      type: 'category',
      categories: DATA.map(({ Date }) => Date),
      tick: {
        fit: true,
        multiline: false,
        autorotate: true,
        rotate: -45,
        culling: false
      },
    }
  },
  bindto: '#graph'
})
