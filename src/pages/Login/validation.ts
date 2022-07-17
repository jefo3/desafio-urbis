import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um email válido')
    .required('Email é obrigatorio'),
  password: yup.string().min(6, 'Senha com minimo 6 caracteres'),
});

export default schema;
