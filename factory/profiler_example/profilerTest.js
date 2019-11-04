// Run:
// export NODE_ENV=development; node profilerTest
// export NODE_ENV=production; node profilerTest

const profiler = require('./profiler');

function getRandomArray(len) {
    const p = profiler('Generating a ' + len + ' item long array');
    
    p.start();
    
    const arr = [];
    for(let i = 0; i < len; i++) {
        arr.push(Math.random());
    }

    p.end();
}

getRandomArray(1e6);
console.log('Done');