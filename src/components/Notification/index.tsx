/* eslint-disable react/button-has-type */
import { formatDistance, subMinutes } from 'date-fns';
import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { IoMdNotificationsOutline } from 'react-icons/io';
import PresenteAssets from '../../assets/PresenteAssets.svg';
import { useAuth } from '../../context/auth';
import { useNotification } from '../../context/notification';
import ModalAvaliacao from '../Modal/ModalFirstStep';
import { Container, Item, NotificationList } from './styles';

interface NotifcationProps {
  qnt: number;
}

const Notification: React.FC<NotifcationProps> = ({ qnt }) => {
  const { user } = useAuth().data;
  const [visibleNotification, setVisibleNotification] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [idItemSelect, setIdItemSelect] = useState('');
  const [horaItemSelect, setHoraItemSelect] = useState({} as Date);

  const { qntNotification, data } = useNotification();

  const convertDate = (date: Date) => {
    return formatDistance(subMinutes(date, 0), date, { addSuffix: true });
  };

  return (
    <>
      <Container qnt={qntNotification}>
        {qntNotification > 0 && <span> {qntNotification} </span>}

        <button onClick={() => setVisibleNotification(!visibleNotification)}>
          <IoMdNotificationsOutline size={22} color="#5F6368" />
        </button>

        <NotificationList visible={visibleNotification}>
          <Scrollbars style={{ height: 300 }}>
            {qntNotification > 0 ? (
              data.map((itemNotification) => {
                return (
                  <Item unread={itemNotification.unread}>
                    <p>{itemNotification.message} </p>
                    <time>{convertDate(itemNotification.hora as Date)}</time>
                    <button
                      onClick={() => {
                        setIdItemSelect(itemNotification.id);
                        setVisibleModal(true);
                        setVisibleNotification(false);
                        setHoraItemSelect(itemNotification.hora as Date);
                      }}
                    >
                      AVALIAR
                    </button>
                  </Item>
                );
              })
            ) : (
              <p> ainda não tem item </p>
            )}
          </Scrollbars>
        </NotificationList>
      </Container>
      <ModalAvaliacao
        image={PresenteAssets}
        title="Oba!"
        subtitle={`${user.name}, você usou um benefício?`}
        setVisible={setVisibleModal}
        visible={visibleModal}
        idItem={idItemSelect}
        hora={horaItemSelect}
      />
    </>
  );
};

export default Notification;
