import React from 'react';

const Form = () => {
  return (
    <form className="py-3 px-5 border-bottom border-3 mb-5">
      <div className="input-group mb-3">
        <span className="input-group-text">Name</span>
        <input type="text" className="form-control" name="name"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Message</span>
        <input type="text" className="form-control" name="message"/>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  );
};

export default Form;