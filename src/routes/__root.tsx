import PageNotFound from '@/components/common/PageNotFound';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <PageNotFound />,
});
