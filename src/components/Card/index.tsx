/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import { useAuth } from '../../context/auth';
import { useNotification } from '../../context/notification';
import { CardArea, CardItem } from './style';

interface BenefitsDataType {
  id: string;
  title: string;
  discount: string;
  image: string;
}

const Card: React.FC<BenefitsDataType> = ({ id, image, discount, title }) => {
  const { addItem } = useNotification();
  const { data } = useAuth();

  const useBenefit = useCallback(() => {
    const worn = data.user.name;
    const hora = new Date();
    const message = 'Avalie o desconto que você utilizou';
    addItem({ id, message, worn, hora, unread: true });
  }, [addItem, data.user.name, id]);

  return (
    <CardItem key={id}>
      <img src={image} alt="" />

      <CardArea>
        <strong> {title}</strong>
        <p> {discount} </p>
      </CardArea>
      <button type="submit" onClick={() => useBenefit()}>
        {' '}
        Usar benefício{' '}
      </button>
    </CardItem>
  );
};

export default Card;
