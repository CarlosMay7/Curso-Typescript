// class Family {
//     constructor(
//         public readonly name: string,
//         public readonly castles: string[]
//     ){
//     }
// }

// const lannister = new Family('Lannister', ['1', '2']);
// const may = new Family('may', ['4', '7']);

// const families: Family[] = [lannister, may];

// function getCastlesByFamily(name: string):  Promise<string[]> {
//     let p: Promise<string[]> = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let foundCastles = families.filter((family) => family.name === name);
    
//             if(foundCastles.length > 0) {
//                 resolve(foundCastles.map(x => x.castles[0]));
//             } else {
//                 reject('No se encontraron castillos');
//             }
//         }, 5000);

//     })

//     return p;
// }

// console.log('Comenzandoo');
// getCastlesByFamily('5')
//     .then(result => console.log(result))
//     .catch(error => console.log(error));