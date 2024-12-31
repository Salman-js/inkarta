import { Link } from '@tanstack/react-router';
import { ToolTip } from '../factory/Tooltip';
import NewGameNav from './NewGameNav';
import { Button } from '../ui/button';
import { Home } from 'lucide-react';
import { error } from 'console';
type pageNotFoundProps = {
  gameMode?: boolean;
  errorMode?: boolean;
  loadingMode?: boolean;
};
const PageNotFound: React.FC<pageNotFoundProps> = ({
  gameMode = false,
  errorMode = false,
  loadingMode = false,
}) => {
  return (
    <>
      <div className='rounded-full fixed top-4 left-4 shadow-md  flex flex-row justify-center items-center px-2 bg-white'>
        <ToolTip content='Main Menu'>
          <Link to='/'>
            <Button variant='link' size='icon'>
              <Home />
            </Button>
          </Link>
        </ToolTip>
        <NewGameNav />
      </div>
      <main className='not-found-container grid min-h-full place-items-center bg-[#a4d1dc] px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <h1 className='mt-4 text-balance text-7xl font-semibold text-gray-900'>
            {gameMode
              ? 'Coming Soon'
              : errorMode
                ? 'Error'
                : loadingMode
                  ? 'Loading...'
                  : '404'}
          </h1>
          <p className='mt-6 text-pretty text-lg font-medium text-gray-800 sm:text-xl'>
            {gameMode
              ? 'Touch some grass.'
              : errorMode
                ? `Look what you've done`
                : loadingMode
                  ? 'Patience is a virtue'
                  : 'Curiosity will kill you.'}
          </p>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;
