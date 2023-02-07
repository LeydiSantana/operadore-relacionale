let diaHoy = 17;
let diaAyer = 16;
let mesHoy = 10;
let mesAyer = 10;
let mesTexto = "10";
let comparacion;

comparacion = (diaHoy > diaAyer) ? "diaHoy es mayor que diaAyer" : "diaHoy es menor o igual a diaAyer";
console.log(comparacion);

comparacion = (diaHoy < diaAyer) ? "diaHoy es menor que diaAyer" : "diaHoy es mayor o igual a diaAyer";
console.log(comparacion);

comparacion = (diaHoy >= diaAyer) ? "diaHoy es mayor o igual que diaAyer" : "diaHoy es menor que diaAyer";
console.log(comparacion);

comparacion = (diaHoy <= diaAyer) ? "diaHoy es menor o igual que diaAyer" : "diaHoy es mayor que diaAyer";
console.log(comparacion);

comparacion = (mesTexto === mesAyer) ? "mesTexto es igual a mesAyer" : "mesTexto es diferente a mesAyer";
console.log(comparacion);

comparacion = (mesHoy === mesAyer) ? "mesHoy es igual a mesAyer" : "mesHoy es diferente a mesAyer";
console.log(comparacion);

comparacion = (mesHoy === mesTexto) ? "mesHoy es idéntico a mesTexto" : "mesHoy es diferente a mesTexto";
console.log(comparacion);
