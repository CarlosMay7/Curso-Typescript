interface Mappable {
    getLocation: {
        lat:number,
        lng: number
    }

    markerTitle(address: () => string): string
}