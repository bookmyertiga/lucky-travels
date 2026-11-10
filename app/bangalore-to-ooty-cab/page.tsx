import OutstationRouteLanding from "@/components/sections/OutstationRouteLanding";
import { outstationRoutes } from "@/data/outstationRoutes";
import { createOutstationRouteMetadata } from "@/lib/outstationRouteMetadata";

const route = outstationRoutes["bangalore-to-ooty-cab"];

export const metadata = createOutstationRouteMetadata(route);

export default function BangaloreToOotyCabPage() {
  return <OutstationRouteLanding route={route} />;
}
