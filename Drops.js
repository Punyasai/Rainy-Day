class createDrop{
    constructor(x,y){
        var options={
            fricition:0.1,
            restitutin:0.1

        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    updateY(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(windowWidth), y:random(windowHeight)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }

}