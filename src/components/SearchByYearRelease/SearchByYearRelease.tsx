import { useEffect } from "react";

export function SearchByYearRelease() {
  async function SearchByYearRelease() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=70f38a0b17bb6c507ef9e0853610e971&language=en-US&page=1&include_adult=false&year=2020`
    );
    const movies = await response.json();
    return movies;
  }
  useEffect(() => {
    SearchByYearRelease().then((yearFilmsList) => {
      const filmsList = yearFilmsList;
    });
  }, []);

  return (
    <>
      <ul>
        <li>
          <a href="/">2022</a>
        </li>
        <li>
          <a href="/">2021</a>
        </li>
        <li>
          <a href="/">2020</a>
        </li>
        <li>
          <a href="/">2019</a>
        </li>
        <li>
          <a href="/">2018</a>
        </li>
        <li>
          <a href="/">2017</a>
        </li>
        <li>
          <a href="/">2016</a>
        </li>
        <li>
          <a href="/">2015</a>
        </li>
        <li>
          <a href="/">2014</a>
        </li>
        <li>
          <a href="/">2013</a>
        </li>
        <li>
          <a href="/">2012</a>
        </li>
        <li>
          <a href="/">2011</a>
        </li>
        <li>
          <a href="/">2010</a>
        </li>
        <li>
          <a href="/">2009</a>
        </li>
        <li>
          <a href="/">2008</a>
        </li>
        <li>
          <a href="/">2007</a>
        </li>
        <li>
          <a href="/">2006</a>
        </li>
        <li>
          <a href="/">2005</a>
        </li>
        <li>
          <a href="/">2004</a>
        </li>
        <li>
          <a href="/">2003</a>
        </li>
      </ul>
    </>
  );
}
