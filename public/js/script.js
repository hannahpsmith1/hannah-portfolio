

// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").load("partial.html");
//     });
//   });

//   $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").load("partial.html");
//     });
//   });



// {/* <a id="projectsli">projects</a>  */}
// $("#projectsli").click(function() { 
//   $("#projects").load("projects.html"); 
// });

$(document).ready(function () {
  $("home").click(function () {
    console.log ("clicked");
    $("#body").load("header.html");
  });
});


$(document).ready(function () {
  $("button").click(function () {
    console.log ("clicked");
    $("#textDiv").load("header.html");
  });
});


$(document).ready(function () {
  $("#myAnc2").click(function () {
    $("#textTitle").load("partialproj.html");
  });
});

$(document).ready(function () {
  $("#myAnc").click(function () {
    $("#div1").load("bulma.html");
  });
});

$(document).ready(function () {
  $("#myAnc2").click(function () {
    $("#textDiv").load("partialproj.html");
  });
});

$(document).ready(function () {
  $("#myAnc3").click(function () {
    $("#div1").load("footer.html");
  });
});

// How to load projects portion on body.html
$(document).ready(function () {
  $("#myAnc4").click(function () {
    $("#title").load("partialproj.html");
  });
});

$(document).ready(function () {
  $("#myAnc5").click(function () {
    $("#title").load("partialproj.html");
  });
});

$(document).ready(function () {
  $("#myAnc4").click(function () {
    $("#subtitle").load("header.html");
  });
});

$(document).ready(function () {
  $("#aboutme").click(function () {
    $("#textArea").load("index.html");
  });
});

$(document).ready(function () {
  $("#projects").click(function () {
    $("#textArea").load("partialproj.html");
  });
});

$(document).ready(function () {
  $("#contact").click(function () {
    $("#textArea").load("contact.html");
  });
});

// $(document).ready(function(){
//   $("#myAnc2").click(function() { 
//     $("#heloo").load("partial.html");
//   }); 
//   }); 


