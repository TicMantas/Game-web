import useGenre from '../hooks/useGenre'

const Genre = () => {
    const {genres} = useGenre();

  return (
  <ul>
    {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
  </ul>
  )
}

export default Genre
