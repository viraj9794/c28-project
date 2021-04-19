class Slingshot{
    constructor(bodyA, pinB){
        var options = {
            bodyA: bodyA,
            pointB: pinB,
            stiffness: 0.01,
            length: 40
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB=pinB;
    }
    display(){
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
    }
    fly(){
    this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body;
    }
}