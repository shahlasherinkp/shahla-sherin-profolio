function sendMail(params) {
  let msg = {
    from_name: document.getElementById("name").value,
    from_mail: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_23gw828", "template_swj6ldn", msg);
  alert("Your message has been sent. Thank you!");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}
