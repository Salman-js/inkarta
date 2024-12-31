import Map from '@/components/map/world/Map';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/europe/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Map geography='europe' center={[20, 55]} zoom={3} />;
}
