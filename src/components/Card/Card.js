import "./Card.scss";
import ProductModal from "./ProductModal";

const Card = ({ title, image, about }) => {
  return (
    <div className="card">
      <img src={image} className="card__img" alt={title} />
      <span className="card__title">{title}</span>
      <ProductModal about={about} title={title} image={image}>
        <span className="card__link">see more..</span>
      </ProductModal>
    </div>
  );
};

export default Card;
