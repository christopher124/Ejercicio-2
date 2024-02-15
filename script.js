/**
 * Calcula el número de monedas necesarias para cubrir el área de una cuadra
 * con monedas de 5 pesos y un diámetro dado.
 */
function calcularMonedas() {
  const diametroCuadra = parseFloat(document.getElementById("diametro").value);
  if (isNaN(diametroCuadra) || diametroCuadra <= 0) {
    document.getElementById("resultado").innerText =
      "Por favor ingresa un diámetro válido.";
    return;
  }

  const radioCuadra = diametroCuadra / 2;
  const areaCuadra = Math.PI * Math.pow(radioCuadra, 2);

  const diametroMoneda = 0.0255;
  const radioMoneda = diametroMoneda / 2;
  const areaMoneda = Math.PI * Math.pow(radioMoneda, 2);

  const numMonedas = Math.round(areaCuadra / areaMoneda);

  document.getElementById(
    "resultado"
  ).innerText = `Número de monedas necesarias: ${numMonedas.toLocaleString()}`;
}

/**
 * Calcula el número de latas de Coca-Cola necesarias para llenar un cuarto
 * con dimensiones dadas en metros.
 */
function calcularCantidadCocaCola() {
  const largoCuarto = parseFloat(document.getElementById("largo").value);
  const anchoCuarto = parseFloat(document.getElementById("ancho").value);
  const alturaCuarto = parseFloat(document.getElementById("altura").value);

  if (
    isNaN(largoCuarto) ||
    isNaN(anchoCuarto) ||
    isNaN(alturaCuarto) ||
    largoCuarto <= 0 ||
    anchoCuarto <= 0 ||
    alturaCuarto <= 0
  ) {
    document.getElementById("resultadoCocaCola").innerText =
      "Por favor ingresa dimensiones válidas.";
    return;
  }

  const volumenCuarto =
    largoCuarto * 100 * anchoCuarto * 100 * alturaCuarto * 100;
  const volumenLata = 33;
  const numLatas = Math.ceil(volumenCuarto / volumenLata);

  document.getElementById(
    "resultadoCocaCola"
  ).innerText = `Número de latas necesarias: ${numLatas.toLocaleString()}`;
}
