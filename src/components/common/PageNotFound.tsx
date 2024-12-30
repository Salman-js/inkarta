import { Link } from '@tanstack/react-router';
import { ToolTip } from '../factory/Tooltip';
import NewGameNav from './NewGameNav';
import { Button } from '../ui/button';
import { Home } from 'lucide-react';
type pageNotFoundProps = {
  gameMode?: boolean;
};
const PageNotFound: React.FC<pageNotFoundProps> = ({ gameMode = false }) => {
  return (
    <>
      <div className='rounded-full fixed top-4 left-4 shadow-md  flex flex-row justify-center items-center px-2'>
        <ToolTip content='Main Menu'>
          <Link to='/'>
            <Button variant='link' size='icon'>
              <Home />
            </Button>
          </Link>
        </ToolTip>
        <NewGameNav />
      </div>
      <main className='not-found-container grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <h1 className='mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
            {gameMode ? 'Coming Soon' : '404'}
          </h1>
          <p className='mt-6 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8'>
            {gameMode ? 'Touch some grass.' : 'Curiosity will kill you.'}
          </p>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;
