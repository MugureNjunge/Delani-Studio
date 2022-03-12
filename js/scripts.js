function userData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;


  if (name.length === 0 || email.length === 0 || message.length === 0){
    alert("All fields must be filled");
    return false;
  }
  else {
    alert("Hi " + name + ", we have received your message.Thank you for contacting us!");
  }
  
}  

