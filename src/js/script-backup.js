'use strict';

const treehouseURL = 'https://teamtreehouse.com/brandonleichty.json';

$.getJSON(treehouseURL, (data) => {
    console.log(data.name);
    console.log(data.points.HTML);

    //filter skills that have more than zero points
    // const skills = data.points.filter(skill => skill > 0);
   
    //  const skills = data.filter(function(skill) {
    //   if(skill.points > 0) {
    //     return true; //keep it!
    //   }
    // });

    // consle.table(skills);
    

    //target canvas using doughnutChart ID
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
            cutoutPercentage: 70,
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


// Need to break this down into functions and use promises