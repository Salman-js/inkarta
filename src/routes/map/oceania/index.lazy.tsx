import Map from '@/components/map/world/Map';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/oceania/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Map geography='oceania' center={[150, -30]} zoom={3} />;
}
