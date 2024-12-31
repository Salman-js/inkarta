import Map from '@/components/map/world/Map';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/africa/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Map geography='africa' center={[20, 0]} zoom={2.5} />;
}
