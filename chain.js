class chain 

{

    constructor(bodyA,bodyB)
    
    {
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        Stiffness:0.04,
        length:10


    }
    this.Chain=Constraint.create(options);
    World.add(world,this.Chain);





    }

 display() {
  var pointA=this.Chain.bodyA.position;
  var pointB=this.Chain.bodyB.position;
  strokeWeight(3);
  line(pointA.X,pointA.Y,pointB.Y,pointB.Y)
  }




}