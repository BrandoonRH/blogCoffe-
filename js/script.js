//queryhSelecter
const heading = document.querySelector('.header__texto h2'); //Retorna 0 o 1 elemento
heading.textContent = 'Brandoon RH'


//queryhSelecterAll
const enlace = document.querySelectorAll('.navegacion a');//Retorna de 0 a todos los selectores que consuerden con el, 
//Si retorna más de un elemento retorna un array con todos los elementos que concordaron
console.log(enlace);
//enlace[0].textContent = 'Nuevo Texto para Enlace'
//enlace[0].classList.add('class__new');
//enlace[0].classList.remove('class__new');

//getElementByID
const headingDos = document.getElementById('heading'); 

//Generar enlace 
 const nuevoEnlace = document.createElement('A');
//Agregar el href
 nuevoEnlace.href= 'nuevo-enlace.html'; 
//Agregar Terxto
 nuevoEnlace.textContent = 'Tienda Virtual'; 
//Agrega clase  
nuevoEnlace.classList.add('navegacion__enlace'); 

//Agregar al documento 

const navegacion = document.querySelector('.navegacion'); 
navegacion.appendChild(nuevoEnlace);    

//EVENTOS 

console.log(1);

window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del html estén listos 
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){//Solo espera que se desacargue el html 
    console.log(4); 
}); 

console.log(5);

/*window.onscroll = function (){
console.log('secroling....');
}*/


//Selccionar elemntos y asociarles eventos 
 
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
  console.log(evento); 
  evento.preventDefault(); 
  console.log('Enviuadno Formulario'); 
})

//Enventos de los inputs  y text area 
const datos = {
    nombre: '', 
    email: '', 
    mensaje: ''
};

const nombre = document.querySelector('#nombre'); 
const email = document.querySelector('#email'); 
const nombre = document.querySelector('#mensaje'); 
const formulario = document.querySelector('.formulario'); 

nombre.addEventListener('input', leerText); 
email.addEventListener('input', leerText); 
mensaje.addEventListener('input', leerText); 

formulario.addEventListener('submit', function(evento){
 evento.preventDefault(); 
 //Validar Formulario 
 const {nombre, email, mensaje} = datos; 

 if(nombre === '' || email === '' || mensaje === ''){
  mostrarError('Todos los Campos Son Obligatorios'); 
  return; 
 }
 //Enviar Formulario 
 console.log('Enviando Formulario'); 
});

function leerText(e){
    datos[e.target.id] = e.target.value;
    //console.log(datos); 
}

function mostrarError(mensaje){
 const error = document.createElement('P'); 
 error.textContent = mensaje;
 error.classList.add('error'); 
 formulario.appendChild(error); 

 //Desaparecer despues de 5 segundos 

 setTimeout(() => {
     error.remove(); 
 }, 5000);
}
