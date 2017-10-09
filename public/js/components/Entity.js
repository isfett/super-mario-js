import Vector2 from './Vector2.js';

class Entity {
    constructor(sprite) {
        this.pos = new Vector2(0, 0);
        this.vel = new Vector2(0, 0);
        this.sprite = sprite;

        this.traits = [];
    }

    update(deltaTime) {
        this.traits.forEach(trait => {
            trait.update(this, deltaTime);
        });
    }

    addTrait(trait) {
        this.traits.push(trait);
        this[trait.NAME] = trait;
    }

    draw(context) {
        this.sprite.draw('idle', context, this.pos.x, this.pos.y);
    }
}

export {Entity as Entity};
export default Entity;