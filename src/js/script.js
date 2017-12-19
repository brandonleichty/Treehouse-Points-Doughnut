'use strict';

const treehouseURL = 'https://teamtreehouse.com/brandonleichty.json';

$.getJSON(treehouseURL, (data) => {
    console.log(data.name);
    console.log(data.points.HTML);


    const CHART = document.getElementById("doughnutChart");

    Chart.defaults.scale.ticks.beginAtZero = true;

    let doughnutChart = new Chart(CHART, {
        type: 'doughnut',
        data: {
            labels: ['HTML', 'CSS', 'Design', 'JavaScript', 'Development Tools'],
            datasets: [
                {
                    label: 'Points scored by Vikings',
                    backgroundColor: ['#2E112D', '#540032', '#820333', '#C9283E', '#F0433A'],
                    data: [data.points.HTML, data.points.CSS, data.points.Design, data.points.JavaScript, data.points['Development Tools']]
                }
            ]
        },  
        options: {
            cutoutPercentage: 80,
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: `${data.name}'s Treehouse Points`
            }
        }
    });

});