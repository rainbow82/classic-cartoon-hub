//hididng the #fact on load
// when mouse down, hide #pic
// diplay #fact
// when mouseup, hide #fact
// display #pic

 //hide fact
$(document).ready(function(){
    $("#fact, #fact span").hide();
});

// hide #pic on mousedown
$("#pic").click(function(){
   $(this).hide().$("#fact, #fact span").show();
});

