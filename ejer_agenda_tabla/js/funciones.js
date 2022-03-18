function crearTablaAmigos(){
	//creamos la tabla
	let tabla=document.createElement("table");
	tabla.className="tabla";
	document.getElementById("contenedor_amigos").appendChild(tabla);
	//hacemos un bucle para crear filas y columnas dentro de la tabla e incluimos el texto en cada celda
	for(i=0;i<amigos.length;i++){
		let fila=document.createElement("tr");
		document.getElementsByTagName("table")[0].appendChild(fila);
		let nombre=document.createElement("td");
		nombre.innerHTML=amigos[i].nombre;
		document.getElementsByTagName("tr")[i].appendChild(nombre);
		let apellido=document.createElement("td");
		apellido.innerHTML=amigos[i].apellido;
		document.getElementsByTagName("tr")[i].appendChild(apellido);
	}
}