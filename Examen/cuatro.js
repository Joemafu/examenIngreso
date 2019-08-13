function mostrar() {
	var letra;
	var numero;
	var continuar;
	var iPar = 0;
	var iImpar = 0;
	var iCeros = 0;
	var iPos = 0;
	var acPos = 0;
	var acNeg = 0;
	var promedioPositivo;
	var flag = 0;
	var numMax;
	var numMin;
	var letMax;
	var letMin;

	do {
		letra = prompt("Ingrese una letra:");
		numero = parseInt(prompt("Ingrese un número:"));
		while (isNaN(numero) || numero > 100 || numero < -100) {
			numero = parseInt(prompt("Ingrese un número válido entre -100 y 100."));
		}

		if (numero % 2 == 0) {
			iPar++;
		} else {
			iImpar++;
		}

		if (numero == 0) {
			iCeros++;
		} else if (numero > 0) {
			iPos++;
			acPos = acPos + numero;
			promedioPositivo = acPos / iPos;
		} else {
			acNeg = acNeg + numero;
		}

		if (flag == 0) {
			numMax = numero;
			numMin = numero;
			letMax = letra;
			letMin = letra;
			flag = 1;
		} else if (numero > numMax) {
			numMax = numero;
			letMax = letra;
		} else if (numero < numMin) {
			numMin = numero;
			letMin = letra;
		}
		
		continuar = prompt("Para continuar pulse enter, para terminar ingrese cualquier otro valor.");
	} while (continuar == "")

	document.write("La cantidad de números pares es de " + iPar + ".<br>");
	document.write("La cantidad de números impares es de " + iImpar + ".<br>");
	document.write("La cantidad de números 0 es de " + iCeros + ".<br>");
	document.write("El promedio de todos los números positivos ingresados es de " + promedioPositivo + ".<br>");
	document.write("La suma de todos los números negativos es de " + acNeg + ".<br>");
	document.write("El número y la letra del máximo y el mínimo son "+numMax+letMax+" y "+numMin+letMin+".");
}
