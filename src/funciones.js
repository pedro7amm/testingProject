module.exports ={
   numeroAleatorio : function(min, max) {
        var numerogenerado = Math.round(Math.random() * (max - min) + min);
        return numerogenerado;
   },
   entradaalbar : function (edad) {
        if (edad >= 18){
            const validacion="Puede entrar al bar, su edad es "+edad;
            return validacion;
        }
        else{
            const negativo= "No puede entrar al bar, su edad es "+edad;
            return negativo;
        }
    },
    verpelicula : function (edad) {
        if (edad >= 15){
            const validacion="Puede ver la película, su edad es "+edad;
            return validacion;
        }
        else{
            const negativo= "No puede ver la película, su edad es "+edad;
            return negativo;
        }
    },
    obtenerlicencia : function (edad) {
        if (edad >= 18){
            const validacion="Puede tener licencia para conducir, su edad es "+edad;
            return validacion;
        }
        else{
            const negativo= "No puede tener licencia para conducir, su edad es "+edad;
            return negativo;
        }
    },




    
}