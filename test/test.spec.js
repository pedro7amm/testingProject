const assert = require('assert');
const funciones = require('../src/funciones'); //usar {} y dentro el nombre de la función para llamarla directamente

describe('Suite de validaciones de edad', () =>{
    var edad= funciones.numeroAleatorio(0,40);
    var respuestaDelBar = funciones.entradaalbar(edad);
    var respuestaDeLaPelicla=funciones.verpelicula(edad);
    var respuestaDeLaLicencia= funciones.obtenerlicencia(edad);
    var respuestaParaVotar= funciones.votar(edad);
    
    it('Validación para entrar a un bar', () =>{
        if (edad >= 18){
            assert.equal(respuestaDelBar,true);
            console.log("Puede entrar al bar, su edad es "+edad);//arrange act assert 
        }
        else {
            assert.equal(respuestaDelBar,false);
            console.log("No puede entrar al bar, su edad es "+edad);//usar chai
        }
    })
    it('Validación para ver películas para mayores de 15', () =>{
        if (edad >= 15){
            assert.equal(respuestaDeLaPelicla,true);
            console.log("Puede ver la película, su edad es "+edad);
        }
        else {
            assert.equal(respuestaDeLaPelicla,false);
            console.log("No puede ver la película, su edad es "+edad);
        }
    })
    it('Validación para tener licencia de conducir', () =>{
        if (edad >= 18){
            assert.equal(respuestaDeLaLicencia,true);
            console.log("Puede tener licencia para conducir, su edad es "+edad);
        }
        else {
            assert.equal(respuestaDeLaLicencia,false);
            console.log("No puede tener licencia para conducir, su edad es "+edad);
        }
    })
    it('Validación para poder votar', () =>{
        if (edad >= 18){
            assert.equal(respuestaParaVotar,true);
            console.log("Puede votar en las elecciones presidenciales, su eda es "+edad);
        }
        else {
            assert.equal(respuestaParaVotar,false);
            console.log("No puede votar en las elecciones presidenciales, su edad es "+edad);
        }
    })
   

})