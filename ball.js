class Ball{
  constructor(x, y) {
    var options = {
      isStatic:false,
      restitution : 1, 
      frictionAir:0,
      density:0.8 
    }
    this.body = Bodies.circle(x, y,75, options)

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    fill("black");
    stroke("white")
        
    ellipse(pos.x,pos.y,150);
  }
}