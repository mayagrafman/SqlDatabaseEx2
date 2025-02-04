export type City = {
  Id: number,
  Name: string,
  Image: string,
};

export type Hotel = {
  Id: number,
  Name: string,
  Image: string,
  City: City,
}

export type Reservation = {
  Id: number,
  Date: string,
  Hotel: Hotel,
}