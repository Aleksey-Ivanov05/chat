import React from 'react';
import Form from "../../components/Form/Form";
import Message from "../../components/Message/Message";

const Chat = () => {
  return (
    <>
      <Form/>
      <div>
        <Message author={'Somebody'} message={'Something'} datetime={'1213314223523'}/>
        <Message author={'Somebody'} message={'Something'} datetime={'1213314223523'}/>
        <Message author={'Somebody'} message={'Something'} datetime={'1213314223523'}/>
      </div>
    </>
  );
};

export default Chat;