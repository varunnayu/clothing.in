// in this demo, it is triggered by a click event
// you may use any trigger in your apps
$("#show").click(function() {
    if ($("#progress").length === 0) {
      // inject the bar..
      $("body").append($("<div><b></b><i></i></div>").attr("id", "progress"));
      
      // animate the progress..
      $("#progress").width("101%").delay(800).fadeOut(1000, function() {
        // ..then remove it.
        $(this).remove();
      });  
    }
  });