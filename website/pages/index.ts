import { send } from "../utilities";
import { City } from "./types";

let citiesDiv = document.querySelector("#citiesDiv") as HTMLDivElement;

let cities = await send("getCities", []) as City[];

for (let i = 0; i < cities.length; i++) {
  let a = document.createElement("a");
  citiesDiv.appendChild(a);

  let img = document.createElement("img");
  img.src = cities[i].Image;
  a.appendChild(img);
}