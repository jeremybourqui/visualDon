import bb, { bar, radar } from 'billboard.js'

let chart = bb.generate({
  size: {
    height: 450,
  },
  data: {    x: "x",
  columns: [
      ["x","Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
      ["data2016",91.562,74.5,56.512,42.38,71.722,20.063,51.711,68.516,88.512,79.385,76.631,71.563],

  ],
    type: radar(),
    colors: {
      data2016: "#4e79a7",
      data2017: "#f28e2c",
      data2018: "#e15659",
      data2019: "#76b7b2",
      data2020: "#edc948",
      dataMoyenne: "#bab0ac"
    },
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

// let chartJuly17 = bb.generate({
//   data: {    x: "x",
//   columns: [
//       ["x",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31 ],
//       ["dataJuly17",1.028,0.511,1.746,2.636,7.639,15.487,10.718,13.279,12.756,14.384,14.454,11.936,15.911,11.141,12.117,10.2,16.655,7.94,1.344,3.325,0.276,1.622,3.688,0.579,0.128,1.01,3.262,5.039,0.567,3.574,1.944,],
//   ],
//     type: bar(),
//     labels: false
//   },
//   radar: {
//     axis: {
//       max: 18
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
//       // categories: ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
//       tick: {
//         fit: true,
//         multiline: false,
//         autorotate: true,
//         rotate: -45,
//         culling: false
//       },
//     }
//   },
//   bindto: "#radarChartJuly17"
// });

// let chartMars20 = bb.generate({
//   data: {    x: "x",
//   columns: [
//       ["x",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182
//     ],
//       ["dataMars20",0.675,0.646,2.333,0.363,0.462,1.652,1.206,2.627,3.037,1.561,1.5,0.477,0.505,2.413,2.569,2.699,4.758,3.779,0.253,0.736,1.776,2.897,1.986,3.641,0.548,0.558,2.906,0.837,1.8,0.71,0.747,0.213,1.694,1.165,0.539,2.116,0.546,2.151,1.659,1.043,0.398,9.174,11.46,6.036,13.016,4.186,0.274,1.7,0.456,1.636,1.732,0.394,2.392,0.283,1.607,1.832,1.364,1.645,3.466,0.359,1.662,1.602,0.723,2.09,1.887,3.747,0.601,0.481,1.778,1.281,2.124,2.045,1.266,1.983,0.732,1.685,1.094,1.019,1.409,1.352,0.483,0.392,0.526,1.663,0.742,0.392,0.825,1.21,0.448,0.807,1.415,1,0.806,0.515,1.072,0.94,1.724,0.631,0.667,0.538,0.624,1.181,0.292,0.584,0.397,0.948,0.415,0.632,0.274,0.277,1.15,0.287,0.408,0.457,0.447,0.583,0.49,0.46,0.717,0.539,0.644,0.531,0.561,0.644,0.497,1.014,0.541,0.697,0.589,0.491,7.469,2.273,2.132,2.042,2.512,2.116,0.318,0.303,2.212,1.936,0.405,0.839,2.726,0.397,0.652,2.59,2.345,2.092,2.882,2.285,0.688,0.613,2.185,2.902,2.697,2.582,3.245,1.181,0.147,3.012,3.035,2.995,1.105,4.199,1.357,0.542,3.364,2.675,2.182,2.699,3.814,0.337,0.239,1.744,2.605,2.508,1.726,3.324,1.871,0.729,4.257,2.508,
//       ],
//   ],
//     type: bar(),
//     labels: false
//   },
//   radar: {
//     axis: {
//       max: 4
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
//       // categories: ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
//       tick: {
//         fit: true,
//         multiline: false,
//         autorotate: true,
//         rotate: -45,
//         culling: false
//       },
//     }
//   },
//   bindto: "#radarChartMars20"
// });

const bouton2016 = document.getElementById('btn-2016');
let show2016 = true;

const bouton2017 = document.getElementById('btn-2017');
let show2017 = false;

const bouton2018 = document.getElementById('btn-2018');
let show2018 = false;

const bouton2019 = document.getElementById('btn-2019');
let show2019 = false;

const bouton2020 = document.getElementById('btn-2020');
let show2020 = false;

const boutonMoyenne = document.getElementById('btn-Moyenne');
let showMoyenne = false;

bouton2016.addEventListener('click', () => {
  if (show2016 == false) {
    console.log("false");
    chart.load({
      columns: [["data2016", 
      91.562,
      74.5,
      56.512,
      42.38,
      71.722,
      20.063,
      51.711,
      68.516,
      88.512,
      79.385,
      76.631,
      71.563,]]
    });
    show2016 = true;
  } else {
    console.log("true");
    chart.unload({
      ids: "data2016",
      done: function() {
        // called after the unloaded
      }
    });
    show2016 = false;
  }
})

bouton2017.addEventListener('click', () => {
  if (show2017 == false) {
    chart.load({
      columns: [["data2017", 
      48.33,
      63.372,
      76.355,
      66.331,
      75.435,
      67.878,
      206.896,
      78.414,
      167.397,
      87.894,
      109.453,
      90.157]]
    });
    show2017 = true;
  } else {
    chart.unload({
      ids: "data2017",
      done: function() {
         // called after the unloaded
      }
    });
    show2017 = false;
  }
})

bouton2018.addEventListener('click', () => {
  if (show2018 == false) {
    chart.load({
      columns: [["data2018", 
      78.356,
      101.95,
      89.559,
      118.374,
      76.182,
      76.056,
      58.052,
      68.793,
      60.929,
      78.418,
      71.083,
      64.659,]]
    });
    show2018 = true;
  } else {
    chart.unload({
      ids: "data2018",
      done: function() {
         // called after the unloaded
      }
    });
    show2018 = false;
  }
})

bouton2019.addEventListener('click', () => {
  if (show2019 == false) {
    chart.load({
      columns: [["data2019", 
      50.391,
      51.624,
      70.191,
      72.563,
      79.482,
      68.996,
      89.025,
      76.002,
      127.599,
      63.396,
      70.264,
      61.702,]]
    });
    show2019 = true;
  } else {
    chart.unload({
      ids: "data2019",
      done: function() {
         // called after the unloaded
      }
    });
    show2019 = false;
  }
})

bouton2020.addEventListener('click', () => {
  if (show2020 == false) {
    chart.load({
      columns: [["data2020", 
      52.656,
      74.537,
      39.465,
      19.702,
      47.393,
      67.765,
      82.422,
      75.744,
      56.517,
      27.594,
      40.112,
      48.486,]]
    });
    show2020 = true;
  } else {
    chart.unload({
      ids: "data2020",
      done: function() {
         // called after the unloaded
      }
    });
    show2020 = false;
  }
})

boutonMoyenne.addEventListener('click', () => {
  if (showMoyenne == false) {
    chart.load({
      columns: [["dataMoyenne", 
      64.259,
      73.1966,
      66.4164,
      63.87,
      70.0428,
      60.1516,
      97.6212,
      73.4938,
      100.1908,
      67.3374,
      73.5086,
      67.3134,]]
    });
    showMoyenne = true;
  } else {
    chart.unload({
      ids: "dataMoyenne",
      done: function() {
         // called after the unloaded
      }
    });
    showMoyenne = false;
  }
})