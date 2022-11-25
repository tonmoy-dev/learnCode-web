import { Modal } from 'antd';
import React, { useState } from 'react';
import SignIn from './SignIn';

const AuthModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
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
        onCancel={handleCancel}
      >
              <SignIn/>
          </Modal>
    </>
  );
};

export default AuthModal;
