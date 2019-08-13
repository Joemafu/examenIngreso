
function mostrar() {
	var lado1;
	var lado2;
	var lado3;
	var resultado;

	lado1 = prompt("Ingrese un lado: ");
	lado2 = prompt("Ingrese un lado: ");
	lado3 = prompt("Ingrese un lado: ");

	if (lado1 != lado2 || lado2 != lado3) {
		alert(lado1 + lado2 + lado3);
	}
	if (lado1 == lado2 && lado2 == lado3) {
		lado1 = parseInt(lado1);
		lado2 = parseInt(lado2);
		lado3 = parseInt(lado3);

		resultado = lado1 + lado2 + lado3;
		alert(resultado);
	}
	alert("uno");
}
