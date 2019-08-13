function mostrar() {

  var mascota;
  var peso;
  var edad;
  var edadMax = 0;
  var nombre;
  var nombreMax;
  var perrosFlacos = 0;
  var acumuladorPeso = 0;
  var promedioPeso;

  for (i = 0; i < 4; i++) {
    mascota = prompt("Ingrese la Especie de la mascota:");
    while (mascota != "perro" && mascota != "gato") {
      mascota = prompt("Ingrese una mascota válida:");
    }

    edad = parseInt(prompt("Ingrese la edad de la mascota:"));
    while (edad < 1 || edad > 25) {
      edad = parseInt(prompt("Ingrese una edad entre 1 y 25 años:"));
    }

    peso = parseInt(prompt("Ingrese peso de la mascota: "));
    while (peso < 1 || peso > 100) {
      peso = parseInt(prompt("Ingrese el peso de la mascota entre 1 y 100: "));
    }

    nombre = prompt("Ingrese el Nombre de su mascota: ");

    acumuladorPeso = acumuladorPeso + peso;

    if (edad > edadMax && mascota == "perro") {
      edadMax = edad;
      nombreMax = nombre;
    }

    if (peso < 10 && edad > 10) {
      perrosFlacos++;
    }
  }

  promedioPeso = acumuladorPeso / i;

  alert("El promedio de los pesos totales " + promedioPeso);
  alert("El nombre del perro mas viejo es " + nombreMax + " con " + edadMax + " años.");
  alert("La cantidad animales con menos de 10 kilos y mas de 10 años son " + perrosFlacos);
}
