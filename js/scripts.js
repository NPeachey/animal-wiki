$(document).ready(function(){
  $("form#submission").submit(function(event) {
    event.preventDefault();

      var animal = $("#animalInput").val();
      if (animal === "turtle"){
      $("#turtle").show();
    } else if (animal === "hedgehog"){
      $("#hedgehog").show();
    } else if (animal === "sloth"){
      $("#sloth").show();
    } else {
      $("#noanimal").show();
    }
  });
  $("#turtleButton").click(function() {
    $("div#turtle2").show();
      });
  $("#hedgehogButton").click(function() {
    $("div#hedgehog2").show();
    });
  $("#slothButton").click(function() {
    $("div#sloth2").show();
    });
});
