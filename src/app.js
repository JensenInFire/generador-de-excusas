/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = Generador();
  });
};

let Generador = () => {
  let sujeto = [
    "Amber Heard ",
    "Mi perro ",
    "Un extramista ",
    "Mi hermana ",
    "Mi loro "
  ];
  let accion = [
    "se comió mi ",
    "me robó mi ",
    "huyó con mi ",
    "tomó prestada mi ",
    "se enamoró de mi "
  ];
  let cosa = [
    "tarea ",
    "computadora ",
    "cuenta de albion ",
    "codigo de VS ",
    "billetera "
  ];
  let cuando = [
    "esta mañana",
    "en la noche",
    "en mi habitación",
    "en mi casa",
    "en la calle"
  ];

  let sujetoIdx = Math.floor(Math.random() * sujeto.length);
  let accionIdx = Math.floor(Math.random() * accion.length);
  let cosaIdx = Math.floor(Math.random() * cosa.length);
  let cuandoIdx = Math.floor(Math.random() * cuando.length);

  return (
    sujeto[sujetoIdx] +
    "" +
    accion[accionIdx] +
    "" +
    cosa[cosaIdx] +
    "" +
    cuando[cuandoIdx]
  );
};
