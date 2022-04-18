// import animalesArray from './animales.js';
import { selectAnimal } from './imagenes.js'
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

//Creación de instancias 
let animales = [];

document.getElementById("btnRegistrar").addEventListener(`click`, () => {
    //event.preventDefault() 
    let animal = document.getElementById("animal");
    let años = document.getElementById("edad");
    let comentario = document.getElementById("comentarios");
    let previewElement = document.getElementById("preview");

    let animalSelected;

    switch (animal.value) {
        case "Leon":
            animalSelected = new Leon(animal.value, años.value, 'Leon.png', comentario.value, 'sonido')
            break;
        case "Lobo":
            animalSelected = new Lobo(animal.value, años.value, 'Lobo.png', comentario.value, 'sonido')
            break;
        case "Oso":
            animalSelected = new Oso(animal.value, años.value, 'Oso.png', comentario.value, 'sonido')
            break;
        case "Serpiente":
            animalSelected = new Serpiente(animal.value, años.value, 'Serpiente.png', comentario.value, 'sonido')
            break;
        case "Aguila":
            animalSelected = new Aguila(animal.value, años.value, 'Aguila.png', comentario.value, 'sonido')
            break;
        default:
            break;
    }

    // if (animal.value == "Leon") {
    //     // animalSelected = new Leon(animal.value, años.value, comentario.value, previewElement.value)
    // }
    // else if (animal.value == "Lobo") {
    //     animalSelected = new Lobo(animal.value, años.value, comentario.value, previewElement.value)
    // }

    // animalSelected = new Oso(animal.value, años.value, comentario.value, previewElement.value)
    // animalSelected = new Serpiente(animal.value, años.value, comentario.value, previewElement.value)
    // animalSelected = new Aguila(animal.value, años.value, comentario.value, previewElement.value)

    animales.push(animalSelected);
    console.log(animales)
    console.log('animalSleected', animalSelected)


    // document.querySelector(".comentario").innerHTML 
    // document.getElementById("Animales").appendChild("<img width="200" src="/assets/imgs/Leon.png " />")
    const img = document.createElement("img");
    img.src = `/assets/imgs/${animalSelected.getImg()}`;
    img.width = "100";
    img.style = "padding: 5px;"

    document.getElementById("Animales").appendChild(img);
});