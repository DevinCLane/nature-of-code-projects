import p5 from "p5";

class Walker {
    private x: number;
    private y: number;

    constructor(private p: p5) {
        this.x = this.p.width / 2;
        this.y = this.p.width / 2;
        this.reset();
    }

    reset() {
        this.x = this.p.width / 2;
        this.y = this.p.width / 2;
    }

    show() {
        this.p.stroke(0);
        this.p.point(this.x, this.y);
    }

    step() {
        // set the probabilities
        const rightBias = 0.7;
        const downBias = 0.7;

        // x movement
        if (this.p.random(1) < rightBias) {
            // move right
            this.x += 1;
        } else {
            // move left
            this.x -= 1;
        }

        if (this.p.random(1) < downBias) {
            // move down
            this.y += 1;
        } else {
            // move up
            this.y -= 1;
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

    const clearCanvas = () => {
        p.background(255);
        walker.reset();
    };

    // clear button
    const clearBtn = document.getElementsByClassName("clearBtn");
    for (const btn of clearBtn) {
        btn.addEventListener("click", clearCanvas);
    }

    p.draw = () => {
        walker.step();
        walker.show();
    };
}

const sketch2div = document.getElementById("sketch2div");

if (sketch2div) {
    new p5(sketch, sketch2div);
}
