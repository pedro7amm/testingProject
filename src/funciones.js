module.exports ={
   numeroAleatorio : function(min, max) {
        var numerogenerado = Math.round(Math.random() * (max - min) + min);
        return numerogenerado;
   },
   entradaalbar : function (edad) {
        if (edad >= 18){
            const validacion=true;
            return validacion;
        }
        else{
            const negativo=false;
            return negativo;
        }
    },
    verpelicula : function (edad) {
        if (edad >= 15){
            const validacion=true;
            return validacion;
        }
        else{
            const negativo= false;
            return negativo;
        }
    },
    obtenerlicencia : function (edad) {
        if (edad >= 18){
            const validacion=true;
            return validacion;
        }
        else{
            const negativo= false;
            return negativo;
        }
    },
    votar : function (edad) {
        if (edad >= 18){
            const validacion=true;
            return validacion;
        }
        else{
            const negativo= false;
            return negativo;
        }
    },




    
}