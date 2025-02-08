import p5 from "p5";

class Walker {
    private x: number;
    private y: number;

    constructor(private p: p5) {
        this.x = this.p.width / 2;
        this.y = this.p.height / 2;
        this.reset();
    }

    reset() {
        this.x = this.p.width / 2;
        this.y = this.p.height / 2;
    }
    show() {
        this.p.stroke(0);
        this.p.point(this.x, this.y);
    }

    step() {
        let xstep = this.p.floor(this.p.random(3)) - 1;
        let ystep = this.p.floor(this.p.random(3)) - 1;

        this.x += xstep;
        this.y += ystep;
    }
}

function sketch1(p: p5) {
    let walker: Walker;

    p.setup = () => {
        p.createCanvas(500, 500);
        walker = new Walker(p);
        p.background(255);
    };

    p.windowResized = () => {
        p.resizeCanvas(500, 500);
        walker.reset();
    };

    p.draw = () => {
        walker.step();
        walker.show();
    };
}

function sketch2(p: p5) {
    let walker: Walker;

    p.setup = () => {
        p.createCanvas(500, 500);
        walker = new Walker(p);
        p.background(255);
    };

    p.windowResized = () => {
        p.resizeCanvas(500, 500);
        walker.reset();
    };

    p.draw = () => {
        walker.step();
        walker.show();
    };
}

const firstSketch = document.getElementById("sketch1");
const secondSketch = document.getElementById("sketch2");

if (firstSketch && secondSketch) {
    new p5(sketch1, firstSketch);
    new p5(sketch2, secondSketch);
}
