/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import ModalAvaliacaoFinalStep from '../ModalFinalStep';
import { Evaluation, Content, Footer, Header, ItemEvaluation } from './styles';
import sucess from '../../../assets/sucess.svg';

interface ModalProps {
  image: string;
  title: string;
  subtitle: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
Modal.setAppElement('#root');

const ModalAvaliacaoSegundStep: React.FC<ModalProps> = ({
  image,
  setVisible,
  title,
  subtitle,
  visible,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [idItem, setIdItem] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);

  const [visibleNextModal, setVisibleNextModal] = useState(false);

  const closeModal = () => {
    setVisible(false);
    setSelectedItem(0);
    setIdItem(0);
    reset();
  };

  const openNextModal = () => {
    setVisibleNextModal(true);
    closeModal();
  };

  const handleNextStep = async (data: FieldValues) => {
    const { relevancia } = data;

    if (relevancia) {
      console.log('next modal');
      openNextModal();
    }

    console.log(data);
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

          <Content>
            <p>
              Esse benefício foi relevante para que você permanecesse como
              cliente?
            </p>

            <Evaluation
              selectedItem={selectedItem}
              idItem={idItem}
              onMouseOut={() => setIdItem(0)}
            >
              <ItemEvaluation
                onMouseOver={() => setIdItem(1)}
                onClick={() => setSelectedItem(1)}
              >
                <label htmlFor="Irrelevante">
                  <input
                    type="radio"
                    id="Irrelevante"
                    {...register('relevancia')}
                    value="Irrelevante"
                  />
                  Irrelevante
                </label>
              </ItemEvaluation>
              <ItemEvaluation
                onMouseOver={() => setIdItem(2)}
                onClick={() => setSelectedItem(2)}
              >
                <label htmlFor="Pouco_relevante">
                  <input
                    type="radio"
                    id="Pouco_relevante"
                    {...register('relevancia')}
                    value="Pouco_relevante"
                  />
                  Pouco relevante
                </label>
              </ItemEvaluation>
              <ItemEvaluation
                onMouseOver={() => setIdItem(3)}
                onClick={() => setSelectedItem(3)}
              >
                <label htmlFor="Indiferente">
                  <input
                    type="radio"
                    id="Indiferente"
                    {...register('relevancia')}
                    value="Indiferente"
                  />
                  Indiferente
                </label>
              </ItemEvaluation>
              <ItemEvaluation
                onMouseOver={() => setIdItem(4)}
                onClick={() => setSelectedItem(4)}
              >
                <label htmlFor="Relevante">
                  <input
                    type="radio"
                    id="Relevante"
                    {...register('relevancia')}
                    value="Relevante"
                  />
                  Relevante
                </label>
              </ItemEvaluation>
              <ItemEvaluation
                onMouseOver={() => setIdItem(5)}
                onClick={() => setSelectedItem(5)}
              >
                <label htmlFor="Muito_relevante">
                  <input
                    type="radio"
                    id="Muito_relevante"
                    {...register('relevancia')}
                    value="Muito_relevante"
                  />
                  Muito relevante
                </label>
              </ItemEvaluation>
            </Evaluation>

            <span>Gostaria de deixar algum comentário? (opcional)</span>
            <textarea placeholder="Digite aqui" {...register('texto')} />
          </Content>
          <Footer>
            <button onClick={() => closeModal()} className="button-primary">
              Responder depois
            </button>
            <button className="button-segundary">Salvar resposta</button>
          </Footer>
        </form>
      </Modal>
      <ModalAvaliacaoFinalStep
        image={sucess}
        setVisible={setVisibleNextModal}
        visible={visibleNextModal}
        title="Sucesso!"
      />
    </>
  );
};

export default ModalAvaliacaoSegundStep;
