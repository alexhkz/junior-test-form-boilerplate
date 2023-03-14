import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { CardImage, CardTitle } from '../Card/styles';

import { Button, Error, Input, Label, P, StyledForm } from './styles';

export const FormContext = React.createContext();

export const Form = () => {
  const [searchValue, setSearchValue] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    //  const NewCard = (photoName, photoUrl) => {
    //    return (
    //      <div className="card">
    //        <img src={photoUrl} alt={photoName} />
    //        <h2>{photoName}</h2>
    //        <CardTitle>{photoName}</CardTitle>
    //        <CardImage src={photoUrl} alt="Unsplash photo" />
    //      </div>
    //    );
    //  };

    //  setSearchValue((prevCards) => [...prevCards, NewCard]);
    reset();
  };

  const value = {};

  return (
    <FormContext.Provider value={searchValue}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Название фото
          <Input
            placeholder="Введите название"
            {...register('photoName', {
              required: 'Поле обязательно к заполнению',
            })}
          />
        </Label>
        {errors?.photoName && <P>{errors?.photoName?.message || 'Ошибка'}</P>}
        <Label>
          Ссылка на фото
          <Input
            placeholder="Введите url адрес"
            {...register('photoUrl', {
              required: 'Поле обязательно к заполнению',
            })}
          />
        </Label>
        <input type="submit" disabled={!isValid} />
      </StyledForm>
    </FormContext.Provider>
  );
};
