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
        const choice = this.p.floor(this.p.random(4));
        if (choice === 0) {
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
    }
}

function sketch(p: p5) {
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

new p5(sketch);
