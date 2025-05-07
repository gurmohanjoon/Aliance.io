document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  formData.append("type", "contact");

  fetch("https://script.google.com/macros/s/AKfycbyNoPYPijpn8D341lveKf4saTtz-m-neHBiUJduNvI2pOMZXhdIIi-leARwcIzx-tjG/exec", {
    method: "POST",
    body: formData
  })
    .then(() => {
      alert("Your message has been sent!");
      e.target.reset();
    })
    .catch(() => {
      alert("Your message has been sent!");
      e.target.reset();
    });
});