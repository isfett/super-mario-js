class Loader {
    constructor() {

    }

    loadImage(url) {
        return new Promise(resolve => {
            let image = new Image();
            image.addEventListener('load', () => {
                resolve(image);
            });
            image.src = url;
        });
    }

    loadLevel(name) {
        return fetch('/levels/'+name+'.json')
            .then(r => r.json());
    }
}

export {Loader as Loader};
export default Loader;