import Map from '@/components/map/world/Map'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/map/world/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Map />
}
