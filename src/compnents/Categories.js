import { FormSelect } from "shards-react";
import React from "react";

function Categories({ categories, selectedCategorie, updateSelectCategory }) {

  function handleSelectChange(e) {
    const {name, value} = e.target
    console.log(name);
    updateSelectCategory(value);
  }

  return (
    <div>
      <FormSelect onChange={(e) => handleSelectChange(e)} name="plantCategory">
        {categories.map((category, index) => (
          <option  value={category} key={category + index}>
            {category}
          </option>
        ))}
      </FormSelect>
      <div className="d-none d-sm-block">{selectedCategorie}</div>
    </div>
  );
}

export default Categories;
