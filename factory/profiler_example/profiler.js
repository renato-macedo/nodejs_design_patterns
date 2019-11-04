//  Profiler Example

class Profiler {
    constructor(label) {
        this.label = label;
        this.lastTime = null;
    }

    start() {
        // save the current time when start() is invoked
        this.lastTime =  process.hrtime()
    }

    end() {
        // calculate the elapsed time when end() is executed
        const diff = process.hrtime(this.lastTime);
        console.log(`Time "${this.label} took ${diff[0]} seconds and ${diff[1]} nanoseconds`);
    }
}


module.exports = function(label) {
    if (process.env.NODE_ENV === 'development') {
        
        /* If the application is running in development mode, 
        we return a new, fully functional Profiler object */

        return new Profiler(label);
    } else if (process.env.NODE_ENV === 'production') {
        
        /* If instead the application is running in production mode, 
        we return a mock object where the start() and stop() methods 
        are empty functions */
        
        return {
            start: function() {},
            end: function() {}
        }
    } else {
        throw new Error('Must set NODE_ENV');
    }
}