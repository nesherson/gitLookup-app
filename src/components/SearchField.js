import React from 'react';

const SearchField = () => {
  return (
    <div class='searchField'>
      <form>
        <label htmlFor=''>github.com/</label>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Enter Github Username'
        />
        <input type='submit' value='search' />
      </form>
    </div>
  );
};

export default SearchField;
