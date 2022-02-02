const Images = (props) => {
  console.log(props);
  return (
    <div className="images">
      {props.images.map((url, index) => {
        return <img key={index} src={url} alt="" />;
      })}
    </div>
  );
};

export default Images;
