import React from 'react';
import '../App.css';
import { MdClose } from 'react-icons/md';

const Formtable = ({ handleFormSubmit, handleInputChange, handleClose, rest }) => {
  return (
    <div className="addContainer">
      <form onSubmit={handleFormSubmit}>
        <div className="close-btn" onClick={handleClose}>
          <MdClose />
        </div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleInputChange} value={rest.name} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleInputChange} value={rest.email} />

        <label htmlFor="mobile">Mobile:</label>
        <input type="number" id="mobile" name="mobile" onChange={handleInputChange} value={rest.mobile} />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formtable;
