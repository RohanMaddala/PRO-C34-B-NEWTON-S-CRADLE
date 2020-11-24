/*class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB : {x:this.offsetX,y:this.offsetY}
        }
        
        //this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            push();
            
            strokeWeight(4)
            stroke("black");

            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}*/

class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
        }
        
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            strokeWeight(4)
            stroke("white");

            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}