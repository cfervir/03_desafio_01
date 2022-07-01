function getResult() {

  // Muestro tabla con resultados
  document.querySelector('.section').style.visibility = 'visible';

  // Defino valores
  let valorInical = document.getElementById('value').innerHTML;
  let multiplicador = document.getElementById('amount').value;

  valorInical = parseInt(valorInical.replace(/\./g,''));

  let valorFinal = (valorInical * multiplicador).toLocaleString('es');

  document.getElementById("resultTotal").innerHTML = `$${valorFinal}`;
  document.getElementById("resultAmount").innerHTML = multiplicador;

  // Defino color según escrito en el HTML
  let colorNuevo = document.getElementById('color').value;
  resultColor.style.backgroundColor = colorNuevo;

  console.log(valorInical);
  console.log(multiplicador);
  console.log(valorFinal);
  console.log(colorNuevo);
}