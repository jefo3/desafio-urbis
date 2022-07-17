/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import schema from './validation';
import { Banner, Container, Content } from './styles';

import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const handleLogin = async (data: FieldValues) => {
    const { email, password } = data;
    const whitelabelId = '77';

    try {
      await login({ email, password, whitelabelId });
      navigate('/beneficios');
    } catch (err) {
      toast.error('Email/Senha incorreto');
    }
  };
  return (
    <>
      <Container>
        <Banner />

        <Content>
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1>Faça seu login</h1>
            <Controller
              control={control}
              render={({ field }) => (
                <>
                  <input type="email" placeholder="Email" {...field} />

                  {errors.email?.message}
                </>
              )}
              name="email"
            />
            <Controller
              control={control}
              render={({ field }) => (
                <>
                  <input type="password" placeholder="Senha" {...field} />

                  {errors.password?.message}
                </>
              )}
              name="password"
            />

            <button type="submit">Logar</button>
          </form>
        </Content>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Login;
