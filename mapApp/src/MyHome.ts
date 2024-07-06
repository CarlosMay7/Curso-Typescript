import { Passenger } from "./Passenger";

export class MyHome implements Mappable {
    private readonly location: {
        lat: number,
        lng: number
    }

    get getLocation() {
        return this.location;
    }

    constructor(passenger: Passenger) {
        this.location = {
            lat: passenger.getLocation.lat + 0.002,
            lng: passenger.getLocation.lng + 1
        }
    }

    markerTitle(address: () => string): string {
        return `La dirección de mi casa es ${address()}`;
    }
}