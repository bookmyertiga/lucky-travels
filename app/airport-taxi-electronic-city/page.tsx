import AirportCorridorLanding from "@/components/sections/AirportCorridorLanding";
import { airportCorridors } from "@/data/airportCorridors";
import { createAirportCorridorMetadata } from "@/lib/airportCorridorMetadata";

const corridor = airportCorridors["airport-taxi-electronic-city"];
export const metadata = createAirportCorridorMetadata(corridor);

export default function ElectronicCityAirportTaxiPage() {
  return <AirportCorridorLanding corridor={corridor} />;
}
