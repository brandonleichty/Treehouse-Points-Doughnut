'use strict';

//chart options
const CHART = document.getElementById("doughnutChart");

Chart.defaults.scale.ticks.beginAtZero = true;

//----------------


const treehouseURL = 'https://teamtreehouse.com/chalkers.json';

const pointsPromise = fetch(treehouseURL);

pointsPromise
        .then(data => data.json()) //convert data to JSON
        .then(data => { 
            const pointsArray = [];
            const skillsArray = [];
            for (const [key, value] of Object.entries(data.points)) {
                if(value > 0 && key != 'total') {
                    pointsArray.push(value); //push skills that have more than 0 points into 'pointsArray'
                    skillsArray.push(key) 
                }
              }
              console.log(skillsArray);
              console.log(pointsArray);
              renderDoughnut(skillsArray, pointsArray, data.name);
            })
        .catch((err) => {
            console.error(err);
        });



    function renderDoughnut(skillLabels, pointsData, userName) {
    let doughnutChart = new Chart(CHART, {
        type: 'doughnut',
        data: {
            labels: skillLabels,
            datasets: [
                {
                    backgroundColor: ['#2E112D', '#540032', '#820333', '#C9283E', '#F0433A', '#02547D', '#0284A8', '#02BEC4', '#A9E8DC', '#E1F7E7', '#734E67', '#5A3651', '#59584D', '#F1DEBC', '#D9CDBC'],
                    data: pointsData
                }
            ]
        },  
        options: {
            cutoutPercentage: 70,
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: `${userName}'s Treehouse Points`
            }
        }
    });
}



// Need to break this down into functions and use promises