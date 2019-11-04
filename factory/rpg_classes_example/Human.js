class Human {
    constructor(name) {
        this.name = name;
        this.healthy = 100;
        this.CanBreathUnderWater = false;
        this.HasFireResistance = false;
        this.weapon = 'fists'
    }

    attack() {
        console.log(`${this.name} is attacking with ${this.weapon}`)
    }
}


class Warrior extends Human {
    constructor(name) {
        super(name)
        this.weapon = 'sword';
    }
}
class Mage extends Human {
    constructor(name) {
        super(name)
        this.weapon = 'spells';
    }
}
class Archer extends Human {
    constructor(name) {
        super(name)
        this.weapon = 'arrows';
    }
}
a = ''.toLowerCase()

function createHuman(name, type) {
    if (type.toLowerCase() === 'warrior') {
        return new Warrior(name);

    } else if (type.toLowerCase() === 'mage') {
        return new Mage(name);

    } else if (type.toLowerCase() === 'archer') {
        return new Archer(name);
    } else {
        throw new Error('A human can not be that type');
    }
}

module.exports = createHuman