export class Element{

    constructor(){
        this.value = 0;
    }

    draw(p){
        p.fill(255,0,0);
        p.rect(10,10,10,10);
    }

}