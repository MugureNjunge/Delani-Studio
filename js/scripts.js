function userData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;


  if (name.length === 0 || email.length === 0 || message.length === 0) {
    alert("All fields must be filled");
    return false;
  }
  else {
    alert("Hi " + name + ", we have received your message.Thank you for contacting us!");
  }

}

$(document).ready(function () {

  $("#image1").hover(function () {
    $("#image1").css("filter","brightness(60%)");
  });

  $("#image5").hover(function () {
    $("#image5").css("filter","brightness(60%)");
    $("#div5").toggle();
  });


  $("#design").click(function () {
    $("#design").toggle();
    $("#para1").toggle();
  });

  $("#para1").click(function () {
    $("#para1").toggle();
    $("#design").toggle();
  });

  $("#development").click(function () {
    $("#development").toggle();
    $("#para2").toggle();
  });

  $("#para2").click(function () {
    $("#para2").toggle();
    $("#development").toggle();
  });

  $("#product").click(function () {
    $("#product").toggle();
    $("#para3").toggle();
  });

  $("#para3").click(function () {
    $("#para3").toggle();
    $("#product").toggle();
  });



});