function PxlArt () {
    var pxl    = this;
    pxl.width  = 15;
    pxl.height = 15;
    pxl.col;
    pxl.box;

    // MÉTODO PARA CREAR EL TABLERO
    pxl.crteCanv = function (w, h, name) {
        this.w    = w;
        this.h    = h;
        this.name = name;

        // Crea y da estilos al div contenedor.
        this.tbl = document.createElement('div');
        this.tbl.classList.add(this.name);
        this.tbl.style.width   = (this.w * pxl.width) + 'px';
        this.tbl.style.height  = (this.h * pxl.height) + 'px';
        this.tbl.style.border  = '10px solid #eee';
        console.log(this.w);
        console.log(pxl.width);


        // Estilos de los box.
        this.sty = document.createElement('style');
        if (this.sty.styleSheet) {
            this.sty.styleSheet.cssText = '.box:hover{background: #0f9; cursor: pointer;}'+
                                          '.box{cursor: pointer;}';
        } else {
            this.sty.appendChild(document.createTextNode('.box:hover{background: #0f9; cursor: pointer;}'+
                                                         '.box{cursor: pointer}'));
        }
        document.head.appendChild(this.sty);


        // Crea los cuadros "pixeles" .
        for (var i = 0; i < this.w; i++) {
            pxl.col = document.createElement('div');
            pxl.col.classList.add('col');

            pxl.col.style.width = pxl.width+'px';
            pxl.col.style.float = 'left';

            for (var z = 0; z < this.h; z++) {
                pxl.box = document.createElement('div');
                pxl.box.classList.add('box');

                pxl.box.style.width  = pxl.width+'px';
                pxl.box.style.height = pxl.height+'px';
                pxl.box.style.float  = 'left';

                pxl.col.appendChild(pxl.box);
            }
            this.tbl.appendChild(pxl.col);
        }
        document.body.appendChild(this.tbl);
    };

    // PONE UN IPUT TIPO COLOR PARA ELEGIR
    pxl.selColor = function () {
        this.color     = document.createElement('form');
        this.inp       = document.createElement("INPUT");
        this.inp.setAttribute('type', 'color');
        // this.inp.setAttribute('value', '#ffffff');
        this.inp.value = '#ff0000';
        this.inp.id    = 'color';

        this.color.appendChild(this.inp);
        document.body.appendChild(this.color);
    };

    // MÉTODO PARA PINTAR HACIENDO CLICK
    pxl.paintBox = function () {
        var paint = this;

        // Seteo el color.
        pxl.selColor();
        paint.boxes = document.getElementsByClassName('box');
        paint.color = document.getElementById('color').value;

        for (var i = 0; i < paint.boxes.length; i++) {
            paint.boxes[i].addEventListener('click', function () {
                // Saco el el color.
                paint.color = document.getElementById('color').value;
                // Pongo el color al hacer click.
                this.style.background = paint.color;
            });
        }
    };
}

// Me gusta mucho el Pixel Art, así que hice un objeto para hacer Pixel Art. Pruebenlo en un navegador.


var pixelArt = new PxlArt();
pixelArt.crteCanv(20, 20, 'lienzo');
pixelArt.paintBox();