import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import SearchPhotos from '../SearchPhotos/index';

import { Button, Error, Input, Label, P, StyledForm } from './styles';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
      <input type="submit" disabled={!isValid} />
    </StyledForm>
  );
};
