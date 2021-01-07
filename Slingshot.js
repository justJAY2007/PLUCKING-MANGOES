class Slingshot{
    constructer(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length:10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }
    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodya){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeght(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}