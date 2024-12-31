import { mapOptions } from '@/lib/map/constants';
import { createLazyFileRoute, Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='page-container lg:px-64 px-20'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-10'>
        {mapOptions.map((option) => (
          <Link to={`/map${option.route}`}>
            <div className='flex flex-col justify-center items-center bg-[#fcfcfc] rounded-3xl p-4 lg:p-10 py-8 lg:py-20 hover:shadow-xl transition-all gap-3'>
              <div>
                <img
                  src={option.image}
                  alt={option.title}
                  className='w-44 h-44 rounded-full'
                />
              </div>
              <div>
                <p className='text-xl md:text-base font-semibold'>
                  {option.title}
                </p>
              </div>
              <div className='lg:px-8 px-4'>
                <p className='line-clamp-3 text-lg md:text-sm leading-snug text-muted-foreground text-center'>
                  {option.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
