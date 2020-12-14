class Dustbin {
    constructor(x,y,width,height){
        
        var options ={
            isStatic :true
        }
        this.body =Bodies.rectangle(x,y,width,height,options);
        this.width =width;
        this.height =height;
        this.image =loadImage("dustbingreen.png");
        this.image.scale =20;
        World.add(world,this.body);

    }
    display(){
        var posi =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(posi.x,posi.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,1295,520,200,200);
    }
}
