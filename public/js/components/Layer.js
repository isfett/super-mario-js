class Layer {
    createBackgroundLayer(backgrounds, sprites) {
        let buffer = document.createElement('canvas');
        buffer.width = 256;
        buffer.height = 240;

        backgrounds.forEach(background => {
            this.drawBackground(background, buffer.getContext('2d'), sprites);
        });

        return function drawBackgroundLayer(context) {
            context.drawImage(buffer, 0, 0);
        };
    }

    createSpriteLayer(entity) {
        return function drawSpriteLayer(context) {
            entity.draw(context);
        };
    }

    drawBackground(background, context, spriteSheet) {
        background.ranges.forEach(([x1, x2, y1, y2]) => {
            for(let x = x1; x < x2; ++x) {
                for(let y = y1; y < y2; ++y) {
                    spriteSheet.drawTile(background.tile, context, x, y);
                }
            }
        });
    }
}

export {Layer as Layer};
export default Layer;