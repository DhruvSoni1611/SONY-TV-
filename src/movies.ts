export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: "/posters/AssaiansCreed.jpg", name: "Assasians" },
  {
    poster: "/posters/GOT1.jpg",
    name: "Game Of Thrones 1",
  },
  {
    poster: "/posters/LostMan.jpeg",
    name: "Lost Man",
  },
  { poster: "/posters/ManInSpace.jpg", name: "Space" },
  {
    poster: "/posters/TakeBackEarth1.jpg",
    name: "Take Back Earth 1",
  },
  {
    poster: "/posters/TakeBackEarth2.jpg",
    name: "Take Back Earth 2",
  },
  { poster: "/posters/GOT2.jpg", name: "Game Of Thrones 2" },
  { poster: "/posters/far-cry.jpg", name: "Far Cry 1" },
  { poster: "/posters/far-cry2.jpg", name: "Far Cry 2" },
  { poster: "/posters/Camera1.jpg", name: "Man in Camera" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
