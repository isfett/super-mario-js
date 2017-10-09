class Timer{
    constructor(game) {
        this.game = game;
        this.accumulatedTime = 0;
        this.lastTime = 0;
    }

    enqueue() {
        requestAnimationFrame(this.updateProxy.bind(this));
    }

    start() {
        this.enqueue();
    }

    updateProxy(time) {
        this.accumulatedTime += (time - this.lastTime) / 1000;

        while (this.accumulatedTime > this.game.deltaTime) {
            this.update(this.game.deltaTime);
            this.accumulatedTime -= this.game.deltaTime;
        }

        this.lastTime = time;

        this.enqueue();
    }

    update() {
        this.game.mario.update(this.game.deltaTime);
        this.game.compositor.draw(this.game.context);
        this.game.mario.vel.y += this.game.gravity * this.game.deltaTime;
    }
}

export {Timer as Timer};
export default Timer;