import { useContext, useEffect, useState } from 'react';
import dateFormat, { i18n } from 'dateformat';
import axios from 'axios';

import { PhotoContext } from '../../App';
import { months } from '../../utils/months';

import {
  CardDelete,
  CardImage,
  CardTitle,
  CardWrapper,
  ImageListWrapper,
  MainWrapper,
  Ul,
} from './styles';

export const ImageList = () => {
  const [photos, setPhotos] = useState([]);
  const newCards = useContext(PhotoContext);

  console.log(newCards);
  i18n.monthNames = months;

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        'https://api.unsplash.com/photos/?client_id=bnaNhON20Sbnx8PG2rRcrMhTNTURZdzW2_PEgU86Un4&per_page=5&orientation=landscape',
      );

      newCards.addCards(response.data);
      console.log(response.data);
    };

    fetchPhotos();
  }, []);

  const deletePhoto = (id) => {
    const newPhotos = photos.filter((photo) => photo.id !== id);

    setPhotos([newPhotos]);
  };

  return (
    <MainWrapper>
      {newCards.cards &&
        newCards.cards.map((photo, obj) => (
          <CardWrapper key={photo.id}>
            <CardDelete onClick={() => deletePhoto(photo.id)}>
              <CardTitle>{photo.name || photo.alt_description}</CardTitle>
              <CardImage src={photo.urls.small} alt="Unsplash photo" />
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
        ))}
    </MainWrapper>
  );
};
