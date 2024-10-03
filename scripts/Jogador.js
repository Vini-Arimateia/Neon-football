class Jogador{
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=0;
        this.y=0;
        this.vel=5;
        this.gravity = 5;
        this.fly = 20;
        this.girl = new Image ();
        this.girl.src = "assets/girl.png";
        this.girl.width=100;
        this.girl.height=170;
        this.girl.addEventListener('load',()=>{
           this.draw()
        })
        
    }
    management(){
        if (this.keyboard.esquerda) {
            if (this.x > 0)
                this.x-=this.fly;
            }
        if (this.keyboard.direita) {
            if (this.x < this.c.canvas.width-this.girl.width)
                this.x+=this.fly;
            }
        if (this.keyboard.cima){ 
            if (this.y > 0)
                this.y-=this.fly;
        }
        if (this.keyboard.baixo){
            if (this.y < this.c.canvas.height-this.girl.height) 
                this.y+=this.fly;
        }

        if (this.keyboard.jump)
        if (this.y > 0)
            this.y-=this.jump;

       if (this.keyboard.jump == false)
            if(this.y < this.c.canvas.height-this.girl.height){
            this.y+= this.gravity;
        }
    }

    draw(){
        this.management();
        this.c.drawImage(this.girl, this.x, this.y, this.girl.width, this.girl.height);
    }
}