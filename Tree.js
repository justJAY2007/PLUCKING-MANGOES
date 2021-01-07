class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.image=loadImage("Plucking mangoes/tree.png")
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
    display(){
        var os = tgis.body.position;
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER);
        this.image(this.image, 1050,300,400,700)
    }
}