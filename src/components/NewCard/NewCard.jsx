import { CardImage, CardTitle } from '../Card/styles';

const NewCard = ({ product }) => {
  return (
    <div className="card">
      <CardTitle>{product.photoName}</CardTitle>
      <CardImage src={product.photoUrl} alt="Unsplash photo" />
    </div>
  );
};

export default NewCard;
