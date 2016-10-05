var input = $("#new-item-input")

input.keydown(function(e) {	
  console.log(""
  if (e.keyCode == "13") {
    console.log("input")
    var valueToSave = input.val();
    addListItem(valueToSave);
  }
})

onNewListItem("zachlist", function(value) {
  $("#list-display").append("<div>" + value + "</div>")
}) 