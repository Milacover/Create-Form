function p(y) {
    return document.getElementById(y);
}

function agregar(){
    var nombre = p("inputNombre").value;
    var apellidos = p("inputApellidos").value;
    var clase = p("inputClase").value;
    var tutor = p("inputTutor").value;

    if (nombre==""){
		p("inputNombre").focus();
        alert('No puede dejar el campo del Nombre en blanco');
		return; 

	} 
    if (apellidos==""){
		p("inputApellidos").focus();
        alert('No puede dejar el campo Apellidos en blanco');
		return; 
	}
    if (clase==""){
		p("inputClase").focus();
        alert('No puede dejar el campo Clase en blanco');
		return; 
	} 
    if (tutor==""){
		p("inputTutor").focus();
        alert('No puede dejar el campo Tutor en blanco');
		return; 
	}

    //document.getElementById("result").innerText+="Hola, soy "+nombre+" "+apellidos+". Mi clase es "+clase+" y mi tutor es "+tutor+". ";

    //creamos un objeto tr que anexaremos a nuestra tabla llamada tableProductos
    let fila=document.createElement("tr");
 
    //creamos 4 elementos td en donde iran los tres valores y el botón para eliminar
    let celda1=document.createElement("td");
    let celda2=document.createElement("td");
    let celda3=document.createElement("td");
    let celda4= document.createElement("td");
    let celda5= document.createElement("td");

    //asignamos los valores a nuestros td por medio del atributo innerHTML
    celda1.innerHTML=nombre;
    celda2.innerHTML=apellidos;
    celda3.innerHTML=clase;
    celda4.innerHTML=tutor;
    celda5.innerHTML="<input type='button' id='eliminar' value='Eliminar' onclick='eliminar(this)'>"

    //Ahora añadimos los hijos TD al Padre TR
    //Esta es otra manera de crear elementos HTML: usando el método appendChild
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);

    //Por último asignamos nuestro TR a la tabla con id tablaProductos
    p("tablaDatos").appendChild(fila)
 // hasta aquí la parte de añadir
    //limpiamos nuestros inputs para agregar mas datos, y ponemos el foco nuevamente en el input de codigo
    p("inputNombre").value=""
    p("inputApellidos").value="";
    p("inputEquipo").value="";
    p("inputColor").value="";
    p("inputNombre").focus();

}

function eliminar(nodoBoton){
 
    /*recibimos el botón como parámetro, obtendremos el tr que lo contiene de la siguiente manera:
    Como nuestro botón es hijo de un td y este td de el tr debemos invocar dos veces parentNode
    para llegar a tener el TR y eliminar la línea completa*/
    let filaABorrar= nodoBoton.parentNode.parentNode;
 
    //ahora que ya tenemos el padre TR, podemos eliminarlo de la siguiente manera junto a todos sus hijos
 
    p("tablaDatos").removeChild(filaABorrar);
	p("inputNombre").focus();
}