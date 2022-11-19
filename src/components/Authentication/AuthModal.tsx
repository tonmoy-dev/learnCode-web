import { Modal } from 'antd';
import React, { useState } from 'react';
import SignIn from './SignIn';

const AuthModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <span onClick={showModal}>
        Login
      </span>
      <Modal
              title="Title"
              centered
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
              <p>{modalText}</p>
              <SignIn/>
          </Modal>
    </>
  );
};

export default AuthModal;