import React, { useEffect, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import logoEmpresa from '../../assets/logoEmpresa.svg';
import Card from '../../components/Card';
import { useAuth } from '../../context/auth';
import api from '../../services/api';
import { Cards, Container, Header, InfoUser, Shared } from './styles';

import Notification from '../../components/Notification';

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
    data: Array<BenefitsDataType>;
  };
}

const Benefits: React.FC = () => {
  const {
    data: { user, token },
  } = useAuth();
  const [benefits, setBenefits] = useState<Array<BenefitsDataType>>([]);

  const loadBenefits = async () => {
    const response = await api.post<IBenefits>(
      `incentive/search?page=${1}&qtd=${10}&paginable=${true}`,
    );
    api.defaults.headers.common.Authorization = `Bearer ${token}}`;

    setBenefits([...response.data.data.data]);
  };

  useEffect(() => {
    loadBenefits();
  }, []);

  return (
    <Container>
      <Header>
        <img src={logoEmpresa} alt="foto do header" />
        <Shared>
          <input type="search" placeholder="Buscar" />
          <select>
            <option>Espírito Santo</option>
            <option>Ceará</option>
          </select>
          <a href="#a">Ajuda</a>
        </Shared>
        <InfoUser>
          <span>Olá {user.name}</span>

          <Notification qnt={1} />

          <div>
            <a href="#a">
              <BiUserCircle size={22} color="#5F6368" />
            </a>
          </div>
        </InfoUser>
      </Header>

      <Cards>
        {benefits.map((data: BenefitsDataType) => (
          <Card
            id={data.id}
            image={data.image}
            discount={data.discount}
            title={data.title}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default Benefits;
