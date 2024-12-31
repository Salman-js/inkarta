import Map from '@/components/map/world/Map';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/south-america/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Map geography='samerica' center={[-50, -25]} zoom={2.6} />;
}
