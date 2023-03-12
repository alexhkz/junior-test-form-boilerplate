import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { PhotoContext } from '../../App';

import { Button, Error, Input, Label, P, StyledForm } from './styles';

export const Form = () => {
  console.log(useContext(PhotoContext));

  const [inputValue, setInputValue] = useState('');
  const addCards = useContext(PhotoContext);

  const getInput = () => {
    setInputValue(getValues('photoUrl'));
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${inputValue}&count=1&client_id=bnaNhON20Sbnx8PG2rRcrMhTNTURZdzW2_PEgU86Un4`,
    );
    const data = await response.json();

    addCards.addCards(data.results[0].urls.regular);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Название фото
        <Input
          {...register('photoName', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </Label>
      {errors?.photoName && <P>{errors?.photoName?.message || 'Ошибка'}</P>}
      <Label>
        Ссылка на фото
        <Input
          {...register('photoUrl', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </Label>
      <Button onClick={() => getInput()} type="submit" disabled={!isValid}>
        Добавить фото
      </Button>
    </StyledForm>
  );
};
