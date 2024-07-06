import { Driver } from "./Driver";
import { Maps } from "./Maps";
import { MyHome } from "./MyHome";
import { Passenger } from "./Passenger";

const map = new Maps('map');
const driver = new Driver();
const passenger = new Passenger();
const myHome = new MyHome(passenger);

map.addMarker(driver);
map.addMarker(passenger);
map.addMarker(myHome);
map.searchText({
    input: <HTMLInputElement>document.getElementById('address')!,
    searchButton: <HTMLButtonElement>document.getElementById('search-button')!
})