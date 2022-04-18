
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

export const selectAnimal = document.getElementById("animal").addEventListener("change", async () => {
    // const { animales } = await Animales.getData
    const animalSelected = document.getElementById("animal").value;
    console.log(animalSelected)

    //buscará dentro del arreglo animales, al animal seleccionado y su imagen
    // const imgAnimales = animalesArray.find(animal => animal.name == animalSelected);

    // console.log(leon);
    // imagen((i) => `<img src="/assets/imgs/${animalSelected}/${i} " />`).join("")

    console.log(document.getElementById('preview'))
    document.getElementById('preview').innerHTML = `<img width="200" src="/assets/imgs/${animalSelected}.png " />`
})