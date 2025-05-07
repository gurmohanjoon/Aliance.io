document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  fetch("https://script.google.com/macros/s/AKfycbyNoPYPijpn8D341lveKf4saTtz-m-neHBiUJduNvI2pOMZXhdIIi-leARwcIzx-tjG/exec", {
    method: "POST",
    body: formData
    // Do NOT set Content-Type header; browser will set it automatically
  })
    .then(res => res.json())
    .then(res => alert("Booking submitted successfully!"))
    .catch(err => alert("Error submitting booking."));
});