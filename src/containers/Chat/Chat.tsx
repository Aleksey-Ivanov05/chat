import React, {useEffect, useState} from 'react';
import Form from "../../components/Form/Form";
import Message from "../../components/Message/Message";
import {MessageType} from "../../types";

const Chat = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const url = 'http://146.185.154.90:8000/messages';

  const run = async () => {
    const response = await fetch(url);

    if (response.ok) {
      const messages: MessageType[] = await response.json();
      const newMessages = messages.map(message => ({
        ...message,
        datetime: message.datetime.slice(0, -5)
      }));

      setMessages(newMessages);
    }
  }

  useEffect(() => {
    run().catch(console.error);
  }, []);


  useEffect(() => {
    let lastDate = '';

    setInterval(async () => {
      let dateUrl = url;

      if (lastDate) {
        dateUrl += '?datetime=' + lastDate;
      }

      const response = await fetch(dateUrl);
      const messages: MessageType[] = await response.json();

      if (messages.length > 0) {
        lastDate = messages[messages.length - 1].datetime;
      }
      const newMessages = messages.map(message => ({
        ...message,
        datetime: message.datetime.slice(0, -5)
      }));

      console.log('In interval', newMessages);

      for (const message of newMessages) {
        setMessages(prev => ([
          ...prev, message
        ]));
      }
    }, 3000)
  }, [])

  console.log('Full', messages);

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