import Images from "./Images";

const Section = (props) => {
  return (
    <div>
      <h2>{props.item.category}</h2>
      <Images images={props.item.images} />
    </div>
  );
};

export default Section;
