import React, { useEffect, useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import logoEmpresa from '../../assets/logoEmpresa.svg';
import Card from '../../components/Card';
import { useAuth } from '../../context/auth';
import api from '../../services/api';
import {
  Cards,
  Container,
  Header,
  InfoUser,
  Shared,
  PagenateController,
} from './styles';

import Notification from '../../components/Notification';
import Logout from '../../components/Logout';

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

  const [maxItemPaginate, setMaxItemPaginate] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const loadBenefits = async () => {
    const response = await api.post<IBenefits>(
      `incentive/search?page=${currentPage}&qtd=${4}&paginable=${true}`,
    );
    api.defaults.headers.common.Authorization = `Bearer ${token}}`;
    setMaxItemPaginate(response.data.data.totalCount);
    setBenefits([...response.data.data.data]);
  };

  const nextPage = () => {
    if (currentPage + 1 <= maxItemPaginate) {
      setCurrentPage(currentPage + 1);
    }
  };

  const backPage = () => {
    if (currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    loadBenefits();
  }, [currentPage]);

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
          <a href="#ajuda">Ajuda</a>
        </Shared>
        <InfoUser>
          <span>Olá {user.name}</span>

          <Notification qnt={1} />
          <Logout />
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

      <PagenateController>
        <button type="submit" onClick={() => backPage()}>
          <FaArrowCircleLeft size={32} />
        </button>
        <button type="submit" onClick={() => nextPage()}>
          <FaArrowCircleRight size={32} />
        </button>
      </PagenateController>
    </Container>
  );
};

export default Benefits;
