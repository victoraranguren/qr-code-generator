const contenedorQR = document.querySelector("#contenedorQR");
const formulario = document.querySelector("#formulario");

const QR = new QRCode(contenedorQR);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //const input = document.querySelector("#link").value;

  QR.makeCode(formulario.link.value);
});

//"https://victoraranguren.github.io"
