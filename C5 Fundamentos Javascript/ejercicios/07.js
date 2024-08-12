function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor;
}

console.log(esTipoDato("hello"));
console.log(esTipoDato(42));
console.log(esTipoDato(true));
console.log(esTipoDato({}));
console.log(esTipoDato([]));
console.log(esTipoDato(null));
console.log(esTipoDato(function () {}));

module.exports = esTipoDato;
