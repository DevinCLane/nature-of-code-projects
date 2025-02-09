import p5 from "p5";

class Paint {
    private x: number;
    private y: number;

    constructor(private p: p5) {
        this.x = this.p.width / 2;
        this.y = this.p.width / 2;
        this.p.colorMode("hsb");
        this.reset();
    }

    reset() {
        this.x = this.p.width / 2;
        this.y = this.p.height / 2;
    }

    drawPoint() {
        this.p.stroke(0);
        const color = this.p.randomGaussian(180, 30);
        this.p.fill(color, 100, 100);
        this.p.circle(this.x, this.y, 20);
    }

    updatePosition() {
        this.x = this.p.randomGaussian(this.p.width / 2, 60);
        this.y = this.p.randomGaussian(this.p.height / 2, 60);
    }
}

function sketch(p: p5) {
    let paint: Paint;

    p.setup = () => {
        p.createCanvas(500, 500);
        paint = new Paint(p);
        p.background(255);
    };

    p.windowResized = () => {
        p.resizeCanvas(500, 500);
        paint.reset();
    };

    const clearCanvas = () => {
        p.background(255);
        paint.reset();
    };

    // clear button
    const clearBtn = document.getElementsByClassName("clearBtn");
    for (const btn of clearBtn) {
        btn.addEventListener("click", clearCanvas);
    }

    p.draw = () => {
        paint.updatePosition();
        paint.drawPoint();
    };
}

const sketch4div = document.getElementById("sketch4div");

if (sketch4div) {
    new p5(sketch, sketch4div);
}
