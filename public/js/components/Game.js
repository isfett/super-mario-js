import Entity from './Entity.js';
import Velocity from './../traits/Velocity.js';
import Sprite from './Sprite.js';
import Jump from "../traits/Jump.js";
class Game {
    constructor() {
        this.sprites = new Sprite();
    }
    setContext(context) {
        this.context = context;
    }
    setGravity(gravity) {
        this.gravity = gravity;
    }
    setDeltaTime(deltaTime) {
        this.deltaTime = deltaTime;
    }
    setCompositor (compositor){
        this.compositor = compositor;
    }
    createMario() {
        return this.sprites.loadMarioSprite()
        .then(sprites => {
            this.mario = new Entity(sprites);
            this.mario.addTrait(new Velocity());
            this.mario.addTrait(new Jump());
            return this.mario;
        });
    }
}

export {Game as Game};
export default Game;