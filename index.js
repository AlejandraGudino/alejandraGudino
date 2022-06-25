let  listaDelibros = []
let listaMascotas = []

function agregarLibros(nombre,autor) {
    let Libro = {
        nombre : nombre,
        autor : autor
    }
    return Libro

}
function agregarMascota(mascota){
    return listaMascotas.push(mascota)
}

function mostrarLibros(listaDelibros){
    for(let i=0; i< listaDelibros.length; i++){
        let listaDelibro = listaDelibros[i];
        console.log(perro[listaDelibro]);
      }
   }
class usuario {
    constructor(nombre, apellido, libro, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = libro;
        this.mascotas = mascotas;
    }

}

// Agregar mascotas
agregarMascota("perro")
agregarMascota("gato")
// agregar Libros
listaDelibros.push(agregarLibros("Orgullo y Prejucio","Jane Austin"))
listaDelibros.push(agregarLibros("sherlock holmes","Arthur Conan Doyle"))

const newUsuario = new usuario("ale","gu",listaDelibros,listaMascotas)
console.log(newUsuario.nombre + " " + newUsuario.apellido)
let totalMascota = listaMascotas.length
console.log(totalMascota)
console.log(mostrarLibros(listaDelibros))
