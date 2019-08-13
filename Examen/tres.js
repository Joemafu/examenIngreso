function mostrar() {
	var localidad;
	var localidadMinima;
	var temperatura;
	var localidadesCalurosas = 0;
	var temperaturaMin = 51;
	var temperaturasPares = 0;
	var habitantes;
	var menosHabitantes;
	var habMin = 41;
	var promedioHabitantes = 0;
	var seguir;
	var i = 0;
	var acumuladorHabitantes = 0;

	do {
		localidad = prompt("Ingrese localidad.");

		habitantes = parseInt(prompt("Ingrese cantidad de habitantes en millones."));
		while (isNaN(habitantes) || habitantes < 1 || habitantes > 40) {
			habitantes = parseInt(prompt("Reingrese habitantes entre 1 y 40."));
		}

		temperatura = parseInt(prompt("Ingrese temperatura mínima registrada."));
		while (isNaN(temperatura) || temperatura < -50 || temperatura > 50) {
			temperatura = parseInt(prompt("Ingrese una temperatura entre -50 y 50."));
		}

		if (temperatura % 2 == 0) {
			temperaturasPares++;
		}

		if (habitantes < habMin) {
			habMin = habitantes;
			menosHabitantes = localidad;
		}

		if (temperatura > 40) {
			localidadesCalurosas++;
		}

		if (temperatura < temperaturaMin) {
			temperaturaMin = temperatura;
			localidadMinima = localidad;
		}

		acumuladorHabitantes = acumuladorHabitantes + habitantes;
		
		i++;

		seguir = prompt("Presione enter para continuar, cualquier otro valor para terminar.");

	}while (seguir == "")

	promedioHabitantes = acumuladorHabitantes / i;

	document.write("Las cantidad de temperaturas pares son " + temperaturasPares + ".<br>");
	document.write("El nombre de la localidad con menos habitantes " + menosHabitantes + ".<br>");
	document.write("La cantidad localidades que superan los 40 grados de temperatura " + localidadesCalurosas + ".<br>");
	document.write("El promedio de habitantes entre las localidades ingresadas " + promedioHabitantes + ".<br>");
	document.write("La temperatura mínima ingresada es " + temperaturaMin + "<br>" + " en la localidad de " + localidadMinima+".");
}
