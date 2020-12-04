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
      this.sling1 = loadImage("sprites/sling1.png");
      this.sling2 = loadImage("sprites/sling2.png");
      this.sling3 = loadImage("sprites/sling3.png");

      World.add(world,this.slingshot);
   }
   fly()
   {
      this.slingshot.bodyA = null;
   }
   attach(body)
   {
      this.slingshot.bodyA = body;
   }
   display()
   {
      image(this.sling1,200,5);
      image(this.sling2,170,5);
      if(this.slingshot.bodyA)
      {
      var PointA = this.slingshot.bodyA.position;
      var PointB = this.pointB;
      push()
      stroke(48,22,8);
      if(PointA.x<200)
      {
      strokeWeight(5);
      line(PointA.x -25,PointA.y,PointB.x - 10,PointB.y);
      line(PointA.x -25,PointA.y,PointB.x + 30,PointB.y - 5);
      image(this.sling3,PointA.x-30,PointA.y-10,15,30);
      }
      else
      {
      strokeWeight(3);
      line(PointA.x +25,PointA.y,PointB.x - 10,PointB.y);
      line(PointA.x +25,PointA.y,PointB.x + 30,PointB.y - 5);
      image(this.sling3,PointA.x+25,PointA.y-10,15,30);
      }
      pop()
      }
   }
}