class Mango{
    constructer(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Plucking mangoes/mango.png");
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        World.add(world, this.body);
    }
    display(){
        var mangoes = this.body.position;
        push()
        translate(mangopos.x, mangopos.y);
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER)
        this.image(this.image, 0,0,this.r, this.r)
    }
}