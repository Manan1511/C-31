class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.traj = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>220&&gameState==="RUNNING"&&this.body.speed>10){
      var pos = [this.body.position.x,this.body.position.y]
     this.traj.push(pos);
    }
    for(var i =0;i<this.traj.length;i++){
      image(this.image2,this.traj[i][0],this.traj[i][1])
    }
  }
}
