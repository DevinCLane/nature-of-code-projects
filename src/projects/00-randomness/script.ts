import p5 from "p5";

function randomWalk(p: p5) {
    let walker: Walker;

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        walker = new Walker();
    };

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        walker = new Walker();
        p.background(255);
    };

    p.draw = () => {
        walker.step();
        walker.show();
    };

    class Walker {
        x: number;
        y: number;

        constructor() {
            this.x = p.width / 2;
            this.y = p.height / 2;
        }

        show() {
            p.stroke(0);
            p.point(this.x, this.y);
        }

        step() {
            const choice = p.floor(p.random(4));
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
}
new p5(randomWalk);
