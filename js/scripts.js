function userData() {
  let name = document.getElementById(name).value;
  let email = document.getElementById(email).value;
  let message = document.getElementById(message).value;


  if (name.length === 0){
    alert("Hi" + name +  "we have received your message.Thank you for contacting us!")
  } else {
    alert("All fields must be filled")
  }

}  

