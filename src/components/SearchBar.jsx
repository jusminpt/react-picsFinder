import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

function SearchBar() {
  //set state
  const [term, setTerm] = useState('');

  //callback function
  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(term);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Field>
        <label>Image serach</label>
        <input
          type="text"
          //   onChange={(e) => console.log(e.target.value)}
          onChange={handleInputChange}
          value={term}
          placeholder="Start searching ..."
        />
      </Form.Field>
    </Form>
  );
}

export default SearchBar;