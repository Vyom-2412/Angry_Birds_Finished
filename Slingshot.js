class Slingshot
{
   constructor(bodyA,pointB)
   {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.03,
          length:10
      }
      this.slingshot = Constraint.create(options);
      this.pointB = pointB;
      World.add(world,this.slingshot);
   }
   fly()
   {
      this.slingshot.bodyA = null;
   }
   display()
   {
      if(this.slingshot.bodyA)
      {
      var PointA = this.slingshot.bodyA.position;
      var PointB = this.pointB;
      push()
      strokeWeight(5);
      line(PointA.x,PointA.y,PointB.x,PointB.y);
      pop()
      }
   }
}