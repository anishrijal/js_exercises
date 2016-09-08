function buildTable(){
  var table = document.createElement("table");
  var thead= document.createElement("thead");
  var tbody= document.createElement("tbody");
  var trow = document.createElement("tr");
  var tdata;

  document.body.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(trow);
  //loop for header
  for(var key in MOUNTAINS[3]){
    tdata = document.createElement("th");
    tdata.textContent=key;
    trow.appendChild(tdata);
  }

  for(var i=0; i<MOUNTAINS.length; i++){
    trow= document.createElement("tr");
    for( var key in MOUNTAINS[i]){
      tdata = document.createElement("td");
      tdata.textContent = MOUNTAINS[i][key];
      trow.appendChild(tdata);
    }
    tbody.appendChild(trow);
  }
  table.appendChild(tbody);
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
buildTable();
// function alignNumbersRight() {
//   var alignNumbers = document.getElementsByClassName("numbers");
//   for (i = 0; i < alignNumbers.length; i++) {
//     alignNumbers[i].style.textAlign = "right";
//   }
// }
//
