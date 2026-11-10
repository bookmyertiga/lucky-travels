import AirportCorridorLanding from "@/components/sections/AirportCorridorLanding";
import { airportCorridors } from "@/data/airportCorridors";
import { createAirportCorridorMetadata } from "@/lib/airportCorridorMetadata";

const corridor = airportCorridors["airport-taxi-hsr-layout"];
export const metadata = createAirportCorridorMetadata(corridor);

export default function HsrLayoutAirportTaxiPage() {
  return <AirportCorridorLanding corridor={corridor} />;
}
