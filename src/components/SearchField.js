import React, { useState } from 'react';

const SearchField = (props) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(value);
        }}
      >
        <label htmlFor=''>github.com/</label>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Enter Github Username'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchField;
