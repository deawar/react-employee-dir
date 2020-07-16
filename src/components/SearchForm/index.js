import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        {/* TODO Change htmlFor="employee" */}
        <label htmlFor="breed">Employee Name:</label> 
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed" {/* TODO change name=employee*/}
          list="breeds" {/* TODO change list=employee*/}
          type="text"
          className="form-control"
          placeholder="Type in an employee name to begin"
          id="breed" {/* TODO change id=employee*/}
        />
        <datalist id="breeds"> {/* TODO change id=employee*/}
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />{/* TODO change id=employee*/}
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
