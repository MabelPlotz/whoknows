

// Clase principal
 class Animal { 
    constructor (nombre,edad, img, comentarios, sonido){
        this._nombre = nombre
        this.getNombre =() => this._nombre 

        this._edad = edad
        this.getEdad =()=> this._edad

        this._img = img
        this.getImg =()=> this._img

        this._comentarios = comentarios 
        this.getComentario =()=> Comentarios;
        this.setComentarios =()=> this._comentarios
        

        this._sonido = sonido 
        this.getSonido =()=> this._sonido
    }
    //get
    get Nombre(){
        return this.getNombre()
    }
    get Edad(){
        return this.getEdad()
    }
    get Img(){
        return this.getImg()
    }
    get Comentarios(){
        return this.getComentarios()
    }
    // no estoy segura si esto es así
    set Comentarios(nuevo_comentario){
        return this.getComentarios(nuevo_comentario);
    }
    
   // this.setComentario = (comentario) => Comentario = comentario) ;
    // set Comentarios(nuevo_comentario){
    //    this._comentarios = nuevo_comentario
   // } 

    get Sonido(){
        return this.getSonido()
    }
}
export default Animal
//console.log(new Animal("Mabel","30","foto","sd","dfew"))