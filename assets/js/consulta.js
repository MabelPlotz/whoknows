import Animal from "./imagenes.js" 

let animales = (() =>{
    const url = "http://localhost:5500/animales.json"
    const getData = async ()=> {
        const rest = await fetch(url)
        const data = await rest.json()
        return data
    }
    return {getData};
})()
export default animales;
/*
var boton = document.getElementById("botton")
boton.addEventListener(`click`, function () {
    event.preventDefault() 
    if { 

    }
    else {

    }

    document.querySelector(".comentario").innerHTML 
}
*/



// subclases
class Leon extends Animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre,edad, img, comentarios, sonido)
    }
    //metodo
    rugir(){
        console.log(this.getSonido())
    }
}

class Lobo extends Animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre,edad, img, comentarios, sonido)
    }
    aullar(){
    }

}
class Oso extends Animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre,edad, img, comentarios, sonido)
    }
    gruñir(){
        console.log(this.getSonido())
    }
}
class Serpiente extends Animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre,edad, img, comentarios, sonido)
    }
    sisear(){
        console.log(this.getSonido())
    }
}
class Aguila extends Animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre,edad, img, comentarios, sonido)
    }
    chillar(){
        console.log(this.getSonido())
    }
}
