import React, {useEffect, useState} from 'react';
import Form from "../../components/Form/Form";
import Message from "../../components/Message/Message";
import {MessageType} from "../../types";

const Chat = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    let lastDate = '';

    setInterval(async () => {
      let dateUrl = 'http://146.185.154.90:8000/messages';

      if (lastDate) {
        dateUrl += '?datetime=' + lastDate;
      }

      const response = await fetch(dateUrl);
      const messagesResponse: MessageType[] = await response.json();

      const newMessages = messagesResponse.map(message => ({
        ...message,
        datetime: message.datetime.slice(0, -5)
      }));


      if (messagesResponse.length > 0) {
        lastDate = messagesResponse[messagesResponse.length - 1].datetime;
        setMessages(prev => ([
          ...prev, ...newMessages
        ]));
      }
    }, 3000)
  }, [])

  return (
    <>
      <Form/>
      <div>
        {messages.map(message => (
          <Message key={message._id} author={message.author} message={message.message} datetime={message.datetime}/>
        ))}
      </div>
    </>
  );
};

export default Chat;