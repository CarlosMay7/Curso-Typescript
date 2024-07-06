class Vehicle {
    brand: string = '';
    model: string = '';
}

function createVehicle() : Vehicle {
    const vehicle: Partial<Vehicle> = {}; //Crear objetos con atributos opcionales
    vehicle.brand = 'Ford'; //Los atributos deben ser KeyOf el objeto
    vehicle.model = 'Focus';

    // vehicle.weight = 1; No se puede

    return vehicle as Vehicle;
}

let cars: Readonly<string[]> = ['Ford', 'Mazda'];
// cars.push('honda'); No se puede cambiar