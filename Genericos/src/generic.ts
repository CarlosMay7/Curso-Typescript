class NumberArray {
    constructor(private collection: number[]) {

    }

    get(index: number): number {
        return this.collection[index];
    }
}

class StringArray {
    constructor(private collection: string[]) {

    }

    get(index: number): string {
        return this.collection[index];
    }
}

class AnyArray<T> { //T es para el tipo como argumento

    constructor(private collection: T[]) {

    }

    get(index: number): T {
        return this.collection[index];
    }
}

const col = new AnyArray<string>(['a', 'b']);
const colInf = new AnyArray([1, 2]); //Puede hacer inferencia pero es mejor anotar

//Funciones

function printString(arr: string[]): void {
    for(let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumber(arr: number[]): void {
    for(let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAny<T>(arr: T[]): void {
    for(let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

printAny<string>(['a', 'b', 'c']);
printAny([1, 2]); //También puede inferir


//Constraints

class Movie implements Media {
    constructor(private name: string) {}

    print(): void {
        console.log(`Peli + ${this.name}`);
    }
}

class TvShow implements Media {
    constructor(private name: string) {}

    print(): void {
        console.log(`${this.name}`);
    }
}

interface Media {
    print(): void;
}

function printMedia<T extends Media>(media: T[]): void {
    media.forEach((media) => media.print());
}

const movie = new Movie('Nueva peli');
const tvS = new TvShow('Nueva peli');

const media: Media[] = [movie, tvS];
printMedia(media);

//KeyOf

//Verifica que la llave tipo U sea de una Key de T
function findValue<T extends Object, U extends keyof T>(object: T, key: U) {
    return object[key];
}

findValue({'name': 'Juan'}, 'name');