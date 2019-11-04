const createHuman = require('./Human');


const archer = createHuman('Emiya Shirou', 'archer');

archer.attack();

const warrior = createHuman('King Arthur', 'warrior');

warrior.attack();

const mage = createHuman('Jesus', 'mage');

mage.attack();