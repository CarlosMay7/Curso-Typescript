interface Bird {
    fly(): void;
}

interface Fish {
    swim(): void;
}

class Dog {
    woof(): void {
        console.log('Woof');
    }
}

type unknownPet = Fish | Bird | Dog;

function printPet(pet: unknownPet) {

    if('swim' in pet)
        pet.swim();

    if(pet as Fish)
        (pet as Fish).swim();

    if(pet instanceof Dog)
        pet.woof();
}