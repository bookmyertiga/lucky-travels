import AirportCorridorLanding from "@/components/sections/AirportCorridorLanding";
import { airportCorridors } from "@/data/airportCorridors";
import { createAirportCorridorMetadata } from "@/lib/airportCorridorMetadata";

const corridor = airportCorridors["airport-taxi-indiranagar"];
export const metadata = createAirportCorridorMetadata(corridor);

export default function IndiranagarAirportTaxiPage() {
  return <AirportCorridorLanding corridor={corridor} />;
}
