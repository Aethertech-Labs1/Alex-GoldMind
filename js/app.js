document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").innerText =
    "Solicitud registrada correctamente. Gracias por su interés.";
});
