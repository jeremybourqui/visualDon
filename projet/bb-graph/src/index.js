import bb, { bar, radar } from 'billboard.js'

let chart = bb.generate({
  size: {
    height: 500,
  },
  data: {    x: "x",
  columns: [
      ["x","Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
      ["data2016",91.562,74.5,56.512,42.38,71.722,20.063,51.711,68.516,88.512,79.385,76.631,71.563],

  ],
    type: radar(),
    names: {
      data2016: "2016",
      data2017: "2017",
      data2018: "2018",
      data2019: "2019",
      data2020: "2020",
      dataMoyenne: "Moyenne",
    },
    colors: {
      data2016: "#4e79a7",
      data2017: "#f28e2c",
      data2018: "#e15659",
      data2019: "#76b7b2",
      data2020: "#edc948",
      dataMoyenne: "#bab0ac"
    },
    labels: {
      format: {
        data2016: function(v, id, i, j) { return v == 71.722 ? "Voyage à Paris" : ""; },
        data2017: function(v, id, i, j) { return v == 206.896 ? "Voyage à New York" : ""; },
        data2018: function(v, id, i, j) { return v == 118.374 ? "Voyage à Berlin" : ""; },
        data2019: function(v, id, i, j) { return v == 127.599 ? "Voyage à Londre" : ""; },
        data2020: function(v, id, i, j) { return v == 19.702 ? "Confinement" : ""; },
    },colors: "black",
    }
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
    
  bindto: "#radarChart"
});


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