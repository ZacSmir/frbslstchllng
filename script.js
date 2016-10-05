var input = $("#inputthingy")
console.log("dogs")
input.keydown(function(e) {	
  console.log("cats")
  if (e.keyCode == "13") {
    console.log("input")
    var valueToSave = input.val();
    addListItem(valueToSave);
  }
})

onNewListItem("zachlist", function(value) {
  $("#list-display").append("<div>" + value + "</div>")
}) 