class Image {
    constructor(name, type) {
        this.name = name;
    }


}
class JpegImage extends Image {};
class GIFImage extends Image {};
class PngImage extends Image {};
/* Our factory also allows us to not expose the constructors of the objects it creates, and
prevents them from being extended or modified  */

function createImage(name) {
    if (name.match(/\.jpeg$/)) {
        return new JpegImage(name);

    } else if (name.match(/\.gif$/)) {
        return new GifImage(name);

    } else if(name.match(/\.png$/)) {
        return new PngImage(name);

    } else {
        throw new Exception('Unsupported format');
    }
}


const jpeg = createImage('photo.jpeg');
const gif = createImage('photo.gif');
const png = createImage('photo.png');

console.log(jpeg)

function createPerson(name) {
    const privateProperties = {};
    const person = {
        setName: name => {
            if(!name) throw new Error('A person must have a name');
            privateProperties.name = name;
        },
        getName: () => privateProperties.name
    };
    person.setName(name);
    return person;
}

const person = createPerson('Renato')
console.log(person.getName())