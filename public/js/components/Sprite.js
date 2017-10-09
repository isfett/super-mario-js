import Loader from './Loader.js';
import SpriteSheet from './SpriteSheet.js';

class Sprite {
    constructor() {
        this.loader = new Loader();
    }
    loadMarioSprite() {
        return this.loader.loadImage('/img/characters.gif')
            .then(image => {
                let sprites = new SpriteSheet(image, 16, 16);
                sprites.define('idle', 276, 44, 16, 16);
                return sprites;
            });
    }

    loadBackgroundSprites() {
        return this.loader.loadImage('/img/tiles.png')
            .then(image => {
                let sprites = new SpriteSheet(image, 16, 16);
                sprites.defineTile('ground', 0, 0);
                sprites.defineTile('sky', 3, 23);
                return sprites;
            });
    }
}

export {Sprite as Sprite};
export default Sprite;