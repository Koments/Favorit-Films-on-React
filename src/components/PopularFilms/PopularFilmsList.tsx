export type Film = {
  title: string;
  poster_path: string;
  release_date: string;
};
interface PopularFilmsListProps {
  popularFilms: Film[];
}

export function PopularFilmsList({ popularFilms }: PopularFilmsListProps) {
  console.log(popularFilms);
  return <></>;
}
