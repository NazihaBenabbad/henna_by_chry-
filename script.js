function selectStyle(styleName) {
  document.getElementById("style").value = styleName;
  window.scrollTo(0, document.body.scrollHeight);
}

document.getElementById("bookingform").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("confirmMessage").innerText =
    "✅ Your appointment is booked! We will contact you soon.";
});
