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
        this.y = this.p.height / 2;
    }

    show() {
        this.p.stroke(0);
        this.p.point(this.x, this.y);
    }

    step() {
        // set probability
        const probability = 0.5;

        // 9 different positions available - one in each direction or staying in place
        let xStep = this.p.floor(this.p.random(3)) - 1;
        let yStep = this.p.floor(this.p.random(3)) - 1;

        if (this.p.random(1) < probability) {
            // look where the walker is, and turn it towards the mouse

            // in the x direction
            if (this.x < this.p.mouseX) {
                this.x++;
            } else if (this.x > this.p.mouseX) {
                this.x--;
            }

            // in the y direction
            if (this.y < this.p.mouseY) {
                this.y++;
            } else if (this.x > this.p.mouseY) {
                this.y--;
            }
        } else {
            // move randomly otherwise
            this.x += xStep;
            this.y += yStep;
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

const sketch3div = document.getElementById("sketch3div");

if (sketch3div) {
    new p5(sketch, sketch3div);
}
