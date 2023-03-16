//1
$(document).ready(function () {
  console.log("Let's get ready to party with jQuery!");
});

//2
$("article").find("img").addClass("image-center");

//3
$("p").last().remove();

//4
let randomFont = Math.floor(Math.random() * 100 + 1);

$("h1").css("font-size", randomFont);

//5
$("ol").append("<li>This is the end of the list</li>");

//6
$("ol").replaceWith("<p>Sorry for the list!</p>");

//7
$(".form-control").on("keyup change", function () {
  let rgb1 = $(".form-control").eq(0).val();
  let rgb2 = $(".form-control").eq(1).val();
  let rgb3 = $(".form-control").eq(2).val();
  $("body").css(
    "background-color",
    "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")"
  );
});

//8
$("img").on("click", function () {
  $(this).remove();
});
