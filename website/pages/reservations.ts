import { send } from "../utilities";
import { getUserId } from "./funcs";
import { Reservation } from "./types";

let reservationsDiv = document.querySelector("#reservationsDiv") as HTMLUListElement;

let userId = await getUserId();

let reservations = await send("getReservations", userId) as Reservation[];

for (let i = 0; i < reservations.length; i++) {
  let res = reservations[i];

  console.log(res);

  let div = document.createElement("div");
  div.classList.add("resDiv");
  reservationsDiv.appendChild(div);

  let img = document.createElement("img");
  img.src = res.Hotel.Image;
  div.appendChild(img);

  let hotelCityDiv = document.createElement("div");
  hotelCityDiv.innerText = res.Hotel.Name + ", " + res.Hotel.City.Name;
  div.appendChild(hotelCityDiv);

  let dateDiv = document.createElement("div");
  dateDiv.innerText = res.Date;
  div.appendChild(dateDiv);

  let unbookButton = document.createElement("button");
  unbookButton.innerText = "Unbook";
  unbookButton.onclick = function () {
    send("unbook", res.Id);
    div.remove();
  };
  div.appendChild(unbookButton);
}
