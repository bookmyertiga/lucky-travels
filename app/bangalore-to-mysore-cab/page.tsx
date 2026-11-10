import OutstationRouteLanding from "@/components/sections/OutstationRouteLanding";
import { outstationRoutes } from "@/data/outstationRoutes";
import { createOutstationRouteMetadata } from "@/lib/outstationRouteMetadata";

const route = outstationRoutes["bangalore-to-mysore-cab"];

export const metadata = createOutstationRouteMetadata(route);

export default function BangaloreToMysoreCabPage() {
  return <OutstationRouteLanding route={route} />;
}
