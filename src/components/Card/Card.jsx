import dateFormat, { i18n } from 'dateformat';

import { months } from '../../utils/months';

import { CardDelete, CardImage, CardTitle, CardWrapper } from './styles';

const Card = ({ data, obj, deletePhoto, photoName, photoUrl }) => {
  i18n.monthNames = months;

  return (
    <CardWrapper key={data.id}>
      <CardDelete onClick={() => deletePhoto(data.id)}>
        <CardTitle>{data.name || data.alt_description}</CardTitle>
        <CardImage src={data.urls.small} alt="Unsplash photo" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M14 5.5l-1.5-1.5-3.5 3.5-3.5-3.5-1.5 1.5 3.5 3.5-3.5 3.5 1.5 1.5 3.5-3.5 3.5 3.5 1.5-1.5-3.5-3.5 3.5-3.5z" />
        </svg>
        <div>
          Дата добавления:
          <br />
          {dateFormat(obj.created_at, 'd mmmm yyyy г.')}
        </div>
      </CardDelete>
    </CardWrapper>
  );
};

export default Card;
