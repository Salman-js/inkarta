import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';

export function useFetchCountryNameQuery<TData = any>(
  url: string,
  queryKey: QueryKey,
  queryOptions?: UseQueryOptions<TData>
) {
  const queryFn = async (): Promise<TData> => {
    const data = await fetch(url);
    const jsonData = await data.json();
    const countryNames = jsonData.features.map(
      (feature) => feature.properties.sovereignt
    );
    return countryNames;
  };

  return useQuery<TData>({ ...queryOptions, queryKey, queryFn });
}

export function useFetchFlagQuery<TData = any>(
  url: string,
  queryKey: QueryKey,
  queryOptions?: UseQueryOptions<TData>
) {
  const queryFn = async (): Promise<TData> => {
    const data = await fetch(url);
    const jsonData = await data.json();
    return jsonData;
  };

  return useQuery<TData>({ ...queryOptions, queryKey, queryFn });
}
export type IMapJson = {
  type: string;
  features: {
    properties: {
      sovereignt: string;
      [x: string]: string | number;
    };
  }[];
};
export const useFetchCountryNames = (geographyName: string) => {
  return useFetchCountryNameQuery<string[]>(`/${geographyName}.json`, [
    'country-names',
    geographyName,
  ]);
};

export const useFetchFlags = () => {
  return useFetchFlagQuery<{ name: string; image: string }[]>(
    `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json`,
    ['flags']
  );
};
