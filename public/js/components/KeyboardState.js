const PRESSED = 1;
const RELEASED = 0;

class KeyboardState {
    constructor() {
        this.keyStates = new Map();
        this.keyMap = new Map();
    }

    addMapping(keyCode, callback) {
        this.keyMap.set(keyCode, callback);
    }

    handleEvent(event) {
        let {keyCode} = event;

        if(!this.keyMap.has(keyCode)) {
            return;
        }

        event.preventDefault();

        let keyState = event.type === 'keydown' ? PRESSED : RELEASED;

        if(this.keyStates.get(keyCode) === keyState){
            return;
        }

        this.keyStates.set(keyCode, keyState);

        this.keyMap.get(keyCode)(keyState);
    }

    listenTo(object) {
        ['keydown', 'keyup'].forEach(eventName => {
            object.addEventListener(eventName, event => {
                this.handleEvent(event);
            });
        });
    }
}

export {KeyboardState as KeyboardState};
export default KeyboardState;