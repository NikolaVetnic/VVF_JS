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

function CharacterAlt(x, y, name, type) {
    if (this.constructor == CharacterAlt) {
        throw new Error("Abstract classes can't be instantiated.");
    }

    if (x > BOARD_SIZE || y > BOARD_SIZE) {
        throw new Error("Character out of board bounds.");
    }

    this.x = x;
    this.y = y;
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

function PlayerCharacterAlt(name) {
    CharacterAlt.call(
        this,
        parseInt(Math.random() * BOARD_SIZE, BOARD_SIZE),
        parseInt(Math.random() * BOARD_SIZE, BOARD_SIZE),
        name,
        "PLAYER_CHARACTER"
    );
}

function NonPlayerCharacterAlt(name) {
    CharacterAlt.call(
        this,
        parseInt(Math.random() * BOARD_SIZE, BOARD_SIZE),
        parseInt(Math.random() * BOARD_SIZE, BOARD_SIZE),
        name,
        "NON_PLAYER_CHARACTER"
    );
}

let pc = new PlayerCharacterAlt("Alice");
console.log(pc);

let npc = new NonPlayerCharacterAlt("Bob");
console.log(npc);

console.log(counter);
