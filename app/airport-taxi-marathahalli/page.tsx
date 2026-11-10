import AirportCorridorLanding from "@/components/sections/AirportCorridorLanding";
import { airportCorridors } from "@/data/airportCorridors";
import { createAirportCorridorMetadata } from "@/lib/airportCorridorMetadata";

const corridor = airportCorridors["airport-taxi-marathahalli"];
export const metadata = createAirportCorridorMetadata(corridor);

export default function MarathahalliAirportTaxiPage() {
  return <AirportCorridorLanding corridor={corridor} />;
}
