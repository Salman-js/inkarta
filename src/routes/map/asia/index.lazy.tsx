import PageNotFound from '@/components/common/PageNotFound';
import Map from '@/components/map/world/Map';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/asia/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Map geography='asia' center={[85, 30]} zoom={3} />;
}
