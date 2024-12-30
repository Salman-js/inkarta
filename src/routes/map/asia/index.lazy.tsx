import PageNotFound from '@/components/common/PageNotFound';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/asia/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageNotFound gameMode />;
}
