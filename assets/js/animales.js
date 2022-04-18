import Animal from "./animal.js"

// subclases
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    //metodo
    rugir() {
        //let sonido = this.getSonido()
        console.log(this.getSonido())
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar() {
    }

}
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    gruñir() {
        console.log(this.getSonido())
    }
}
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear() {
        console.log(this.getSonido())
    }
}
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar() {
        console.log(this.getSonido())
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
//console.log(new Oso('Neko','1/5','foto','hermoso','miau'))