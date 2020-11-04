// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

const puedeVerPelicula = (edad, tieneAutorizacion) => (edad >= 15) || tieneAutorizacion;

console.log(puedeVerPelicula(12, false)); 
console.log(puedeVerPelicula(12, true)); 
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true)); 

// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

const estaEnRango = (valor, minimo, maximo) => (valor >= minimo) && (valor <= maximo);

console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));  // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10));  // false

// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

const puedeAvanzar = (colorSemaforo) => {

  switch(colorSemaforo) {
      case 'verde' : return true;
      case 'rojo' : return false;
      case 'amarillo' : return false;
      default : return 'Error: color de semáfono invalido';
  }

}

console.log(puedeAvanzar('verde'));     // true
console.log(puedeAvanzar('amarillo'));  // false
console.log(puedeAvanzar('rojo'));      // false
console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'

// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

const esVocal = (letra) => /[aeiou]/g.test(letra);


console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true

/* Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true */

/* Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos,
 y devuelva true si una persona está habilitada para renovar su carnet 
de conducir o false si no. 
Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos*/

const puedeRenovarCarnet = (pasoTests,tieneMultasImpagas,pagoImpuestos) => {
 return pasoTests && pagoImpuestos && !tieneMultasImpagas
  
}

  puedeRenovarCarnet(true, true, true)    // false
  puedeRenovarCarnet(true, true, false)   // false
  puedeRenovarCarnet(true, false, true)   // true
  puedeRenovarCarnet(true, false, false)  // false
  puedeRenovarCarnet(false, true, true)   // false
  puedeRenovarCarnet(false, true, false)  // false
  puedeRenovarCarnet(false, false, true)  // false
  puedeRenovarCarnet(false, false, false) // false