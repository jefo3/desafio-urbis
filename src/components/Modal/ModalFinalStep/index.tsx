/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React from 'react';
import Modal from 'react-modal';
import { useNotification } from '../../../context/notification';
import { Content, Footer, Header } from './styles';

interface ModalProps {
  image: string;
  title: string;
  visible: boolean;
  idItem: string;
  setVisible: (visible: boolean) => void;
}
Modal.setAppElement('#root');

const ModalAvaliacaoFinalStep: React.FC<ModalProps> = ({
  image,
  setVisible,
  title,
  visible,
  idItem,
}) => {
  const { removeItem } = useNotification();
  const closeModal = () => {
    const id = idItem;
    removeItem({ id });
    setVisible(false);
  };

  return (
    <Modal
      isOpen={visible}
      style={{
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, 0.0)',
        },
        content: {
          maxWidth: '600px',
          width: '100%',
          height: 'auto',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#F5F5F5',
          boxShadow: '10px 10px 10px 3px rgba(0, 0, 0, 0.25)',
        },
      }}
    >
      <Header>
        <img src={image} alt="iconeModal" />
        <h1>{title}</h1>
      </Header>

      <Content>
        <p>
          Sua resposta foi resgistrada com sucesso. Agradecemos muito por você
          ter dedicado esse tempo para nos ajudar a tornar nosso clube cada vez
          melhor.
        </p>
      </Content>
      <Footer>
        <button onClick={() => closeModal()}>Fechar</button>
      </Footer>
    </Modal>
  );
};

export default ModalAvaliacaoFinalStep;
