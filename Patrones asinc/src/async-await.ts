class Family {
    constructor(
        public readonly name: string,
        public readonly castles: string[]
    ){
    }
}

const lannister = new Family('Lannister', ['1', '2']);
const may = new Family('may', ['4', '7']);

const families: Family[] = [lannister, may];

async function logCastleSearch(family: string) {
    let foundCastles = await getCastlesByFamily(family);
    console.log(foundCastles);
}

function getCastlesByFamily(name: string):  Promise<string[]> {
    let p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundCastles = families.filter((family) => family.name === name);
    
            if(foundCastles.length > 0) {
                resolve(foundCastles.map(x => x.castles[0]));
            } else {
                reject('No se encontraron castillos');
            }
        }, 5000);

    })

    return p;
}

console.log('Comenzandoo');
logCastleSearch('Lannister')
    .catch(error => console.log(error));