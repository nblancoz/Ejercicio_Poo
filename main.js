const ejer1 = document.getElementById("ejer1")
const ejer2 = document.getElementById("ejer2")
const ejer3 = document.getElementById("ejer3")

// Ejercicio 1
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    } 
    obtDetalles() {
        ejer1.innerHTML = `Su nombre es ${this.nombre}, tiene ${this.edad} años y es ${this.genero}.`
    }
}
const nicolas = new Persona("Nicolás", 18, "Masculino")
nicolas.obtDetalles()

// Ejercicio 2
class Estudiante extends Persona {
    constructor (nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso
        this.grupo = grupo
    }
    registrar() {
        ejer2.innerHTML = `Su nombre es ${this.nombre}, tiene ${this.edad} años y es ${this.genero}, aparte de esto esta en ${this.curso} y su grupo es: ${this.grupo}.`
    }
}
const nicolas2 = new Estudiante("Nicolás", 18, "Masculino", "FullStack", "Sept 2023")
nicolas2.registrar()

// Ejercicio 3
class Profesor extends Persona {
    constructor (nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero)
        this.asignatura = asignatura
        this.nivel = nivel
    }
    asignar() {
        ejer3.innerHTML += `Su nombre es ${this.nombre}, tiene ${this.edad} años y es ${this.genero}, su asignatura es: ${this.asignatura} y su nivel es: ${this.nivel}. <br> <br>`
    }
}
const sofia = new Profesor("Sofía", 24, "Femenino", "FullStack", "Lead Instructor")
const miki = new Profesor("Miki", 33, "Masculino", "FullStack", "Teacher Assistant")
sofia.asignar()
miki.asignar()