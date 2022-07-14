import React, { useEffect, useState } from 'react';
import MenuNotificações from '../../assets/MenuNotificações.svg';
import Card from '../../components/Card';
import { useAuth } from '../../context/auth';
import api from '../../services/api';
import { Cards, Container, Header, Notification } from './styles';

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
        <img alt="foto do header" />
        <div>
          <input type="search" placeholder="Buscar" />
          <select>
            <option>Esperito santo</option>
            <option>Ceara</option>
          </select>
          <a href="#a">Ajuda</a>
        </div>
        <div>
          <span>Olá {user.name}</span>
          <Notification qnt={0}>
            {false && <span> 1 </span>}
            <a href="#a">
              {' '}
              <img
                src={MenuNotificações}
                height="48px"
                width="48px"
                alt=""
              />{' '}
            </a>
          </Notification>
        </div>
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
