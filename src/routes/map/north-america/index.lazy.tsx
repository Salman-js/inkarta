import PageNotFound from '@/components/common/PageNotFound';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/map/north-america/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageNotFound gameMode />;
}
