document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  formData.append("type", "contact");

  fetch("https://script.google.com/macros/s/AKfycbyNoPYPijpn8D341lveKf4saTtz-m-neHBiUJduNvI2pOMZXhdIIi-leARwcIzx-tjG/exec", {
    method: "POST",
    body: formData
    // Do NOT set Content-Type header
  })
    .then(res => res.json())
    .then(res => alert("Your message has been sent!"))
    .catch(err => alert("Failed to send message."));
});