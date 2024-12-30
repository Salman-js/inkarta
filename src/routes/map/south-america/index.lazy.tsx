import PageNotFound from '@/components/common/PageNotFound';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/south-america/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageNotFound gameMode />;
}
