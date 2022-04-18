import {Leon, Lobo, Oso, Serpiente, Aguila} from './animales.js';

//Creación de instancias 
let animales = [];

document.getElementById("btnRegistrar").addEventListener(`click`,() => {
    //event.preventDefault() 
    let animal = document.getElementById("animal");
    let años = document.getElementById("edad");
    let comentario =  document.getElementById("comentarios");
    let previewElement = document.getElementById("preview");

    let animalSelected;
    
    if (animal.value == "Leon"){
        animalSelected = new Leon(animal.value, años.value, comentario.value, previewElement.value)
    } else(animal.value == "Lobo"){
        animalSelected = new Lobo(animal.value, años.value, comentario.value, previewElement.value)
    }
    animalSelected = new Oso(animal.value, años.value, comentario.value, previewElement.value)
    animalSelected = new Serpiente(animal.value, años.value, comentario.value, previewElement.value)
    animalSelected = new Aguila(animal.value, años.value, comentario.value, previewElement.value)
    
  animales.push(animalSelected);
  console.log(animales)

   // document.querySelector(".comentario").innerHTML 
});