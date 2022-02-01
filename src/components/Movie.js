const Movie = (props) => {
  return (
    <div className={`movie ${props.className}`}>
      <span>
        {props.category} - {props.images}
      </span>
    </div>
  );
};

export default Movie;
