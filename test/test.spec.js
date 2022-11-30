const assert = require('assert');
const funciones = require('../src/funciones');

describe('Suite de validaciones de edad', () =>{
    var edad= funciones.numeroAleatorio(0,40);
    var respuestaDelBar = funciones.entradaalbar(edad);
    var respuestaDeLaPelicla=funciones.verpelicula(edad);
    var respuestaDeLaLicencia= funciones.obtenerlicencia(edad);
    
    it('Validación para entrar a un bar', () =>{
        if (edad >= 18){
            assert.equal(respuestaDelBar,"Puede entrar al bar, su edad es "+edad);
            console.log(respuestaDelBar);
        }
        else {
            assert.equal(respuestaDelBar,"No puede entrar al bar, su edad es "+edad);
            console.log(respuestaDelBar);
        }
    })
    it('Validación para ver películas para mayores de 15', () =>{
        if (edad >= 15){
            assert.equal(respuestaDeLaPelicla,"Puede ver la película, su edad es "+edad);
            console.log(respuestaDeLaPelicla);
        }
        else {
            assert.equal(respuestaDeLaPelicla,"No puede ver la película, su edad es "+edad);
            console.log(respuestaDeLaPelicla);
        }
    })
    it('Validación para tener licencia de conducir', () =>{
        if (edad >= 18){
            assert.equal(respuestaDeLaLicencia,"Puede tener licencia para conducir, su edad es "+edad);
            console.log(respuestaDeLaLicencia);
        }
        else {
            assert.equal(respuestaDeLaLicencia,"No puede tener licencia para conducir, su edad es "+edad);
            console.log(respuestaDeLaLicencia);
        }
    })
   

})