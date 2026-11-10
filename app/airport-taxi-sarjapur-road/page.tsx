import AirportCorridorLanding from "@/components/sections/AirportCorridorLanding";
import { airportCorridors } from "@/data/airportCorridors";
import { createAirportCorridorMetadata } from "@/lib/airportCorridorMetadata";

const corridor = airportCorridors["airport-taxi-sarjapur-road"];
export const metadata = createAirportCorridorMetadata(corridor);

export default function SarjapurRoadAirportTaxiPage() {
  return <AirportCorridorLanding corridor={corridor} />;
}
