import PageNotFound from '@/components/common/PageNotFound';
import Map from '@/components/map/world/Map';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/north-america/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Map geography='namerica' center={[-80, 60]} zoom={1.5} />;
}
