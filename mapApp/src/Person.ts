export abstract class Person implements Mappable {
    protected readonly name: string;
    protected readonly location: {
        lat: number,
        lng: number
    }

    constructor(name: string, location: {lat: number, lng: number}) {
        this.name = name;
        this.location = {
            lat: location.lat,
            lng: location.lng
        }
    }

    get getLocation() {
        return this.location;
    }

    markerTitle(address: () => string): string {
        return `La dirección de ${this.name}  es ${address()}`;
    }
}