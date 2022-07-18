/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { format } from 'date-fns';
import { ButtonRadio, Content, Footer, Header } from './styles';
import ModalAvaliacaoSegundStep from '../ModalSegundStep';
import star from '../../../assets/star.svg';

interface ModalProps {
  image: string;
  title: string;
  subtitle: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  idItem: string;
  date: string;
}
Modal.setAppElement('#root');

const ModalAvaliacao: React.FC<ModalProps> = ({
  image,
  setVisible,
  title,
  subtitle,
  visible,
  idItem,
  date,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [selectFirstDiv, setSelectFistDiv] = useState(false);
  const [selectSegundDiv, setSelectSegundDiv] = useState(false);

  const [visibleNextModal, setVisibleNextModal] = useState(false);

  const closeModal = () => {
    setVisible(false);
    setSelectSegundDiv(false);
    setSelectFistDiv(false);
    reset();
  };

  const openNextModal = () => {
    setVisibleNextModal(true);
    closeModal();
  };

  const handleNextStep = async (data: FieldValues) => {
    const { respostaFistPart } = data;

    if (respostaFistPart === 'sim') {
      openNextModal();
    } else if (respostaFistPart === 'nao') {
      closeModal();
    }
    console.log(respostaFistPart);
    reset();
  };

  return (
    <>
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
        <form onSubmit={handleSubmit(handleNextStep)}>
          <Header>
            <img src={image} alt="iconeModal" />
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </Header>

          <Content select={selectFirstDiv}>
            <p>
              {`Identificamos que você acessou o site do Parceiro Tal no dia
              ${date}. Você pode nos dizer se utilizou um benefício na ocasião?`}
            </p>
            <ButtonRadio
              select={selectFirstDiv}
              onClick={() => {
                setSelectFistDiv(true);
                setSelectSegundDiv(false);
              }}
            >
              <label htmlFor="radioYes">
                <input
                  type="radio"
                  id="radioYes"
                  {...register('respostaFistPart')}
                  value="sim"
                />
                Sim. Eu utilizei um benefício
              </label>
            </ButtonRadio>
            <ButtonRadio
              select={selectSegundDiv}
              onClick={() => {
                setSelectSegundDiv(true);
                setSelectFistDiv(false);
              }}
            >
              <label htmlFor="radioNo">
                <input
                  type="radio"
                  id="radioNo"
                  {...register('respostaFistPart')}
                  value="nao"
                />
                Não. Eu não utilizei um benefício
              </label>
            </ButtonRadio>
          </Content>
          <Footer>
            <button onClick={() => closeModal()} className="button-primary">
              Responder depois
            </button>
            <button className="button-segundary">Salvar resposta</button>
          </Footer>
        </form>
      </Modal>

      <ModalAvaliacaoSegundStep
        title="Que bom que você"
        subtitle="aproveitou este benefício!"
        image={star}
        setVisible={setVisibleNextModal}
        visible={visibleNextModal}
        idItem={idItem}
      />
    </>
  );
};

export default ModalAvaliacao;
