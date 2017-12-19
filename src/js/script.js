'use strict';

const treehouseURL = 'https://teamtreehouse.com/brandonleichty.json';

$.getJSON(treehouseURL, (data) => {
    console.log(data.name);
    console.log(data.points.HTML);
});