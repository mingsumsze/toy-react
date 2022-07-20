import React, { useState } from "react";
import FormStyle from "./styles/form.styled";
import ThemeContext from "./themeContext";


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
    <ThemeContext.Consumer>
      {({contextTheme}) =>
        <FormStyle onSubmit={handleSubmit} contextTheme={contextTheme}>
          <label>
            <input type="text" value={value} onChange={handleChange} placeholder="Name"/>
            {/* <input type="text" value={"cannot change"} readOnly/> */}
          </label>
          <select value={value2} onChange={handleChange2}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <button type="submit">Submit</button>
        </FormStyle>
      }
    </ThemeContext.Consumer>
  );
}


export default Form;