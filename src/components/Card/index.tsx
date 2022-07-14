import React from 'react';
import { CardArea, CardItem } from './style';

interface BenefitsDataType {
  id: string;
  title: string;
  discount: string;
  image: string;
}

const Card: React.FC<BenefitsDataType> = ({ id, image, discount, title }) => {
  return (
    <CardItem key={id}>
      <img src={image} />

      <CardArea>
        <strong> {title}</strong>
        <p> {discount} </p>
      </CardArea>
      <button> Usar benefício </button>
    </CardItem>
  );
};

export default Card;
