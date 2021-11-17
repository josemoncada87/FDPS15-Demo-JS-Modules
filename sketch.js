import {Element} from "/modules/Element.js";

let app = function(p) {
  let x = 100;
  let y = 100;
  let obj = new Element();

  p.setup = function() {
    p.createCanvas(700, 410);
    console.log(obj);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
    obj.draw(p);
  };
};

let myp5 = new p5(app);



