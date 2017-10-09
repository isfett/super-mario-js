import Loader from './components/Loader.js';
import Sprite from './components/Sprite.js';
import Layer from './components/Layer.js';
import Compositor from './components/Compositor.js';
import Game from './components/Game.js';
import Timer from './components/Timer.js';
import KeyboardState from './components/KeyboardState.js';

let loader = new Loader();
let sprites = new Sprite();
let layers = new Layer();
let game = new Game();
let canvas = document.getElementById('screen');
let context = canvas.getContext('2d');

game.setContext(context);
game.setGravity(2000);
game.setDeltaTime(1/60);

const input = new KeyboardState();
input.listenTo(window);

Promise.all([
    game.createMario(),
    sprites.loadBackgroundSprites(),
    loader.loadLevel('1-1'),
])
.then(([mario, backgroundSprites, level]) => {
    mario.pos.set(64, 180);

    const SPACE = 32;
    input.addMapping(SPACE, keyState => {
        if (keyState) {
            mario.jump.start();
        } else {
            mario.jump.cancel();
        }
    });

    let compositor = new Compositor();
    let backgroundLayer = layers.createBackgroundLayer(level.backgrounds, backgroundSprites);
    compositor.addLayer(backgroundLayer);

    let spriteLayer = layers.createSpriteLayer(mario);
    compositor.addLayer(spriteLayer);
    game.setCompositor(compositor);

    const timer = new Timer(game);
    timer.start();
});