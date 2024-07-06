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

// interface CastleCallback {
//     (err?: Error | any, castles?: string[]): void
// }

// function getCastlesByFamily(name: string, callback: CastleCallback): void {
//     setTimeout(() => {
//         try {
//             let foundCastles = families.filter((family) => family.name === name);
    
//             if(foundCastles.length > 0) {
//                 callback(undefined, foundCastles.map(family => family.castles[0]));
//             } else {
//                 throw new Error('No se encontraron castillos');
//             }
//         } catch (error) {
//             callback(error, undefined);
//         }
//     }, 5000);
// }

// function logCastleSearch(err?: Error, castles?: string[]): void {
//     if(err) {
//         console.log(`Mensaje de error ${err.message}`)
//     } else {
//         console.log(`Se encontraron los siguientes castillos ${castles}`);
//     }
// }

// console.log('Comenzandoo');
// getCastlesByFamily('y', logCastleSearch);