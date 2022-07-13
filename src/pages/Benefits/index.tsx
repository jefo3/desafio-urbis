import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import api from '../../services/api';

interface BenefitsDataType {
  id: string;
  title: string;
  description: string;
  isPermanent: boolean;
  isVoucher: boolean;
  isOnline: boolean;
  status: boolean;
  discount: string;
  image: string;
  url: string;
  establishmentId: string;
}

interface IBenefits {
  statusCode: number;
	message: string;
	data: {
		totalCount: number;
		page: number;
		limit: number;
		data: [BenefitsDataType];
  }
}

const Benefits: React.FC = () => {
  const {data :{user, token}} = useAuth();
  const [benefits, setBenefits] = useState([{} as BenefitsDataType]);

  const loadBenefits = async () => {

    const response = await api.post<IBenefits>(`incentive/search?page=${1}&qtd=${10}&paginable=${true}`);
    api.defaults.headers.common.Authorization = `Bearer ${token}}`;

    setBenefits([...response.data.data.data])

  }

  useEffect(() => {
    loadBenefits()
  }, [])

  return (

    <div>
        <h1>Bem vindo {user.name}</h1>
      <ul>
        {benefits.map((data: BenefitsDataType) => (
          <li key={data.id}>
            <strong> { data.title }</strong>
            <img src={data.image}  />
            <p> { data.description } </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;
