import Trait from "./../components/Trait.js";

class Velocity extends Trait {
    constructor() {
        super('velocity');
    }

    update(entity, deltaTime) {
        entity.pos.x += entity.vel.x * deltaTime;
        entity.pos.y += entity.vel.y * deltaTime;
    }
}

export {Velocity as Velocity};
export default Velocity;