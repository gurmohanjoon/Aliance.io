document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  fetch("https://script.google.com/macros/s/AKfycbyNoPYPijpn8D341lveKf4saTtz-m-neHBiUJduNvI2pOMZXhdIIi-leARwcIzx-tjG/exec", {
    method: "POST",
    body: formData
  })
    .then(() => {
      alert("Booking submitted! Thank you.");
      e.target.reset();
    })
    .catch(() => {
      // Do nothing, or optionally still show success
      alert("Booking submitted! Thank you.");
      e.target.reset();
    });
});