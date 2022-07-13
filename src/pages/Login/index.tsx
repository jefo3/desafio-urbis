/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { useAuth } from '../../context/auth';
import { Container, Banner, Content } from './styles';
import { useNavigate } from "react-router-dom";
import api from '../../services/api';

const Login: React.FC = () => {
  const { login } = useAuth();
  const { control, handleSubmit } = useForm();

  let navigate = useNavigate();

  const  handleLogin = async (data: FieldValues) => {
    const { email, password } = data;
    const whitelabelId = '77';

    await login({ email, password, whitelabelId });

    navigate("/beneficios")
  }
  return (
    <Container>
      <Banner>
        <h1>Atraia e Fidelize mais Clientes</h1>
        <h2>Crie o Clube de Vantagens da sua empresa</h2>
      </Banner>

      <Content>
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Faça seu login</h1>
          <Controller
            control={control}
            render={({ field }) => (
              <input type="email" placeholder="Email" {...field} />
            )}
            name="email"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <input type="password" placeholder="Senha" {...field} />
            )}
            name="password"
          />

          <button type="submit">Logar</button>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
function createBrowserHistory() {
  throw new Error('Function not implemented.');
}

