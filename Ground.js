class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
      this.w = 480;
      this.h = 10;
      this.x = this.w/2;
      this.y = 800-5;

      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("white");
      rect(this.x, this.y, this.w, this.h);
    }
  };
