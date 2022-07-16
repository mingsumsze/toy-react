import React, { useState } from "react";


function Form() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('lime');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleChange2(e) {
    setValue2(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value, value2);
    setValue('');
    setValue2('grapefruit');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange}/>
        <input type="text" value={"cannot change"} readOnly/>
      </label>
      <select value={value2} onChange={handleChange2}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}


export default Form;