import PageNotFound from '@/components/common/PageNotFound';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/africa/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageNotFound gameMode />;
}
