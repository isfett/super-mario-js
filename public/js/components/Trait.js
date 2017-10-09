class Trait {
    constructor(name) {
        this.NAME = name;
    }

    update() {
        console.warn('Unhandle update call in Trait');
    }
}

export {Trait as Trait};
export default Trait;