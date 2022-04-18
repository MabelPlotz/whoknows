
import Animales from "./animales.js";

var boton = document.getElementById("botton").addEventListener("click", async() => {
    const {animales} = await Animales.getData
    const animalSelected = document.getElementById("animal").value;

    //buscará dentro del arreglo animales, al animal seleccionado y su imagen
    const imgAnimales = animales.find((p) => p.name == animalSelected).imagen;
    imagen((i)=> `<img src="/assets/imgs/${animalSelected}/${i} " />`).join("")

    document.getElementById('preview')[0].innerHTML = imgAnimales
})
export default boton()