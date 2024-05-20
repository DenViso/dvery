// DorsMain.jsx
import React, { useState } from 'react';

// імпорт вашої бази даних
import base from "../data/base.js";

// Компонент модального вікна
const Modal = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>&times;</span>
        <img src={item.img} alt="" />
        <p>Ціна: {item.price}</p>
        <p>Деталі: {item.detail}</p>
        <p>Розмір: {item.size}</p>
        <p>Колір: {item.color}</p>
      </div>
    </div>
  );
};

export const DorsMain = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className='dors-sec'>
      {base && base.map((item) => (
        <div key={item.id} onClick={() => openModal(item)}>
          <img src={item.img} alt="" />
          <p>Ціна: {item.price}</p>
          {/* <p>Деталі: {item.detail}</p>
          <p>Розмір: {item.size}</p>
          <p>Колір: {item.color}</p> */}
        </div>
      ))}
      <Modal item={selectedItem} onClose={closeModal} />
    </div>
  );
}

// export default DorsMain;
