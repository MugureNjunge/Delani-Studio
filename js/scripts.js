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

  // add the hover effect to portfolio

  $("#image1").hover(function () {
    $("#image1").css("filter","brightness(60%)");
    $("#div1").toggle();
  });

  $("#image2").hover(function () {
    $("#image2").css("filter","brightness(60%)");
    $("#div2").toggle();
  });

  $("#image3").hover(function () {
    $("#image3").css("filter","brightness(60%)");
    $("#div3").toggle();
  });

  $("#image4").hover(function () {
    $("#image4").css("filter","brightness(60%)");
    $("#div4").toggle();
  });

  $("#image5").hover(function () {
    $("#image5").css("filter","brightness(60%)");
    $("#div5").toggle();
  });

  $("#image6").hover(function () {
    $("#image6").css("filter","brightness(60%)");
    $("#div6").toggle();
  });

  $("#image7").hover(function () {
    $("#image7").css("filter","brightness(60%)");
    $("#div7").toggle();
  });

  $("#image8").hover(function () {
    $("#image8").css("filter","brightness(60%)");
    $("#div8").toggle();
  });

  // add the toggle on click effect to the 'what we do section'

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