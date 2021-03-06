function validarRut (nRut) {
    this.nMulti = [2,3,4,5,6,7];    // Números para multiplicar.
    this.nRut   = nRut.split('');   // Números del rut en un array.
    this.contM  = 0;
    this.total  = 0;
    this.cont;
    this.digito;

    console.time();
    // Recorro de derecha a izquierda el rut.
    for(this.cont = this.nRut.length -1 ; this.cont>=0 ; this.cont--){

        // reseteo el contador del array de los números para multiplicar.
        if(this.contM > 5){
            this.contM = 0;
        }
        // Multiplico los números del rut por los del array nMulti y voy sumanso los resultados.
        this.total = this.total + (parseInt(this.nRut[this.cont]) * this.nMulti[this.contM]);

        this.contM++; // le sumo 1 al contador.
    }

    // Saco el módulo de la suma total y se lo resto a "11".
    this.digito = 11 - (this.total % 11);

    if(this.digito < 10){
        return this.digito.toString();     // lo devuelvo.

    }else if(this.digito === 11){          
        return '0';                        // lo devuelvo.

    }else if(this.digito === 10){
        return 'k';                        // lo devuelvo.

    }
    
}

// No sabía lo del módulo 11 así que investigué un poco.
// http://www.biobiochile.cl/noticias/2016/03/07/para-que-sirve-y-como-se-calcula-el-digito-verificador-de-nuestro-rut.shtml
