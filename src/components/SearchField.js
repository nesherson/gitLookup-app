import React from 'react';

export const SearchField = ({ handleInputChange, inputValue }) => {
  const handleChange = (e) => {
    handleInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>github.com/</label>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Enter Github Username'
          value={inputValue}
          onChange={handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};
