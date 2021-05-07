import bb, { bar, radar } from 'billboard.js'

const data2016 = [{"Date":"2016-01","km":"91.562"},{"Date":"2016-02","km":"74.5"},{"Date":"2016-03","km":"56.512"},{"Date":"2016-04","km":"42.38"},{"Date":"2016-05","km":"71.722"},{"Date":"2016-06","km":"20.063"},{"Date":"2016-07","km":"51.711"},{"Date":"2016-08","km":"68.516"},{"Date":"2016-09","km":"88.512"},{"Date":"2016-10","km":"79.385"},{"Date":"2016-11","km":"76.631"},{"Date":"2016-12","km":"71.563"}]
const data2017 = [{"Date":"2017-01","km":"48.33"},{"Date":"2017-02","km":"63.372"},{"Date":"2017-03","km":"76.355"},{"Date":"2017-04","km":"66.331"},{"Date":"2017-05","km":"75.435"},{"Date":"2017-06","km":"67.878"},{"Date":"2017-07","km":"206.896"},{"Date":"2017-08","km":"78.414"},{"Date":"2017-09","km":"167.397"},{"Date":"2017-10","km":"87.894"},{"Date":"2017-11","km":"109.453"},{"Date":"2017-12","km":"90.157"}]
const data2018 = [{"Date":"2018-01","km":"78.356"},{"Date":"2018-02","km":"101.95"},{"Date":"2018-03","km":"89.559"},{"Date":"2018-04","km":"118.374"},{"Date":"2018-05","km":"76.182"},{"Date":"2018-06","km":"76.056"},{"Date":"2018-07","km":"58.052"},{"Date":"2018-08","km":"68.793"},{"Date":"2018-09","km":"60.929"},{"Date":"2018-10","km":"78.418"},{"Date":"2018-11","km":"71.083"},{"Date":"2018-12","km":"64.659"}]
const data2019 = [{"Date":"2019-01","km":"50.391"},{"Date":"2019-02","km":"51.624"},{"Date":"2019-03","km":"70.191"},{"Date":"2019-04","km":"72.563"},{"Date":"2019-05","km":"79.482"},{"Date":"2019-06","km":"68.996"},{"Date":"2019-07","km":"89.025"},{"Date":"2019-08","km":"76.002"},{"Date":"2019-09","km":"127.599"},{"Date":"2019-10","km":"63.396"},{"Date":"2019-11","km":"70.264"},{"Date":"2019-12","km":"61.702"}]
const data2020 = [{"Date":"2020-01","km":"52.656"},{"Date":"2020-02","km":"74.537"},{"Date":"2020-03","km":"39.465"},{"Date":"2020-04","km":"19.702"},{"Date":"2020-05","km":"47.393"},{"Date":"2020-06","km":"67.765"},{"Date":"2020-07","km":"82.422"},{"Date":"2020-08","km":"75.744"},{"Date":"2020-09","km":"56.517"},{"Date":"2020-10","km":"27.594"},{"Date":"2020-11","km":"40.112"},{"Date":"2020-12","km":"48.486"}]

//Stacked
bb.generate({
  data: {
    json: {
      data2016: data2016.map(({ km }) => km),
      data2017: data2017.map(({ km }) => km),
      data2018: data2018.map(({ km }) => km),
      data2019: data2019.map(({ km }) => km),
      data2020: data2020.map(({ km }) => km),
    },
    type: bar(),
    groups: [
      [
        "data2016",
        "data2017",
        "data2018",
        "data2019",
        "data2020"
      ]
    ],
    order: "null"
  },
  axis: {
    x: {
      type: 'category',
      categories: ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
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


// let chart = bb.generate({
//   data: {
//     json: {
//       // data2016: data2016.map(({ km }) => km),
//       // data2017: data2017.map(({ km }) => km),
//       // data2018: data2018.map(({ km }) => km),
//       // data2019: data2019.map(({ km }) => km),
//       // data2020: data2020.map(({ km }) => km),
//     },
//     type: radar(),
//     labels: false
//   },
//   radar: {
//     axis: {
//       max: 200
//     },
//     level: {
//       depth: 4
//     },
//     direction: {
//       clockwise: true
//     }
//   },
//   axis: {
//     x: {
//       type: 'category',
//       categories: ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
//       tick: {
//         fit: true,
//         multiline: false,
//         autorotate: true,
//         rotate: -45,
//         culling: false
//       },
//     }
//   },
//   bindto: "#radarChart"
// });

let chart = bb.generate({
  data: {    x: "x",
  columns: [
      ["x","Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
      ["data2016",91.562,74.5,56.512,42.38,71.722,20.063,51.711,68.516,88.512,79.385,76.631,71.563],

  ],
    type: radar(),
    labels: false
  },
  radar: {
    axis: {
      max: 200
    },
    level: {
      depth: 4
    },
    direction: {
      clockwise: true
    }
  },
  axis: {
    x: {
      type: 'category',
      // categories: ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
      tick: {
        fit: true,
        multiline: false,
        autorotate: true,
        rotate: -45,
        culling: false
      },
    }
  },
  bindto: "#radarChart"
});

const bouton2016 = document.getElementById('btn-2016');
let show2016 = true;

const bouton2017 = document.getElementById('btn-2017');
let show2017 = false;

bouton2017.addEventListener('click', () => {
  if (show2017 == false) {
    console.log("false");
    chart.load({
      columns: [["data2017", 48.33,63.372,76.355,66.331,75.435,67.878,206.896,78.414,167.397,87.894,109.453,90.157]]
    });
    show2017 = true;
  } else {
    console.log("true");
    chart.unload({
      ids: "data2017",
      done: function() {
         // called after the unloaded
      }
    });
    show2017 = false;
  }

})


