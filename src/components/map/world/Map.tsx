import { countryNames } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { NewGameDialog, ResultDialog } from '../../factory/Dialog';
import { flags } from '@/lib/map/constants';
import { Button } from '../../ui/button';
import { ChevronRight, Home, RotateCcw } from 'lucide-react';
import { ToolTip } from '../../factory/Tooltip';
import confetti from 'canvas-confetti';
import { Link } from '@tanstack/react-router';
import NewGameNav from '@/components/common/NewGameNav';

export default function Map() {
  const [startTime, setStartTime] = useState<Date | undefined>(new Date());
  const [currentTries, setCurrentTries] = useState<number>(0);
  const [resultOpen, setResultOpen] = useState(false);
  const [max, setMax] = useState<number>(20);
  const [selectedCountries, setSelectedCountries] = useState<
    {
      name?: string;
      tries: number;
    }[]
  >([]);
  const currentCountry: {
    name: string;
    flag?: string;
  } | null = useMemo(() => {
    // Filter the countries that are not in selectedCountries
    const availableCountries = countryNames.filter(
      (c) => !selectedCountries?.some((sc) => sc.name === c)
    );

    // Randomly select a country from the filtered list
    if (availableCountries.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableCountries.length);
      const randomCountry = availableCountries[randomIndex];
      const flag = flags.find((c) =>
        c.name
          .toLowerCase()
          .includes(
            randomCountry?.toLowerCase().replace(' ', '').replace('.', '')
          )
      )?.image;
      return { name: randomCountry, flag };
    }

    // Return null or a default value if no countries are available
    return null;
  }, [selectedCountries]);
  const handleSelectCountry = (
    name: string,
    coordinates: {
      x: number;
      y: number;
    }
  ) => {
    const selected = selectedCountries.some((sc) => sc.name === name);
    if (!selected) {
      const tries = currentTries;
      setCurrentTries((prevTries) => prevTries + 1);
      const correct = name === currentCountry?.name;
      if (correct) {
        setSelectedCountries((prevCountries) => [
          ...prevCountries,
          { name, tries: tries },
        ]);
        setCurrentTries(0);
        const x = coordinates.x / window.innerWidth;
        const y = coordinates.y / window.innerHeight;
        confetti({
          particleCount: 50,
          spread: 20,
          ticks: 100,
          origin: { y, x },
        });
      } else if (tries + 1 > 2) {
        skipSelection();
      }
    }
  };
  const skipSelection = () => {
    setSelectedCountries((prevCountries) => [
      ...prevCountries,
      { name: currentCountry?.name, tries: 3 },
    ]);
    setCurrentTries(0);
  };
  const calculateAccuracy = useMemo(() => {
    const weightedCorrectAttempts = selectedCountries.reduce((acc, sc) => {
      if (sc.tries === 0) return acc + 1; // Full point
      if (sc.tries === 1) return acc + 0.75; // 75% point
      if (sc.tries === 2) return acc + 0.5; // 50% point
      return acc; // No points for tries > 2
    }, 0);

    const totalAttempts = selectedCountries.reduce(
      (acc, sc) => acc + (sc.tries + 1),
      0
    );

    if (totalAttempts === 0) {
      return 0;
    }

    const accuracy = (weightedCorrectAttempts / selectedCountries.length) * 100;
    return accuracy;
  }, [selectedCountries]);
  useEffect(() => {
    console.log('Countries: ', selectedCountries);
    if (selectedCountries.length === max) {
      setResultOpen(true);
    }
  }, [selectedCountries]);
  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <ComposableMap
        projection='geoMercator'
        className='flex self-center h-screen border w-full bg-[#a4d1dc]'
      >
        <ZoomableGroup center={[0, 0]} zoom={1} maxZoom={20}>
          <Geographies geography='/features.json'>
            {({ geographies }) =>
              geographies.map((geo) => {
                const gotOnFirstTry = selectedCountries.some(
                  (sc) => sc.name === geo.properties.name && sc.tries === 0
                );
                const gotOnSecondTry = selectedCountries.some(
                  (sc) => sc.name === geo.properties.name && sc.tries === 1
                );
                const gotOnThirdTry = selectedCountries.some(
                  (sc) => sc.name === geo.properties.name && sc.tries === 2
                );
                const isWrong = selectedCountries.some(
                  (sc) => sc.name === geo.properties.name && sc.tries > 2
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={(e) =>
                      handleSelectCountry(geo.properties.name, {
                        x: e.clientX,
                        y: e.clientY,
                      })
                    }
                    style={{
                      default: {
                        fill: gotOnFirstTry
                          ? '#ffffff'
                          : gotOnSecondTry
                            ? '#caad04'
                            : gotOnThirdTry
                              ? 'orange'
                              : isWrong
                                ? '#bf4140'
                                : '#166c38',
                        outline: 'none',
                        stroke: '#c4c2c2',
                        strokeWidth: 0.3,
                      },
                      hover: {
                        fill: gotOnFirstTry
                          ? '#ffffff'
                          : gotOnSecondTry
                            ? '#caad04'
                            : gotOnThirdTry
                              ? 'orange'
                              : isWrong
                                ? '#bf4140'
                                : '#F53',
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className='p-4 rounded-md fixed top-4 right-4 shadow-md bg-white space-y-1 justify-center items-center'>
        <img src={currentCountry?.flag} className='w-10 lg:w-40 mx-auto' />
        <div>
          <p className='lg:text-2xl text-base font-semibold text-center mb-3'>
            {currentCountry?.name}
          </p>
        </div>
        <Button
          variant='outline'
          className='w-full mt-4'
          onClick={skipSelection}
        >
          Skip <ChevronRight />
        </Button>
      </div>
      <div className='rounded-full fixed top-4 left-4 shadow-md bg-white flex flex-row justify-center items-center px-2'>
        <ToolTip content='Main Menu'>
          <Link to='/'>
            <Button variant='link' size='icon'>
              <Home />
            </Button>
          </Link>
        </ToolTip>
        <NewGameNav />
        <ToolTip content='New Game'>
          <Button
            variant='link'
            onClick={() => setStartTime(undefined)}
            size='icon'
          >
            <RotateCcw />
          </Button>
        </ToolTip>
        <Button
          variant='link'
          className='w-full'
          onClick={() => setResultOpen(true)}
        >
          Result
        </Button>
      </div>
      <NewGameDialog
        max={max}
        setMax={setMax}
        open={startTime === undefined}
        onClose={() => {
          setStartTime(new Date());
          setResultOpen(false);
          setSelectedCountries([]);
          setCurrentTries(0);
        }}
      />
      <ResultDialog
        result={calculateAccuracy}
        open={resultOpen}
        onClose={() => {
          setResultOpen(false);
          setSelectedCountries([]);
          setCurrentTries(0);
        }}
      />
    </div>
  );
}
