import { MapGeocoder } from "./MapGeocoder";

export class Maps {
    private googleMap: google.maps.Map;
    private geocoder: MapGeocoder;

    constructor(divID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divID)!,{
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });

        this.geocoder = new MapGeocoder(this.googleMap);
    }

    addMarker(mappable: Mappable) {
        const infoWindow = new google.maps.InfoWindow({
            content: 'Hello world!'
        });

        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.getLocation.lat,
                lng: mappable.getLocation.lng
            }
        })

        this.geocoder.addMarkerInfo(marker, mappable);
    }

    searchText(options: SearchOptions): void {
        this.geocoder.searchText(options);
    }
}