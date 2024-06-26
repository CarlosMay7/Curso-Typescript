interface Billable {
    currentBill(): string;
}

interface Flyable {
    altitude(): number;
}

abstract class Vehicle {
    protected readonly brandName: string;
    private model: string;
    private color: string;
    private price: number;
    static currentPrice: number;

    constructor(brand: string, model: string, color: string, price: number, private readonly newAt: string) {
        this.brandName = brand;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    get currentPrice() {
        return this.price;
    }

    set changePrice(newPrice: number) {
        this.price = newPrice;
    }

    static PriceToCurrency(value: number, currencyType: string) {
        let result = '';
        this.currentPrice = 7;

        switch(currencyType) {
            case 'USD':
                result = 'USD ' + value;
                break
            case 'MXM':
                result = 'MXN ' + value;
            default:
                break;                
        }

        return result;
    }

    drive() {
        console.log(`Conduciendo un ${this.brandName} con modelo ${this.model} y color ${this.color}`);
    }

    abstract run(): void;
}

class Car extends Vehicle implements Billable, Flyable {
    currentBill(): string {
        return 'La factura es 700';
    }

    altitude(): number {
        return 700;
    }

    drive(): void {
        console.log(`Now is a car with ${this.brandName}`);
    }

    run(): void {
        console.log('Now is running');
    }
}

// const vehicle = new Vehicle('Mazda', 'G-500', 'Morado', 22, 'Nuevo');
// vehicle.drive();
// console.log(vehicle.currentPrice);
// vehicle.changePrice = 700;
// console.log(vehicle.currentPrice);
// console.log(Vehicle.PriceToCurrency(700, 'USD'));


const car = new Car('Mazda', 'G-500', 'Morado', 200, 'Nuevo');
car.drive();
console.log(Car.PriceToCurrency(700, 'USD'));
