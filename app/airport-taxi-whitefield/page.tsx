import AirportCorridorLanding from "@/components/sections/AirportCorridorLanding";
import { airportCorridors } from "@/data/airportCorridors";
import { createAirportCorridorMetadata } from "@/lib/airportCorridorMetadata";

const corridor = airportCorridors["airport-taxi-whitefield"];
export const metadata = createAirportCorridorMetadata(corridor);

export default function WhitefieldAirportTaxiPage() {
  return <AirportCorridorLanding corridor={corridor} />;
}
