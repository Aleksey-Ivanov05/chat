import React, {useState} from 'react';

const Form = () => {
  const [message, setMessage] = useState({
    author: '',
    message: '',
  });

  const url = 'http://146.185.154.90:8000/messages';

  const onFormElementChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setMessage(prev => ({...prev, [name]: value}));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.author && message.message) {
      const body = new URLSearchParams();
      body.append('message', message.message);
      body.append('author', message.author);

      await fetch(url, {method: 'POST', body});
    }
  }

  return (
    <form className="py-3 px-5 border-bottom border-3 mb-5" onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text">Name</span>
        <input type="text" className="form-control" name="author" value={message.author} onChange={onFormElementChange}/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Message</span>
        <input type="text" className="form-control" name="message" value={message.message} onChange={onFormElementChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  );
};

export default Form;