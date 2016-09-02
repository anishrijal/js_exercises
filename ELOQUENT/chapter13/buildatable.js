function buildTable(data){
  var table = document.createElement("table");
  table.style.width = '100%';
  table.setAttribute('border','1');
  for(var i=0; i<MOUNTAINS.length; i++){
    var row = table.insertRow(i);
    var header= document.createElement("header");
    header.innerHTML= MOUNTAINS[i].name;
    row.appendChild(header);
    var columnone = row.insertCell(0);
    var columntwo = row.insertCell(1);
    columnone.innerHTML = MOUNTAINS[i].height;

    columntwo.innerHTML = MOUNTAINS[i].country;

  }
  return table;
}
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

// function buildTable(data) {
//   // Your code here.
//   var i;
//   var tableElement = document.createElement("table");
//
//   for (i = 0; i < MOUNTAINS.length; i++) {
//     var row = tableElement.insertRow(i);
//     var thRow = document.createElement("th");
//     thRow.innerHTML = MOUNTAINS[i].name;
//     row.appendChild(thRow);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = MOUNTAINS[i].height;
//     cell1.className = "numbers";
//     cell2.innerHTML = MOUNTAINS[i].country;
//   }
//   return tableElement;
// }
//
// function alignNumbersRight() {
//   var alignNumbers = document.getElementsByClassName("numbers");
//   for (i = 0; i < alignNumbers.length; i++) {
//     alignNumbers[i].style.textAlign = "right";
//   }
// }
//
