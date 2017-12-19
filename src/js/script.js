'use strict';

//chart options
const CHART = document.getElementById("doughnutChart");

Chart.defaults.scale.ticks.beginAtZero = true;

//----------------


const treehouseURL = 'https://teamtreehouse.com/brandonleichty.json';

const pointsPromise = fetch(treehouseURL);

pointsPromise
        .then(data => data.json()) //convert data to JSON
        .then(data => { 
            const pointsArray = [];
            for (const [key, value] of Object.entries(data.points)) {
                if(value > 0) {
                    pointsArray.push( {key, value} ); //push skills that have more than 0 points into 'pointsArray'
                }
                console.log(`${key} ${value}`);
              }
              console.table(pointsArray);
            })
        .catch((err) => {
            console.error(err);
        });


    // let doughnutChart = new Chart(CHART, {
    //     type: 'doughnut',
    //     data: {
    //         labels: ['HTML', 'CSS', 'Design', 'JavaScript', 'Development Tools'],
    //         datasets: [
    //             {
    //                 label: 'Points scored by Vikings',
    //                 backgroundColor: ['#2E112D', '#540032', '#820333', '#C9283E', '#F0433A'],
    //                 data: [data.points.HTML, data.points.CSS, data.points.Design, data.points.JavaScript, data.points['Development Tools']]
    //             }
    //         ]
    //     },  
    //     options: {
    //         cutoutPercentage: 70,
    //         legend: {
    //             display: false,
    //         },
    //         title: {
    //             display: true,
    //             text: `${data.name}'s Treehouse Points`
    //         }
    //     }
    // });



// Need to break this down into functions and use promises