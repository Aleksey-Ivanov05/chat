import React from 'react';

interface Props {
  author: string;
  message: string;
  datetime: string;
}

const Message: React.FC<Props> = ({author, message, datetime}) => {
  return (
    <div className="p-3 mb-2 ms-5 w-50 bg-secondary text-white mb-3 rounded-3 position-relative">
      <p className="fw-bold m-0">{author}</p><p className="m-0">{message}</p>
      <p className="m-0 position-absolute bottom-0 end-0 pe-1 pb-1">{datetime}</p>
    </div>
  );
};

export default Message;