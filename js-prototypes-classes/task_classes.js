class Counter {
    static numPC;
    static numNPC;

    constructor() {
        this.numPC = 0;
        this.numNPC = 0;
    }
}

const counter = new Counter();
const BOARD_SIZE = 10;

class Character {
    pos = {};
    name = "";
    type = "";

    constructor(x, y, name, type) {
        if (this.constructor == Character) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        if (x > BOARD_SIZE || y > BOARD_SIZE) {
            throw new Error("Character out of board bounds.");
        }

        this.pos.x = x;
        this.pos.y = y;
        this.name = name;
        this.type = type;

        switch (type) {
            case "PLAYER_CHARACTER":
                counter.numPC++;
                break;
            case "NON_PLAYER_CHARACTER":
                counter.numNPC++;
                break;
            default:
                break;
        }
    }

    set changePos(value) {
        this.pos.x = value;
        this.pos.y = value;
    }
}

class PlayerCharacter extends Character {
    constructor(name) {
        super(
            parseInt(Math.random() * BOARD_SIZE, BOARD_SIZE),
            parseInt(Math.random() * BOARD_SIZE, BOARD_SIZE),
            name,
            "PLAYER_CHARACTER"
        );
    }
}

class NonPlayerCharacter extends Character {
    constructor(name, type) {
        super(
            parseInt(Math.random() * BOARD_SIZE, BOARD_SIZE),
            parseInt(Math.random() * BOARD_SIZE, BOARD_SIZE),
            name,
            "NON_PLAYER_CHARACTER"
        );
    }
}

let pc = new PlayerCharacter("Alice");
pc.changePos = 2;
console.log(pc);

let npc = new NonPlayerCharacter("Bob");
console.log(npc);

console.log(counter);
