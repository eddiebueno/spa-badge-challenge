// This is pushed on the premise that we understand the topics
//  we started late on this project and ended up using jquery.
// We will look back on this later because we need to study for the assessment tomorrow


$(document).ready(function(){
  teacherListener();
})

var teacherListener = function(){
  $("a").on("click",function(e){
    e.preventDefault;
    var link = $(this).attr("href")
    var request = $.ajax({
      url: link,
      type: "get",

    })

    request.done(function(response){
      debugger;
      $("#teachers").hide();
      $(".container").append(response);
    })
  })
}
