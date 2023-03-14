import { useContext, useState } from 'react';

import { PhotoContext } from '../../App';
import { months } from '../../utils/months';
import Card from '../Card/Card';
import { FormContext } from '../Form/Form';

import { MainWrapper } from './styles';

export const ImageList = () => {
  const { response, isLoading } = useContext(PhotoContext);
  const [cards, setCards] = useState([]);

  console.log(response);

  //   const deletePhoto = (id) => {
  //     const updatedCards = response.filter((card) => card.id !== id);

  //     setCards(updatedCards);
  //   };

  //   const addCards = (card) => {
  //     setCards([...cards, card]);
  //   };

  return (
    <MainWrapper>
      {response.map((data, key, obj, deletePhoto) => (
        <Card data={data} key={key} obj={obj} deletePhoto={deletePhoto} />
      ))}
    </MainWrapper>
  );
};
