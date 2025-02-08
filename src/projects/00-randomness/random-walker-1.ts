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

function sketch(p: p5) {
    let walker: Walker;

    p.setup = () => {
        p.createCanvas(500, 500);
        walker = new Walker(p);
        p.background(255);
    };

    const clearCanvas = () => {
        p.background(255);
        walker.reset();
    };

    // clear button
    const clearBtn = document.getElementsByClassName("clearBtn");
    for (const btn of clearBtn) {
        btn.addEventListener("click", clearCanvas);
    }

    p.windowResized = () => {
        p.resizeCanvas(500, 500);
        walker.reset();
    };

    p.draw = () => {
        walker.step();
        walker.show();
    };
}

const sketch1div = document.getElementById("sketch1div");

if (sketch1div) {
    new p5(sketch, sketch1div);
}
