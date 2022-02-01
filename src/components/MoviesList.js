const MoviesList = () => {
  return (
    <div className="moviesList">
      {data.map((movie, index) => {
        return (
          <Movie key={index} category={movie.category} images={movie.images} />
        );
      })}
    </div>
  );
};

export default MoviesList;
