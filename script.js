var listvalue = "bobslist"
var input = $("#inputthingy")
var zachlist
console.log("dogs")
input.keydown(function(e) {	
  console.log("cats")
  if (e.keyCode == "13") {
    console.log("input")
    var valueToSave = input.val();
    addListItem(listvalue, valueToSave);
  }
})

onNewListItem(listvalue, function(value) {
  console.log("WHY")
  $("#list-display").append("<div>" + value + "</div>")
}) 