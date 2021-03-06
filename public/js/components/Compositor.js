class Compositor {
    constructor() {
        this.layers = [];
    }

    addLayer(layer) {
        this.layers.push(layer);
    }

    draw(context) {
        this.layers.forEach(layer => {
            layer(context);
        })
    }
}

export {Compositor as Compositor};
export default Compositor;