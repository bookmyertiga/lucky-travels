import AirportCorridorLanding from "@/components/sections/AirportCorridorLanding";
import { airportCorridors } from "@/data/airportCorridors";
import { createAirportCorridorMetadata } from "@/lib/airportCorridorMetadata";

const corridor = airportCorridors["airport-taxi-jp-nagar"];
export const metadata = createAirportCorridorMetadata(corridor);

export default function JpNagarAirportTaxiPage() {
  return <AirportCorridorLanding corridor={corridor} />;
}
