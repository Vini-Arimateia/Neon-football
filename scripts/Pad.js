class Pad{
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.largura=65;
        this.altura=100;
        this.x= 5;
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=8;

        this.padImagem = new Image ();
        this.padImagem.width = 90;
        this.padImagem.height = 115;
        this.padImagem.src = "assets/pad.png";
        this.padImagem.addEventListener('load', () => {
            this.draw()
        })

    }
    management(){
        
        if (this.keyboard.cima)
            if (this.y > 0 && this.y -5)
                this.y-=this.vel;
        
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura - 5) 
                this.y+=this.vel;
    
    }

    draw(){
        this.management();
        this.c.fillStyle = "black"
        this.c.drawImage(this.padImagem, this.x, this.y, this.padImagem.width, this.padImagem.height);    }
       // this.c.fillRect(this.x, this.y, this.largura, this.altura);
    }
