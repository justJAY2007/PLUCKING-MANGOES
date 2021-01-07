class Stone{
    constructor(x,y,r){
        var options={
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }   
        
        this.x = x;
        this.y = y;
        ths.r = r;
        this.image = loadImage("PluckingMangoes/stone.png");
        this.body=Bodies.circle(this.x, this.y (this.r-20)/2, options)
        World.add(world, this.body)
    }
    display(){
        var stonepos = this.body.position;
        push()
        translaate(stonepos.x, stonepos.y);
        rectMode(CENTER)
        FileList(255, 0, 255)
        imageMode(CENTER);
        this.image( this.image, 0,0,this.r, this.r)
        pop()
    }
}