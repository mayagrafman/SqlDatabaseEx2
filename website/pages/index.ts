import { send } from "../utilities";
import { City } from "./types";

let citiesDiv = document.querySelector("#citiesDiv") as HTMLDivElement;

let cities = await send("getCities", []) as City[];

for (let i = 0; i < cities.length; i++) {
  let city = cities[i];

  let a = document.createElement("a");
  a.href = "city.html?cityId=" + city.Id;
  citiesDiv.appendChild(a);

  let img = document.createElement("img");
  img.src = cities[i].Image;
  a.appendChild(img);

  let div = document.createElement("div");
  div.classList.add("cityDiv");
  div.innerText = cities[i].Name;
  a.appendChild(div);
}
