import { send } from "../utilities";
import { Hotel } from "./types";

let query = new URLSearchParams(location.search);
let cityId = parseInt(query.get("cityId")!);

let hotelsDiv = document.querySelector("#hotelsDiv") as HTMLDivElement;

