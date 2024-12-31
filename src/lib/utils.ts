import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const africaNames = [];
const countryToCode = {
  'United States': 'US',
  Canada: 'CA',
  Mexico: 'MX',
  Brazil: 'BR',
};

export const getFlagEmoji = (countryName: string) => {
  const code = countryToCode[countryName];
  if (!code) return null;

  return code
    .toUpperCase()
    .split('')
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt()))
    .join('');
};
