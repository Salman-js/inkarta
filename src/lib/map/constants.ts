export const mapOptions: {
  title: string;
  image: string;
  route:
    | '/world'
    | '/north-america'
    | '/south-america'
    | '/europe'
    | '/asia'
    | '/africa'
    | '/oceania';
  description?: string;
}[] = [
  {
    title: 'World',
    image: '/world.png',
    route: '/world',
    description:
      'Here you can find our ultimate map game: all 193 UN member states in a single quiz!',
  },
  {
    title: 'North America',
    image: '/north-america.png',
    route: '/north-america',
    description:
      'The US and Canada are easy to find on a blank map, but what about Guatemala and Belize? Practice here!',
  },
  {
    title: 'South America',
    image: '/south-america.png',
    route: '/south-america',
    description:
      'Learn to find Brazil, Chile and Venezuela and all the other countries in South America on an outline map.',
  },
  {
    title: 'Europe',
    image: '/europe2.png',
    route: '/europe',
    description:
      'France and Germany, Czechia, Montenegro and Andorra. Learn to find them all in our geography games!',
  },
  {
    title: 'Asia',
    image: '/asia.png',
    route: '/asia',
    description:
      'Learn to locate the countries and capitals, but also the administrative divisions of China, India and Russia.',
  },
  {
    title: 'Africa',
    image: '/africa.png',
    route: '/africa',
    description:
      'Nigeria and Kenya, South Africa, Algeria and Morocco. Learn to find them all in our Africa map quizzes!',
  },
  {
    title: 'Oceania',
    image: '/australia.png',
    route: '/oceania',
    description:
      'Learn about Australia, New Zealand, East Timor and all the tiny states, and islands of Oceania!',
  },
];
