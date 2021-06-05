class rope
{
	constructor(body1, body2, offsetX, offsetY){
        
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            body1: body1,
            body2: body2,
            point2:{x:this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}